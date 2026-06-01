"use client";
import { useEffect, useState } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => { fetch("/api/admin/users").then(r => r.json()).then(setUsers); }, []);

  const toggleBlock = async (user: any) => {
    await fetch(`/api/admin/users/${user._id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ isBlocked: !user.isBlocked }) });
    setUsers(prev => prev.map(u => u._id === user._id ? { ...u, isBlocked: !u.isBlocked } : u));
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-black text-[#1a1a1a] mb-6">Users</h1>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>{["Name", "Email", "Role", "Status", "Joined", "Actions"].map(h => <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600">{h}</th>)}</tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u._id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{u.name}</td>
                <td className="px-4 py-3 text-gray-600">{u.email}</td>
                <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${u.role === "admin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>{u.role}</span></td>
                <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${u.isBlocked ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"}`}>{u.isBlocked ? "Blocked" : "Active"}</span></td>
                <td className="px-4 py-3 text-gray-400 text-xs">{new Date(u.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  {u.role !== "admin" && (
                    <button onClick={() => toggleBlock(u)} className={`text-xs font-semibold ${u.isBlocked ? "text-green-600 hover:text-green-800" : "text-red-500 hover:text-red-700"}`}>
                      {u.isBlocked ? "Unblock" : "Block"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
