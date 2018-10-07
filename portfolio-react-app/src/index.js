import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {sagaReducer} from './sagas/saga.js';
import {loremIpsum,cursor} from './components/reducers/reducer.js';
const reducer=combineReducers({lorem:loremIpsum,cursor:cursor});
const sagaMiddleware=createSagaMiddleware();
const store=createStore(reducer,applyMiddleware(sagaMiddleware));
//sagaMiddleware.run(sagaReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
