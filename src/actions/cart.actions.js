import { cartConstants } from "./constants";
import axios from "../helpers/axios";
import store from "../store";


const getCartItems = () => {
    return async dispatch => {
        try {

            const { cart } = store.getState()
            
            if (cart.cartItems.length > 0) {

                dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
                const res = await axios.get("/user/getCartItems");
                console.log(res);
                if (res.status === 200) {
                    const { cartItems } = res.data
                    if (cartItems) {
                        dispatch({
                            type: cartConstants.ADD_TO_CART_SUCCESS,
                            payload: { cartItems }
                        })
                    }
                }
            }
            else{
                console.log("chua co san pham");
            }
        } catch (error) {
            console.log(error);
        }
    }
};


export const addToCart = (product, newQty = 1) => {
    return async dispatch => {
        const {
            cart: { cartItems },
            auth
        } = store.getState();
        // console.log(Boolean(cartItems[product._id]),cartItems[product._id]);

        const qty = cartItems[product._id] ? parseInt(cartItems[product._id].qty + newQty) : newQty

        cartItems[product._id] = {
            ...product,
            qty
        }
        if (auth.authenticate) {
            dispatch({ type: cartConstants.ADD_TO_CART_REQUEST })
            const payload = {
                cartItems: [{
                    product: product._id,
                    quantity: qty
                }]
            }


            const res = await axios.post('/user/cart/addtocart', payload);

            if (res.status === 201) {
                dispatch(getCartItems());
            }
        } else {
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
        dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems }
        })


    }
};



export const removeCartItem = (payload) => {
    return async (dispatch) => {
        try {
            const { auth } = store.getState();
            if (auth.authenticate) {


                dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
                const res = await axios.post(`/user/cart/removeItem`, { payload });
                console.log(res.data);
                if (res.status === 202) {
                    dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
                    dispatch(getCartItems());
                } else {
                    const { error } = res.data;
                    dispatch({
                        type: cartConstants.REMOVE_CART_ITEM_FAILURE,
                        payload: { error },
                    });
                }
            } else {

                let cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null

                delete cartItems[payload.productId]

                localStorage.setItem("cart", JSON.stringify(cartItems))


                dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS, payload });

            }

        } catch (error) {
            console.log(error);
        }
    };
};

export const updateCart = () => {
    return async dispatch => {
        const { auth } = store.getState();
        let cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null

        if (auth.authenticate) {
            localStorage.removeItem("cart")

            if (cartItems) {
                const payload = {
                    cartItems: Object.keys(cartItems).map((key, index) => {
                        return {
                            quantity: cartItems[key].qty,
                            product: cartItems[key]._id
                        }
                    })
                }
                if (Object.keys(cartItems).length > 0) {
                    const res = await axios.post(`/user/cart/addtocart`, payload);
                    if (res.status === 201) {
                        dispatch(getCartItems());
                    }
                }
            } else {
                dispatch(getCartItems());
            }
        } else {
            if (cartItems) {
                dispatch({
                    type: cartConstants.ADD_TO_CART_SUCCESS,
                    payload: { cartItems }
                })
            }
        }
    }

}




export { getCartItems }