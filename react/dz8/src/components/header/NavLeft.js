import Logo from "./Logo";
import SearchBar from "./SearchBar";

function NavLeft() {
    return (
        <nav className="header__nav-left">
            <Logo />
            <SearchBar />
        </nav>
    );
}

export default NavLeft;