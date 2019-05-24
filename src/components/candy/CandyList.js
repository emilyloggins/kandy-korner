import React, { Component } from 'react'
import CandyItem from "./CandyItem"

export default class CandyList extends Component {
    render() {
        return(
            <React.Fragment>
            <div className="animalButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")}
                        }>
                    Admit Animal
                </button>
            </div>
            <section className="candy-list">
                <h1>CANDY!</h1>
                <h2>Here are all the <em>sweeeet</em> candies:</h2>
                    
                    {
                        this.props.candies.map((item) => {
                            console.log(item)
                            return <CandyItem key={item.id} candy={item}
                                        deleteOneCandy={this.props.deleteOneCandy} />
                        })
                    }
                    {
                        this.props.types.map((item) => {
                            return <CandyItem key={item.id} type={item} />
                        })
                    }

            </section>
            </React.Fragment>
        )
    }
}