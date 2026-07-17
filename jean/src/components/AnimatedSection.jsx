import { useEffect, useRef } from 'react';

export default function AnimatedSection({ children, className = '', tag: Tag = 'section', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    const targets = el.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-fade');
    targets.forEach(t => obs.observe(t));
    if (el.classList.contains('reveal') || el.classList.contains('reveal-left') ||
        el.classList.contains('reveal-right') || el.classList.contains('reveal-scale')) {
      obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return <Tag ref={ref} className={className} {...props}>{children}</Tag>;
}
