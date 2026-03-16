import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { type BlogPost, CATEGORY_COLORS } from "@/data/posts";

export function BlogPostLayout({ post }: { post: BlogPost }) {
  const categoryColor = CATEGORY_COLORS[post.category];

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div
              className="inline-block text-[10px] uppercase tracking-[2px] px-3 py-1 rounded-full mb-5"
              style={{
                color: categoryColor,
                backgroundColor: `${categoryColor}1a`,
              }}
            >
              {post.category}
            </div>
            <h1 className="text-xl font-medium text-neutral-400">
              {post.subtitle}
            </h1>
            <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
              {post.title}
            </span>
            <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 mt-5">
              <span>{post.date}</span>
              <span className="text-neutral-700">•</span>
              <span>{post.readTime}</span>
            </div>
          </>
        }
      >
        <div className="h-full w-full overflow-y-auto p-6 md:p-10">
          <div className="max-w-3xl mx-auto text-sm md:text-[15px] leading-[1.85]">
            {post.content}
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
