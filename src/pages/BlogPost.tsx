import { useParams, Navigate, Link } from "react-router-dom";
import { getPostBySlug, CATEGORY_COLORS } from "@/data/posts";
import { BlogPostLayout } from "@/components/BlogPostLayout";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  if (post.iframeSrc) {
    const categoryColor = CATEGORY_COLORS[post.category];
    return (
      <div className="min-h-screen flex flex-col">
        <div className="p-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-5 py-2 border border-white/[0.15] rounded-lg text-sm text-neutral-300 bg-white/[0.03] hover:border-white/[0.3] transition-colors"
          >
            &larr; Home
          </Link>
          <div
            className="text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full"
            style={{ color: categoryColor, backgroundColor: `${categoryColor}1a` }}
          >
            {post.category}
          </div>
          <h1 className="text-lg font-bold text-white">{post.title}</h1>
        </div>
        <iframe
          src={post.iframeSrc}
          className="flex-1 w-full border-0"
          title={post.title}
          sandbox="allow-same-origin allow-scripts allow-popups"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
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
