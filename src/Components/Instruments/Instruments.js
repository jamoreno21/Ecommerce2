import classes from './Instruments.module.css';
import React from 'react';
import Instrument from './Instrument/Instrument';
import FilterHigh from '../Filter/HightoLow/FilterHigh';
import FilterLow from '../Filter/LowtoHigh/FilterLow';

const Instruments = (props) => {

        switch(props.filter){
            case '1':
                FilterLow(props)
                break;
            case '2':
                FilterHigh(props)
                break;
            default:
                    break;
        }

    
    const allProducts = props.Data.map(instrument => {
        return (
            <Instrument
                Name={instrument.name}
                Description={instrument.description}
                Price={instrument.price}
                key={instrument.ID}
                Source={instrument.source}
            />
        )
    })

    return (
        <div className={classes.ProductsGrid}>
            {allProducts}
        </div>
    )
}

export default Instruments;