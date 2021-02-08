import React, { Component } from 'react';
import Slider from '../../../Components/Navigation/Slider/Slider';
import data  from '../../../Components/External/External';
import { Link } from 'react-router-dom'; 

class home extends Component {

    state = {
        pic: data.slider,
        currentPic: 0,
        imgShown: data.slider[0]
    }
    //Creating slideshow arrows
    forwardHandler = () => {

        if (this.state.currentPic <= 1) {
            let nextPic = this.state.currentPic + 1
            let nextInstru = this.state.pic[nextPic]
            this.setState({ currentPic: nextPic, imgShown: nextInstru })
        }

        else {
            let fist = 0
            let firstImg = this.state.pic[0]
            this.setState({ currentPic: fist, imgShown: firstImg })
        }
    }

    backHandler = () => {

        if (this.state.currentPic >= 1) {
            let nextPic = this.state.currentPic - 1
            let lastImg = this.state.lastInstru[nextPic]
            this.setState({ currentPic: nextPic, imgShown: lastImg })
        }
        else {
            let firstPic = 2
            let firstInstru = this.state.pic[0]
            this.setState({currentPic: firstPic, imgShown: firstInstru})
        }
    }
    render() {
        return (
            <div>
                <header className= "header-container">
                    <div className="Hero">
                        <div className="heroTxt">
                         <h1>Welcome to a whole new world of Sounds!!</h1>
                             <Link to="/products">
                                 <button type='button' className="btn">
                                     View our products
                                 </button>
                             </Link>
                        </div>
                    </div>
                </header>


                <div className="instruments">
                    <h1>Featured Items</h1>

                    <Slider 
                    forwardHandler={this.forwardHandler}
                    backHandler={this.backHandler}
                    pic={this.state.imgShown}
                    />
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br> 
                     <br></br>
                     <br></br>
                     <br></br>
                </div>
            </div>
           
        )
    }
}

export default home;