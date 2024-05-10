import React from "react";
import Button from "./Button";
import Display from "./Display";
import Header from "./Header";

class Appcounter extends React.Component{
   constructor(){
    super();
    this.state={
        count:0
    };
   }
   increment=()=>{
    this.setState((prevState)=>{
        return{ count: prevState.count+1};
    });
   };
   decrement=()=>{
    this.setState((prevState)=>{
        return{ count: prevState.count-1};
    });
   };
   
    render(){
        return(
            <div>
            <Header/>
            <Button  btnClick={this.increment} value="+"/>
            <Display displayVal={this.state.count}/>
            <Button btnClick={this.decrement} value="-"/>
            </div>
            
        );
    }
}
export default Appcounter;