import { Link } from "react-router-dom";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { posts } from "@/data/posts";

export function HeroSection() {
  const latestPost = posts[0];

  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[3px] text-green-500 mb-3">
            Exploring the Human OS
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
            Hacking the
            <br />
            Human OS
          </h1>
          <p className="mt-4 text-neutral-400 max-w-lg leading-relaxed">
            Exploring the body's patterns, systems, and the science of rewiring
            yourself.
          </p>
          <div className="mt-6 flex gap-3">
            {latestPost && (
              <Link
                to={`/post/${latestPost.slug}`}
                className="bg-green-500 text-black px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-400 transition-colors"
              >
                Read Latest
              </Link>
            )}
            <a
              href="#posts"
              className="border border-white/[0.2] text-neutral-300 px-5 py-2.5 rounded-lg text-sm hover:border-white/[0.4] transition-colors"
            >
              Explore Topics
            </a>
          </div>
        </div>

        {/* Right content — Spline 3D */}
        <div className="flex-1 relative hidden md:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
