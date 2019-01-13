import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllArticles } from "../actions/articles_action";
import { ArticlesComponent } from "../components/ArticlesComponent";
/*import { queryBuilder } from "../helpers";*/

class ArticlesContainer extends Component {
    constructor (props) {
        super(props);
        this.action = null;
        this.fetchType = 'all';
        this.data = '';
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
        this.changePageData = this.changePageData.bind(this);
    }

    changePageData (query = {}) {
        /*let params = queryBuilder(query);*/
        /*this.props.history.push({
         pathname: this.props.history.location.pathname,
         search: params.length > 0 ? `?${params}` : '',
         });*/

        switch ( this.fetchType ) {
            case 'tag':
                this.action(this.data, query);
                break;
            case '':
            case 'all':
            default:
                this.action(query)
        }
    }

    handlePreviousButtonClick (event) {
        if ( (this.props.pagination.current_page - 1) <= 0 ) {
            return;
        }

        let query = {
            page: this.props.pagination.current_page - 1
        }

        this.changePageData(query);
    }

    handleNextButtonClick (event) {
        event.preventDefault();
        let query = {
            page: this.props.pagination.current_page + 1
        }
        this.changePageData(query);
    }

    componentDidMount () {
        let tag = this.props.match.params.tag;
        if ( tag ) {
            let { getAllTaggedArticles } = this.props;
            this.action = getAllTaggedArticles;
            this.fetchType = 'tag';
            this.data = tag;
            getAllTaggedArticles(tag);
        } else {
            let { getAllArticles } = this.props;
            this.action = getAllArticles;
            getAllArticles();
        }
    }

    componentWillReceiveProps (nextProps) {
        console.log(this.props.match.params.tag && nextProps.match.params.tag === this.props.match.params.tag);
        if ( this.props.match.params.tag && nextProps.match.params.tag === this.props.match.params.tag ) {
            return;
        }
    }

    render () {
        let { articles, pagination } = this.props;
        return (
            <ArticlesComponent
                nextButtonClick = {this.handleNextButtonClick}
                previousButtonClick = {this.handlePreviousButtonClick}
                notFoundMessage = {'Sorry, could not find any article.'}
                articles = {articles}
                pagination = {pagination} />
        );
    }
}

function mapStateToProps (state) {
    return {
        articles: state.articlesReducer.getIn(['articles']).toJS(),
        pagination: state.articlesReducer.getIn(['pagination']).toJS()
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        getAllArticles
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)