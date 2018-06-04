import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Label } from 'semantic-ui-react'

class RegisterBox extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    handleSignUpSubmit(e) {
        this.props.handleSignUpSubmit(this.emailId.value, this.password.value, this.confirmPassword.value)
    }

    render() {
        return (
            <Grid textAlign='center'>
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Sign Up your account
                    </Header>
                    <Form size='large'>
                        <Segment>
                            <Form.Field>
                                <div className="ui left icon input">
                                    <input
                                        placeholder='E-mail address'
                                        type="text"
                                        ref={(emailId) => this.emailId = emailId}
                                    />
                                    <i aria-hidden="true" className="user icon"></i>
                                    <Label pointing='left'>That name is taken!</Label>
                                </div>
                                
                            </Form.Field>
                            <Form.Field>
                                <div className="ui left icon input">
                                    <input
                                        placeholder='Password'
                                        type="text"
                                        ref={(password) => this.password = password}
                                    />
                                    <i aria-hidden="true" className="lock icon"></i>
                                    <Label pointing='left'>That name is taken!</Label>
                                </div>
                                
                            </Form.Field>
                            <Form.Field>
                                <div className="ui left icon input">
                                    <input
                                        placeholder='Confirm password'
                                        type="text"
                                        ref={(confirmPassword) => this.confirmPassword = confirmPassword}
                                    />
                                    <i aria-hidden="true" className="lock icon"></i>
                                    <Label pointing='left'>That name is taken!</Label>
                                </div>
                               
                            </Form.Field>
                            <Button color='teal' fluid size='large' onClick={this.handleSignUpSubmit}>Sign Up</Button>
                        </Segment>
                    </Form>
                    <Message>
                        You are Registered? Continue to  <a href='#' onClick={this.handleClick}>Login</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default RegisterBox
