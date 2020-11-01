import React from 'react';
import {useHistory} from "react-router-dom";
import './Home.scss'

const Home = () => {

    const history = useHistory();

    const routeChange = () => {
        const path = `search`;
        history.push(path);
    }

    return (

        <a href="#" className="btn primary" onClick={routeChange}>
            <span>Search</span>
        </a>

    );
}
export default Home;