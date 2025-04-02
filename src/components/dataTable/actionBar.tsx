import { ReactElement, type FC } from "react";
import SearchIcon from "../../assets/icons/searchIcons";
import Pagination from './pagination';

const ActionBar:FC =():ReactElement=>{
    return(
        <div className="data-table__action-bar">
            <div className="data-table__search">
                <SearchIcon /> <input type="text" placeholder="Search..."/>
            </div>
            <div className="data-table__pages">
                <div className="data-table__entries">
                    <span>Enteries</span>
                    <select>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </select>
                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default ActionBar;