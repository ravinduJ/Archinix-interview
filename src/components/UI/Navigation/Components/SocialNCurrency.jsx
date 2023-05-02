import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import CurrencyMenu from "./CurrencyMenu";

function SocialNCurrency() {
  return (
    <div className="header-social-n-currency">
      <div className="header-socials">
        <div className="header-socials__icon">
          <AiFillYoutube />
        </div>
        <div className="header-socials__icon">
          <FaFacebookF />
        </div>
        <div className="header-socials__icon">
          <AiFillInstagram />
        </div>
      </div>
      <CurrencyMenu />
    </div>
  );
}

export default SocialNCurrency;