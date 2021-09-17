import React from 'react'
import { useDispatch } from 'react-redux'
import { sortByAlphabet, sortByPrice } from '../../../actions'
/**
* @author
* @function Sort
**/

const Sort = (props) => {
    const dispatch = useDispatch()

    const sortByInput = (e) => {
        let value = e.target.value
        let direction = value.endsWith('asc') ? "asc" : "desc";
        if (value.startsWith("price")) {
            dispatch(sortByPrice({direction}))
        }
        else {
            dispatch(sortByAlphabet({direction}))
        }

    }

    return (
        <div className="product__classify">
            <select name="classifyID" className="classify" defaultValue={0} onChange={(e) => sortByInput(e)}  >
                <option value="" >Sort by</option>
                <option value="alphabet_asc">Name A-Z</option>
                <option value="alphabet_desc">Name Z-A</option>
                <option value="price_asc" >Price (low to high)</option>
                <option value="price_desc">Price (high to low)</option>
            </select>
        </div>
    )

}

export default Sort