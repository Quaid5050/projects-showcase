import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const raf = requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll('section, .page-hero')).filter(el => !el.dataset.revealInit);
      sections.forEach(el => {
        el.dataset.revealInit = 'true';
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      });

      const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            sectionObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      sections.forEach(el => sectionObserver.observe(el));

      // Stagger-animate grid/card children (service cards, testimonials, why-us, gallery, etc.)
      const grids = Array.from(document.querySelectorAll('[style*="grid-template-columns"]')).filter(el => !el.dataset.revealGrid);
      grids.forEach(grid => {
        grid.dataset.revealGrid = 'true';
        const children = Array.from(grid.children);
        children.forEach(child => {
          child.style.opacity = '0';
          child.style.transform = 'translateY(24px) scale(0.98)';
          child.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        });

        const gridObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              children.forEach((child, i) => {
                setTimeout(() => {
                  child.style.opacity = '1';
                  child.style.transform = 'translateY(0) scale(1)';
                }, i * 90);
              });
              gridObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });

        gridObserver.observe(grid);
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}
