import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from '/Users/R2H/Desktop/ecommerce2/src/Components/Navigation/NavigationItems/NavigationItem/NavagationItem.module.css'

const NavigationItem = (props) =>(
    <li className = {classes.NavItem}>
        <NavLink to={props.link}
        activeClassName ={classes.active}
        exact = {props.exact}> {props.children}</NavLink>

    </li>
);

export default NavigationItem;