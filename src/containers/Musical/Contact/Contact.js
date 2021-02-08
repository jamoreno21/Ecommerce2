import React, { Component } from 'react';
import Navagation from '../../../Components/Navigation/Navbar';
import Footer from '../../../Components/Footer/Footer';

class Contact extends Component {

    submitHandler = () => {
        let name = document.forms["form"]["firstname"].value;
        if (name === "") {
            alert("Field Required!");
            return false;
        }
        let lastname = document.forms["form"]["lastname"].value;
        if (lastname === "") {
            alert("Field Required!");
            return false;
        }
        let email = document.forms["form"]["email"].value;
        if (email === "") {
            alert("Email Field Required!");
            return false;
        }
        let phone = document.forms["form"]["phone"].value;
        if (phone === "") {
            alert("Please Enter your Phone Number");
            return false;
        }
    }

    render() {
        return (
            <div>
                <Navagation/>
                <div className='Form'>
                    <form name="form" onSubmit={this.submitHandler}>
                        <div id="contact-heading">
                            <h1>Contact Us</h1>
                        </div>
                        <div id="contact-box">
                            <div></div>
                            <div className="contact">
                                <label>
                                    First Name <br />
                                    <input type="text" name="firstname" placeholder="First Name" />
                                </label>
                            </div>
                            <div className="contact">
                                <label>
                                    Last Name <br />
                                    <input type="text" name="lastname" placeholder="Last Name" />
                                </label>
                            </div>
                            <div className="contact">
                                <label>
                                    Email <br />
                                    <input type="email" name="email" placeholder="Email" />
                                </label>
                            </div>
                            <div className="contact">
                                <label>
                                    Phone Number <br />
                                    <input type="text" name="phone" placeholder="(XXX)-XXX-XXXX" />
                                </label>
                            </div>
                            <div className="contact">
                                <label
                                >Comments <br />
                                    <textarea placeholder="Comments?"></textarea>
                                </label>
                            </div>
                            <div>
                                <input type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;