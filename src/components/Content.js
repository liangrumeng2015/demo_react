import React,{Component} from 'react';
// url模块用来解析url，在node中，不需要安装url；react里面需要安装url
import url from 'url';
class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'我是详情页面',
            list:[
                {aid:'1',title:'我是新闻111111111111'},
                {aid:'2',title:'我是新闻22222222222222'},
                {aid:'3',title:'我是新闻333333333333'},
                {aid:'4',title:'我是新闻444444444'},
                {aid:'5',title:'我是新闻55555555'}
            ]
        }
    }
    componentDidMount(){
        // 获取动态路由传值
        // console.log(this.props);
        // console.log(this.props.match.params.aid);

        // 获取get路由传值
        console.log(this.props);
        console.log(this.props.location.search);   // 解析地址  可以使用第三方模块  node的url解析
        // 安装url   npm install url --save
        console.log(url.parse(this.props.location.search,true));      //
        var aid = url.parse(this.props.location.search,true).query;
        console.log(aid);
    }
    render(){
        return(
            <div>
                {this.state.msg}
            </div>
        )
    }
}
export default Content;