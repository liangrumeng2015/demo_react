import React,{Component} from 'react';
import fetchJsonp from 'fetch-jsonp';
import {Link} from 'react-router-dom';
import '../../assets/css/pcontent.css';
class Pcontent extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'Pcontent页面',
            aid:'',
            domain:'http://a.itying.com/',
            list:[]
        }
    }
    getData=(id)=>{
        var api = this.state.domain+'api/productcontent?id='+id;
        fetchJsonp(api).then((response)=>{
            return response.json();
        }).then((json)=>{
            console.log(json);
            this.setState({
                list:json.result[0]
            })
        }).catch((ex)=>{
            console.log(ex);
        })
    }
    componentDidMount(){
        console.log(this.props);
        console.log(this.props.match.params.aid);
        this.getData(this.props.match.params.aid);
    }
    render(){
        return(
            <div>
                <Link to="/home">
                    <div className="back">返回</div>
                </Link>
                

               <div className="p_content">		
                    <div className="p_info">				
                        <img src={`${this.state.domain}${this.state.list.img_url}`} alt=""/>				
                        <h2>{this.state.list.title}</h2>				
                        <p className="price">{this.state.list.price}/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>
                            商品详情					
                        </h3>
                        <div className="p_content"> 
                            <br />
                            <p dangerouslySetInnerHTML={{__html:this.state.list.content}}>
                                
                            </p>
                            
                        </div>
                    </div>
                </div>
                <footer className="pfooter">
			
                    <div className="cart">				
                        <strong>数量:</strong>
                        <div className="cart_num">
                        <div className="input_left">-</div>
                        <div className="input_center">
                            <input type="text"  readOnly="readonly" value="1" name="num" id="num" />
                        </div>
                        <div className="input_right">+</div>				      
                        </div>								
                    
                    </div>
                    
                    <button className="addcart">加入购物车</button>			
                </footer>

            </div>
        )
    }
}
export default Pcontent;