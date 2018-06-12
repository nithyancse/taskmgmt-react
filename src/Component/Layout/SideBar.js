import React, { Component } from 'react';
import { Image, Dropdown, Icon, Input, Menu } from 'semantic-ui-react'


class SideBar extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { activeItem } = this.state

    return (
      <div className="sideBar" >
        <Menu inverted vertical className= "borderRadius0" >
          <Menu.Item>
            Home
          <Menu.Menu>
              <Menu.Item
                name='search'
                active={activeItem === 'search'}
                onClick={this.handleItemClick}
              >
                Search
            </Menu.Item>
              <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
                Add
            </Menu.Item>
              <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                Remove
            </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
            <Icon name='grid layout' />
            Browse
          </Menu.Item>

          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}>
          Messages
          </Menu.Item>

          <Dropdown item text='More'>
            <Dropdown.Menu>
              <Dropdown.Item icon='edit' text='Edit Profile' />
              <Dropdown.Item icon='globe' text='Choose Language' />
              <Dropdown.Item icon='settings' text='Account Settings' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    )
  }
}

export default SideBar