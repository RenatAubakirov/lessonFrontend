import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <Box id="nav" sx={{ display: "flex", gap: '20px' }}>
            <NavLink to="/">Каталог</NavLink>
            <NavLink to="/product/add">Добавить товар</NavLink>
        </Box>
    );
}

export default NavBar;