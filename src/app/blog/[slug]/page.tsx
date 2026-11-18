import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BlogPageShell } from "@/components/blog/BlogPageShell";
import { BlogPostCTA } from "@/components/blog/BlogPostCTA";
import { blogPortableTextComponents } from "@/components/blog/portable-components";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/sanity/posts";
import { extractTocFromPortableText, enrichFallbackHtmlWithToc } from "@/lib/blog/toc";
import { BlogPostToc } from "@/components/blog/BlogPostToc";
import { BlogPostJsonLd } from "@/components/seo/BlogPostJsonLd";
import { createBlogPostMetadata } from "@/lib/site-metadata";
import type { PortableTextBlock } from "@portabletext/types";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return createBlogPostMetadata({
    title: post.title,
    description: post.excerpt,
    slug,
  });
}

const fallbackArticleClass =
  "prose prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#163460] prose-h2:scroll-mt-28 prose-h3:scroll-mt-28 prose-p:text-[#65717D] prose-p:leading-[1.75] prose-li:text-[#65717D] prose-li:leading-relaxed prose-strong:text-[#163460] prose-a:text-[#1E4E8A] prose-a:no-underline hover:prose-a:underline prose-ul:marker:text-[#1E4E8A]";

const articleInnerClass = "max-w-[46rem] mx-auto w-full";

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let tocItems = extractTocFromPortableText(post.body as PortableTextBlock[] | null);
  let fallbackHtmlWithAnchors: string | null = null;
  if (!post.body?.length && post.fallbackHtml) {
    const { html, toc } = enrichFallbackHtmlWithToc(post.fallbackHtml);
    fallbackHtmlWithAnchors = html;
    tocItems = toc;
  }

  const hasCover = Boolean(post.coverImageUrl);

  return (
    <BlogPageShell>
      <BlogPostJsonLd
        title={post.title}
        description={post.excerpt}
        slug={slug}
        author={post.author}
        coverImageUrl={post.coverImageUrl}
      />
      <header className="relative isolate overflow-hidden bg-[#163460] pt-24 text-white md:pt-28 lg:pt-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 md:pb-14 lg:px-10 lg:pb-16 xl:px-14">
          <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-10">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-white/15 sm:text-xs"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
              Back
            </Link>
            <span className="text-white/25" aria-hidden>
              ·
            </span>
            <Link href="/blog" className="text-xs font-semibold text-[#8CA4C2] transition-colors hover:text-white">
              All articles
            </Link>
          </div>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#1E4E8A]/40 bg-[#1E4E8A]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8D9FF] sm:text-xs">
              {post.category}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-xs">
              Article
            </span>
          </div>

          <h1 className="animate-text-enter mb-6 max-w-[22ch] font-serif text-[2.25rem] font-bold leading-[1.08] tracking-tight text-white sm:max-w-[28ch] sm:text-4xl md:mb-8 md:text-5xl lg:text-[4rem] lg:leading-[1.06]">
            {post.title}
          </h1>

          {post.excerpt ? (
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:mb-10">{post.excerpt}</p>
          ) : null}

          <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#1E4E8A] text-sm font-bold text-white">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{post.author}</p>
                {post.role ? <p className="text-sm text-white/60">{post.role}</p> : null}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#A5662C]" strokeWidth={2} aria-hidden />
                {post.date}
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#7EB6FF]" strokeWidth={2} aria-hidden />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 h-px w-full border-t border-white/10" aria-hidden />
      </header>

      <section
        className="relative overflow-hidden pb-20 pt-6 md:pb-28 md:pt-8"
        aria-label="Article body"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-14">
          <article className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md sm:rounded-3xl">

            {hasCover ? (
              <figure className="relative w-full overflow-hidden border-b border-slate-200/80 bg-[#F1F2EE]">
                {/* Height scales with viewport (svh avoids mobile URL-bar jump); caps grow by breakpoint */}
                <div
                  className="relative mx-auto w-full max-w-full
                    h-[clamp(12.5rem,42svh,20rem)]
                    sm:h-[clamp(13.5rem,48svh,26rem)]
                    md:h-[clamp(15rem,52svh,32rem)]
                    lg:h-[clamp(17rem,56svh,38rem)]
                    xl:h-[clamp(18rem,min(60svh,68vh),45rem)]"
                >
                  <Image
                    src={post.coverImageUrl!}
                    alt={`Cover: ${post.title}`}
                    fill
                    className="object-contain object-center p-3 sm:p-5 md:p-7 lg:p-8"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) min(100vw - 2rem, 42rem), (max-width: 1280px) min(100vw - 6rem, 48rem), min(72rem, 65vw)"
                    priority
                  />
                </div>
              </figure>
            ) : null}

            <div className="relative px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
              {post.body?.length ? (
                <div className={`${articleInnerClass} [&_h2:first-child]:mt-0 [&_h3:first-child]:mt-0`}>
                  <PortableText value={post.body} components={blogPortableTextComponents} />
                </div>
              ) : fallbackHtmlWithAnchors ? (
                <div className={articleInnerClass}>
                  <div className={fallbackArticleClass} dangerouslySetInnerHTML={{ __html: fallbackHtmlWithAnchors }} />
                </div>
              ) : null}
            </div>
          </article>

          <BlogPostToc items={tocItems} />

          <div className="mx-auto mt-10 max-w-6xl sm:mt-14">
            <BlogPostCTA />
          </div>
        </div>
      </section>
    </BlogPageShell>
  );
}
