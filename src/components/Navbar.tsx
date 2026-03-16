import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-white/[0.1]">
      <Link to="/" className="font-bold text-lg text-white">
        BodyBlog
      </Link>
      <div className="flex gap-6 text-sm text-neutral-400">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <a href="#posts" className="hover:text-white transition-colors">Posts</a>
        <a href="#categories" className="hover:text-white transition-colors">Categories</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </div>
    </nav>
  );
}
