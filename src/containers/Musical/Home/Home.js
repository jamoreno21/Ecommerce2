import React, { Component } from 'react';
import Navigation from '../../../Components/Navigation/Navbar';
import Slider from '../../../Components/Navigation/Slider/Slider';
import database from '../../../database.json';
import Footer from '../../../Components/Footer/Footer';


class home extends Component {

    state = {
        pic: database.slider,
        currentPic: 0,
        imgShown: database.slider[0]
    }
    //Creating slideshow arrows
    forwardHandler = () => {

        if (this.state.currentPic <= 1) {
            let nextPic = this.state.currentPic + 1
            let nextInstru = this.state.pic[nextPic]
            this.setState({ currentPic: nextPic, imgShown: nextInstru })
        }

        else {
            let fistImg = 0
            let firstPic = this.state.pic[0]
            this.setState({ currentPic: fistImg, currentPic: firstPic })
        }
    }

    backHandler = () => {

        if (this.state.currentPic >= 1) {
            let nextPic = this.state.currentPic - 1
            let lastInstru = this.state.lastInstru[nextPic]
            this.setState({ currentPic: nextPic, currentPic: lastInstru })
        }
        else {
            let firstPic = 2
            let firstInstru = this.state.pic[0]
            this.setState({currentPic: firstPic, currentPic: firstInstru})
        }
    }
    render() {
        return (
            <div>
                <Navigation />
                <header className= "header-container">
                    <div className="Hero">
                        <div className="heroTxt">
                         <p>Welcome to a whole new world of Sounds!!</p>
                             <link to="/products">
                                 <button type='button' className="btn">
                                     View our products
                                 </button>
                             </link>
                        </div>
                    </div>
                </header>


                <div className="instruments">
                    <h1>Featured Items</h1>

                    <Slider 
                    forwardHandler={this.forwardHandler}
                    backHandler={this.backHandler}
                    pic={this.pic}
                    />
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default home;