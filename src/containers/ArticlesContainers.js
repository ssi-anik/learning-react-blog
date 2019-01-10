import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllArticles } from "../actions/articles_action";
import {ArticlesComponent} from "../components/ArticlesComponent";

class ArticlesContainer extends Component {

    componentWillMount () {
        let { getAllArticles } = this.props;
        getAllArticles();
    }

    render () {
        let { articles, pagination } = this.props;
        return (<ArticlesComponent articles = {articles} pagination={pagination} />)
    }
}

function mapStateToProps (state) {
    return {
        articles: state.articlesReducer.getIn(['articles']).toJS(),
        pagination: state.articlesReducer.getIn(['pagination']).toJS()
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        getAllArticles
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)