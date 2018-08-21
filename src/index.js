import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';

ReactDOM.render(
<Provider store={store}>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
<App />
</MuiPickersUtilsProvider>
</Provider>, 
document.getElementById('root'));
