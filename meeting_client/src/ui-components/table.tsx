import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicSelect from "./selector";



function TableList({ catalog = [] }: { catalog: any }) {
  return (
    <>
      <BasicSelect catalog={catalog} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> team_id </TableCell>
              <TableCell align="right">meeting_id</TableCell>
              <TableCell align="right">start_date</TableCell>
              <TableCell align="right">end_date</TableCell>
              <TableCell align="right">room</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {catalog.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.team_id}
                </TableCell>
                <TableCell align="right">{row.meeting_id}</TableCell>
                <TableCell align="right">{row.start_date}</TableCell>
                <TableCell align="right">{row.end_date}</TableCell>
                <TableCell align="right">{row.room}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export { TableList };
