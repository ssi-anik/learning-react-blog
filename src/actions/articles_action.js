export const GET_ALL_ARTICLES = 'get-all-articles';
export const GET_ALL_TAGGED_ARTICLES = 'get-all-tagged-articles';

export function getAllArticles (query = {}) {
    return {
        type: GET_ALL_ARTICLES,
        payload: {
            request: {
                url: '/article',
                method: 'get',
                params: {
                    ...query
                }
            }
        }
    }
}

export function getAllTaggedArticles (tag, query = {}) {
    return {
        type: GET_ALL_TAGGED_ARTICLES,
        payload: {
            request: {
                url: `/tag/${tag}/article`,
                method: 'get',
                params: {
                    ...query
                }
            }
        }
    }
}