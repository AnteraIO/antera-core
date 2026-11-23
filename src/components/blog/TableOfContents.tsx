'use client';

import { useEffect, useState } from 'react';

type TocItem = {
  level: number;
  text: string;
  id: string;
};

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!items.length) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-112px 0px -70% 0px', threshold: 0 }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="bg-[#2A2A2A] rounded-lg p-1.5 shadow-sm">
      <h4 className="px-4 pt-3 pb-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-400 border-b border-white/10">
        Table of Contents
      </h4>

      <ul className="flex flex-col gap-0.5 mt-1.5">
        {items.length > 0 ? (
          items.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <li key={`${item.id}-${idx}`}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={`rounded-md py-2 pr-4 text-[13px] font-medium leading-snug transition-all duration-200 line-clamp-2 break-words ${
                    item.level === 3 ? 'pl-7 text-[12px]' : 'pl-4'
                  } ${
                    isActive
                      ? 'bg-black text-white shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })
        ) : (
          <li className="px-4 py-2.5 text-[12px] text-gray-400 italic">No headings</li>
        )}
      </ul>
    </nav>
  );
}
