import React, { Component } from 'react';
import Instruments from '../../../Components/Instruments/Instruments';
import classes from '../Products/Products.module.css'
import database from '../../../Components/External/External'
import Auxiliry from '../../../../src/hoc/Auxilliary'

class Products extends Component {
    state = {
        items: database.products
        // filter: null 
    }
        filterHandler = (type) =>{
            switch(type){
                case '1': 
                    this.setState({filter: '1' })
                    break;
                case '2':
                    this.setState({filter : '2' })
                    break;
                defualt: 
                    break;
            } 
        }
    
    render() {

            return (
                <Auxiliry>
                    <div className={classes.ProductsGrid}>
                        <div className={classes.Filter}></div>
                        <Instruments Data={this.state.items} />
                        <div className={classes.ItemSummary}>Cart </div>
                    </div>
                </Auxiliry>
            )
        }
}
    

    export default Products;