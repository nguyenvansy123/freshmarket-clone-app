import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Layout from '../../components/Layout'
import Slider from '../../components/UI/Slider'
import "./style.css"
import ProductItem from "../../components/UI/ProductItem"
/**
* @author
* @function Home
**/

const Home = (props) => {

  const product = useSelector(state => state.product)
  const dispatch = useDispatch()

  const renderProduct = (data) => {
    return data.map((value, key) => {
      return <div className="col l-3 m-6 c-12" key={key}>
        <ProductItem data={value} match={props.match} />
      </div>
    })
  }
  return (
    <Layout>
      <div className="container">

        <div className="slidewrapper">
          <div className="grid">
            <Slider />
          </div>
        </div>
        <br />
        <br />
        <hr style={{ width: '85%', marginBottom: '60px' }} />
        <div className="product__hot">

          <div className="text__new">
            <h2 className="title">Grab 'N Go</h2>
            <p className="text">I'm a paragraph. Click here to add your own text and edit me.</p>
          </div>

          <div className="grid">
            <div className="row">
              {renderProduct(product.featuredProducts)}

            </div>
          </div>
        </div>


        <div className="box__wrapper">
          <div className="row">
            <div className="col l-4 m-4 c-12">
              <div className="box-1">
                <div className="box__svg">
                  <svg viewBox="32.5 16 135.2 168.1" width="39px" height="48px">
                    <title id="comp-j52iie0t-svgtitle">Shopping bags</title>
                    <g>
                      <path d="M159.6 58.3h-18.4V54c0-13.7-9.6-25.4-22.8-28-1.7-.3-3.5-.5-5.3-.5-1.7 0-3 1.3-3 3s1.3 3 3 3c1.4 0 2.8.1 4.2.4 10.4 2 18 11.3 18 22.1v4.3h-24.5v-12c0-16.7-13.4-30.3-29.9-30.3h-3.6c-16.5 0-29.9 13.6-29.9 30.3v12h-7c-4.3 0-7.9 3.5-7.9 7.9v110c0 4.3 3.5 7.9 7.9 7.9h119.3c4.3 0 7.9-3.5 8-7.9v-110c-.3-4.4-3.8-7.9-8.1-7.9zm-106.3-12C53.3 32.9 64 22 77.2 22h3.6c13.2 0 23.9 10.9 23.9 24.3v12H87.4V56c0-6 2.3-11.7 6.5-15.9 1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0-5.3 5.4-8.2 12.5-8.2 20.1v2.2H53.3V46.3zM38.5 176.1V66.2c0-1 .8-1.9 1.9-1.9l7-.1v14.9c0 1.7 1.3 3 3 3s3-1.3 3-3V64.3h51.5v14.9c0 1.7 1.3 3 3 3s3-1.3 3-3V64.3h15.2V178H40.3c-1 0-1.8-.8-1.8-1.9zm123.1 0c-.1 1-.9 1.9-2 1.9H149v-53.7c0-1.7-1.3-3-3-3s-3 1.3-3 3V178h-11.1V64.3H143v32.4c0 1.7 1.3 3 3 3s3-1.3 3-3V64.3h10.6c1 0 1.9.8 2 1.9v109.9z">
                      </path>
                    </g>
                  </svg>
                </div>
                <h2 className="box__title">Pick Up Options</h2>
                <div className="box__content">
                  <p>
                    I'm a paragraph. Click here to add your own text and edit me. Let your users get
                    to know you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l-4 m-4 c-12">
              <div className="box-2">
                <div className="box__svg">
                  <svg viewBox="13.5 40.8 173 118.3" width="64px" height="43px">
                    <title id="comp-kaeysne0-svgtitle">Delivery van icon</title>
                    <g>
                      <path d="M179.7 80.6H163L144 45c-1.4-2.6-4-4.2-6.9-4.2H43.7c-4.4 0-7.9 3.7-7.9 8.2v14.7H16.5c-1.7 0-3 1.3-3 3s1.3 3 3 3h32.4c1.7 0 3-1.3 3-3s-1.3-3-3-3h-7.1V49c0-1.2.9-2.2 1.9-2.2h93.4c.6 0 1.3.4 1.6 1l20.7 38.7h20.3c.4 0 .8.5.8 1v29.6h-66.3v-58c0-1.7-1.3-3-3-3s-3 1.3-3 3v58H41.8V87.5h7.1c1.7 0 3-1.3 3-3s-1.3-3-3-3h-7.1v-3.8c0-1.7-1.3-3-3-3s-3 1.3-3 3v3.8h-7.6c-1.7 0-3 1.3-3 3s1.3 3 3 3h7.6v51.1c0 4.5 3.5 8.1 7.9 8.1h13.5c1.4 7.1 7.7 12.4 15.2 12.4 8.5 0 15.5-7 15.5-15.5s-7-15.5-15.5-15.5c-7.6 0-13.9 5.4-15.2 12.6H43.7c-1 0-1.9-1-1.9-2.1v-15.5h138.7v15.5c0 1.2-.8 2.1-1.9 2.1h-22.3c-1.4-7.2-7.7-12.6-15.2-12.6-7.6 0-13.9 5.4-15.2 12.6H94c-1.7 0-3 1.3-3 3s1.3 3 3 3h31.9c1.4 7.1 7.7 12.4 15.2 12.4 7.5 0 13.7-5.3 15.2-12.4h22.3c4.3 0 7.9-3.7 7.9-8.1v-51c0-3.9-3.1-7-6.8-7zM72.4 134.2c5.2 0 9.5 4.3 9.5 9.5s-4.3 9.5-9.5 9.5-9.5-4.3-9.5-9.5 4.2-9.5 9.5-9.5zm68.7 19c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5z">
                      </path>
                    </g>
                  </svg>
                </div>
                <h2 className="box__title">Same Day Delivery</h2>
                <div className="box__content">
                  <p>
                    I'm a paragraph. Click here to add your own text and edit me. Let your users get
                    to know you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col l-4 m-4 c-12">
              <div className="box-3">
                <div className="box__svg">
                  <svg width="54px" height="63px" viewBox="31.075 21.391 138.032 158.809">
                    <title id="comp-j52ifm89-svgtitle">Man with face mask icon</title>
                    <g>
                      <path fill="" d="M53 84.3c.8.3 1.7.2 2.4-.2.1-.1 11.2-7.5 15-13.3 17.7.5 35.5-4.3 50.6-13.7 1.1 1.3 2.9 3.3 4.4 5.1 5.9 7 14.8 17.5 21.4 22.1.5.3 1 .5 1.5.5.3 0 .6-.1 1-.2.8-.3 1.4-1 1.6-1.9 3.1-14.1 2.2-25.4-2.6-33.8-4.3-7.5-10.9-10.9-15.7-12.5-2.7-.9-4.6-1.3-6.1-1.4-4.3-7.3-11.4-11.9-20.6-13.2-7.6-1.1-14.6.3-17.2.9-12.8 3.1-24.1 11.2-31 22.1-7.1 11.2-9.4 24.8-6.4 37.6.3.9.9 1.6 1.7 1.9zm73.9-44.7c-.1.1-.2.2-.3.2.1 0 .2-.1.3-.2zm.3-.4c-.1.1-.1.2-.2.3.1-.1.1-.2.2-.3zm-.7.7c-.1.1-.3.2-.4.2.2 0 .3-.1.4-.2zm-64.2 7.8c6.2-9.8 16.3-17 27.8-19.8 4-1 24.4-5 32.6 11 .5.9 1.4 1.5 2.4 1.4h.2c1 0 10.2.7 16.4 8.4 5.3 6.5 6.9 16.1 4.9 28.6-5.6-5-12.3-13-17.1-18.6-4.2-4.9-5.7-6.7-6.8-7.4-.4-.3-.9-.4-1.4-.4-.5 0-1 .1-1.5.4-15 9.8-33 14.7-50.9 13.9-1.1 0-2.2.6-2.6 1.7-1 2.5-6.6 7.2-10.6 10.2-1.2-9.9 1.1-20.7 6.6-29.4z" data-color={1} />
                      <path fill="" d="M69 151.1c-1.4 0-2.7 1.2-2.7 2.6 0 3.8-3.8 8.8-7.4 12.1-3.4 3.1-5.9 4.1-10.5 5.7-4.9 1.6-9.9 2.8-15 3.4-1.5.2-2.5 1.5-2.3 3 .2 1.3 1.3 2.3 2.6 2.3h.3c5.5-.7 10.9-1.9 16.1-3.7 4.7-1.6 8.1-2.9 12.4-6.7 2.1-1.9 9.1-8.7 9.2-16-.1-1.5-1.3-2.7-2.7-2.7z" data-color={1} />
                      <path fill="" d="M166.7 174.9c-5.1-.6-10.2-1.8-15-3.4-4.6-1.5-7.1-2.6-10.5-5.7-3.7-3.3-7.4-8.3-7.4-12.1 0-1.5-1.2-2.7-2.7-2.6-1.5 0-2.6 1.2-2.6 2.7.1 7.3 7.1 14.1 9.2 16 4.3 3.8 7.7 5.2 12.4 6.7 5.2 1.8 10.6 3 16.1 3.7h.3c1.3 0 2.5-1 2.6-2.3.1-1.5-.9-2.9-2.4-3z" data-color={1} />
                      <path fill="" d="M134.7 143.1c0-.1 0-.1 0 0 3.7-11.2 22.8-32.5 23-32.7l.1-.1c.2-.3 5.4-6.6 3.7-12.9-1-3.7-4-6.4-9-8.1-.1 0-.2-.1-.3-.1-1.4-.4-6.3-1.2-11.6 3.7-2.5 2.4-5.3 5.8-8.7 10.4-23-12.1-53.4-3.3-61.3-.7-1.1-1.5-2.1-2.9-3-4.1-1.5-2.2-2.9-4.1-4.2-5.6-4.4-4.8-9.4-5-12.6-3.6h-.1c-5.2 2.4-8.3 5.6-9 9.6-1.1 5.8 3.4 10.8 4 11.4.9 1 18.4 21 22 31.9.1.4.3.7.6 1 .1.2.3.4.5.6.3.3 8.2 6.8 20.1 10.2 3.9 1.1 8.6 1.9 13.7 1.9 9.3 0 20.3-2.8 31.3-11.6.4-.3.7-.7.8-1.2zm9.5-46.3c3.3-3.1 6-2.6 6.6-2.5 3.1 1.1 5 2.6 5.5 4.5.8 3-1.6 6.8-2.6 8-1 1.1-13.3 14.9-20.2 26.5l1.6-25.6c3.7-4.7 6.7-8.6 9.1-10.9zm-94.6 10s-.1-.1 0 0c-.9-1-3.2-4.1-2.7-6.9.4-2.2 2.4-4.1 5.9-5.7h.1c.7-.3 3.4-1.1 6.5 2.3 1.1 1.2 2.3 2.9 3.8 5.1 1 1.4 2.1 3 3.4 4.7v.5l1.2 23.9c-6.9-11.1-17.6-23.2-18.2-23.9zm24 34.1l-.4-8.8c2.3.4 5.7 1 9.6 1 1.4 0 2.6-1.2 2.7-2.6 0-1.5-1.1-2.7-2.6-2.7-4.4-.1-8.1-.8-9.9-1.2l-.4-7.7 14.6.3h.1c1.4 0 2.6-1.2 2.7-2.6 0-1.5-1.1-2.7-2.6-2.7l-15-.3-.3-5.9c6.8-2.3 36.6-11 57.8.5l-2.2 34.2c-24.9 17.5-48.3 2.8-54.1-1.5z" data-color={1} />
                    </g>
                  </svg>
                </div>
                <h2 className="box__title">Health &amp; Safety Rules</h2>
                <div className="box__content">
                  <p>
                    I'm a paragraph. Click here to add your own text and edit me. Let your users get
                    to know you.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </Layout>
  )

}

export default Home