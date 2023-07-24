import { useAppDispatch, useAppSelector } from "../hook/useHook"
import { Button } from 'antd'
import { removeToBookmarks } from "../redux/reducers/Bookmarks"

const Bookmarks = () => {

    const { items } = useAppSelector(state => state.Bookmarks)
    const dispatch = useAppDispatch()

    if (items.length === 0) return <h1>Товаров нет</h1>

    return (
        <div className="catalog-popular container clearfix">
            {
                items.map(t => (
                    <div className="catalog-item">
                        <figure className="catalog-item-image">
                            <img src={t.img} width="218" height="169" alt="Перфоратор Bosch BFG 9000" />
                        </figure>
                        <div className="catalog-item-buttons" style={{ textAlign: 'center' }}>
                            <a href="#" className="catalog-button catalog-item-buy">Купить</a>
                            <Button onClick={() => dispatch(removeToBookmarks(t))}>Удалить из закладки</Button>
                        </div>
                        <p className="catalog-item-vendor">{t.title}</p>
                        <p>{t.desc}</p>
                        <p className="catalog-item-model">{t.akkuum}</p>
                        <p className="catalog-item-price">{t.price}</p>
                        {
                            !t.oldprice ? '' : (
                                <p className="catalog-item-discount">{t.oldprice}</p>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Bookmarks