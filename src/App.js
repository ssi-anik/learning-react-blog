import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ArticlesContainer from "./containers/ArticlesContainer";
import TaggedArticlesContainer from './containers/TaggedArticlesContainer'
import { Container } from "semantic-ui-react";
import { NotFoundComponent } from "./components/NotFoundComponent";

class App extends Component {
    render () {
        return (
            <Container>
                <Switch>
                    <Route exact path = '/' component = {ArticlesContainer}></Route>
                    <Route exact path = '/tagged/:tag/article' component = { props =>
                        <TaggedArticlesContainer {...props} />}></Route>
                    <Route component={NotFoundComponent}/>
                </Switch>
            </Container>
        );
    }
}

export default App;
