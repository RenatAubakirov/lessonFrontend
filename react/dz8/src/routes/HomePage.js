import Advantages from "../components/advantages/Advantages";
import Categories from "../components/homepage/Categories";
import Fetured from "../components/homepage/Fetured";
import HomeTop from "../components/homepage/HomeTop";
import '../styles/home-page.scss'

function HomePage() {
    return (
        <>
            <HomeTop />
            <Categories />
            <Fetured />
            <Advantages />
        </>
    );
}

export default HomePage;