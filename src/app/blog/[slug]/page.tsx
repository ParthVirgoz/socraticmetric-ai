import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Fragment } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ClipboardCheck,
  Clock,
  FileText,
  MessageCircle,
} from "lucide-react";
import { BlogPageShell } from "@/components/blog/BlogPageShell";
import { BlogPostCTA } from "@/components/blog/BlogPostCTA";
import { blogPortableTextComponents } from "@/components/blog/portable-components";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/sanity/posts";
import {
  extractTocFromPortableText,
  enrichFallbackHtmlWithToc,
} from "@/lib/blog/toc";
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
  "prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#163460] prose-h2:scroll-mt-28 prose-h3:scroll-mt-28 prose-p:text-[#65717D] prose-p:leading-[1.8] prose-li:text-[#65717D] prose-li:leading-relaxed prose-strong:text-[#163460] prose-a:text-[#1E4E8A] prose-a:no-underline hover:prose-a:underline prose-ul:marker:text-[#1E4E8A]";

const articleInnerClass = "mx-auto w-full max-w-[46rem]";

function ArticleContextVisual() {
  const stages = [
    { icon: FileText, label: "Output", detail: "What was submitted" },
    { icon: MessageCircle, label: "Dialogue", detail: "How a person reasons" },
    { icon: ClipboardCheck, label: "Evidence", detail: "A record to review" },
  ];

  return (
    <figure className="border border-white/15 bg-[#F8F6F0] text-[#163460]">
      <div
        role="img"
        aria-label="A three-step illustration: written output, oral dialogue, and reviewable evidence"
        className="grid min-h-[13.5rem] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-3 py-5 sm:min-h-[16rem] sm:gap-3 sm:px-5"
      >
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <Fragment key={stage.label}>
              <div className="min-w-0 text-center">
                <span className="mx-auto flex h-9 w-9 items-center justify-center border border-[#1E4E8A]/20 bg-white text-[#1E4E8A] sm:h-11 sm:w-11">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#163460] sm:text-xs">
                  {stage.label}
                </p>
                <p className="mt-1 text-[10px] leading-snug text-[#65717D] sm:text-xs">
                  {stage.detail}
                </p>
              </div>
              {index < stages.length - 1 ? (
                <ArrowRight
                  className="h-3 w-3 text-[#A5662C] sm:h-4 sm:w-4"
                  aria-hidden="true"
                />
              ) : null}
            </Fragment>
          );
        })}
      </div>
      <figcaption className="border-t border-slate-200 px-4 py-3 text-xs leading-relaxed text-[#65717D] sm:px-5">
        The finished answer is a starting point—not the whole measure.
      </figcaption>
    </figure>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let tocItems = extractTocFromPortableText(
    post.body as PortableTextBlock[] | null,
  );
  let fallbackHtmlWithAnchors: string | null = null;
  if (!post.body?.length && post.fallbackHtml) {
    const { html, toc } = enrichFallbackHtmlWithToc(post.fallbackHtml);
    fallbackHtmlWithAnchors = html;
    tocItems = toc;
  }

  const showArticleTitle = tocItems.length === 0 && Boolean(post.body?.length || fallbackHtmlWithAnchors);
  if (showArticleTitle) {
    tocItems = [{ id: "article-title", text: post.title, level: 2 }];
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
      <header className="border-b border-white/10 bg-[#163460] pt-28 text-white md:pt-32">
        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-3 text-xs font-semibold text-white/65"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <ArrowLeft
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
                strokeWidth={2.5}
                aria-hidden
              />
              All articles
            </Link>
            <span aria-hidden="true" className="text-white/30">
              /
            </span>
            <span className="max-w-[15rem] truncate text-white/45">
              {post.category}
            </span>
          </nav>

          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] md:gap-10 lg:gap-14">
            <div className="max-w-3xl">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F3D09A]">
                {post.category}
              </p>
              <h1 className="animate-text-enter max-w-[19ch] font-serif text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
                {post.title}
              </h1>

              {post.excerpt ? (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
                  {post.excerpt}
                </p>
              ) : null}
            </div>

            {hasCover ? (
              <figure className="relative aspect-[16/10] overflow-hidden border border-white/15 bg-[#1A4175]">
                <Image
                  src={post.coverImageUrl!}
                  alt={`Cover: ${post.title}`}
                  fill
                  unoptimized
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 560px"
                  priority
                />
              </figure>
            ) : (
              <ArticleContextVisual />
            )}
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#1E4E8A] text-sm font-bold text-white">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {post.author}
                </p>
                {post.role ? (
                  <p className="text-xs text-white/60">{post.role}</p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <Calendar
                  className="h-4 w-4 text-[#F3D09A]"
                  strokeWidth={2}
                  aria-hidden
                />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock
                  className="h-4 w-4 text-[#8CA4C2]"
                  strokeWidth={2}
                  aria-hidden
                />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      <section
        className="bg-[#F8F6F0] py-10 md:py-14 lg:py-20"
        aria-label="Article body"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-14 lg:px-12">
          <BlogPostToc items={tocItems} />

          <article className="min-w-0 border-t border-slate-200 pt-8 sm:pt-10 md:max-w-4xl md:border-t-0 md:pt-0">
            {post.body?.length ? (
              <div
                className={`${articleInnerClass} [&_h2:first-child]:mt-0 [&_h3:first-child]:mt-0`}
              >
                {showArticleTitle ? (
                  <h2
                    id="article-title"
                    className="mb-5 scroll-mt-28 border-l-[3px] border-[#1E4E8A] pl-4 font-serif text-2xl font-bold tracking-tight text-[#163460] sm:pl-5 sm:text-3xl"
                  >
                    {post.title}
                  </h2>
                ) : null}
                <PortableText
                  value={post.body}
                  components={blogPortableTextComponents}
                />
              </div>
            ) : fallbackHtmlWithAnchors ? (
              <div className={articleInnerClass}>
                {showArticleTitle ? (
                  <h2
                    id="article-title"
                    className="mb-5 scroll-mt-28 border-l-[3px] border-[#1E4E8A] pl-4 font-serif text-2xl font-bold tracking-tight text-[#163460] sm:pl-5 sm:text-3xl"
                  >
                    {post.title}
                  </h2>
                ) : null}
                <div
                  className={fallbackArticleClass}
                  dangerouslySetInnerHTML={{
                    __html: fallbackHtmlWithAnchors,
                  }}
                />
              </div>
            ) : null}
          </article>

          <div className="mt-2 border-t border-slate-200 pt-8 sm:mt-5 sm:pt-10 md:col-start-2 md:mt-0 md:max-w-4xl">
            <BlogPostCTA />
          </div>
        </div>
      </section>
    </BlogPageShell>
  );
}
