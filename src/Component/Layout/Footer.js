import React, { Component } from 'react';
import { Image, Header, Grid, Icon, Button, Segment, Menu, Dropdown, Label, Container, List } from 'semantic-ui-react'
import { Redirect } from 'react-router'

const Footer = () =>
    (
        <div>
            <Segment inverted vertical >
                <Container>
                    <Grid divided inverted className="footer" >
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header inverted as='h4' content='About' />
                                <List link inverted>
                                    <List.Item as='a'>Sitemap</List.Item>
                                    <List.Item as='a'>Contact Us</List.Item>
                                    <List.Item as='a'>Religious Ceremonies</List.Item>
                                    <List.Item as='a'>Gazebo Plans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header inverted as='h4' content='Services' />
                                <List link inverted>
                                    <List.Item as='a'>Banana Pre-Order</List.Item>
                                    <List.Item as='a'>DNA FAQ</List.Item>
                                    <List.Item as='a'>How To Access</List.Item>
                                    <List.Item as='a'>Favorite X-Men</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <Header inverted as='h4' content='Task Management' />
                                <List link inverted>
                                    <List.Item >All Rights Reserved © taskmgmt.com</List.Item>
                                    <List.Item >Contact us at support©taskmgmt.com</List.Item>
                                    <List.Item >Done by <a href="#"> Nithyanandam Thangamuthu </a> </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    )

export default Footer

