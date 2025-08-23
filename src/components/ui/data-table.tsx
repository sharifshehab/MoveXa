import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "./button"
import React, { useEffect } from "react"
import { Input } from "./input"
import { useSearchParams } from "react-router"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    page: {
        currentPage: number;
        setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
        totalPage: number
    }
}

export function DataTable<TData, TValue>({
    columns,
    data,
    page
}: DataTableProps<TData, TValue>) {

    const [searchParams, setSearchParams] = useSearchParams();

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            // sorting,
            columnFilters,
        },
    })

    // Handle pagination
    const handlePreviousPage = () => {
        table.previousPage();
        page.setCurrentPage((prev) => prev - 1)
    }
    const handleNextPage = () => {
        table.nextPage()
        page.setCurrentPage((prev) => prev + 1)
    }

    // Handle search
    const handleSearch = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("searchTerm", value);
        setSearchParams(params);
    };

    // Handle filter
    const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("currentStatus", value);
        setSearchParams(params);
    };
    // Clear state on page reload
    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.delete("currentStatus");
        params.delete("searchTerm");
        setSearchParams(params);
    }, []);

    return (
        <div>
            {/* Search & Filter Fields */}
            <div className="flex items-center justify-between py-4">
                {/* Search */}
                <Input
                    placeholder="Search by receiver email or type"
                    onChange={(event) =>
                        handleSearch(event.target.value)
                    }
                    className="max-w-sm"
                />
                {/* Filter */}
                <div className="flex items-center gap-5">
                    <Select onValueChange={(val) => handleFilter(val)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="REQUESTED">REQUESTED</SelectItem>
                                <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                                <SelectItem value="BLOCKED">BLOCKED</SelectItem>
                                <SelectItem value="DISPATCHED">DISPATCHED</SelectItem>
                                <SelectItem value="IN_TRANSIT">IN_TRANSIT</SelectItem>
                                <SelectItem value="DELIVERED">DELIVERED</SelectItem>
                                <SelectItem value="RECEIVED">RECEIVED</SelectItem>
                                <SelectItem value="RETURNED">RETURNED</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button onClick={() => {
                        const params = new URLSearchParams(searchParams);
                        params.delete("currentStatus");
                        params.delete("searchTerm");
                        setSearchParams(params);
                    }}>Reset</Button>
                </div>
            </div>
            {/* Table */}
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
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
                                    )
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
                </Table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePreviousPage}
                    disabled={page.currentPage <= 1}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextPage}
                    disabled={page.currentPage >= page.totalPage}
                >
                    Next
                </Button>
            </div>
        </div>

    )
}