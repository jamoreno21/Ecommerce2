import React from 'react';
import classes from "./Slider.module.css";

const Slider = (props) =>{
        const source = 'url('+props.InstruFeat.source+')'
        return (
            <div className={classes.Slider}>
                <button onClick = {props.back}>&#8592</button>
                <div className={classes.Card}>
                    <div steyle={{content:source}} className={classes.Image}></div>
                    <ul className={classes.content}>
                        <li className={classes.Name}>{props.InstruFeat.name}</li>
                        <li className={classes.Price}>{props.InstruFeat.price}</li>
                        <li className={classes.Description}>{props.InstruFeat.description}</li>
                    </ul>
                </div>
                <button onClick = {props.forward}>&#8594</button>
            </div>
        )
}

export default Slider;