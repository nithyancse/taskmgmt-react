import React, { Component } from 'react';
import LoginBox from './LoginBox';
import { observer } from 'mobx-react';
import RegisterBox from './RegisterBox';
import LoginFBTG from './LoginFBTG';
import LogoBar from './LogoBar'
import { Segment, Divider, Grid, Container, Button } from 'semantic-ui-react'
import LoginError from './LoginError';
import LoginSuccess from './LoginSuccess';
import axios from 'axios'
import store from './LoginStore';
import { Redirect } from 'react-router'

@observer
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginTap: true,
            errorMsg: '',
            emailId: '',
            password: '',
            resStatus: '',
            custResponse: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isLoginTap: !prevState.isLoginTap,
        }));
    }

    handleLoginSubmit(emailId, password) {

        axios.get('/login', {
            params: {
                emailId: emailId,
                password: password
            }
        })
            .then(response => {
                //console.log(response);
                if (response.status == 200) {
                    store.user = response.data.user;
                    store.company = response.data.company;
                    store.isLoggedIn = "Login";
                    this.setState({
                        errorMsg: "",
                        isLoggedIn: true
                    });
                }
            })
            .catch(error => {
                if (error.response.status == 400) {
                    this.setState({
                        errorMsg: error.response.data.message,
                    });
                }
            });
    }

    handleSignUpSubmit(emailId, password, confirmPassword) {


        axios.post('/addUser', {
            emailId: emailId,  // by key "emailId" store value "emailId"
            password: password,
            confirmPassword: confirmPassword
        })
            .then(response => {
                if (response.status == 201 || response.status == 208) {
                    this.setState({
                        custResponse: response.data.message,
                    });
                }
            })
            .catch(error => {
                console.log(error.response);
                if (error.response.status == 400) {
                    var obj = {};
                    for (let user of error.response.data.fieldErrors) {
                        obj[user.field] = user.defaultMessage;
                    }
                    store.custError = obj;
                }
            });

    }

    render() {
        const isLoginTap = this.state.isLoginTap;
        const errorMsg = this.state.errorMsg;
        const resStatus = this.state.resStatus;
        const custResponse = this.state.custResponse;

        if (store.isLoggedIn == "Login") {
            return <Redirect to="/home" />;
        }

        return (
            <div>
                <LogoBar />
                <Container >
                    <div className="loginBox" >
                        {isLoginTap &&
                            <Grid columns='equal'>
                                <Grid.Row stretched>
                                    <Grid.Column width={9} only='computer tablet'>
                                    </Grid.Column>
                                    <Grid.Column width={7} only='computer tablet'>
                                        {errorMsg.length > 0 && <LoginError message={errorMsg} />}
                                        <Segment>
                                            <LoginBox onClick={this.handleClick} handleLoginSubmit={this.handleLoginSubmit} />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column only='mobile'>
                                        {errorMsg.length > 0 && <LoginError message={errorMsg} />}
                                        <Segment>
                                            <LoginBox onClick={this.handleClick} handleLoginSubmit={this.handleLoginSubmit} />
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        }
                        {!isLoginTap &&
                            <Grid columns='equal'>
                                <Grid.Row stretched>
                                    <Grid.Column width={9} only='computer tablet'>
                                    </Grid.Column>
                                    <Grid.Column width={7} only='computer tablet'>
                                        {custResponse.length > 0 && <LoginSuccess message={custResponse} />}
                                        <Segment>
                                            <RegisterBox onClick={this.handleClick} handleSignUpSubmit={this.handleSignUpSubmit} />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column only='mobile'>
                                        {custResponse > 0 && <LoginSuccess message={custResponse} />}
                                        <Segment>
                                            <RegisterBox onClick={this.handleClick} handleSignUpSubmit={this.handleSignUpSubmit} />
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        }
                    </div>
                </Container>
            </div>
        )
    }
}

export default LoginPage