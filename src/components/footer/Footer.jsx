import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
const Footer = () => {
  let d = new Date();
  let currentYear = d.getFullYear();

  return (
    <>
      <Grid2
        sx={{
          paddingTop: "2.5rem",
          height: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="p">
          Stephan van der Meijden &copy; {currentYear}.{" "}
          <a
            href="https://www.tibia.com/"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            Tibia
          </a>{" "}
          and{" "}
          <a
            href="https://www.tibiame.com/"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            TibiaME
          </a>{" "}
          are trademarks of{" "}
          <a
            href="http://www.cipsoft.com/"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            CipSoft GmbH
          </a>
          .
        </Typography>
      </Grid2>
    </>
  );
};

export default Footer;
