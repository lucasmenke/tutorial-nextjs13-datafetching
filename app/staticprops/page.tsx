import Link from "next/link";
import { use } from "react";

async function getData() {
  console.log("Fetchind Staticprops Data Now");
  return await (
    await fetch("https://rickandmortyapi.com/api/character")
  ).json();
}

export default function Staticprops() {
  // pre-renders the page at build time on the server -> similar to old getStaticProps function
  // Wrapping "fetch" in "use" is currently not recommended in Client Components and may trigger multiple re-renders
  const characters: Characters = use(getData());
  return (
    <div>
      <h1 className="font-bold mb-4">Build time fetching (getStaticProps)</h1>
      {characters.results?.map((c) => (
        <ul key={c.id}>
          <Link
            href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}
          >
            <li>{c.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}
