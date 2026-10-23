try{document.documentElement.dataset.theme=localStorage.getItem("theme")||"light"}catch(e){document.documentElement.dataset.theme="light"}
;
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6S0XDQK10V');
;
/* =====================================================================
   EDIT HERE — all text, links, version, changelog and FAQ live in SITE.
   The APK link is defined ONCE (apk) and used by every download button.
   ===================================================================== */
const SITE={
 name:"Sonify", tagline:"Your Music. Your Vibe.", developer:"Hashir",
 dlWait:15, /* seconds the visitor waits before the download starts */
 webPlayer:"", /* online player link for PC & Mac, added later */
 iosWeb:"", /* iOS web version link, added later */
 firebase:{apiKey:"",authDomain:"",projectId:"",appId:""}, /* paste Firebase config here to go live */
 dp:"", /* your Instagram profile photo file, e.g. dp.jpg (optional) */
 adminEmail:"", /* your Google email: marks your reviews as Developer (never shown) */
 seedReviews:[{name:"Mohammad Sudesh",rating:5,text:"Well done brother! You have built something really beautiful. Keep going.",t:1759600000000}], version:"v1.0 Beta", status:"Beta Release",
 apk:"https://github.com/itsmy5784-oss/Sonify/releases/download/v3.0.0/Sonify.V4.6.apk",
 siteUrl:"https://www.sonify.website",
 apkV4:"https://github.com/itsmy5784-oss/Sonify/releases/download/v3.0.0/Sonify.V4.6.apk",
 apkFile:"Sonify.beta.apk",
 marquee:["Offline Music","Beautiful Player","Smart Library","Powerful Search","Modern Interface","Privacy Focused"],
 features:[
  {icon:"⇩",title:"Offline Music",text:"Listen to your music without an internet connection."},
  {icon:"♫",title:"Beautiful Player",text:"A clean and immersive now-playing experience."},
  {icon:"▤",title:"Smart Library",text:"Quickly access songs, albums, artists and playlists."},
  {icon:"✦",title:"Modern Interface",text:"A beautiful interface designed for everyday listening."},
  {icon:"⌕",title:"Powerful Search",text:"Find your music quickly and easily."},
  {icon:"◐",title:"Custom Experience",text:"Make your music experience feel like yours."},
  {icon:"⚡",title:"Smooth Performance",text:"Fast and responsive throughout the application."},
  {icon:"⛨",title:"Privacy Focused",text:"Your local music stays yours."}],
 // img must match a key in SHOTS (home, cats, lib, search)
 shots:[{img:"home",title:"Home",text:"Explore countries & playlists"},{img:"disc",title:"Discover",text:"Moods & moments"},{img:"srch",title:"Search",text:"Songs, videos, albums & artists"},{img:"libr",title:"Library",text:"Downloads, local, WebDAV & SMB"}],
 categories:[["Energize","#6a3df0","#4a2bd0"],["1960s","#e0107a","#a80858"],["J-Pop","#4a9be0","#2f6fb8"],["2000s","#24488f","#162a5c"],["Iraqi","#e5501f","#b8340e"],["Punjabi","#a8308a","#7a1f66"],["Chill","#c26a0a","#8f4a05"],["Commute","#8a63ad","#5f4283"],["Feel good","#b0308a","#862066"],["Gaming","#d0602a","#a03e14"]],
 changelog:["Refined Sonify interface","Updated navigation","Improved player experience","New visual design","Performance improvements","Bug fixes","Improved animations"],
 faq:[
  {q:"What is Sonify?",a:"Sonify is a modern Android music player designed for a beautiful, simple and immersive listening experience."},
  {q:"Is Sonify free?",a:"Sonify V4 is available to download from this page."},
  {q:"Does Sonify work offline?",a:"Yes. You can listen to music saved on your device without an internet connection."},
  {q:"What Android versions are supported?",a:"Sonify is built for Android phones. Supported versions will be listed here as Sonify grows."},
  {q:"Which version should I download?",a:"Sonify V4.6 is the latest version. Use the Download APK button above to get it."},
  {q:"Where can I download Sonify?",a:"Use any Download button on this page to get the latest Sonify V4.6 APK."},
  {q:"How do I install the APK?",a:"Open the downloaded file. If Android asks, allow your browser to install apps from this source, then tap Install."}]
};
;
/* Embedded Sonify screenshots + app icon (resized). Replace a value with "file.jpg" to use your own file. */
const SHOTS={
 home:"assets/shot-home.jpg",
 homeL:"assets/shot-homeL.jpg",
 disc:"assets/shot-disc.jpg",
 discL:"assets/shot-discL.jpg",
 srch:"assets/shot-srch.jpg",
 srchL:"assets/shot-srchL.jpg",
 libr:"assets/shot-libr.jpg",
 librL:"assets/shot-librL.jpg",
 icon:"assets/favicon.png"
};
;
(()=>{
const q=(s,c=document)=>c.querySelector(s),qa=(s,c=document)=>[...c.querySelectorAll(s)],H=(id,h)=>{q('#'+id).innerHTML=h};
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-shot]').forEach(i=>i.src=SHOTS[i.dataset.shot]);
/* screenshots follow the site theme: light screens in light mode, dark screens in dark mode */
function applyShots(){const L=document.documentElement.dataset.theme==='light';document.querySelectorAll('[data-k]').forEach(i=>{const k=i.dataset.k;i.src=SHOTS[L&&SHOTS[k+'L']?k+'L':k]})}
new MutationObserver(applyShots).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});applyShots();
const ICON='<img src="'+SHOTS.icon+'" alt="">';
H('logo',ICON+SITE.name.toUpperCase());H('flogo',ICON+SITE.name.toUpperCase());
H('h1','<span class="clip stroke">'+[...'Son'].map((c,i)=>'<span class="ch" style="--i:'+i+'">'+c+'</span>').join('')+'</span><span class="clip grad">'+[...'ify'].map((c,i)=>'<span class="ch" style="--i:'+(i+3)+'">'+c+'</span>').join('')+'</span>');
H('track',[...SITE.marquee,...SITE.marquee].map(t=>'<span>'+t+'</span>').join(''));
H('feats',SITE.features.map((f,i)=>'<div class="fc reveal" style="transition-delay:'+(i%4)*.08+'s"><div class="ic">'+f.icon+'</div><h3>'+f.title+'</h3><p>'+f.text+'</p></div>').join(''));
const GL=['#7c4dff','#e0107a','#22d3ee','#a26cf6','#f472b6','#34d399','#f59e0b','#60a5fa'];/* glow colour per screenshot */
H('gal',SITE.shots.map((s,i)=>'<div class="shot" style="--i:'+i+'"><i class="gl" style="--gc:'+GL[i%8]+'"></i><div class="tilt"><div class="phone fx"><img data-k="'+s.img+'" width="560" height="1115" src="'+SHOTS[s.img]+'" alt="Sonify '+s.title+' screen" loading="lazy"></div></div><p>'+s.title+'</p><small>'+s.text+'</small></div>').join(''));
H('dots',SITE.shots.map(s=>'<button aria-label="Show '+s.title+'"></button>').join(''));applyShots();
const gal=q('#gal'),shots=qa('.shot',gal),tl=shots.map(e=>q('.tilt',e)),dots=qa('#dots button');let af=0,auto=0,touched=false,cur=0;
const upd=()=>{af=0;const g=gal.getBoundingClientRect(),c=g.left+g.width/2;let best=0,bd=9;
 shots.forEach((el,i)=>{const r=el.getBoundingClientRect(),d=(r.left+r.width/2-c)/r.width,a=Math.abs(d);if(a<bd){bd=a;best=i}
  tl[i].style.setProperty('--r',(-d*22).toFixed(1));tl[i].style.setProperty('--s',(1-Math.min(a,1.6)*.13).toFixed(3));tl[i].style.setProperty('--o',(1-Math.min(a,2)*.22).toFixed(2))});
 shots.forEach((el,i)=>el.classList.toggle('act',i===best));dots.forEach((d,i)=>d.classList.toggle('on',i===best));cur=best};
