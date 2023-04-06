import { calcBlessings } from "../../../helpers/calcs";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TableStyle from "../../../theme/TableStyle";
import { v4 as uuid } from "uuid";

const BlessingCost = ({ level }) => {
  let blessingAmount = [1, 2, 3, 4, 5, 6, 7];
  const formatNumbers = (value) => {
    return Number(value.toFixed(0)).toLocaleString("en-US");
  };

  return (
    <>
      <Grid2 sx={{ paddingTop: "2.5rem", display: "flex" }}>
        <TableContainer component={Paper} sx={TableStyle}>
          <Table
            sx={{
              width: 650,
            }}
            aria-label="simple table"
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell>Blessings</TableCell>
                <TableCell align="right">Cost</TableCell>
                <TableCell align="right">Cost with inquisition</TableCell>
                <TableCell align="right">Chance to lose EQ</TableCell>
                <TableCell align="right">Chance to lose BP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blessingAmount.map((blessing) =>
                blessing <= 5 ? (
                  <TableRow key={uuid()}>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {blessing}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {formatNumbers(calcBlessings(level, blessing, "default"))}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {formatNumbers(
                        calcBlessings(level, blessing, "default") * 1.1
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {blessing === 1
                        ? "10%"
                        : blessing === 2
                        ? "7%"
                        : blessing === 3
                        ? "4.5%"
                        : blessing === 4
                        ? "2.5%"
                        : "0%"}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {blessing === 1
                        ? "100%"
                        : blessing === 2
                        ? "70%"
                        : blessing === 3
                        ? "45%"
                        : blessing === 4
                        ? "25%"
                        : "0%"}
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow
                    key={uuid()}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" key={uuid()}>
                      {blessing}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {formatNumbers(
                        calcBlessings(level, 5, "default") +
                          calcBlessings(
                            level,
                            blessing === 6 ? 1 : 2,
                            "enhanced"
                          )
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {formatNumbers(
                        Number(calcBlessings(level, 5, "default") * 1.1) +
                          calcBlessings(
                            level,
                            blessing === 6 ? 1 : 2,
                            "enhanced"
                          )
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      0%
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      0%
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid2>
    </>
  );
};

export default BlessingCost;
