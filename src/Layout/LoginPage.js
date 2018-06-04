import React, { Component } from 'react';
import LoginBox from './LoginBox';
import { observer } from 'mobx-react';
import RegisterBox from './RegisterBox';
import LoginFBTG from './LoginFBTG';
import LogoBar from './LogoBar'
import { Segment, Divider } from 'semantic-ui-react'
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

        let user = {           // an object
            emailId: emailId,  // by key "emailId" store value "emailId"
            password: password,
            confirmPassword: confirmPassword
        };

        axios.post('/addUser', {
            user: user
        })
            .then(response => {
                //console.log(response);
                if (response.status == 200) {
                    alert("success");
                }
                if (response.status == 208) {
                    alert("already user registered");
                }
            })
            .catch(error => {
                if (error.response.data.status == "BAD_REQUEST") {
                    alert("bad req");
                }
            });
    }

    render() {
        const isLoginTap = this.state.isLoginTap;
        const errorMsg = this.state.errorMsg;
        const box = isLoginTap ?
            (<LoginBox onClick={this.handleClick} handleLoginSubmit={this.handleLoginSubmit} />) :
            (<RegisterBox onClick={this.handleClick} handleSignUpSubmit={this.handleSignUpSubmit} />);

        if (store.isLoggedIn == "Login") {
            return <Redirect to="/home" />;
        }

        return (
            <div>

                <LogoBar />
                <div className="loginBox" >
                    {this.state.isError > 0 && <LoginError errorMsg={errorMsg} />}
                    <Segment.Group horizontal  >
                        <Segment padded >
                            {box}
                        </Segment>
                        <Divider vertical style={{ left: '69%' }} >or </Divider>
                        <div className="floatRight " style={{ width: '30%' }}>
                            <LoginFBTG />
                        </div>
                    </Segment.Group>
                </div>
            </div>
        )
    }
}

export default LoginPage