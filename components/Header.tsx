import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyWebsite
        </Link>

        {/* Menu */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/products" className="text-gray-700 hover:text-blue-600">
            Products + Server
          </Link>
          <Link href="/brands" className="text-gray-700 hover:text-blue-600">
            Brands + Client
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-blue-600">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
