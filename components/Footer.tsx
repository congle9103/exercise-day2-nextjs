// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-bold text-white">MyWebsite</h2>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold">Contact</h3>
          <p className="mt-2 text-sm">Email: support@mywebsite.com</p>
          <p className="text-sm">Phone: +84 123 456 789</p>
        </div>
      </div>
    </footer>
  );
}
