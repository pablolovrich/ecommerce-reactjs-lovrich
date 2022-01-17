import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContexto } from "./CartContext";

function CartWidget() {

  const { cantidad_total } = useContexto()

  return (
    <div>
      <NavLink to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} className="cartWidget" />
      </NavLink >
      <span className="contador">
        {cantidad_total}
      </span>
    </div >)
}

export default CartWidget;
