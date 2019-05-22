import React, { Component } from 'react'
import StoreList from "./StoreList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"

export default class KandyKorner extends Component {
   
    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    render() {
        return(
            <>
                <StoreList />
                <EmployeeList />
                <CandyList />
            </>
        )
    }
}