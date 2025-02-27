function MenuItems({ title, items }) {
    return (
        <div className="menu__category-box">
            <h4 className="menu__category-title">{title}</h4>
            <ul className="menu__category-list">
                {items.map((item) =>
                    <li key={title + item} className="menu__category-item">
                        <a href="#">{item}</a>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default MenuItems;