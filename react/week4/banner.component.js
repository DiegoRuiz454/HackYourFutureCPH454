import React, { Fragment } from "react";
import ReactLogo from "../asset/hyf.png";

// Styling
import { HeadingStyle } from "./banner.style";
import { LogoStyle } from "./banner.style";

const Banner = () => {
  return (
    <Fragment>
      <header>
        <HeadingStyle>
        GitHub User searcher <br></br>
           HackYouFuture 2020          
          <LogoStyle src={ReactLogo} alt="HackYouFuture Logo" />
        </HeadingStyle>
      </header>
    </Fragment>
  );
};

export default Banner;