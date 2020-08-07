import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Comments} from './Reducer';
import logger from 'redux-logger';
export const ConfigureStore = () =>{
    const store = createStore(combineReducers({
        comments : Comments
        }),
        applyMiddleware(logger)   
    );
    return store;
}