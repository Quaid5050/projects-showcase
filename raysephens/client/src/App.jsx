import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import TaxIntake from "./pages/TaxIntake";

// Admin Pages
import AdminLogin from "./admin/pages/AdminLogin";
import AdminLayout from "./admin/components/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminServices from "./admin/pages/AdminServices";
import AdminContacts from "./admin/pages/AdminContacts";
import AdminBookings from "./admin/pages/AdminBookings";
import AdminSlots from "./admin/pages/AdminSlots";
import AdminTaxIntake from "./admin/pages/AdminTaxIntake";

function ProtectedRoute({ children }) {
  const { admin, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="w-10 h-10 border-4 border-amber-800 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  return admin ? children : <Navigate to="/admin/login" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/services" element={<Layout><Services /></Layout>} />
      <Route path="/faq" element={<Layout><FAQ /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/booking" element={<Layout><Booking /></Layout>} />
      <Route path="/tax-intake" element={<Layout><TaxIntake /></Layout>} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="/admin/dashboard" element={
        <ProtectedRoute><AdminLayout><AdminDashboard /></AdminLayout></ProtectedRoute>
      } />
      <Route path="/admin/services" element={
        <ProtectedRoute><AdminLayout><AdminServices /></AdminLayout></ProtectedRoute>
      } />
      <Route path="/admin/contacts" element={
        <ProtectedRoute><AdminLayout><AdminContacts /></AdminLayout></ProtectedRoute>
      } />
      <Route path="/admin/bookings" element={
        <ProtectedRoute><AdminLayout><AdminBookings /></AdminLayout></ProtectedRoute>
      } />
      <Route path="/admin/slots" element={
        <ProtectedRoute><AdminLayout><AdminSlots /></AdminLayout></ProtectedRoute>
      } />
      <Route path="/admin/tax-intake" element={
        <ProtectedRoute><AdminLayout><AdminTaxIntake /></AdminLayout></ProtectedRoute>
      } />

      {/* 404 */}
      <Route path="*" element={
        <Layout>
          <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
            <div>
              <div className="text-6xl font-bold text-amber-200 font-serif mb-4">404</div>
              <h1 className="text-2xl font-bold text-amber-900 mb-2">Page Not Found</h1>
              <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
              <a href="/" className="bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors">Back to Home</a>
            </div>
          </div>
        </Layout>
      } />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: { borderRadius: "10px", background: "#333", color: "#fff", fontSize: "14px" },
            success: { style: { background: "#2D6A2D" } },
            error: { style: { background: "#7f1d1d" } },
          }}
        />
        <ScrollToTop />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
