import React, { Component } from "react"
import ReactDOM from 'react-dom';
import './index.css';
import KandyKorner from './KandyKorner';
import NavBar from "./components/NavBar"


class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <KandyKorner />
            </React.Fragment>
        )
    }
}

export default Main