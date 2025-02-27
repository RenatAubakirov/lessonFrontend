import Advantages from "../components/advantages/Advantages";
import Filter from "../components/catalog/Filter";
import PageHeader from "../components/common/PageHeader";
import ProductList from "../components/common/ProductList";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import '../styles/catalog-page.scss'

function CatalogPage() {
    const products = useSelector((state) => state.products.data);
    const [sizeFilters, setSizeFilters] = useState(new Set());
    const filteredProducts = sizeFilters.size !== 0 ? products.filter((product => sizeFilters.has(product.size))) : products;

    function setSizeFilter(filterValue, state) {
        const newFilters = new Set(sizeFilters);
        if (state)
            newFilters.add(filterValue);
        else
            newFilters.delete(filterValue);
        setSizeFilters(newFilters);
    }

    return (
        <>
            <PageHeader title={'NEW ARRIVALS'} breadcrumbs={['HOME', 'MEN', 'NEW ARRIVALS']} />
            <Filter setSizeFilter={setSizeFilter} />
            <section class="catalog">
                <div class="catalog__wrap container">
                    <ProductList products={filteredProducts} pagination={{ page: 1, totalPages: 20 }} />
                </div>
            </section>
            <Advantages />
        </>
    );
}

export default CatalogPage;