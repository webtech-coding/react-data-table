import { FC, ReactElement } from "react";
import ActionBar from "./actionBar";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { TableHeaderCell, TableProps } from "./types";


const ReactDataTable:FC<TableProps> = ({showActionBar=true}):ReactElement=>{
    const tableHeaderCells = [
        {
            label:"Name",
            name:"name",
        },
        {
            label:"Age",
            name:"age",
        },
        {
            label:"Nationality",
            name:"address",
        },
        {
            label:"Address",
            name:"address",

        }
    ]

    const tableRows = []

    return(
        <div className="data-table">
            {showActionBar && <ActionBar/>}
            
            <table className="data-table__table">
                <TableHeader 
                    headerCells={tableHeaderCells}
                    onHeaderClick={(header:TableHeaderCell)=>console.log(header)}
                />
                <TableBody 
                    tableRows={tableRows}
                />
            </table>
        </div>
    )
}

export default ReactDataTable;

/*

header = [
    {
        label,
        sorting,
        name,
        hideSm,
        hideMd,
        hideLg
    }

]

data = [
    {
        name:'',
        value:
    }
]

controls=true // that provide table controls.
paginationNumbers
onRowClick


*/