import React, { Component } from 'react';
import { Segment, Divider, Grid, Container, Button } from 'semantic-ui-react'
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import LogoBar from '../Layout/LogoBar'
import CenterSegment from '../Util/Segment/CenterSegment';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginTap: true,
            custResponse: "",
            custColor: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isLoginTap: !prevState.isLoginTap,
            custResponse: "",
        }));
    }

    handleMessage(message, color) {
        this.setState({
            custResponse: message,
            custColor: color,
        });
    }

    render() {

        const isLoginTap = this.state.isLoginTap;
        const custResponse = this.state.custResponse;
        const custColor = this.state.custColor;

        return (
            <div>
                <LogoBar />
                <Container >
                    <div className="loginBox" >
                        {isLoginTap &&
                            <Grid columns='equal'>
                                <Grid.Row stretched>
                                    <Grid.Column only='computer tablet'>
                                    </Grid.Column>
                                    <Grid.Column width={7} only='computer tablet'>
                                        {custResponse.length > 0 && <CenterSegment color={custColor} message={custResponse} />}
                                        <Segment>
                                            <LoginBox onClick={this.handleClick} handleMessage={this.handleMessage} />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column only='mobile'>
                                        {custResponse.length > 0 && <CenterSegment color={custColor} message={custResponse} />}
                                        <Segment>
                                            <LoginBox onClick={this.handleClick} handleMessage={this.handleMessage} />
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
                                        {custResponse.length > 0 && <CenterSegment color={custColor} message={custResponse} />}
                                        <Segment>
                                            <RegisterBox onClick={this.handleClick} handleMessage={this.handleMessage} />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column only='mobile'>
                                        {custResponse.length > 0 && <CenterSegment color={custColor} message={custResponse} />}
                                        <Segment>
                                            <RegisterBox onClick={this.handleClick} handleMessage={this.handleMessage} />
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