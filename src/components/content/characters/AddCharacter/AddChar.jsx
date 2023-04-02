import { useState, useContext } from "react";
import AppContext from "../../../../context/AppContext";
import {
  containsOnlyNumbers,
  containsOnlyLetters,
} from "../../../../helpers/validate";

import {
  MenuItem,
  FormControl,
  Select,
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { SelectMenuStyles, SelectStyles } from "../../../../theme/SelectStyle";

const AddChar = () => {
  const {
    characterSuccess,
    setCharacterSuccess,
    characterError,
    setCharacterError,
  } = useContext(AppContext);
  const [newChar, setNewChar] = useState({
    charname: "",
    charlevel: "",
    charmagic: "",
    charvocation: "",
    charskill: "",
    charattack: "",
  });

  const initialState = {
    hasError: false,
    nameError: false,
    magicError: false,
    skillError: false,
    attackError: false,
    vocationError: false,
    levelError: false,
    nameContainsNumbers: false,
    magicContainsLetters: false,
    skillContainsLetters: false,
    attackContainsLetters: false,
    levelContainsLetters: false,
  };
  const [errors, setErrors] = useState(initialState);
  console.log(errors);
  const errorCheck = () => {
    setErrors(initialState);

    if (newChar.charname === "") {
      setErrors({ ...errors, nameError: true, hasError: true });
    }
    if (!containsOnlyLetters(newChar.charname)) {
      setErrors({ ...errors, setNameContainsNumbers: true, hasError: true });
    }
    if (newChar.charlevel === "") {
      setErrors({ ...errors, levelError: true, hasError: true });
    }
    if (!containsOnlyNumbers(newChar.charlevel)) {
      setErrors({ ...errors, levelContainsLetters: true, hasError: true });
    }
    if (newChar.charmagic === "") {
      setErrors({ ...errors, magicError: true, hasError: true });
    }
    if (!containsOnlyNumbers(newChar.charmagic)) {
      setErrors({ ...errors, magicContainsLetters: true, hasError: true });
    }
    if (newChar.charvocation === "") {
      setErrors({ ...errors, vocationError: true, hasError: true });
    }
    if (newChar.charskill === "") {
      setErrors({ ...errors, skillError: true, hasError: true });
    }
    if (
      newChar.charvocation === "knight" ||
      newChar.charvocation === "paladin"
    ) {
      if (!containsOnlyNumbers(newChar.charskill)) {
        setErrors({ ...errors, skillContainsLetters: true, hasError: true });
      }
      if (newChar.charattack === "") {
        setErrors({ ...errors, attackError: true, hasError: true });
      }
      if (!containsOnlyNumbers(newChar.charattack)) {
        setErrors({ ...errors, attackContainsLetters: true, hasError: true });
      }
    }
    if (errors.hasError) {
      setCharacterError(true);
    }
    if (!errors.hasError) {
      console.log("fucking hell");
      if (errors.hasError || characterError) {
        return;
      }
      if (!errors.hasError) {
        if (localStorage.getItem("character")) {
          localStorage.setItem(
            `character${localStorage.length + 1}`,
            JSON.stringify(newChar)
          );
        } else {
          localStorage.setItem("character", JSON.stringify(newChar));
        }
        setCharacterSuccess(true);
      }
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <Typography variant="h2">Add a new character</Typography>

      {/* Select a vocation  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <FormControl>
          <Select
            displayEmpty
            value={newChar.charvocation}
            variant="standard"
            onChange={(e) => {
              setNewChar({ ...newChar, charvocation: e.target.value });
            }}
            MenuProps={SelectMenuStyles}
            sx={SelectStyles}
          >
            <MenuItem value="" disabled>
              Select a vocation
            </MenuItem>
            <MenuItem value="knight">Knight</MenuItem>
            <MenuItem value="paladin">Paladin</MenuItem>
            <MenuItem value="druid">Druid</MenuItem>
            <MenuItem value="sorcerer">Sorcerer</MenuItem>
          </Select>
          <Typography
            variant="p"
            sx={{
              color: "red",
              fontSize: "0.75rem",
              textAlign: "center",
              fontWeight: "400",
              paddingTop: "0.25rem",
            }}
          >
            {errors.vocationError && "You must select a vocation"}
          </Typography>
        </FormControl>

        {/* Character stats  */}
        <TextField
          type="text"
          helperText={
            errors.nameError
              ? "You must fill in a name"
              : errors.nameContainsNumbers
              ? "Name can't contain numbers"
              : ""
          }
          label="Character name"
          onChange={(e) => {
            setNewChar({ ...newChar, charname: e.target.value });
          }}
          required
        />
        <TextField
          type="text"
          helperText={
            errors.levelError
              ? "You must fill in a level"
              : errors.levelContainsLetters
              ? "Level can't contain letters"
              : ""
          }
          label="Level"
          onChange={(e) => {
            setNewChar({ ...newChar, charlevel: e.target.value });
          }}
          required
        />
        <TextField
          type="text"
          helperText={
            errors.magicError
              ? "You must fill in a magic level"
              : errors.magicContainsLetters
              ? "Magic can't contain letters"
              : ""
          }
          label="Magic level"
          onChange={(e) => {
            setNewChar({ ...newChar, charmagic: e.target.value });
          }}
          required
        />
        <TextField
          type="text"
          helperText={
            errors.skillError
              ? "You must fill in a skill level"
              : errors.skillContainsLetters
              ? "Skill level can't contain letters"
              : ""
          }
          label="Skill level"
          onChange={(e) => {
            setNewChar({ ...newChar, charskill: e.target.value });
          }}
          sx={
            newChar.charvocation === "knight" ||
            newChar.charvocation === "paladin"
              ? {}
              : { display: "none" }
          }
          required
        />
        <TextField
          type="text"
          helperText={
            errors.attackError
              ? "You must fill in a attack value"
              : errors.attackContainsLetters
              ? "Attack can't contain letters"
              : ""
          }
          label="Attack value"
          onChange={(e) => {
            setNewChar({ ...newChar, charattack: e.target.value });
          }}
          sx={
            newChar.charvocation === "knight" ||
            newChar.charvocation === "paladin"
              ? {}
              : { display: "none" }
          }
          required
        />

        <Button onClick={errorCheck} variant="contained">
          Add character
        </Button>
      </Box>
    </Container>
  );
};

export default AddChar;
