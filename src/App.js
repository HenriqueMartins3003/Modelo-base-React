/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Header />
                    <Routes />
                    <GlobalStyles />
                    <ToastContainer
                        autoClose={1000}
                        className="toast-container"
                    />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
