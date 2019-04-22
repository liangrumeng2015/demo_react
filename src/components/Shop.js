import React,{Component} from 'react';
class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'我是初始化的值',
            msg1:'我是shop页面里面的msg1',
            msg2:'我是shop页面里面的msg2',
            msg3:'我是shop页面里面的msg3',
            username:'张三'
        }
        this.getMsg2 = this.getMsg2.bind(this);
    }
    run(){
        alert('run方法里面的弹框')
    }
    getMsg1(){
        alert(this.state.msg1);
    }
    getMsg2(){
        alert(this.state.msg2);
    }
    getMsg3=()=>{
        alert(this.state.msg3);
    }
    setMsg=()=>{
        this.setState({
            msg:'我是改变后的值'
        })
    }
    setName=(name)=>{
        this.setState({
            username:name
        })
    }
    render(){
        return(
            <div className="shop">
            <h1>{this.state.msg}-----------{this.state.username}</h1>
                <button onClick={this.run}>点击获取</button>
                {/* 第一种，改变this指向的方法 =====bind*/}
                <button onClick={this.getMsg1.bind(this)}>获取msg的值----方法1</button>
                {/* 第二种，改变this指向的方法 =======在构造函数里面通过改变this的指向*/}
                <button onClick={this.getMsg2}>获取msg的值----方法2</button>
                {/* 第三种，改变this指向的方法 =======使用箭头函数*/}
                <button onClick={this.getMsg3}>获取msg的值----方法3</button>

                {/* 改变值 */}
                <button onClick={this.setMsg}>改变state里面的值</button>

                <br/>
                <button onClick={this.setName.bind(this,'哆啦A梦')}>执行方法传值</button>
            </div>
        )
    }
}
export default Shop;