const input=document.querySelector('#publication-search');
if(input){
 const rows=[...document.querySelectorAll('.publication-entry')];
 document.querySelector('.publication-search').hidden=false;
 const apply=()=>{const terms=input.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);let count=0;for(const row of rows){row.hidden=!terms.every(t=>row.textContent.toLocaleLowerCase().includes(t));if(!row.hidden)count++;}for(const group of document.querySelectorAll('.publication-group'))group.hidden=![...group.querySelectorAll('.publication-entry')].some(row=>!row.hidden);document.querySelector('#publication-count').textContent=`${count} ${count===1?'publication':'publications'}`;document.querySelector('.publication-empty').hidden=count!==0;};
 input.addEventListener('input',apply);
 const reveal=()=>{if(document.getElementById(location.hash.slice(1))){input.value='';apply();}};
 window.addEventListener('hashchange',reveal);
 document.querySelector('.publication-nav').addEventListener('click',()=>{input.value='';apply();});
 reveal();
}
