import React from 'react';
import { render } from 'react-dom';
import './styles.scss';
import { App } from './components/App';
import * as serviceWorker from './serviceWorker';


render(<App />, document.getElementById('root'));


serviceWorker.unregister();
