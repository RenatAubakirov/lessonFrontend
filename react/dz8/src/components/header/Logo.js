import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to={"/"}><img src="/img/icon_logo.svg" alt="logo" /></Link>
    );
}

export default Logo;