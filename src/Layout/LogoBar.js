import React, { Component } from 'react';
import { Icon, Header, Image } from 'semantic-ui-react'


class LogoBar extends Component {
    render() {
        return (
            <div className="logoBar" >
                    <Image src="./images/taskMgmtLogo.png" size='tiny' verticalAlign='middle'  />
                    <span className="ui header title">Task Management</span>
            </div>
        )
    }
}

export default LogoBar
