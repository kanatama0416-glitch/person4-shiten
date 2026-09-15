(()=>{
  const nativeWrite=Document.prototype.write;
  Document.prototype.write=function(...args){
    args=args.map(arg=>{
      if(typeof arg!=="string"||!arg.includes('id="pageGarden"')) return arg;
      const patch=`<script>(()=>{
        const b=document.getElementById('tearToggle');
        const g=document.getElementById('pageGarden');
        if(!b||!g)return;
        const leaves=[...g.querySelectorAll('.tear-leaf')];
        if(!leaves.length)return;
        let leafStage=0;
        function paint(stage){
          leaves.forEach((leaf,i)=>{
            const need=Number(leaf.dataset.show||99);
            const show=stage>=need;
            leaf.style.setProperty('display','block','important');
            leaf.style.setProperty('visibility',show?'visible':'hidden','important');
            leaf.style.setProperty('opacity',show?'1':'0','important');
            leaf.style.setProperty('background','#70dc8b','important');
            leaf.style.setProperty('border','3px solid #111','important');
            leaf.style.setProperty('width','42px','important');
            leaf.style.setProperty('height','23px','important');
            leaf.style.setProperty('z-index','999','important');
            if(show){
              const rot=getComputedStyle(leaf).getPropertyValue('--leaf-rot').trim()||'0deg';
              leaf.style.setProperty('transform','scale(1) rotate('+rot+')','important');
            }
          });
        }
        paint(0);
        b.addEventListener('click',()=>{
          if(leafStage>=5)return;
          const next=Math.min(5,leafStage+1);
          setTimeout(()=>{leafStage=next;paint(leafStage)},900);
        });
        window.__shitenLeafFix={paint,get stage(){return leafStage}};
      })();<\/script>`;
      const i=arg.lastIndexOf('</body>');
      return i>=0?arg.slice(0,i)+patch+arg.slice(i):arg+patch;
    });
    return nativeWrite.apply(this,args);
  };
})();
