import { useEffect, useRef } from 'react';

export default function AnimatedSection({
  children,
  className = '',
  animation = 'reveal', // reveal | reveal-left | reveal-right | reveal-scale
  delay = 0,
  threshold = 0.12,
  as: Tag = 'div',
  style = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayStyle = delay ? { transitionDelay: `${delay}s` } : {};

  return (
    <Tag
      ref={ref}
      className={`${animation} ${className}`}
      style={{ ...delayStyle, ...style }}
    >
      {children}
    </Tag>
  );
}
