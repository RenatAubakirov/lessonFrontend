import { Link } from "react-router-dom";

function PaginationButton({ toPage, children, active = false }) {
    return (
        <Link to={toPage} className={`pagination__button${active ? " pagination__button_active" : ""}`} children={children} />
    );
}

export default PaginationButton;