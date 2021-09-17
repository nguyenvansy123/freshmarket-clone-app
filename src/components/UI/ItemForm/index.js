import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../../actions/cart.actions';
import { generatePublicUrl } from '../../../urlConfig';
import "./style.css"
/**
* @author
* @function ItemForm
**/

const ItemForm = (props) => {
    const dispatch = useDispatch();

    const [qty, setQty] = useState(props.data.qty)
    const [total, setTotal] = useState(props.data.price * props.data.qty)

    const { data, cartMini } = props


    useEffect(() => {
        setQty(props.data.qty)
    }, [props.data.qty])



    const onQuantityIncrement = () => {
        setQty(qty + 1)
        setTotal(data.price * (qty + 1))
        props.onQuantityInc(data._id, qty + 1)
    }

    const onQuantityDecrement = () => {
        setQty(qty - 1)
        setTotal(data.price * (qty - 1))
        props.onQuantityDec(data._id, qty - 1)
    }

    const remove = (id, e) => {
        dispatch(removeCartItem({ productId: id }))

    }


    return (
        <div className={cartMini ? "productItem cartMini" : "productItem"}>
            <div className="productItem__image">
                <img src={`${generatePublicUrl(data.img)}`} alt="" />
            </div>

            <div className="productItem__info">
                <div style={{ display: "flex", flexDirection: "column", fontSize: "1.5rem", fontWeight: "100" }}>
                    <span className="productItem__name">{data.name}</span>
                    <span className="productItem__price">${data.price}</span>
                </div>

                <div className="productItem__quantity">
                    <button name="decrement" aria-label="Remove quantity" className="button__remove" onClick={onQuantityDecrement} disabled={qty <= 1 ? true : false}>
                        <svg width={12} height={2} viewBox="0 0 12 2">
                            <path d="M0 1.5v-1h12v1z" fill="#969696" fillRule="evenodd">
                            </path>
                        </svg>
                    </button>
                    <span className="qty">
                        {qty}
                    </span>

                    <button name="increment" aria-label="Add quantity" className="button__add" onClick={onQuantityIncrement}>
                        <svg width={12} height={12} viewBox="0 0 12 12">
                            <path d="M6.5 5.5H12v1H6.5V12h-1V6.5H0v-1h5.5V0h1v5.5z" fill="#000" fillRule="evenodd" />
                        </svg>
                    </button>
                </div>

            </div>

            <div className="productItem__total">
                <span className="total">${total}</span>

                <button className="productItem-close" onClick={(e) => remove(data._id, e)}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
                        <path d="M17 6L12.001 10.999 7 6 6 7 11.001 11.999 6 17 7 18 12.001 12.999 17 18 18 17 13 11.999 18 7z">
                        </path>
                    </svg>
                </button>
            </div>

        </div >

    )

}

export default ItemForm