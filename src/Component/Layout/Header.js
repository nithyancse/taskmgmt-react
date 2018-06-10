import React, { Component } from 'react';
import { Image, Header, Grid, Icon, Button, Segment, Menu, Dropdown, Label, Container } from 'semantic-ui-react'
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import Common from '../../Constant/Common'

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
            pageToRedirect: Common.LOGIN,
        });
    }

    handleSignUpClick = () => {
        this.setState({
            pageToRedirect: Common.SIGNUP,
        });
    }

    handleLogout = () => {
        this.props.store.home.isLoggedIn = Common.NO;
        this.setState({
            pageToRedirect: Common.LOGOUT,
        });
    }

    render() {
        if (this.state.pageToRedirect == Common.LOGIN) {
            return <Redirect to={Common.LOGIN} />;
        }
        if (this.state.pageToRedirect == Common.SIGNUP) {
            return <Redirect to={Common.SIGNUP} />;
        }
        if (this.state.pageToRedirect == Common.LOGOUT) {
            return <Redirect to={Common.LOGOUT} />;
        }

        const { activeItem } = this.state
        const isLoggedIn = this.props.store.home.isLoggedIn;
        const name = this.props.store.home.user.name;

        return (
            <div>
                <Grid >
                    <Grid.Row only='computer tablet' >
                        <Menu fixed='top' inverted >
                            <Menu.Item as='a' header>
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
                                            <Dropdown.Item icon='globe' text='Language' />
                                            <Dropdown.Item icon='settings' text='Settings' />
                                            <Dropdown.Item icon='settings' text='Logout' onClick={this.handleLogout} />
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
