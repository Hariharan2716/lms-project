UI Plan – Learning Management System (LMS)

This document outlines the UI component plan and folder structure for the LMS application.
The focus is on reusability, consistency, and scalability.

1. Component Categories
Global / Layout Components

Navbar – top navigation with links (Home, Dashboard, Login/Logout).

Footer – site-wide footer with branding and links.

DashboardLayout – sidebar + content wrapper for student/admin dashboards.

AuthLayout – centered layout for login/register forms.

MainLayout – global wrapper (Navbar + Footer).

UI (Reusable) Components

Button – consistent button styling (primary, secondary).

Input – labeled input fields (text, password, etc.).

Card – generic container (base for CourseCard, InfoCard, etc.).

Modal – reusable overlay for confirmations and forms.

Feature-Specific Components

CourseCard – displays course title, description, and enroll button.

CourseList – renders a grid/list of CourseCards.

2. Folder Structure
src/
 ├── components/
 │   ├── layout/
 │   │   ├── Navbar.js
 │   │   ├── Footer.js
 │   │   ├── DashboardLayout.js
 │   │   └── AuthLayout.js
 │   │
 │   ├── ui/
 │   │   ├── Button.js
 │   │   ├── Input.js
 │   │   ├── Card.js
 │   │   └── Modal.js
 │   │
 │   ├── course/
 │   │   ├── CourseCard.js
 │   │   └── CourseList.js
 │   │
 │   └── index.js  # (optional barrel export file)
 │
 ├── styles/
 │   ├── globals.css
 │   ├── layout.css
 │   ├── ui.css
 │   └── responsive.css

3. Structure Diagram (Hierarchy View)
App (Next.js)
│
├── MainLayout
│    ├── Navbar
│    ├── Page Content
│    └── Footer
│
├── DashboardLayout
│    ├── Sidebar
│    └── Content
│
└── AuthLayout
     └── Form (uses Input + Button)

4. Responsiveness

Navbar collapses links on mobile (<768px).

DashboardLayout switches from sidebar layout → stacked layout on mobile.

UI Components (Button, Input, Card) adapt with fluid widths for smaller screens.