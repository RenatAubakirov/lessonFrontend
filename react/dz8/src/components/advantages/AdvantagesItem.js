function AdvantagesItem({ advantage }) {
    return (
        <article className="advantages__item">
            {advantage.icon}
            <h4 className="advantages__item-title">{advantage.title}</h4>
            <p className="advantages__item-text">
                {advantage.text}
            </p>
        </article>
    );
}

export default AdvantagesItem;