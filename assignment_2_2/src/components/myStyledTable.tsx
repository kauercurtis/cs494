import { TableCell, TableRow } from '@mui/material';

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`] : {
    backgroundColor: "#000",
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    fontVariant: "small-caps"
  },
  [`&.${tableCellClasses.body}`] : {
    fontSize: 10,
    textAlign: "center",
  },
}));

export const StyledTableRow = styled(TableRow)(()=>({
    "&:nth-of-type(even)":{
      backgroundColor: "#ddd"
    }
  }));