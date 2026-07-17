import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import MenuItem from '@/models/MenuItem';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams.get('category');
    const featured = searchParams.get('featured');

    // Build query
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: Record<string, any> = { isAvailable: true };

    if (featured === 'true') {
      query.isFeatured = true;
    }

    let items;

    if (categorySlug) {
      // Join with category to filter by slug
      const { default: Category } = await import('@/models/Category');
      const cat = await Category.findOne({ slug: categorySlug, isActive: true }).lean();
      if (!cat) {
        return NextResponse.json({ items: [] });
      }
      query.category = (cat as { _id: unknown })._id;
      items = await MenuItem.find(query)
        .populate('category')
        .sort({ sortOrder: 1, name: 1 })
        .lean();
    } else {
      items = await MenuItem.find(query)
        .populate('category')
        .sort({ sortOrder: 1, name: 1 })
        .lean();
    }

    return NextResponse.json({ items });
  } catch (error) {
    console.error('GET /api/menu-items error:', error);
    return NextResponse.json({ error: 'Failed to fetch menu items' }, { status: 500 });
  }
}
