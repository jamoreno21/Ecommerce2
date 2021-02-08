import React from 'react';
import classes from "./Slider.module.css";

const Slider = (props) =>{
    console.log(props)
        const source = 'url(' + props.pic.source + ')'
        return (
            <div className={classes.Slider}>
                <button onClick = {props.backHandler}>Back</button>
                <div className={classes.Card}>
                    <div steyle={{content:source}} className={classes.Image}></div>
                    <ul className={classes.content}>
                        <li className={classes.Name}>{props.pic.name}</li>
                        <li className={classes.Price}>{props.pic.price}</li>
                        <li className={classes.Description}>{props.pic.description}</li>
                    </ul>
                </div>
                <button onClick = {props.forwardHandler}>Next</button>
            </div>
        )
}

export default Slider;