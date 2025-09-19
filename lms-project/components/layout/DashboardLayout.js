export default function DashboardLayout({children}) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <ul>
          <li>My Courses</li>
          <li>Progress</li>
          <li>Settings</li>
        </ul>
      </aside>
      <main className="content">{children}</main>
    </div>
  )
}