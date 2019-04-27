import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Home2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:[
                {aid:'1',title:'我是新闻111111111111'},
                {aid:'2',title:'我是新闻22222222222222'},
                {aid:'3',title:'我是新闻333333333333'},
                {aid:'4',title:'我是新闻444444444'},
                {aid:'5',title:'我是新闻55555555'}
            ]
        }
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                // 动态路由跳转
                                // <li key={key}><Link to={`/content/${value.aid}`}>{value.title}</Link></li>
                                
                                // get跳转页面
                                <li key={key}><Link to={`/content?aid=${value.aid}`}>{value.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Home2;