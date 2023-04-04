import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState, useEffect } from "react";
import { TextField, Select, Typography, MenuItem } from "@mui/material";
import Background from "../../../assets/Calculator_Stats.webp";
import { SelectMenuStyles, SelectStyles } from "../../../theme/SelectStyle";

const CharacterStatsCalculator = () => {
  const DefaultCharacterStats = {
    level: 1,
    hp: 150,
    mana: 55,
    cap: 400,
    speed: 110,
    vocation: "knight",
  };

  const StatsTypography = {
    fontSize: "1rem",
    fontWeight: "300",
  };

  const [characterStats, setCharacterStats] = useState(DefaultCharacterStats);
  const handleChange = (e) => {
    if (e.target.name === "vocation") {
      setCharacterStats((prevState) => ({
        ...prevState,
        vocation: e.target.value,
      }));
    }
    if (e.target.name === "level") {
      setCharacterStats((prevState) => ({
        ...prevState,
        level: e.target.value,
      }));
    }
  };

  useEffect(() => {
    let charCalc = characterStats.level - 8;
    if (characterStats.level <= 8) {
      setCharacterStats((prevState) => ({
        ...prevState,
        hp: 150 + characterStats.level * 5,
        mana: 55 + characterStats.level * 5,
        cap: 400 + characterStats.level * 10,
        speed: 110 + characterStats.level * 1,
      }));
    } else if (characterStats.level > 8) {
      // todo
      if (characterStats.vocation === "knight") {
        setCharacterStats((prevState) => ({
          ...prevState,
          hp: 185 + charCalc * 15,
          mana: 90 + charCalc * 5,
          cap: 470 + charCalc * 25,
          speed: 117 + charCalc * 1,
        }));
      }
      if (characterStats.vocation === "paladin") {
        setCharacterStats((prevState) => ({
          ...prevState,
          hp: 185 + charCalc * 10,
          mana: 90 + charCalc * 15,
          cap: 470 + charCalc * 20,
          speed: 117 + charCalc * 1,
        }));
      }
      if (characterStats.vocation === "druid") {
        setCharacterStats((prevState) => ({
          ...prevState,
          hp: 185 + charCalc * 5,
          mana: 90 + charCalc * 30,
          cap: 470 + charCalc * 10,
          speed: 117 + charCalc * 1,
        }));
      }
      if (characterStats.vocation === "sorcerer") {
        setCharacterStats((prevState) => ({
          ...prevState,
          hp: 185 + charCalc * 5,
          mana: 90 + charCalc * 30,
          cap: 470 + charCalc * 10,
          speed: 117 + charCalc * 1,
        }));
      }
      if (characterStats.vocation === "rookstayer") {
        setCharacterStats((prevState) => ({
          ...prevState,
          hp: 185 + charCalc * 5,
          mana: 90 + charCalc * 5,
          cap: 470 + charCalc * 10,
          speed: 117 + charCalc * 1,
        }));
      }
    }
  }, [characterStats]);

  return (
    <Grid2
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">Character stats</Typography>
      <Grid2
        sx={{
          marginBottom: "2.5rem",
          width: "350px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "1.5rem",
        }}
      >
        <Grid2
          sx={{
            display: "flex",
            alignItems: "center",
            width: "15rem",
          }}
        >
          <Typography variant="p" sx={{ paddingRight: "1rem" }}>
            Vocation:{" "}
          </Typography>
          <Select
            displayEmpty
            value={characterStats.vocation}
            variant="standard"
            name="vocation"
            onChange={handleChange}
            MenuProps={SelectMenuStyles}
            sx={SelectStyles}
          >
            <MenuItem value="knight">Knight</MenuItem>
            <MenuItem value="paladin">Paladin</MenuItem>
            <MenuItem value="druid">Druid</MenuItem>
            <MenuItem value="sorcerer">Sorcerer</MenuItem>
            <MenuItem value="rookstayer">Rookstayer</MenuItem>
          </Select>
        </Grid2>
        <Grid2
          sx={{
            display: "flex",
            alignItems: "center",
            width: "15rem",
          }}
        >
          <Typography variant="p" sx={{ paddingRight: "1rem" }}>
            Level:{" "}
          </Typography>
          <TextField
            type="number"
            value={characterStats.level}
            name="level"
            onChange={handleChange}
            sx={{
              width: "100%",
              ".MuiInputBase-input": {
                padding: "0.25rem",
              },
            }}
            required
          />
        </Grid2>
      </Grid2>
      <Grid2
        sx={{
          backgroundImage: `url(${Background})`,
          width: "295px",
          height: "120px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid2
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1.5rem",
            paddingLeft: "1.75rem",
            paddingRight: "5.5rem",
          }}
        >
          <Typography sx={StatsTypography}>{characterStats.speed}</Typography>
          <Typography sx={StatsTypography}>{characterStats.cap}</Typography>
        </Grid2>
        <Grid2
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            paddingRight: "2.25rem",
            paddingTop: "0.75rem",
            gap: "0.25rem",
          }}
        >
          <Typography sx={StatsTypography}>{characterStats.hp}</Typography>
          <Typography sx={StatsTypography}>{characterStats.mana}</Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default CharacterStatsCalculator;
