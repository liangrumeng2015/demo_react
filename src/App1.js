import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './assets/css/App.css';
// 引入组件
// import Home from './components/Home';
// import News from './components/News';
// import Shop from './components/Shop';
// import Ev from './components/Ev';
// import TodoList from './components/TodoList';
// import Forms from './components/Forms';
// import TodoList111 from './components/TodoList111';
// import TodoList222 from './components/TodoList222';
// import Index10 from './components/Index10';
// import Data1 from './components/Data1';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Content from './components/Content';
// import Lifycycle from './components/Liftcycle';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Data1/>
      <Index10 />
      <TodoList222/>
       <TodoList111/>
       <Forms/>
       <TodoList></TodoList>
       <Ev/>
       <Shop/>
       <Home/>
       <News/> 
       // <Lifycycle/>*/}
       <Router>
         <div>
           <header className='header'>
              <Link to="/">首页1</Link>
              <Link to="/home2">首页2</Link>
           </header>
           {/* exact严格匹配 */}
           <Route exact path="/" component={Home1} />
           <Route path="/home2" component={Home2} />
           {/* 动态路由传值  */}
           {/* <Route path="/content/:aid" component={Content} />  */}

           {/* get传值 */}
           <Route path="/content" component={Content} />
         </div>
       </Router>


      </div>
    );
  }
}

export default App;
