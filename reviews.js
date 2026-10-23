(()=>{
const C=SITE,$=id=>document.getElementById(id),E=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const SV=n=>{const f=Math.round(n);return '<span class="sv">'+'★'.repeat(f)+'</span><span class="se">'+'★'.repeat(5-f)+'</span>'};
let user=null,items=[],live=false,A={},pick=0;const LIM=4;let showAll=false;
const ago=t=>{const m=(Date.now()-t)/6e4;return m<1?'just now':m<60?Math.floor(m)+'m ago':m<1440?Math.floor(m/60)+'h ago':new Date(t).toLocaleDateString()};
const isAdmin=()=>!!(user&&C.adminEmail&&user.email&&user.email.toLowerCase()===C.adminEmail.toLowerCase());
function avatar(r){if(r.photo){const i=E('img','av');i.src=r.photo;i.alt='';i.referrerPolicy='no-referrer';i.onerror=()=>{i.replaceWith(E('div','av',(r.name||'?')[0].toUpperCase()))};return i}return E('div','av',(r.name||'?')[0].toUpperCase())}
function drawList(){const all=[...C.seedReviews,...items].sort((a,b)=>b.t-a.t),box=$('rvlist');box.textContent='';
 const avg=all.reduce((s,r)=>s+r.rating,0)/(all.length||1);$('rvavg').textContent=avg.toFixed(1);$('rvst').innerHTML=SV(avg);$('rvcnt').textContent=all.length+(all.length===1?' review':' reviews');
 (showAll?all:all.slice(0,LIM)).forEach(r=>{const c=E('div','rvc');c.appendChild(avatar(r));const d=E('div');d.style.flex='1';const h=E('div');h.appendChild(E('b','',r.admin?C.developer:r.name));
  if(r.admin)h.appendChild(E('span','bd','Developer'));h.appendChild(E('span','tm',ago(r.t)));d.appendChild(h);const st=E('div','st');st.innerHTML=SV(r.rating);d.appendChild(st);d.appendChild(E('p','',r.text));c.appendChild(d);
  if(r.uid&&user&&(isAdmin()||r.uid===user.uid)){const x=E('button','x','✕');x.title='Delete';x.onclick=()=>A.del(r.uid);c.appendChild(x)}box.appendChild(c)});if(all.length>LIM){const m=E('button','btn',showAll?'Show fewer comments':'See more comments ('+(all.length-LIM)+')');m.style.justifySelf='center';m.onclick=()=>{showAll=!showAll;drawList()};box.appendChild(m)}}
function drawForm(){const f=$('rvform');f.textContent='';
 if(!user){const b=E('button','btn p','Sign in with Google to rate & comment');b.onclick=()=>A.signIn();f.appendChild(b);if(!live)f.appendChild(E('div','rvnote','Preview mode: reviews are saved on this device only.'));return}
 const me=items.find(r=>r.uid===user.uid);if(me&&!pick)pick=me.rating;
 const top=E('div','rvrow');top.appendChild(avatar({photo:user.photoURL,name:user.displayName}));top.appendChild(E('b','',user.displayName||'You'));const o=E('button','lnk','Sign out');o.onclick=()=>A.signOut();o.style.marginLeft='auto';top.appendChild(o);f.appendChild(top);
 const pk=E('div','pick');for(let i=1;i<=5;i++){const b=E('button',i<=pick?'on':'','★');b.onclick=()=>{pick=i;[...pk.children].forEach((x,j)=>x.classList.toggle('on',j<i))};pk.appendChild(b)}f.appendChild(pk);
 const t=E('textarea');t.maxLength=400;t.placeholder='Write something nice about Sonify…';t.value=me?me.text:'';f.appendChild(t);
 const r=E('div','rvrow'),p=E('button','btn p sm',me?'Update review':'Post review');p.onclick=async()=>{if(!pick||!t.value.trim()){m.textContent='Pick a star rating and write a comment.';return}p.disabled=true;
  try{await A.post({uid:user.uid,name:user.displayName||'Listener',photo:user.photoURL||'',rating:pick,text:t.value.trim().slice(0,400),t:Date.now(),admin:isAdmin()});m.textContent='Thank you! 💜'}catch(e){m.textContent='Could not post. Please try again.'}p.disabled=false};
 r.appendChild(p);const m=E('span','rvnote',me?'One review per account, you can edit it anytime.':'One review per Google account.');r.appendChild(m);f.appendChild(r)}
const draw=()=>{drawForm();drawList()};
/* preview mode (no Firebase): saved in this browser only */
function demo(){const K='rv_demo';const ld=()=>{try{return JSON.parse(localStorage.getItem(K)||'[]')}catch(e){return[]}},sv=a=>{try{localStorage.setItem(K,JSON.stringify(a))}catch(e){}};
 items=ld();A.signIn=()=>{user={uid:'demo',displayName:'Guest',photoURL:'',email:''};draw()};A.signOut=()=>{user=null;pick=0;draw()};
 A.post=async r=>{items=ld().filter(x=>x.uid!==r.uid);items.push(r);sv(items);draw()};A.del=async u=>{items=ld().filter(x=>x.uid!==u);sv(items);pick=0;draw()};draw()}
/* live mode: Firebase Auth (Google) + Firestore realtime */
async function boot(){if(!C.firebase.apiKey||!C.firebase.projectId)return demo();
 try{const V='10.12.2',B='https://www.gstatic.com/firebasejs/'+V+'/';
  const [{initializeApp},au,fs]=await Promise.all([import(B+'firebase-app.js'),import(B+'firebase-auth.js'),import(B+'firebase-firestore.js')]);
  const app=initializeApp(C.firebase),auth=au.getAuth(app),db=fs.getFirestore(app),col=fs.collection(db,'reviews');live=true;
  A.signIn=()=>au.signInWithPopup(auth,new au.GoogleAuthProvider()).catch(()=>{});A.signOut=()=>{pick=0;return au.signOut(auth)};
  A.post=r=>fs.setDoc(fs.doc(db,'reviews',r.uid),r);A.del=u=>fs.deleteDoc(fs.doc(db,'reviews',u));
  au.onAuthStateChanged(auth,u=>{user=u;draw()});fs.onSnapshot(fs.query(col,fs.orderBy('t','desc')),sn=>{items=sn.docs.map(d=>d.data());draw()},()=>{});draw()
 }catch(e){live=false;demo()}}
draw();boot();
})();
