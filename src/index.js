// React是React的核心库
// ReactDOM是提供 DOM 相关的功能
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

// 加快react 运行速度的一个js文件
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
