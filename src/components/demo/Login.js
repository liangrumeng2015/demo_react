import React,{Component} from 'react';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'登录界面'
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
export default Login;