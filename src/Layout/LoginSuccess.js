import React, { Component } from 'react';
import { Grid, Message } from 'semantic-ui-react'


class LoginSuccess extends Component {
    render() {
        return (
            <div className="textaligncenter" ><Message>{this.props.message}</Message> </div>
        )
    }
}

export default LoginSuccess
