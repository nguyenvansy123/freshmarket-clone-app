import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout'
import { getOrder } from "../../actions/user.action";
import "./style.css"
import { generatePublicUrl } from '../../urlConfig';
/**
* @author
* @function OrderDetails
**/

const OrderDetails = (props) => {

  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.user.orderDetails);

  useEffect(() => {
    console.log({ props });
    const payload = {
      orderId: props.match.params.orderId,
    };
    dispatch(getOrder(payload));
  }, []);

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  const formatDate2 = (date) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (date) {
      const d = new Date(date);
      return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
  };

  if (!(orderDetails && orderDetails.address)) {
    return null;
  }


  return (
    <Layout>
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 l-12 m-12">
            <div className="orderDetail__wrapper">
              <div className="card">
                <div className="delAdrContainer">
                  <div className="delAdrDetails">
                    <div className="delTitle">Delivery Address</div>
                    <div className="delName">{orderDetails.address.name}</div>
                    <div className="delAddress">{orderDetails.address.address}</div>
                    <div className="delPhoneNumber">
                      Phone number : {orderDetails.address.mobileNumber}
                    </div>
                  </div>
                  <div className="delMoreActionContainer">
                    <div className="delTitle">More Actions</div>
                    <div className="delName">Download Invoice</div>
                  </div>
                </div>
              </div>

              {
                orderDetails.items.map((item, index) => (
                  <div className="card" key={index}>
                    <div className="order__img__container">
                      <img src={generatePublicUrl(item.productId.productPictures[0].img)} className="order__img" alt="" />
                    </div>
                    <div className="order__box">
                      <div className="orderName">{item.productId.name}
                      </div>
                      <div className="orderPrice">${item.payablePrice} </div>
                    </div>
                    <div style={{ padding: "25px 50px" }}>
                      <div className="orderTrack">
                        {orderDetails.orderStatus.map((status, index) => (
                          <div className={`orderStatus ${status.isCompleted ? "active" : ""
                            }`} key={index}>
                            <div className={`point ${status.isCompleted ? "active" : ""}`}></div>
                            <div className="orderInfo">
                              <div className="status">{status.type}</div>
                              <div className="date">{formatDate(status.date)}</div>
                            </div>
                          </div>

                        ))}
                      </div>
                    </div>
                    <div style={{ fontWeight: "500", fontSize: 14 }}>
                      {orderDetails.orderStatus[3].isCompleted &&
                        `Delivered on ${formatDate2(orderDetails.orderStatus[3].date)}`}
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>

    </Layout>
  )

}

export default OrderDetails