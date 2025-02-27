import BreadCrumbs from "./BreadCrumbs";
import '../../styles/page-header.scss'

function PageHeader({ title, breadcrumbs }) {
    return (
        <header className="page-header">
            <div className="page-header__wrap container">
                <h1 className="page-header__title">{title}</h1>
                <BreadCrumbs breadcrumbs={breadcrumbs} />
            </div>
        </header>
    );
}

export default PageHeader;