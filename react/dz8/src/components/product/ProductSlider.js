import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductSlider({ product }) {
    return (
        <section className="product-slider">
            <button className="product-slider__button product-slider__button_left">
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <img src={product.imgURL} alt="Slider image" />
            <button className="product-slider__button product-slider__button_right">
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </section>
    );
}

export default ProductSlider;