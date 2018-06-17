import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/mainReducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);
const theme = createMuiTheme();
ReactDOM.render(
    <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
    </Provider>
    ,document.getElementById('root')
);
registerServiceWorker();
