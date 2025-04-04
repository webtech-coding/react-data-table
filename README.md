# React Data Table

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

A reusable and customizable React component for displaying tabular data.
It supports dynamic columns and rows with clean, minimal styling — ideal for rendering lists, reports, or admin dashboards with minimal setup.

This lightweight and minimalistic data table includes essential features out of the box.

## Key build-in features

- ✅ Sorting by column
- ✅ Searching
- ✅ Pagination
- ✅ Custom theming
- ✅ Responsive

## 📦 Installation

```bash
npm install react-data-table
```
## 🚀 Usage

```js
import { DataTable } from "react-data-table";

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
];

function App() {
  return <DataTable columns={columns} data={users} />;
}

```

## props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| tableLayout | `auto` \| `fixed` | `auto` \| `fixed` for any columns is fixed or ellipsis or header is fixed | https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout |
| prefixCls | String | rc-table |  |
| className | String |  | additional className |
| id | String |  | identifier of the container div |
| useFixedHeader | Boolean | false | whether use separator table for header. better set width for columns |
| scroll | Object | {x: false, y: false} | whether table can be scroll in x/y direction, `x` or `y` can be a number that indicated the width and height of table body |
| expandable | Object |  | Config expand props |
| expandable.defaultExpandAllRows | Boolean | false | Expand All Rows initially |
| expandable.defaultExpandedRowKeys | String[] | [] | initial expanded rows keys |
| expandable.expandedRowKeys | String[] |  | current expanded rows keys |
| expandable.expandedRowRender | Function(recode, index, indent, expanded):ReactNode |  | Content render to expanded row |
| expandable.expandedRowClassName | `string` \| `(recode, index, indent) => string` |  | get expanded row's className |
| expandable.expandRowByClick | boolean |  | Support expand by click row |
| expandable.expandIconColumnIndex | Number | 0 | The index of expandIcon which column will be inserted when expandIconAsCell is false |
| expandable.expandIcon | props => ReactNode |  | Customize expand icon |
| expandable.indentSize | Number | 15 | indentSize for every level of data.i.children, better using with column.width specified |
| expandable.rowExpandable | (record) => boolean |  | Config row support expandable |
| expandable.onExpand | Function(expanded, record) |  | function to call when click expand icon |
| expandable.onExpandedRowsChange | Function(expandedRows) |  | function to call when the expanded rows change |
| expandable.fixed | String \| Boolean | - | this expand icon will be fixed when table scroll horizontally: true or `left` or `right` and `expandIconColumnIndex` need to stay first or last |
| rowKey | string or Function(record, index):string | 'key' | If rowKey is string, `record[rowKey]` will be used as key. If rowKey is function, the return value of `rowKey(record, index)` will be use as key. |
| rowClassName | string or Function(record, index, indent):string |  | get row's className |
| rowRef | Function(record, index, indent):string |  | get row's ref key |
| data | Object[] |  | data record array to be rendered |
| onRow | Function(record, index) |  | Set custom props per each row. |
| onHeaderRow | Function(record, index) |  | Set custom props per each header row. |
| showHeader | Boolean | true | whether table head is shown |
| hidden | Boolean | `false` | Hidden column. |
| title | Function(currentData) |  | table title render function |
| footer | Function(currentData) |  | table footer render function |
| emptyText | React.Node or Function | `No Data` | Display text when data is empty |
| columns | Object[] |  | The columns config of table, see table below |
| components | Object |  | Override table elements, see [#171](https://github.com/react-component/table/pull/171) for more details |
| sticky | boolean \| {offsetHeader?: number, offsetScroll?: number, getContainer?: () => Window \| HTMLElement } | false | stick header and scroll bar |
| summary | (data: readonly RecordType[]) => React.ReactNode | - | `summary` attribute in `table` component is used to define the summary row. |
| rowHoverable | boolean | true | Table hover interaction |



