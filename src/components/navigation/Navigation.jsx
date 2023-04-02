import { IconButton, Avatar, Link } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/logo.png";
import Image from "mui-image";
import Knight from "../../assets/vocations/knight.gif";
// import Paladin from "../../assets/vocations/paladin.gif";
// import Druid from "../../assets/vocations/druid.gif";
// import Sorcerer from "../../assets/vocations/sorcerer.gif";

const Navigation = () => {
  return (
    <>
      <Grid2
        container
        sx={{
          width: "100%",
          justifyContent: "space-between",
          height: "fit-content",
          alignItems: "center",
          pb: "0.5rem",
          mb: "2.5rem",
          borderBottom: "2px solid #e0e0e0",
        }}
      >
        <IconButton size="large" color="inherit">
          <MenuIcon />
        </IconButton>
        <Link
          href="/"
          underline="none"
          sx={{
            width: "max-content",
            height: "fit-content",
          }}
        >
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
        </Link>
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
    </>
  );
};

export default Navigation;
