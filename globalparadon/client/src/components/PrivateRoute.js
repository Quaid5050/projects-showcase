import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('cpUser') || 'null');
  return user?.token ? children : <Navigate to="/admin/login" replace />;
}
