import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./styles.scss";
import Sidebar from "../../Sidebar/Sidebar";
import SearchComponent from "./Components/SearchComponent";
import SocialNCurrency from "./Components/SocialNCurrency";
import Actions from "./Components/Action";
import LogoComponent from "./Components/LogoComponent";
export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: { md: "none" },
        }}
      >
        <div className="header-shipping">
          Free shipping in USA and INDIA. Free Worldwide shipping on all orders
          over US $ 150
        </div>
        <div className="hide-in-mobile">
          <Toolbar>
            <SocialNCurrency />
          </Toolbar>
        </div>
        <Toolbar>
          <div className="hide-in-mobile header-main">
            <LogoComponent />
            <SearchComponent /> 
            <Actions />
          </div>
          <div className="hide-in-web mobile-header">
            <LogoComponent />
            <Sidebar />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}