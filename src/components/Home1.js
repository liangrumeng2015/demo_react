import React,{Component} from 'react';
class Home1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'我是home1界面'
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
export default Home1;