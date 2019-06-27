import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../SideDrawer/Menu/Menu';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Menu clicked={props.menuClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
