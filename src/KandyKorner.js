import React, { Component } from 'react'
import StoreList from './components/store/StoreList'
import EmployeeList from './components/employee/EmployeeList'
import CandyList from './components/candy/CandyList'
import CandyManager from './components/candy/CandyManager';
import CandyTypeManager from './components/candy/CandyTypeManager'

export default class KandyKorner extends Component {
   
    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    deleteOneCandy = (id) => {
        const newState = {};
        CandyManager.deleteOne(id)
        .then(CandyManager.getAll)
        .then(candy => {
            console.log("candies:", candy, this);
            newState.candies = candy})
        .then(() => {
            this.setState(newState)
        })
    }


    componentDidMount(){
        console.log("APPVIEWS componentDidMount");
        const newState = {};
        CandyManager.getAll()
            .then(candy => {
                console.log("candies:", candy);
                newState.candies = candy})
            .then(() => {
                this.setState(newState)
            })
            CandyTypeManager.getAll()
            .then(type => {
                console.log("types:", type);
                newState.candyTypes = type})
            .then(() => {
                this.setState(newState)
            })
    }

    render() {
        return(
            <React.Fragment>
                <StoreList stores={this.state.stores} />
               
                <EmployeeList employees={this.state.employees} />
              
                <Route exact path="/" render={(props) => {
                return <CandyList candies={this.state.candies}
                            types={this.state.candyTypes}
                            deleteOneCandy={this.deleteOneCandy} />
                        }} />
                <Route path="/new" render={(props) => {
                return <CandyForm {...props}
                addAnimal={this.addCandy} />
}} />
            </React.Fragment>
        )
    }
}