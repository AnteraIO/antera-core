import Link from 'next/link';

type BlogCardPost = {
  slug: string;
  title: string;
  excerpt?: string | null;
  content?: string | null;
};

function stripPrefix(str?: string | null): string {
  return str?.replace(/^(?:TITLE|EXCERPT|CONTENT):\s*/gi, '').trim() ?? '';
}

export const BlogCard = ({
  post,
  titleAs: Title = 'h2',
}: {
  post: BlogCardPost;
  titleAs?: 'h2' | 'h3' | 'h4';
}) => {
  const excerpt =
    stripPrefix(post.excerpt) ||
    stripPrefix(post.content?.replace(/<[^>]*>/g, '') || '').substring(0, 160);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col min-h-[16rem] bg-white text-inherit no-underline overflow-hidden transition-colors duration-150 hover:bg-neutral-50"
    >
      <span
        aria-hidden="true"
        className="liquid-edge pointer-events-none absolute inset-1 z-[3] rounded-[1.75rem]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-no-repeat bg-right-bottom bg-auto opacity-90 transition-opacity duration-200 group-hover:opacity-95"
        style={{
          backgroundImage: "url('/for-card.png')",
          backgroundSize: 'auto 100%',
          maskImage: 'linear-gradient(to right, transparent 30%, #000 70%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 30%, #000 70%)',
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to right, #ffffff 0%, #ffffff 54%, transparent 82%)' }}
      />

      <div className="relative z-[2] flex flex-col gap-1.5 flex-1 max-w-[56%] px-4 pt-4 pb-4">
        <Title className="font-mono text-base font-normal leading-snug tracking-tight text-neutral-900">
          {post.title}
        </Title>
        {excerpt && (
          <p className="font-sans text-sm leading-relaxed text-neutral-500 line-clamp-4">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;
