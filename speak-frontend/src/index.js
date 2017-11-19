import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { createRoutes } from './routes';
import registerServiceWorker from './registerServiceWorker';

const routes = createRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
registerServiceWorker();
