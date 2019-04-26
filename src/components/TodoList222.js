import React,{Component} from 'react';
import Storage from '../model/Storage';
class TodoList222 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'',
            list:[
                // {'title':'javascript权威指南','checkStatus':true},
                // {'title':'java(一)','checkStatus':true},
                // {'title':'javascript','checkStatus':true},
                // {'title':'node权威指南','checkStatus':false},
                // {'title':'koa权威指南','checkStatus':false},
                // {'title':'express权威指南','checkStatus':false}
            ]
        }
    }
    addTodo=(e)=>{    // 添加到待办事项里面   
        if(e.keyCode === 13){
            var tempList = this.state.list;
            tempList.push({
                title:this.refs.inpVal.value,
                checkStatus:false
            });
            this.setState({
                list: tempList
            })
            this.refs.inpVal.value = '';   // 将表单置为空
            // 设置缓存
            // localStorage.setItem('todoList',JSON.stringify(tempList));        // localStorage只能保存字符串，没办法保存数组、对象，只能通过JSON.stringify()来转换成字符串
            Storage.setItem('todoList',tempList);
        }
    }
    changeChecked=(key)=>{      // 改变选中
        var tempList = this.state.list;
        tempList[key].checkStatus = !tempList[key].checkStatus;
        this.setState({
            list: tempList
        })
        // 设置缓存
        // localStorage.setItem('todoList',JSON.stringify(tempList));
        Storage.setItem('todoList',tempList);
    }
    delFn=(key)=>{   // 删除
        var tempList = this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
        // 设置缓存
        // localStorage.setItem('todoList',JSON.stringify(tempList));
        Storage.setItem('todoList',tempList);
    }
    // 生命周期函数   加载页面就会触发该方法
    componentDidMount(){        // 获取缓存数据
        // var listArr = JSON.parse(localStorage.getItem('todoList'));
        var listArr = Storage.getItem('todoList');
        if(listArr){
            this.setState({
                list: listArr
            })
        }
    }
    render(){
        return(
            <div>
                <input ref="inpVal" onKeyUp={this.addTodo} />
                <hr/>
                <h2>待办事项</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checkStatus){
                                return(
                                <div key={key}>
                                    <input type="checkbox" checked={value.checkStatus} onChange={this.changeChecked.bind(this,key)} />
                                    <li style={{'display':'inline-block'}}>{value.title}</li>-------------<button onClick={this.delFn.bind(this,key)}>删除</button>
                                </div>
                                )
                            }
                            return false;
                        })
                    }
                </ul>
                <hr/>
                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(value.checkStatus){
                                return(
                                <div key={key}>
                                    <input type="checkbox" checked={value.checkStatus} onChange={this.changeChecked.bind(this,key)} />
                                    <li style={{'display':'inline-block'}}>{value.title}</li>-------------<button onClick={this.delFn.bind(this,key)}>删除</button>
                                </div>
                                
                                )
                            }
                            return false;
                        })
                    }
                </ul>
                <hr/>
            </div>
        )
    }
}
export default TodoList222;