import classes from './Contact.module.css';
import React, { Component } from 'react';

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
                <div className={classes.form}>
                    <form name="form" onSubmit={this.submitHandler}>
                        <div id="contact-heading">
                            <h2>Contact Us</h2>
                        </div>
                        <div className={classes.contactBox}>
                            <div></div>
                            <div className={classes.contact}>
                                <label>
                                    First Name <br />
                                    <input type="text" name="firstname" placeholder="First Name" />
                                </label>
                            </div>
                            <div className={classes.contact}>
                                <label>
                                    Last Name <br />
                                    <input type="text" name="lastname" placeholder="Last Name" />
                                </label>
                            </div>
                            <div className={classes.contact}>
                                <label>
                                    Email <br />
                                    <input type="email" name="email" placeholder="Email" />
                                </label>
                            </div>
                            <div className={classes.contact}>
                                <label>
                                    Phone Number <br />
                                    <input type="text" name="phone" placeholder="(XXX)-XXX-XXXX" />
                                </label>
                            </div>
                            <div className={classes.contact}>
                                <label
                                >Comments <br />
                                    <textarea placeholder="Comments?"></textarea>
                                </label>
                            </div>
                            <div>
                                <button className={classes.btn}>Submit!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;