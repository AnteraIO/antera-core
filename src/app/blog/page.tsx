import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import BlogCTA from '@/components/BlogCTA';

export const dynamic = 'force-dynamic';

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
    <div className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <header className="mb-24 md:mb-40 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.03em] leading-[0.95]">
            Articles.
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed text-neutral-500 mx-auto mt-6">
            Products, updates and articles about Antera Group engineering.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-neutral-200 bg-white">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className={`group border-b ${i % 3 !== 2 ? 'lg:border-r' : ''} ${i < 3 ? 'md:border-b' : ''} border-neutral-200 hover:bg-neutral-50/50 transition-colors`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Link href={`/blog/${post.slug}`} className="block p-8 md:p-12 min-h-[420px] flex flex-col justify-between">
                {post.featured_image && (
                  <div className="aspect-video relative border border-neutral-200 overflow-hidden mb-8">
                    <Image src={post.featured_image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-1 bg-black text-white">Read</span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 group-hover:text-[#FA520F] transition-colors">{post.title}</h2>
                  <p className="text-base text-neutral-500 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt?.replace(/^(?:TITLE|EXCERPT|CONTENT):\s*/gi, '').trim() ||
                     post.content?.replace(/<[^>]*>/g, '').replace(/^(?:TITLE|EXCERPT|CONTENT):\s*/gi, '').trim().substring(0, 160)}
                  </p>
                  <div className="flex items-center gap-3 pt-6 border-t border-neutral-200">
                    <div className="relative w-8 h-8 bg-neutral-200 overflow-hidden border border-neutral-300">
                      <Image
                        src={post.blog_authors?.avatar_url || '/antera-logo.jpeg'}
                        alt={post.blog_authors?.name || 'Antera Team'}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase font-mono">{post.blog_authors?.name || 'Antera Team'}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 border border-dashed border-neutral-200">
            <p className="font-mono text-neutral-400">No articles found at the moment.</p>
          </div>
        )}

        <div className="mt-20">
          <BlogCTA />
        </div>
      </div>
    </div>
  );
}