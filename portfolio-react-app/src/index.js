import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {sagaReducer} from './sagas/saga.js';
import {loremIpsum,cursor,keyDown} from './components/reducers/reducer.js';
import {TriangleReducer} from './components/reducers/TriangleReducer.js';
const reducer=combineReducers({lorem:loremIpsum,cursor:cursor,keyPressed:keyDown,Triangle:TriangleReducer});
const sagaMiddleware=createSagaMiddleware();
const store=createStore(reducer);
//sagaMiddleware.run(sagaReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
