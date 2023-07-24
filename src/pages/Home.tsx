import React from 'react'
import { Footer, Header, PopularProduce, PopularProduct, Service, Sorted } from '../components'

const Home = () => {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Sorted />
                <PopularProduct />
                <PopularProduce />
                <Service />
            </main>
            <Footer />
        </div>
    )
}

export default Home