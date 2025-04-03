import { ReactElement, type FC, memo, ChangeEvent } from "react";

import { actionBarPropsType } from "./types";

import SearchIcon from "../../assets/icons/searchIcons";
import Pagination from './pagination';

const ActionBar:FC<actionBarPropsType> =({searchText,onTextChange}):ReactElement=>{
    return(
        <div className="data-table__action-bar">
            <div className="data-table__search">
                <SearchIcon /> 
                <input 
                    type="text" 
                    value={searchText}
                    placeholder="Search..."
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>onTextChange(e.target.value)}
                />
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

export default memo(ActionBar);