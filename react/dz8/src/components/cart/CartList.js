import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../store/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

function CartList({ products }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (<div className="cart__list">
        {products.map((product => <CartItem key={product.id} product={product} />))}
        <div className="cart__buttons-box">
            <button
                className="cart__button animate-button"
                onClick={() => dispatch(clearCart())}>
                CLEAR SHOPPING CART
            </button>
            <button
                className="cart__button animate-button"
                onClick={() => navigate("/catalog")}>
                CONTINUE SHOPPING
            </button>
        </div>
    </div>);
}

export default CartList;