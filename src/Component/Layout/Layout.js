import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar'

const Layout = props => ({
  render() {
    return (
      <div className="o-container">
        <Header />
        {location.pathname.indexOf("home") > 0 && <SideBar/>}
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }
});

export default Layout;