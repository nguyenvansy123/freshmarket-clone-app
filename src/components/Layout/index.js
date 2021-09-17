import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './grid.css';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return (
    <div className="app">
      <Header />
      {props.children}
      <Footer />
    </div>
  )

}

export default Layout