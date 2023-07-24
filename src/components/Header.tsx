import { Link } from 'react-router-dom'
import { useAppSelector } from '../hook/useHook'
import { FiLogOut } from 'react-icons/fi'
import '../assets/style/style.css'


const Header = () => {
    const { item } = useAppSelector(state => state.Bookmarks)

    let userName = localStorage.getItem('userName')

    const handleLogOut = () => {
        localStorage.clear()
    }

    return (
        <div>
            <header className="header-panel header-main">
                <div className="header-upper-panel">
                    <div className="container">
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around" }}>
                            <a href="#" className="header-upper-logo">Техномарт</a>
                            <Link to="/bookmarks" className="header-upper-bookmark">Закладки: {item}</Link>
                            <Link to="#" className="header-upper-cart">Корзина: 0</Link>
                            <Link to="#" className="header-upper-order">Оформить заказ</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="header-middle-panel clearfix">
                        <p className="header-middle-block header-middle-about">Интернет-магазин строительных материалов и инструментов для ремонта</p>
                        <div className="header-middle-contacts">
                            <p className="header-contacts-telephone">+7 (812) 555-05-55</p>
                            <p className="header-contacts-address">г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</p>
                        </div>
                        <div className="header-middle-user header-user-connected">
                            {
                                userName
                                    ? <div className="header-block-user" style={{
                                        display: 'flex',
                                        alignItems: "center"
                                    }}>
                                        <h2 style={{ fontSize: 20 }}>{userName}</h2>
                                        <FiLogOut onClick={handleLogOut} style={{
                                            fontSize: 20,
                                            paddingLeft: 10,
                                            cursor: "pointer"
                                        }} />
                                    </div>
                                    : <>
                                        <Link to="" className="header-user-login">Войти</Link>
                                        <Link to="/registr" className="header-user-registration">Регистрация</Link>
                                    </>
                            }
                        </div>
                    </div>
                    <nav className="header-bottom-panel">
                        <a href="#">Главная</a>
                        <a href="catalog.html">Каталог</a>
                        <a href="#">Новости</a>
                        <a href="#">Спецпредложения</a>
                        <a href="#">Доставка</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header