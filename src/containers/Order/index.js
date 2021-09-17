import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { getOrders } from "../../actions/user.action"
import "./style.css"
import { generatePublicUrl } from '../../urlConfig'
/**
* @author
* @function Order
**/

const Order = (props) => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (auth.authenticate) {
    dispatch(getOrders())
    }
  }, [auth.authenticate])

  console.log(user);
  return (
    <Layout>
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 l-12 m-12">
            <div className="order__wrapper">
              <div className="order__title">
                <h1>My Orders</h1>
              </div>
              <div className="order__items">
                {
                  user.orders.map((order) => {
                    return order.items.map((item) => (
                      <Link to={`/order_details/${order._id}`} className="order__item__container" key={item._id} >
                        <div className="order__img__container">
                          <img src={generatePublicUrl(item.productId.productPictures[0].img)}className="order__img" alt="" />
                        </div>
                        <div className="order__row">
                          <div className="order__name">{item.productId.name}
                          </div>
                          <div className="order__price"> ${item.payablePrice}  </div>
                          <div className="order__status">{order.paymentStatus}</div>
                        </div>
                      </Link>
                    ))

                  })
                }


              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )

}

export default Order