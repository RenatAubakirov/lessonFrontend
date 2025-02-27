import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import { useSelector } from 'react-redux';
import ProductDetails from "../components/product/ProductDetails";
import OtherProducts from "../components/product/OtherProducts";
import '../styles/product-page.scss';
import { useEffect } from 'react';

function ProductPage() {
    let { productId } = useParams();
    productId = Number(productId);
    const product = useSelector((state) => state.products.data.find((prod) => prod.id === productId));
    const navigate = useNavigate();

    useEffect(() => {
        if (product === undefined) {
            navigate('/error', { state: { status: 404, statusText: "Product not found" } });
        }
    }, [product, navigate]);

    if (product === undefined) {
        return null; // Или другой placeholder
    }

    return (
        <>
            <PageHeader title={'NEW ARRIVALS'} breadcrumbs={['HOME', 'MEN', 'NEW ARRIVALS']} />
            <ProductDetails product={product} />
            <OtherProducts />
        </>
    );
}

export default ProductPage;