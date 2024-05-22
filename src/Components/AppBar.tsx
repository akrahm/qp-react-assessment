import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DenseAppBar() {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{
            justifyContent: "center",
            height: "90px",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            TODO APP
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
