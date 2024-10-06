import React from "react";

const Navbar = React.memo(() => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
});
Navbar.displayName = "Navbar";
export default Navbar;
