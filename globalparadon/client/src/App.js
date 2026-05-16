import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';

import Home from './pages/Home';

import {
  Services,
  HowItWorks,
  About,
  Pricing,
  Testimonials,
  FAQ,
} from './pages/Services';

import Apply from './pages/Apply';

import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLeads from './pages/admin/AdminLeads';
import AdminLeadDetail from './pages/admin/AdminLeadDetail';

import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={4000}
      />

      <ScrollToTop />

      <Routes>
        {/* ADMIN ROUTES */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/leads"
          element={
            <PrivateRoute>
              <AdminLeads />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/leads/:id"
          element={
            <PrivateRoute>
              <AdminLeadDetail />
            </PrivateRoute>
          }
        />

        {/* PUBLIC WEBSITE */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />

              {/* MAIN CONTENT */}
              <main
                style={{
                  paddingTop: '70px',
                  minHeight: '100vh',
                  background: '#fff',
                }}
              >
                <Routes>
                  <Route
                    path="/"
                    element={<Home />}
                  />

                  <Route
                    path="/services"
                    element={<Services />}
                  />

                  <Route
                    path="/how-it-works"
                    element={<HowItWorks />}
                  />

                  <Route
                    path="/about"
                    element={<About />}
                  />

                  <Route
                    path="/pricing"
                    element={<Pricing />}
                  />

                  <Route
                    path="/testimonials"
                    element={<Testimonials />}
                  />

                  <Route
                    path="/faq"
                    element={<FAQ />}
                  />

                  <Route
                    path="/apply"
                    element={<Apply />}
                  />
                </Routes>
              </main>

              <Footer />

              <LiveChat />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;