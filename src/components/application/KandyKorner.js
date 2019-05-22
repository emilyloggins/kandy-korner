import React, { Component } from 'react'

export default class KandyKorner extends Component {
   
    storesFromAPI = [
        {
            id: 1,
            name: "Walmart",
        },
        {
            id: 2,
            name: "Dollar General",
        },
        {
            id: 3,
            name: "Cracker Barrel",
        }
    ]
    employeesFromAPI = [
        {
            id: 1,
            name: "Emily Loggins"
        },
        {
            id: 2,
            name: "Kendal Miller"
        },
        {
            id: 3,
            name: "Caroline Mohler"
        },
        {
            id: 4,
            name: "Mabel Mohler"
        }
    ]
    candyTypesFromAPI = [
        {
            id: 1,
            name: "yummy"
        },
        {
            id: 2,
            name: "gummy"
        },
        {
            id: 3,
            name: "fruity"
        },
        {
            id: 4,
            name: "tootie"
        }
    ]
    candiesFromAPI = [
        {
            id: 1,
            typeId: 2,
            name: "Laffy Taffy"
        },
        {
            id: 2,
            typeId: 4,
            name: "tootsie roll"
        }
    ]

    state = {
        stores: this.storesFromAPI,
        employees: this.employeesFromAPI,
        candyTypes: this.candyTypesFromAPI,
        candies: this.candiesFromAPI
    }

    render() {
        
    }
}