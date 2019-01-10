import { GET_ALL_ARTICLES } from "../actions/articles_action";
import { fromJS } from "immutable";

const defaultState = fromJS({
    articles: [],
    pagination: {
        current_page: 1,
        per_page: 20,
        total_in_page: 0,
        total_page: 0,
    }
})

export default function articles (state = defaultState, action) {
    switch ( action.type ) {
        case `${GET_ALL_ARTICLES}_SUCCESS`:
            return state.setIn([
                            'articles'
                        ], fromJS(action.payload.data.data.articles))
                        .setIn([
                            'pagination',
                            'current_page'
                        ], action.payload.data.data.paginate.current_page)
                        .setIn([
                            'pagination',
                            'per_page'
                        ], action.payload.data.data.paginate.per_page)
                        .setIn([
                            'pagination',
                            'total_in_page'
                        ], action.payload.data.data.paginate.total_in_page)
                        .setIn([
                            'pagination',
                            'total_page'
                        ], action.payload.data.data.paginate.total_page);
        default:
            return state;
    }
}