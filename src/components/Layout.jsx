import Navigation from "./navigation/Navigation";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Background from "../assets/background.webp";

const Layout = () => {
  return (
    <>
      <Grid2 sx={{ backgroundImage: `url(${Background})` }}>
        <Grid2
          sx={{
            minHeight: "calc(100vh - 100px)",
          }}
        >
          <Navigation />
          <Content />
        </Grid2>
        <Footer />
      </Grid2>
    </>
  );
};

export default Layout;
