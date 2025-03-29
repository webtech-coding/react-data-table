import { ReactElement, ReactNode, type FC } from "react";
import { TableColumnDataCell, TableHeaderDataCell } from "./types";

type TableColumnDataCellProps = {
    rows:TableColumnDataCell[],
    headers:TableHeaderDataCell[];
    stripe:boolean,
    onRowClick:(row:TableColumnDataCell, columnCell:string)=>void
}

const TableBody:FC<TableColumnDataCellProps> =({rows, headers, stripe, onRowClick}):ReactElement=>{
    return(
        <tbody>
            {
                rows.map((row):ReactNode=>{
                    return(
                        <tr onClick={()=onRowClick(row, row.name as string)}>
                            <td>{row.name as string}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TableBody