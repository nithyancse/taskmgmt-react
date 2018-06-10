import axios from 'axios'
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import { Input, Icon, Button, Container } from 'semantic-ui-react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import constError from '../../Constant/Error'
import Error from '../Util/Message/Error'
import Common from '../../Constant/Common'


@inject(['store'])
@observer
class ContentAddCompany extends Component {

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
        let httpStatus = "", errorMsg = "";
        let name = this.state.name;
        //let logo = this.state.file;
        let arrowButton = document.getElementById("arrowButton");
        if (!name || name.length > 200) {
            this.inputRef.focus();
            return false;
        } else {
            arrowButton.classList.add("loading");
            //e.preventDefault();
        }

        /*let status = this.validateLogo(logo);
        if(!status){
            alert("Image should be in the format of .png, .jpeg, .jpg, .bmp ");
            return false;
        }*/

        const formData = new FormData();
        //formData.append('logo', logo);
        formData.append('name', name);
        formData.append('userId', this.props.store.home.user.id);

        axios.post("/addCompany", formData)
            .then(response => {
                //console.log(response);
                this.props.store.home.setCompany(response.data.company);
                this.setState({
                    pageToRedirect: Common.HOME
                });
            })
            .catch(error => {
                console.log(error.response);
                httpStatus = (error.response.status).toString();
                errorMsg = httpStatus.startsWith("5") ? constError.RESPONSE_ERROR_MSG : constError.REQUEST_ERROR_MSG;
                this.setState({ errorMsg: errorMsg });
            });

        arrowButton.classList.add("loading"); // stop the loader
    }

    validateLogo(logo) {
        let status = false;
        let logoName = logo.name;
        var Extension = logoName.substring(logoName.lastIndexOf('.') + 1).toLowerCase();
        if (Extension === "png" || Extension === "bmp" || Extension === "jpeg" || Extension === "jpg") {
            status = true;
        }
        return status;
    }

    handleMessage = e => {
        this.setState({
            name: e.target.value
        });
    }

    handleFile = e => {
        this.setState({ file: e.target.files[0] })
    }

    handleRef = (c) => {
        this.inputRef = c
    }

    render() {

        switch (this.state.pageToRedirect) {
            case Common.HOME:
                return <Redirect to={Common.HOME} />;
                break;
        }

        const errorMsg = this.state.errorMsg;

        return (
            <div>
                <Input ref={this.handleRef} placeholder='Company Name' size='large' onChange={this.handleMessage} />
                {/*<div className="ui left icon input"> <input  placeholder='File' type="file" onChange={this.handleFile} /> </div>*/}
                <span className="padLR7" >
                    <Button id="arrowButton" circular color='green' size="large" icon='arrow right' onClick={this.handleCompanySubmit.bind(this)} />
                </span>
                {errorMsg.length > 0 && <Error message={this.state.errorMsg} />}
            </div>
        )
    }
}

export default ContentAddCompany