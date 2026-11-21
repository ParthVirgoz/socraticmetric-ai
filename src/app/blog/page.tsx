import { BlogHero, BlogPageShell } from "@/components/blog/BlogPageShell";
import { BlogListing } from "@/components/blog/BlogListing";
import { getBlogPosts } from "@/lib/sanity/posts";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <BlogPageShell>
      <BlogHero />
      <section
        className="bg-[#F8F6F0] py-10 md:py-14 lg:py-16"
        aria-label="Blog articles"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <BlogListing posts={posts} />
        </div>
      </section>
    </BlogPageShell>
  );
}
