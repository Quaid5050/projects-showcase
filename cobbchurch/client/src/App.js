import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './context/AuthContext';

import PrivateRoute from './components/common/PrivateRoute';
import AdminRoute from './components/common/AdminRoute';
import ScrollToTop from './components/ScrollToTop';

// Public Pages
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import PastorStories from './pages/PastorStories';
import StoryDetail from './pages/StoryDetail';
import Events from './pages/Events';
import CrisisResponse from './pages/CrisisResponse';
import RequestAccess from './pages/RequestAccess';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// Protected Pages
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import ChurchDirectory from './pages/dashboard/ChurchDirectory';
import MyResources from './pages/dashboard/MyResources';
import MyEvents from './pages/dashboard/MyEvents';
import CrisisAlerts from './pages/dashboard/CrisisAlerts';
import Profile from './pages/dashboard/Profile';

// Admin Pages
import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminChurches from './pages/admin/AdminChurches';
import AdminApplications from './pages/admin/AdminApplications';
import AdminResources from './pages/admin/AdminResources';
import AdminEvents from './pages/admin/AdminEvents';
import AdminStories from './pages/admin/AdminStories';
import AdminCrisis from './pages/admin/AdminCrisis';

import './styles/globals.css';

function App() {
  return (
    <AuthProvider>
      <Router>

        {/* Auto scroll top on route change */}
        <ScrollToTop />

        <Routes>

          {/* Public Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/pastor-stories" element={<PastorStories />} />
            <Route path="/pastor-stories/:id" element={<StoryDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/crisis-response" element={<CrisisResponse />} />
            <Route path="/request-access" element={<RequestAccess />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Auth */}
          <Route path="/login" element={<Login />} />

          {/* Protected Dashboard Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/directory" element={<ChurchDirectory />} />
              <Route path="/dashboard/resources" element={<MyResources />} />
              <Route path="/dashboard/events" element={<MyEvents />} />
              <Route path="/dashboard/crisis" element={<CrisisAlerts />} />
              <Route path="/dashboard/profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/churches" element={<AdminChurches />} />
              <Route path="/admin/applications" element={<AdminApplications />} />
              <Route path="/admin/resources" element={<AdminResources />} />
              <Route path="/admin/events" element={<AdminEvents />} />
              <Route path="/admin/stories" element={<AdminStories />} />
              <Route path="/admin/crisis" element={<AdminCrisis />} />
            </Route>
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={4000}
        />

      </Router>
    </AuthProvider>
  );
}

export default App;