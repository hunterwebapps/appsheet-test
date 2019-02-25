import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import './index.css';

import App from './App';

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
