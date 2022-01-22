import React from "react";
import './helloWorld.css';

const nome = () => 'deu certo'

const teste = document.createElement('p');
teste.innerText = 'testeando'

class HelloWorld extends React.Component{
  render() {
    return <section className="helloWorld">
        <h1>Hello, world! {nome()}</h1>
        <p>Estou muito feliz e empenhado em aprender React</p>
      </section>
  }
}

export default HelloWorld;