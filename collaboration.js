for (const form of document.querySelectorAll('[data-collaboration-form]')) {
 form.hidden=false;
 form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity()) return;
  const data=new FormData(form);
  const email=String(data.get('email')).trim();
  const subject=form.dataset.subjectPrefix+String(data.get('subject')).trim().replace(/[\r\n]/g,' ');
  const body=`Reply to: ${email}\n\n${String(data.get('message')).trim()}`;
  window.location.href=`mailto:${form.dataset.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.querySelector('[data-collaboration-status]').textContent='Your email app should open a draft. Your message has not been sent yet.';
 });
}
