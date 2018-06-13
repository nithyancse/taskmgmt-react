import React, { Component } from 'react';
import { Image, Header, Grid, Icon, Button, Segment, Menu, Dropdown, Label, Container } from 'semantic-ui-react'
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import Common from '../../Constant/Common'
import Config from '../../Constant/Config'
import RedirectTo from '../../Constant/RedirectTo'
import PropTypes  from 'prop-types'

@inject(['store'])
@observer
class LogoBar extends Component {

    static contextTypes = {
        router : PropTypes.object
    }

    constructor(props, context) {
        super(props, context);
    }

    handleClick(pageToRedirect) {
        if(RedirectTo.LOGOUT === pageToRedirect){
            //this.props.store.home.setIsLoggedIn(Common.NO);
            window.location.href= Config.HOME_URL; // on refresh will clear the mobx data
        } else {
            this.context.router.history.push(pageToRedirect);
        }
    }

    render() {

        const isLoggedIn = this.props.store.home.isLoggedIn;
        const name = this.props.store.home.user.name;

        return (
            <div>
                <div className="computer">
                    <Menu fluid inverted className="borderRadius0">
                        <Menu.Item as='a' header onClick={() => this.handleClick(RedirectTo.LOGOUT)}>
                            <Image className="tasklogo" size='mini' src="public/images/taskMgmtLogo.png" />
                            <span className="tasktitle" >Task Management</span>
                        </Menu.Item>
                        {/*<Menu.Item as='a'>Home</Menu.Item>*/}
                        {isLoggedIn == Common.NO &&
                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Link to={RedirectTo.LOGIN}>
                                        <Button color='green' >Login</Button>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to={RedirectTo.SIGNUP} >
                                        <Button color='green'> Sign Up </Button>
                                    </Link>
                                </Menu.Item>
                            </Menu.Menu>
                        }
                        {isLoggedIn == Common.YES &&
                            <Menu.Menu position='right'>
                                <Dropdown item simple text={name} direction='right' >
                                    <Dropdown.Menu>
                                        <Dropdown.Item icon='edit' text='Edit Profile' />
                                        <Dropdown.Item icon='settings' text='Settings' />
                                        <Dropdown.Item icon='log out' text='Logout' onClick={() => this.handleClick(RedirectTo.LOGOUT)} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Menu>
                        }
                    </Menu>
                </div>
                <div className="mobile">
                    <Menu size="tiny" fixed='top' inverted className="borderRadius0" >
                        <Menu.Item as='a' header>
                            <Image className="tasklogo" size='mini' src="public/images/taskMgmtLogo.png" />
                            <span className="tasktitle" >Task Management</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}

export default LogoBar
