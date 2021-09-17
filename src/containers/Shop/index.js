import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import "./style.css"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../../components/UI/ProductItem"
import Filter from './Filter'
import Pagination from './Pagination'
import Sort from './Sort'

/**
* @author
* @function 
**/

const Shop = (props) => {

    const dispatch = useDispatch()

    const product = useSelector(state => state.product)
  
    const products = product.filteredProducts

    const [currentPage, setCurrentPage] = useState(1);

    const [itemPerPage, setItemPerPage] = useState(8);

    const indexOfLastItem = currentPage * itemPerPage;

    const indexOfFirstItem = indexOfLastItem - itemPerPage;

    const currrentItems = products.slice(indexOfFirstItem, indexOfLastItem)

    const page = [];

    for (let i = 1; i <= Math.ceil(products.length / itemPerPage); i++) {
        page.push(i)
    }

    const handlePage = (e) => {
        setCurrentPage(e)
    }

    const renderProduct = (data) => {
        return data.map((value, key) =>
        (<div className="col l-3 m-4 c-6" key={key} >
            <ProductItem data={value} mini={true} match={props.match} />
        </div>)
        )

    }
 
    return (
        <Layout>
            <div className="container-shop">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            <div className="textnew">
                                <h2>Shop</h2>
                                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                            </div>
                        </div>
                        <div className="col l-12 m-12 c-12">
                            <div className="shop__wrapper">
                                <div className="row">
                                    <div className="col l-3 m-3 c-12">
                                        <div className="shop__filter">
                                            <span className="filter__title">Filter by</span>
                                            <hr />
                                            <button className="filter__btn-collection">
                                                <span className="filter__btn-title">Collection</span>
                                                <span className="filter__btn--icon-full">
                                                    <svg viewBox="0 0 16 16" fill="currentColor" width={16} height={16}>
                                                        <path fill="currentColor" d="M12.159 7.2h-3.36v-3.36c0-0.442-0.358-0.48-0.8-0.48s-0.8 0.038-0.8 0.48v3.36h-3.359c-0.442 0-0.48 0.358-0.48 0.8s0.038 0.8 0.48 0.8h3.359v3.36c0 0.442 0.358 0.48 0.8 0.48s0.8-0.038 0.8-0.48v-3.36h3.36c0.442 0 0.481-0.358 0.481-0.8s-0.038-0.8-0.481-0.8z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="filter__btn--icon-expan icon-active">
                                                    <svg viewBox="0 0 16 16" fill="currentColor" width={16} height={16}>
                                                        <path fill="currentColor" d="M12.159 7.2h-8.319c-0.442 0-0.48 0.358-0.48 0.8s0.038 0.8 0.48 0.8h8.319c0.442 0 0.481-0.358 0.481-0.8s-0.038-0.8-0.481-0.8z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <Filter />
                                            <hr />

                                        </div>
                                    </div>
                                    <div className="col c-9 m-9 c-12">
                                        <div className="shop__proudct">
                                            <Sort />
                                            <div className="product__wrapper">
                                                <div className="grid">
                                                    <div className="row">

                                                        {renderProduct(currrentItems)}
                                                    </div>
                                                </div>
                                            </div>
                                            <Pagination
                                                page={page}
                                                currentPage={currentPage}
                                                handlePage={handlePage}

                                            />

                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )

}

export default Shop