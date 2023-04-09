import Grid2 from "@mui/material/Grid";
import MaterialImages from "./MaterialImages";
import { Divider, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { calcImbuements } from "../../../helpers/calcs";
const CompareCost = ({ goldValue, found, select, value }) => {
  const [chance, setChance] = useState(true);
  return (
    <Grid2
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        minWidth: "15rem",
      }}
    >
      <Grid2>
        <FormControlLabel
          value="Promoted"
          control={
            <Checkbox
              checked={chance}
              onChange={(e) => setChance(e.target.checked)}
            />
          }
          label="100% chance to imbue"
          labelPlacement="end"
        />
      </Grid2>
      <Grid2 sx={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
        {found.materials.map((item) => (
          <>
            {item.amount}x <MaterialImages item={item.image} key={item.image} />
          </>
        ))}
      </Grid2>
      <Grid2 sx={{ display: "flex" }}>
        <Typography>
          {calcImbuements(value, goldValue, select, chance)}
        </Typography>
      </Grid2>
      <Divider />
    </Grid2>
  );
};

export default CompareCost;
