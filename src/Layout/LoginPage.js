import React, { Component } from 'react';
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import LoginFBTG from './LoginFBTG';
import LogoBar from './LogoBar'
import { Segment, Divider } from 'semantic-ui-react'
import LoginError from './LoginError';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginTap: true,
            isError: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    }

    handleClick() {
        this.setState(prevState => ({
            isLoginTap: !prevState.isLoginTap,
        }));
    }

    handleLoginSubmit() {
        this.setState(prevState => ({
            isError: true
        }));
    }

    render() {
        const isLoginTap = this.state.isLoginTap;
        const box = isLoginTap ? (<LoginBox isLoginTap={isLoginTap} onClick={this.handleClick} handleLoginSubmit={this.handleLoginSubmit} />)
            : (<RegisterBox isLoginTap={isLoginTap} onClick={this.handleClick} />);

        return (
            <div>
                <LogoBar />
                <div className="loginBox" >
                {this.state.isError > 0 && <LoginError/> }
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