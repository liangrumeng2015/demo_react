import React,{Component} from 'react';
import Header from './Header';
/*
    React中的组件：主要是用来解决html标签构建应用的不足问题。
    使用组件的好处：把公共的功能单独抽离成一个文件作为一个组件，哪里使用就哪里引用即可。
    (1)父组件->子组件：
        在父组件里面的子组件上定义<Header title={this.state.msg} />
        在子组件里面里面通过this.props.title设置
    说明：父组件不仅可以给子组件传值，还可以给子组件传递方法，以及把整个父组件传给子组件
    (2)子组件->父组件
        首先：在子组件里面获取到整个父组件

    (3)父组件主动获取子组件里面的数据
        1.调用子组件的时候，指定ref的值  <Header ref="header"/>
        2.通过this.refs.header 获取整个子组件实例（dom组件，加载完成以后获取）

*/

/**
 * defaultProps 父组件传递中，如果父组件调用子组件的时候，不给子组件传值，可以在子组件中使用defaultProps定义默认的值
 * propTypes  验证父组件传值的类型的合法性
 *  (1) 引入import PropTypes from 'prop-type';
 *  (2) 类.propTypes = {              // 通过propsTypes定义父组件给子组件传值的类型
 *          name:PropTypes.string
 *      }
 */
class Index10 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'我是index10组件',
            title:'首页内容'
        }
    }
    run=()=>{
        alert('我是父组件里面的方法');
    }
    getData=()=>{
        alert('我是父组件的getdate方法');
    }
    getChildData=(result)=>{
        alert(result);
        this.setState({
            msg:result
        })
    }
    getChildFn=()=>{
        // 父组件主动获取子组件的数据 或者 父组件主动执行子组件里面的方法
        alert(this.refs.header.state.msg);
    }
    render(){
        return(
            <div>
                
                {/* 给子组件传值、将父组件的方法传给子组件、将父组件的传递给子组件 */}
                <Header title={this.state.title} run={this.run} alldata={this} ref="header"/>
                {this.state.msg}

                <button onClick={this.getChildFn}>index10主动获取子组件的方法</button>


                <hr/>
            </div>
        )
    }
}
export default Index10;