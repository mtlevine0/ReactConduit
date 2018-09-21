
const initialState = {
    article: {
        author: {}
    },
    isGetArticleLoading: false,
    isGetArtilcleFailed: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "GET_ARTICLE_STARTED":
            return {
                ...state,
                isGetArticleLoading: action.isLoading
            };
        case "GET_ARTICLE_FAILED":
            return {
                ...state,
                isGetArticleLoading: false,
                isGetArtilcleFailed: action.hasErroed
            };
        case "GET_ARTICLE_SUCCESS":
            return {
                ...state,
                isGetArticleLoading: false,
                isGetArtilcleFailed: false,
                article: action.article
            }
        default:
            return state;
    }
}
