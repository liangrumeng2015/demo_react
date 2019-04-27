import React,{Component} from 'react';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
class Data1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg: '使用axios请求数据',
            list:[],
            list2:[]
        }
    }
    getData=()=>{
        // axios获取数据
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api).then((response)=>{
            console.log(response.data.result);
            this.setState({
                list:response.data.result
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
    getData2=()=>{
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&callback=?';
        fetchJsonp(api).then((response)=>{
            return response.json();
        }).then((json)=>{
            console.log(json);
            this.setState({
                list2: json.result
            })
        }).catch((ex)=>{
            console.log(ex);
        });
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                 {/* 
                    请求数据axios  
                    (1)npm install axios --save
                    (2)import axios from 'axios'
                */}
                {this.state.msg}
                <button onClick={this.getData}>axios获取服务器api接口</button>
                <ul>
                   {
                        this.state.list.map((value,key)=>{
                            return(
                                <li key={key}>{value.title}</li>
                            )
                        })
                   }
                </ul>
                 {/* 
                    请求数据fetch-jsonp  
                    (1)npm install fetch-jsonp --save
                    (2)import fetchJsonp from 'fetch-jsonp'
                    (3)fetchJsonp().then((response)=>{

                    }).catch((error)=>{

                    })
                */}
                <button onClick={this.getData2}>fetch-jsonp获取数据</button>
                <ul>
                   {
                        this.state.list2.map((value,key)=>{
                            return(
                                <li key={key}>{value.title}</li>
                            )
                        })
                   }
                </ul>
                <hr/>
            </div>
        )
    }
}
export default Data1;