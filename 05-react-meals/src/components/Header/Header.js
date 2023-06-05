import React from "react";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.heading}>ReactMeals</h1>
      <HeaderCartButton />
    </header>
  );
};

export default Header;
