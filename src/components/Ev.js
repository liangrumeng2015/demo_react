import React,{Component} from 'react';
class Ev extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'对象事件',
            username:''
        }
    }
    run=(event)=>{
        console.log(event);
        // 改变btn的背景颜色
        event.target.style.background = 'red';

        // 获取按钮上的自定义属性的值
        console.log(event.target.getAttribute('aid'));
    }
    getInput=(e)=>{
        // console.log(e.target.value);

        // this.setState({
        //     username:e.target.value
        // })

        this.setState({
            username:this.refs.username.value
        })
    }
    getData=()=>{
        alert(this.state.username);
    }
    inputKeyUp=(e)=>{     // 按下回车的时候弹框
        if(e.keyCode === 13){
            alert(e.target.value);
        }
    }
    render(){
        return(
            <div>
                <h2>事件对象</h2>
                {this.state.msg}
                <button aid='123' onClick={this.run}>事件对象</button>

                <br/>---------------------------------------<br/>
                <h2>表单事件</h2>
                {/* 获取表单里面的值：(方法1)
                (1)监听表单的改变事件  onChange
                (2)在改变的事件里面获取表单输入的值         # 通过事件获取，e.target.value
                (3)把表单输入的值赋值给username
                (4)点击按钮的时候获取state里面的username的值
                */}
                 {/* 获取表单里面的值：(方法2)
                (1)监听表单的改变事件  onChange       # 给input里面设置ref
                (2)在改变的事件里面获取表单输入的值         # 通过ref获取，this.refs.username.value
                (3)把表单输入的值赋值给username
                (4)点击按钮的时候获取state里面的username的值
                    
                */}
                <input ref="username" type="text" onChange={this.getInput} />
                <button onClick={this.getData}>点击获取input里面的值</button>
                <br/>---------------------------------------<br/>
                <h2>键盘事件</h2>
                <input type="text" onKeyUp={this.inputKeyUp} />
                <input type="text" onKeyDown={this.inputKeyUp} />
                <input type="text" onKeyPress={this.inputKeyUp} />
            </div>
        )
    }
}
export default Ev;