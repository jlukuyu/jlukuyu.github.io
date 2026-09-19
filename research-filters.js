const panel=document.querySelector('[data-research-filter]');
if(panel){
 const projects=[...document.querySelectorAll('[data-project]')];
 const buttons=[...panel.querySelectorAll('button')];
 function filter(theme='all',sub=''){
  let count=0;
  for(const p of projects){p.hidden=!((theme==='all'||p.dataset.themes.split(' ').includes(theme))&&(!sub||p.dataset.subthemes.split(' ').includes(sub)));if(!p.hidden)count++;}
  for(const b of buttons)b.setAttribute('aria-pressed',String(b.dataset.subtheme?b.dataset.subtheme===sub:b.dataset.theme===theme&&!sub));
  panel.querySelector('[data-research-count]').textContent=`${count} projects shown`;
  for(const section of document.querySelectorAll('[data-funding-group]'))section.querySelector('[data-no-results]').hidden=!!section.querySelector('[data-project]:not([hidden])');
 }
 for(const b of buttons)b.addEventListener('click',()=>filter(b.dataset.theme||'technology',b.dataset.subtheme||''));
 function reveal(){const target=document.getElementById(({'project-electric-cooking-kampala':'project-spotlight-kampala','project-minigrid-capacity':'project-energizing-communities'})[decodeURIComponent(location.hash.slice(1))]||decodeURIComponent(location.hash.slice(1)));if(target?.matches('[data-project]')){filter();target.open=true;target.scrollIntoView({block:'start'});}}
 panel.hidden=false;filter();reveal();window.addEventListener('hashchange',reveal);
}
