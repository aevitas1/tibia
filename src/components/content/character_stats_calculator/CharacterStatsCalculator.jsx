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

  const [characterStats, setCharacterStats] = useState(DefaultCharacterStats);
  const handleChange = (e) => {
    console.log(characterStats);
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
    calculateStats();
  };

  const calculateStats = () => {
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
  };

  useEffect(() => {}, [characterStats.level]);
  return (
    <Grid2
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid2
        sx={{
          marginBottom: "2.5rem",
          width: "350px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Grid2
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="p">Vocation: </Typography>
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
            justifyContent: "space-between",
          }}
        >
          <Typography variant="p">Level: </Typography>
          <TextField
            type="number"
            value={characterStats.level}
            name="level"
            onChange={handleChange}
            sx={{
              width: "120px",
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
      ></Grid2>
      <Typography variant="p">Voc: {characterStats.vocation}</Typography>
      <Typography variant="p">Level: {characterStats.level}</Typography>
      <Typography variant="p">Hp: {characterStats.hp}</Typography>
      <Typography variant="p">Mana: {characterStats.mana}</Typography>
      <Typography variant="p">Cap: {characterStats.cap}</Typography>
      <Typography variant="p">Speed: {characterStats.speed}</Typography>
    </Grid2>
  );
};

export default CharacterStatsCalculator;
