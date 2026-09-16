// Local snapshot of the shared hint designs (person1 eye-attract-core and
// tease-overrides, 2026-09-16). No cross-repository runtime dependency.
(()=>{
function afterIntro(start){
 const ready=()=>!document.body.classList.contains('intro-lock')&&!document.getElementById('intro');
 if(ready()){start();return;}
 const observer=new MutationObserver(()=>{if(ready()){observer.disconnect();start();}});
 observer.observe(document.body,{childList:true,attributes:true,attributeFilter:['class']});
}
(function(){
  'use strict';

  function start(){
    var eye=document.querySelector('#secretToggle,#tearToggle');
    if(!eye)return;

    eye.classList.add('shiten-attract-eye');

    var style=document.createElement('style');
    style.id='shiten-eye-attract-style';
    style.textContent=`
#secretToggle.shiten-attract-eye,#tearToggle.shiten-attract-eye{will-change:transform,opacity;transform-origin:50% 50%}
#secretToggle.shiten-attract-blink,#tearToggle.shiten-attract-blink{animation:shitenEyeBlink .42s ease-in-out 1}
#secretToggle.shiten-attract-look .secret-iris,#tearToggle.shiten-attract-look .secret-iris,
#secretToggle.shiten-attract-look .tear-iris,#tearToggle.shiten-attract-look .tear-iris,
#secretToggle.shiten-attract-look [class*="iris"],#tearToggle.shiten-attract-look [class*="iris"]{transform:translate(-5px,-4px)!important}
body.cat-ready #secretToggle.shiten-attract-look::after{transform:translate(calc(-50% - 5px),calc(-50% - 4px))!important}
#secretToggle.shiten-attract-near,#tearToggle.shiten-attract-near{opacity:.82!important;transform:translate(-9px,-9px) rotate(-3deg) scale(1.08)!important;box-shadow:3px 3px 0 #111!important}
.shiten-eye-hint{position:fixed;z-index:2147483000;right:78px;bottom:19px;pointer-events:none;background:var(--p,#ff4f87);color:#111;border:3px solid #111;border-radius:999px;padding:10px 14px;font:900 14px/1.1 -apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic",sans-serif;white-space:nowrap;box-shadow:4px 4px 0 #111;opacity:0;transform:translate(10px,3px) scale(.88) rotate(-2deg);transition:opacity .18s ease,transform .22s cubic-bezier(.2,.85,.3,1.2)}
.shiten-eye-hint::after{content:'→';display:inline-block;margin-left:5px;font-size:16px;line-height:1;transform:rotate(8deg)}
.shiten-eye-hint.shiten-eye-hint-small{right:72px;bottom:24px;background:#fff;border-width:2px;padding:5px 8px;font-size:10px;font-weight:800;box-shadow:2px 2px 0 #111;transform:translate(7px,2px) scale(.94) rotate(-1deg);opacity:0}
.shiten-eye-hint.shiten-eye-hint-small::after{margin-left:4px;font-size:11px}
.shiten-eye-hint.shiten-eye-hint-show{opacity:1;transform:translate(0,0) scale(1) rotate(-2deg);animation:shitenHintBob 1.05s ease-in-out .28s infinite alternate}
.shiten-eye-hint.shiten-eye-hint-small.shiten-eye-hint-show{opacity:.86;transform:translate(0,0) scale(1) rotate(-1deg);animation:shitenHintBob 1.2s ease-in-out .3s infinite alternate}
.shiten-eye-question{position:fixed;z-index:2147483000;right:27px;bottom:63px;pointer-events:none;font:900 22px/1 Arial,sans-serif;color:#111;text-shadow:2px 2px 0 #fff;opacity:0;transform:translateY(5px) scale(.7) rotate(8deg);animation:shitenQuestion 1.65s ease both}
.shiten-gimmick-tease{position:fixed;z-index:2147482999;pointer-events:none}
.shiten-tease-food{right:80px;bottom:29px;width:20px;height:13px;border:2px solid #111;border-radius:50%;background:#fff;animation:shitenFoodPeek 1.35s ease-in-out both}
.shiten-tease-food::before{content:'';position:absolute;left:7px;top:3px;width:5px;height:5px;border-radius:50%;background:#111}
.shiten-tease-food::after{content:'';position:absolute;left:9px;top:4px;width:1.5px;height:1.5px;border-radius:50%;background:#fff}
#secretToggle.shiten-tease-hungry .secret-iris,#tearToggle.shiten-tease-hungry .tear-iris,#secretToggle.shiten-tease-hungry [class*="iris"],#tearToggle.shiten-tease-hungry [class*="iris"]{transform:translate(-7px,1px)!important;transition:transform .18s ease!important}
.shiten-tease-cat-pupil{width:5px;height:27px;border-radius:999px;background:#111;opacity:0;transform:translate(-50%,-50%) scaleY(.2);animation:shitenCatPeek 1.35s ease-in-out both}
.shiten-tease-tear{width:12px;height:16px;border:2px solid #111;background:#74dc8a;border-radius:60% 50% 62% 42%;transform:rotate(45deg) scale(.4);opacity:0;animation:shitenTearDrop 1.35s ease-in both}
.shiten-tease-sprout{width:3px;height:0;background:#111;border-radius:2px;transform-origin:50% 100%;opacity:0;animation:shitenSproutStem .75s ease-out .72s both}
.shiten-tease-sprout::before,.shiten-tease-sprout::after{content:'';position:absolute;bottom:8px;width:9px;height:6px;border:2px solid #111;background:#74dc8a;border-radius:70% 30% 70% 30%;opacity:0;animation:shitenSproutLeaf .45s ease-out 1s both}
.shiten-tease-sprout::before{right:1px;transform-origin:100% 100%;transform:rotate(-28deg) scale(.3)}
.shiten-tease-sprout::after{left:1px;transform-origin:0 100%;transform:scaleX(-1) rotate(-28deg) scale(.3)}
#secretToggle.shiten-tease-glitch,#tearToggle.shiten-tease-glitch{animation:shitenEyeGlitch 1.15s steps(1,end) both!important}
.shiten-tease-glitch-word{right:72px;bottom:55px;font:900 12px/1 -apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic",sans-serif;letter-spacing:.08em;color:#111;background:#fff;border:2px solid #111;padding:4px 6px;box-shadow:2px 2px 0 #111;opacity:0;animation:shitenGlitchWord 1.15s steps(1,end) both}
@keyframes shitenEyeBlink{0%,100%{transform:rotate(-6deg) scaleY(1)}45%,58%{transform:rotate(-6deg) scaleY(.16)}}
@keyframes shitenHintBob{from{margin-bottom:0}to{margin-bottom:4px}}
@keyframes shitenQuestion{0%{opacity:0;transform:translateY(5px) scale(.7) rotate(8deg)}18%,70%{opacity:1;transform:translateY(0) scale(1) rotate(-4deg)}100%{opacity:0;transform:translateY(-4px) scale(.9) rotate(3deg)}}
@keyframes shitenFoodPeek{0%{opacity:0;transform:translateX(-10px) translateY(3px) rotate(-12deg) scale(.7)}18%,72%{opacity:1}45%{transform:translateX(7px) translateY(-3px) rotate(7deg) scale(1)}100%{opacity:0;transform:translateX(25px) translateY(1px) rotate(-6deg) scale(.75)}}
@keyframes shitenCatPeek{0%,100%{opacity:0;transform:translate(-50%,-50%) scaleY(.15)}22%,76%{opacity:1;transform:translate(-50%,-50%) scaleY(1)}}
@keyframes shitenTearDrop{0%{opacity:0;transform:translateY(-7px) rotate(45deg) scale(.35)}18%{opacity:1}55%{opacity:1;transform:translateY(16px) rotate(45deg) scale(1)}68%{opacity:0;transform:translateY(24px) rotate(45deg) scale(.65)}100%{opacity:0;transform:translateY(24px) rotate(45deg) scale(.65)}}
@keyframes shitenSproutStem{0%{opacity:0;height:0}25%{opacity:1}100%{opacity:1;height:13px}}
@keyframes shitenSproutLeaf{0%{opacity:0}100%{opacity:1;transform:rotate(-28deg) scale(1)}}
@keyframes shitenEyeGlitch{0%,100%{filter:none}16%{filter:hue-rotate(90deg) saturate(1.8);transform:translate(-2px,1px) rotate(-5deg)}34%{filter:hue-rotate(210deg) saturate(2);transform:translate(2px,-1px) rotate(-1deg)}52%{filter:hue-rotate(330deg) saturate(1.7);transform:translate(-1px,0) rotate(-4deg)}70%{filter:none;transform:translate(1px,0) rotate(-3deg)}84%{filter:hue-rotate(150deg);transform:translate(0,0) rotate(-6deg)}}
@keyframes shitenGlitchWord{0%,100%{opacity:0;transform:translateX(0)}12%{opacity:1;transform:translateX(-2px)}28%{opacity:1;transform:translateX(2px)}78%{opacity:1;transform:translateX(-1px)}90%{opacity:0}}
@media(max-width:390px){.shiten-eye-hint{right:74px;bottom:20px;padding:9px 12px;font-size:13px}.shiten-eye-hint.shiten-eye-hint-small{right:70px;bottom:25px;padding:4px 7px;font-size:9px}.shiten-tease-food{right:75px}.shiten-tease-glitch-word{right:68px}}
@media(prefers-reduced-motion:reduce){#secretToggle.shiten-attract-blink,#tearToggle.shiten-attract-blink{animation:none}.shiten-eye-hint{transition:none}.shiten-eye-hint.shiten-eye-hint-show{animation:none}.shiten-eye-question{animation:none;opacity:1}.shiten-eye-question.shiten-eye-question-hide{opacity:0}.shiten-gimmick-tease{display:none!important}#secretToggle.shiten-tease-glitch,#tearToggle.shiten-tease-glitch{animation:none!important}}
`;
    document.head.appendChild(style);

    var timers=[];
    var hint=null;
    var question=null;
    var teaseNodes=[];
    var done=false;

    function later(fn,ms){
      var id=setTimeout(fn,ms);
      timers.push(id);
      return id;
    }

    function removeHint(){
      if(hint&&hint.parentNode)hint.parentNode.removeChild(hint);
      hint=null;
    }

    function removeQuestion(){
      if(question&&question.parentNode)question.parentNode.removeChild(question);
      question=null;
    }

    function addTeaseNode(node){
      teaseNodes.push(node);
      document.body.appendChild(node);
      return node;
    }

    function clearTease(){
      teaseNodes.forEach(function(node){if(node&&node.parentNode)node.parentNode.removeChild(node);});
      teaseNodes=[];
      eye.classList.remove('shiten-tease-hungry','shiten-tease-glitch');
    }

    function finish(){
      if(done)return;
      done=true;
      timers.forEach(clearTimeout);
      timers=[];
      eye.classList.remove('shiten-attract-blink','shiten-attract-look','shiten-attract-near');
      clearTease();
      removeHint();
      removeQuestion();
    }

    var path=location.pathname;
    var isPerson1=/\/person1-shiten(?:\/|$)/.test(path);
    var isPerson2=/\/person2-shiten(?:\/|$)/.test(path);
    var isPerson3=/\/person3-shiten(?:\/|$)/.test(path);
    var isPerson4=/\/person4-shiten(?:\/|$)/.test(path);
    var isPerson5=/\/person5-shiten(?:\/|$)/.test(path);
    var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if(isPerson1){
      later(function(){
        if(done)return;
        hint=document.createElement('div');
        hint.className='shiten-eye-hint';
        hint.textContent='触ってみる？';
        document.body.appendChild(hint);
        requestAnimationFrame(function(){if(hint)hint.classList.add('shiten-eye-hint-show');});
        later(function(){
          if(!hint)return;
          hint.classList.remove('shiten-eye-hint-show');
          later(removeHint,260);
        },8000);
      },650);
    }else{
      later(function(){
        if(done)return;
        hint=document.createElement('div');
        hint.className='shiten-eye-hint shiten-eye-hint-small';
        hint.textContent='クリックしてみて！';
        document.body.appendChild(hint);
        requestAnimationFrame(function(){if(hint)hint.classList.add('shiten-eye-hint-show');});
        later(function(){
          if(!hint)return;
          hint.classList.remove('shiten-eye-hint-show');
          later(removeHint,220);
        },6500);
      },900);
    }

    function teaser02(){
      if(done||reduced)return;
      clearTease();
      eye.classList.add('shiten-tease-hungry');
      var food=document.createElement('div');
      food.className='shiten-gimmick-tease shiten-tease-food';
      addTeaseNode(food);
      later(clearTease,1450);
    }

    function teaser03(){
      if(done||reduced)return;
      clearTease();
      var rect=eye.getBoundingClientRect();
      var pupil=document.createElement('div');
      pupil.className='shiten-gimmick-tease shiten-tease-cat-pupil';
      pupil.style.left=(rect.left+rect.width/2)+'px';
      pupil.style.top=(rect.top+rect.height/2)+'px';
      addTeaseNode(pupil);
      later(clearTease,1450);
    }

    function teaser04(){
      if(done||reduced)return;
      clearTease();
      var rect=eye.getBoundingClientRect();
      var tear=document.createElement('div');
      tear.className='shiten-gimmick-tease shiten-tease-tear';
      tear.style.left=(rect.left+rect.width/2-6)+'px';
      tear.style.top=(rect.bottom-2)+'px';
      addTeaseNode(tear);
      var sprout=document.createElement('div');
      sprout.className='shiten-gimmick-tease shiten-tease-sprout';
      sprout.style.left=(rect.left+rect.width/2)+'px';
      sprout.style.top=(rect.bottom+28)+'px';
      addTeaseNode(sprout);
      later(clearTease,1700);
    }

    function teaser05(){
      if(done||reduced)return;
      clearTease();
      eye.classList.add('shiten-tease-glitch');
      var word=document.createElement('div');
      word.className='shiten-gimmick-tease shiten-tease-glitch-word';
      word.textContent='視展';
      addTeaseNode(word);
      later(function(){if(!done&&word.parentNode)word.textContent='視点';},260);
      later(function(){if(!done&&word.parentNode)word.textContent='shiten';},520);
      later(function(){if(!done&&word.parentNode)word.textContent='視展';},780);
      later(clearTease,1250);
    }

    if(isPerson2)later(teaser02,8100);
    if(isPerson3)later(teaser03,8100);
    // 04 uses the eye sprout below; never schedule the old tear teaser.
    if(isPerson5)later(teaser05,8100);

    later(function(){
      if(done)return;
      eye.classList.remove('shiten-attract-blink');
      void eye.offsetWidth;
      eye.classList.add('shiten-attract-blink');
      later(function(){if(!done)eye.classList.remove('shiten-attract-blink');},500);
    },3000);

    later(function(){
      if(done)return;
      eye.classList.add('shiten-attract-look');
      later(function(){if(!done)eye.classList.remove('shiten-attract-look');},1800);
    },6000);

    later(function(){
      if(done)return;
      eye.classList.add('shiten-attract-near');
    },10000);

    later(function(){
      if(done)return;
      question=document.createElement('div');
      question.className='shiten-eye-question';
      question.textContent='?';
      document.body.appendChild(question);
      later(removeQuestion,1750);
    },15000);

    eye.addEventListener('pointerdown',finish,{once:true,passive:true});
    eye.addEventListener('keydown',function(e){
      if(e.key==='Enter'||e.key===' '){finish();}
    },{once:true});
  }

  afterIntro(start);
})();

(function(){
  'use strict';

  function start(){
    var path=location.pathname;
    var is03=/\/person3-shiten(?:\/|$)/.test(path);
    var is04=/\/person4-shiten(?:\/|$)/.test(path);
    var is05=/\/person5-shiten(?:\/|$)/.test(path);
    if(!is03&&!is04&&!is05)return;

    var eye=document.querySelector('#secretToggle,#tearToggle');
    if(!eye)return;

    var root=document.documentElement;
    root.classList.add(is03?'shiten-tease-v2-03':is04?'shiten-tease-v2-04':'shiten-tease-v2-05');

    var style=document.createElement('style');
    style.id='shiten-tease-overrides-style';
    style.textContent=`
html.shiten-tease-v2-03 .shiten-tease-cat-pupil{display:none!important}
html.shiten-tease-v2-04 .shiten-tease-tear,
html.shiten-tease-v2-04 .shiten-tease-sprout{display:none!important}
html.shiten-tease-v2-05 .shiten-tease-glitch-word{display:none!important}
html.shiten-tease-v2-05 #secretToggle.shiten-tease-glitch,
html.shiten-tease-v2-05 #tearToggle.shiten-tease-glitch{animation:none!important;filter:none!important}

html.shiten-tease-v2-03 #secretToggle.shiten-v2-cat-eye,
html.shiten-tease-v2-03 #tearToggle.shiten-v2-cat-eye{
  overflow:hidden!important;
  background:#ffd83d!important;
  border-color:#111!important;
  opacity:1!important;
  transform:rotate(3deg) scale(1.04)!important;
  box-shadow:0 0 0 3px #ffd83d,3px 3px 0 #111!important;
  transition:background-color .3s ease,transform .3s ease,box-shadow .3s ease,opacity .3s ease!important;
}
html.shiten-tease-v2-03 #secretToggle.shiten-v2-cat-eye .secret-iris,
html.shiten-tease-v2-03 #tearToggle.shiten-v2-cat-eye .tear-iris,
html.shiten-tease-v2-03 #secretToggle.shiten-v2-cat-eye [class*="iris"],
html.shiten-tease-v2-03 #tearToggle.shiten-v2-cat-eye [class*="iris"]{opacity:0!important}
html.shiten-tease-v2-03 #secretToggle.shiten-v2-cat-eye::before,
html.shiten-tease-v2-03 #tearToggle.shiten-v2-cat-eye::before{
  content:""!important;position:absolute!important;inset:0!important;display:block!important;
  background:#ffd83d!important;border:0!important;box-shadow:none!important;z-index:30!important;pointer-events:none!important;
}
html.shiten-tease-v2-03 #secretToggle.shiten-v2-cat-eye::after,
html.shiten-tease-v2-03 #tearToggle.shiten-v2-cat-eye::after{
  content:""!important;position:absolute!important;left:50%!important;top:50%!important;
  width:4px!important;height:24px!important;background:#111!important;border:0!important;border-radius:999px!important;
  box-shadow:none!important;transform:translate(-50%,-50%)!important;z-index:31!important;pointer-events:none!important;
  animation:shitenV2CatPupil 1.85s ease both!important;
}

.shiten-v2-eye-sprout{position:fixed;z-index:2147483002;width:42px;height:36px;pointer-events:none;transform-origin:50% 100%;animation:shitenV2SproutStem 1.9s ease both}
.shiten-v2-eye-sprout svg{display:block;width:42px;height:36px;overflow:visible}
.shiten-v2-eye-sprout .sprout-stem{fill:none;stroke:#111;stroke-width:2.5;stroke-linecap:round}
.shiten-v2-eye-sprout .sprout-leaf{fill:#70dc8b;stroke:#111;stroke-width:2;stroke-linejoin:round;transform-origin:21px 13px;animation:shitenV2SproutLeaves 1.9s ease both}
@keyframes shitenV2SproutLeaves{0%,20%{transform:scale(.05);opacity:0}42%,100%{transform:scale(1);opacity:1}}

html.shiten-tease-v2-05 #secretToggle.shiten-v2-color-spin .secret-iris,
html.shiten-tease-v2-05 #tearToggle.shiten-v2-color-spin .tear-iris,
html.shiten-tease-v2-05 #secretToggle.shiten-v2-color-spin [class*="iris"],
html.shiten-tease-v2-05 #tearToggle.shiten-v2-color-spin [class*="iris"]{animation:shitenV2IrisColors 1.85s linear both!important}
html.shiten-tease-v2-05 #secretToggle.shiten-v2-color-spin,
html.shiten-tease-v2-05 #tearToggle.shiten-v2-color-spin{animation:shitenV2EyeColorPulse 1.85s linear both!important}
.shiten-v2-mojibake{position:fixed;z-index:2147483002;right:72px;bottom:55px;pointer-events:none;white-space:nowrap;padding:4px 6px;border:2px solid #111;background:#fff;color:#111;box-shadow:2px 2px 0 #111;font:900 12px/1.05 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.04em;animation:shitenV2MojibakeBox 1.85s steps(1,end) both}

@keyframes shitenV2CatPupil{0%{opacity:0;transform:translate(-50%,-50%) scaleY(.15)}16%,78%{opacity:1;transform:translate(-50%,-50%) scaleY(1)}100%{opacity:0;transform:translate(-50%,-50%) scaleY(.2)}}
@keyframes shitenV2SproutStem{0%{opacity:0;transform:scaleY(0)}8%{opacity:1}30%,76%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(1)}}
@keyframes shitenV2LeafLeft{0%,24%{opacity:0;transform:rotate(0deg) scale(.15)}42%,78%{opacity:1;transform:rotate(-28deg) scale(1)}100%{opacity:0;transform:rotate(-28deg) scale(.9)}}
@keyframes shitenV2LeafRight{0%,24%{opacity:0;transform:rotate(0deg) scale(.15)}42%,78%{opacity:1;transform:rotate(28deg) scale(1)}100%{opacity:0;transform:rotate(28deg) scale(.9)}}
@keyframes shitenV2IrisColors{0%,100%{background:#9b7cff}16%{background:#ff4f87}32%{background:#58c8ff}48%{background:#70dc8b}64%{background:#ffd83d}80%{background:#ff7a59}}
@keyframes shitenV2EyeColorPulse{0%,100%{filter:none;box-shadow:0 0 0 0 transparent}16%{filter:hue-rotate(70deg) saturate(1.7);box-shadow:0 0 0 3px #ff4f87}32%{filter:hue-rotate(150deg) saturate(1.8);box-shadow:0 0 0 3px #58c8ff}48%{filter:hue-rotate(230deg) saturate(1.9);box-shadow:0 0 0 3px #70dc8b}64%{filter:hue-rotate(310deg) saturate(1.8);box-shadow:0 0 0 3px #ffd83d}80%{filter:hue-rotate(390deg) saturate(1.7);box-shadow:0 0 0 3px #9b7cff}}
@keyframes shitenV2MojibakeBox{0%,100%{opacity:0;transform:translate(0,0) rotate(0)}8%{opacity:1;transform:translate(-2px,1px) rotate(-2deg)}22%{opacity:1;transform:translate(2px,-1px) rotate(1deg)}38%{opacity:1;transform:translate(-1px,-1px) rotate(-1deg)}54%{opacity:1;transform:translate(2px,1px) rotate(2deg)}70%{opacity:1;transform:translate(-2px,0) rotate(-1deg)}86%{opacity:1;transform:translate(1px,-1px) rotate(1deg)}94%{opacity:0}}
@media(max-width:390px){.shiten-v2-mojibake{right:68px;font-size:11px}}
@media(prefers-reduced-motion:reduce){.shiten-v2-eye-sprout,.shiten-v2-mojibake{display:none!important}html.shiten-tease-v2-03 #secretToggle.shiten-v2-cat-eye,html.shiten-tease-v2-03 #tearToggle.shiten-v2-cat-eye,html.shiten-tease-v2-05 #secretToggle.shiten-v2-color-spin,html.shiten-tease-v2-05 #tearToggle.shiten-v2-color-spin{animation:none!important}}
`;
    document.head.appendChild(style);

    var timers=[];
    var nodes=[];
    var active=false;
    function later(fn,ms){var id=setTimeout(fn,ms);timers.push(id);return id;}
    function add(node){nodes.push(node);document.body.appendChild(node);return node;}
    function clearCustom(){
      timers.forEach(clearTimeout);timers=[];
      nodes.forEach(function(node){if(node&&node.parentNode)node.parentNode.removeChild(node);});nodes=[];
      eye.classList.remove('shiten-v2-cat-eye','shiten-v2-color-spin');
      active=false;
    }
    function cancel(){clearCustom();}

    function tease03(){
      if(active)return;active=true;
      eye.classList.add('shiten-v2-cat-eye');
      later(function(){eye.classList.remove('shiten-v2-cat-eye');active=false;},1850);
    }

    function tease04(){
      if(active)return;active=true;
      var sprout=document.createElement('div');
      sprout.className='shiten-v2-eye-sprout';
      sprout.setAttribute('aria-hidden','true');
      sprout.innerHTML='<svg viewBox="0 0 42 36" xmlns="http://www.w3.org/2000/svg"><path class="sprout-stem" d="M21 35 Q19 24 21 13"/><path class="sprout-leaf" d="M21 13 C16 2 3 2 4 8 C5 15 14 17 21 13Z"/><path class="sprout-leaf" d="M21 13 C26 2 39 2 38 8 C37 15 28 17 21 13Z"/></svg>';
      add(sprout);
      // Follow the eye during its own movement and viewport changes.
      function followEye(){
        if(!sprout.isConnected)return;
        var rect=eye.getBoundingClientRect();
        sprout.style.left=(rect.left+rect.width/2-21)+'px';
        sprout.style.top=(rect.top+rect.height/2-36)+'px';
        requestAnimationFrame(followEye);
      }
      followEye();
      later(function(){if(sprout.parentNode)sprout.parentNode.removeChild(sprout);nodes=nodes.filter(function(n){return n!==sprout;});active=false;},1950);
    }

    function tease05(){
      if(active)return;active=true;
      eye.classList.add('shiten-v2-color-spin');
      var word=document.createElement('div');
      word.className='shiten-v2-mojibake';
      word.textContent='視�';
      add(word);
      var glyphs=['視�','�展','縺励※','譁�','ｼ荳','Sh!†?n','���','視?'];
      glyphs.slice(1).forEach(function(text,i){later(function(){if(word.parentNode)word.textContent=text;},180*(i+1));});
      later(function(){eye.classList.remove('shiten-v2-color-spin');if(word.parentNode)word.parentNode.removeChild(word);nodes=nodes.filter(function(n){return n!==word;});active=false;},1900);
    }

    later(function(){
      if(is03)tease03();
      else if(is04)tease04();
      else if(is05)tease05();
    },8170);

    eye.addEventListener('pointerdown',cancel,{once:true,passive:true});
    eye.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' ')cancel();},{once:true});
  }

  afterIntro(start);
})();


})();
