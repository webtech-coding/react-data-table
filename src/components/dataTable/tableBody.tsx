import { ReactElement, ReactNode, useCallback, type FC } from "react";
import { TableColumnDataCell, TableHeaderDataCell } from "./types";

type TableColumnDataCellProps = {
    rows:TableColumnDataCell[],
    headers:TableHeaderDataCell[];
    stripe:boolean,
    onRowClick:(row:TableColumnDataCell)=>void,
    currentPage:number,
    numberOfVisibleRows:number
}

const TableBody:FC<TableColumnDataCellProps> =(props):ReactElement=>{
    const {rows, headers, stripe, onRowClick, currentPage, numberOfVisibleRows} = props;

    const getAllRows = useCallback(()=>{
        let allRows:TableColumnDataCell[] = []

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
        
        allRows = [...allRows].slice((currentPage-1)* numberOfVisibleRows, numberOfVisibleRows*currentPage)

        return allRows;
    }, [rows, headers, currentPage, numberOfVisibleRows])
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