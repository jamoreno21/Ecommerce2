import React, { Component } from 'react';
import Instruments from '../../../Components/Instruments/Instruments';
import classes from '../Products/Products.module.css'
import database from '../../../Components/External/External'
import Auxiliry from '../../../../src/hoc/Auxilliary'
import Filter from '../../../Components/Filter/Filter'

class Products extends Component {
    state = {
        items: database.products,
        filter: null 
    }
        filterHandler = (type) =>{
            switch(type){
                case '1': 
                    this.setState({filter: '1' })
                    break;
                case '2':
                    this.setState({filter : '2' })
                    break;
                case '3': 
                    this.setState({filter: '3' })
                    break;
                case '4':
                    this.setState({filter : '4' })
                    break;
                default: 
                    break;
            } 
        }
    
    render() {

            return (
                <Auxiliry>
                    <div className={classes.ProductsGrid}>
                        <Filter change = {this.filterHandler} className = {classes.Filter}/>
                        {/* <div className={classes.Filter}></div> */}
                        <Instruments filter = {this.state.filter} Data={this.state.items} />
                        <div className={classes.ItemSummary}>Cart </div>
                    </div>
                </Auxiliry>
            )
        }
}
    

    export default Products;