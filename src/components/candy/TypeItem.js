import React, { Component } from 'react'


export default class extends Component {
    render() {
        return(
            <p className="muted">{this.props.type.name}</p>
        )
    }
}