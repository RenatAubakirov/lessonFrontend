import { useSelector } from "react-redux";
import ProductList from "../common/ProductList";
import randomArrayItems from "../../utils/randomArrayItems";

function OtherProducts() {
    const products = useSelector((state) => state.products.data);
    const randomProducts = randomArrayItems(products, 3);
    return (
        <section className="other-products">
            <div className="other-products__wrap container">
                <ProductList products={randomProducts} />
            </div>
        </section>

    );
}

export default OtherProducts;