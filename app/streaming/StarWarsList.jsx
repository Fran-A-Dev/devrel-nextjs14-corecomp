async function getCharacters() {
  // Simulate 3 seconds of network latency
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:4000/characters", {
    headers: {
      "Content-Type": "application/json", // Indicate that we're expecting JSON
    },
    next: {
      revalidate: 0, // Next.js specific fetch option to opt out of cache
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch characters, status: ${res.status}`);
  }

  return res.json();
}

export default async function StarWarsList() {
  const characters = await getCharacters();
  return (
    <div>
      <h1 className="text-3xl font-bold my-8">
        My Favorite Star Wars Characters
      </h1>
      {characters.map((character) => (
        <div key={character.id} className="card">
          <h3 className="text-xl font-bold mb-4">{character.name}</h3>
        </div>
      ))}
    </div>
  );
}
