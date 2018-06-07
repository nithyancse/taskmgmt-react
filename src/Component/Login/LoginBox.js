import axios from 'axios'
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Divider, Label } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { observer } from 'mobx-react';
import { isValidEmailId } from '../../Util/ValidationUtil'
import constants from '../../Constant/Validation'
import homeStore from '../Home/HomeStore';

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
        this.handleClick = this.handleClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    handleLoginSubmit(e) {

        let emailId = this.emailId.value;
        let password = this.password.value;
        let emailIdErrMsg = "";
        let passwordErrMsg = "";
        let status = true;

        if (!emailId) {
            emailIdErrMsg = constants.EMAIL.ENTER;
            status = false;
        } else {
            /* if (!isValidEmailId(emailId)) {
                emailIdErrMsg = constants.EMAIL.VALID;
                status = false;
            } */
        }
        if (!password) {
            passwordErrMsg = constants.PASSWORD.ENTER;
            status = false;
        }
        this.setState({
            emailIdErr: emailIdErrMsg,
            passwordErr: passwordErrMsg,
        });

        if (!status) {
            // don't show this error if any field error is displayed
            this.props.handleMessage("","");
            return status;
        }

        axios.get('/login', {
            params: {
                emailId: this.emailId.value,
                password: this.password.value
            }
        })
        .then(response => {
            let name = [];
            let company = [];
            let pageToRedirect = "homePage";

            //console.log(response);
            if (response.status == 200) {
                homeStore.setUser(response.data.user);
                homeStore.setCompany(response.data.company);
                name = response.data.user.name;
                company = response.data.company;
                if (!name) {
                    pageToRedirect = "addNamePage";
                } else if (!company) {
                    pageToRedirect = "addCompanyPage";
                }
                this.setState({
                    pageToRedirect: pageToRedirect
                });
            }
        })
        .catch(error => {
            if (error.response.status == 400 || error.response.status == 404 || error.response.status == 500) {
                this.props.handleMessage(error.response.data.message, "red");
            }
        });
    }

    render() {

        switch (this.state.pageToRedirect) {
            case "addNamePage":
                return <Redirect to="/addName" />;
                break;
            case "addCompanyPage":
                return <Redirect to="/addCompany" />;
                break;
            case "homePage":
                return <Redirect to="/home" />;
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
                                <Button color='teal' fluid size='large' onClick={this.handleLoginSubmit}>Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us?  <a href='#' onClick={this.handleClick}>Sign Up</a>
                            <span className="padLR7"> (Or) </span>
                            <Button circular color='facebook' icon='facebook' size='mini' />
                            <Button circular color='twitter' icon='twitter' size='mini' />
                            <Button circular icon='github' style={{ color: '#fff', backgroundColor: '#444' }} size='mini' />
                        </Message>
                    </Grid.Column>
                </Grid>




            </div>
        )
    }
}

export default LoginBox