const go=i=>{const e=shots[i];gal.scrollTo({left:e.offsetLeft-(gal.clientWidth-e.offsetWidth)/2,behavior:rm?'auto':'smooth'})};
const stop=()=>{touched=true;clearInterval(auto)};
['pointerdown','wheel','touchstart','keydown'].forEach(ev=>gal.addEventListener(ev,stop,{passive:true}));
dots.forEach((d,i)=>d.onclick=()=>{stop();go(i)});
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){gal.classList.add('in');if(!touched&&!rm){clearInterval(auto);auto=setInterval(()=>go((cur+1)%shots.length),3200)}}else clearInterval(auto)}),{threshold:.35}).observe(gal);
gal.addEventListener('scroll',()=>{if(!af)af=requestAnimationFrame(upd)},{passive:true});addEventListener('resize',upd);upd();
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!rm)shots.forEach((el,i)=>{const t=tl[i];
 el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();t.style.setProperty('--mx',(((e.clientX-r.left)/r.width-.5)*18).toFixed(1));t.style.setProperty('--my',(((e.clientY-r.top)/r.height-.5)*-14).toFixed(1))});
 el.addEventListener('pointerleave',()=>{t.style.setProperty('--mx',0);t.style.setProperty('--my',0)})});
H('cats',SITE.categories.map(c=>'<div class="cat reveal" style="--c1:'+c[1]+';--c2:'+c[2]+'">'+c[0]+'</div>').join(''));
q('#ver').textContent='Version: '+SITE.version;q('#stat').textContent='Status: '+SITE.status;
H('log',SITE.changelog.map(l=>'<li>'+l+'</li>').join(''));
H('faqs',SITE.faq.map(f=>'<details class="reveal"><summary>'+f.q+'</summary><p>'+f.a+'</p></details>').join(''));
q('#dev').textContent=SITE.developer;q('#app').textContent=SITE.name;q('#by').textContent='Developed by '+SITE.developer;
/* download buttons: one APK link for all */
qa('.dl').forEach(a=>{a.href=SITE.apk;a.setAttribute('download',SITE.apkFile);a.rel='noopener';const t=a.textContent;
 a.addEventListener('click',()=>{try{gtag('event','apk_download',{app_version:a.dataset.ver||'v4',file_name:(a.getAttribute('download')||''),variant:a.dataset.var||'best'})}catch(e){}afterDl();setTimeout(()=>{const t=q('#thx');t.classList.add('show');t.scrollIntoView({behavior:rm?'auto':'smooth',block:'center'})},1500);if(a.dataset.b)return;a.dataset.b=1;a.textContent='Preparing Sonify…';setTimeout(()=>{a.textContent='Check your downloads';setTimeout(()=>{a.textContent=a.dataset.l||t;delete a.dataset.b},3500)},1200)})});
