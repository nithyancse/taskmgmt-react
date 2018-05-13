import React, { Component } from 'react';
import { Icon, Header } from 'semantic-ui-react'


class LogoBar extends Component {
    render() {
        return (
            <div className="logoBar" >
                <Header as='h2'   >
                    <Icon.Group size='big'>
                        <Icon name='tasks' style ={{color : '#4eb648'}}/>
                    </Icon.Group>
                    <span className="black">Task Managment</span>
                </Header>
            </div>
        )
    }
}

export default LogoBar
