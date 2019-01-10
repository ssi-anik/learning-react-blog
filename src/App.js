import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ArticlesContainer from "./containers/ArticlesContainers";
import { Container } from "semantic-ui-react";

class App extends Component {
    render () {
        return (
            <Container>
                <Switch>
                    <Route path = '/' component = {ArticlesContainer}></Route>
                </Switch>
            </Container>
        );
    }
}

export default App;
