export const GET_ALL_ARTICLES = 'get-all-articles';

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

export function getTaggedAllArticles (tag, query = {}) {
    return {
        type: GET_ALL_ARTICLES,
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