import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContexto } from "./CartContext";

function CartWidget() {

  const { cantidad_total } = useContexto()

  return (
    <NavLink to="/cart">
      <FontAwesomeIcon icon={faShoppingCart} />
      {cantidad_total}
    </NavLink>
  )
}

export default CartWidget;
