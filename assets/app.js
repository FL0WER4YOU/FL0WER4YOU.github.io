
// Reveal-on-scroll
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}})},{threshold:.2});
window.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.reveal').forEach(el=>io.observe(el))});

// Hero animated headline trigger
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-title');
  const accent = document.querySelector('.hero-accent');
  if(!hero) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){ hero.classList.add('is-anim'); if (accent) accent.classList.add('is-anim'); obs.disconnect(); }
    });
  }, { threshold: 0.6 });
  obs.observe(hero);
});
