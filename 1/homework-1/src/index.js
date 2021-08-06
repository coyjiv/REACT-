import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const initialState = {
    card:{
        isFavourite:[],
        isInCart:[],
    },
    cards:{
        data:[],
        isLoading:true,
    },
    isModalOpen:false
}
const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case "SET_FAVOURITE":{
            return {...state, card:{...state.card, isFavourite: action.data}}
        }
        case "ADD_TO_CART":{
            return {...state, card:{...state.card, isInCart: action.data}}
        }
        case "SET_ALL_CARDS": {
            return {...state, cards: {...state.cards, data: action.data}}
        }
        case "CARDS_ARE_LOADING": {
            return {...state, cards: {...state.cards, isLoading:action.data}}
        }
    }
    return state
}
const store = createStore(reducer, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
    <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
