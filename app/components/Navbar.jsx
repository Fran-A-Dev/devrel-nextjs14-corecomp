import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between flex-wrap">
      <h1 className="flex-grow text-xl font-semibold">
        Fran's Next.js 14 Headless WP Core Comp Examples
      </h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <div className="hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <div className="hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
              Login
            </div>
          </Link>
        </li>
        <li>
          <Link href="/streaming">
            <div className="hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
              Streaming
            </div>
          </Link>
        </li>
        <li>
          <Link href="/client-side-rendering">
            <div className="hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
              Client Side Rendering
            </div>
          </Link>
        </li>
        <li>
          <Link href="/static-rendering">
            <div className="hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
              Static Rendering
            </div>
          </Link>
        </li>
        <li>
          <Link href="/dynamic-rendering">
            <div className="hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
              Dynamic Rendering
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
