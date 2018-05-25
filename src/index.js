import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskChuteContainer from './container/TaskChuteContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TaskChuteContainer />, document.getElementById('root'));
registerServiceWorker();
