import React,{Component} from 'react';
class TodoList111 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'todolist的实现',
            list:[]
        }
    }
    addFn=()=>{
        var tempList = this.state.list;
        tempList.push(this.refs.inpVal.value);
        this.setState({
            list:tempList
        })
        this.refs.inpVal.value = '';
    }
    delFn=(key)=>{
        var tmpList = this.state.list;
        tmpList.splice(key,1);
        this.setState({
            list:tmpList
        })
    }
    render(){
        return(
            <div>
                {this.state.msg}<br/>
                <input placeholder="请输入内容" ref="inpVal"/><button onClick={this.addFn}>增加+</button>
                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                <div key={key}>
                                    <li style={{'display':'inline-block'}} >{value}------------</li><button onClick={this.delFn.bind(this,key)}>删除</button>
                                </div>
                            )
                        })
                    }
                </ul>
                <hr/>
            </div>
        )
    }
}
export default TodoList111;