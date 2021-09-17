import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByCategory } from '../../../actions'

/**
* @author
* @function Filter
**/

const Filter = (props) => {

    const dispatch = useDispatch()
    const category = useSelector(state => state.category)
    const [indexActive, setIndexActive] = useState(null)
    const data = category.categories

    const active = (key, id) => {

        console.log(id);
        setIndexActive(key)
        dispatch(filterByCategory({id}))
    }
  

    return (
        <ul className="filter__list">
            <li className={indexActive === null ? "filter__list-item filter__list-item--active" : "filter__list-item"}><button onClick={() => active(null, null)}>All</button></li>
            {
                data.map((value, key) => (

                    <li className={indexActive === key ? "filter__list-item  filter__list-item--active" : "filter__list-item"} key={key} >
                        <button onClick={() => active(key, value._id)}>{value.name}</button>
                    </li>

                ))
            }

        </ul>
    )

}

export default Filter