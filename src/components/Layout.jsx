import Navigation from "./navigation/Navigation";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Background from "../assets/background.webp";
import { Snackbar, AlertTitle, Slide, Alert } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
const Layout = () => {
  // const {
  //   characterSuccess,
  //   setCharacterSuccess,
  //   characterError,
  //   setCharacterError,
  // } = useContext(AppContext);
  // const [open, setOpen] = useState({
  //   show: false,
  //   state: "",
  //   message: "",
  //   text: "",
  // });

  // useEffect(() => {
  //   if (characterError || characterSuccess) {
  //     console.log("Error", characterError);
  //     console.log("Success", characterSuccess);
  //     setOpen({
  //       show: true,
  //       state: characterError ? "error" : "success",
  //       title: characterError ? "Error" : "Success",
  //       text: characterError
  //         ? "Something went wrong."
  //         : "Your character has been saved!",
  //     });
  //   }
  //   setTimeout(() => {
  //     setCharacterError(false);
  //     setCharacterSuccess(false);
  //   }, 6500);
  // }, [characterError, characterSuccess]);

  // const handleClose = () => {
  //   setOpen({ show: false });
  // };
  return (
    <>
      <Grid2 sx={{ backgroundImage: `url(${Background})` }}>
        {/* <Snackbar
          open={open.show}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={handleClose}
          autoHideDuration={6000}
          transitionDuration={{ enter: 1000, exit: 1200 }}
          TransitionComponent={Slide}
        >
          <Alert severity={open.state === "" ? "success" : open.state}>
            <AlertTitle>{open.title}</AlertTitle>
            {open.text}
          </Alert>
        </Snackbar> */}
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
