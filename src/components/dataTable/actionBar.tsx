import { ReactElement, type FC } from "react";
import SearchIcon from "../../assets/icons/searchIcons";
import ArrowIcon from "../../assets/icons/arrowIcon";

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
                <div className="data-table__pagination">
                    <div className="data-table__pagination-nav"><ArrowIcon /> <span>previous</span></div>
                    <div className="data-table__pagination-page">1</div>
                    <div className="data-table__pagination-nav data-table__pagination-nav--reverse"> Next <ArrowIcon /> </div>
                </div>
            </div>
        </div>
    )
}

export default ActionBar;