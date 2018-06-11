import axios from 'axios'
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import { Segment, Divider, Grid, Container, Button, Image, Input, Icon, } from 'semantic-ui-react'
import constError from '../../../Constant/Error'
import Error from '../../Util/Message/Error'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'
import CompanyBox from '../../Layout/NameCompany/CompanyBox';

class CompanyPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container className="contain" >
                    <Grid columns='equal'>
                        <Grid.Row only='computer tablet' >
                            <Grid.Column >
                                <CompanyBox />
                            </Grid.Column>
                            <Grid.Column>
                                <Image size='large' src="public/images/responsive2.jpg" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row only='mobile' width={16}>
                            <Grid.Column>
                                <CompanyBox />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default CompanyPage