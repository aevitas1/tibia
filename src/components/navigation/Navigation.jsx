import { IconButton, Avatar } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/logo.png";
import Image from "mui-image";
import Knight from "../../assets/vocations/knight.gif";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
// import Paladin from "../../assets/vocations/paladin.gif";
// import Druid from "../../assets/vocations/druid.gif";
// import Sorcerer from "../../assets/vocations/sorcerer.gif";

const Navigation = () => {
  const { setOpenMenu } = useContext(AppContext);
  return (
    <>
      <Grid2
        container
        sx={{
          width: "100%",
          height: "fit-content",
          pb: "0.5rem",
          mb: "2.5rem",
          borderBottom: "1px solid rgba(240, 240, 240, 0.25)",
        }}
      >
        <Grid2
          container
          sx={{
            minWidth: "900px",
            justifyContent: "space-between",
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              setOpenMenu((prevState) => !prevState);
            }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/">
            <Image
              src={Logo}
              variant="loading"
              height="100%"
              width="60px"
              fit="cover"
              duration={3000}
              easing="cubic-bezier(0.7, 0, 0.6, 1"
              shift="bottom"
              distance="10px"
              shiftDuration={900}
              bgColor="inherit"
            />
          </NavLink>
          <Avatar
            alt="Knight"
            variant="square"
            src={Knight}
            sx={{
              cursor: "pointer",
              padding: "0.25rem",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          />
        </Grid2>
        <Menu />
      </Grid2>
    </>
  );
};

export default Navigation;
