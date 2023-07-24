import { logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8 } from '../assets'
import '../assets/style/style.css'


const PopularProduce = () => {


    return (
        <div>
            <section className="popular container clearfix">
                <p className="popular-text">Популярные производители:</p>
                <a href="#" className="popular-btn">Все производители</a>
            </section>
            <section className="brands container clearfix">
                <a href="img/brands-logo-1.jpg" className="brands-logo">
                    <img src={logo1} width="218" height="145" alt="Bosch" />
                </a>
                <a href="img/brands-logo-2.jpg" className="brands-logo">
                    <img src={logo2} width="218" height="145" alt="Makita" />
                </a>
                <a href="img/brands-logo-3.jpg" className="brands-logo">
                    <img src={logo3} width="218" height="145" alt="DeWalt" />
                </a>
                <a href="img/brands-logo-4.jpg" className="brands-logo">
                    <img src={logo4} width="218" height="145" alt="Интерскол" />
                </a>
                <a href="img/brands-logo-5.jpg" className="brands-logo">
                    <img src={logo5} width="218" height="145" alt="Hitachi" />
                </a>
                <a href="img/brands-logo-6.jpg" className="brands-logo">
                    <img src={logo6} width="218" height="145" alt="LG" />
                </a>
                <a href="img/brands-logo-7.jpg" className="brands-logo">
                    <img src={logo7} width="218" height="145" alt="AEG" />
                </a>
                <a href="img/brands-logo-8.jpg" className="brands-logo">
                    <img src={logo8} width="218" height="145" alt="Metabo" />
                </a>
            </section>
        </div>
    )
}

export default PopularProduce