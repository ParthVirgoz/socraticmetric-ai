import { BlogHero, BlogPageShell } from "@/components/blog/BlogPageShell";
import { BlogListing } from "@/components/blog/BlogListing";
import { getBlogPosts } from "@/lib/sanity/posts";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <BlogPageShell>
      <BlogHero />
      <section
        className="relative overflow-hidden border-t border-slate-200/70 pb-16 pt-6 md:pb-20 md:pt-8 lg:pb-24"
        aria-label="Blog articles"
      >
        <div className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 xl:px-14">
          <BlogListing posts={posts} />
        </div>
      </section>
    </BlogPageShell>
  );
}
