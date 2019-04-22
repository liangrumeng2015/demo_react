import React,{Component} from 'react';
class Ev extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'对象事件'
        }
    }
    run=(event)=>{
        console.log(event);
        // 改变btn的背景颜色
        event.target.style.background = 'red';

        // 获取按钮上的自定义属性的值
        console.log(event.target.getAttribute('aid'));
    }
    getInput=()=>{
        alert('nadd');
    }
    render(){
        return(
            <div>
                <h2>事件对象</h2>
                {this.state.msg}
                <button aid='123' onClick={this.run}>事件对象</button>

                <br/>---------------------------------------<br/>
                <h2>表单事件</h2>
                <input type="text" /><button onClick={this.getInput}>点击获取input里面的值</button>
            </div>
        )
    }
}
export default Ev;