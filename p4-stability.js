(function(){
  'use strict';
  function init(){
    var page=document.querySelector('main.page');
    var garden=document.getElementById('p4Garden');
    var svg=document.getElementById('p4GardenSvg');
    if(!page||!garden||!svg)return;
    var lastHeight=0,raf=0;
    function sync(){
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(function(){
        var h=Math.max(page.scrollHeight,page.clientHeight);
        garden.style.height=h+'px';
        svg.style.height=h+'px';
        if(!lastHeight||Math.abs(h-lastHeight)>2){
          lastHeight=h;
          window.dispatchEvent(new Event('resize'));
        }
      });
    }
    requestAnimationFrame(sync);
    setTimeout(sync,350);
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(sync);
    window.addEventListener('load',sync,{once:true});
    if('ResizeObserver' in window){
      var ro=new ResizeObserver(sync);
      ro.observe(page);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
