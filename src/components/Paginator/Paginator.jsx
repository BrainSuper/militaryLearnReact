import React, {useEffect, useState} from "react";
import classes from './Paginator.module.css';


const Paginator = ({setCurrentPage, totalUsersCount, pagesCount, currentPage, onPageChange, portionSize }) => {
    let pagesCounts = Math.ceil(totalUsersCount / pagesCount);
    let pages = [];
    for (let i = 1; i <= pagesCounts; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCounts / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
    let leftPortionMargin = (portionNumber - 1) * portionSize + 1;
    let rightPortionMargin = portionNumber * portionSize;


    return <div className={classes.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1);
        }}>Left</button>}

        {pages.filter(page => {
            return page >= leftPortionMargin && page <= rightPortionMargin
        }).map(page => {
            return <span key={page} onClick={(e) => {
                onPageChange(page);
            }} className={currentPage === page && classes.active}>{page}</span>
        })}

        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1);
        }}>Right</button>}
    </div>


}


export default Paginator;