/* eslint-disable react-hooks/exhaustive-deps */
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
import { parcelStats } from "@/constants/parcelStats"
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
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

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
    const params = new URLSearchParams(searchParams);
    const handleSearch = (value: string) => {
        params.set("searchTerm", value);
        setSearchParams(params);
    };

    // Handle filter
    const handleFilter = (value: string) => {
        params.set("currentStatus", value);
        setSearchParams(params);
    };
    // Clear state on page reload
    useEffect(() => {
        ["currentStatus", "searchTerm"].forEach(item => params.delete(item));
        setSearchParams(params);
    }, []);

    return (
        <div>
            {/* Search & Filter Fields */}
            <div className="flex items-center justify-between py-4">
                {/* Search */}
                <Input
                    placeholder="Search by parcel type or receiver email"
                    onChange={(event) =>
                        handleSearch(event.target.value)
                    }
                    className="max-w-sm rounded-none border-primary"
                />
                {/* Filter */}
                <div className="flex items-center gap-5">
                    <Select onValueChange={(val) => handleFilter(val)}>
                        <SelectTrigger className="w-[180px] rounded-none border-primary">
                            <SelectValue placeholder="Filter by status" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none">
                            <SelectGroup>
                                {parcelStats.map((status, idx) => <SelectItem key={idx} value={status}>{status}</SelectItem>)}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button onClick={() => {
                        ["currentStatus", "searchTerm"].forEach(item => params.delete(item));
                        setSearchParams(params);
                    }} className="rounded-none">Reset</Button>
                </div>
            </div>
            {/* Table */}
            <div className="overflow-hidden rounded-none border bg-secondary">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="text-primary font-yantramanav text-base py-3">
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
                                    className="text-card"
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
            {page.totalPage > 1 &&
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
        }
        </div>

    )
}