
document.addEventListener('DOMContentLoaded', () => {
  // cart count (placeholder)
  window.cartCount = 0;
  // hide badge when zero
  document.querySelectorAll('.badge').forEach(b => {
    const val = (window.cartCount||0);
    b.textContent = val ? String(val) : '';
  });

  // Typewriter
  const el = document.getElementById('typewriter');
  if(!el) return;
  const words = ["Ehrlich.", "Organisch.", "Handgemacht."];
  const speed=80, pause=1100, erase=40;
  let i=0, j=0, del=false;
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  (function step(){
    const w = words[i % words.length];
    if(!del){
      j++; el.textContent = w.slice(0,j);
      if(j===w.length){
        if(reduced){ i++; j=0; }
        setTimeout(()=>{ del = !reduced; if(reduced){ step(); } }, pause);
      }
    } else {
      j--; el.textContent = w.slice(0,j);
      if(j===0){ del=false; i++; }
    }
    const d = del ? erase : speed;
    if(!(reduced && j===0)) setTimeout(step, d);
  })();
});
