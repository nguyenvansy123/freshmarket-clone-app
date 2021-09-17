import React, { useEffect, useState } from 'react'
import "./style.css"
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailsById } from '../../actions/product.actions'
import { generatePublicUrl } from '../../urlConfig'
import { Link } from 'react-router-dom'
import { addToCart } from '../../actions'

/**
* @author
* @function ProductDetails
**/

const ProductDetails = (props) => {

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const [qty, setQty] = useState(1)
    const { match } = props
    const [form1, setForm1] = useState(false)
    const [form2, setForm2] = useState(false)
    const [form3, setForm3] = useState(false)

    useEffect(() => {
        const { productId } = props.match.params;
        const payload = {
            params: {
                productId,
            },
        };
        dispatch(getProductDetailsById(payload));
    }, [])
    const productDetail = product.productDetails

    if (Object.keys(productDetail).length === 0) {
        return null
    }

    const handleForm = (i) => {
        if (i === 1) {
            setForm1(!form1)
        }
        if (i === 2) {
            setForm2(!form2)
        }
        if (i === 3) {
            setForm3(!form3)
        }
    }

    const handleQty = (e) => {
        setQty(e.target.value)
    }

    const onAddToCart = () => {

        const { _id, name, price } = productDetail
        const img = productDetail.productPictures[0].img
        dispatch(addToCart({ _id, name, price, img }, parseInt(qty)))

    }



    return (
        <Layout>
            <div className="container">
                <div className="grid wide">
                    <div className="detail__container">
                        <div className="row">
                            <nav className="detail__nav">
                                <div className="nav__breadcrumbs">
                                    <Link to={match.params.url === "home" ? "/" : `/${match.params.url}`} >{match.params.url} </Link>/ <span> {match.params.productSlug}</span>
                                </div>

                            </nav>
                            <div className="col l-6 m-6 c-12">
                                <img src={`${generatePublicUrl(productDetail.productPictures[0].img)}`} className="detail__img" alt="" />
                                <div className="description">
                                    {productDetail.description}
                                </div>
                            </div>
                            <div className="col l-6 m-6 c-12">
                                <h1 className="detail__product-title">I'm a product</h1>
                                <span className="sku">SKU: 0012</span>
                                <div className="product-price">
                                    {/* <span className="formatted-secondary-price "> $9.99</span> */}
                                    <span className="sr-formatted-primary-price">{productDetail.price}</span>
                                </div>
                                <div className="product-options-inputs">
                                    <label className="number-input-spinner-title">Quantity</label>
                                    <input type="number" id="number-input-spinner-container" value={qty} min={1} max={9999} onChange={(e) => handleQty(e)} />
                                </div>
                                <button className="detail__add" onClick={onAddToCart} >Add to Cart</button>
                                <Link className="detail__by" to="/checkout" >By Now</Link>
                                <div className="detail__info">
                                    <ul className="collapse-info-section">
                                        <li>
                                            <button onClick={() => handleForm(1)}>
                                                <h3 className="info-section-title" >PRODUCT INFO</h3>
                                                {
                                                    form1 ? (
                                                        <span >
                                                            <svg viewBox="0 0 15 15" fill="currentColor" width={15} height={15}>
                                                                <g id="Page-2" stroke="none" fill="none" strokeWidth={1} fillRule="evenodd">
                                                                    <g id="Desktop-1920-/-1080" fill="currentColor" fillRule="nonzero">
                                                                        <g id="new_minus" transform="translate(2 7)">
                                                                            <g id="Rectangle-5">
                                                                                <g id="Page-1">
                                                                                    <g id="Desktop-1920-/-1080">
                                                                                        <g id="Group">
                                                                                            <path id="Rectangle-5" d="M0 0L11 0 11 1 0 1z" />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>

                                                    )
                                                        : <span style={{ fontSize: "2rem" }}>+</span>

                                                }
                                            </button>
                                            <div className={form1 ? "content__box" : "content__box hiden"}>
                                                <p>
                                                    I’m a Refund policy. I’m a great place to let your customers know what
                                                    to
                                                    do in case they are dissatisfied with their purchase. Having a
                                                    straightforward refund or exchange policy is a great way to build trust
                                                    and reassure your customers that they can buy with confidence.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <button onClick={() => handleForm(2)}>
                                                <h3 className="info-section-title"> REFUND POLICY</h3>
                                                {
                                                    form2 ? (
                                                        <span >
                                                            <svg viewBox="0 0 15 15" fill="currentColor" width={15} height={15}>
                                                                <g id="Page-2" stroke="none" fill="none" strokeWidth={1} fillRule="evenodd">
                                                                    <g id="Desktop-1920-/-1080" fill="currentColor" fillRule="nonzero">
                                                                        <g id="new_minus" transform="translate(2 7)">
                                                                            <g id="Rectangle-5">
                                                                                <g id="Page-1">
                                                                                    <g id="Desktop-1920-/-1080">
                                                                                        <g id="Group">
                                                                                            <path id="Rectangle-5" d="M0 0L11 0 11 1 0 1z" />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>

                                                    )
                                                        : <span style={{ fontSize: "2rem" }}>+</span>

                                                }

                                            </button>
                                            <div className={form2 ? "content__box" : "content__box hiden"}>
                                                <p>
                                                    I’m a Refund policy. I’m a great place to let your customers know what
                                                    to do in case they are dissatisfied with their purchase. Having a
                                                    straightforward refund or exchange policy is a great way to build trust
                                                    and reassure your customers that they can buy with confidence.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <button onClick={() => handleForm(3)}>
                                                <h3 className="info-section-title">SHIPPING INFO</h3>
                                                {
                                                    form3 ? (
                                                        <span >
                                                            <svg viewBox="0 0 15 15" fill="currentColor" width={15} height={15}>
                                                                <g id="Page-2" stroke="none" fill="none" strokeWidth={1} fillRule="evenodd">
                                                                    <g id="Desktop-1920-/-1080" fill="currentColor" fillRule="nonzero">
                                                                        <g id="new_minus" transform="translate(2 7)">
                                                                            <g id="Rectangle-5">
                                                                                <g id="Page-1">
                                                                                    <g id="Desktop-1920-/-1080">
                                                                                        <g id="Group">
                                                                                            <path id="Rectangle-5" d="M0 0L11 0 11 1 0 1z" />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>

                                                    )
                                                        : <span style={{ fontSize: "2rem" }}>+</span>

                                                }

                                            </button>
                                            <div className={form3 ? "content__box" : "content__box hiden"}>
                                                <p>
                                                    I'm a shipping policy. I'm a great place to add more information about
                                                    your shipping methods, packaging and cost. Providing straightforward
                                                    information about your shipping policy is a great way to build trust and
                                                    reassure your customers that they can buy from you with confidence.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )

}

export default ProductDetails