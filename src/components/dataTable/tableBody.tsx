import { ReactElement, ReactNode, type FC } from "react";
import { TableColumnDataCell, TableHeaderDataCell } from "./types";

type TableColumnDataCellProps = {
    rows:TableColumnDataCell[],
    headers:TableHeaderDataCell[];
    stripe:boolean,
    onRowClick:(row:TableColumnDataCell)=>void
}

const TableBody:FC<TableColumnDataCellProps> =({rows, headers, stripe, onRowClick}):ReactElement=>{
    const getAllRows = ()=>{
        const allRows:TableColumnDataCell[] = []

        rows.forEach(row=>{
            const rowData= {}

            headers.forEach(header=>{
                //if the object has the property of header name
                if(header.name in row ){
                    Object.assign(rowData, {[header.name]: row[header.name]})
                }
            })
            allRows.push(rowData)
        })

        return allRows;
    }
    return(
        <tbody className="data-table__body data-table__body--stripe">
            {
               getAllRows().map((row):ReactNode=>{
                    return(
                        <tr>
                            {
                                Object.values(row).map(value=><td onClick={()=>onRowClick(row)}>{value as string}</td>)
                            }
                        </tr>
                    )
               })
               
            }
        </tbody>
    )
}

export default TableBody