// 04 garden geometry and appearance preserved from the static page.
(()=>{
const accent='#70dc8b',b=document.getElementById('tearToggle'),g=document.getElementById('p4Garden'),svg=document.getElementById('p4GardenSvg'),eye=document.querySelector('.hero .eye'),page=document.querySelector('main.page');if(!b||!g||!svg||!eye||!page)return;
const NS='http://www.w3.org/2000/svg';let used=false,started=0,frame=0,segments=[],decorations=[],geometry;const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const E=(name,attrs={})=>{const el=document.createElementNS(NS,name);for(const[k,v]of Object.entries(attrs))el.setAttribute(k,v);return el};
function leaf(x,y,rot,side,order,small){const g1=E('g',{class:'p4-leaf-group','data-order':order,transform:'translate('+x+' '+y+') rotate('+rot+')'+(side==='r'?' scale(-1 1)':'')});const sc=small?.82:1;const p=E('path',{d:'M '+(-15*sc)+' 0 C '+(-13*sc)+' '+(-10*sc)+' '+(4*sc)+' '+(-14*sc)+' '+(17*sc)+' '+(-2*sc)+' C '+(8*sc)+' '+(10*sc)+' '+(-6*sc)+' '+(11*sc)+' '+(-15*sc)+' 0 Z',class:'p4-leaf'});const vein=E('path',{d:'M '+(-10*sc)+' 1 Q 0 '+(-1*sc)+' '+(11*sc)+' '+(-1*sc),class:'p4-leaf-vein'});g1.append(p,vein);svg.appendChild(g1)}
function bud(x,y,r,order){svg.appendChild(E('circle',{cx:x,cy:y,r:r,class:'p4-bud','data-order':order}))}
function tendril(d){svg.appendChild(E('path',{d:d,class:'p4-tendril-outline'}));svg.appendChild(E('path',{d:d,class:'p4-tendril'}))}
function flower(x,y,order){const q=E('g',{class:'p4-flower','data-order':order,transform:'translate('+x+' '+y+')'});[[0,-16],[14,-8],[14,8],[0,16],[-14,8],[-14,-8]].forEach(([px,py])=>q.appendChild(E('ellipse',{cx:px,cy:py,rx:9,ry:13,class:'petal'})));q.appendChild(E('ellipse',{cx:0,cy:0,rx:15,ry:10,class:'eye-white'}));q.appendChild(E('circle',{cx:0,cy:0,r:6,class:'iris'}));q.appendChild(E('circle',{cx:1,cy:1,r:2.8,class:'pupil'}));q.appendChild(E('circle',{cx:-2.5,cy:-2.5,r:1.6,class:'shine'}));svg.appendChild(q)}
// Every shoot is revealed by distance along its actual path, including its black edge.
function shoot(d,start,speed,existing=false){
 const outline=E('path',{d,class:existing?'p4-vine-outline':'p4-growth-outline'}),line=E('path',{d,class:existing?'p4-vine':'p4-growth'});svg.append(outline,line);
 const length=line.getTotalLength(),duration=length/speed*1000;
 for(const p of [outline,line]){p.style.strokeDasharray=length+' '+length;p.style.strokeDashoffset=length;p.style.opacity='0'}
 const segment={outline,line,length,start,duration};segments.push(segment);return segment;
}
function atTime(segment,distance){return segment.start+distance/segment.length*segment.duration}
function build(){
 svg.replaceChildren();segments=[];decorations=[];
 const pr=page.getBoundingClientRect(),hr=page.querySelector('h1').getBoundingClientRect(),er=eye.getBoundingClientRect();
 const w=page.clientWidth,h=page.clientHeight,top=165,c=w/2,groundY=hr.bottom-pr.top+50;
 g.style.height=h+'px';svg.style.height=h+'px';
 svg.setAttribute('viewBox','0 0 '+w+' '+h);svg.setAttribute('preserveAspectRatio','none');
 const ground=E('g',{'data-part':'ground',opacity:0});ground.append(E('path',{d:'M '+(c-39)+' '+groundY+' Q '+c+' '+(groundY-3)+' '+(c+39)+' '+groundY,class:'p4-ground'}),E('path',{d:'M '+(c-29)+' '+(groundY-3)+' l -3 -4 M '+(c+26)+' '+(groundY-2)+' l 4 -4',class:'p4-ground-grass'}));svg.append(ground);
 const seed=E('ellipse',{cx:0,cy:0,rx:3.6,ry:5.2,class:'p4-seed',opacity:0});svg.append(seed);
 const stem=shoot('M '+c+' '+groundY+' Q '+(c-3)+' '+(groundY-13)+' '+c+' '+(groundY-24),1430,120);
 const cotyledons=E('g',{'data-part':'cotyledons',opacity:0});
 // Both round leaves remain rooted at the tip of the same stem.
 for(const side of [-1,1]){const q=E('g');q.append(E('path',{d:'M 0 0 C -5 -15 -27 -17 -25 -5 C -23 6 -8 5 0 0 Z',class:'p4-cotyledon'}));q.dataset.side=side;cotyledons.append(q)}svg.append(cotyledons);
 const titleTop=hr.top-pr.top,titleBottom=hr.bottom-pr.top,rightX=Math.min(w-36,hr.right-pr.left+17),eyeBottom=er.bottom-pr.top;
 const trunk=shoot('M '+c+' '+(groundY-24)+' C '+(c+26)+' '+(groundY-50)+' '+rightX+' '+(groundY-25)+' '+rightX+' '+(titleBottom-20)+' C '+(rightX+9)+' '+(titleTop+35)+' '+(rightX+10)+' '+(titleTop-24)+' '+(c+85)+' '+(eyeBottom-5)+' C '+(c+57)+' '+(eyeBottom-9)+' '+(c-5)+' 64 '+c+' 18',2040,300);
 // The tip hits the top, curls, and only then sends two curved shoots sideways.
 const bend=shoot('M '+c+' 18 C '+(c+1)+' 2 '+(c+18)+' 3 '+(c+17)+' 14 Q '+(c+17)+' 22 '+(c+10)+' 23',trunk.start+trunk.duration,120);
 const forkTime=bend.start+bend.duration;
 const leftArm=shoot('M '+(c+10)+' 23 C '+(c-28)+' 29 '+(c-48)+' 5 '+(c-85)+' 13 C '+(c-141)+' 24 2 49 7 119 Q 7 150 10 '+top,forkTime,320);
 const rightArm=shoot('M '+(c+10)+' 23 C '+(c+53)+' 39 '+(c+63)+' 9 '+(c+104)+' 17 C '+(w-36)+' 27 '+(w+3)+' 69 '+(w-5)+' 119 Q '+(w-6)+' 153 '+(w-10)+' '+top,forkTime,320);
const ld='M 10 '+top+' C 38 '+(top+75)+', 3 '+(top+155)+', 26 '+(top+235)+' C 48 '+(top+315)+', 4 '+(h*.37)+', 27 '+(h*.46)+' C 48 '+(h*.55)+', 4 '+(h*.62)+', 26 '+(h*.71)+' C 45 '+(h*.80)+', 5 '+(h*.86)+', 22 '+(h-85);const rd='M '+(w-10)+' '+top+' C '+(w-38)+' '+(top+75)+', '+(w-3)+' '+(top+155)+', '+(w-26)+' '+(top+235)+' C '+(w-48)+' '+(top+315)+', '+(w-4)+' '+(h*.37)+', '+(w-27)+' '+(h*.46)+' C '+(w-48)+' '+(h*.55)+', '+(w-4)+' '+(h*.62)+', '+(w-26)+' '+(h*.71)+' C '+(w-45)+' '+(h*.80)+', '+(w-5)+' '+(h*.86)+', '+(w-22)+' '+(h-85);const left=shoot(ld,leftArm.start+leftArm.duration,2000,true),right=shoot(rd,rightArm.start+rightArm.duration,2000,true);
const spots=[top+72,top+145,top+225,h*.34,h*.44,h*.54,h*.64,h*.74,h*.84];spots.forEach((y,i)=>{const lx=16+(i%3)*6,rx=w-lx;leaf(lx,y,i%2?-30:24,'l',i,i%3===2);leaf(lx+12,y+18,i%2?18:-22,'l',i+.2,true);leaf(rx,y+12,i%2?30:-24,'r',i+.1,i%3===1);if(i%2===0)leaf(rx-11,y+30,i%2?-18:20,'r',i+.3,true)});
bud(18,top+118,4,0);bud(w-18,top+205,4,1);bud(22,h*.58,4,2);bud(w-20,h*.69,4,3);bud(19,h*.88,4,4);
tendril('M 31 '+(top+255)+' q 24 10 6 27 q -17 14 -4 -6');tendril('M '+(w-31)+' '+(h*.48)+' q -24 10 -6 27 q 17 14 4 -6');tendril('M 33 '+(h*.76)+' q 25 9 7 28 q -17 13 -4 -7');
const cards=[...page.querySelectorAll('.book')];cards.slice(0,-1).forEach((card,i)=>{const next=cards[i+1].getBoundingClientRect(),cr=card.getBoundingClientRect();flower(i%2?w-30:30,(cr.bottom+next.top)/2-pr.top,i)});
flower(22,h-85,5);

// Reveal each existing leaf/flower when the growing side vine reaches its attachment.
svg.querySelectorAll('.p4-leaf-group,.p4-bud,.p4-flower,.p4-tendril,.p4-tendril-outline').forEach(el=>{
 let x,y;const matrix=el.transform.baseVal.consolidate();
 if(matrix){x=matrix.matrix.e;y=matrix.matrix.f}else if(el.tagName==='circle'){x=+el.getAttribute('cx');y=+el.getAttribute('cy')}else{const point=el.getPointAtLength(0);x=point.x;y=point.y}
 const branch=x<c?left:right;let distance=0,error=Infinity;
 for(let d=0;d<=branch.length;d+=5){const p=branch.line.getPointAtLength(d),e=Math.abs(p.y-y);if(e<error){error=e;distance=d}}
 decorations.push({el,when:atTime(branch,distance),flower:el.classList.contains('p4-flower')});
});
geometry={ground,seed,cotyledons,groundY,c,sx:er.left+er.width/2-pr.left,sy:er.bottom-pr.top-5,end:Math.max(left.start+left.duration,right.start+right.duration)+600};
if(used)paint(reduced.matches?geometry.end:performance.now()-started);
}
const clamp=x=>Math.max(0,Math.min(1,x));
function paint(t){
 const {ground,seed,cotyledons,groundY,c,sx,sy}=geometry;
 ground.setAttribute('opacity',clamp(t/300));
 const fall=clamp((t-450)/800),buried=clamp((t-1250)/180);
 seed.setAttribute('opacity',t<450||t>=1430?0:1-buried);
 seed.setAttribute('transform','translate('+(sx+(c-sx)*fall)+' '+(sy+(groundY-sy)*fall*fall+buried*6)+') rotate('+(fall*35)+') scale('+(1-buried*.6)+')');
 const opening=clamp((t-1700)/450),ease=1-Math.pow(1-opening,3);cotyledons.setAttribute('opacity',opening>0?1:0);
 for(const leaf of cotyledons.children)leaf.setAttribute('transform','translate('+c+' '+(groundY-24)+') scale('+(Number(leaf.dataset.side)*ease)+' '+ease+')');
 for(const s of segments){const progress=clamp((t-s.start)/s.duration);for(const p of [s.outline,s.line]){p.style.opacity=progress>0?'1':'0';p.style.strokeDashoffset=String(s.length*(1-progress))}}
 for(const d of decorations){const progress=clamp((t-d.when-(d.flower?180:0))/360);d.el.style.opacity=String(progress)}
 g.dataset.stage=t<450?'ground':t<1430?'seed':t<2040?'sprout':t<segments[2].start?'upward':t<segments[3].start?'bend':t<segments[5].start?'fork':t<geometry.end?'downward':'complete';
}
function animate(now){if(!used||!geometry)return;paint(reduced.matches?geometry.end:now-started);if(!reduced.matches&&now-started<geometry.end)frame=requestAnimationFrame(animate);else{b.setAttribute('aria-label','植物を消す');g.dataset.stage='complete'}}
// One owner for start, cancel, and resize: no disabled-button override.
b.setAttribute('aria-pressed','false');
g.dataset.stage='idle';
b.addEventListener('click',()=>{
 // Both body and document can scroll with the existing overflow-x styling.
 window.scrollTo({top:0,left:0,behavior:'instant'});
 document.documentElement.scrollTop=0;document.body.scrollTop=0;
 if(used){
  used=false;cancelAnimationFrame(frame);cancelAnimationFrame(resizeFrame);
  g.style.display='none';g.dataset.stage='idle';svg.replaceChildren();
  segments=[];decorations=[];geometry=null;
  b.setAttribute('aria-pressed','false');b.setAttribute('aria-label','タネを落として植物を育てる');
  return;
 }
 // Reset every run, then measure only after the hidden SVG has been restored.
 cancelAnimationFrame(frame);cancelAnimationFrame(resizeFrame);
 geometry=null;segments=[];decorations=[];svg.replaceChildren();
 used=true;started=performance.now();g.style.display='';g.dataset.stage='starting';
 b.setAttribute('aria-pressed','true');b.setAttribute('aria-label','植物を消す');
 frame=requestAnimationFrame(()=>{
  if(!used)return;
  started=performance.now();build();frame=requestAnimationFrame(animate);
 });
});
let resizeFrame=0;
function rebuild(){
 if(!used)return;
 cancelAnimationFrame(resizeFrame);
 resizeFrame=requestAnimationFrame(()=>{
  if(!used)return;
  build();cancelAnimationFrame(frame);frame=requestAnimationFrame(animate);
 });
}
// No SVG construction or path sampling until the visitor starts the garden.
addEventListener('resize',rebuild);
if('ResizeObserver' in window)new ResizeObserver(rebuild).observe(page);
document.fonts?.ready.then(rebuild);
})();
