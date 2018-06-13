import axios from 'axios'
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Divider, Label, Input } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { observer, inject } from 'mobx-react';
import { isValidEmailId } from '../../../Util/ValidationUtil'
import constValid from '../../../Constant/Validation'
import RedirectTo from '../../../Constant/RedirectTo'

@inject(['store'])
@observer
class NameBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pageToRedirect: "",
            errorMsg: "",
        }
    }

    handleNameSubmit(e) {
        let httpStatus = "", errorMsg = "";
        let name = this.state.name;
        let arrowButton = document.getElementById("arrowButton");
        if (!name || name.length > 100) {
            this.inputRef.focus();
            return false;
        } else {
            arrowButton.classList.add("loading");
            e.preventDefault();
        }
        var params = new URLSearchParams();
        params.append('id', this.props.store.home.user.id);
        params.append('name', name);

        axios.post('/addName', params)
            .then(response => {
                if (response.status == 201) {
                    this.props.store.home.setUserName(name);
                    this.setState({
                        pageToRedirect: RedirectTo.ADD_COMPANY
                    });
                }
            })
            .catch(error => {
                httpStatus = (error.response.status).toString();
                errorMsg = httpStatus.startsWith("5") ? constError.RESPONSE_ERROR_MSG : constError.REQUEST_ERROR_MSG;
                this.setState({ errorMsg: errorMsg });
            });

        arrowButton.classList.add("loading");
    }

    handleMessage = e => {
        this.setState({
            name: e.target.value
        });
    }

    handleRef = (c) => {
        this.inputRef = c
    }
    render() {

        switch (this.state.pageToRedirect) {
            case RedirectTo.ADD_COMPANY:
                return <Redirect to={RedirectTo.ADD_COMPANY} />;
                break;
        }

        const errorMsg = this.state.errorMsg;

        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h1'>Add Name Page</Header>
                            <Header as='h3'>Manage your workload, communicate with your team and celebrate success</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                        <Grid.Column width={10}>
                            <Input fluid ref={this.handleRef} placeholder='Your Name' size='large' onChange={this.handleMessage} />
                            {errorMsg.length > 0 && <Error message={this.state.errorMsg} />}
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Button id="arrowButton" circular color='green' size="large" icon='arrow right' onClick={this.handleNameSubmit.bind(this)} />
                        </Grid.Column>
                        <Grid.Column width={4}>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h4'>
                                Manage your workload, communicate with your team and celebrate success
                                Manage your workload, communicate with your team and celebrate success
                                Manage your workload, communicate with your team and celebrate success
                                Manage your workload, communicate with your team and celebrate success
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default NameBox