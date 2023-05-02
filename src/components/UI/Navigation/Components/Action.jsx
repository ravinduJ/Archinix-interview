import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
function Actions() {
  return (
    <div className="header-main__actions">
      <button className="header-main__button">Track Order</button>
      <div className="header-main__round-link">
        <BiUser />
      </div>
      <div className="header-main__round-link">
        <AiOutlineHeart />
      </div>
      <div className="header-main__round-link">
        <BsHandbag />
      </div>
    </div>
  );
}

export default Actions;