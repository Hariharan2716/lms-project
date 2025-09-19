"use client";
import React from "react";
import MainLayout from "../layout/main-layout";
import Navbar from "../layout/navbar";
import Sidebar from "../layout/sidebar";
import Card from "../global/card";
import "./dashboard-page.css";

const DashboardPage = () => {
  return (
    <MainLayout
      navbar={<Navbar>LMS</Navbar>}
      sidebar={<Sidebar role="admin" />}
      footer={<footer className="dashboard-footer">© 2025 LMS Admin</footer>}
    >
      <div className="dashboard-container">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <Card>
          <h2 className="card-title">Welcome!</h2>
          <p>
            This is your admin dashboard. Here you can find your courses,
            progress, and more.
          </p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
