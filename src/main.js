import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KandyKorner from './KandyKorner';
import NavBar from "./nav/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"


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