import {
  Box,
  Table,
  TableBody,
  TableBodyProps,
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

const bodyStyles = {
  body: {} satisfies TableBodyProps,
  row: {} satisfies TableRowProps,
  cell: {
    px: 2,
    py: "2px",
  } satisfies TableCellProps,
};

export default function TableComponent({
  headers = [],
  data = [],
  arrayData = [],
  isArrayData,
}: TableComponentProps) {
  const hasData = data.length > 0;
  const firstData = data.at(0) ?? {};
  const columnHeaders =
    headers.length > 0
      ? headers
      : hasData
      ? Object.keys(firstData)
      : ["No Headers"];

  console.log({ data });

  return (
    <Table.ScrollArea rounded={"sm"}>
      <TableRoot size={"sm"} striped stickyHeader>
        <TableHeader>
          <TableRow bg="bg.subtle">
            {columnHeaders?.map((header, index) => (
              <TableColumnHeader
                key={`${index}_${header}`}
                // Styles
                {...{
                  py: "4px",
                  px: "8px",
                }}
              >
                {header}
              </TableColumnHeader>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody {...bodyStyles.body}>
          {hasData && isArrayData ? (
            arrayData?.map((arrayRowData, rowIndex) => (
              <TableRow key={`${rowIndex}-row-data`}>
                {arrayRowData?.map((data, cellIndex) => (
                  <TableCell
                    key={`${rowIndex}-row-cell-${cellIndex}-data`}
                    // Styles
                    {...{
                      py: "4px",
                      px: "8px",
                    }}
                  >
                    {data}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : hasData ? (
            data?.map((rowData, rowIndex) => (
              <TableRow key={`${rowIndex}-row-data`} {...bodyStyles.row}>
                {Object.values(rowData)?.map((data, cellIndex) => (
                  <TableCell key={`${rowIndex}-row-cell-${cellIndex}-data`} {...bodyStyles.cell}>
                    {data}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow {...bodyStyles.row}>
              <TableCell {...bodyStyles.cell}>No data available at the moment</TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableRoot>
    </Table.ScrollArea>
  );
}
