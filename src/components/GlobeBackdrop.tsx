import Image from 'next/image';
import globe from '@/assets/image (12).png';

/**
 * Soft globe artwork used behind the two-line section headings.
 * The image is faded out at the bottom so it blends into the white section.
 */
export const GlobeBackdrop = ({ className = '' }: { className?: string }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute left-1/2 top-[-30px] z-0 w-[720px] -translate-x-1/2 opacity-25 md:w-[920px] ${className}`}
    style={{
      maskImage: 'linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 62%, transparent 100%)',
    }}
  >
    <Image
      src={globe}
      alt=""
      className="h-auto w-full select-none"
      sizes="(max-width: 768px) 720px, 920px"
    />
  </div>
);

export default GlobeBackdrop;
