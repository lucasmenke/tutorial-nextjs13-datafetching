import Link from "next/link";

const routes = [
    { name: "Server", path: "/server" },
    { name: "Client", path: "/client" },
    { name: "Staticprops", path: "/staticprops" }
];

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between mb-16">
    {routes.map(r => (
        <Link key={r.name} href={r.path} className="font-bold text-violet-700 mx-3 text-xl">{r.name}</Link>
    ))}
    </div>
  )
}
 