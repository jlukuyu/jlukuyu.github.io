/* Progressive enhancement: native horizontal gallery remains usable without JS. */
for (const gallery of document.querySelectorAll('[data-gallery]')) {
 const slides=[...gallery.querySelectorAll('.gallery-slide')];
 const controls=gallery.querySelector('.gallery-controls');
 const status=gallery.querySelector('[data-gallery-status]');
 const previous=gallery.querySelector('[data-gallery-prev]');
 const next=gallery.querySelector('[data-gallery-next]');
 const play=gallery.querySelector('[data-gallery-play]');
 const track=gallery.querySelector('.gallery-track');
 let index=0,timer=null;
 function show(n){
  index=(n+slides.length)%slides.length;
  slides.forEach((slide,i)=>{slide.hidden=i!==index;});
  status.textContent=`${index+1} / ${slides.length}`;
 }
 function pause(){
  if(timer!==null)clearInterval(timer);
  timer=null;play.textContent='Play slideshow';play.setAttribute('aria-pressed','false');status.setAttribute('aria-live','polite');
 }
 function advance(delta){pause();show(index+delta);}
 previous.addEventListener('click',()=>advance(-1));
 next.addEventListener('click',()=>advance(1));
 play.addEventListener('click',()=>{
  if(timer!==null){pause();return;}
  play.textContent='Pause slideshow';play.setAttribute('aria-pressed','true');status.setAttribute('aria-live','off');
  timer=setInterval(()=>show(index+1),6500);
 });
 track.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();advance(e.key==='ArrowRight'?1:-1);}
 });
 gallery.addEventListener('focusin',pause);
 gallery.addEventListener('pointerenter',pause);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});
 // Playback is opt-in, including for users who prefer reduced motion.
 gallery.classList.add('enhanced');controls.hidden=false;show(0);
}
