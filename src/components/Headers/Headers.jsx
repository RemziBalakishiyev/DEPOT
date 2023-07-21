import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FavoriteBorder, PersonOutline } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { styled, Stack } from "@mui/material";

const AppDiv = styled("div")`
  color: "#00000";
  text-align: center;
  margin-left: 1.4rem;
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
`;
const PriceSpan = styled("span")`
  font-size: 12px;
`;
function Headers() {
  const pages = ["home", "about", "contact"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="fixed" sx={{ height: "60px" }}>
      <Box
        sx={{
          flexGrow: 1,
          background: "#fff",
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "#fff",
            display: { xs: "none", md: "flex" },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:active": {
                  background: "#000",
                },
              }}
            >
              <NavLink
                to={`/${page == "home" ? "" : page}`}
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "none", color: "red" }
                    : { textDecoration: "none", color: "#000" }
                }
              >
                {page}
              </NavLink>
            </Button>
          ))}
        </Box>
        <Box color={"AppWorkspace"}>
          <Typography
            variant="h5"
            sx={{
              letterSpacing: "10px",
            }}
          >
            DEPOT
          </Typography>
        </Box>
        <Box sx={{ width: "400px" }}>
          <Stack
            flexDirection={"row"}
            sx={{ minWidth: "100%" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AppDiv sx={{ color: "#000" }}>
              Cart <PriceSpan sx={{ color: "#d4d4d4" }}>(123)</PriceSpan>
            </AppDiv>
            <AppDiv sx={{ color: "#000" }}>
              <FavoriteBorder></FavoriteBorder>{" "}
              <PriceSpan sx={{ color: "#d4d4d4" }}>(0)</PriceSpan>
            </AppDiv>
            <AppDiv sx={{ color: "#000" }}>
              Login
              <PersonOutline sx={{ marginLeft: "5px" }} />
            </AppDiv>
          </Stack>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Headers;
