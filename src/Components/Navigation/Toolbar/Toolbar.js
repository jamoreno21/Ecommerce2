import React from 'react';
import classes from './ToolBar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <DrawerToggle clicked ={props.drawerToggleClicked}/>
        <nav className = {classes.Desktop}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;