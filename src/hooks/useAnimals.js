import { useEffect, useState } from 'react';
import { fetchAnimals } from '../services/animals';

export function useAnimals() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchAnimals();
      setAnimals(data);
    }
    fetchData();
  }, []);
  return animals;
}
