// components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600">Ambulance Tracker</h1>
        </Link>
        <div className="flex gap-6">
          <Link href="/ambulance-login" className="text-gray-700 hover:text-blue-600 text-lg">
            Ambulance Login
          </Link>
          <Link href="/police-login" className="text-gray-700 hover:text-green-600 text-lg">
            Police Login
          </Link>
          <Link href="/user" className="text-gray-700 hover:text-purple-600 text-lg">
            User
          </Link>
        </div>
      </div>
    </nav>
  );
}
