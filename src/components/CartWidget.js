import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} className="cartWidget" />
        </div>
    )
}

export default CartWidget
