import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Home = () => {
  const tempLinks = [
    { name: "Character Stats Calculator", path: "/character-stats-calculator" },
    { name: "Add Character", path: "/add-character" },
    { name: "Blessing calculator", path: "/blessing-calculator" },
    { name: "Level share calculator", path: "/level-sharing" },
    { name: "Imbuement calculator", path: "/imbuement-calculator" },
  ];
  return (
    <Grid2
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      {tempLinks.map((item) => (
        <NavLink to={item.path}>
          <Button variant="contained">{item.name}</Button>
        </NavLink>
      ))}
    </Grid2>
  );
};

export default Home;
