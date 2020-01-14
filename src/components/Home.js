import React,{Component} from 'react';

class Home extends Component{
    constructor(){
        super();
        this.state={};
    }
    render(){
        return(
            <div>
                <div>
                    <input type="text" placeholder="备用金：你的应急小钱包"></input>
                    <span>首页</span>
                </div>
            </div>
        );
    }
}
export default Home;