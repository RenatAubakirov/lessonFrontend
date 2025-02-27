function BreadCrumbs({ breadcrumbs }) {
    return (
        <nav className="breadcrumbs">
            {breadcrumbs.map(item => <a key={item} href="#" className="breadcrumbs__item">{item}</a>)}
        </nav>
    );
}

export default BreadCrumbs;