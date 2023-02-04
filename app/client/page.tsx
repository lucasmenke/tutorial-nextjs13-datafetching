"use client";

// npm i swr
import useSWR from "swr";
import Link from "next/link";
import { Suspense } from "react";

// fetcher is a wrapper of the native fetch function
const fetcher = (path: string) =>
  fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json());

export default function Client() {
  const { data, error } = useSWR<Characters>("api/character", fetcher);
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <div>
        <h1 className="font-bold mb-4">Client fetching</h1>
        {data?.results?.map((d) => (
          <ul key={d.id}>
            <Link
              href={`/staticprops/${d.name}`.replace(/\s+/g, "-").toLowerCase()}
            >
              <li>{d.name}</li>
            </Link>
          </ul>
        ))}
      </div>
    </Suspense>
  );
}
