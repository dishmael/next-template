import { Column, SortDirection } from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpIcon, ChevronsUpDown } from "lucide-react";

type TSortingButton<T> = {
  title: string;
  column: Column<T>;
};

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
    <div onClick={handleClick} className="flex m-0 p-0 cursor-pointer items-center">
      {title}
      {getIcon(column.getIsSorted())}
    </div>
  );
};
