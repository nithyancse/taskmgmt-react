import axios from 'axios'
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Divider, Label, Input } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import { observer, inject } from 'mobx-react';
import { isValidEmailId } from '../../Util/ValidationUtil'
import constValid from '../../Constant/Validation'
import Common from '../../Constant/Common'

@inject(['store'])
@observer
class ContentAddName extends Component {

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
                        pageToRedirect: Common.ADD_COMPANY
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
            case Common.ADD_COMPANY:
                return <Redirect to={Common.ADD_COMPANY} />;
                break;
        }

        const errorMsg = this.state.errorMsg;

        return (
            <div>
                <Input ref={this.handleRef} placeholder='Your Name' size='large' onChange={this.handleMessage} />
                <span className="padLR7" >
                    <Button id="arrowButton" circular color='green' size="large" icon='arrow right' onClick={this.handleNameSubmit.bind(this)} />
                </span>
                {errorMsg.length > 0 && <Error message={this.state.errorMsg} />}
            </div>
        )
    }
}

export default ContentAddName