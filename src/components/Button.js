import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';


export default class ButtonPanel extends React.Component{
    
    static propTypes={
        name:PropTypes.string,
        orange:PropTypes.bool,
        wide:PropTypes.bool,
        clickHandler: PropTypes.func,
    }
    handleClick=()=>{
        this.props.clickHandler(this.props.name);
    }
    render(){
        const className=[
            "buttonn",
            this.props.orange?"orange":"",
            this.props.wide?"wide":"",
        ];
        return(
           <div className={className.join(" ").trim()}>
            <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}