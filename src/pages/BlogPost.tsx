import { useParams, Navigate, Link } from "react-router-dom";
import { getPostBySlug } from "@/data/posts";
import { BlogPostLayout } from "@/components/BlogPostLayout";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Home button */}
      <div className="p-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-5 py-2 border border-white/[0.15] rounded-lg text-sm text-neutral-300 bg-white/[0.03] hover:border-white/[0.3] transition-colors"
        >
          &larr; Home
        </Link>
      </div>

      <BlogPostLayout post={post} />
    </div>
  );
}
