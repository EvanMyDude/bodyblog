import { Link } from "react-router-dom";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { type BlogPost, CATEGORY_COLORS } from "@/data/posts";

export function BlogCard({ post }: { post: BlogPost }) {
  const categoryColor = CATEGORY_COLORS[post.category];

  return (
    <Link to={`/post/${post.slug}`} className="block group">
      <div className="border border-white/[0.1] rounded-2xl p-5 bg-white/[0.02] relative overflow-hidden hover:border-white/[0.2] transition-colors h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white/[0.3]" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white/[0.3]" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white/[0.3]" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white/[0.3]" />

        {/* Category badge */}
        <div
          className="text-[10px] uppercase tracking-[2px] mb-3"
          style={{ color: categoryColor }}
        >
          {post.category}
        </div>

        {/* Evervault effect area */}
        <div className="h-48 mb-3">
          <EvervaultCard text={post.title.split(" ")[0]} />
        </div>

        {/* Post info */}
        <h3 className="text-[15px] font-semibold text-white mb-1.5">
          {post.title}
        </h3>
        <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <p className="mt-3 text-[11px] text-neutral-600">{post.date}</p>
      </div>
    </Link>
  );
}
