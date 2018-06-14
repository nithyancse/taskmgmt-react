import React from 'react';
import { Image, Grid, Icon, Button, Segment, Menu, Dropdown, Label, Container, List } from 'semantic-ui-react'
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar'

const Layout = props => ({
  render() {
    return (
      <div className="o-container">
        <Header />
        {location.pathname.indexOf("home") == -1 && <main>{props.children}</main>}
        {location.pathname.indexOf("home") >= 0 &&
          <div>
            <div className="computer">
              <Grid>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <SideBar />
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <Container className="contain" >
                      <main>{props.children}</main>
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <div className="mobile">
              <SideBar />
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column >
                    <Container className="contain" >
                      <main>{props.children}</main>
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        }
        {location.pathname.indexOf("home") == -1 &&  <Footer />  }
        {location.pathname.indexOf("home") >= 0 &&
        <div className="computer"> {/*Footer not available for mobile After login*/}
            <Footer /> 
        </div>
        }

      </div>
    );
  }
});

export default Layout;