import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

class LoginBox extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    }

    handleClick() {
        this.props.onClick();
    }

    handleLoginSubmit(e) {
        this.props.handleLoginSubmit(this.emailId.value, this.password.value, )
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
                                <Form.Field>
                                    <div className="ui left icon input">
                                        <input
                                            placeholder='E-mail address'
                                            type="text"
                                            ref={(emailId) => this.emailId = emailId}
                                        />
                                        <i aria-hidden="true" className="user icon"></i>
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
                                    </div>
                                </Form.Field>
                                <Button color='teal' fluid size='large' onClick={this.handleLoginSubmit}>Login</Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us?  <a href='#' onClick={this.handleClick}>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
                <Grid columns='equal'>
                    <Grid.Row >
                        <Grid.Column width={3} only='mobile'>
                        </Grid.Column>
                        <Grid.Column  width={10} only='mobile'>
                            <Button circular color='facebook' icon='facebook' />
                            <Button circular color='twitter' icon='twitter' />
                            <Button circular  icon='github' style={{ color: '#fff', backgroundColor: '#444' }} />
                        </Grid.Column>
                        <Grid.Column width={3} only='mobile'>
                        </Grid.Column>
                    </Grid.Row >
                </Grid >
            </div>
        )
    }
}

export default LoginBox