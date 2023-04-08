import MaterialImages from "./MaterialImages";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GetData } from "../../../helpers/getData";
import { Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import CompareCost from "./CompareCost";

const ImbuementCost = (select) => {
  const data = GetData();
  const string = select.select.level + select.select.name;
  const [value, setValue] = useState([]);
  const [goldValue, setGoldValue] = useState(0);

  const found = data.data.data.imbuements.find(
    (element) => element.image === string
  );

  useEffect(() => {
    setValue(0);
  }, [select.select.name]);
  console.log(value);
  return (
    found && (
      <>
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
          <Typography variant="h5">Material price</Typography>
          <Typography variant="p">
            Effect: {found.amount}% {found.type}
          </Typography>
          {found.materials.map((item) => (
            <Grid2
              key={item.name}
              sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
              <Typography variant="p" sx={{ width: "1rem" }}>
                {item.amount}
              </Typography>
              <MaterialImages item={item.image} />
              <TextField
                type="number"
                label={item.name}
                size="small"
                name={item.name}
                onChange={(e) =>
                  setValue((prevState) => ({
                    ...prevState,
                    [e.target.name]: {
                      ...prevState[e.target.name],
                      value: e.target.value,
                    },
                  }))
                }
                sx={{ width: "20rem" }}
              />
            </Grid2>
          ))}

          <Grid2 sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Typography variant="p" sx={{ width: "1rem" }}>
              {select.select.level === "Basic_"
                ? "2"
                : select.select.level === "Intricate_"
                ? "4"
                : "6"}
            </Typography>
            <MaterialImages item={"Gold_Token"} />
            <TextField
              type="number"
              label={"Gold Token"}
              size="small"
              name={"Gold Token"}
              onChange={(e) => setGoldValue(e.target.value)}
              sx={{ width: "20rem" }}
            />
          </Grid2>
        </Grid2>
        <Grid2
          sx={{
            marginBottom: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingTop: "1.5rem",
          }}
        >
          <Typography variant="h5">Cost</Typography>
          <CompareCost />
          {goldValue}
        </Grid2>
      </>
    )
  );
};

export default ImbuementCost;
