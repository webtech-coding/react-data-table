import { FC, ReactElement, memo } from 'react';

import { PaginationPropsTypes } from './types';

import ArrowIcon from "../../assets/icons/arrowIcon";

const Pagination:FC<PaginationPropsTypes> =({currentPage, visibleNumberOfRows, rows, paginationChange}):ReactElement=>{
    
    const getTotalPages =():number=>{
        const rowsPerPage = rows.length / visibleNumberOfRows;
       
        let totalPagesOfRows =rowsPerPage < 1 ? 1 : Math.floor(rowsPerPage)
       
        totalPagesOfRows += rows.length > visibleNumberOfRows &&  rows.length % visibleNumberOfRows ? 1 : 0
        
        return totalPagesOfRows;
    }

    const handlePaginationChange=(dir:string)=>{
        const totalPages = getTotalPages();
        if(dir==='prev'){
            if(currentPage===1)return
            paginationChange(-1)
        }else{
            if(currentPage === totalPages)return
            paginationChange(+1)
        }
    }

    return(
        <div className="data-table__pagination">
            <div className={`data-table__pagination-nav ${currentPage===1 ? 'data-table__pagination-nav--disabled':''}`} onClick={()=>handlePaginationChange('prev')}>
                <ArrowIcon /> <span>Previous</span>
            </div>
                <div className="data-table__pagination-page data-table__pagination-index">
                    <strong>{currentPage}</strong> of <strong>{getTotalPages()}</strong> pages
                </div>
            <div className={`data-table__pagination-nav data-table__pagination-nav--reverse ${currentPage===getTotalPages() ? 'data-table__pagination-nav--disabled':''}`} onClick={()=>handlePaginationChange('next')}> 
                Next <ArrowIcon /> 
            </div>
    </div>
    )
}

export default memo(Pagination)