function Categories() {
    return (
        <div className="categories">
            <div className="categories__wrap container">
                <article className="categories__item categories__item_women">
                    <p className="categories__text">30% OFF</p>
                    <h4 className="categories__title">FOR WOMEN</h4>
                </article>
                <article className="categories__item categories__item_men">
                    <p className="categories__text">HOT DEAL</p>
                    <h4 className="categories__title">FOR MEN</h4>
                </article>
                <article className="categories__item categories__item_kids">
                    <p className="categories__text">NEW ARRIVALS</p>
                    <h4 className="categories__title">FOR KIDS</h4>
                </article>
                <article className="categories__item categories__item_accesories">
                    <p className="categories__text">LUXIROUS &amp; TRENDY</p>
                    <h4 className="categories__title">ACCESORIES</h4>
                </article>
            </div>
        </div>
    );
}

export default Categories;