/* Beta / V2 tabs inside the download section */
let curV=0,vtm=null;
const VS=[{n:'V4.6',d:'Explore music by country, search songs, videos, albums and artists, and connect your own sources.',v:'V4.6',s:'Latest Release',l:'Download APK',apk:SITE.apkV4,f:'Sonify.V4.6.apk',img:SHOTS.icon,ic:1,
log:["Explore Countries: popular music from Pakistan, India, the United States and more", "Personalized home greeting with curated playlist carousels", "Dark and Light themes", "Search with filters: All, Songs, Videos, Albums, Artists and Playlists", "Moods &amp; moments: Chill, Commute, Energize, Focus, Party, Sleep and more", "Library: Downloads, Local Music, WebDAV and SMB sources", "Sign in with Google to see liked songs, playlists and YouTube Music history", "Mini-player with play and next, plus a floating bottom bar"]}];
function setVer(i){curV=i;const d=VS[i],b=q('#beta .dl');q('#vname').textContent=d.n;q('#vdesc').textContent=d.d;q('#ver').textContent='Version: '+d.v;q('#stat').textContent='Status: '+d.s;
 q('#log').innerHTML=d.log.map(l=>'<li>'+l+'</li>').join('');q('#vshot').src=d.img;q('#vshot').classList.toggle('ic',!!d.ic);b.dataset.ver=d.n.toLowerCase();clearInterval(vtm);if(d.imgs&&!rm){let k=0;vtm=setInterval(()=>{k=(k+1)%d.imgs.length;const m=q('#vshot');m.style.opacity=0;setTimeout(()=>{m.src=d.imgs[k];m.style.opacity=1},250)},3200)}b.href=d.apk;b.dataset.l=d.l;if(!b.dataset.b)b.textContent=d.l;
 if(/\.apk$/i.test(d.apk)){b.setAttribute('download',d.f);b.removeAttribute('target')}else{b.removeAttribute('download');b.target='_blank'}
 const bx=q('#beta .beta>div');bx.classList.remove('vfade');void bx.offsetWidth;bx.classList.add('vfade')}
