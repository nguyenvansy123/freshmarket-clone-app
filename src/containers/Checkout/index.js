import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../../actions/cart.actions'
import { addOrder, getAddress } from '../../actions/user.action'
import Layout from "../../components/Layout"
import AddressForm from './AddressForm'
import "./style.css"
/**
* @author
* @function Checkout
**/



const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div
        onClick={props.onClick}
        className={`checkoutHeader ${props.active && "active"}`}
      >
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};


const Address = ({ adr, selectAddress, confirmDeliveryAddress, enableAddressEditForm, onAddressSubmit }) => {

  return (
    <div className="addressContainer">
      <div>
        <input name="address" type="radio" onClick={() => selectAddress(adr)} />
      </div>
      <div className="addressInfo">

        {
          !adr.edit ? (
            <div style={{ width: "100%" }}>

              <div className="addressDetail" >

                <div>
                  <span className="addressName">{adr.name}</span>/
                  <span className="addressType">{adr.addressType}</span>/
                  <span className="addressMobileNumber">{adr.mobileNumber}</span>
                </div>

                <button className="anchor" onClick={() => enableAddressEditForm(adr)} >edit</button>

              </div>
              <div className="fullAddress">  {adr.address} <br />  {`${adr.state} - ${adr.pinCode}`}</div>

              {
                adr.selected &&
                (<div style={{ width: "100%" }}>
                  <button className="delivery" onClick={() => confirmDeliveryAddress(adr)} > DELIVERY HERE </button>
                </div>)
              }

            </div>

          ) : <AddressForm
            adr={adr}
            onSubmitForm={onAddressSubmit}
            onCancel={() => { }}
          />
        }

      </div>

    </div>
  )
}



const Checkout = (props) => {


  const dispatch = useDispatch()



  const user = useSelector(state => state.user)
  const auth = useSelector(state => state.auth)
  const cart = useSelector(state => state.cart)

  const [address, setAddress] = useState([])
  const [confirmAddress, setConfirmAddress] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false)
  useEffect(() => {

    auth.authenticate && dispatch(getAddress());
    auth.authenticate && dispatch(getCartItems());

  }, [auth.authenticate])


  useEffect(() => {
    const address = user.address.map((adr) => (
      {
        ...adr,
        selected: false,
        edit: false
      }
    ));
    setAddress(address)
  }, [user.address])


  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setPaymentOption(true)
  };

  const selectAddress = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id
        ? { ...addr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  }

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setPaymentOption(true)
  };

  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  const onConfirmOrder = () => {
    const totalAmount = Object.keys(cart.cartItems).reduce(
      (totalPrice, key) => {
        const { price, qty } = cart.cartItems[key];
        return totalPrice + price * qty;
      },
      0
    );
    const items = Object.keys(cart.cartItems).map((key) => ({
      productId: key,
      payablePrice: cart.cartItems[key].price,
      purchasedQty: cart.cartItems[key].qty,
    }));
    const payload = {
      addressId: selectedAddress._id,
      totalAmount,
      items,
      paymentStatus: "pending",
      paymentType: "cod",
    };

    console.log(payload);
    dispatch(addOrder(payload));
    setConfirmOrder(true);
  }

  useEffect(() => {
    if (confirmOrder && user.placedOrderId) {
      props.history.push(`/order_details/${user.placedOrderId}`);
    }
  }, [user.placedOrderId]);
   
  return (
    <Layout>
      <div className="container">
        <div className="grid wide" >
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <div className="checkoutWrapper">

                <CheckoutStep
                  active={auth.authenticate}
                  stepNumber={1}
                  title={"USER"}
                  body={
                    auth.authenticate ?
                      (<div className="loggedIn">
                        <span>{auth.user.email}</span>
                      </div>)
                      : null
                  }
                />

                <CheckoutStep
                  active={confirmAddress && auth.authenticate}
                  stepNumber={2}
                  title={"DELIVERY ADDRESS"}
                  body={

                    confirmAddress ? (
                      <div className="stepCompleted" > {`${selectedAddress.name} ${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
                    ) : (
                      address.map((value, key) =>
                        <Address
                          adr={value}
                          selectAddress={selectAddress}
                          confirmDeliveryAddress={confirmDeliveryAddress}
                          enableAddressEditForm={enableAddressEditForm}
                          onAddressSubmit={onAddressSubmit}
                          key={key}
                        />
                      ))
                  }

                />


                {
                  confirmAddress ? null : newAddress ? (
                    <CheckoutStep
                      stepNumber={"+"}
                      active={false}
                      title={"ADD ADDRESS"}
                      onClick={() => setNewAddress(false)}
                      body={
                        < AddressForm
                          onSubmitForm={onAddressSubmit}
                          onCancel={() => { }}
                        />
                      }
                    />) : auth.authenticate ?
                    (<CheckoutStep
                      stepNumber={"+"}
                      active={false}
                      title={"ADD ADDRESS"}
                      onClick={() => setNewAddress(true)}
                    />)
                    : null
                }

                <CheckoutStep
                  stepNumber={3}
                  title={"PAYMENT OPTIONS"}
                  active={paymentOption}
                  body={

                    <div>
                      <div className="" style={{ width: "100%", display: "flex", alignItems: "center", paddingLeft: "50px" }}>
                        <input className="cod" type="radio" value="cod" />
                        <label style={{ fontSize: "1.5rem" }} >Cash on  delivery </label>
                      </div>
                      <button className="confirmOrder" onClick={()=>onConfirmOrder()}>CONFIRM ORDER</button>
                    </div>
                  }
                />             

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )

}

export default Checkout