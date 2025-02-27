import { Link } from "react-router-dom";

function NavProfile() {
    return (
        <Link className="header__profile" to={"/registration"}>
            <img src="/img/icon_profile.svg" alt="profile" />
        </Link>);
}

export default NavProfile;