setVer(VS.length-1);
/* follow popup after any download starts */
const fm=q('#fm');if(SITE.dp){const i=new Image();i.className='fav';i.alt='Hashir';i.src=SITE.dp;q('#fav').replaceWith(i)}
function afterDl(){setTimeout(()=>{fm.hidden=false;q('#fgo').focus()},1400)}
q('#fno').addEventListener('click',()=>{fm.hidden=true});q('#fgo').addEventListener('click',()=>{try{gtag('event','follow_click',{network:'instagram'})}catch(e){}fm.hidden=true});
fm.addEventListener('click',e=>{if(e.target===fm)fm.hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='Escape')q('#fm').hidden=true});
/* share: native share sheet, or copy the website link */
const tst=q('#toast');let tt;const toast=m=>{tst.textContent=m;tst.hidden=false;clearTimeout(tt);tt=setTimeout(()=>{tst.hidden=true},2600)};
async function shareSite(){const u=SITE.siteUrl,d={title:'Sonify',text:'Try Sonify, a music app for Android.',url:u};try{gtag('event','share_click')}catch(x){}
 if(navigator.share){try{await navigator.share(d);return}catch(e){if(e&&e.name==='AbortError')return}}
 try{await navigator.clipboard.writeText(u)}catch(e){const t=document.createElement('textarea');t.value=u;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(x){}t.remove()}
 toast('Link copied: '+u.replace('https://',''))}
