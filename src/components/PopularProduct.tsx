import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hook/useHook'
import { fetchTechnic } from '../redux/reducers/API'
import { addToBookmarks } from '../redux/reducers/Bookmarks'
import { Button } from 'antd'
import { useSearch } from '../hook/useSearch'

import { Input } from '../UI'

import '../assets/style/style.css'

const PopularProduct = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const { technic } = useAppSelector(state => state.technicReducer)
    const search = useSearch({ technic, value })

    useEffect(() => {
        dispatch(fetchTechnic())
    }, [])

    return (
        <div>
            <section className="popular container clearfix" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p className="popular-text">Популярные товары:</p>
                <div className="main-upper-search">
                    <form action="/search" method="post">
                        <Input
                            value={value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                            type="search"
                            placeholder="Поиск:"
                            required />
                        <label htmlFor="search"></label>
                    </form>
                </div>
                <a href="#" className="popular-btn">Все популярные товары</a>
            </section>
            <section className="catalog-popular container clearfix">
                {

                    search.map((t) => (
                        <div className="catalog-item">
                            <figure className="catalog-item-image">
                                <img src={t.img} width="218" height="169" alt="Перфоратор Bosch BFG 9000" />
                            </figure>
                            <div className="catalog-item-buttons" style={{ textAlign: 'center' }}>
                                <Button style={{ margin: '5px' }}>Купить</Button>
                                <Button onClick={() => dispatch(addToBookmarks(t))}
                                >В закладки</Button>
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
            </section>
        </div>
    )
}

export default PopularProduct