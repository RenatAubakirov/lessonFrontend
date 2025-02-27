import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginationButton from "./PaginationButton";
import '../../styles/pagination.scss'

function Pagination({ currentPage, totalPages }) {
    let startPage = currentPage - 2;
    if (startPage <= 3)
        startPage = 1;
    let endPage = startPage + 5;
    if (endPage >= totalPages - 1)
        endPage = totalPages + 1;

    const nearestPages = [...Array(endPage - startPage)].map((_, i) => startPage + i);


    return (
        <div className="pagination">
            <PaginationButton toPage={currentPage - 1} children={<FontAwesomeIcon icon={faAngleLeft} />} />
            {startPage > 2 && <PaginationButton toPage={startPage - 1} children={`1...${startPage - 1}`} />}
            {nearestPages.map(page => <PaginationButton toPage={page} active={page === currentPage} children={page} />)}
            {endPage < totalPages && <PaginationButton toPage={endPage + 1} children={`${endPage}...${totalPages}`} />}
            <PaginationButton toPage={currentPage + 1} children={<FontAwesomeIcon icon={faAngleRight} />} />
        </div>
    );
}

export default Pagination;