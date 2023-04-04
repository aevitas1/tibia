import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

import TableStyle from "../../../theme/TableStyle";
const BlessingCalculator = () => {
  const [level, setLevel] = useState();
  const [currentExp, setCurrentExp] = useState();
  const [expLoss, setExpLoss] = useState();
  const [cost, setCost] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const handleChange = (e) => {
    setLevel(e.target.value);
  };

  useEffect(() => {
    if (isNaN(level) || level < 0) {
      setLevel(0);
    } else {
      // Calculate character exp
      setCurrentExp(
        (50 * level * level * level) / 3 -
          100 * level * level +
          (850 * level) / 3 -
          200
      );
    }
  }, [level]);

  function createData(name, cost, exp, eq, bp) {
    return { name, cost, exp, eq, bp };
  }

  const rows = [
    createData("0", "", `${Math.floor(currentExp * 0.07)}`, "10%", "100%"),
    createData("1", "", `${Math.floor(currentExp * 0.07)}`, "7%", "70%"),
    createData("2", "", 9.0, "4.5%", "45%"),
    createData("3", "", 16.0, "2.5%", "25%"),
    createData("4", "", 3.7, "1%", "10%"),
    createData("5", "", 16.0, "0%", "0%"),
    createData("6", "", 16.0, "0%", "0%"),
    createData("7", "", 16.0, "0%", "0%"),
    createData("Twist of Fate", "", 16.0, "0%", "0%"),
    createData("Blessing of the Inquisition", "", 16.0, "0%", "0%"),
  ];

  return (
    <>
      <Grid2
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2">Blessing Calculator</Typography>
        <Grid2
          sx={{
            paddingTop: "1.5rem",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            type="text"
            pattern="[0-9]*"
            label="Your level"
            size="small"
            value={level}
            onChange={handleChange}
            sx={{ width: "150px" }}
          />
          <FormControlLabel
            value="Promoted"
            control={<Checkbox />}
            label="Promoted"
            labelPlacement="start"
          />
          <Grid2 sx={{ paddingTop: "2.5rem", display: "flex" }}>
            <TableContainer component={Paper} sx={TableStyle}>
              <Table
                sx={{ minWidth: 650, backgroundColor: "#fafafa" }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Amount of blessings</TableCell>
                    <TableCell align="right">Cost</TableCell>
                    <TableCell align="right">Exp loss on death</TableCell>
                    <TableCell align="right">Chance to lose EQ</TableCell>
                    <TableCell align="right">Chance to lose BP</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.cost}</TableCell>
                      <TableCell align="right">{row.exp}</TableCell>
                      <TableCell align="right">{row.eq}</TableCell>
                      <TableCell align="right">{row.bp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default BlessingCalculator;
