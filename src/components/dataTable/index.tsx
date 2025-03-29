import { FC, ReactElement, useState } from "react";
import PropTypes from "prop-types";

import ActionBar from "./actionBar";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { TableColumnDataCell, TableHeaderDataCell, TableProps, sortDirection, visibleRows } from "./types";

const ReactDataTable:FC<TableProps> = (props):ReactElement=>{
    const { 
        showActionBar=true,
        rows,
        headers,
        stripe=false
    } = props;

    const [numberOfVisibleRows, setNumberOfVisibleRows] = useState<visibleRows>(10);
    const [sortBy, setSortby] = useState<string | null>(null);
    const [sortDir, setSortDir] = useState<sortDirection>(sortDirection.ASC);
    const [searchText, setSearchText] = useState<string | null>useState();
    

    const tableHeaderDataCells = [
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
            name:"nationality",
        },
        {
            label:"Address",
            name:"address",

        }
    ]

    const tableRows = [
        {
            name:"shovit",
            age:45,
            address:"Kathmandu",
            nationality:"Nepali"
        }
    ]

    return(
        <div className="data-table">
            {showActionBar && <ActionBar/>}
            
            <table className="data-table__table">
                <TableHeader 
                    headers={tableHeaderDataCells}
                    onHeaderClick={(header:TableHeaderDataCell)=>console.log(header)}
                />
                <TableBody 
                    rows={tableRows}
                    headers={tableHeaderDataCells}
                    stripe={stripe}
                    onRowClick={(row:TableColumnDataCell, columnCell:string)=>console.log(row, columnCell)}
                />
            </table>
        </div>
    )
}

ReactDataTable.prototype = {
    showActionBar:PropTypes.bool,
    rows:PropTypes.array.isRequired,
    headers:PropTypes.array.isRequired,
    strpe:PropTypes.bool
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