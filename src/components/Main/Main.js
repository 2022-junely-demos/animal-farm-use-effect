import './Main.css';
import Animal from '../Animal/Animal';
import background from '../../background.png';
import { useAnimals } from '../../hooks/useAnimals';
import { useState } from 'react';

export default function Main() {
  const animals = useAnimals();
  const [type, setType] = useState('all');

  const filterAnimals = () => {
    if (type === 'all') return animals;
    return animals.filter((animal) => animal.type === type);
  };

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="pig">Pig</option>
        <option value="sheep">Sheep</option>
        <option value="donkey">Donkey</option>
        <option value="cow">Cow</option>
        <option value="goose">Goose</option>
        <option value="spider">Spider</option>
      </select>
      {filterAnimals().map((animal) => (
        <Animal key={animal.name} {...animal} />
      ))}
    </main>
  );
}
