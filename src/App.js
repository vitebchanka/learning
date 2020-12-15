import React, {Component} from 'react';
import Main from './Main/Main'
import {Switch, Route, BrowserRouter} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Main} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
