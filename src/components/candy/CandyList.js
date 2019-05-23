import React, { Component } from 'react'
import CandyItem from "./CandyItem"

export default class CandyList extends Component {
    render() {
        return(
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

            </section>
        )
    }
}