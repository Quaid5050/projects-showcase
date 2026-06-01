import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import MenuItem from "@/models/MenuItem";
import User from "@/models/User";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "admin")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  const [totalOrders, paidOrders, totalRevenue, menuCount, userCount] = await Promise.all([
    Order.countDocuments(),
    Order.countDocuments({ paymentStatus: "paid" }),
    Order.aggregate([{ $match: { paymentStatus: "paid" } }, { $group: { _id: null, total: { $sum: "$total" } } }]),
    MenuItem.countDocuments(),
    User.countDocuments({ role: "user" }),
  ]);

  const recentOrders = await Order.find({ paymentStatus: "paid" })
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();

  return NextResponse.json({
    totalOrders,
    paidOrders,
    totalRevenue: totalRevenue[0]?.total || 0,
    menuCount,
    userCount,
    recentOrders,
  });
}
