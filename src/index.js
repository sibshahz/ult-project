import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import GlobalStyles from './components/global-styles/global-styles.component';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >   
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter>
          <MantineProvider>
          <GlobalStyles />
          <ModalsProvider>
            <NotificationsProvider>
            
              <App />
            </NotificationsProvider>
          </ModalsProvider>
        </MantineProvider>
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
