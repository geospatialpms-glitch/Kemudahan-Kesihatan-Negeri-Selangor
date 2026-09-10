/* Load original administrative boundary data from the last full dashboard commit. */
(function(){
  try {
    var xhr=new XMLHttpRequest();
    xhr.open('GET','https://cdn.jsdelivr.net/gh/geospatialpms-glitch/Kemudahan-Kesihatan-Negeri-Selangor@444c17cdf946b73b5589e223c89808e2cf8c90ca/boundaries.js',false);
    xhr.send(null);
    if(xhr.status>=200&&xhr.status<300){(0,eval)(xhr.responseText);}
  } catch(e){console.error('Boundary data load failed',e);}
})();

/* Harmonize dashboard branding with the sidebar/background colour. */
document.addEventListener('DOMContentLoaded',function(){
  var brandImg=document.querySelector('.brand img');
  if(brandImg){
    brandImg.src='./suo-logo-sidebar.jpg.jpeg';
    brandImg.alt='Selangor Urban Observatory';
  }

  var hero=document.querySelector('.hero');
  if(hero){
    hero.style.backgroundImage="linear-gradient(90deg,rgba(255,255,255,.99) 0%,rgba(255,253,250,.95) 36%,rgba(255,247,237,.45) 62%,rgba(255,255,255,.06) 100%),url('./main-title-bg.jpg.jpeg')";
    hero.style.backgroundPosition='right center';
    hero.style.backgroundSize='auto 100%';
    hero.style.backgroundRepeat='no-repeat';
  }

  var art=document.querySelector('.side-art');
  if(art){
    art.innerHTML='<img src="./jata-selangor-sidebar.jpg.jpg" alt="Jata Selangor">';
  }

  var st=document.createElement('style');
  st.textContent=`
    .brand{
      text-align:center!important;
      padding:6px 8px 12px!important;
      background:linear-gradient(180deg,#ffffff 0%,#fffaf6 100%)!important;
      border-radius:18px!important;
      overflow:hidden!important;
    }
    .brand img{
      width:145px!important;
      height:112px!important;
      object-fit:contain!important;
      display:block!important;
      margin:0 auto 8px!important;
      mix-blend-mode:multiply!important;
      filter:saturate(1.03) contrast(1.02)!important;
    }
    .brand b{
      display:block!important;
      font-family:Montserrat,sans-serif!important;
      font-size:11px!important;
      line-height:1.35!important;
      letter-spacing:.8px!important;
      color:#102b4e!important;
    }
    .side-art:before,.side-art:after{display:none!important}
    .side-art .tag{display:none!important}
    .side-art{
      min-height:150px!important;
      background:linear-gradient(180deg,#fffdfb 0%,#fff7f1 100%)!important;
      display:flex!important;
      align-items:center!important;
      justify-content:center!important;
      padding:12px!important;
      border:1px solid rgba(242,221,209,.65)!important;
      border-radius:20px!important;
      overflow:hidden!important;
      box-shadow:0 6px 18px rgba(16,43,78,.025)!important;
    }
    .side-art img{
      max-width:108px!important;
      max-height:126px!important;
      object-fit:contain!important;
      display:block!important;
      mix-blend-mode:multiply!important;
      filter:saturate(1.03) contrast(1.02)!important;
    }
  `;
  document.head.appendChild(st);
});
