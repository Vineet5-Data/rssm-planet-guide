const modeNodes={observe:['encoder','memory','posterior','state','heads'],imagine:['memory','prior','state','heads'],decode:['heads']};
document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{const mode=button.dataset.mode;document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('.mode-panel').forEach(p=>p.hidden=p.id!=='mode-'+mode);document.querySelectorAll('.diagram g[id^="node-"]').forEach(n=>n.classList.toggle('active',modeNodes[mode].includes(n.id.replace('node-',''))));}));
document.querySelector('[data-mode="observe"]')?.click();
const search=document.getElementById('file-filter');
function filterFiles(){const q=search.value.trim().toLowerCase();const rows=[...document.querySelectorAll('#file-table tbody tr')];let count=0;rows.forEach(row=>{row.hidden=!row.textContent.toLowerCase().includes(q);if(!row.hidden)count++;});document.getElementById('file-count').textContent=count+' of '+rows.length+' module groups shown';}
search?.addEventListener('input',filterFiles);if(search)filterFiles();
