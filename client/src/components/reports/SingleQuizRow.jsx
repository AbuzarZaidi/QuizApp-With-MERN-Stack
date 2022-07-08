import React from "react";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
const SingleQuizRow = (props) => {
  return (
    <TableRow
      key={props.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {props.name}
      </TableCell>
      <TableCell align="right">{props.date}</TableCell>
      <TableCell align="right" sx={{ textTransform: "capitalize" }}>
        {props.mode}
      </TableCell>
      <TableCell align="right">{props.players}</TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          onClick={() => props.openQuizAttempts(props.no)}
        >
          Open
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SingleQuizRow;
