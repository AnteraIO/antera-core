import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Share2, Mail, ExternalLink, Eye } from 'lucide-react';
import ViewCounter from '@/components/blog/ViewCounter';

export const dynamic = 'force-dynamic';

async function getPost(slug: string) {
  const { data } = await supabase
    .from('blog_posts')
    .select('*, blog_authors(*), blog_categories(*)')
    .eq('slug', slug)
    .single();
  return data;
}

async function getRelatedPosts(categoryId: string, currentPostId: string) {
    const { data } = await supabase
        .from('blog_posts')
        .select('title, slug, featured_image, created_at')
        .eq('category_id', categoryId)
        .neq('id', currentPostId)
        .eq('status', 'published')
        .limit(3);
    return data || [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Blog Post`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featured_image ? [post.featured_image] : [],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  let displayContent = post.content;

  if (displayContent.includes('CONTENT:')) {
    const contentMatch = displayContent.match(/CONTENT:\s*([\s\S]*)/i);
    if (contentMatch) {
      displayContent = contentMatch[1].trim();
    }
  } else {
    try {
      const cleaned = displayContent.replace(/```json\n?|\n?```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      if (parsed.content) displayContent = parsed.content;
      else if (typeof parsed === 'string') displayContent = parsed;
    } catch (e) {

    }
  }

  displayContent = displayContent.replace(/^```(markdown|html)\n([\s\S]*)\n```$/i, '$2');

  const toc: { level: number; text: string; id: string }[] = [];
  const headingRegex = /(?:^(#{2,3})\s+(.*)$)|(?:<(h[2-3])(?:\s+[^>]*?id="([^"]*)")?[^>]*?>([\s\S]*?)<\/\3>)/gm;
  let match;

  while ((match = headingRegex.exec(displayContent)) !== null) {
    let level = 0;
    let text = '';
    let id = '';

    if (match[1]) {
      level = match[1].length;
      text = match[2].trim().replace(/[*_#]/g, '');
    } else if (match[3]) {
      level = parseInt(match[3][1]);
      text = match[5].replace(/<[^>]*>/g, '').trim();
      id = match[4] || '';
    }

    if (!id) {
      id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    }

    if (text) {
      toc.push({ level, text, id });
    }
  }

  const relatedPosts = post.category_id ? await getRelatedPosts(post.category_id, post.id) : [];
  const readingTime = Math.ceil(displayContent.split(/\s+/).length / 200);
  const shareUrl = `https://www.antera.co.tz/blog/${slug}`;

  return (
    <article className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-[#FA520F] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <ViewCounter postId={post.id} />
        
        <header className="max-w-4xl mx-auto mb-24 md:mb-40 text-center">
          <div className="flex items-center justify-center gap-4 mb-6 text-xs font-mono text-neutral-400 uppercase">
            <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{readingTime} min read</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Eye size={12} /> {post.views || 0}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-[-0.03em] leading-[0.95] mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 bg-neutral-200 overflow-hidden border border-neutral-300">
              <Image
                src={post.blog_authors?.avatar_url || '/antera-logo.jpeg'}
                alt={post.blog_authors?.name || 'Antera Team'}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-bold uppercase tracking-wide">{post.blog_authors?.name || 'Antera Team'}</p>
          </div>
        </header>

        {post.featured_image && (
          <div className="max-w-5xl mx-auto mb-24 md:mb-40 relative aspect-video border border-neutral-200">
            <Image src={post.featured_image} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-5xl mx-auto">
          <aside className="lg:col-span-3">
            <div className="sticky top-32">
              <div className="p-6 border border-neutral-200 bg-white">
                <h4 className="text-xs font-bold uppercase mb-6 border-b border-neutral-200 pb-2 tracking-widest">Table of Contents</h4>
                <ul className="space-y-4">
                  {toc.length > 0 ? toc.map((item, idx) => (
                    <li key={idx} className={`text-[10px] font-bold uppercase tracking-tight ${item.level === 3 ? 'ml-4 opacity-60' : ''}`}>
                      <a href={`#${item.id}`} className="hover:text-[#FA520F] transition-colors line-clamp-2 leading-tight">
                        {item.text}
                      </a>
                    </li>
                  )) : (
                    <li className="text-[10px] font-mono text-neutral-400 italic">No headings</li>
                  )}
                </ul>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="prose prose-neutral max-w-3xl mx-auto mb-32 text-neutral-800
              prose-headings:text-neutral-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-[32px] prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-none
              prose-h3:text-[24px] prose-h3:mt-12 prose-h3:mb-4
              prose-p:text-[19px] prose-p:leading-[32px] prose-p:text-neutral-800 prose-p:mb-8
              prose-pre:bg-neutral-900 prose-pre:text-neutral-50 prose-pre:rounded-lg prose-pre:border-none prose-pre:p-6
              prose-blockquote:border-l-4 prose-blockquote:border-neutral-300 prose-blockquote:font-normal prose-blockquote:italic prose-blockquote:bg-transparent prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-10 prose-blockquote:text-neutral-600
              prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8
              prose-li:text-[19px] prose-li:leading-[32px]
              prose-table:border-none prose-table:my-12
              prose-th:border-b prose-th:border-neutral-300 prose-th:p-3 prose-th:text-sm prose-th:font-bold
              prose-td:p-3 prose-td:border-b prose-td:border-neutral-200 prose-td:text-[17px]
              prose-a:text-black prose-a:font-normal prose-a:underline prose-a:decoration-neutral-400 hover:prose-a:decoration-black
              prose-strong:font-bold prose-strong:text-black
              prose-img:border-none prose-img:shadow-none prose-img:rounded-lg prose-img:my-12
            ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h2: ({node: _, ...props}) => {
                    const text = String(props.children || '').replace(/<[^>]*>/g, '');
                    const id = props.id || text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                    return <h2 id={id} {...props} />
                  },
                  h3: ({node: _, ...props}) => {
                    const text = String(props.children || '').replace(/<[^>]*>/g, '');
                    const id = props.id || text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                    return <h3 id={id} {...props} />
                  }
                }}
              >
                {displayContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4 mb-24">
          <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Share post:</span>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all">
            <Share2 size={14} />
          </a>
          <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${shareUrl}`} className="p-3 border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all">
            <Mail size={14} />
          </a>
          <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all">
            <ExternalLink size={14} />
          </a>
        </div>

        {relatedPosts.length > 0 && (
          <section className="pt-24 border-t border-neutral-200 max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-12">Recommended Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-200 bg-white">
              {relatedPosts.map((rp, i) => (
                <Link 
                  key={rp.slug} 
                  href={`/blog/${rp.slug}`} 
                  className={`group block p-8 md:p-12 min-h-[360px] flex flex-col justify-between hover:bg-neutral-50/50 transition-colors ${i % 3 !== 2 ? 'md:border-r' : ''} border-b md:border-b-0 border-neutral-200`}
                >
                  {rp.featured_image && (
                    <div className="aspect-[16/10] relative mb-6 overflow-hidden bg-neutral-100 border border-neutral-200">
                      <Image src={rp.featured_image} alt={rp.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="mt-auto">
                    <h4 className="text-xl md:text-2xl font-medium tracking-tight mb-4 group-hover:text-[#FA520F] transition-colors">
                      {rp.title}
                    </h4>
                    <div className="mt-auto pt-4 border-t border-neutral-200 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">Read Article</span>
                      <span className="text-neutral-900 font-mono text-sm">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}