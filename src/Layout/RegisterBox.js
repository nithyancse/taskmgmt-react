import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

class RegisterBox extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        return (
            <Grid textAlign='center'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Sign Up your account
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
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Confirm Password'
                            type='password'
                        />
                        <Button color='teal' fluid size='large'>Sign Up</Button>
                    </Segment>
                </Form>
                <Message>
                    You are Registered? Continue to  <a href='#'  onClick={this.handleClick}>Login</a>
                </Message>
            </Grid.Column>
        </Grid>
        )
    }
}

export default RegisterBox
