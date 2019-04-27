import React,{Component} from 'react';
class Liftcycle extends Component{
    constructor(props){
        console.log('01构造函数');
        super(props);
        this.state = {
            msg:'你好'
        }
    }
    componentWillMount(){
        console.log('02组件将要挂载');
    }
    componentDidMount(){
        // DOM操作，请求数据也放在里面
        console.log('04组件挂载');
    }
    // 组件更新完成
    componentDidUpdate(){
         // DOM操作，请求数据也放在里面
        console.log('06组件更新完成');
    }
    setMsg=()=>{
        this.setState({
            msg:'我是更新后的数据'
        })
    }
    shouldComponentUpdate(){      // false不执行更新数据、true执行更新数据
        // return false;
        return true;
    }
    // 将要更新数据的时候触发
    componentWillUpdate(){
        console.log('05组件将要更新');
    }
    render(){
        console.log('03渲染数据render');
        return(
            <div>
                {this.state.msg}
                <button onClick={this.setMsg}>点击更新数据</button>
                
    {/*
(1)React生命周期函数：组件加载之前、组件加载完成、以及组件更新数据、组件销毁    触发的一系列的方法，这就是组件的生命周期函数。
(2)组件加载的时候触发的函数：constructor  componentWillMount   render   componentDidMount
(3)组件数据更新时候触发的生命周期函数：shouldComponentUpdate  componentWillUpdate  render  componentDidMount
(4)在 
*/}



            </div>
        )
    }
}
export default Liftcycle;