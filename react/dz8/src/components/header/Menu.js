import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItems from "./MenuItems";
import '../../styles/menu.scss'

const menuInit = [
    {
        title: "MEN",
        items: ["Accessories", "Bag", "Denim", "T-Shirts"]
    },
    {
        title: "WOMAN",
        items: ["Accessories", "Jackets & Coats", "Polos", "T-Shirts", "Shirts"]
    },
    {
        title: "KIDS",
        items: ["Accessories", "Jackets & Coats", "Polos", "T-Shirts", "Shirts", "Bags"]
    },
];

function Menu() {
    return (<div className="header__menu">
        <input
            className="header__menu-checkbox"
            type="checkbox"
            name="menu"
            id="menu"
        />
        <label htmlFor="menu">
            <img src="/img/icon_menu.svg" alt="menu" />
        </label>
        <nav className="menu">
            <label className="menu__close" htmlFor="menu">
                <FontAwesomeIcon icon={faXmark} />
            </label>
            <h3 className="menu__title">MENU</h3>
            {menuInit.map((menu) => <MenuItems key={menu.title} title={menu.title} items={menu.items} />)}
        </nav>
    </div>);
}

export default Menu;