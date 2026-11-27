/* Garden Jowi — yangi yil bezagi. 1-dekabr – 10-yanvar oralig'ida o'zi yonadi, qo'lda belgilash yo'q.
   Sinash: ?ny=1 (majburan yoqish), ?ny=0 (o'chirish). Qor tugmasi tanlovi localStorage gj_snow. */
(function(){
  var now=new Date(),m=now.getMonth(),d=now.getDate(),q=location.search;
  var on=(m===11)||(m===0&&d<=10);
  if(/[?&]ny=1/.test(q))on=true;
  if(/[?&]ny=0/.test(q))on=false;
  if(!on)return;
  var H=document.documentElement;H.className+=' ny';
  function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
  if(ls('gj_snow')==='off')H.className+=' ny-plain';

  function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html)e.innerHTML=html;return e}
  var ny=m===0?now.getFullYear():now.getFullYear()+1; /* yanvarda — shu yil, qolgan oylarda — keyingi yil */
  var left=Math.ceil((new Date(ny,0,1)-now)/864e5);

  /* girlyanda */
  var w=1400,n=26,p='M0 6',i,bl='',cols=['#f5c451','#e0473f','#6fd39d','#8fd6ff','#f5c451','#ff9a6a'],pts=[];
  for(i=0;i<=n;i++)pts.push([i*w/n,i%2?24:6]);
  for(i=1;i<pts.length;i++)p+=' Q'+((pts[i-1][0]+pts[i][0])/2)+' '+(Math.max(pts[i-1][1],pts[i][1])+10)+' '+pts[i][0]+' '+pts[i][1];
  for(i=0;i<n;i++){var cx=(i+.5)*w/n,c=cols[i%cols.length];
    bl+='<g class="bl" style="animation-delay:'+((i%5)*.55)+'s"><circle cx="'+cx+'" cy="28" r="9" fill="'+c+'" opacity=".35"/><rect x="'+(cx-2.5)+'" y="20" width="5" height="4" rx="1" fill="#3b4a3f"/><ellipse cx="'+cx+'" cy="28" rx="4" ry="5.5" fill="'+c+'"/></g>'}
  var garl=el('div','ny-garl','<svg viewBox="0 0 '+w+' 46" preserveAspectRatio="none" aria-hidden="true"><path d="'+p+'" fill="none" stroke="#2f3d33" stroke-width="2"/>'+bl+'</svg>');

  /* chiroqlar va qor */
  var bk='',f='';
  for(i=0;i<16;i++){var s=30+Math.random()*90;bk+='<i style="left:'+(Math.random()*100)+'%;top:'+(Math.random()*100)+'%;width:'+s+'px;height:'+s+'px;background:'+(i%3?'rgba(245,205,110,.5)':'rgba(255,140,120,.35)')+';animation-delay:-'+(Math.random()*7)+'s"></i>'}
  for(i=0;i<46;i++){var z=2+Math.random()*4;f+='<i style="left:'+(Math.random()*100)+'%;width:'+z+'px;height:'+z+'px;opacity:'+(.5+Math.random()*.5)+';--dx:'+(Math.random()*80-40)+'px;animation-duration:'+(9+Math.random()*9)+'s;animation-delay:-'+(Math.random()*16)+'s"></i>'}
  var bok=el('div','ny-bok',bk),flk=el('div','ny-flk',f);

  function mount(){
    var b=document.body;b.insertBefore(bok,b.firstChild);b.appendChild(garl);b.appendChild(flk);
    var logo=document.querySelector('.nav .logo');
    if(logo){
      var cd=el('div','ny-cd','<b>'+(left>0?left:'')+'</b><span>'+(left>0?'kun qoldi':'Yangi yilingiz muborak!')+'</span><small>Yangi yil '+ny+(left>0?' gacha':'')+'</small><button type="button" id="ny-snow"></button>');
      logo.parentNode.insertBefore(cd,logo.nextSibling);
      var sb=document.getElementById('ny-snow');
      function lbl(){sb.textContent=H.className.indexOf('ny-plain')>=0?'❄ Qorni yoqish':'❄ Qorni o\'chirish'}
      lbl();
      sb.onclick=function(){var off=H.className.indexOf('ny-plain')<0;H.className=off?H.className+' ny-plain':H.className.replace(/\s*ny-plain/g,'');ls('gj_snow',off?'off':'on');lbl()};
    }
    var th=document.querySelector('.nav .theme');
    if(th)th.parentNode.insertBefore(el('div','ny-tree','<svg viewBox="0 0 150 190" aria-hidden="true"><defs><linearGradient id="nytg" x1="0" x2="1"><stop offset="0" stop-color="#0e4a3a"/><stop offset=".55" stop-color="#1d6b50"/><stop offset="1" stop-color="#0b3d30"/></linearGradient></defs><rect x="66" y="160" width="18" height="22" rx="3" fill="#6b4425"/><path d="M75 74 L140 164 Q75 150 10 164Z" fill="url(#nytg)"/><path d="M75 52 L128 120 Q75 110 22 120Z" fill="url(#nytg)"/><path d="M75 34 L118 92 Q75 84 32 92Z" fill="url(#nytg)"/><path d="M75 18 L106 64 Q75 58 44 64Z" fill="url(#nytg)"/><path d="M36 112 Q75 128 116 106 M28 150 Q78 166 130 142 M46 80 Q76 92 104 76" fill="none" stroke="#e8c26c" stroke-width="1.6" stroke-dasharray="1 4" stroke-linecap="round"/><circle class="o" cx="52" cy="118" r="5" fill="#d83a44"/><circle class="o" cx="96" cy="112" r="5" fill="#e8c26c" style="animation-delay:.8s"/><circle class="o" cx="74" cy="96" r="4.5" fill="#8fd6ff" style="animation-delay:1.6s"/><circle class="o" cx="40" cy="154" r="5.5" fill="#e8c26c" style="animation-delay:.4s"/><circle class="o" cx="110" cy="150" r="5.5" fill="#d83a44" style="animation-delay:1.2s"/><circle class="o" cx="76" cy="146" r="5" fill="#6fd39d" style="animation-delay:2s"/><circle class="o" cx="62" cy="70" r="4" fill="#d83a44" style="animation-delay:2.4s"/><circle class="o" cx="88" cy="58" r="3.5" fill="#e8c26c" style="animation-delay:1s"/><path d="M75 2 L79 13 L91 13 L81 20 L85 31 L75 24 L65 31 L69 20 L59 13 L71 13Z" fill="#f2cf72" stroke="#b8912f" stroke-width="1"/><rect x="18" y="168" width="26" height="18" rx="2" fill="#9b1c24"/><rect x="29" y="168" width="4" height="18" fill="#e8c26c"/><rect x="104" y="172" width="30" height="14" rx="2" fill="#e8c26c"/><rect x="117" y="172" width="4" height="14" fill="#9b1c24"/></svg>'),th);
    var tk=document.querySelector('.ticket');
    if(tk)tk.appendChild(el('div','','<svg class="ny-bow" viewBox="0 0 86 70" aria-hidden="true"><defs><linearGradient id="nyrb" x1="0" x2="1"><stop offset="0" stop-color="#7a1018"/><stop offset=".5" stop-color="#c62a35"/><stop offset="1" stop-color="#7a1018"/></linearGradient></defs><path d="M44 30 C30 8 8 6 10 22 C12 34 30 34 44 30Z" fill="url(#nyrb)"/><path d="M46 30 C60 6 84 8 80 24 C77 35 60 34 46 30Z" fill="url(#nyrb)"/><path d="M42 32 L30 66 L38 62 L44 68 L46 34Z" fill="#a51f29"/><path d="M48 32 L62 64 L54 61 L50 68 L46 34Z" fill="#8e1a23"/><circle cx="45" cy="31" r="7" fill="#d83a44"/></svg>').firstChild);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
