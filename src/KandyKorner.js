import React, { Component } from 'react'
import StoreList from './components/store/StoreList'
import EmployeeList from './components/employee/EmployeeList'
import CandyList from './components/candy/CandyList'

export default class KandyKorner extends Component {
   candiesAPI = 
    [
        {
            "id": 1,
            "typeId": 2,
            "name": "Laffy Taffy"
        },
        {
            "id": 2,
            "typeId": 4,
            "name": "tootsie roll"
        },
        {
            
        }
    ]
   
    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: this.candiesAPI
    }

    render() {
        return(
            <div>
                <StoreList stores={this.state.stores} />
                <EmployeeList employees={this.state.employees} />
                <CandyList candies={this.state.candies}
                            types={this.state.candyTypes}/>
            </div>
        )
    }
}