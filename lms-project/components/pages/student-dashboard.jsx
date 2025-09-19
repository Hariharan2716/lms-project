import React from "react";
import MainLayout from "../layout/main-layout";
import Card from "../global/card";
import "./student-dashboard.css"; // custom CSS

export default function StudentDashboardPage() {
  return (
    <MainLayout>
      <div className="student-dashboard">
        <h1 className="dashboard-title">Student Dashboard</h1>
        <Card>
          <h2>Welcome!</h2>
          <p>
            This is your student dashboard. Here you can find your enrolled
            courses, grades, and profile information.
          </p>
        </Card>
      </div>
    </MainLayout>
  );
}
