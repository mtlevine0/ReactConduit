
const initialState = {
    articles: [],
    isAddArticleListLoading: false,
    isAddArtcleListFailed: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "ADD_ARTCLE_LIST_STARTED":
            return {
                ...state,
                isAddArticleListLoading: action.isLoading
            };
        case "ADD_ARTICLE_LIST_FAILED":
            return {
                ...state,
                isAddArticleListLoading: false,
                isAddArtcleListFailed: action.hasErroed
            };
        case "ARTICLE_LIST_SUCCESS":
            return {
                ...state,
                isAddArticleListLoading: false,
                isAddArtcleListFailed: false,
                articles: action.articles
            }
        default:
            return state;
    }
}
