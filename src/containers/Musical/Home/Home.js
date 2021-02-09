import React, { Component } from 'react';
import Slider from '../../../Components/Navigation/Slider/Slider';
import data  from '../../../Components/External/External';
import classes from './Home.module.css'

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
            let nextInstru = this.state.pic[nextPic]
            this.setState({ currentPic: nextPic, imgShown: nextInstru })
        }
        else {
            let nextPic = 2
            let nextInstru = this.state.pic[0]
            this.setState({currentPic: nextPic, imgShown: nextInstru})
        }
    }
    render() {
        return (
            <div>
                <header className= {classes.headerContainer}>
                    <div className={classes.hero}>
                        <div className={classes.heroTxt}>
                         <h1>Welcome to a whole new world of Sounds!!</h1>
                        </div>
                    </div>
                </header>

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
        )
    }
}

export default home;