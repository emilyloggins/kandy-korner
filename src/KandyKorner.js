import React, { Component } from 'react'
import StoreList from './components/store/StoreList'
import EmployeeList from './components/employee/EmployeeList'
import CandyList from './components/candy/CandyList'
import CandyManager from './components/candy/CandyManager';

export default class KandyKorner extends Component {

    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    deleteOneCandy(id) {
        const newState = {};
        CandyManager.deleteOne(id)
            .then(CandyManager.getAll)
            .then(candy => {
                console.log("candies:", candy);
                newState.candies = candy
            })
            .then(() => {
                this.setState(newState)
            })
    }


    componentDidMount() {
        console.log("APPVIEWS componentDidMount");
        const newState = {};
        CandyManager.getAll()
            .then(candy => {
                console.log("candies:", candy);
                newState.candies = candy
            })
            .then(() => {
                this.setState(newState)
            })
    }

    render() {
        return (
            <h1>
                🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩🎩
            </h1>
        )
    }
}