import React, { useEffect, useState } from 'react';
import './Main.css';
import Animal from '../Animal/Animal';
import background from '../../background.png';
import { fetchAnimals } from '../../services/animals';

function useAnimals() {}

export default function Main() {
  const [update, setUpdate] = useState(false);
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchAnimals();
      setAnimals(data);
    }
    fetchData();
  }, [update]);
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          // name={animal.name}
          // type={animal.type}
          // top={animal.top}
          // left={animal.left}
          // says={animal.says}
          {...animal}
        />
      ))}
      <button
        onClick={() => {
          setUpdate((prev) => !prev);
        }}
      >
        Click Me
      </button>
    </main>
  );
}
