import React, { Component } from 'react'
import CandyItem from "./CandyItem"

export default class CandyList extends Component {

    render() {
        return(
            <React.Fragment>
            <div className="animalButton">
                <button type="button"
                        className="btn btn-info"
                        onClick={() => {
                            this.props.history.push("/new")}
                        }>
                    + New Candy
                </button>
            </div>
            <section className="candy-list">
                <h1>CANDY!</h1>
                <h4>Here's what we have in stock:</h4>
            {
                this.props.candies.map(candy =>
                    <div key={candy.id}>
                        <CandyItem candy={candy}
                        deleteOneCandy={this.deleteOneCandy} />
                        {/* of type
                        {
                            this.props.types
                                .find(t => t.id === candy.typeId)
                                .name
                        } */}
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}
