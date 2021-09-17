import { userConstants } from "../actions/constants";

const initialState = {
    address: [],
    orders: [],
    orderDetails: {},
    error: null,
    loading: false,
    orderFetching: false,
    placedOrderId: null,
}

export default (state = initialState, action) => {

    switch (action.type) {
        case userConstants.ADD_USER_ADDRESS_REQUEST:
            state = {
                ...state, loading: true
            }
            return state
        case userConstants.ADD_USER_ADDRESS_SUCCESS:
            state = {
                ...state, loading: false, address: action.payload.address
            }
            return state

        case userConstants.ADD_USER_ADDRESS_FAILURE:
            state = {
                ...state, loading: false, address: action.payload.error
            }
            return state

        case userConstants.GET_USER_ADDRESS_REQUEST:
            state = {
                ...state, loading: true
            }
            return state
        case userConstants.GET_USER_ADDRESS_SUCCESS:

            state = {
                ...state,
                loading: false,
                address: action.payload.address

            }
            return state

        case userConstants.GET_USER_ADDRESS_FAILURE:

            state = {
                ...state, loading: false, error: action.payload.error
            }
            return state

        case userConstants.ADD_USER_ORDER_REQUEST:
            state = {
                ...state, orderFetching: true
            }
            return state
        case userConstants.ADD_USER_ORDER_SUCCESS:

            state = {
                ...state,
                orderFetching: false,
                placedOrderId: action.payload.order._id

            }
            return state

        case userConstants.ADD_USER_ORDER_FAILURE:

            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            return state

        case userConstants.GET_USER_ORDER_REQUEST:
            state = {
                ...state,
                orderFetching: true,
            };
            break;
        case userConstants.GET_USER_ORDER_SUCCESS:
            state = {
                ...state,
                orders: action.payload.orders,
                orderFetching: false,
            };
            break;
        case userConstants.GET_USER_ORDER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                orderFetching: false,
            };
            break;

        case userConstants.GET_USER_ORDER_DETAILS_REQUEST:
            break;
        case userConstants.GET_USER_ORDER_DETAILS_SUCCESS:
            state = {
                ...state,
                orderDetails: action.payload.order,
            };
            break;
        case userConstants.GET_USER_ORDER_DETAILS_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            };
            break;

        default:
            break;
    }
    return state
}