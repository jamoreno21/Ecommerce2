import React from 'react';
import classes from '../Toolbar/Toolbar.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <DrawerToggle clicked ={props.drawerToggleClicked}/>
        <nav className = {classes.Desktop}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;