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

function stripPrefix(str: string) {
  return str?.replace(/^(?:TITLE|EXCERPT|CONTENT):\s*/gi, '').trim();
}

export default async function BlogListing() {
  const posts = await getPosts();

  const patterns = [
    { span: 'md:col-span-8', height: 'h-[520px]', bg: 'bg-[#E8ECEF]', text: 'text-black', sub: 'text-black/70' },
    { span: 'md:col-span-4', height: 'h-[520px]', bg: 'bg-[#0A0A0A]', text: 'text-white', sub: 'text-white/70' },
    { span: 'md:col-span-4', height: 'h-[460px]', bg: 'bg-[#0D2A6B]', text: 'text-white', sub: 'text-white/70' },
    { span: 'md:col-span-4', height: 'h-[460px]', bg: 'bg-[#E6007E]', text: 'text-white', sub: 'text-white/70' },
    { span: 'md:col-span-4', height: 'h-[460px]', bg: 'bg-[#FFC72C]', text: 'text-black', sub: 'text-black/70' },
    { span: 'md:col-span-6', height: 'h-[480px]', bg: 'bg-[#0A0A0A]', text: 'text-white', sub: 'text-white/70' },
    { span: 'md:col-span-6', height: 'h-[480px]', bg: 'bg-[#E8ECEF]', text: 'text-black', sub: 'text-black/70' },
    { span: 'md:col-span-5', height: 'h-[480px]', bg: 'bg-[#0D2A6B]', text: 'text-white', sub: 'text-white/70' },
    { span: 'md:col-span-7', height: 'h-[480px]', bg: 'bg-[#E6007E]', text: 'text-white', sub: 'text-white/70' },
  ];

  return (
    <div className="bg-white text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {posts.map((post, index) => {
            const pattern = patterns[index % patterns.length];
            const excerpt =
              stripPrefix(post.excerpt || '') ||
              stripPrefix(post.content?.replace(/<[^>]*>/g, '') || '').substring(0, 160);

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`group relative overflow-hidden flex flex-col justify-between p-8 md:p-10 cursor-pointer ${pattern.bg} ${pattern.text} ${pattern.span} ${pattern.height}`}
              >
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] leading-[1.05] max-w-[90%]">
                  {post.title}
                </h2>

                <p className={`text-lg md:text-xl ${pattern.sub} leading-snug max-w-lg`}>
                  {excerpt}
                </p>
              </Link>
            );
          })}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 bg-[#E8ECEF]">
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