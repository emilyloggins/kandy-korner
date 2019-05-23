import React, { Component } from 'react'

export default class CandyItem extends Component {
    render() {
        return(
            <article>
                <p>{this.props.candy.name}</p>
            </article>
        )
    }
}