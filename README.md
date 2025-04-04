# React Data Table

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

A reusable and customizable React component for displaying tabular data.
It supports dynamic columns and rows with clean, minimal styling — ideal for rendering lists, reports, or admin dashboards with minimal setup.

This lightweight and minimalistic data table includes essential features out of the box.

---

## Key build-in features

- ✅ Sorting by column
- ✅ Searching
- ✅ Pagination
- ✅ Custom theming
- ✅ Responsive

## 📦 Installation

```bash
npm install react-data-table
# or
yarn add react-data-table


```
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



