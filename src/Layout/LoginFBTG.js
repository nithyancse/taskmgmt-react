import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon, List } from 'semantic-ui-react'

const LoginFBTG = () => (
  <div className='facebookBox'>
    <List relaxed='very'>
      <List.Item>
        <Button color='facebook' style={{ width: '100%', textAlign: 'left' }}>
          <Icon name='facebook' /> Facebook
        </Button>
      </List.Item>
      <List.Item>
        <Button color='twitter' style={{ width: '100%', textAlign: 'left' }}>
          <Icon name='twitter' /> Twitter
        </Button>
      </List.Item>
      <List.Item>
        <Button style={{ color: '#fff', backgroundColor: '#444', width: '100%', textAlign: 'left' }}>
          <Icon name='github' /> GitHub
        </Button>
      </List.Item>
    </List>
  </div>
)

export default LoginFBTG