import classes from './Instruments.module.css';
import React from 'react';
import Instrument from './Instrument/Instrument';
import FilterHigh from '../Filter/HightoLow/FilterHigh';
import FilterLow from '../Filter/LowtoHigh/FilterLow';
import AtoZ from '../Filter/AtoZ/AtoZ';
import ZtoA from '../Filter/ZtoA/ZtoA';
const Instruments = (props) => {

        switch(props.filter){
            case '1':
                FilterLow(props)
                break;
            case '2':
                FilterHigh(props)
                break;
            case '3':
                AtoZ(props)
                break;
            case '4':
                ZtoA(props)
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
                filter = {1}
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