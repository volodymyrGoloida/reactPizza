import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import './scss/app.scss'

ReactDOM.render(
    // провайдер обертає всю пріложуху в логіку редаксу
    // <React.StrictMode>
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    //</React.StrictMode>
    document.getElementById('root')
)
