export async function getDogs() {
  const url = 'https://dog.ceo/api/breeds/image/random';

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch data.');
  }

  const data = await response.json() as unknown;
  return data;
}