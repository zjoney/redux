import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import Mysaga from './sagas';
import Reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
let middlewares = []
middlewares.push(sagaMiddleware)

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(Reducers);

sagaMiddleware.run(Mysaga)

let render=()=>{
  ReactDOM.render(
     <App 
      onIncrement={()=>(store.dispatch({type: 'increment'}))}
      onDecrement={()=>(store.dispatch({type: 'decrement'}))}
      onIncrementAsync={()=>(store.dispatch({type: 'increment-async'}))}
      value= {store.getState()}
     />, 
     document.getElementById('root'));
}
render();
store.subscribe(render);

