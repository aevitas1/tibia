import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CharacterForm from "./CharacterForm";
import { Typography } from "@mui/material";

const AddCharacter = () => {
  return (
    <>
      <Grid2
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography variant="h2">Add a new character</Typography>
        <CharacterForm />
      </Grid2>
    </>
  );
};

export default AddCharacter;
