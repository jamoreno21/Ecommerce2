import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Auxiliary from '../../hoc/Auxilliary';
import Products from './Products/Products';
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import Contact from './Contact/Contact'

class Musical extends Component {
    render() {
        return (
            <Auxiliary>
                <Route path = '/' exact component = {Home}/>
                <Route path = '/Products' exact component = {Products}/>
                <Route path = '/Checkout' exact component = {Checkout}/>
                <Route path = '/Contact' exact component = {Contact}/>
            </Auxiliary>
        )
    }
}

export default Musical;