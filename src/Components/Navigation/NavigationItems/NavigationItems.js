import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () =>(
    <ul className = {classes.NavItems}>
        <NavigationItem link = '/Home'>Home</NavigationItem>
        <NavigationItem link = '/Products'>Products</NavigationItem>
        <NavigationItem link = '/Checkout'>Checkout</NavigationItem>
        <NavigationItem link = '/Contact'>Contact</NavigationItem>
    </ul>
);

export default NavigationItems;