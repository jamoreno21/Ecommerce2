import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';



class Layout extends Component  {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }


render(){
    return(
            <Auxilliary>
                <Toolbar drawerToggleClicked ={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                closed = {this.sideDrawerClosedHandler} 
                open = {this.state.showSideDrawer}/>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
                <Footer /> 
            </Auxilliary>
           
        )
    };

}


export default Layout;