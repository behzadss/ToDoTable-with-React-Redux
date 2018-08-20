import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger({ diff: true });

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;
