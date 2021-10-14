import React from 'react'
import Banner from './elements/Banner'
import BestDeals from './elements/BestDeals'

function Home() {
    return <div className="unpaded">
        <Banner />
        <div className="content">
            <BestDeals />
        </div>
    </div>
}
export default Home
