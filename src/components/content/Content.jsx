import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AddCharacter from "./new_character/AddCharacter";
import CharacterStatsCalculator from "./character_stats_calculator/CharacterStatsCalculator";
import Blessings from "./blessing_calculator/Blessings";
import LevelSharing from "./level_sharing/LevelSharing";
import ImbuementCalculator from "./imbuement_calculator/ImbuementCalculator";
import { Typography } from "@mui/material";

const Content = () => {
  return (
    <>
      <Typography
        sx={{ textAlign: "center", width: "100%", paddingBottom: "2.5rem" }}
      >
        This website is a work in progress
      </Typography>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route
          index
          path="/add-character"
          element={<AddCharacter />}
          errorElement={<ErrorPage />}
        />
        <Route
          index
          path="character-stats-calculator"
          element={<CharacterStatsCalculator />}
        />
        <Route index path="blessing-calculator" element={<Blessings />} />
        <Route index path="level-sharing" element={<LevelSharing />} />
        <Route
          index
          path="imbuement-calculator"
          element={<ImbuementCalculator />}
        />
        <Route path="/*" element={<Home errorElement={<ErrorPage />} />} />
      </Routes>
    </>
  );
};

export default Content;
