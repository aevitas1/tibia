import { Button } from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Home = () => {
  return (
    <Grid2
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      <Button variant="contained" href="/character-stats-calculator">
        Character Stats Calculator
      </Button>
      <Button variant="contained" href="/add-character">
        Add Character
      </Button>

      <Button variant="contained" href="/blessing-calculator">
        Blessing calculator
      </Button>

      <Button variant="contained" href="/level-sharing">
        Level share calculator
      </Button>

      <Button variant="contained" href="/imbuement-calculator">
        Imbuement calculator
      </Button>
    </Grid2>
  );
};

export default Home;
