import React from 'react'
import { Button, Icon, List, Grid } from 'semantic-ui-react'

const LoginFBTG = () => (
  <div className='facebookBox'>
    <Grid columns='equal' >
      <Grid.Row>
        <Grid.Column width={3}>
        </Grid.Column>
        <Grid.Column width={10} only='computer tablet'>
          <Button.Group vertical labeled >
            <div>
              <Button color='facebook' >
                <Icon name='facebook' /> Facebook
              </Button>
            </div>
            <br />
            <div>
              <Button color='twitter' >
                <Icon name='twitter' /> Twitter
              </Button>
            </div>
            <br />
            <div>
              <Button style={{ color: '#fff', backgroundColor: '#444' }}>
                <Icon name='github' /> GitHub
              </Button>
            </div>
          </Button.Group>
        </Grid.Column>
        <Grid.Column width={3} only='computer tablet'>
        </Grid.Column>
      </Grid.Row >
    </Grid >
  </div >
)

export default LoginFBTG