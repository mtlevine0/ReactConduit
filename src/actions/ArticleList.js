export const articleListHasErroed = (bool) => {
    return {
        type: "ADD_ARTICLE_LIST_FAILED",
        hasErrored: bool
    }
}

export const articleListIsLoading = (bool) => {
    return {
        type: "ADD_ARTCLE_LIST_STARTED",
        idLoading: bool
    }
}

export const articleListHasLoaded = (articles) => {
    return {
        type: "ARTICLE_LIST_SUCCESS",
        articles
    }
}

export const articleListLoadData = () => {
    return(dispatch) => {
        dispatch(articleListIsLoading(true));
        fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
        .then(response => {
            if(!response.ok) throw Error(response.body);
                return response;
            })
        .then(response => response.json())
        .then(data => {
            dispatch(articleListHasLoaded(data));
        })
        .catch(error => {
            console.log(error);
            dispatch(articleListHasErroed(true));
            setTimeout(() => {
                dispatch(articleListHasErroed(false));
            }, 5000);
        });
    }
}