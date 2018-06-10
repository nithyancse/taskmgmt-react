import axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Button, Form, Grid, Header, Message, Segment, Label } from 'semantic-ui-react'
import { isValidEmailId } from '../../../Util/ValidationUtil'
import constValid from '../../../Constant/Validation'
import Common from '../../../Constant/Common'

class SignupBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailId: "",
            password: "",
            confirmPassword: "",
            pageToRedirect:"",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }

    handleClick() {
        this.setState({
            pageToRedirect: Common.LOGIN,
        });
    }

    handleSignUpSubmit(e) {
        let registerForm = document.getElementById("registerForm");
        let isValid = this.validateRegisterForm(e);
        let color = "green";
        if (!isValid) {
            this.props.handleMessage("", ""); // don't show this error(parent class) if any field error is displayed
            return false;
        } else {
            e.preventDefault();
            registerForm.classList.add("loading");
        }

        //add the new user 
        axios.post('/addUser', {
            emailId: this.emailId.value,
            password: this.password.value,
            confirmPassword: this.confirmPassword.value
        })
            .then(response => {
                //console.log(response);
                if (response.status == 201 || response.status == 208) {
                    //clear the errors from server if successfullly registerd
                    this.setState({
                        emailId: "",
                        password: "",
                        confirmPassword: "",
                    });
                    if(response.status == 208){ color = "yellow"; }
                    // dispaly success or already registered in parent component
                    this.props.handleMessage(response.data.message, color); 
                    
                    //Toggle - show the Login box
                    //this.handleClick();                    
                }
            })
            .catch(error => {
                //console.log(error.response);
                //clear the pevious error for loading the new error from server
                this.setState({
                    emailId: "",
                    password: "",
                    confirmPassword: "",
                });
                if (error.response.status == 400) {
                    //pojo attribute and form field name should be same for this kind of validation
                    for (let errorObj of error.response.data.fieldErrors) {
                        this.setState({
                            [errorObj.field]: errorObj.defaultMessage, 
                        });
                        errorObj.field = errorObj.defaultMessage;
                    }
                } else {
                    this.props.handleMessage(error.response.data.message, "red");
                }
            });

        registerForm.reset(); // reset the form fields
        registerForm.classList.remove("loading");  // stop the loading
    }

    validateRegisterForm(e) {
        let emailId = this.emailId.value;
        let password = this.password.value;
        let confirmPassword = this.confirmPassword.value;
        let emailIdErrMsg = "", passwordErrMsg = "", confirmPasswordErrMsg = "";
        let status = true;

        if (!isValidEmailId(emailId)) {
            emailIdErrMsg = constValid.EMAIL.VALID;
            status = false;
        }
        if (password.length < 6) {
            passwordErrMsg = constValid.PASSWORD.VALID;
            status = false;
        }
        if (confirmPassword.length < 6) {
            confirmPasswordErrMsg = constValid.CONFIRM_PASSWORD.VALID;
            status = false;
        }
        if (password !== confirmPassword) {
            confirmPasswordErrMsg = constValid.CONFIRM_PASSWORD.NOT_MATCH;
            status = false;
        }
        this.setState({
            emailId: emailIdErrMsg,
            password: passwordErrMsg,
            confirmPassword: confirmPasswordErrMsg,
        });
        return status;
    }

    render() {

        if (this.state.pageToRedirect == Common.LOGIN) {
            return <Redirect to= {Common.LOGIN} />;
        }

        const emailIdErr = this.state.emailId;
        const passwordErr = this.state.password;
        const confirmPasswordErr = this.state.confirmPassword;

        return (
            <div>
                <Grid textAlign='center'>
                    <Grid.Column style={{ maxWidth: 600 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Sign Up your account
                        </Header>
                        <Form id="registerForm" size='large'>
                            <Segment>
                                <Form.Field>
                                    <div className="ui left icon input">
                                        <input
                                            placeholder='E-mail address'
                                            type="text"
                                            ref={(emailId) => this.emailId = emailId}
                                        />
                                        <i aria-hidden="true" className="user icon"></i>
                                        {emailIdErr.length > 0 && <Label pointing='left'>{emailIdErr}</Label>}
                                    </div>
                                </Form.Field>
                                <Form.Field>
                                    <div className="ui left icon input">
                                        <input
                                            placeholder='Password'
                                            type="password"
                                            ref={(password) => this.password = password}
                                        />
                                        <i aria-hidden="true" className="lock icon"></i>
                                        {passwordErr.length > 0 && <Label pointing='left'>{passwordErr}</Label>}
                                    </div>
                                </Form.Field>
                                <Form.Field>
                                    <div className="ui left icon input">
                                        <input
                                            placeholder='Confirm password'
                                            type="password"
                                            ref={(confirmPassword) => this.confirmPassword = confirmPassword}
                                        />
                                        <i aria-hidden="true" className="lock icon"></i>
                                        {confirmPasswordErr.length > 0 && <Label pointing='left'>{confirmPasswordErr}</Label>}
                                    </div>
                                </Form.Field>
                                {/*<Form.Checkbox label='I agree to the Terms and Conditions' />*/}
                                <Button color='teal' fluid size='large' onClick={this.handleSignUpSubmit}>Sign Up</Button>
                            </Segment>
                        </Form>
                        <Message>
                            You are Registered? Continue to  <a href='#' onClick={this.handleClick}>Login</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default SignupBox

