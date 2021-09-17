import React, { useEffect, useState } from 'react'
import { generatePublicUrl } from '../../../urlConfig';
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../actions';
/**
* @author
* @function ProductItem
**/

const ProductItem = (props) => {

  const { data, match } = props
  const to = `${match.url === "/" ? "/home" : match.url}/${data.slug}/${data._id}`
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()
  // const product = useSelector(state => state.product)
  const onQuantityIncrement = () => {
    setQty(qty + 1)
  }

  const onQuantityDecrement = () => {
    setQty(qty - 1)
  }




  return (
    <div className={props.mini ? "product__list-item product__list-item--mini" : "product__list-item"}>
      <NavLink to={to} >
        <div className="product__img" style={{ backgroundImage: `url(${generatePublicUrl(data.productPictures[0].img)})` }} ></div>
      </NavLink>
      {/* <span>Special Price</span> */}
      <span className="product__name">{data.name}</span>
      <hr className="underlined" />
      <span className="product__price">
        ${data.price}
      </span>
      <div className="input__wrapper">
        <button name="decrement" aria-label="Remove quantity" className="button__remove" onClick={onQuantityDecrement} disabled={qty <= 1 ? true : false}>
          <svg width={12} height={2} viewBox="0 0 12 2">
            <path d="M0 1.5v-1h12v1z" fill="#969696" fillRule="evenodd" />
          </svg>
        </button>
        <div className="input__root">
          {/* {qty} */}
          {/* <input className="input__native" type="number" aria-label="Quantity" min={1} max={999} step={1} value={qty} onChange={()=>{}} /> */}
          <span style={{ fontSize: "1.5rem", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} > {qty}</span>
        </div>
        <button name="increment" aria-label="Add quantity" className="button__add" onClick={onQuantityIncrement}>
          <svg width={12} height={12} viewBox="0 0 12 12">
            <path d="M6.5 5.5H12v1H6.5V12h-1V6.5H0v-1h5.5V0h1v5.5z" fill="#000" fillRule="evenodd" />
          </svg>
        </button>
      </div>
      <button className="add__cart" onClick={() => {
        const { _id, name, price } = data
        const img = data.productPictures[0].img
        dispatch(addToCart({ _id, name, price, img }, qty))
      }}>Add to Cart</button>
    </div>

  )

}

export default ProductItem