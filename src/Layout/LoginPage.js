import React, { Component } from 'react';
import LoginBox from './LoginBox';
import { observer } from 'mobx-react';
import RegisterBox from './RegisterBox';
import LoginFBTG from './LoginFBTG';
import LogoBar from './LogoBar'
import { Segment, Divider, Grid, Container,Button } from 'semantic-ui-react'
import LoginError from './LoginError';
import axios from 'axios'
import store from './LoginStore';
import { Redirect } from 'react-router'

@observer
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginTap: true,
            isError: false,
            errorMsg: '',
            emailId: '',
            password: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

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
                        isError: false,
                        isLoggedIn: true
                    });
                }
            })
            .catch(error => {
                if (error.response.data.status == "BAD_REQUEST") {
                    this.setState({
                        errorMsg: error.response.data.message,
                        isError: true
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
                //console.log(response);
                if (response.status == 201) {
                    alert("success");
                }
                if (response.status == 208) {
                    alert("already user registered");
                }
            })
            .catch(error => {
                alert("error req");
                if (error.response.data.status == "BAD_REQUEST") {
                    alert("bad req");
                }
            });
    }

    render() {
        const isLoginTap = this.state.isLoginTap;
        const errorMsg = this.state.errorMsg;

        if (store.isLoggedIn == "Login") {
            return <Redirect to="/home" />;
        }

        return (
            <div>
                <LogoBar />
                <Container >
                    <div className="loginBox" >
                        {this.state.isError > 0 && <LoginError errorMsg={errorMsg} />}
                        {isLoginTap &&
                            <Grid columns='equal'>
                                <Grid.Row stretched>
                                    <Grid.Column width={2} only='computer tablet'>
                                    </Grid.Column>
                                    <Grid.Column width={7} only='computer tablet'>
                                        <Segment>
                                            <LoginBox onClick={this.handleClick} handleLoginSubmit={this.handleLoginSubmit} />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column only='mobile'>
                                        <Segment>
                                            <LoginBox onClick={this.handleClick} handleLoginSubmit={this.handleLoginSubmit} />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={1} only='computer tablet'>
                                        <Divider vertical  >or </Divider>
                                    </Grid.Column>
                                    <Grid.Column width={4} only='computer tablet'>
                                        <Segment > <LoginFBTG /></Segment>
                                    </Grid.Column>
                                    <Grid.Column width={2} only='computer tablet'>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        }
                        {!isLoginTap &&
                            <Grid columns='equal'>
                                <Grid.Column width={3} only='computer tablet'>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <RegisterBox onClick={this.handleClick} handleSignUpSubmit={this.handleSignUpSubmit} />
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width={3} only='computer tablet'>
                                </Grid.Column>
                            </Grid>
                        }
                    </div>
                </Container>
            </div>
        )
    }
}

export default LoginPage