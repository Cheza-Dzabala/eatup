import React from 'react'
import Header from './components/elements/Header'

function Layout({ children }) {
    return <div className="container">
        <Header />
        <div className="layout">{children}</div>
    </div>
}

export default Layout
