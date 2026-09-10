/* Load original administrative boundary data from the last full dashboard commit. */
(function(){
  try {
    var xhr=new XMLHttpRequest();
    xhr.open('GET','https://cdn.jsdelivr.net/gh/geospatialpms-glitch/Kemudahan-Kesihatan-Negeri-Selangor@444c17cdf946b73b5589e223c89808e2cf8c90ca/boundaries.js',false);
    xhr.send(null);
    if(xhr.status>=200&&xhr.status<300){(0,eval)(xhr.responseText);}
  } catch(e){console.error('Boundary data load failed',e);}
})();

/* Change district boundary outline from dark blue-grey to Selangor red. PBT styling is unchanged. */
(function(){
  if(!window.L || typeof L.polygon!=='function') return;
  var originalPolygon=L.polygon;
  L.polygon=function(latlngs,options){
    if(options && String(options.color||'').toLowerCase()==='#354e66'){
      options=Object.assign({},options,{color:'#d62828'});
    }
    return originalPolygon.call(this,latlngs,options);
  };
})();

/* Harmonize dashboard branding with the warm cream-gold title artwork. */
document.addEventListener('DOMContentLoaded',function(){
  var brandImg=document.querySelector('.brand img');
  if(brandImg){
    brandImg.src='./suo-logo-sidebar.jpg.jpeg';
    brandImg.alt='Selangor Urban Observatory';
  }

  var hero=document.querySelector('.hero');
  if(hero){
    hero.style.backgroundImage="linear-gradient(90deg,rgba(251,247,239,.99) 0%,rgba(248,239,225,.96) 34%,rgba(247,228,196,.60) 63%,rgba(255,255,255,.08) 100%),url('./main-title-bg.jpg.jpeg')";
    hero.style.backgroundPosition='right center';
    hero.style.backgroundSize='auto 100%';
    hero.style.backgroundRepeat='no-repeat';
    hero.style.backgroundColor='#fbf5ea';
    hero.style.borderBottom='1px solid #ead7bf';
    hero.style.boxShadow='inset 0 -1px 0 rgba(233,210,184,.35)';
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
    .hero{
      background-color:#fbf5ea!important;
    }
    .hero p{
      color:#53677d!important;
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