import React, { Component } from 'react';
import './assets/css/App.css';
// 引入组件
import Home from './components/Home';
import News from './components/News';
import Shop from './components/Shop';
import Ev from './components/Ev';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Ev/>
       <Shop/>
       <Home/>
       <News/>
      </div>
    );
  }
}

export default App;
