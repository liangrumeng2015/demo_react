import React,{Component} from 'react';
class Home2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'我是home2界面'
        }
    }
    render(){
        return(
            <div>
             {this.state.msg}
            </div>
        )
    }
}
export default Home2;