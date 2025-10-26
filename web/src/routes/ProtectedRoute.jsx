import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roles }) {
  const { user, token } = useSelector((s) => s.user);
  console.log(user);
  if (!token || !user) return <Navigate to="/login" replace />;
  if (roles && roles.length > 0 && !roles.includes(user.role)) {
    return <div className="p-8">Forbidden - you don't have access</div>;
  }

  return children;
}
