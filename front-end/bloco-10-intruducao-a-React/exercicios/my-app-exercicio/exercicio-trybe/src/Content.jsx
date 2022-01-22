import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component{
  render(){
    return <ol>
      {conteudos.map(({conteudo, bloco, status}) => {
        return <li>
        <h2>O conteúdo é: {conteudo}</h2>
        <h3>bloco: {bloco}</h3>
        <h3>status: {status}</h3>
      </li>
      })}
    </ol>
  }
}

export default Content;