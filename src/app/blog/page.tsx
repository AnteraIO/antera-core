import { supabase } from '@/lib/supabase';
import BlogCTA from '@/components/BlogCTA';
import { BlogCard } from '@/components/blog/BlogCard';
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

export default async function BlogListing() {
  const posts = await getPosts();

  return (
    <div className="bg-white text-black min-h-screen py-24 md:py-32 selection:bg-black/10">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
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
