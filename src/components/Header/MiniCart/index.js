import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"

import ItemForm from '../../UI/ItemForm';
import { addToCart, getCartItems, removeCartItem } from "../../../actions/cart.actions";
import { Link } from 'react-router-dom';



/**
* @author
* @function MiniCart
**/

const MiniCart = (props) => {
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

    const redirectCart=()=>{
        console.log(props);
        // return <Redirect to="/cart" />
    }

    return (
        <>
            <div className={props.show ? "minicart cart-active" : "minicart"} >

                <div className="cart-box">
                    <div className="cart-header">
                        <button className="cart-widget-close" onClick={props.handleCloseCartForm}>
                            <svg viewBox="0 0 24 24" >
                                <g>
                                    <polygon transform="translate(12.530500, 11.353500) scale(1, -1) rotate(-90.000000) translate(-12.530500, -11.353500) " points="18.177 7.823 12.53 13.47 6.885 7.823 6.177 8.53 12.53 14.884 18.884 8.53">
                                    </polygon>
                                </g>
                            </svg>
                        </button>
                        <h3 className="cart-widge-title">CART</h3>
                    </div>
                    <div className="cart-content">

                        <div className="cart-list-item">
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
                                                cartMini={true}

                                            />

                                        )
                                    })

                            }


                        </div>



                        <div className="cart-sum">
                            <span className="sum-titel">Subtotal</span>
                            <span className="sum-price">${Object.keys(cartItems).reduce((value, key) => {
                                return value + cartItems[key].price * cartItems[key].qty
                            }, 0)}</span>
                        </div>
                    </div>

                    <div className="cart-footer">
                        <Link className="cart-mini-btn" to="/cart" > View Cart</Link>
                    </div>
                </div>
            </div>
            <div className={props.show ? "cart-overlay cart-overlay-active" : "cart-overlay"} onClick={props.handleCloseCartForm} />
        </>
    )

}

export default MiniCart