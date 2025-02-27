import SubsctibeForm from "./SubsctibeForm";
import '../../styles/subscribe.scss'

function Subscribe() {
    return (
        <section className="subscribe">
            <div className="subscribe__wrap container">
                <div className="subscribe__picture">
                    <img
                        className="subscribe__photo"
                        src="/img/subscribe_photo.png"
                        alt="Subscribe photo"
                    />
                    <p className="subscribe__text">
                        “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        <span>a pulvinar purus condimentum</span>”
                    </p>
                </div>
                <SubsctibeForm />
            </div>
        </section>
    );
}

export default Subscribe;