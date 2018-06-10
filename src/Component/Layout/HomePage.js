import React, { Component } from 'react';
import { Segment, Divider, Grid, Container, Button, Image } from 'semantic-ui-react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ContentHome1 from '../Layout/ContentHome1';
import ContentHome2 from '../Layout/ContentHome2';
import LoginBox from './Login/LoginBox';
import CenterSegment from '../Util/Segment/CenterSegment'

class HomePage extends Component {

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
                    <Grid columns='equal'>
                        <Grid.Row only='computer tablet' >
                            <Grid.Column >
                                <ContentHome1 />
                            </Grid.Column>
                            <Grid.Column>
                                <Image size='large' src="public/images/responsive1.jpg" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='computer tablet'>
                            <Grid.Column >
                                <ContentHome2 />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='mobile' width={16}>
                            <Grid.Column >
                                <ContentHome1 />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='mobile' width={16}>
                            <Grid.Column>
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

export default HomePage