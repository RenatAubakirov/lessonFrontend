function Filter({ setSizeFilter }) {
    function handleSetSizeFilter(e) {
        setSizeFilter(e.target.value, e.target.checked)
    }

    return (<div className="filter">
        <div className="filter__wrap container">
            <details className="filter__details no-select">
                <summary className="filter__summary">
                    <svg
                        width={15}
                        height={10}
                        viewBox="0 0 15 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                            fill="black"
                        />
                    </svg>
                </summary>
                <div className="filter__content">
                    <details className="filter-category" open="">
                        <summary className="filter-category__head">CATEGORY</summary>
                        <ul className="filter-category__list">
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Bags
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Denim
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Hoodies &amp; Sweatshirts
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Jackets &amp; Coats
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Polos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Shirts
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Shoes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Sweaters &amp; Knits
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    T-Shirts
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Tanks
                                </a>
                            </li>
                            <li>
                                <a href="#" className="filter-category__list-item">
                                    Accessories
                                </a>
                            </li>
                        </ul>
                    </details>
                    <details className="filter-category">
                        <summary className="filter-category__head">BRAND</summary>
                    </details>
                    <details className="filter-category">
                        <summary className="filter-category__head">DESIGNER</summary>
                    </details>
                </div>
            </details>
            <div className="filter-sort__box">
                <div className="filter-sort no-select">
                    <details className="filter-sort__item">
                        <summary className="filter-sort__summary">TRENDING NOW</summary>
                    </details>
                    <details className="filter-sort__item">
                        <summary className="filter-sort__summary">SIZE</summary>
                        <div className="filter-sort__item-content">
                            <div className="filter-sort__item-checkbox">
                                <input type="checkbox" name="sort-size_xs" id="sort-size_xs" value="XS" onChange={handleSetSizeFilter} />
                                <label htmlFor="sort-size_xs">XS</label>
                            </div>
                            <div className="filter-sort__item-checkbox">
                                <input type="checkbox" name="sort-size_s" id="sort-size_s" value="S" onChange={handleSetSizeFilter} />
                                <label htmlFor="sort-size_s">S</label>
                            </div>
                            <div className="filter-sort__item-checkbox">
                                <input type="checkbox" name="sort-size_m" id="sort-size_m" value="M" onChange={handleSetSizeFilter} />
                                <label htmlFor="sort-size_m">M</label>
                            </div>
                            <div className="filter-sort__item-checkbox">
                                <input type="checkbox" name="sort-size_l" id="sort-size_l" value="L" onChange={handleSetSizeFilter} />
                                <label htmlFor="sort-size_l">L</label>
                            </div>
                        </div>
                    </details>
                    <details className="filter-sort__item">
                        <summary className="filter-sort__summary">PRICE</summary>
                    </details>
                </div>
            </div>
        </div>
    </div>);
}

export default Filter;