import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Container,
  Typography,
} from "@mui/material";

const AddChar = () => {
  const [newChar, setNewChar] = useState({
    charname: "",
    charlevel: "",
    charmagic: "",
    charvocation: "",
    charskill: "",
    charattack: "",
  });

  const [voc, setVoc] = useState("");

  const handleClick = () => {
    if (localStorage.getItem("character")) {
      localStorage.setItem(
        `character${localStorage.length + 1}`,
        JSON.stringify(newChar)
      );
    } else {
      localStorage.setItem("character", JSON.stringify(newChar));
    }
  };
  return (
    <Container container>
      <Typography variant="h2">Add a new character</Typography>
      <Grid2>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            {newChar.charvocation === "" ? "Select a vocation" : ""}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newChar.charvocation}
            label={voc}
            onChange={(e) => {
              setNewChar({ ...newChar, charvocation: e.target.value });
            }}
            sx={{ width: "210px" }}
          >
            <MenuItem value="knight">Knight</MenuItem>
            <MenuItem value="paladin">Paladin</MenuItem>
            <MenuItem value="druid">Druid</MenuItem>
            <MenuItem value="sorcerer">Sorcerer</MenuItem>
          </Select>
        </FormControl>
      </Grid2>
    </Container>
  );
};

export default AddChar;
