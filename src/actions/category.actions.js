import { categoryConstants } from "./constants";
import axios from "../helpers/axios"
export const getAllCategory = () => {

    return async dispatch => {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST })
        const res = await axios.get("/category/getcategories")
     
        const { categories } = res.data
        if (res.status === 200) {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories }
            })
        } else {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                error: { error: res.data.error }
            })
        }
    }
}