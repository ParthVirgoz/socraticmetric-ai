import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, FileText } from "lucide-react";
import type { BlogPostCard } from "@/lib/sanity/types";

type Props = {
  posts: BlogPostCard[];
};

function PostMeta({ post }: { post: BlogPostCard }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#65717D]">
      <span className="border-l-2 border-[#E79636] pl-2 text-[#1E4E8A]">
        {post.category}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5 text-[#1E4E8A]" aria-hidden="true" />
        {post.readTime}
      </span>
    </div>
  );
}

function CoverImage({
  post,
  priority = false,
  className = "",
}: {
  post: BlogPostCard;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#F1F2EE] ${className}`}>
      {post.coverImageUrl ? (
        <Image
          src={post.coverImageUrl}
          alt={`Cover: ${post.title}`}
          fill
          unoptimized
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
        />
      ) : (
        <div
          className={`absolute inset-0 ${post.imageClass}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function FeaturedPost({ post }: { post: BlogPostCard }) {
  return (
    <article className="group overflow-hidden border border-slate-200 bg-white transition-colors duration-300 hover:border-[#1E4E8A]/40">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <Link
          href={`/blog/${post.slug}`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1E4E8A]"
          aria-label={`Read ${post.title}`}
        >
          <CoverImage
            post={post}
            priority
            className="aspect-[16/10] h-full min-h-56"
          />
        </Link>
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <PostMeta post={post} />
          <h2 className="mt-4 font-serif text-2xl font-bold leading-tight tracking-tight text-[#163460] transition-colors group-hover:text-[#1E4E8A] sm:text-3xl">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-[#65717D] sm:text-base">
            {post.excerpt}
          </p>
          <div className="mt-auto flex flex-wrap items-end justify-between gap-5 border-t border-slate-200 pt-5">
            <div>
              <p className="text-sm font-semibold text-[#163460]">
                {post.author}
              </p>
              <p className="mt-1 text-xs text-[#65717D]">{post.date}</p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="group/read inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#1E4E8A] transition-colors hover:text-[#163460] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-2"
            >
              Read article
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/read:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function ArticleCard({ post }: { post: BlogPostCard }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-colors duration-300 hover:border-[#1E4E8A]/40">
      <Link
        href={`/blog/${post.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1E4E8A]"
        aria-label={`Read ${post.title}`}
      >
        <CoverImage post={post} className="aspect-[16/10]" />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <PostMeta post={post} />
        <h3 className="mt-3 font-serif text-xl font-bold leading-snug tracking-tight text-[#163460] transition-colors group-hover:text-[#1E4E8A]">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#65717D]">
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-slate-200 pt-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#163460]">
              {post.author}
            </p>
            <p className="mt-1 text-xs text-[#65717D]">{post.date}</p>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex min-h-9 shrink-0 items-center gap-2 text-xs font-semibold text-[#1E4E8A] transition-colors hover:text-[#163460] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-2"
          >
            Read article
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BlogListing({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-xl border-y border-slate-200 py-12 text-center sm:py-16">
        <FileText
          className="mx-auto h-7 w-7 text-[#1E4E8A]"
          aria-hidden="true"
        />
        <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-[#163460]">
          Insights coming soon
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#65717D]">
          New perspectives on oral verification, learning, and assessment will
          appear here when they&apos;re ready.
        </p>
      </div>
    );
  }

  const [featured, ...rest] = posts;

  return (
    <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">
      <FeaturedPost post={featured} />
      {rest.length > 0 ? (
        <section aria-labelledby="more-articles-heading">
          <div className="flex flex-col gap-2 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
                The library
              </p>
              <h2
                id="more-articles-heading"
                className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#163460] sm:text-3xl"
              >
                More articles
              </h2>
            </div>
            <p className="text-sm text-[#65717D]">
              {rest.length} more {rest.length === 1 ? "article" : "articles"} to
              explore
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {rest.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
