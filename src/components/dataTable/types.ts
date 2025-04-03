export type TableHeaderDataCell={
    label:string,
    name:string,
    sorting?:boolean,
    hideInSm?:boolean,
    hideinMd?:boolean
}

export type TableColumnDataCell = Record<string, unknown>;

export type TableProps={
    showActionBar?:boolean,
    stripe?:boolean,
    headers:TableHeaderDataCell[],
    rows:TableColumnDataCell[],
    onRowClick?:(row:TableColumnDataCell, name:string)=>void
}

export enum sortDirection{
    ASC = 'asc',
    DESC = 'desc'
}

export type visibleRows = 10 | 20 | 50

export type actionBarPropsType = {
    onTextChange:(text:string)=>void,
    searchText:string | string
}