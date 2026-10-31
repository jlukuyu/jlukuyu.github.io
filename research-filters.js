const panel=document.querySelector('[data-research-filter]');
if(panel){
 const projects=[...document.querySelectorAll('[data-project]')];
 const selects=Object.fromEntries([...panel.querySelectorAll('select')].map(s=>[s.dataset.filter,s]));
 const drawer=document.querySelector('.project-drawer'),host=drawer.querySelector('[data-drawer-content]');
 let selected=null,content=null,opener=null;
 function filter(){
  const {theme,sub,status,funding,type}=Object.fromEntries(Object.entries(selects).map(([k,s])=>[k,s.value]));
  let count=0;
  for(const p of projects){
   p.hidden=!((theme==='all'||p.dataset.themes.split(' ').includes(theme))&&(sub==='all'||p.dataset.subthemes.split(' ').includes(sub))&&(status==='all'||p.dataset.status===status)&&(funding==='all'||(funding==='fellowship'?p.dataset.fellowship==='true':p.dataset.funding===funding))&&(type==='all'||p.dataset.thesis==='true'));
   if(!p.hidden)count++;
  }
  panel.querySelector('[data-research-count]').textContent=`${count} ${count===1?'project':'projects'} shown`;
  panel.querySelector('[data-empty]').hidden=count!==0;
  for(const group of document.querySelectorAll('[data-theme-group]')){const n=group.querySelectorAll('[data-project]:not([hidden])').length;group.hidden=!n;group.querySelector('[data-group-count]').textContent=`${n} ${n===1?'project':'projects'}`;}
 }
 function reset(){for(const s of Object.values(selects))s.value='all';filter();}
 function restore(){if(selected&&content){selected.append(content);selected.classList.remove('selected');selected.querySelector('summary').setAttribute('aria-expanded','false');}selected=null;content=null;}
 function close(update=true){if(!drawer.open)return;drawer.close();restore();document.body.classList.remove('project-drawer-open');if(update&&location.hash.startsWith('#project-'))history.replaceState(null,'',location.pathname+location.search);opener?.focus();}
 function open(project,update=true){
  if(selected===project)return;
  restore();selected=project;opener=project.querySelector('summary');content=project.querySelector('.research-expanded');
  project.classList.add('selected');opener.setAttribute('aria-expanded','true');host.append(content);drawer.querySelector('#drawer-title').textContent=project.querySelector('h3').textContent;
  if(!drawer.open)drawer.showModal();document.body.classList.add('project-drawer-open');drawer.querySelector('.drawer-scroll').scrollTop=0;drawer.querySelector('#drawer-title').focus();
  if(update)history.pushState(null,'','#'+project.id);
 }
 const aliases={'project-electric-cooking-kampala':'project-spotlight-kampala','project-minigrid-capacity':'project-energizing-communities'};
 function reveal(){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}const target=document.getElementById(aliases[id]||id);if(target?.matches('[data-project]')){reset();open(target,false);}else close(false);}
 for(const p of projects){const summary=p.querySelector('summary');summary.setAttribute('aria-haspopup','dialog');summary.setAttribute('aria-expanded','false');summary.addEventListener('click',e=>{e.preventDefault();open(p);});}
 for(const s of Object.values(selects))s.addEventListener('change',filter);
 panel.querySelector('[data-reset]').addEventListener('click',reset);
 drawer.querySelector('[data-close]').addEventListener('click',()=>close());
 drawer.addEventListener('cancel',e=>{e.preventDefault();close();});
 drawer.addEventListener('click',e=>{if(e.target===drawer)close();});
 window.addEventListener('hashchange',reveal);
 panel.hidden=false;filter();reveal();
}
