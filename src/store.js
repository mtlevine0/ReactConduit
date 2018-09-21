import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.log("["+action.type+"] Dispatching", action);
    const result = next(action);
    console.log("["+action.type+"] Next State", store.getState());
    return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store  = createStore(reducer, composeEnhancers(applyMiddleware(thunk,logger)));

export default store;
