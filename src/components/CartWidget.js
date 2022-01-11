import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function CartWidget() {

  return (
    <div>
      <NavLink to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} className="cartWidget" />
      </NavLink>
    </div>
  );
}

export default CartWidget;
