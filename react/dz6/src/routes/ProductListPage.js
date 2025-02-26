import { Typography, Grid2 as Grid, Card, CardContent, CardActions, Button, FormControlLabel, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import { deleteProduct, toggleProductAvailable } from "../store/reducers/ProductReducer"


function ProductsListPage() {
    const products = useSelector((state) => state.products.products);

    return (
        <>
            <Typography variant="h3">Список товаров</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Object.values(products).map(product => <ProductsListItem key={product.id} product={product} />)}
            </Grid>
        </>
    );
}

function ProductsListItem({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.description}
                </Typography>
                <Typography variant="body1" sx={{ mt: '20px' }}>
                    Цена: {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="contained"
                    startIcon={<InfoIcon />}
                    onClick={() => navigate(`/product/details/${product.id}`)}
                >Подробнее</Button>
                <Button
                    size="small"
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={() => navigate(`/product/edit/${product.id}`)}
                >Редактировать</Button>
                <Button
                    size="small"
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => dispatch(deleteProduct(product.id))}
                >Удалить</Button>
                <FormControlLabel
                    label={product.available ? "Товар доступен" : "Товар не доступен"}
                    control={<Checkbox
                        checked={product.available}
                        onChange={() => dispatch(toggleProductAvailable(product.id))}
                    />}
                />
            </CardActions>
        </Card >
    );
}

export default ProductsListPage;