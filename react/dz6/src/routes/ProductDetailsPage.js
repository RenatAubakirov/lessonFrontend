import { Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function ProductDetailsPage() {
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
        <>
            <Typography variant="h3">Информация о товаре</Typography>
            <Typography gutterBottom variant="h4" component="div">
                {product.name}
            </Typography>
            {!product.available && <Typography variant="body2" sx={{ color: 'red' }} gutterBottom>
                Товар не доступен
            </Typography>}
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description}
            </Typography>
            <Typography variant="body1" sx={{ mt: '20px' }}>
                Цена: {product.price}
            </Typography>
        </>
    );
}

export default ProductDetailsPage;