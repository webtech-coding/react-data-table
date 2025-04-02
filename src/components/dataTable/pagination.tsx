import React, { FC, ReactElement } from 'react';

import ArrowIcon from "../../assets/icons/arrowIcon";

const Pagination:FC =():ReactElement=>{
    return(
        <div className="data-table__pagination">
            <div className="data-table__pagination-nav"><ArrowIcon /> <span>previous</span></div>
            <div className="data-table__pagination-page">1</div>
            <div className="data-table__pagination-page">2</div>
            <div className="data-table__pagination-page">3</div>
            <div className="data-table__pagination-page">...</div>
            <div className="data-table__pagination-page">7</div>
        <div className="data-table__pagination-nav data-table__pagination-nav--reverse"> Next <ArrowIcon /> </div>
    </div>
    )
}

export default Pagination