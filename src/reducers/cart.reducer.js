import { cartConstants } from "../actions/constants";

const initialState = {
    cartItems: {},
    updatingCart: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case cartConstants.ADD_TO_CART_REQUEST:
            state = { ...state, updatingCart: true }
            break;

        case cartConstants.ADD_TO_CART_SUCCESS:
            state = { ...state, updatingCart: false, cartItems: action.payload.cartItems }
            break;

        case cartConstants.ADD_TO_CART_FAILURE:
            state = { ...state, updatingCart: false, error: action.payload.error }
            break;
        case cartConstants.RESET_CART:
            state = {
                ...initialState
            }
        case cartConstants.REMOVE_CART_ITEM_REQUEST:

            state = { ...state, updatingCart: true }
            break;

        case cartConstants.REMOVE_CART_ITEM_SUCCESS:
          if (action.payload) {
           delete state.cartItems[action.payload.productId]
          } 
             state = { ...state, updatingCart: false }
            break;

        case cartConstants.REMOVE_CART_ITEM_FAILURE:
            state = { ...state, updatingCart: false, error: action.payload.error }
            break;
        default:
            break;
    }
    return state
}