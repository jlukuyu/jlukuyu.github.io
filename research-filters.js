const panel=document.querySelector('[data-research-filter]');
if(panel){
 const projects=[...document.querySelectorAll('[data-project]')];
 const buttons=[...panel.querySelectorAll('button')];
 let activeTheme='all',activeSub='',activeStatus='all',activeFunding='all';
 function filter(theme=activeTheme,sub=activeSub,status=activeStatus,funding=activeFunding){
  activeTheme=theme;activeSub=sub;activeStatus=status;activeFunding=funding;
  let count=0;
  for(const p of projects){p.hidden=!((funding==='all'||p.dataset.funding===funding)&&(status==='all'||p.dataset.status===status)&&(theme==='all'||p.dataset.themes.split(' ').includes(theme))&&(!sub||p.dataset.subthemes.split(' ').includes(sub)));if(!p.hidden)count++;}
  for(const b of buttons)b.setAttribute('aria-pressed',String(b.dataset.funding?b.dataset.funding===funding:b.dataset.status?b.dataset.status===status:b.dataset.subtheme?b.dataset.subtheme===sub:b.dataset.theme===theme&&!sub));
  panel.querySelector('[data-research-count]').textContent=`${count} projects shown`;
  for(const section of document.querySelectorAll('[data-theme-group]'))section.hidden=!section.querySelector('[data-project]:not([hidden])');
 }
 for(const b of buttons)b.addEventListener('click',()=>b.dataset.funding?filter(activeTheme,activeSub,activeStatus,b.dataset.funding):b.dataset.status?filter(activeTheme,activeSub,b.dataset.status):filter(b.dataset.theme||'technology',b.dataset.subtheme||'',activeStatus));
 function reveal(){const target=document.getElementById(({'project-electric-cooking-kampala':'project-spotlight-kampala','project-minigrid-capacity':'project-energizing-communities'})[decodeURIComponent(location.hash.slice(1))]||decodeURIComponent(location.hash.slice(1)));if(target?.matches('[data-project]')){filter('all','','all','all');target.open=true;target.scrollIntoView({block:'start'});}}
 panel.hidden=false;filter();reveal();window.addEventListener('hashchange',reveal);
}
