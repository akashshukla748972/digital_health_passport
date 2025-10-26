import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Home from "./pages/Home";

export default function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="bg-[#F9FAFB]">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" replace /> : <Home />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute roles={["admin", "hospital", "user"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <ToastContainer position="top-right" />
    </div>
  );
}
