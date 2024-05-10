import React from "react";
class Button extends React.Component{
    render(){
        return <button onClick={this.props.btnClick}> {this.props.value}</button>
    }

}
export default Button;