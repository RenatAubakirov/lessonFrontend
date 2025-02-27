import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const dispatch = useDispatch();
    return (
        <article className="product-card">
            <div className="product-card__img">
                <img src={product.imgURL} alt="Catalog image" />
                <div className="product-card__filter">
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="product-card__add-cart-button animate-button">
                        <img src="/img/icon_cart.svg" width={26} alt="Cart" />
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="product-card__description">
                <Link to={`/product/${product.id}`} ><h4 className="product-card__title">{product.title}</h4></Link>
                <p className="product-card__text">{product.description}</p>
                <div className="product-card__price">${product.price.toFixed(2)}</div>
            </div>
        </article>);
}

export default ProductCard;