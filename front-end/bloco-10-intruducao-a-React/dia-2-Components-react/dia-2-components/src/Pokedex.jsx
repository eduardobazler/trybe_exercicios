import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";
import "./pokedex.css"



class Pokedex extends React.Component{
  render(){
    return <div className="main">
      {pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon}/>)}
    </div>
  }
}

export default Pokedex;