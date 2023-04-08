import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, Button } from "@mui/material";
import HandImage from "../../assets/news_fixes_243x200.png";
import Image from "mui-image";

const ErrorPage = () => {
  return (
    <Grid2
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image
        src={HandImage}
        variant="loading"
        height="100%"
        width="250px"
        fit="cover"
        duration={3000}
        easing="cubic-bezier(0.7, 0, 0.6, 1"
        shift="bottom"
        distance="10px"
        shiftDuration={900}
        bgColor="inherit"
      />
      <Typography variant="h2">Sorry, we could not find this page</Typography>
      <Typography variant="p" sx={{ my: "2rem" }}></Typography>
      <Button variant="contained" href="/">
        Return
      </Button>
    </Grid2>
  );
};

export default ErrorPage;
