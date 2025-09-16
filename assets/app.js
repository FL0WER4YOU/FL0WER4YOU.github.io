
/* Shared JS for Prannabis Club Germany */
(function(){
  // Year stamp for footer if present
  document.addEventListener('DOMContentLoaded', function(){
    var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  });

  // Reveal-on-scroll
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  });

  // Alpine helpers exposed on window for x-data bindings
  window.shopApp = function(){
    return {
      products:[
        {id:'ls-a',title:'CBD Blüte – Indoor A',excerpt:'Kleine Charge, handgetrimmt.',price:22.00,image:'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1600&auto=format&fit=crop'},
        {id:'ls-b',title:'CBD Blüte – Indoor B',excerpt:'Organisch, familiengeführt.',price:22.00,image:'https://images.unsplash.com/photo-1552074284-5cfef25adf16?q=80&w=1600&auto=format&fit=crop'},
        {id:'ls-c',title:'CBD Blüte – Indoor C',excerpt:'Living Soil seit 2022.',price:19.90,image:'https://images.unsplash.com/photo-1541976076758-347942db1974?q=80&w=1600&auto=format&fit=crop'}
      ],
      formatPrice: v => new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(v)
    };
  };
  window.faqApp = function(){
    return {
      faqs:[
        {q:'Wie baut ihr an?',a:'Indoor im Living-Soil-System auf 100-L Stofftöpfen, seit 2022 dauerhaft aktiv.'},
        {q:'Was bedeutet Living Soil?',a:'Biologisch aktiver Boden mit Mikroorganismen und Kompost – ein funktionierendes Ökosystem.'},
        {q:'Welche Beleuchtung?',a:'Wir nutzen HPS für dichte, aromatische Blüten.'},
        {q:'Wie groß ist eure Anlage?',a:'Ca. 220 m², davon ~50 m² Veg-Raum und ~80 m² Blüte.'},
        {q:'Versand & Verpackung',a:'Diskret verpackt, schneller Versand innerhalb Deutschlands.'}
      ]
    };
  };
})();
