import React, { Component } from 'react';
import { Icon, Header, Grid } from 'semantic-ui-react'


class LoginError extends Component {
    render() {
        return (
            <Grid className='loginError' >
                <Grid.Row color='red' textAlign='center'  >
                    <Grid.Column>
                        Incorrect Username and Password !!!
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default LoginError
