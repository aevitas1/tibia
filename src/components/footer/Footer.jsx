import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Grid2
        sx={{ paddingTop: "2.5rem", height: "100px", backgroundColor: "red" }}
      >
        <Typography variant="h2">Footer</Typography>
      </Grid2>
    </>
  );
};

export default Footer;
