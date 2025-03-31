import { ReactElement, type FC } from "react";
import SearchIcon from "../../assets/icons/searchIcons";

const ActionBar:FC =():ReactElement=>{
    return(
        <div className="data-table__action-bar">
            <div className="data-table__search">
                <SearchIcon /> <input type="text" placeholder="Search..."/>
            </div>
            <div className="data-table__entries">
                this is the entty and pagination section
            </div>
        </div>
    )
}

export default ActionBar;