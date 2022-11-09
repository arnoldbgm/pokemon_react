// Components
import Button from "./components/Button";
import Card from "./components/Card";
// Icons
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
// Styles
import "./sass/App.scss";
// Hooks
import { useState, useEffect } from "react";

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);

  useEffect(() => {
    getEvolutions(pokemonId);
  }, [pokemonId]);

  async function getEvolutions(id) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();

    let pokemonEvoArray = [];

    let pokemonLv1 = data.chain.species.name;
    let pokemonLv1Img = getPokemonImgs(pokemonLv1);
    pokemonEvoArray.push([pokemonLv1, pokemonLv1Img]);
  }

  async function getPokemonImgs(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    return data.sprites.other["official-artwork"].front_default;
  }

  const prevClick = () => {
    pokemonId === 1 ? setPokemonId(1) : setPokemonId(pokemonId - 1);
  };

  const nextClick = () => {
    setPokemonId(pokemonId + 1);
  };

  return (
    <>
      <div className="card-container">
        <Card />
      </div>
      <div className="buttons-container">
        <Button icon={<TiArrowLeftOutline />} handleClick={prevClick} />

        <Button icon={<TiArrowRightOutline />} handleClick={nextClick} />
      </div>
    </>
  );
};

export default App;

// 2.36 hrs
