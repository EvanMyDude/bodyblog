import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BlogCard } from "@/components/BlogCard";
import { posts } from "@/data/posts";

export function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Blog cards grid */}
      <section id="posts" className="px-6 py-10">
        <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-white">Latest Posts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-white/[0.05] text-center text-[11px] text-neutral-600">
        &copy; 2026 BodyBlog — Built with curiosity
      </footer>
    </div>
  );
}
