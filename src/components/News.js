import React from 'react';
import '../assets/css/index.css';
import avator from '../assets/images/avator.jpg';
class News extends React.Component{
    constructor(props){
        super(props);   // 父子组件传值
        this.state = {
            msg:'新闻页面',
            url:'https://www.baidu.com/favicon.ico',
            list:[
                '1111111111',
                '222222222222',
                '333333333'
            ],
            list2:[<h2>我是一个h2</h2>,<b>我是一个b</b>],
            list3:[
                {title:'新闻111111111'},
                {title:'新闻2222222'},
                {title:'新闻3333333333'}
            ]
        }
    }
    render(){
        let listResult = this.state.list.map(function(value,key){
            return <li key={key}>{value}</li>
        })
        return(
            <div className="news">
                <h1>{this.state.msg}</h1>
                {/* 引入本地图片，比较特殊 */}
                <img src={require('../assets/images/avator.jpg')} alt=""/>
                <img src={avator} alt=""/>
                <img src={this.state.url} alt=""/>
                <hr></hr>
                <ul>
                    {listResult}
                </ul>
                <hr></hr>
                <ul>
                    {
                        this.state.list3.map(function(value,key){
                            return <li key={key}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default News;