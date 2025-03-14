import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import App from './src/App';
import { persistor, store } from './src/redux/store';

import './index.css';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter basename="/node_frontend_bc_56_IrynaDidkivska/">
        <App />
        <ToastContainer autoClose={1800} />
      </BrowserRouter>
    </Provider>
  </PersistGate>
);
