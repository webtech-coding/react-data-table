import { FC, ReactElement, memo } from "react"
import { TableHeaderCell } from "./types"

type TableHeaderPropType ={
    headerCells:TableHeaderCell[],
    onHeaderClick:(e:TableHeaderCell)=>void
}

const TableHeader:FC<TableHeaderPropType> =({headerCells, onHeaderClick}):ReactElement=>{
    return(
        <thead className="data-table__header">
             <tr>
                {
                    headerCells.map(cell=>{
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