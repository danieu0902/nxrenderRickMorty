import Image from 'next/image';
export const dynamic = 'force-dynamic'


async function fetchCharacters() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  if (!res.ok) {
    throw new Error('Failed to fetch characters');
  }
  const data = await res.json();
  return data.results;
}


export default async function Page() {
  const pokemons = await fetchCharacters();

  return (
    <>
      <h2 className="text-xl font-bold text-center">Ejemplo 4: SSR Next</h2>
      <ul>
        {pokemons.map(poke => (
          <li  className="py-20 text-center">
            <b>{poke.name}</b><br />
            <b>{poke.url}</b>
          </li>
        ))}
      </ul>
    </>
  );
}
