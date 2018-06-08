import axios from 'axios'
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router'
import { Input, Icon } from 'semantic-ui-react'
import LogoBar from '../Layout/LogoBar'
import homeStore from '../Home/HomeStore';

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
        this.onChange = this.onChange.bind(this);

    }

    handleCompanySubmit(e) {
        let name = this.state.name;
        let file = this.state.file;

        alert(file);

        if (!name) {
            this.inputRef.focus();
            return false;
        }


        const formData = new FormData();
        formData.append('logo', file);
        formData.append('name', name);
        formData.append('created_by', homeStore.user.id);
        formData.append('updatedBy', homeStore.user.id);


        axios.post("/addCompany", formData)
            .then(response => {
                alert("success file");
                console.log(response);
                if (response.status == 201) {
                    homeStore.setName(name);
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
                    //this.props.handleMessage(error.response.data.message, "red");
                }
            });
    }

    handleMessage = e => {
        this.setState({
            name: e.target.value
        });
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }



    render() {



        const errorMsg = this.state.errorMsg;

        return (
            <div>
                <LogoBar />
                <Input ref={this.handleRef} placeholder='Company Name' size='large' onChange={this.handleMessage} />

                <div className="ui left icon input">
                    <input
                        placeholder='Password'
                        type="file"
                        onChange={this.onChange}
                    />

                </div>


                <span className="padLR7" ><Icon name='arrow right' inverted circular link onClick={this.handleCompanySubmit.bind(this)} size="large" /></span>
                {errorMsg.length > 0 && <span style={{ color: "red" }}>{this.state.errorMsg}</span>}
            </div>
        )
    }
}

export default AddCompanyPage