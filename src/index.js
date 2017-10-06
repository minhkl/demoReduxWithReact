import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AppWrapper from './AppWrapper'

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
    <Provider store={store}>
        <AppWrapper/>
    </Provider>,
    document.getElementById('root'))