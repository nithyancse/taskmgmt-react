import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginBox extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    handleLoginSubmit() {
        this.props.handleLoginSubmit();
    }

    render() {
        return (
            <div>
                <Grid textAlign='center'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Login to your account
                        </Header>
                        <Form size='large'>
                            <Segment>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />
                                <Button color='teal' fluid size='large' onClick={this.handleLoginSubmit}>Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us?  <a href='#'  onClick={this.handleClick}>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default LoginBox