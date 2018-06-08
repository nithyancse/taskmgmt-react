import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Label } from 'semantic-ui-react'
import { isValidEmailId } from '../../Util/ValidationUtil'
import constants from '../../Constant/Validation'

class RegisterBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailId: "",
            password: "",
            confirmPassword: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    handleSignUpSubmit(e) {

        let emailId = this.emailId.value;
        let password = this.password.value;
        let confirmPassword = this.confirmPassword.value;
        let emailIdErrMsg = "";
        let passwordErrMsg = "";
        let confirmPasswordErrMsg = "";
        let status = true;

        if (!isValidEmailId(emailId)) {
            emailIdErrMsg = constants.EMAIL.VALID;
            status = false;
        }
        if (password.length < 6) {
            passwordErrMsg = constants.PASSWORD.VALID;
            status = false;
        }
        if (confirmPassword.length < 6) {
            confirmPasswordErrMsg = constants.CONFIRM_PASSWORD.VALID;
            status = false;
        }
        if (password !== confirmPassword) {
            confirmPasswordErrMsg = constants.CONFIRM_PASSWORD.NOT_MATCH;
            status = false;
        }
        this.setState({
            emailId: emailIdErrMsg,
            password: passwordErrMsg,
            confirmPassword: confirmPasswordErrMsg,
        });

        if (!status) {
            // don't show this error if any field error is displayed
            this.props.handleMessage("","");
            return status;
        }

        axios.post('/addUser', {
            emailId: emailId,
            password: password,
            confirmPassword: confirmPassword
        })
        .then(response => {
            //console.log(response);
            if (response.status == 201 || response.status == 208) {
                this.setState({
                    emailId: "",
                    password: "",
                    confirmPassword: "",
                });
                // dispaly success or already registered in parent component
                this.props.handleMessage(response.data.message,"green");
            }
        })
        .catch(error => {
            //console.log(error.response);
            this.setState({
                emailId: "",
                password: "",
                confirmPassword: "",
            });
            if (error.response.status == 400) {
                for (let errorObj of error.response.data.fieldErrors) {
                    this.setState({
                        [errorObj.field]: errorObj.defaultMessage,
                    });
                    errorObj.field = errorObj.defaultMessage;
                }
            }
            if (error.response.status == 404 || error.response.status == 500) {
                this.props.handleMessage(error.response.data.message, "red");
            }
        });
    }

    render() {

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
                        <Form size='large'>
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

export default RegisterBox

