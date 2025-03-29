import { FC, ReactElement, memo } from "react"
import { TableHeaderDataCell } from "./types"

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
                            <th onClick={()=>onHeaderClick(cell)}>{cell.label}</th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default memo(TableHeader)