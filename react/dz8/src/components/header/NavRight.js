import Menu from "./Menu";
import NavCart from "./NavCart";
import NavProfile from "./NavProfile";


function NavRight() {
    return (
        <nav className="header__nav-right">
            <Menu />
            <NavProfile />
            <NavCart />
        </nav>
    );
}

export default NavRight;