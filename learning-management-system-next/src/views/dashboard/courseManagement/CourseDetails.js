import React, { useState } from "react";
import MultiPurposeTable from "../../../components/propsTable/MultiPurposeTable";
import {
  Box,
  Stack,
  Grid,
  Typography,
  Container,
  useTheme,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import CardsControls from "./CardsControls";
import VisibilityOptionMune from "./VisibilityOptionMune";

const headCells = [
  {
    id: "ID",
    align: "left",
    disablePadding: false,
    label: "ID",
  },
  {
    id: "Video",
    align: "left",
    disablePadding: true,
    label: "Video",
  },
  {
    id: "Visibility",
    align: "left",
    disablePadding: false,
    label: "Visibility",
  },
  {
    id: "Restrictions",
    align: "left",
    disablePadding: false,
    label: "Restrictions",
  },
  {
    id: "Date",
    align: "left",
    disablePadding: false,
    label: "Date",
  },
  {
    id: "Student",
    align: "left",
    disablePadding: false,
    label: "Student",
  },
];

/* :::::::::MultiPurpose TABLE - Row CELL::::::::::: */
// function createData(ID, name, FatherMobile, PayContact, ReceiptNo,Payment,Due) {
//     return { ID, name, FatherMobile, PayContact, ReceiptNo,Payment,Due};
// }
const rows = [
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 101,
  },
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 102,
  },
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 103,
  },
  {
    name: "Book Value",
    PayContact: 500,
    FatherMobile: "01868221956",
    ID: 104,
  },
];

const CourseDetails = () => {
  return (
    <div>
      <MultiPurposeTable headCells={headCells}>
        <Tag />
      </MultiPurposeTable>
    </div>
  );
};

export default CourseDetails;
const Tag = () => {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(null);
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow
          onMouseEnter={() => setIsEmailSubmitted(row.ID)}
          onMouseLeave={() => setIsEmailSubmitted(null)}
          hover
          role='checkbox'
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          tabIndex={-1}
          key={row.ID}>
          <TableCell
            component='th'
            /* id={labelId} */ scope='row'
            align='left'
            sx={{ padding: "6px" }}>
            {row.ID}
          </TableCell>
          <TableCell align='left' sx={{ padding: "6px" }}>
            <CardsControls row={row} isEmailSubmitted={isEmailSubmitted} />
          </TableCell>
          <TableCell align='left' sx={{ padding: "6px" }}>
           <VisibilityOptionMune row={row} isEmailSubmitted={isEmailSubmitted}/>
          </TableCell>
          <TableCell align='left' sx={{ padding: "6px" }}>
            {row.PayContact}
          </TableCell>
          <TableCell align='left' sx={{ padding: "6px" }}>
            fgdf
          </TableCell>
          <TableCell align='left' sx={{ padding: "6px" }}>
            dfgdf
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
