import { FC, ReactElement, memo } from "react"
import { TableHeaderDataCell } from "./types"
import SortIcon from "../../assets/icons/sortIcons"

type TableHeaderPropType ={
    headers:TableHeaderDataCell[],
    onHeaderClick:(e:TableHeaderDataCell)=>void
}

const TableHeader:FC<TableHeaderPropType> =({headers, onHeaderClick}):ReactElement=>{
    return(
        <thead className="data-table__header">
             <tr>
                {
                    headers.map(cell=>{
                        return(
                            <th onClick={()=>onHeaderClick(cell)}>
                                <div className="data-table__header-content"> <span>{cell.label}</span><span><SortIcon /></span></div>
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default memo(TableHeader)