import { ReactElement, type FC, memo, ChangeEvent } from "react";
import styled from "styled-components";

import { VisibleRows, actionBarPropsType } from "./types";

import SearchIcon from "../../assets/icons/searchIcons";
import Pagination from './pagination';

const ActionBarWrapper=styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:${({theme})=>theme.background?.default};
    `

const SearchBar=styled.div`
    display: flex;
    align-items: center;
    input{
        border: 1px solid ${({theme})=>theme.border?.default};
        padding: 10px;
        width: 400px;
        padding-left: 30px;
        outline-color: none;

        &:focus{
            border: ${({theme})=>theme.border?.default};
            outline-color: ${({theme})=>theme.border?.default};
            outline-style:inset;
        }
    }

    svg{
        height: 24px;
        width: 24px;
        fill: ${({theme})=>theme.text?.dark};
        margin-right: -24px;
        z-index: 10;
    }
` 

const RightSectionBar = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;    

    & >div{
        display: flex;
        align-items: center;
        color:  ${({theme})=>theme.text?.default};

         select{
            height: 36px;
            width: 60px;
            border: 1px solid  ${({theme})=>theme.border?.default};
            outline-color:  ${({theme})=>theme.border?.default};
            margin: 0 10px;
            color: var(--c-font);
            text-align: center;
        }
    }
` 


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
        <ActionBarWrapper>
            <SearchBar>
                <SearchIcon /> 
                <input 
                    type="text" 
                    value={searchText || ""}
                    placeholder="Search..."
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>onTextChange(e.target.value)}
                />
            </SearchBar>
            <RightSectionBar>
                <div>
                    <span>Enteries</span>
                    <select onChange={(e:ChangeEvent<HTMLSelectElement>)=>onVisibleRowChange(parseInt(e.target.value) as VisibleRows )}>
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
            </RightSectionBar>
        </ActionBarWrapper>
    )
}

export default memo(ActionBar);