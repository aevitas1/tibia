import { GetData } from "../../../helpers/getData";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  Typography,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useState } from "react";
import ImbuementCost from "./ImbuementCost";
import ImbuImages from "./ImbuImages";
import { SelectMenuStyles, SelectStyles } from "../../../theme/SelectStyle";

const ImbuementCalculator = () => {
  const data = GetData();
  const [select, setSelect] = useState({
    name: "Scorch",
    level: "Basic_",
  });

  const handleSelect = (e) => {
    setSelect((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleRadio = (e) => {
    setSelect((prevState) => ({
      ...prevState,
      level: e.target.value,
    }));
  };

  return data.status === "loading" ? (
    <Grid2
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "8rem",
      }}
    >
      <CircularProgress sx={{ color: "#fff" }} size={50} />
    </Grid2>
  ) : (
    <Grid2
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">Imbuement calculator</Typography>
      <Grid2 sx={{ display: "flex", gap: "1rem" }}>
        <Grid2
          sx={{
            marginBottom: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingTop: "5.5rem",
          }}
        >
          <ImbuImages select={select} />
        </Grid2>
        <Grid2
          sx={{
            marginBottom: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingTop: "1.5rem",
            paddingRight: "2rem",
          }}
        >
          <Typography variant="h5">Imbuement</Typography>
          <Select
            displayEmpty
            value={select.name}
            variant="standard"
            onChange={handleSelect}
            MenuProps={SelectMenuStyles}
            sx={SelectStyles}
          >
            {data.data.data.imbuements.map(
              (item) =>
                item.name && (
                  <MenuItem value={item.name} key={item.name}>
                    {item.name}
                  </MenuItem>
                )
            )}
          </Select>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={select.level}
              onChange={handleRadio}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Basic_"
                control={<Radio />}
                label="Basic"
              />
              <FormControlLabel
                value="Intricate_"
                control={<Radio />}
                label="Intricate"
              />
              <FormControlLabel
                value="Powerful_"
                control={<Radio />}
                label="Powerful"
              />
            </RadioGroup>
          </FormControl>
        </Grid2>
        <ImbuementCost select={select} />
      </Grid2>
    </Grid2>
  );
};

export default ImbuementCalculator;
