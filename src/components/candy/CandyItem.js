import React, { Component } from 'react'
import TypeItem from './TypeItem'

export default class CandyItem extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.candy.id);
        this.props.deleteOneCandy(this.props.candy.id);
    }

    render() {
        return(
            <article>
                <p>{this.props.candy.name}</p>
                <p className="muted">{this.props.type.name}</p>
                <button onClick={this.handleClick}>Delete</button>
            </article>
        )
    }
}