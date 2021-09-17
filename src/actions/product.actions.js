import { productConstants } from "./constants"
import axios from "../helpers/axios"


export const getAllProduct = () => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST })
        const res = await axios.get("/product/getproduct")
        const product = res.data
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_ALL_PRODUCT_SUCCESS,
                payload: { product }
            })
        }
        else {
            dispatch({
                type: productConstants.GET_ALL_PRODUCT_FAILURE,
                payload: { error: res.data.error }
            })
        }

    }
}

export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST });
       
        let res;
        
        try {
            const { productId } = payload.params;
            
            res = await axios.get(`/product/${productId}`);
            console.log(productId);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        } catch(error) {
            console.log(error);
            dispatch({
                type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }

    }
}



export const filterByCategory = (payload) => {
    return dispatch => {

        dispatch({
            type: productConstants.FILTER_BY_CATEGORY,
            payload
        })
    }
}




export const sortByPrice = (payload) => {
    return dispatch => {

        dispatch({
            type: productConstants.SORT_BY_PRICE,
            payload
        })
    }
}

export const sortByAlphabet = (payload) => {
    return dispatch => {
        dispatch({
            type: productConstants.SORT_BY_ALPHABET,
            payload
        })
    }
}
export const loadNewPage = (payload) => {
    return dispatch => {

        dispatch({
            type: productConstants.SORT_BY_ALPHABET,
            payload
        })
    }
}
export const loadExactPage = (payload) => {
    return dispatch => {

        dispatch({
            type: productConstants.SORT_BY_ALPHABET,
            payload
        })
    }
}


