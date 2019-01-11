import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllArticles, getAllTaggedArticles } from "../actions/articles_action";
import { ArticlesComponent } from "../components/ArticlesComponent";

class ArticlesContainer extends Component {
    constructor (props) {
        super(props);
        this.fetchType = 'all';
        this.data = 'Article';
    }

    componentWillMount () {
        let tag = this.props.match.params.tag;
        if ( tag ) {
            let { getAllTaggedArticles } = this.props;
            this.fetchType = 'tag';
            this.data = tag;
            getAllTaggedArticles(tag);
        } else {
            let { getAllArticles } = this.props;
            getAllArticles();
        }
    }

    render () {
        let { articles, pagination } = this.props;
        return (
            <ArticlesComponent data = {this.data} fetchType = {this.fetchType} articles = {articles} pagination = {pagination} />
        );
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
        getAllTaggedArticles
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)