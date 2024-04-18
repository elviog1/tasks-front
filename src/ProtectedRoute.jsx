import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "./context/Layout";
export default function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
