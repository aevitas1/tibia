import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import BlessingCalculator from "./BlessingCalculator";

const Blessings = () => {
  const [level, setLevel] = useState(8);
  const [promoted, setPromoted] = useState(false);

  const handleChange = (e) => {
    setLevel(e.target.value);
    if (isNaN(e.target.value) || e.target.value < 0) {
      e.target.value = 8;
      setLevel(8);
    }
  };

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
          <Typography variant="p" sx={{ paddingBottom: "0.5rem" }}>
            Your level
          </Typography>
          <TextField
            type="text"
            pattern="[0-9]*"
            size="small"
            value={Number(level)}
            onChange={handleChange}
            sx={{ width: "90px" }}
          />
          <FormControlLabel
            value="Promoted"
            control={
              <Checkbox
                checked={promoted}
                onChange={(e) => setPromoted(e.target.checked)}
              />
            }
            label="Promoted"
            labelPlacement="start"
          />
          <BlessingCalculator level={level} promoted={promoted} />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Blessings;
