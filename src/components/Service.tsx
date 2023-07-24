import '../assets/style/style.css'

const Service = () => {
    return (
        <div>
            <section className="service">
                <div className="container">
                    <div className="service-intro">
                        <h2 className="service-title">Сервисы</h2>
                        <p className="service-title-info">Хороший интернет-магазин отличается от плохого не только ценами!</p>
                        <p className="service-title-info">Мы стараемся изо всех сил чтобы сделать ваши покупки приятными.</p>
                    </div>
                    <div className="service-columns clearfix">
                        <div className="left-column service-list-column">
                            <ul>
                                <li>
                                    <a href="#" className="service-list-active">Доставка</a>
                                </li>
                                <li>
                                    <a href="#">Гарантия</a>
                                </li>
                                <li>
                                    <a href="#">Кредит</a>
                                </li>
                            </ul>
                        </div>
                        <div className="right-column service-details-column">
                            <section className="service-details-block service-details-delivery service-details-active">
                                <h2 className="service-details-title">Доставка</h2>
                                <p className="service-details-info service-delivery-info">Мы с одовольствием доставим ваш товар прямо к вашему подьезду совершенно бесплатно!</p>
                                <p className="service-details-info service-delivery-info">Ведь мы неплохо заработаем поднимая его на ваш этаж.</p>
                            </section>
                            <section className="service-details-block service-details-warrianty">
                                <h2 className="service-details-title">Гарантия</h2>
                                <p className="service-details-info service-warrianty-info">Если купленный у нас товар поломается или заискрит, а также в случае пожара, спровоцированного его возгаранием, вы всегда можете быть уверены в нашей гарантии. Мы обменяем сгоревший товар на новый.</p>
                                <p className="service-details-info service-warrianty-info">Дом уж восстановите как-нибудь сами.</p>
                            </section>
                            <section className="service-details-block service-details-credit">
                                <h2 className="service-details-title">Кредит</h2>
                                <p className="service-details-info service-credit-info">Залезть в долговую яму стало проще!</p>
                                <p className="service-details-info service-credit-info">Кредитные консультанты придут вам на помощь.</p>
                                <a href="#" className="service-btn">Отправить заявку</a>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service