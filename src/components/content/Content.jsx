import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AddCharacter from "./characters/AddCharacter";
import CharacterStatsCalculator from "./character_stats_calculator/CharacterStatsCalculator";
import Blessings from "./blessing_calculator/Blessings";
import LevelSharing from "./level_sharing/LevelSharing";
import ImbuementCalculator from "./imbuement_calculator/ImbuementCalculator";

const Content = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} errorElement={<ErrorPage />} />
        <Route index path="/add-character" element={<AddCharacter />} />
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
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default Content;
