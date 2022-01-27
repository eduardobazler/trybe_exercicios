import React from 'react';

class Button extends React.Component {
  
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      nummberOfClick: 0,
      color: 'blue'
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _prop) => {
      return ({nummberOfClick: estadoAnterior.nummberOfClick + 1})
    })
    if (this.state.nummberOfClick %2 ===0){
      this.setState(({ color: corAntiga }, _props) => ({color: 'green'}))
    } else {
      this.setState((estadoAntigo, _props) => ({color: 'blue'}))
    }
  }


  render(){
    return <button onClick={this.handleClick}
    style={{backgroundColor: this.state.color, padding: '30px', borderRadius: '10px'}}>
      {this.props.name}
    </button>
  }
}

export default Button;