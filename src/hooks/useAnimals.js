import { useEffect, useState } from 'react';
import { fetchAnimals } from '../services/animals';

export function useAnimals() {
  const [animals, setAnimals] = useState([]);
  const [type, setType] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAnimals();
        setAnimals(data);
      } catch (e) {
        console.log(e);
        setError(e.message);
      }
    }
    fetchData();
  }, []);

  const filterAnimals = () => {
    if (type === 'all') return animals;
    return animals.filter((animal) => animal.type === type);
  };

  return { filterAnimals, type, setType, error };
}
