import React from "react";
import classes from './Paginator.module.css';


const Paginator = ({totalUsersCount, pagesCount, currentPage, onPageChange }) => {
    let pagesCounts = Math.ceil(totalUsersCount / pagesCount);
    let pages = [];
    for (let i = 1; i <= pagesCounts; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(page => {
            return <span onClick={() => {
                onPageChange(page);
            }} className={currentPage === page && classes.active}>{page}</span>
        })}
    </div>


}


export default Paginator;