export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LMS</div>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}
