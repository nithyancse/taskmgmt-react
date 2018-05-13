import React, { Component } from 'react';
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import LoginFBTG from './LoginFBTG';
import LogoBar from './LogoBar'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon, List, Divider } from 'semantic-ui-react'

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginTap: true
        }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(prevState => ({
            isLoginTap: !prevState.isLoginTap
        }));
    }

    render() {
        const isLoginTap = this.state.isLoginTap;
        const box = isLoginTap ? (<LoginBox isLoginTap={isLoginTap} onClick={this.handleClick} />)
            : (<RegisterBox isLoginTap={isLoginTap} onClick={this.handleClick} />);

        return (
            <div>
                <LogoBar />
                <div className="loginBox" >
                    <Grid className='loginError' >
                        <Grid.Row color='red' textAlign='center'  >
                            <Grid.Column>
                                Incorrect Username and Password !!!
                    </Grid.Column>
                        </Grid.Row>
                    </Grid>
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