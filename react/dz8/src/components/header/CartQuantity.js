import { useSelector } from "react-redux";

function CartQuantity() {
    const quantity = useSelector((state) => state.cart.items.reduce(
        (sum, item) => sum + item.quantity, 0));
    return (
        <>
            {quantity > 0 && <div className="header__cart-counter">{quantity}</div>}
        </>
    )

}

export default CartQuantity;