q('#shb').addEventListener('click',shareSite);q('#fsh').addEventListener('click',shareSite);
/* top download buttons: scroll to the Beta section */
/* star rating */
const sb=qa('#stars button');sb.forEach((b,i)=>b.addEventListener('click',()=>{sb.forEach((x,j)=>x.classList.toggle('on',j<=i));q('#rmsg').textContent=i>=3?'Thank you for the love! 💜':'Thanks! Tell us how to improve.'}));
/* theme, menu, header, progress, reveal, active link */
const root=document.documentElement,tb=q('#theme');
tb.onclick=()=>{const t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}};
const nav=q('#nav'),bg=q('#burger'),set=o=>{nav.classList.toggle('open',o);bg.setAttribute('aria-expanded',o)};
bg.onclick=()=>set(!nav.classList.contains('open'));qa('a',nav).forEach(a=>a.addEventListener('click',()=>set(false)));
const hd=q('#top'),bar=q('#bar'),hero=q('#home');let tk=false;
const on=()=>{tk=false;const h=root.scrollHeight-innerHeight||1;bar.style.transform='scaleX('+scrollY/h+')';hd.classList.toggle('s',scrollY>20);if(!rm)hero.style.setProperty('--sy',Math.min(scrollY,innerHeight))};
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(on)}},{passive:true});on();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});qa('.reveal').forEach(e=>io.observe(e));
const links=qa('a',nav),so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
['features','screens','moods','beta','faq'].forEach(id=>so.observe(q('#'+id)));
})();
;
(()=>{const st=document.getElementById('stick'),b=document.getElementById('beta');let inB=false,tk=false;
new IntersectionObserver(e=>{inB=e[0].isIntersecting;up()}).observe(b);
function up(){tk=false;st.hidden=!(scrollY>700&&!inB&&true)}
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(up)}},{passive:true});
st.addEventListener('click',e=>{e.preventDefault();try{gtag('event','sticky_cta')}catch(x){}b.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'})});})();
;
/* Push notifications: only asked for when the visitor clicks the button. Registers sw.js from the site root. */
(()=>{const b=document.getElementById('pnBtn'),m=document.getElementById('pnMsg');
const say=t=>{m.textContent=t};
if(!('serviceWorker' in navigator)||!('Notification' in window)){b.disabled=true;say('Notifications are not supported in this browser.');return}
if(Notification.permission==='granted'){b.textContent='🔔 Notifications on';b.disabled=true}
b.addEventListener('click',async()=>{
 try{
  const perm=await Notification.requestPermission();
  if(perm!=='granted'){say('Notifications were not allowed.');return}
  await navigator.serviceWorker.register('sw.js');
  b.textContent='🔔 Notifications on';b.disabled=true;say('Thanks! You will get updates from Sonify.');
 }catch(e){say('Could not turn on notifications on this page.')}
});})();
;
/* Pages, download journey and loading screens (all inside this one file) */
(()=>{const $=id=>document.getElementById(id),B=document.body,RM=matchMedia('(prefers-reduced-motion: reduce)').matches,T0=document.title;
const PG={features:['Features','Everything Sonify can do'],blog:['Blog','Tips, guides and stories about Sonify'],screens:['Screenshots','Real screens from the app'],moods:['Categories','Moods and moments, and more to explore'],reviews:['Reviews','What listeners say'],faq:['FAQ','Quick answers'],about:['About','The developer and what comes next'],install:['How to install','Get Sonify on Android in a minute']};
const ORD=Object.keys(PG),ev=(n,o)=>{try{gtag('event',n,o)}catch(e){}};
let lt=[],last=null;const WAIT=SITE.dlWait||15;
let li=null;
function loader(ms,msgs,done,tips){const L=$('ld'),F=$('ldF'),X=$('ldT'),Tp=$('ldTip'),S=$('ldS');lt.forEach(clearTimeout);lt=[];clearInterval(li);L.hidden=false;F.style.transition='none';F.style.transform='scaleX(0)';X.textContent=msgs[0];Tp.textContent='';S.textContent='';void F.offsetWidth;F.style.transition='transform '+ms+'ms linear';F.style.transform='scaleX(1)';
 msgs.forEach((m,i)=>{if(i)lt.push(setTimeout(()=>{X.textContent=m},ms*i/msgs.length))});
 if(tips&&tips.length){const t0=Date.now();let k=0;const sh=()=>{Tp.style.opacity=0;lt.push(setTimeout(()=>{Tp.textContent='Tip: '+tips[k++%tips.length];Tp.style.opacity=1},250))};sh();li=setInterval(()=>{S.textContent='About '+Math.max(0,Math.ceil((ms-(Date.now()-t0))/1000))+' seconds left'},500);lt.push(setInterval(sh,5000))}
 lt.push(setTimeout(()=>{L.hidden=true;clearInterval(li);done&&done()},ms))}
function go(h){history.pushState(null,'',h);route()}
function resetDl(){$('dlReady').hidden=true;const b=$('dlStart');b.disabled=false;b.textContent='Download APK';}
function route(){const h=location.hash,m=h.match(/^#\/([a-z]+)$/);let pg='home',an=null;
 if(m&&(PG[m[1]]||m[1]==='new'||m[1]==='join'))pg=m[1];else if(h.length>1&&h!=='#/')an=h.slice(1);
 B.dataset.page=pg;document.querySelectorAll('[data-pg]').forEach(e=>{e.hidden=!e.dataset.pg.split(' ').includes(pg)});
 const hd=$('xhead'),nx=$('xnext'),isP=!!PG[pg];hd.hidden=!isP;nx.hidden=!isP;
 if(isP){hd.querySelector('h1').textContent=PG[pg][0];hd.querySelector('p').textContent=PG[pg][1];const n=ORD[(ORD.indexOf(pg)+1)%ORD.length];$('xnl').href='#/'+n;$('xnl').textContent='Next: '+PG[n][0]+' →';document.title=PG[pg][0]+' · Sonify'}
 else document.title=pg==='new'?'Sonify V4.6 · Download':pg==='join'?'Join the Sonify WhatsApp channel':T0;
 if(pg!==last){last=pg;if(pg==='new')resetDl();if(pg==='join')startJoin();if(!RM)[document.querySelector('main'),$('dlpage'),$('joinpage')].forEach(e=>{e.classList.remove('x-in');void e.offsetWidth;e.classList.add('x-in')})}
 if(an)setTimeout(()=>{const e=$(an);if(!e)return;an==='get'?slowTo(e):e.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'})},60);else scrollTo(0,0);
 setTimeout(()=>{dispatchEvent(new Event('resize'));dispatchEvent(new Event('scroll'))},120)}
addEventListener('hashchange',route);addEventListener('popstate',route);
document.addEventListener('click',e=>{const a=e.target.closest('a[href="#get"]');if(!a)return;e.preventDefault();ev('download_nav_click');go('#get')});
/* download journey: section below -> loading screen -> version page -> 6 second loading -> APK */
$('xGo').addEventListener('click',()=>{ev('continue_to_download');loader(3200,['Getting things ready…','Finding the latest release…','Opening the download page…'],()=>go('#/new'))});
$('dlStart').addEventListener('click',()=>{const b=$('dlStart');if(b.disabled)return;b.disabled=true;b.textContent='Please wait…';ev('download_clicked',{app_version:'v4.6'});
 loader(WAIT*1000,['Checking your device…','Contacting the server…','Finding the latest release…','Preparing Sonify V4.6…','Scanning the file…','Verifying the file…','Packing your download…','Almost there…'],()=>{const a=$('dlReal'),f=SITE.apk.split('/').pop();a.href=SITE.apk;a.setAttribute('download',f);
  $('dlReady').hidden=false;b.disabled=false;b.textContent='Download again';a.click();ev('apk_download',{app_version:'v4.6',file_name:f,source:'download_page'});setTimeout(()=>{$('wam').hidden=false;$('wamJoin').focus()},1200)},BL.map(p=>p[3]))});
$('xShare').addEventListener('click',async()=>{const u='https://www.sonify.website';ev('share_click');
 try{if(navigator.share){await navigator.share({title:'Sonify',text:'Try Sonify, a music app for Android.',url:u});return}}catch(e){if(e&&e.name==='AbortError')return}
 try{await navigator.clipboard.writeText(u)}catch(e){}const t=$('toast');t.textContent='Link copied: www.sonify.website';t.hidden=false;setTimeout(()=>{t.hidden=true},2600)});
/* mood picker */
const MO={Chill:['Hits Cafe','Slow down and unwind.'],Commute:['Feel-Good Hip Hop and R&B','Good company for the ride.'],Energize:['pump-up pop','Wake up your energy.'],'Feel good':['Sunshine Indie','Easy, bright and happy.'],Focus:['Lofi Loft','Keep your head in the work.'],Gaming:['Gaming Hits','Music for your next match.'],Party:['Bollywood Dance Essentials','Turn it up.'],Romance:['Bollywood Romantic Moments','For the soft moments.'],Sad:['Bollywood Melancholy','When you need to feel it out.'],Sleep:['Classical for Sleeping','Drift off gently.'],Workout:[null,'Fuel for your session.']};
const xm=$('xm'),xr=$('xmr');Object.keys(MO).forEach(k=>{const b=document.createElement('button');b.type='button';b.className='x-chip';b.textContent=k;b.setAttribute('aria-pressed','false');
 b.addEventListener('click',()=>{xm.querySelectorAll('.x-chip').forEach(c=>c.setAttribute('aria-pressed',c===b));const d=MO[k];xr.style.animation='none';void xr.offsetWidth;xr.style.animation='';
  xr.innerHTML='';const t=document.createElement('b');t.textContent=k;xr.appendChild(t);const p=document.createElement('p');p.textContent=(d[0]?'Playlist shown in the app: '+d[0]+'. ':'')+d[1];xr.appendChild(p)});xm.appendChild(b)});
/* slow, eased scroll down to the download section */
let sc=0;['wheel','touchstart','keydown'].forEach(t=>addEventListener(t,()=>{sc++},{passive:true}));
function slowTo(el){if(RM){el.scrollIntoView({block:'center'});return}const y0=scrollY,tg=()=>Math.max(0,el.getBoundingClientRect().top+scrollY-(innerHeight-el.offsetHeight)/2),ms=Math.min(3200,Math.max(1500,Math.abs(tg()-y0)*.9)),t0=performance.now(),id=sc,ez=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
 (function f(n){if(id!==sc)return;const p=Math.min((n-t0)/ms,1);scrollTo({top:y0+(tg()-y0)*ez(p),behavior:'instant'});if(p<1)requestAnimationFrame(f)})(t0)}
/* WhatsApp page: short countdown before the continue button unlocks */
let jt=null;function startJoin(){const b=$('jpGo'),n=$('jpNote');clearInterval(jt);let c=8;b.disabled=true;n.textContent='Continue unlocks in '+c+'s';
 jt=setInterval(()=>{c--;if(c<=0){clearInterval(jt);b.disabled=false;n.textContent='Thanks for stopping by. Your download is next.'}else n.textContent='Continue unlocks in '+c+'s'},1000)}
$('jpGo').addEventListener('click',()=>{if($('jpGo').disabled)return;ev('join_continue');loader(1600,['Almost there…','Opening the version page…'],()=>go('#/new'))});
document.addEventListener('click',e=>{const a=e.target.closest('[data-track]');if(a)ev(a.dataset.track)});
/* blog */
const BL=[['Guide','3 min read','Find music by mood','Skip the endless scrolling and pick a mood like Chill, Focus, Party or Sleep.',['Sonify groups music into moments such as Chill, Commute, Energize, Feel good, Focus, Gaming, Party, Romance, Sad, Sleep and Workout.','Each card opens a playlist, for example Lofi Loft under Focus or Classical for Sleeping under Sleep. Start there, then follow the artists you like.']],
['Explore','3 min read','Music from around the world','The Home screen has an Explore Countries row so you can jump into the sound of a place.',['You will find Pakistan with Urdu and Coke Studio, India with Bollywood and Punjabi, the United States and more.','It is a quick way to find something new when your usual playlists feel stale.']],
['Guide','4 min read','Search like a pro','Type a few letters and Sonify suggests results while you type.',['Use the filters under the search bar to narrow things down: All, Songs, Videos, Albums, Artists and Playlists.','Recent searches are kept so you can repeat one quickly, and the clear button empties the box in one tap.']],
['Library','4 min read','Your own music, your own sources','Your library is not only online music. It also brings in files you already own.',['Under On Device you will find Downloads and Local Music. WebDAV and SMB let you connect a server or a network share that holds your music.','You connect them under Sources in the app. If you keep music on a home server or NAS, this is how Sonify can reach it.']],
['Design','2 min read','Dark, light or both','Sonify comes with Dark and Light themes, and so does this website.',['Dark themes are easier on the eyes at night, and on AMOLED screens they can also save a little battery.','Switch any time from the theme button at the top of this page, or from Settings in the app.']],
['Safety','3 min read','Installing the APK safely','Sonify is installed from an APK file, so a few habits keep you safe.',['Download only from the official button on this website. The file is about 55.9 MB, so be careful if a file looks very different.','Android may ask you to allow installs from your browser. You can switch that permission off again after installing.']]];
const bl=$('blogList');BL.forEach(p=>{const a=document.createElement('article');a.className='bp';const h=document.createElement('button');h.type='button';h.className='bp-h';h.setAttribute('aria-expanded','false');
 [['bp-t',p[0]+' · '+p[1],'span'],[null,p[2],'b'],['bp-ex',p[3],'span'],['bp-ar','+','span']].forEach(x=>{const e=document.createElement(x[2]);if(x[0])e.className=x[0];e.textContent=x[1];h.appendChild(e)});
 const b=document.createElement('div');b.className='bp-b';const i=document.createElement('div');p[4].forEach(t=>{const q=document.createElement('p');q.textContent=t;i.appendChild(q)});b.appendChild(i);
 h.addEventListener('click',()=>{const o=a.classList.toggle('open');h.setAttribute('aria-expanded',o);if(o)ev('blog_open',{post:p[2]})});a.appendChild(h);a.appendChild(b);bl.appendChild(a)});
/* button ripple and card spotlight */
document.addEventListener('pointerdown',e=>{const b=e.target.closest('.btn');if(!b||RM||b.disabled)return;const r=b.getBoundingClientRect(),d=Math.max(r.width,r.height),s=document.createElement('span');s.className='rp';s.style.cssText='width:'+d+'px;height:'+d+'px;left:'+(e.clientX-r.left-d/2)+'px;top:'+(e.clientY-r.top-d/2)+'px';b.appendChild(s);setTimeout(()=>s.remove(),620)});
document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const c=e.target.closest&&e.target.closest('.x-card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
const wm=$('wam'),cw=()=>{wm.hidden=true};$('wamNo').addEventListener('click',cw);wm.addEventListener('click',e=>{if(e.target===wm)cw()});addEventListener('keydown',e=>{if(e.key==='Escape')cw()});
route();})();
