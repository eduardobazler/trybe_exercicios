import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './Button';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button name={'1 '} />
        <Button name={'2 '} />
        <Button name={'3 '} />
      </div>
    )
  }
}

export default App;
