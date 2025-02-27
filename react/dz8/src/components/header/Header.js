import NavLeft from './NavLeft';
import NavRight from './NavRight';
import '../../styles/header.scss'


function Header() {
    return (
        <header className="header">
            <div className="header__wrap container">
                <NavLeft />
                <NavRight />
            </div>
        </header>

    );
}

export default Header;