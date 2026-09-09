/* Load original administrative boundary data from the last full dashboard commit. */
(function(){
  try {
    var xhr=new XMLHttpRequest();
    xhr.open('GET','https://cdn.jsdelivr.net/gh/geospatialpms-glitch/Kemudahan-Kesihatan-Negeri-Selangor@444c17cdf946b73b5589e223c89808e2cf8c90ca/boundaries.js',false);
    xhr.send(null);
    if(xhr.status>=200&&xhr.status<300){(0,eval)(xhr.responseText);}
  } catch(e){console.error('Boundary data load failed',e);}
})();

/* Refresh sidebar branding without changing the dashboard data logic. */
document.addEventListener('DOMContentLoaded',function(){
  var art=document.querySelector('.side-art');
  if(art){
    art.innerHTML='<img src="./jata-selangor-sidebar.jpg" alt="Jata Selangor">';
    var st=document.createElement('style');
    st.textContent='.side-art:before,.side-art:after{display:none!important}.side-art .tag{display:none!important}.side-art{min-height:150px!important;background:linear-gradient(180deg,#fff 0,#fff8f2 100%)!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:10px!important;border:1px solid #f6e5da!important}.side-art img{max-width:110px!important;max-height:128px!important;object-fit:contain!important;display:block!important}';
    document.head.appendChild(st);
  }
});
