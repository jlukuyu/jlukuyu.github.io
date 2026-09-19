/* Progressive enhancement: native horizontal gallery remains usable without JS. */
for (const gallery of document.querySelectorAll('[data-gallery]')) {
 const slides=[...gallery.querySelectorAll('.gallery-slide')];
 const controls=gallery.querySelector('.gallery-controls');
 const status=gallery.querySelector('[data-gallery-status]');
 const previous=gallery.querySelector('[data-gallery-prev]');
 const next=gallery.querySelector('[data-gallery-next]');
 const play=gallery.querySelector('[data-gallery-play]');
 const track=gallery.querySelector('.gallery-track');
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let index=0,timer=null,playing=!motion.matches,hovered=false;
 function show(n){
  index=(n+slides.length)%slides.length;
  slides.forEach((slide,i)=>{
   slide.classList.toggle('is-active',i===index);
   slide.setAttribute('aria-hidden',String(i!==index));
   slide.inert=i!==index;
  });
  status.textContent=`${index+1} / ${slides.length}`;
 }
 function sync(){
  if(timer!==null)clearInterval(timer);
  timer=null;
  play.textContent=playing?'Pause slideshow':'Play slideshow';
  play.setAttribute('aria-pressed',String(playing));
  status.setAttribute('aria-live',playing?'off':'polite');
  if(playing&&!hovered&&!document.hidden)timer=setInterval(()=>show(index+1),5000);
 }
 function pause(){playing=false;sync();}
 function advance(delta){pause();show(index+delta);}
 previous.addEventListener('click',()=>advance(-1));
 next.addEventListener('click',()=>advance(1));
 play.addEventListener('click',()=>{playing=!playing;sync();});
 track.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();advance(e.key==='ArrowRight'?1:-1);}
 });
 // Stop before a keyboard user enters slide links; resume only on request.
 track.addEventListener('focusin',pause);
 gallery.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){hovered=true;sync();}});
 gallery.addEventListener('pointerleave',()=>{hovered=false;sync();});
 document.addEventListener('visibilitychange',sync);
 motion.addEventListener('change',e=>{if(e.matches)pause();});
 show(0);gallery.classList.add('enhanced');controls.hidden=false;sync();
}
