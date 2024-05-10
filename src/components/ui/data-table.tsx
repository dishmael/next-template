"use client";

import { JSX } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  VisibilityState,
  getFilteredRowModel,
  Row,
  Column,
  SortDirection,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode, useState } from "react";
import { Input } from "@nextui-org/input";
import { exportData } from "@/utils";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpDown,
  Download,
  X,
} from "lucide-react";

/** Types **/

/**
 * 
 */
type DataTableActions = {
  create: string;
  read: string;
  update: string;
  delete: string;
};

/**
 * @param id field name to sort
 * @param desc sort descending true or false
 */
type DefaultSortState = {
  id: string;
  desc: boolean;
};

/**
 * 
 * @param columns
 * @param data
 * @param defaultSort
 * @param addNew
 */
type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  defaultSort?: DefaultSortState[];
  addNew?: ReactNode;
};

/**
 * 
 * @param title
 * @param column
 */
type TSortingButton<T> = {
  title: string;
  column: Column<T>;
};

/** Components **/


export const DataTable = <TData, TValue>({
  columns,
  data,
  defaultSort = [],
  addNew,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>(defaultSort);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnVisibility,
      globalFilter,
    },
  });

  return (
    <div className="rounded-md border border-dashed">
      <div className="flex items-center py-4 px-2 space-x-2">
        <Input
          placeholder="Search..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm text-sm p-2 m-0"
          endContent={
            globalFilter !== "" && (
              <X
                size={18}
                strokeWidth={1.5}
                className="cursor-pointer"
                onClick={() => setGlobalFilter("")}
              />
            )
          }
        />
        <div className="flex-grow"></div>
        <Export rows={table.getFilteredRowModel().rows} />
        {addNew && addNew}
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className="bg-slate-50 dark:bg-slate-900"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => {
                  console.log("view");
                }}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow className="bg-slate-50 dark:bg-slate-900">
            <TableCell
              colSpan={columns.length}
              className="flex-1 text-xs text-muted-foreground p-4"
            >
              Found {table.getFilteredRowModel().rows.length} record(s).
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

/**
 *
 * @param rows an array of Row<TData> objects
 * @returns
 */
const Export = <TData,>({ rows }: { rows: Row<TData>[] }): JSX.Element => {
  const handleExportCSV = () => {
    const data = rows.map((row) => row.original);
    exportData({ data: data, fileType: "csv" });
  };

  const handleExportJSON = () => {
    const data = rows.map((row) => row.original);
    exportData({ data: data, fileType: "json" });
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button
          size="sm"
          color="primary"
          endContent={<Download size={16} />}
        ></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Export Actions" variant="flat">
        <DropdownItem
          key="csv"
          className="gap-2"
          textValue="CSV"
          onClick={handleExportCSV}
        >
          Export CSV
        </DropdownItem>
        <DropdownItem
          key="json"
          className="gap-2"
          textValue="JSON"
          onClick={handleExportJSON}
        >
          Export JSON
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

/**
 *
 * @param title
 * @param column
 * @returns
 */
export const SortButton = <T,>({ title, column }: TSortingButton<T>) => {
  const handleClick = () => {
    column.toggleSorting();
  };

  const getIcon = (sort: false | SortDirection) => {
    switch (sort) {
      case "desc":
        return <ArrowDownIcon className="ml-2 h-4 w-4" />;
      case "asc":
        return <ArrowUpIcon className="ml-2 h-4 w-4" />;
      default:
        return <ChevronsUpDown className="ml-2 h-4 w-4" />;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex m-0 p-0 cursor-pointer items-center"
    >
      {title}
      {getIcon(column.getIsSorted())}
    </div>
  );
};
