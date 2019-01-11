import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ArticlesContainer from "./containers/ArticlesContainers";
import { Container } from "semantic-ui-react";
import { NotFoundComponent } from "./components/NotFoundComponent";

class App extends Component {
    render () {
        return (
            <Container>
                <Switch>
                    <Route exact path = '/' component = {ArticlesContainer}></Route>
                    <Route exact path = '/tagged/:tag/article' component = { props =>
                        <ArticlesContainer {...props} />}></Route>
                    <Route component={NotFoundComponent}/>
                </Switch>
            </Container>
        );
    }
}

export default App;
