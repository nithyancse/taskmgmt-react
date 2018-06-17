import axios from 'axios'
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Divider, Label } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { observer, inject } from 'mobx-react';
import { isValidEmailId } from '../../../Util/ValidationUtil'
import constValid from '../../../Constant/Validation'
import Common from '../../../Constant/Common'
import RedirectTo from '../../../Constant/RedirectTo'

@inject(['store'])
@observer
class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginTap: true,
            pageToRedirect: "",
            emailIdErr: '',
            passwordErr: '',
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginSubmit(e) {
        let loginButton = document.getElementById("loginButton");
        let isValid = this.validateLoginForm(e);
        if (!isValid) {
            this.props.handleMessage("", ""); // don't show this error(parent class) if any field error is displayed
            return status;
        } else {
            loginButton.classList.add("loading");
            e.preventDefault();
        }

        let pageToRedirect = "";
        let params = new URLSearchParams();
        params.append('emailId', this.emailId.value);
        params.append('password', this.password.value);

        axios.post('/login', params)
            .then(response => {
                if (response.status == 200) {
                    this.props.store.home.setIsLoggedIn(true);
                    this.props.store.home.setUser(response.data.user);
                    this.props.store.home.setCompany(response.data.company);
                    if (!this.props.store.home.user.name) {
                        pageToRedirect = RedirectTo.ADD_NAME;
                    } else if (!this.props.store.home.company) {
                        pageToRedirect = RedirectTo.ADD_COMPANY;} 
                    else {
                        pageToRedirect = RedirectTo.HOME;
                    }
                    this.setState({
                        pageToRedirect: pageToRedirect
                    });
                }
            })
            .catch(error => {
                this.props.handleMessage(error.response.data.message, "red");
            });

        loginButton.classList.remove("loading");
    }

    validateLoginForm(e) {
        let emailId = this.emailId.value;
        let password = this.password.value;
        let emailIdErrMsg = "", passwordErrMsg = "";
        let status = true;

        if (!emailId) {
            emailIdErrMsg = constValid.EMAIL.ENTER;
            status = false;
        } else {
            /* if (!isValidEmailId(emailId)) {
                emailIdErrMsg = constValid.EMAIL.VALID;
                status = false;
            } */
        }
        if (!password) {
            passwordErrMsg = constValid.PASSWORD.ENTER;
            status = false;
        }
        this.setState({
            emailIdErr: emailIdErrMsg,
            passwordErr: passwordErrMsg,
        });
        return status;
    }

    render() {

        switch (this.state.pageToRedirect) {
            case RedirectTo.ADD_NAME:
                return <Redirect to={RedirectTo.ADD_NAME} />;
                break;
            case RedirectTo.ADD_COMPANY:
                return <Redirect to={RedirectTo.ADD_COMPANY} />;
                break;
            case RedirectTo.HOME:
                return <Redirect to={RedirectTo.HOME} />;
                break;
            case RedirectTo.SIGNUP:
                return <Redirect to={RedirectTo.SIGNUP} />;
                break;
        }

        const emailIdErr = this.state.emailIdErr;
        const passwordErr = this.state.passwordErr;

        return (
            <div>
                <Grid textAlign='center'>
                    <Grid.Column style={{ maxWidth: 550 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Login to your account
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
                                <Button id="loginButton" color='teal' fluid size='large' onClick={this.handleLoginSubmit}>Login</Button>
                            </Segment>
                        </Form>
                        <div className="forgot"><a href='#'>Forgot Password</a></div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default LoginBox