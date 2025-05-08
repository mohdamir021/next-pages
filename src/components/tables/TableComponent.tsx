import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableColumnHeader,
  TableColumnHeaderProps,
  TableHeader,
  TableHeaderProps,
  TableRoot,
  TableRow,
  TableRowProps,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

export type TableComponentProps = Partial<{
  headers: string[];
  data: Array<Record<string, ReactNode>>;
  arrayData: Array<Array<ReactNode>>;
  isArrayData?: boolean;
}>;

export default function TableComponent({
  headers = [],
  data = [],
  arrayData = [],
  isArrayData,
}: TableComponentProps) {
  const firstData = data.at(0) ?? {};
  const columnHeaders = headers.length > 0 ? headers : Object.keys(firstData);

  return (
    <Table.ScrollArea rounded={"sm"} >
      <TableRoot size={"sm"} striped stickyHeader> 
        <TableHeader>
          <TableRow bg="bg.subtle">
            {columnHeaders?.map((header, index) => (
              <TableColumnHeader
                key={`${index}_${header}`}
                // Styles
                {...{
                  py: "4px",
                  px: "8px"
                }}
              >
                {header}
              </TableColumnHeader>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isArrayData
            ? arrayData?.map((arrayRowData, rowIndex) => (
                <TableRow key={`${rowIndex}-row-data`} >
                  {arrayRowData?.map((data, cellIndex) => (
                    <TableCell
                      key={`${rowIndex}-row-cell-${cellIndex}-data`}
                      // Styles
                      {...{
                        py: "4px",
                        px: "8px"
                      }}
                    >
                      {data}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : data?.map((rowData, rowIndex) => (
                <TableRow key={`${rowIndex}-row-data`}>
                  {Object.values(rowData)?.map((data, cellIndex) => (
                    <TableCell key={`${rowIndex}-row-cell-${cellIndex}-data`}>
                      {data}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
        </TableBody>
      </TableRoot>
      </Table.ScrollArea>
  );
}
