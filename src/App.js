import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './assets/css/basic.css';
import Home from './components/demo/Home';
import Pcontent from './components/demo/Pcontent';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'无人点餐主页面'
        }
    }
    render(){
        return(
            <div>
                {this.state.msg}
                <Router>
                   <Link to="/home">去列表页面</Link>
                   <Route exact path="/home" component={Home}></Route>
                   <Route path="/pcontent/:aid" component={Pcontent}></Route>
                </Router>
            </div>
        )
    }
}

export default App;