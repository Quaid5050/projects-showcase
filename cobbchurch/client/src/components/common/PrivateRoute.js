import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = () => {
  const { user, loading } = useAuth();
  if (loading) return <div className="spinner" style={{marginTop:'120px'}}></div>;
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default PrivateRoute;
