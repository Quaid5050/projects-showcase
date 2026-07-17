import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ReferralPage from './pages/ReferralPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AdminApp from './admin/AdminApp';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" toastOptions={{
        style: { background: '#111827', color: '#F9FAFB', border: '1px solid rgba(255,255,255,0.1)' }
      }} />
      <Routes>
        {/* Admin routes — no layout, no auth context needed (AdminApp handles its own) */}
        <Route path="/admin/*" element={<AdminApp />} />

        {/* Public + user routes */}
        <Route path="/*" element={
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="products/:slug" element={<ProductDetailPage />} />
                <Route path="referrals" element={<ReferralPage />} />
                <Route path="pricing" element={<PricingPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
              </Route>
            </Routes>
          </AuthProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}
