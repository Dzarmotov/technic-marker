import '../assets/style/style.css'

const Sorted = () => {
    return (
        <div>
            <section className="offer container clearfix">
                <div className="offer-item offer-material new-item">
                    <p className="offer-item-type">Материалы</p>
                    <a href="#" className="offer-item-info">На любой вкус</a>
                </div>
                <div className="offer-item offer-tool">
                    <p className="offer-item-type">Инструмент</p>
                    <a href="#" className="offer-item-info">На все случаи</a>
                </div>
                <div className="offer-item offer-equipment">
                    <p className="offer-item-type">Техника</p>
                    <a href="#" className="offer-item-info">Для стройки</a>
                </div>
            </section>
            <section className="offer-slider bottom-offer container clearfix">
                <div className="offer-slider-block">
                    <input name="offer-slider-controlls" className="offer-slider-drill" type="radio" id="offer-slider-drill" checked />
                    <label htmlFor="offer-slider-drill"></label>
                    <input name="offer-slider-controlls" className="offer-slider-perforator" type="radio" id="offer-slider-perforator" />
                    <label htmlFor="offer-slider-perforator"></label>
                    <label className="offer-left-arrow" htmlFor="offer-slider-drill"></label>
                    <label className="offer-right-arrow" htmlFor="offer-slider-perforator"></label>
                    <div className="offer-slider-items clearfix">
                        <div className="offer-slider-item offer-slider-perforators">
                            <div className="offer-slider-header">
                                <p className="offer-slider-title">Дрели</p>
                                <p className="offer-slider-info">Соседям на радость!</p>
                            </div>
                            <a href="#" className="slider-btn">Открыть каталог</a>
                        </div>
                        <div className="offer-slider-item offer-slider-drills">
                            <div className="offer-slider-header">
                                <p className="offer-slider-title">Перфораторы</p>
                                <p className="offer-slider-info">Настоящие мужские игрушки</p>
                            </div>
                            <a href="catalog.html" className="slider-btn">открыть каталог</a>
                        </div>
                    </div>
                </div>
                <div className="offer-block">
                    <div className="offer-item offer-discount">
                        <p className="offer-item-type">Скидки 50%</p>
                        <a href="#" className="offer-item-info">На 350 товаров</a>
                    </div>
                    <div className="offer-item offer-delivery">
                        <p className="offer-item-type">Доставка</p>
                        <a href="#" className="offer-item-info">Бесплатно</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sorted