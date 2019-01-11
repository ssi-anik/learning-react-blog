import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllArticles, getTaggedAllArticles } from "../actions/articles_action";
import { ArticlesComponent } from "../components/ArticlesComponent";

class ArticlesContainer extends Component {

    componentWillMount () {
        let tag = this.props.match.params.tag;
        console.log(tag);
        if ( tag ) {
            let { getTaggedAllArticles } = this.props;
            getTaggedAllArticles(tag);
        } else {
            let { getAllArticles } = this.props;
            getAllArticles();
        }
    }

    render () {
        let { articles, pagination } = this.props;
        return (<ArticlesComponent articles = {articles} pagination = {pagination} />)
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
        getAllArticles,
        getTaggedAllArticles
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)