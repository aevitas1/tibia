import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, TextField } from "@mui/material";
import { useState } from "react";
import BlessingCost from "./BlessingCost";

const BlessingCalculator = () => {
  const [level, setLevel] = useState(8);

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
          <BlessingCost level={level} />
        </Grid2>
      </Grid2>
    </>
  );
};

export default BlessingCalculator;
