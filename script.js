const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-nav');
function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';menu.hidden=open;toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Open navigation':'Close navigation');});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();}});
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#project-type').value=a.dataset.service;}));
document.querySelector('#project-form').addEventListener('submit',event=>event.preventDefault());
document.querySelector('#preview-request').addEventListener('click',()=>{document.querySelector('#form-status').textContent='Preview only — nothing was sent or saved. Call (440) 656-9051 to discuss your project.';});
