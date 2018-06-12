import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import { Button, Form, Grid, Header, Message, Segment, Divider, Label, Container  } from 'semantic-ui-react'
import Header1 from '../Header'
import SideBar from '../../Layout/SideBar'

@inject(['store'])
@observer
class HomeMainPage extends Component {

    render() {
        return (
            <div>
               
                <div className="content"> Hi {this.props.store.home.user.name}, Welcome to Task Management Application !! </div>
               
                     
                
            </div>
        )
    }
}

export default HomeMainPage