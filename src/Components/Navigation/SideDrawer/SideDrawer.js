import React from 'react';
// import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/BackDrop/BackDrop';
import Auxilliary from '../../../hoc/Auxilliary';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }


    return(
        <Auxilliary>
            <Backdrop show= {props.open} clicked = {props.closed}/>
            <div className= {attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxilliary>
        );
    }

export default sideDrawer;