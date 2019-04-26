import React,{Component} from 'react';
class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'react里面的表单元素',
            msg1:'获取其它表单的值',
            inpVal:'111111',
            name:'',   //text
            sex:'1',  // radio
            city:'',     // 存放拿到的居住地的值
            citys:['北京','上海','深圳'],
            hobby:[         //checkbox
                {'title':'吃饭','checked':true},
                {'title':'睡觉','checked':true},
                {'title':'打豆豆','checked':false},
                {'title':'敲代码','checked':true}
            ],
            info:''        //textarea
        }
    }
    handleSubmit=(e)=>{
        // 阻止submit的提交事件
        e.preventDefault();
        console.log('姓名===='+this.state.name);
        console.log('性别===='+this.state.sex);
        console.log('城市===='+this.state.city);
        console.log('爱好===='+this.state.hobby);
        console.log('备注===='+this.state.info);
    }
    toChangeInput=(e)=>{
        this.setState({
            inpVal:e.target.value
        })
    }
    toChangeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    toChangeSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    toChangeCity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    changeCheckbox=(key)=>{
        // this.setState({

        // })
        console.log(key);
        var hobby = this.state.hobby;
        hobby[key].checked = !hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }
    changeInfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    render(){
        return(
            <div>
                {/* 
                    value和defaultValue的区别：
                    非约束性组件：<input type="text" defaultValue="a"> 这个defaultValue其实就是原生DOM中的value属性
                                这样写出来的组件，其实value值就是用户输入的内容，React完全不管理输入的过程。
                    约束性组件：<input type="text" value={this.state.inpVal} onChange={this.toChangeInput}>
                                这里value属性不再是一个写死的值，它是this.state.inpVal, this.state.inpVal是由this.toChangeInput负责管理的。
                                这时候实际上input的value根本不是用户输入的内容，而是onChange事件触发之后，由this.setState，导致了一次重新渲染。

                如果我们在表单里面只想获取value值的话，就可以使用defaultValue    (MV)
                但是如果想改变value的话，就得使用value+onChange    (实现MVVM)
                */}
                    {this.state.msg}<br/>
                    {this.state.inpVal}
                    <input type="text" value={this.state.inpVal} onChange={this.toChangeInput} />
                    <input type="text" defaultValue={this.state.inpVal} />
                    <hr/>

                    <div className="red">{this.state.msg1}</div><br/>
                    {/* 放在form里面，提交的话，得阻止默认的提交事件 */}
                    <form onSubmit={this.handleSubmit}>
                        用户名：<input type="text" value={this.state.name} onChange={this.toChangeName} /> <br/>
                    
                        性别：
                        <input type="radio" value="1" checked={this.state.sex === '1'}  onChange={this.toChangeSex} />男
                        <input type="radio" value="2" checked={this.state.sex === '2'}  onChange={this.toChangeSex} />女
                        <br/>

                        居住地：
                        <select value={this.state.city} onChange={this.toChangeCity}>
                            {
                                this.state.citys.map((value,key)=>{
                                    return <option key={key} value={key}>{value}</option>
                                })
                            }
                        </select>
                        <br/>
                        爱好：
                        {
                            this.state.hobby.map((value,key)=>{
                                return (
                                    <span key={key}>
                                        <input type="checkbox" checked={value.checked}  onChange={this.changeCheckbox.bind(this,key)} />{value.title}
                                    </span>
                                )
                            })
                        }
                        <br/>
                        描述：
                        <textarea value={this.info} onChange={this.changeInfo} />
                        <br/>
                        <br/>
                        <input type="submit" value="提交" />
                    </form>
                    <hr/>
            </div>
        )
    }
}
export default Forms;