import Link from 'next/link';
import Image from 'next/image';
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
    .select('*, blog_authors(name, avatar_url)')
    .eq('status', 'published')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function BlogListing() {
  const posts = await getPosts();

  return (
    <div className="bg-white text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.02em] leading-[1.1]">
            Articles.
          </h1>
          <p className="text-lg max-w-xl leading-relaxed text-neutral-600 mt-3">
            Products, updates and articles about Antera Group engineering.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-[#F5F5F5] p-8 md:p-12 min-h-[420px] flex flex-col justify-between transition-colors hover:bg-[#EAEAEA]"
            >
              <div>
                {post.featured_image && (
                  <div className="aspect-video relative overflow-hidden mb-8 bg-[#EAEAEA]">
                    <Image src={post.featured_image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 bg-[#1A1A1A] text-white rounded-full">Read</span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">{new Date(post.created_at).toLocaleDateString()}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors duration-200">{post.title}</h2>
                <p className="text-base text-neutral-600 font-light leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt?.replace(/^(?:TITLE|EXCERPT|CONTENT):\s*/gi, '').trim() ||
                   post.content?.replace(/<[^>]*>/g, '').replace(/^(?:TITLE|EXCERPT|CONTENT):\s*/gi, '').trim().substring(0, 160)}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-neutral-300">
                <div className="relative w-8 h-8 bg-neutral-300 overflow-hidden">
                  <Image
                    src={post.blog_authors?.avatar_url || '/antera-logo.jpeg'}
                    alt={post.blog_authors?.name || 'Antera Team'}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-medium tracking-wide text-neutral-600">{post.blog_authors?.name || 'Antera Team'}</span>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 bg-[#F5F5F5]">
            <p className="font-medium text-neutral-500">No articles found at the moment.</p>
          </div>
        )}

        <div className="mt-20">
          <BlogCTA />
        </div>
      </div>
    </div>
  );
}