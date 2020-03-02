import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { createStore } from "redux";
import { Provider} from "react-redux";
import count_reducer from './Redux/Reducers/reducers';

const store = createStore(count_reducer);
ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById("root"));
