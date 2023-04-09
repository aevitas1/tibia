import { NavLink } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import CloseIcon from "@mui/icons-material/Close";

const Menu = () => {
  const { openMenu, setOpenMenu } = useContext(AppContext);
  const links = [
    { name: "Character Stats Calculator", path: "/character-stats-calculator" },
    { name: "Add Character", path: "/add-character" },
    { name: "Blessing calculator", path: "/blessing-calculator" },
    { name: "Level share calculator", path: "/level-sharing" },
    { name: "Imbuement calculator", path: "/imbuement-calculator" },
  ];
  return (
    <>
      <Grid2
        container
        className={openMenu ? "menu-open" : "menu-closed"}
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          zIndex: "99999",
          "&.menu-open": {
            animation: "slideIn 0.5s ease-out forwards",
          },
          "&.menu-closed": {
            visibility: "hidden",
            animation: "slideOut 0.5s ease-out reverse forwards",
          },
          "@keyframes slideIn": {
            from: {
              backgroundColor: "rgba(0,0,0,0)",
            },
            to: { backgroundColor: "rgba(0,0,0,0.8)" },
          },
        }}
      >
        <Grid2
          container
          className={openMenu ? "menu-open" : "menu-closed"}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            height: "100vh",
            backgroundColor: "rgb(60,60,60)",
            width: "350px",
            alignItems: "center",
            transition: "all 0.5s ease-out",
            "&.menu-open": {
              transform: "translateX(0)",
            },
            "&.menu-closed": {
              transform: "translateX(-350px)",
            },
          }}
        >
          <Grid2
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              paddingRight: "1.5rem",
              paddingBottom: "2rem",
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              onClick={() => {
                setOpenMenu((prevState) => !prevState);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Grid2>
          {links.map((item) => (
            <Grid2
              key={item.name}
              className={openMenu ? "menu-open" : "menu-closed"}
              sx={{
                transition: "all 0.5s ease-out",
                opacity: "0",
                marginBottom: "0.75rem",
                "&.menu-open": {
                  animation: "fadeIn 0.5s ease-out forwards",
                },
                "&.menu-closed": {
                  animation: "fadeOut 0.5s ease-out forwards",
                },
                "@keyframes fadeIn": {
                  from: {
                    opacity: "0",
                  },
                  to: {
                    opacity: "1",
                  },
                },
                "@keyframes fadeOut": {
                  from: {
                    opacity: "1",
                  },
                  to: {
                    opacity: "0",
                  },
                },
              }}
            >
              <NavLink
                to={item.path}
                onClick={() => {
                  setOpenMenu((prevState) => !prevState);
                }}
                style={{
                  color: "#fafafa",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "1.25rem",
                }}
              >
                {item.name}
              </NavLink>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </>
  );
};

export default Menu;
