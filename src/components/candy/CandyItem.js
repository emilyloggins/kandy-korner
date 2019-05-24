import React, { Component } from 'react'
import TypeItem from './TypeItem'
import img from "./candy.png"
import "./candy.css"
import "bootstrap/dist/css/bootstrap.min.css"


export default class CandyItem extends Component {

    handleClick = (event) => {
        console.log("click", event, this.props.candy.id);
        this.props.deleteOneCandy(this.props.candy.id);
    }

    render() {
        return(
            <div className="card">
                <div class="card-body">
                    <img className="candy-img" src={img} alt="candy" />
                    <h5 className="card-title">{this.props.candy.name}</h5>
                    <button type="button" className="btn btn-info" onClick={this.handleClick}>Delete</button>
                </div>
            </div>
        )
    }
}