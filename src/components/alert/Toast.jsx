import { useContext, useState, useEffect } from "react";
import { Snackbar, AlertTitle, Slide, Alert } from "@mui/material";

import AppContext from "../../../src/context/AppContext";

const Toast = () => {
  const { characterSuccess, characterError } = useContext(AppContext);

  const [open, setOpen] = useState({
    show: false,
    state: "",
    message: "",
    text: "",
  });

  useEffect(() => {
    if (characterError || characterSuccess) {
      setOpen({
        show: true,
        state: characterError ? "error" : characterSuccess ? "success" : "",
        title: characterError ? "Error" : characterSuccess ? "Success" : "",
        text: characterError
          ? "Something went wrong."
          : characterSuccess
          ? "Your character has been saved!"
          : "",
      });
    }
  }, [characterError, characterSuccess]);

  const handleClose = () => {
    setOpen((prevState) => ({
      ...prevState,
      show: false,
    }));
  };
  return (
    <>
      <Snackbar
        open={open.show}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleClose}
        autoHideDuration={4000}
        transitionDuration={{ enter: 1000, exit: 50 }}
        TransitionComponent={Slide}
      >
        <Alert severity={open.state === "" ? "success" : open.state}>
          <AlertTitle>{open.title}</AlertTitle>
          {open.text}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Toast;
