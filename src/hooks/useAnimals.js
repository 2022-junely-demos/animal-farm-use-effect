import { useEffect, useState } from 'react';
import { fetchAnimals } from '../services/animals';

export function useAnimals() {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState('all');

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAnimals();
      setAnimals(data);
    }
    fetchData();
  }, []);

  const filterAnimals = () => {
    if (type === 'all') return animals;
    return animals.filter((animal) => animal.type === type);
  };

  return { filterAnimals, type, setType };
}
