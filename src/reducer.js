import { combineReducers } from 'redux';

import ArticleList from './reducers/ArticleList';
import Article from './reducers/Article';

export default combineReducers({
    ArticleList,
    Article
});