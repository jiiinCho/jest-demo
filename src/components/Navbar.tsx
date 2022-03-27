import React, { memo } from "react";

type NavbarProps = {
  totalCount: number;
};

const Navbar = memo(({ totalCount }: NavbarProps) => (
  <nav className="navbar">
    <h3 className="navbar-title">Habit Tracker</h3>
    <div className="navbar-count-container">
      <span className="navbar-count">{totalCount}</span>
    </div>
  </nav>
));

export default Navbar;
