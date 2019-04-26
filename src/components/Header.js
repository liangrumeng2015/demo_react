import React,{Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'我是头部组件header'
        }
    }
    getNews=()=>{
        //获取传递来的父组件里面的实例
        // alert(this.props.alldata.state.msg);

        // 执行父组件传过来的方法
        this.props.alldata.getData();    
    }
    render(){
        return(
            <div>
                {this.state.msg}
                <h2>{this.props.title}</h2>
                <button onClick={this.props.run}>点击执行父组件传的run方法</button>
                <button onClick={this.props.alldata.getData}>点击执行父组件getData方法</button>
                <button onClick={this.getNews}>获取index10里面的实例的值</button>
                <button onClick={this.props.alldata.getChildData.bind(this,'我是字组件传入的值')}>子组件传值给父组件</button>
                <hr/>
            </div>
        )
    }
}
export default Header;