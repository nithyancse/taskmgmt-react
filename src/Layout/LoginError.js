import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'


class LoginError extends Component {
    render() {
        return (
            <Grid className='loginError' >
                <Grid.Row color='red' textAlign='center'  >
                    <Grid.Column>
                    {this.props.errorMsg}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default LoginError
