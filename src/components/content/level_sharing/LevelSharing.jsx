import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState, useEffect } from "react";
import { TextField, Typography } from "@mui/material";

const LevelSharing = () => {
  const [level, setLevel] = useState(5);
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  const handleChange = (e) => {
    setLevel(e.target.value);
  };

  useEffect(() => {
    if (isNaN(level) || level < 0) {
      setLevel(1);
    } else {
      setMin(parseInt(Math.floor((level * 2) / 3)));
      setMax(parseInt(Math.ceil((level * 3) / 2)) + 1);
    }
  }, [level]);

  return (
    <>
      <Grid2
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2">Party share range</Typography>
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
          <Grid2 sx={{ paddingTop: "2.5rem", display: "flex", gap: "2.5rem" }}>
            <Grid2 sx={{ textAlign: "center" }}>
              <Typography variant="p">
                A level {level} can share experience with levels {min} to {max}.
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default LevelSharing;
