import axios from 'axios'
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import { Input, Icon } from 'semantic-ui-react'
import LogoBar from '../Layout/LogoBar'

@inject(['store'])
@observer
class AddNamePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pageToRedirect: "",
            errorMsg: "",
        }
    }

    handleNameSubmit(e) {
        let name = this.state.name;
        if (!name) {
            this.inputRef.focus();
            return false;
        }
        var params = new URLSearchParams();
        params.append('id', this.props.store.home.user.id);
        params.append('name', name);

        axios.post('/addName', params)
            .then(response => {
                //console.log(response);
                if (response.status == 201) {
                    this.props.store.home.setUserName(name);
                    this.setState({
                        pageToRedirect: "addCompanyPage"
                    });
                }
            })
            .catch(error => {
                console.log(error.response);
                if (error.response.status == 400) {
                    this.setState({
                        errorMsg: error.response.data.message
                    });
                }
                if (error.response.status == 400 || error.response.status == 404 || error.response.status == 500) {
                    this.props.handleMessage(error.response.data.message, "red");
                }
            });
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

        if (this.state.pageToRedirect === "addCompanyPage") {
            return <Redirect to="/addCompany" />;
        }

        const errorMsg = this.state.errorMsg;

        return (
            <div>
                <LogoBar />
                <Input ref={this.handleRef} placeholder='Your Name' size='large' onChange={this.handleMessage} />
                <span className="padLR7" ><Icon name='arrow right' inverted circular link onClick={this.handleNameSubmit.bind(this)} size="large" /></span>
                {errorMsg.length > 0 && <span style={{ color: "red" }}>{this.state.errorMsg}</span>}
            </div>
        )
    }
}

export default AddNamePage