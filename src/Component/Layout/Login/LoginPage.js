import React, { Component } from 'react';
import { Segment, Divider, Grid, Container, Button, Image } from 'semantic-ui-react'
import LoginBox from './LoginBox';
import Header from '../Header'
import Footer from '../Footer'
import CenterSegment from '../../Util/Segment/CenterSegment'
import ContentHome1 from '../ContentHome1';
import ContentHome2 from '../ContentHome2';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            custResponse: "",
            custColor: "",
        }
        this.handleMessage = this.handleMessage.bind(this);
    }

    handleMessage(message, color) {
        this.setState({
            custResponse: message,
            custColor: color,
        });
    }

    render() {
        const custResponse = this.state.custResponse;
        const custColor = this.state.custColor;

        return (
            <div>
                <Header />
                <Container className="contain" >
                    <Grid centered columns='equal'>
                        <Grid.Row >
                            <Grid.Column width={7} only='computer tablet'>
                            {custResponse.length > 0 && <CenterSegment color={custColor} message={custResponse} />}
                                <Segment className="loginBox">
                                    <LoginBox onClick={this.handleClick} handleMessage={this.handleMessage} />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column  width={16} only='mobile'>
                                {custResponse.length > 0 && <CenterSegment color={custColor} message={custResponse} />}
                                <Segment>
                                    <LoginBox onClick={this.handleClick} handleMessage={this.handleMessage} />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default LoginPage