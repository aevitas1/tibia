import { calcBlessings, calcExperienceLoss } from "../../../helpers/calcs";

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

const BlessingCalculator = ({ level, promoted }) => {
  let blessingAmount = [0, 1, 2, 3, 4, 5, 6, 7];
  const formatNumbers = (value) => {
    return Number(value.toFixed(0)).toLocaleString("en-US");
  };

  return (
    <>
      <Grid2 sx={{ paddingTop: "2.5rem", display: "flex" }}>
        <TableContainer component={Paper} sx={TableStyle}>
          <Table
            sx={{
              width: 800,
            }}
            aria-label="simple table"
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Blessings</TableCell>
                <TableCell align="center">Cost</TableCell>
                <TableCell align="center">Cost from Inq</TableCell>
                <TableCell align="center">Lose EQ</TableCell>
                <TableCell align="center">Lose BP</TableCell>
                <TableCell align="center">Exp loss</TableCell>
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
                      {blessing === 0
                        ? ""
                        : formatNumbers(
                            calcBlessings(level, blessing, "default")
                          ) + " gp"}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {blessing === 0
                        ? ""
                        : formatNumbers(
                            calcBlessings(level, blessing, "default") * 1.1
                          ) + " gp"}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {blessing === 0
                        ? "10%"
                        : blessing === 1
                        ? "7%"
                        : blessing === 2
                        ? "4.5%"
                        : blessing === 3
                        ? "2.5%"
                        : blessing === 4
                        ? "1%"
                        : "0%"}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      {blessing === 0
                        ? "100%"
                        : blessing === 1
                        ? "70%"
                        : blessing === 2
                        ? "45%"
                        : blessing === 3
                        ? "25%"
                        : blessing === 4
                        ? "10%"
                        : "0%"}
                    </TableCell>
                    <TableCell>
                      {formatNumbers(
                        Number(calcExperienceLoss(level, blessing, promoted))
                      )}
                      {" exp"}
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
                      {" gp"}
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
                      {" gp"}
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      0%
                    </TableCell>
                    <TableCell component="th" scope="row" key={uuid()}>
                      0%
                    </TableCell>
                    <TableCell>
                      {formatNumbers(
                        Number(calcExperienceLoss(level, blessing, promoted))
                      )}
                      {" exp"}
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

export default BlessingCalculator;
