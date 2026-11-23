'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type TypingHeadingProps = {
  line1: string;
  line2: string;
  as?: 'h1' | 'h2';
  className?: string;
  line1ClassName?: string;
  line2ClassName?: string;
  underline?: boolean;
  speed?: number;
};

const Cursor = () => (
  <motion.span
    aria-hidden
    animate={{ opacity: [1, 1, 0, 0] }}
    transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: 'linear' }}
    className="ml-[0.12em] inline-block h-[0.72em] w-[0.07em] translate-y-[0.05em] bg-current align-baseline"
  />
);

/**
 * Two-line section heading that types itself out when scrolled into view.
 * The full text is rendered invisibly underneath the typed text so the layout
 * never jumps while characters appear.
 */
export const TypingHeading = ({
  line1,
  line2,
  as: Tag = 'h1',
  className = '',
  line1ClassName = 'text-black',
  line2ClassName = 'text-[#00D8FF]',
  underline = false,
  speed = 45,
}: TypingHeadingProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const total = line1.length + line2.length;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setCount(total);
      return;
    }

    let current = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      current += 1;
      setCount(current);
      if (current < total) {
        // Short pause between the first and second line.
        timer = setTimeout(tick, current === line1.length ? 350 : speed);
      }
    };

    setCount(0);
    timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, [isInView, reduceMotion, total, line1.length, speed]);

  const typed1 = line1.slice(0, Math.min(count, line1.length));
  const typed2 = line2.slice(0, Math.max(0, count - line1.length));
  const typingSecondLine = count >= line1.length;
  const done = count >= total;
  const showCursor = isInView && !done && !reduceMotion;

  return (
    <Tag ref={ref} aria-label={`${line1} ${line2}`} className={className}>
      <span className={`grid ${line1ClassName}`}>
        <span className="invisible col-start-1 row-start-1" aria-hidden>
          {line1}
        </span>
        <span className="col-start-1 row-start-1" aria-hidden>
          {typed1}
          {showCursor && !typingSecondLine && <Cursor />}
        </span>
      </span>
      <span className={`relative grid ${line2ClassName}`}>
        <span className="invisible col-start-1 row-start-1" aria-hidden>
          {line2}
        </span>
        <span className="col-start-1 row-start-1" aria-hidden>
          {typed2}
          {showCursor && typingSecondLine && <Cursor />}
        </span>
        {underline && (
          <motion.span
            aria-hidden
            initial={{ width: 0, opacity: 0 }}
            animate={done ? { width: '42%', opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00D8FF]/0 via-[#00D8FF] to-[#00D8FF]/0"
          />
        )}
      </span>
    </Tag>
  );
};

export default TypingHeading;
