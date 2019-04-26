import React,{Component} from 'react';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'手动实现一个类似vue的双向数据绑定',
            username:'1111111'
        }
    }
    changeInput=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    setInput=()=>{
        this.setState({
            username:'张三'
        })
    }
    render(){
        return(
            <div className="todoList">
            什么是双向数据绑定呢？model改变会影响view，view反过来会影响model
                {this.state.msg}
                <br></br>
                <input type="text" value={this.state.username} onChange={this.changeInput} />
                <br/>
                {this.state.username}<br/>
                <button onClick={this.setInput}>设置input的值</button>
            </div>
        )
    }
}
export default TodoList;