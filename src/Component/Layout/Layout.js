import React from 'react';
import { Image,  Grid, Icon, Button, Segment, Menu, Dropdown, Label, Container, List } from 'semantic-ui-react'
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar'

const Layout = props => ({
  render() {
    return (
      <div className="o-container">      
        <Header />
        {location.pathname.indexOf("home") != -1 && <SideBar/>}
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }
});

export default Layout;