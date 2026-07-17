import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollRestoration from './components/ScrollRestoration';
import ScrollReveal from './components/ScrollReveal';
import LoadingScreen from './components/LoadingScreen';
import ServicePage from './components/ServicePage';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminBookings from './pages/admin/Bookings';
import AdminMessages from './pages/admin/Messages';
import AdminGallery from './pages/admin/Gallery';
import AdminTestimonials from './pages/admin/Testimonials';

const serviceData = {
  'home-care':{ title:'Home Care', subtitle:'Professional In-Home Support', heroImg:'/img1.avif', intro:'GTA Homecare Services provides professional in-home health care designed to support seniors and individuals with daily tasks while preserving their independence and dignity.', body:['Our home care services are built around each client\'s unique routine, health requirements, and lifestyle.'], features:['Daily living assistance','Personal hygiene support','Meal preparation','Medication reminders','Mobility & fall prevention','Light housekeeping','Doctor appointment escorts','Post-hospital recovery care'], img2:'/img2.avif' },
  'north-york-senior-care':{ title:'North York Senior Care', subtitle:'Local Expert Care', heroImg:'/img2.avif', intro:'We proudly serve families in North York with dedicated senior care that is local, reliable, and deeply personalized.', body:['We know the local healthcare networks, hospitals, and community resources — enabling seamless transitions.'], features:['Local North York caregivers','Hospital discharge support','Community resource coordination','Daily living assistance','Medication management','Companion & social care','Short & long-term plans','Family communication'], img2:'/img3.jpg' },
  'companion-care':{ title:'Companion Care', subtitle:'Social Support & Engagement', heroImg:'/img3.jpg', intro:'Our companion care service provides meaningful social engagement and emotional support to brighten every day.', body:['Our caregivers build genuine relationships through conversation, shared activities, and consistent presence.'], features:['Friendly conversation','Reading & hobbies','Light walks & outings','Board games & activities','Social event accompaniment','Emotional support','Routine building','Family updates'], img2:'/img4.jpg' },
  'respite-care':{ title:'Respite Care', subtitle:'Relief for Family Caregivers', heroImg:'/img4.jpg', intro:'Our respite care service gives family caregivers the rest they deserve while ensuring expert care continues.', body:['Whether you need a few hours per week or extended coverage, our caregivers maintain the same routines and standards.'], features:['Short-term relief coverage','Scheduled or emergency support','Routine maintenance','Personal care assistance','Meal preparation','Medication reminders','Companionship','Family updates'], img2:'/img5.jpg' },
  '24-hour-home-care':{ title:'24-Hour Home Care', subtitle:'Around-the-Clock Support', heroImg:'/img5.jpg', intro:'Our 24-hour home care service provides trained caregivers around the clock — safety and comfort at every hour.', body:['Live-in and rotating-shift options are tailored to each client\'s medical needs and daily routine.'], features:['Overnight supervision','Morning & evening routines','Medication monitoring','Fall prevention','Emergency response','All-day meal prep','Mobility & transfer support','Dementia care support'], img2:'/img1.avif' },
  'personal-care-services':{ title:'Personal Care Services', subtitle:'Dignified Daily Assistance', heroImg:'/img1.avif', intro:'Our caregivers provide dignified, professional assistance with daily personal tasks — always with respect and compassion.', body:['Bathing, grooming, dressing, and toileting support are performed discreetly. Trust is built every single day.'], features:['Bathing & showering','Grooming & hygiene','Dressing support','Toileting assistance','Skin & oral care','Mobility & transfer','Fall prevention','Post-surgical care'], img2:'/img2.avif' },
  'foot-spa-nail-grooming':{ title:'Foot Spa & Nail Grooming', subtitle:'Relaxing Care for Seniors', heroImg:'/img3.jpg', intro:'Our foot spa and nail grooming service offers seniors a relaxing, hygienic, and dignified way to keep their feet and nails healthy and well cared for.', body:['Poor foot health can affect mobility and comfort, especially for seniors. Our caregivers provide gentle foot soaks, moisturizing, and careful nail trimming and grooming in the comfort of home.'], features:['Relaxing foot soaks','Gentle nail trimming & filing','Moisturizing & skin care','Callus & dry skin care','Circulation-friendly massage','Diabetic-safe foot care awareness','Hygienic, sanitized tools','Regular grooming schedules'], img2:'/img4.jpg' },
  'physiotherapy':{ title:'Physiotherapy', subtitle:'Movement, Strength & Recovery', heroImg:'/img5.jpg', intro:'Our physiotherapy service helps clients regain strength, mobility, and independence through professional, in-home therapy sessions.', body:['Whether recovering from surgery, illness, or managing a chronic condition, our physiotherapists design personalized exercise and recovery plans for each client\'s needs.'], features:['Personalized therapy plans','Post-surgical recovery support','Mobility & balance training','Strength & flexibility exercises','Pain management techniques','Fall prevention training','Chronic condition management','Progress tracking & reporting'], img2:'/img1.avif' },
};

function PublicLayout({ children }) {
  return (<><Navbar />{children}<Footer /><ScrollToTop /></>);
}
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
}
export default function App() {
  return (
    <AuthProvider>
      <LoadingScreen />
      <BrowserRouter>
        <ScrollRestoration />
        <ScrollReveal />
        <Routes>
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
          <Route path="/testimonials" element={<PublicLayout><Testimonials /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/booking" element={<PublicLayout><Booking /></PublicLayout>} />
          {Object.entries(serviceData).map(([slug, data]) => (
            <Route key={slug} path={`/services/${slug}`} element={<PublicLayout><ServicePage {...data} /></PublicLayout>} />
          ))}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/bookings" element={<ProtectedRoute><AdminBookings /></ProtectedRoute>} />
          <Route path="/admin/messages" element={<ProtectedRoute><AdminMessages /></ProtectedRoute>} />
          <Route path="/admin/gallery" element={<ProtectedRoute><AdminGallery /></ProtectedRoute>} />
          <Route path="/admin/testimonials" element={<ProtectedRoute><AdminTestimonials /></ProtectedRoute>} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
