// ===== REDUX TUTORIAL =====
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import store from "./redux/store";
// import {Provider} from "react-redux";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Provider store={store}><App /></Provider>);


// ===== REDUX-TOOLKIT TUTORIAL
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from "./redux_toolkit/store";
import {Provider} from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);