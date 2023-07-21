import React from "react";
import Headers from "../../components/Headers/Headers";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

function Layoput() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      spacing={8}
    >
      <Headers></Headers>
      <Outlet />
    </Stack>
  );
}

export default Layoput;
