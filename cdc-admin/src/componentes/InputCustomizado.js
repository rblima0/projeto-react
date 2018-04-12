import React, { Component } from 'react';

export default class InputCustomizado extends Component {
    render() {
        return (
            <div className="pure-control-group">
                <label htmlFor={this.props.id}>{this.props.label}</label> 
                <input className="pure-input-1-2" id={this.props.id} type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
            </div>
        );
    }
}

/* props - guarda todos os parametros enviados para esse componente */