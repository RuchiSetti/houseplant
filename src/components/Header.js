import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </header>
  );
};

export default Header;
