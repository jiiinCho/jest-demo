import React, { memo } from "react";

type NavbarProps = {
  totalCount: number;
};

const Navbar = memo(({ totalCount }: NavbarProps) => (
  <nav className="navbar">
    <h3 className="navbar-title">Habit Tracker</h3>
    <span className="navbar-count">{totalCount}</span>
  </nav>
));

export default Navbar;
