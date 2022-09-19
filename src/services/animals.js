import { checkError, client } from './client';

export async function fetchAnimals() {
  const resp = await client.from('farm_animals').select('*');
  return checkError(resp);
}
