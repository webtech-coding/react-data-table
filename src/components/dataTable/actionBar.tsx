import { ReactElement, type FC, memo, ChangeEvent } from "react";

import { actionBarPropsType } from "./types";

import SearchIcon from "../../assets/icons/searchIcons";
import Pagination from './pagination';

const ActionBar:FC<actionBarPropsType> =(props):ReactElement=>{
    const {
        searchText,
        onTextChange,
        onVisibleRowChange,
        currentPage,
        visibleNumberOfRows,
        rows,
        paginationChange
        } = props
    return(
        <div className="data-table__action-bar">
            <div className="data-table__search">
                <SearchIcon /> 
                <input 
                    type="text" 
                    value={searchText || ""}
                    placeholder="Search..."
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>onTextChange(e.target.value)}
                />
            </div>
            <div className="data-table__pages">
                <div className="data-table__entries">
                    <span>Enteries</span>
                    <select onChange={(e:ChangeEvent<HTMLSelectElement>)=>onVisibleRowChange(parseInt(e.target.value))}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <Pagination 
                    rows={rows}
                    currentPage={currentPage}
                    visibleNumberOfRows={visibleNumberOfRows}
                    paginationChange={paginationChange}
                />
            </div>
        </div>
    )
}

export default memo(ActionBar);