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

/* Force header artwork off immediately so no cached/broken image can appear. */
(function(){
  var st=document.createElement('style');
  st.textContent=`
    .hero{
      background-image:none!important;
      background:linear-gradient(90deg,#fffdf8 0%,#fbf5ea 42%,#f8ead5 72%,#fff7ec 100%)!important;
      background-color:#fbf5ea!important;
    }
  `;
  document.head.appendChild(st);

  function applyBranding(){
    var brandImg=document.querySelector('.brand img');
    if(brandImg){
      brandImg.src='./suo-logo-sidebar.jpg.jpeg';
      brandImg.alt='Selangor Urban Observatory';
    }

    var hero=document.querySelector('.hero');
    if(hero){
      hero.style.setProperty('background-image','none','important');
      hero.style.setProperty('background','linear-gradient(90deg,#fffdf8 0%,#fbf5ea 42%,#f8ead5 72%,#fff7ec 100%)','important');
      hero.style.backgroundPosition='left top';
      hero.style.backgroundSize='100% 100%';
      hero.style.backgroundRepeat='no-repeat';
      hero.style.backgroundColor='#fbf5ea';
      hero.style.borderBottom='1px solid #ead7bf';
      hero.style.boxShadow='inset 0 -1px 0 rgba(233,210,184,.28)';
    }

    var art=document.querySelector('.side-art');
    if(art){
      art.innerHTML='<img src="./jata-selangor-sidebar.jpg.jpg" alt="Jata Selangor">';
    }

    var brandStyle=document.createElement('style');
    brandStyle.textContent=`
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
      .hero p{color:#53677d!important;}
      .side-art:before,.side-art:after{display:none!important}
      .side-art .tag{display:none!important}
      .side-art{
        display:flex!important;
        margin-top:auto!important;
        min-height:132px!important;
        align-items:flex-end!important;
        justify-content:center!important;
        padding:0 6px 8px!important;
        background:radial-gradient(circle at 50% 58%,rgba(255,239,175,.98) 0 34%,rgba(246,194,55,.82) 46%,rgba(246,194,55,.14) 67%,transparent 75%)!important;
        border:0!important;
        box-shadow:none!important;
        overflow:visible!important;
      }
      .side-art img{
        width:112px!important;
        max-width:112px!important;
        height:124px!important;
        max-height:124px!important;
        object-fit:contain!important;
        display:block!important;
        mix-blend-mode:multiply!important;
        filter:saturate(1.28) brightness(1.08) contrast(1.05) drop-shadow(0 5px 7px rgba(70,18,0,.22))!important;
      }
    `;
    document.head.appendChild(brandStyle);
  }

  applyBranding();
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',applyBranding,{once:true});
  }
})();