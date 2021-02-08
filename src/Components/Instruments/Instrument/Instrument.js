import React from 'react';
import classes from './Instrument.module.css';

const instruments = (props) => {
    

    const Source = 'url(' + props.Source + ')'
    return (
        <div className={classes.Card}>
            <div className={classes.Image} style={{ content: Source }}> </div>

            <ul className={classes.Content}>

                <li className={classes.name}><b>{props.Name}</b></li>
                <li className={classes.price}>${props.Price}</li>
                <li className={classes.description}>{props.Description}</li>
                <button className={classes.Button}>Add to Cart</button>

            </ul>

        </div>

    )
}

export default instruments;