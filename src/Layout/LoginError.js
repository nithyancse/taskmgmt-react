import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'


class LoginError extends Component {
    render() {
        return (
            <Button negative>{this.props.errorMsg}</Button>
        )
    }
}

export default LoginError
