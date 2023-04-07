import { useState, useEffect } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { SelectMenuStyles, SelectStyles } from "../../../theme/SelectStyle";
import { validateInput, validateVocations } from "../../../helpers/validate";

const CharacterForm = () => {
  const initialCharacterState = {
    characterName: "",
    characterLevel: "",
    characterMagic: "",
    characterVocation: "",
    characterSkill: "",
    characterAttack: "",
  };
  const initialErrorState = {
    nameError: undefined,
    levelError: undefined,
    magicError: undefined,
    skillError: undefined,
    attackError: undefined,
    vocationError: undefined,
  };
  const [newChar, setNewChar] = useState(initialCharacterState);
  const [errors, setErrors] = useState(initialErrorState);

  useEffect(() => {}, [newChar, errors]);

  const ErrorCheck = () => {
    setErrors(initialErrorState);
    setErrors({
      vocationError: validateInput("letters", newChar.characterVocation),
      nameError: validateInput("letters", newChar.characterName),
      levelError: validateInput("numbers", newChar.characterLevel),
      magicError: validateInput("numbers", newChar.characterMagic),
      skillError: validateInput("numbers", newChar.characterSkill),
      attackError: validateInput("numbers", newChar.characterAttack),
    });
    AddCharacter();
  };

  const AddCharacter = () => {
    console.log(errors);
    if (
      validateVocations(
        errors.vocationError,
        errors.nameError,
        errors.levelError,
        errors.magicError,
        errors.skillError,
        errors.attackError
      )
    ) {
      return;
    } else {
      if (localStorage.getItem("character")) {
        localStorage.setItem(
          `character${localStorage.length + 1}`,
          JSON.stringify(newChar)
        );
      } else {
        localStorage.setItem("character", JSON.stringify(newChar));
      }
    }
  };

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "vocation": {
        setNewChar((prevState) => ({
          ...prevState,
          characterVocation: e.target.value,
        }));
        break;
      }
      case "name": {
        setNewChar((prevState) => ({
          ...prevState,
          characterName: e.target.value,
        }));
        break;
      }
      case "level": {
        setNewChar((prevState) => ({
          ...prevState,
          characterLevel: e.target.value,
        }));
        break;
      }
      case "magic": {
        setNewChar((prevState) => ({
          ...prevState,
          characterMagic: e.target.value,
        }));
        break;
      }
      case "skill": {
        setNewChar((prevState) => ({
          ...prevState,
          characterSkill: e.target.value,
        }));
        break;
      }
      case "attack": {
        setNewChar((prevState) => ({
          ...prevState,
          characterAttack: e.target.value,
        }));
        break;
      }
      default: {
        setNewChar(initialCharacterState);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      {/* Select a vocation  */}
      <Select
        displayEmpty
        value={newChar.characterVocation}
        variant="standard"
        name="vocation"
        onChange={handleInputChange}
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
          paddingTop: "",
          marginTop: "-1rem",
        }}
      >
        {errors.vocationError === undefined ? "" : errors.vocationError}
      </Typography>
      {/* Character  */}
      {/* Name  */}
      <TextField
        type="text"
        helperText={errors.nameError === undefined ? "" : errors.nameError}
        label="Character name"
        name="name"
        onChange={handleInputChange}
        required
      />
      {/* Level  */}
      <TextField
        type="text"
        helperText={errors.levelError === undefined ? "" : errors.levelError}
        label="Level"
        name="level"
        onChange={handleInputChange}
        required
      />
      {/* Magic  */}
      <TextField
        type="text"
        helperText={errors.magicError === undefined ? "" : errors.magicError}
        label="Magic level"
        name="magic"
        onChange={handleInputChange}
        required
      />
      {/* Skill  */}
      <TextField
        type="text"
        helperText={errors.skillError === undefined ? "" : errors.skillError}
        label="Skill level"
        name="skill"
        onChange={handleInputChange}
        sx={
          newChar.characterVocation === "knight" ||
          newChar.characterVocation === "paladin"
            ? {}
            : { display: "none" }
        }
        required
      />
      {/* Attack  */}
      <TextField
        type="text"
        helperText={errors.attackError === undefined ? "" : errors.attackError}
        label="Attack value"
        name="attack"
        onChange={handleInputChange}
        sx={
          newChar.characterVocation === "knight" ||
          newChar.characterVocation === "paladin"
            ? {}
            : { display: "none" }
        }
        required
      />
      {/* Submit button  */}
      <Button variant="contained" onClick={ErrorCheck}>
        Add character
      </Button>
    </Box>
  );
};

export default CharacterForm;
