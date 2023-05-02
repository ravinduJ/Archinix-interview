import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import "./styles.scss";
import SearchComponent from "../UI/Navigation/Components/SearchComponent";
import SocialNCurrency from "../UI/Navigation/Components/SocialNCurrency";
import Actions from "../UI/Navigation/Components/Action";

import logo from "../../assets/images/logo.png";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sidebar-icon" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </div>
      <div className={`sidebar ${isOpen ? "isOpen" : ""}`}>
        <div className="header-main__logo">
          <img src={logo} alt="" />
        </div>
        <SearchComponent />
        <Actions />
        <SocialNCurrency />
        <div className="sidebar__close">
          <Close onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;