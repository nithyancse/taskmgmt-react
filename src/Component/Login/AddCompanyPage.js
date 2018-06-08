import axios from 'axios'
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import { Input, Icon } from 'semantic-ui-react'
import LogoBar from '../Layout/LogoBar'

@inject(['store'])
@observer
class AddCompanyPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pageToRedirect: "",
            errorMsg: "",
            file: null,
        }
    }

    handleCompanySubmit(e) {
        let name = this.state.name;
        let logo = this.state.file;
        const formData = new FormData();
        if(logo != null){
            formData.append('logo', logo);
        }
        
        formData.append('name', name);
        formData.append('created_by', this.props.store.home.user.id);
        formData.append('updated_by', this.props.store.home.user.id);

        axios.post("/addCompany", formData)
            .then(response => {
                //console.log(response);
                this.props.store.home.setCompany(response.data.company);
                this.setState({
                    pageToRedirect: "home"
                });
            })
            .catch(error => {
                console.log(error.response);
                if (error.response.status == 400) {
                    this.setState({
                        errorMsg: error.response.data.message
                    });
                }
                if (error.response.status == 400 || error.response.status == 404 || error.response.status == 500) {
                    //this.props.handleMessage(error.response.data.message, "red");
                }
            });
    }

    handleMessage = e => {
        this.setState({
            name: e.target.value
        });
    }

    handleFile = e => {
        this.setState({ file: e.target.files[0] })
    }

    render() {

        if (this.state.pageToRedirect === "home") {
            return <Redirect to="/home" />;
        }

        const errorMsg = this.state.errorMsg;

        return (
            <div>
                <LogoBar />
                <Input ref={this.handleRef} placeholder='Company Name' size='large' onChange={this.handleMessage} />
                {errorMsg.length > 0 && <span style={{ color: "red" }}>{this.state.errorMsg}</span>}

                <div className="ui left icon input">
                    <input
                        placeholder='Password'
                        type="file"
                        onChange={this.handleFile}
                    />

                </div>


                <span className="padLR7" ><Icon name='arrow right' inverted circular link onClick={this.handleCompanySubmit.bind(this)} size="large" /></span>
            </div>
        )
    }
}

export default AddCompanyPage