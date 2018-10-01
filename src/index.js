import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

 // import Clock from './Test';
//import Sum from './Sum';
 // import Login from './login';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// ReactDOM.render(<Clock name="venugopal" />, document.getElementById('test'));

//ReactDOM.render(<Sum />, document.getElementById('sum'));

 // ReactDOM.render(<Login />, document.getElementById('login'));

registerServiceWorker();
