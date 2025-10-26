import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserHome from "./UserHome";
import HospitalHome from "./HospitalHome";
import AdminHome from "./AdminHome";
// import { logout } from "../../store/slices/authSlice";

export default function Dashboard() {
  const { user } = useSelector((s) => s.user);
  const dispatch = useDispatch();
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl">Dashboard</h1>
          <p className="text-sm">Role: {user?.role}</p>
        </div>
        <div>
          <button
            onClick={() => dispatch(logout())}
            className="px-3 py-1 bg-red-600 text-white"
          >
            Logout
          </button>
        </div>
      </header>

      <nav className="mb-4">
        {user?.role === "user" && (
          <Link to="user" className="mr-4">
            User
          </Link>
        )}
        {user?.role === "hospital" && (
          <Link to="hospital" className="mr-4">
            Hospital
          </Link>
        )}
        {user?.role === "admin" && (
          <Link to="admin" className="mr-4">
            Admin
          </Link>
        )}
      </nav>

      <div>
        <Routes>
          <Route path="user" element={<UserHome />} />
          <Route path="hospital" element={<HospitalHome />} />
          <Route path="admin" element={<AdminHome />} />
          <Route index element={<div>Choose a section</div>} />
        </Routes>
      </div>
    </div>
  );
}
