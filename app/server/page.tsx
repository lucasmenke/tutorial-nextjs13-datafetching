async function getData() {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Server() {
  // pre-renders this page on each request
  const characters: Characters = await getData();
  return (
    <div>
      <h1 className="font-bold mb-4">Server fetching (getServerSideProps)</h1>
      {characters.results?.map((c) => (
        <ul key={c.id}>
          <li>{c.name}</li>
        </ul>
      ))}
    </div>
  );
}
