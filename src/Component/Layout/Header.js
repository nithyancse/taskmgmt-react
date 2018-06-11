import React, { Component } from 'react';
import { Image, Header, Grid, Icon, Button, Segment, Menu, Dropdown, Label, Container } from 'semantic-ui-react'
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import Common from '../../Constant/Common'
import RedirectTo from '../../Constant/RedirectTo'

@inject(['store'])
@observer
class LogoBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageToRedirect: "",
        }
    }

    handleLoginClick = () => {
        this.setState({
            pageToRedirect: RedirectTo.LOGIN,
        });
    }

    handleSignUpClick = () => {
        this.setState({
            pageToRedirect: RedirectTo.SIGNUP,
        });
    }

    handleHomeClick = () => {
        this.setState({
            pageToRedirect: RedirectTo.LOGOUT,
        });
    }

    handleLogout = () => {
        this.props.store.home.isLoggedIn = Common.NO;
        this.setState({
            pageToRedirect: RedirectTo.LOGOUT,
        });
    }

    render() {
        if (this.state.pageToRedirect == RedirectTo.LOGIN) {
            return <Redirect to={RedirectTo.LOGIN} />;
        }
        if (this.state.pageToRedirect == RedirectTo.SIGNUP) {
            return <Redirect to={RedirectTo.SIGNUP} />;
        }
        if (this.state.pageToRedirect == RedirectTo.LOGOUT) {
            return <Redirect to={RedirectTo.LOGOUT} />;
        }

        const { activeItem } = this.state
        const isLoggedIn = this.props.store.home.isLoggedIn;
        const name = this.props.store.home.user.name;

        return (
            <div>
                <Grid >
                    <Grid.Row only='computer tablet' >
                        <Menu fixed='top' inverted >
                            <Menu.Item as='a' header onClick={this.handleHomeClick}>
                                <Image className="tasklogo" size='mini' src="public/images/taskMgmtLogo.png" />
                                <span className="tasktitle" >Task Management</span>
                            </Menu.Item>
                            {/*<Menu.Item as='a'>Home</Menu.Item>*/}
                            {isLoggedIn == "No" &&
                                <Menu.Menu position='right'>
                                    <Menu.Item>
                                        <Button color='green' onClick={this.handleLoginClick}>Login</Button>
                                    </Menu.Item>
                                    <Menu.Item >
                                        <Button color='green' onClick={this.handleSignUpClick}>Sign Up</Button>
                                    </Menu.Item>
                                </Menu.Menu>
                            }
                            {isLoggedIn == "Yes" &&
                                <Menu.Menu position='right'>
                                    <Dropdown item simple text={name} direction='right' >
                                        <Dropdown.Menu>
                                            <Dropdown.Item icon='edit' text='Edit Profile' />
                                            <Dropdown.Item icon='settings' text='Settings' />
                                            <Dropdown.Item icon='log out' text='Logout' onClick={this.handleLogout} />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Menu.Menu>
                            }
                        </Menu>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row only='mobile' >
                        <Menu size="tiny" fixed='top' inverted >
                            <Menu.Item as='a' header>
                                <Image className="tasklogo" size='mini' src="public/images/taskMgmtLogo.png" />
                                <span className="tasktitle" >Task Management</span>
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default LogoBar
