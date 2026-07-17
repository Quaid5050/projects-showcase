import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: "grid" },
  { name: "Services", path: "/admin/services", icon: "tag" },
  { name: "Contact Inquiries", path: "/admin/contacts", icon: "mail" },
  { name: "Bookings", path: "/admin/bookings", icon: "calendar" },
  { name: "Available Seats", path: "/admin/slots", icon: "seat" },
  { name: "Tax Intake Forms", path: "/admin/tax-intake", icon: "mail" },
];

const NavIcon = ({ type }) => {
  const icons = {
    grid: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />,
    tag: <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />,
    mail: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
    calendar: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />,
    seat: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 6.75a2.25 2.25 0 00-2.25 2.25v6a2.25 2.25 0 002.25 2.25M8.25 6.75V4.5m7.5 2.25a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25m0-10.5V4.5M6 17.25v2.25m12-2.25v2.25M6 12h12" />,
  };
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      {icons[type]}
    </svg>
  );
};

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { admin, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate("/admin/login"); };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-amber-900 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex items-center gap-3 px-6 py-5 border-b border-amber-800">
          <div className="w-9 h-9 bg-amber-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold font-serif">R</span>
          </div>
          <div>
            <div className="text-white font-bold text-sm font-serif">Ray Stephens</div>
            <div className="text-amber-400 text-xs">Admin Panel</div>
          </div>
        </div>

        <nav className="px-3 py-4 space-y-1">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.path
                  ? "bg-amber-800 text-white"
                  : "text-amber-200 hover:bg-amber-800 hover:text-white"
              }`}
            >
              <NavIcon type={item.icon} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-amber-800">
          <div className="text-amber-300 text-xs mb-2">{admin?.email}</div>
          <div className="flex gap-2">
            <a href="/" target="_blank" className="flex-1 text-center text-amber-400 text-xs py-2 border border-amber-700 rounded-lg hover:bg-amber-800 transition-colors">View Site</a>
            <button onClick={handleLogout} className="flex-1 text-center text-amber-400 text-xs py-2 border border-amber-700 rounded-lg hover:bg-amber-800 transition-colors">Logout</button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className="flex-1">
            <div className="font-semibold text-gray-900">{navItems.find(n => n.path === pathname)?.name || "Admin"}</div>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">Welcome, {admin?.name || "Admin"}</div>
        </header>

        <main className="flex-1 p-4 sm:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
