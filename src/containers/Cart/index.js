import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import Layout from "../../components/Layout"
import ItemForm from '../../components/UI/ItemForm'
import { addToCart, getCartItems, removeCartItem } from '../../actions/cart.actions'
import img from "../../1.png"
import { Link } from 'react-router-dom'
/**
* @author
* @function Cart
**/

const Cart = (props) => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const cart = useSelector(state => state.cart)
    const [cartItems, setCartItems] = useState(cart.cartItems)
    useEffect(() => {
        setCartItems(cart.cartItems)
    }, [cart.cartItems])

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems())
        }
    }, [auth.authenticate])
    

    const onQuantityInc = (_id, qty) => {
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, 1));
    }

    const onQuantityDec = (_id, qty) => {
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, -1));
    }




    return (
        <Layout>
            <div className="container-cart">
                <div className="grid wide">
                    <div className="row car__wrapper">
                        <div className="col l-8 m-8 c-12">
                            <div className="item-list">
                                <span className="bd__title">
                                    <h2 className="cart__title">My cart</h2>
                                </span>
                                <div className="cart__product-list">
                                    {
                                        Object.keys(cartItems).length === 0 ?
                                            null :
                                            Object.keys(cartItems).map((value, key) => {
                                                return (

                                                    <ItemForm
                                                        key={key}
                                                        data={cartItems[value]}
                                                        onQuantityInc={onQuantityInc}
                                                        onQuantityDec={onQuantityDec}

                                                    />

                                                )
                                            })

                                    }
                                </div>
                                <div className="buyer-actions-panel">
                                    <div className="coupon">
                                        <button className="add-coupon-button">
                                            <svg viewBox="0 0 14 16" fill="currentColor" width={14} height={16} className="_3IcIh">
                                                <g id="final-cart" stroke="none" fill="none" strokeWidth={1} fillRule="evenodd">
                                                    <g id="general-layout" transform="translate(-515 -839)" fill="currentColor">
                                                        <g id="coupon-icon" transform="rotate(30 -1300.653 1393.349)">
                                                            <path d="M1,14.0046024 C0.999339408,13.9996515 9.00460243,14 9.00460243,14 C8.99965149,14.0006606 9,5.41421356 9,5.41421356 L5,1.41421356 L1,5.41421356 L1,14.0046024 Z M-2.72848411e-12,5 L5,-4.66116035e-12 L10,5 L10,14.0046024 C10,14.5543453 9.5443356,15 9.00460243,15 L0.995397568,15 C0.445654671,15 -2.72848411e-12,14.5443356 -2.72848411e-12,14.0046024 L-2.72848411e-12,5 Z" id="Rectangle-6" fillRule="nonzero" />
                                                            <circle id="Oval-2" cx={5} cy={5} r={1} />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span className="add-coupon-button-text">Enter a promo code</span>
                                        </button>
                                        <div className="box__code">
                                            <input className="enter__code" type="text" maxLength={20} placeholder="Enter a promo code" />
                                            <button>Apply</button>
                                        </div>
                                    </div>
                                    <div className="buyer-note">
                                        <button className="add-note-button">
                                            <svg viewBox="0 0 12 13" fill="currentColor" width={12} height={13} className="_3IcIh">
                                                <g id="final-cart" stroke="none" fill="none" strokeWidth={1} fillRule="evenodd">
                                                    <g id="general-layout" transform="translate(-515 -882)">
                                                        <g id="print-icon" transform="translate(515 882)">
                                                            <path d="M0.5,0.5 L8.27826634,0.5 L11.5,3.73740249 L11.5,12.5 L0.5,12.5 L0.5,0.5 Z" id="Rectangle-4-Copy" stroke="currentColor" />
                                                            <path d="M10.7928932,3.5 L8.5,3.5 L8.5,1.20710678 L10.7928932,3.5 Z" id="Rectangle-10" stroke="currentColor" />
                                                            <path id="Rectangle-18" fill="currentColor" d="M3 3H6V4H3z">
                                                            </path>
                                                            <path id="Rectangle-18-Copy" fill="currentColor" d="M3 6H9V7H3z" />
                                                            <path id="Rectangle-18-Copy-2" fill="currentColor" d="M3 9H9V10H3z" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span className="add-note-button-text">Add a note</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-4 m-4 c-12">
                            <div className="total-area">
                                <span className="bd__title">
                                    <h2 className="cart__title">Order Summary</h2>
                                </span>
                                <div className="totals">
                                    <div className="subtotal">
                                        <dl>
                                            <div className="subtotal-box1">
                                                <dt>Subtotal</dt>
                                                <dd className="subtotal-text">${Object.keys(cartItems).reduce((value, key) => {
                                                    return value + cartItems[key].price * cartItems[key].qty
                                                }, 0)}</dd>
                                            </div>
                                            <div className="subtotal-box2">
                                                <dt className="shipping-destination-with-label">Shipping</dt>
                                                <dd className="estimated-shipping">FREE</dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="price-sum">
                                        <dl>
                                            <dt className="total-label">Total</dt>
                                            <dd className="estimated-total">${Object.keys(cartItems).reduce((value, key) => {
                                                return value + cartItems[key].price * cartItems[key].qty
                                            }, 0)}</dd>
                                        </dl>
                                    </div>
                                    <Link className="checkout" to="/checkout" >
                                        <span>
                                            <svg viewBox="0 0 11 14" fill="currentColor" width={11} height={14}>
                                                <g id="Page-1" stroke="none" fill="none" strokeWidth={1} fillRule="evenodd">
                                                    <g id="Group" fill="currentColor">
                                                        <path d="M0,12.7905281 C0,13.348044 0.444836974,13.8 0.995577499,13.8 L10.0044225,13.8 C10.5542648,13.8 11,13.3515084 11,12.7905281 L11,6.00947189 C11,5.45195596 10.555163,5 10.0044225,5 L0.995577499,5 C0.445735229,5 0,5.44849157 0,6.00947189 L0,12.7905281 Z" id="Stroke-1" />
                                                        <path d="M9.5,5 L9.5,4.07597662 C9.5,2.08610548 7.69574843,0.5 5.5,0.5 C3.30425157,0.5 1.5,2.08610548 1.5,4.07597662 L1.5,5 L2.5,5 L2.5,4.07597662 C2.5,2.66911962 3.82991528,1.5 5.5,1.5 C7.17008472,1.5 8.5,2.66911962 8.5,4.07597662 L8.5,5 L9.5,5 Z" id="Stroke-3" fillRule="nonzero" />
                                                    </g>
                                                </g>
                                            </svg>
                                            Checkout
                                        </span>

                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col l-12 m-12 c-12" >
                            <div className="responsive-ssl">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )

}

export default Cart