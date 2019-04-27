import React,{Component} from 'react';
import fetchJsonp from 'fetch-jsonp';
import {Link } from 'react-router-dom';
import avator from '../../assets/images/avator.jpg';
import '../../assets/css/demo.css';
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'首页组件',
            list:[],
            domain:'http://a.itying.com/'
        }
    }
    getData=()=>{
        var api = this.state.domain+'api/productlist';
        fetchJsonp(api).then((response)=>{
           return response.json();
        }).then((json)=>{
            console.log(json.result);
            this.setState({
                list: json.result
            })
        }).catch((ex)=>{
            console.log(ex);
        })
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        return(
            <div>
                <header className="index_header">
			
                    <div className="hlist">
                        <img src={avator} alt=""/>
                        <p>热销榜</p>				
                    </div>
                    
                    <div className="hlist">
                        <img src={avator} alt="" />
                        <p>点过的菜</p>				
                    </div>
                    <div className="hlist">
                        
                        <img src={avator} alt=""/>
                        <p>搜你喜欢</p>				
                    </div>
                    
                </header>			
                
                <div className="content">
                    
                    
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                <div className="item" key={key}>
                        
                                    <h3 className="item_cate">{value.title}</h3>
                                    
                                    <ul className="item_list">
                                        {
                                            value.list.map((v,k)=>{
                                                return(
                                                   
                                                        <li key={k}>	
                                                            <Link to={`/pcontent/${v._id}`}>
                                                                <div className="inner">
                                                                    <img src={`${this.state.domain}${v.img_url}`} alt="" />
                                                                    <p className="title">{v.title}</p>						
                                                                    <p className="price">¥{v.price}</p>
                                                                </div>	
                                                            </Link>	
                                                        </li>
                                                    
                                                )
                                            })
                                        }
                                        
                                    </ul>
                                    
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}
export default Home;