import Link from "next/link";
import { use } from "react";

async function getData() {
  console.log("Fetchind ServerSideProps Data Now");
  return await (
    await fetch("https://rickandmortyapi.com/api/character", {
      cache: "no-cache",
    })
  ).json();
}

export default function Server() {
  // pre-renders this page on each request
  // same code as staticprops/page.tsx (getStaticProps) but the data will not be cached
  const characters: Characters = use(getData());
  return (
    <div>
      <h1 className="font-bold mb-4">Server fetching (getServerSideProps)</h1>
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
