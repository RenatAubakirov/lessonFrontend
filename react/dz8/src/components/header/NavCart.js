import { Link } from "react-router-dom";
import CartQuantity from "./CartQuantity";

function NavCart() {
    return (
        <Link className="header__cart" to={"/cart"}>
            <img src="/img/icon_cart.svg" alt="cart" />
            <CartQuantity />
        </Link>
    );
}

export default NavCart;