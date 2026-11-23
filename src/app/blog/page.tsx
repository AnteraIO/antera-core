import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import BlogCTA from '@/components/BlogCTA';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog & Engineering Articles',
  description: 'Explore the latest updates, products, and engineering articles from the Antera Team.',
};

async function getPosts() {
  const { data } = await supabase
    .from('blog_posts')
    .select('*, blog_categories(name, slug)')
    .eq('status', 'published')
    .order('created_at', { ascending: false });
  return data || [];
}

function stripPrefix(str: string) {
  return str?.replace(/^(?:TITLE|EXCERPT|CONTENT):\s*/gi, '').trim();
}

export default async function BlogListing() {
  const posts = await getPosts();

  return (
    <div className="bg-white text-black min-h-screen py-24 md:py-32 selection:bg-black/10">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-neutral-200">
          {posts.map((post) => {
            const excerpt =
              stripPrefix(post.excerpt || '') ||
              stripPrefix(post.content?.replace(/<[^>]*>/g, '') || '').substring(0, 160);

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col min-h-[16rem] border-r border-b border-neutral-200 bg-white text-inherit no-underline overflow-hidden transition-colors duration-150 hover:bg-neutral-50"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-0 bg-no-repeat bg-right-bottom bg-auto opacity-90 transition-opacity duration-200 group-hover:opacity-95"
                  style={{ backgroundImage: "url('/for-card.png')", backgroundSize: 'auto 100%', maskImage: 'linear-gradient(to right, transparent 30%, #000 70%)', WebkitMaskImage: 'linear-gradient(to right, transparent 30%, #000 70%)' }}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-[1] pointer-events-none"
                  style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff 54%, transparent 82%)' }}
                />

                <div className="relative z-[2] flex flex-col gap-1.5 flex-1 max-w-[56%] px-4 pt-4 pb-4">
                  <h2 className="font-mono text-base font-normal leading-snug tracking-tight text-neutral-900">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm leading-relaxed text-neutral-500 line-clamp-4">
                    {excerpt}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 border border-neutral-200 bg-neutral-50">
            <p className="font-medium text-neutral-600">No articles found at the moment.</p>
          </div>
        )}

        <div className="mt-20">
          <BlogCTA />
        </div>
      </div>
    </div>
  );
}
