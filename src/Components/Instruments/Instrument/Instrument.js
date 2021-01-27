import React from 'react';
// import Instruments from '../Instruments';
import classes from './Instrument.module.css';
// import FilterLow from '../../Filter/LowtoHigh/FilterLow';
// import FilterHigh from '../../Filter/HightoLow/FilterHigh';

const instruments = (props) => {
    

    const Source = 'url(' + props.Source + ')'
    return (
        <div className={classes.Card}>
            <div className={classes.Image} style={{ content: Source }}> </div>

            <ul className={classes.Content}>

                <li className={classes.price}>{props.Price}</li>
                <li className={classes.name}>{props.Name}</li>
                <li className={classes.description}>{props.Description}</li>
                <button className={classes.Button}>Add to Cart</button>

            </ul>

        </div>

    )
}

export default instruments;