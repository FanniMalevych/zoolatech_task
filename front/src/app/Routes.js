import React from "react";
import {Route, Switch} from 'react-router-dom'

import Search from "../client/components/Search";
import Home from "../client/components/Home";

export const Routes = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/search">
                    <Search />
                </Route>
            </Switch>
        </div>
    )
}