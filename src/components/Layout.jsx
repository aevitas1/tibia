import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Background from "../assets/background.webp";
import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
import Content from "./content/Content";
import Toast from "./alert/Toast";

const Layout = () => {
  return (
    <>
      <Grid2 sx={{ backgroundImage: `url(${Background})` }}>
        <Toast />
        <Grid2 sx={{ minHeight: "calc(100dvh - 100px)" }}>
          <Navigation />
          <Content />
        </Grid2>
        <Footer />
      </Grid2>
    </>
  );
};

export default Layout;
