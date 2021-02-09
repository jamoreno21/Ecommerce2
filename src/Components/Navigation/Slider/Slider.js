import React from 'react';
import classes from "./Slider.module.css";

const Slider = (props) =>{
        const source = 'url(' + props.pic.source + ')'
        return (
            <div className={classes.Slider}>
                    <div style={{content:source}} className={classes.Image}></div>
                    <button onClick = {props.backHandler} className= {classes.Backward} >Back</button>
                <button onClick = {props.forwardHandler} className= {classes.Forward}>Next</button>
                    <ul className={classes.content}>
                        <li className={classes.Name}>{props.pic.name}</li>
                        <li className={classes.Description}>{props.pic.description}</li>
                    </ul>
            </div>
        )
}

export default Slider;