// Footer year
document.querySelectorAll("[data-year]").forEach(function(el){ el.textContent = new Date().getFullYear(); });

// Scroll reveal (respects reduced motion)
(function(){
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".reveal");
  if(reduce || !("IntersectionObserver" in window)){
    els.forEach(function(el){ el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold:0.12, rootMargin:"0px 0px -8% 0px" });
  els.forEach(function(el){ io.observe(el); });
})();
