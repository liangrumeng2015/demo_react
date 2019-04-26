import React, { Component } from 'react';
import './assets/css/App.css';
// 引入组件
import Home from './components/Home';
import News from './components/News';
import Shop from './components/Shop';
import Ev from './components/Ev';
import TodoList from './components/TodoList';
import Forms from './components/Forms';
import TodoList111 from './components/TodoList111';
import TodoList222 from './components/TodoList222';
import Index10 from './components/Index10';
import Data1 from './components/Data1';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Data1/>
      <Index10 />
      <TodoList222/>
       <TodoList111/>
       <Forms/>
       <TodoList></TodoList>
       <Ev/>
       <Shop/>
       <Home/>
       <News/>
      </div>
    );
  }
}

export default App;
