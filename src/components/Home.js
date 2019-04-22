import React, {Component} from 'react';
import '../assets/css/index.css';
class Home extends Component{
    constructor(){
        super();
        this.state = {
            name:'哈喽，react',
            title:'我是鼠标放上去的时候才显示的',
            style:{
                'color':'blue',
                'fontSize':'25px'
            }
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                {/* 绑定属性,在jsx里面要使用如下替换 :
                    class ->  className  
                    for ->  htmlFor
                    style 也是比较特殊的
                */}
                <p title={this.state.title}>鼠标放上去显示</p>
                <div className="red">哈喽哈喽哈喽</div>
                <br/>
                <label htmlFor="name">姓名</label>
                <input type="text" id="name"/>
                <br/><br/><br/>
                <div style={{'color':'green'}}>写个行内样式</div>
                <div style={this.state.style}>哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽哈喽</div>
            </div>
        )
    }
}
export default Home;