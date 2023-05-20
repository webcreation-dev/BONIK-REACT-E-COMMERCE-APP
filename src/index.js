import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//REDUX
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
    

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
