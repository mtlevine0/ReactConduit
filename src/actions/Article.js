export const articleHasErrored = (bool) => {
    return {
        type: "GET_ARTICLE_FAILED",
        hasErrored: bool
    }
}

export const articleIsLoading = (bool) => {
    return {
        type: "GET_ARTICLE_STARTED",
        idLoading: bool
    }
}

export const articleHasLoaded = (article) => {
    return {
        type: "GET_ARTICLE_SUCCESS",
        article
    }
}

export const articleLoadData = (slug) => {
    return(dispatch) => {
        dispatch(articleIsLoading(true));
        fetch("https://conduit.productionready.io/api/articles/" + slug)
        .then(response => {
            if(!response.ok) throw Error(response.body);
                return response;
            })
        .then(response => response.json())
        .then(data => {
            dispatch(articleHasLoaded(data.article));
        })
        .catch(error => {
            console.log(error);
            dispatch(articleHasErrored(true));
            setTimeout(() => {
                dispatch(articleHasErrored(false));
            }, 5000);
        });
    }
}