import React, { Component } from 'react';
import { Segment, Message } from 'semantic-ui-react'

class CenterSegment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "red",  // by default color
        }
    }

    render() {
        return (
            <div className="textaligncenter">
                <Segment inverted color={this.props.color}>{this.props.message}</Segment>
            </div>
        )
    }
}

export default CenterSegment
