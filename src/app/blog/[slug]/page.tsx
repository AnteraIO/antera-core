import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Eye } from 'lucide-react';
import ViewCounter from '@/components/blog/ViewCounter';
import TableOfContents from '@/components/blog/TableOfContents';
import { BlogCard } from '@/components/blog/BlogCard';

const SHARE_X = 'https://cdn-icons-png.flaticon.com/128/14417/14417460.png';
const SHARE_MAIL = 'https://cdn-icons-png.flaticon.com/128/18393/18393922.png';
const SHARE_LINK = 'https://cdn-icons-png.flaticon.com/128/4922/4922073.png';

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
        .select('title, slug, excerpt, content, featured_image, created_at')
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.featured_image,
    datePublished: post.created_at,
    dateModified: post.updated_at || post.created_at,
    author: {
      '@type': 'Organization',
      name: 'Antera Team',
      logo: 'https://antera.co.tz/logo.png',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ANTERA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://antera.co.tz/logo.png',
      },
    },
    description: post.excerpt,
  };

  return (
    <article className="bg-[#FAFAF8] text-black min-h-screen py-24 md:py-32 selection:bg-black/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-[-0.03em] leading-[1.0] md:leading-[0.95] mb-8 text-balance">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm font-bold uppercase tracking-wide">{post.blog_authors?.name || 'Antera Team'}</p>
          </div>
        </header>

        {post.featured_image && (
          <div className="max-w-5xl mx-auto mb-24 md:mb-40 relative aspect-video border border-neutral-200">
            <Image src={post.featured_image} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-5xl mx-auto">
          <aside className="lg:col-span-4">
            <div className="sticky top-32">
              <TableOfContents items={toc} />
            </div>
          </aside>

          <div className="lg:col-span-8">
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
                    return <h2 id={id} {...props} className={`${props.className || ''} scroll-mt-32`.trim()} />
                  },
                  h3: ({node: _, ...props}) => {
                    const text = String(props.children || '').replace(/<[^>]*>/g, '');
                    const id = props.id || text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                    return <h3 id={id} {...props} className={`${props.className || ''} scroll-mt-32`.trim()} />
                  },
                  th: ({node: _, className, ...props}) => (
                    <th
                      {...props}
                      className={`p-3 text-[15px] font-medium text-[#2A2A2A] text-left align-bottom ${className || ''}`.trim()}
                    />
                  )
                }}
              >
                {displayContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex items-center justify-center gap-6 mb-24">
          <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Share post:</span>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <img src={SHARE_X} alt="Share on X" width={22} height={22} />
          </a>
          <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${shareUrl}`} className="hover:opacity-70 transition-opacity">
            <img src={SHARE_MAIL} alt="Share via Email" width={22} height={22} />
          </a>
          <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <img src={SHARE_LINK} alt="Copy link" width={22} height={22} />
          </a>
        </div>

        {relatedPosts.length > 0 && (
          <section className="pt-24 border-t border-neutral-200 max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-12">Recommended Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {relatedPosts.map((rp) => (
                <BlogCard key={rp.slug} post={rp} titleAs="h4" />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}