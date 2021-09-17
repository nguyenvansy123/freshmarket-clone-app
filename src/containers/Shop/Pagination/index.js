import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
/**
* @author
* @function Pagination
**/

const Pagination = (props) => {

    const [pageNumberLimit, setPageNumberLimit] = useState(3);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    
    
    const { page, handlePage, currentPage } = props
    const renderPageNumber = page.map((value, key) => {
        if (value < maxPageNumberLimit + 1 && value > minPageNumberLimit) {
            return <li key={key}  > <button className={(key + 1) === currentPage ? "page-active" : ""} onClick={() => handlePage(key + 1)}  >{value}</button></li>
        }
        else {
            return null
        }
    })

    const handleNextBtn = () => {
        handlePage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }
    const handlePrevBtn = () => {

        handlePage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    let pageIncrementBtn = null;

    if (page.length > maxPageNumberLimit) {
        pageIncrementBtn = <li style={{listStyle:"none",fontSize:'2rem',cursor:"pointer",margin:"0 5px"}} onClick={handleNextBtn}> &hellip;</li>
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li style={{listStyle:"none",fontSize:'2rem',cursor:"pointer",margin:"0 5px"}} onClick={handlePrevBtn}> &hellip; </li>;
    }


    return (
        
            <div className="product-list-pagination">
                <div className="pagination-nav">
                    <button className="previous" disabled={currentPage === 1} onClick={handlePrevBtn}>

                        <AiOutlineLeft />
                    </button>
                    {pageDecrementBtn}

                    <div className="page-strip">
                        <ul>
                            {renderPageNumber}
                        </ul>
                    </div>
                    {pageIncrementBtn}
                    <button className="next" disabled={currentPage === page.length} onClick={handleNextBtn} >
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
        
    )

}

export default Pagination