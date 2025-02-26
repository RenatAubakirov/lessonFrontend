import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProductForm from "../components/ProductForm";
import { useEffect } from 'react';

function ProductEditPage() {
    const { productId } = useParams();
    const product = useSelector((state) => state.products.products[productId]);
    const navigate = useNavigate();

    useEffect(() => {
        if (product === undefined) {
            navigate('/error', { state: { status: 404, statusText: "Product not found" } });
        }
    }, [product, navigate]);

    if (product === undefined) {
        return null; // Или какой-то другой placeholder, пока navigate не выполнится
    }

    return (
        <ProductForm product={product} />
    );
}

export default ProductEditPage;