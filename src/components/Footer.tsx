import '../assets/style/style.css'
import map from '../assets/img/map.jpg'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-upper-panel container clearfix">
                    <a href="index.html" className="footer-panel-logo">Техномарт</a>
                    <ul className="footer-panel-contacts">
                        <li>
                            <a href="#">Компания</a>
                        </li>
                        <li>
                            <a href="#">Новости</a>
                        </li>
                        <li>
                            <a href="catalog.html">Каталог</a>
                        </li>
                        <li>
                            <a href="#">Доставка</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-middle-panel container clearfix">
                    <div className="footer-panel-address">
                        <p>г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</p>
                        <p>+7 (495) 555-05-55</p>
                    </div>
                    <ul className="footer-panel-offer">
                        <li>
                            <a href="#">Материалы</a>
                        </li>
                        <li>
                            <a href="#">Техника</a>
                        </li>
                        <li>
                            <a href="#">Иструменты</a>
                        </li>
                        <li>
                            <a href="#">Спецпредложения</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom-panel">
                    <div className="container clearfix">
                        <div className="footer-bottom-copyright">
                            <p>© 2010-2013 Компания «Техномарт»</p>
                            <p>Все права защищены</p>
                        </div>
                        <div className="footer-bottom-social">
                            <a href="#" className="footer-social-btn footer-social-vk"></a>
                            <a href="#" className="footer-social-btn footer-social-fb"></a>
                            <a href="#" className="footer-social-btn footer-social-inst"></a>
                        </div>
                        <div className="footer-bottom-feedback">
                            <p>Обратная связь:</p>
                            <a href="mailto:info@technomart.ru" className="footer-feedback-mail">info@technomart.ru</a>
                        </div>
                        <div className="footer-bottom-design">
                            <p>Дизайн сайта -</p>
                            <a href="#" className="footer-design-author">glukhanko.ru</a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="map container">
                <noscript>
                    <figure>
                        <img src={map} width="940" height="447" alt="Мы на карте" />
                    </figure>
                </noscript>
                <div className="map-script"></div>
                <a href="#" className="map-close"></a>
            </div>
            <div className="feedback container">
                <a href="#" className="feedback-close"></a>
                <form action="/feedback" method="post">
                    <div className="feedback-userdata">
                        <div className="feedback-block clearfix">
                            <div className="feedback-left-column">
                                <label className="feedback-data" htmlFor="feedback-login">Ваше имя:</label>
                                <input type="text" name="login" id="feedback-login" placeholder="Представьтесь, пожалуйста" />
                            </div>
                            <div className="feedback-right-column">
                                <label className="feedback-data" htmlFor="feedback-email">Ваш e-mail:</label>
                                <input type="email" name="email" id="feedback-email" placeholder="Для отправки ответа" required />
                            </div>
                        </div>
                        <label className="feedback-data" htmlFor="feedback-textarea">Текст письма:</label>
                        <textarea name="text" id="feedback-textarea" placeholder="В свободной форме" required></textarea>
                    </div>
                    <div className="feedback-block-buttons">
                        <button type="submit" className="feedback-btn">Отправить</button>
                        <a href="#" className="feedback-btn feedback-cancel">Отмена</a>
                    </div>
                </form>
            </div>
            <div className="cart-notification">
                <a href="#" className="cart-notification-close"></a>
                <form action="/cart" method="post">
                    <p className="cart-notification-title">Товар добавлен в корзину!</p>
                    <div className="cart-notification-decision">
                        <button type="submit" className="cart-order-btn">Оформить заказ</button>
                        <a href="#" className="cart-cancel-btn">Продолжить покупки</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer