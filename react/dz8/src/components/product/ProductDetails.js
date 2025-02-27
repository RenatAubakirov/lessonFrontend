import ProductDescription from "./ProductDescription";
import ProductSlider from "./ProductSlider";

function ProductDetails({ product }) {
    return (
        <>
            <ProductSlider product={product} />
            <ProductDescription product={product} />
        </>
    );
}

export default ProductDetails;