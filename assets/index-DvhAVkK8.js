var _t=Object.defineProperty;var mt=(e,t,n)=>t in e?_t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var qe=(e,t,n)=>mt(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ce(){}function bt(e){return e()}function tt(){return Object.create(null)}function ae(e){e.forEach(bt)}function K(e){return typeof e=="function"}function Ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function vt(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function H(e){e.parentNode&&e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function g(){return T(" ")}function kt(){return T("")}function S(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function s(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function yt(e){return Array.from(e.childNodes)}function wt(e,t){t=""+t,e.data!==t&&(e.data=t)}let Je;function Se(e){Je=e}const ve=[],lt=[];let ke=[];const nt=[],St=Promise.resolve();let Ye=!1;function Ct(){Ye||(Ye=!0,St.then(ht))}function Ge(e){ke.push(e)}const Ke=new Set;let me=0;function ht(){if(me!==0)return;const e=Je;do{try{for(;me<ve.length;){const t=ve[me];me++,Se(t),zt(t.$$)}}catch(t){throw ve.length=0,me=0,t}for(Se(null),ve.length=0,me=0;lt.length;)lt.pop()();for(let t=0;t<ke.length;t+=1){const n=ke[t];Ke.has(n)||(Ke.add(n),n())}ke.length=0}while(ve.length);for(;nt.length;)nt.pop()();Ye=!1,Ke.clear(),Se(e)}function zt(e){if(e.fragment!==null){e.update(),ae(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ge)}}function jt(e){const t=[],n=[];ke.forEach(a=>e.indexOf(a)===-1?t.push(a):n.push(a)),n.forEach(a=>a()),ke=t}const Oe=new Set;let he;function Ve(){he={r:0,c:[],p:he}}function Ue(){he.r||ae(he.c),he=he.p}function ee(e,t){e&&e.i&&(Oe.delete(e),e.i(t))}function fe(e,t,n,a){if(e&&e.o){if(Oe.has(e))return;Oe.add(e),he.c.push(()=>{Oe.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}else a&&a()}function Qe(e){e&&e.c()}function He(e,t,n){const{fragment:a,after_update:i}=e.$$;a&&a.m(t,n),Ge(()=>{const r=e.$$.on_mount.map(bt).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...r):ae(r),e.$$.on_mount=[]}),i.forEach(Ge)}function Re(e,t){const n=e.$$;n.fragment!==null&&(jt(n.after_update),ae(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function At(e,t){e.$$.dirty[0]===-1&&(ve.push(e),Ct(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function De(e,t,n,a,i,r,c=null,u=[-1]){const d=Je;Se(e);const o=e.$$={fragment:null,ctx:[],props:r,update:ce,not_equal:i,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:tt(),dirty:u,skip_bound:!1,root:t.target||d.$$.root};c&&c(o.root);let p=!1;if(o.ctx=n?n(e,t.props||{},(h,m,...v)=>{const z=v.length?v[0]:m;return o.ctx&&i(o.ctx[h],o.ctx[h]=z)&&(!o.skip_bound&&o.bound[h]&&o.bound[h](z),p&&At(e,h)),m}):[],o.update(),p=!0,ae(o.before_update),o.fragment=a?a(o.ctx):!1,t.target){if(t.hydrate){const h=yt(t.target);o.fragment&&o.fragment.l(h),h.forEach(H)}else o.fragment&&o.fragment.c();t.intro&&ee(e.$$.fragment),He(e,t.target,t.anchor),ht()}Se(d)}class Ie{constructor(){qe(this,"$$");qe(this,"$$set")}$destroy(){Re(this,1),this.$destroy=ce}$on(t,n){if(!K(n))return ce;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(t){this.$$set&&!vt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Lt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Lt);function Tt(e){let t,n,a,i,r,c,u,d,o,p,h,m,v,z,B,N,y,R,E,C,A,L,_,W,O,G,X,$,D,F,J,Q,x,b,k,w,j,V,Z,q,re,de,ye,oe,U,pe,ie,_e,ge,M,Y,se,ue,Ce,te,ze,je,We,Ae,le,Le,Te,Xe,Be,ne,Pe,Me,Ze,Ee,$e,be,xe,Fe,et;return{c(){t=f("div"),n=f("h2"),n.textContent="1. Choose attacker/defender:",a=g(),i=f("aside"),r=f("label"),c=f("input"),d=g(),o=f("label"),p=f("input"),v=g(),z=f("label"),B=f("input"),R=g(),E=f("label"),C=f("input"),_=g(),W=f("label"),O=f("input"),$=g(),D=f("label"),F=f("input"),x=g(),b=f("aside"),k=f("label"),w=f("input"),V=g(),Z=f("label"),q=f("input"),ye=g(),oe=f("label"),U=f("input"),_e=g(),ge=f("label"),M=f("input"),ue=g(),Ce=f("label"),te=f("input"),We=g(),Ae=f("label"),le=f("input"),Xe=g(),Be=f("label"),ne=f("input"),Ze=g(),Ee=f("p"),Ee.innerHTML=`<strong>Remember:</strong> A site that isn&#39;t ruled by a player, is ruled by
		<em>Bandits</em>. Also, campaigning costs <strong>2 supply</strong>.`,$e=g(),be=f("button"),xe=T("Next"),s(n,"class","svelte-fg7yez"),s(c,"type","radio"),s(c,"name","attacker"),c.value="purple",c.disabled=u=e[4]==="purple",s(c,"class","svelte-fg7yez"),s(r,"class","faction svelte-fg7yez"),s(p,"type","radio"),s(p,"name","attacker"),p.value="red",p.disabled=h=e[4]==="red",p.checked=m=e[3]==="red",s(p,"class","svelte-fg7yez"),s(o,"class","red faction svelte-fg7yez"),s(B,"type","radio"),s(B,"name","attacker"),B.value="blue",B.disabled=N=e[4]==="blue",B.checked=y=e[3]==="blue",s(B,"class","svelte-fg7yez"),s(z,"class","blue faction svelte-fg7yez"),s(C,"type","radio"),s(C,"name","attacker"),C.value="yellow",C.disabled=A=e[4]==="yellow",C.checked=L=e[3]==="yellow",s(C,"class","svelte-fg7yez"),s(E,"class","yellow faction svelte-fg7yez"),s(O,"type","radio"),s(O,"name","attacker"),O.value="black",O.disabled=G=e[4]==="black",O.checked=X=e[3]==="black",s(O,"class","svelte-fg7yez"),s(W,"class","black faction svelte-fg7yez"),s(F,"type","radio"),s(F,"name","attacker"),F.value="white",F.disabled=J=e[4]==="white",F.checked=Q=e[3]==="white",s(F,"class","svelte-fg7yez"),s(D,"class","white faction svelte-fg7yez"),s(i,"class","atk svelte-fg7yez"),s(w,"type","radio"),s(w,"name","defender"),w.value="bandit",w.checked=j=e[4]==="bandit",s(w,"class","svelte-fg7yez"),s(k,"class","bandit faction svelte-fg7yez"),s(q,"type","radio"),s(q,"name","defender"),q.value="red",q.disabled=re=e[3]==="red",q.checked=de=e[4]==="red",s(q,"class","svelte-fg7yez"),s(Z,"class","red faction svelte-fg7yez"),s(U,"type","radio"),s(U,"name","defender"),U.value="blue",U.disabled=pe=e[3]==="blue",U.checked=ie=e[4]==="blue",s(U,"class","svelte-fg7yez"),s(oe,"class","blue faction svelte-fg7yez"),s(M,"type","radio"),s(M,"name","defender"),M.value="yellow",M.disabled=Y=e[3]==="yellow",M.checked=se=e[4]==="yellow",s(M,"class","svelte-fg7yez"),s(ge,"class","yellow faction svelte-fg7yez"),s(te,"type","radio"),s(te,"name","defender"),te.value="black",te.disabled=ze=e[3]==="black",te.checked=je=e[4]==="black",s(te,"class","svelte-fg7yez"),s(Ce,"class","black faction svelte-fg7yez"),s(le,"type","radio"),s(le,"name","defender"),le.value="white",le.disabled=Le=e[3]==="white",le.checked=Te=e[4]==="white",s(le,"class","svelte-fg7yez"),s(Ae,"class","white faction svelte-fg7yez"),s(ne,"type","radio"),s(ne,"name","defender"),ne.value="purple",ne.disabled=Pe=e[3]==="purple",ne.checked=Me=e[4]==="purple",s(ne,"class","svelte-fg7yez"),s(Be,"class","faction svelte-fg7yez"),s(b,"class","def svelte-fg7yez"),s(Ee,"class","svelte-fg7yez"),be.disabled=e[5],s(be,"class","svelte-fg7yez"),s(t,"class","panel svelte-fg7yez"),s(t,"data-panel","players")},m(we,P){I(we,t,P),l(t,n),l(t,a),l(t,i),l(i,r),l(r,c),l(i,d),l(i,o),l(o,p),l(i,v),l(i,z),l(z,B),l(i,R),l(i,E),l(E,C),l(i,_),l(i,W),l(W,O),l(i,$),l(i,D),l(D,F),l(t,x),l(t,b),l(b,k),l(k,w),l(b,V),l(b,Z),l(Z,q),l(b,ye),l(b,oe),l(oe,U),l(b,_e),l(b,ge),l(ge,M),l(b,ue),l(b,Ce),l(Ce,te),l(b,We),l(b,Ae),l(Ae,le),l(b,Xe),l(b,Be),l(Be,ne),l(t,Ze),l(t,Ee),l(t,$e),l(t,be),l(be,xe),Fe||(et=[S(c,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),S(p,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),S(B,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),S(C,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),S(O,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),S(F,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),S(w,"click",function(){K(e[2])&&e[2].apply(this,arguments)}),S(q,"click",function(){K(e[2])&&e[2].apply(this,arguments)}),S(U,"click",function(){K(e[2])&&e[2].apply(this,arguments)}),S(M,"click",function(){K(e[2])&&e[2].apply(this,arguments)}),S(te,"click",function(){K(e[2])&&e[2].apply(this,arguments)}),S(le,"click",function(){K(e[2])&&e[2].apply(this,arguments)}),S(ne,"click",function(){K(e[2])&&e[2].apply(this,arguments)}),S(be,"click",function(){K(e[0])&&e[0].apply(this,arguments)})],Fe=!0)},p(we,[P]){e=we,P&16&&u!==(u=e[4]==="purple")&&(c.disabled=u),P&16&&h!==(h=e[4]==="red")&&(p.disabled=h),P&8&&m!==(m=e[3]==="red")&&(p.checked=m),P&16&&N!==(N=e[4]==="blue")&&(B.disabled=N),P&8&&y!==(y=e[3]==="blue")&&(B.checked=y),P&16&&A!==(A=e[4]==="yellow")&&(C.disabled=A),P&8&&L!==(L=e[3]==="yellow")&&(C.checked=L),P&16&&G!==(G=e[4]==="black")&&(O.disabled=G),P&8&&X!==(X=e[3]==="black")&&(O.checked=X),P&16&&J!==(J=e[4]==="white")&&(F.disabled=J),P&8&&Q!==(Q=e[3]==="white")&&(F.checked=Q),P&16&&j!==(j=e[4]==="bandit")&&(w.checked=j),P&8&&re!==(re=e[3]==="red")&&(q.disabled=re),P&16&&de!==(de=e[4]==="red")&&(q.checked=de),P&8&&pe!==(pe=e[3]==="blue")&&(U.disabled=pe),P&16&&ie!==(ie=e[4]==="blue")&&(U.checked=ie),P&8&&Y!==(Y=e[3]==="yellow")&&(M.disabled=Y),P&16&&se!==(se=e[4]==="yellow")&&(M.checked=se),P&8&&ze!==(ze=e[3]==="black")&&(te.disabled=ze),P&16&&je!==(je=e[4]==="black")&&(te.checked=je),P&8&&Le!==(Le=e[3]==="white")&&(le.disabled=Le),P&16&&Te!==(Te=e[4]==="white")&&(le.checked=Te),P&8&&Pe!==(Pe=e[3]==="purple")&&(ne.disabled=Pe),P&16&&Me!==(Me=e[4]==="purple")&&(ne.checked=Me),P&32&&(be.disabled=e[5])},i:ce,o:ce,d(we){we&&H(t),Fe=!1,ae(et)}}}function Bt(e,t,n){let a,{nextStep:i}=t,{selectAtk:r}=t,{selectDef:c}=t,{atk:u}=t,{def:d}=t;return e.$$set=o=>{"nextStep"in o&&n(0,i=o.nextStep),"selectAtk"in o&&n(1,r=o.selectAtk),"selectDef"in o&&n(2,c=o.selectDef),"atk"in o&&n(3,u=o.atk),"def"in o&&n(4,d=o.def)},e.$$.update=()=>{e.$$.dirty&24&&n(5,a=!(u&&d))},[i,r,c,u,d,a]}class Pt extends Ie{constructor(t){super(),De(this,t,Bt,Tt,Ne,{nextStep:0,selectAtk:1,selectDef:2,atk:3,def:4})}}function Mt(e){let t,n,a,i,r,c,u,d,o,p,h,m,v,z,B,N,y,R,E,C,A,L,_,W,O,G,X,$,D,F,J,Q,x,b=e[4].length&&st(e),k=e[5]&&at(),w=e[6]&&it(),j=e[7]&&ft(),V=e[8]&&ct();return{c(){t=f("div"),n=f("button"),n.textContent="Back",a=g(),i=f("h2"),i.textContent="2b. Calculate Pools:",r=g(),c=f("div"),u=f("h3"),d=f("span"),p=T(" Attacker:"),h=T(`\r
			Collect\r
			`),m=f("span"),m.textContent="+",v=g(),z=f("em"),z.textContent="up to",B=T(" warbands on board"),N=g(),y=f("div"),R=f("h3"),E=f("span"),A=T(" Defender:"),L=g(),_=f("ul"),b&&b.c(),W=g(),k&&k.c(),O=g(),w&&w.c(),G=g(),j&&j.c(),X=g(),V&&V.c(),$=g(),D=f("p"),D.innerHTML=`<strong>Reminder:</strong> Add or remove dice based off special
			<strong>sites</strong>
			and <strong>battle plans</strong> before you roll!`,F=g(),J=f("button"),J.textContent="I Rolled!",s(n,"class","span-grid svelte-18g3g3b"),s(i,"class","span-grid svelte-18g3g3b"),s(d,"class",o="faction "+e[2]+" svelte-18g3g3b"),s(u,"class","svelte-18g3g3b"),s(m,"class","oath svelte-18g3g3b"),s(c,"class","faction-block span-grid svelte-18g3g3b"),s(c,"data-def","atk"),s(E,"class",C="faction "+e[3]+" svelte-18g3g3b"),s(R,"class","svelte-18g3g3b"),s(_,"class","svelte-18g3g3b"),s(y,"class","faction-block span-grid svelte-18g3g3b"),s(y,"data-def","def"),s(D,"class","span-grid svelte-18g3g3b"),s(J,"class","span-grid svelte-18g3g3b"),s(t,"class","panel svelte-18g3g3b"),s(t,"data-panel","targets2")},m(Z,q){I(Z,t,q),l(t,n),l(t,a),l(t,i),l(t,r),l(t,c),l(c,u),l(u,d),l(u,p),l(c,h),l(c,m),l(c,v),l(c,z),l(c,B),l(t,N),l(t,y),l(y,R),l(R,E),l(R,A),l(y,L),l(y,_),b&&b.m(_,null),l(_,W),k&&k.m(_,null),l(_,O),w&&w.m(_,null),l(_,G),j&&j.m(_,null),l(_,X),V&&V.m(_,null),l(t,$),l(t,D),l(t,F),l(t,J),Q||(x=[S(n,"click",e[19]),S(J,"click",function(){K(e[0])&&e[0].apply(this,arguments)})],Q=!0)},p(Z,q){e=Z,q&4&&o!==(o="faction "+e[2]+" svelte-18g3g3b")&&s(d,"class",o),q&8&&C!==(C="faction "+e[3]+" svelte-18g3g3b")&&s(E,"class",C),e[4].length?b?b.p(e,q):(b=st(e),b.c(),b.m(_,W)):b&&(b.d(1),b=null),e[5]?k||(k=at(),k.c(),k.m(_,O)):k&&(k.d(1),k=null),e[6]?w||(w=it(),w.c(),w.m(_,G)):w&&(w.d(1),w=null),e[7]?j||(j=ft(),j.c(),j.m(_,X)):j&&(j.d(1),j=null),e[8]?V||(V=ct(),V.c(),V.m(_,null)):V&&(V.d(1),V=null)},d(Z){Z&&H(t),b&&b.d(),k&&k.d(),w&&w.d(),j&&j.d(),V&&V.d(),Q=!1,ae(x)}}}function Et(e){let t,n,a,i,r,c,u,d,o,p,h,m,v,z,B,N,y,R,E,C,A,L,_,W,O,G,X,$,D,F,J,Q,x,b,k,w,j,V,Z,q,re,de,ye,oe,U,pe,ie,_e,ge,M=!e[10]&&e[3]!=="bandit"&&rt(e),Y=e[3]!=="bandit"&&ot(e);return{c(){t=f("div"),n=f("button"),n.textContent="Back",a=g(),i=f("h2"),i.textContent="2a. Choose targets:",r=g(),c=f("fieldset"),u=f("label"),d=f("input"),o=g(),p=f("label"),h=f("input"),m=g(),v=f("label"),z=f("input"),B=g(),N=f("label"),y=f("input"),R=g(),E=f("label"),C=f("input"),A=g(),L=f("label"),_=f("input"),W=g(),O=f("label"),G=f("input"),X=g(),$=f("label"),D=f("input"),F=g(),J=f("label"),Q=f("input"),x=g(),b=f("p"),k=f("strong"),k.textContent="Remember",w=T(": You can target "),j=f("strong"),j.textContent="any",V=T(` site ruled\r
			by defender and `),Z=f("strong"),Z.textContent="must",q=T(" target "),re=f("em"),re.textContent="your site",de=T(` if they\r
			rule it.\r
\r
			`),M&&M.c(),ye=g(),Y&&Y.c(),oe=g(),U=f("button"),pe=T("Next"),s(n,"class","span-grid svelte-18g3g3b"),s(i,"class","span-grid svelte-18g3g3b"),s(d,"type","checkbox"),d.value="cradle1",s(d,"class","svelte-18g3g3b"),s(u,"class","site svelte-18g3g3b"),s(h,"type","checkbox"),h.value="prov1",s(h,"class","svelte-18g3g3b"),s(p,"class","site svelte-18g3g3b"),s(z,"type","checkbox"),z.value="hinter1",s(z,"class","svelte-18g3g3b"),s(v,"class","site svelte-18g3g3b"),s(y,"type","checkbox"),y.value="cradle2",s(y,"class","svelte-18g3g3b"),s(N,"class","site svelte-18g3g3b"),s(C,"type","checkbox"),C.value="prov2",s(C,"class","svelte-18g3g3b"),s(E,"class","site svelte-18g3g3b"),s(_,"type","checkbox"),_.value="hinter2",s(_,"class","svelte-18g3g3b"),s(L,"class","site svelte-18g3g3b"),s(G,"type","checkbox"),G.value="",s(G,"class","svelte-18g3g3b"),s(O,"class","hidden site svelte-18g3g3b"),s(D,"type","checkbox"),D.value="prov3",s(D,"class","svelte-18g3g3b"),s($,"class","site svelte-18g3g3b"),s(Q,"type","checkbox"),Q.value="hinter3",s(Q,"class","svelte-18g3g3b"),s(J,"class","site svelte-18g3g3b"),s(c,"class","svelte-18g3g3b"),s(b,"class","span-grid svelte-18g3g3b"),s(U,"class","span-grid svelte-18g3g3b"),U.disabled=ie=!e[11],s(t,"class","panel svelte-18g3g3b"),s(t,"data-panel","targets")},m(se,ue){I(se,t,ue),l(t,n),l(t,a),l(t,i),l(t,r),l(t,c),l(c,u),l(u,d),l(c,o),l(c,p),l(p,h),l(c,m),l(c,v),l(v,z),l(c,B),l(c,N),l(N,y),l(c,R),l(c,E),l(E,C),l(c,A),l(c,L),l(L,_),l(c,W),l(c,O),l(O,G),l(c,X),l(c,$),l($,D),l(c,F),l(c,J),l(J,Q),l(t,x),l(t,b),l(b,k),l(b,w),l(b,j),l(b,V),l(b,Z),l(b,q),l(b,re),l(b,de),M&&M.m(b,null),l(t,ye),Y&&Y.m(t,null),l(t,oe),l(t,U),l(U,pe),_e||(ge=[S(n,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),S(d,"change",e[12]),S(h,"change",e[12]),S(z,"change",e[12]),S(y,"change",e[12]),S(C,"change",e[12]),S(_,"change",e[12]),S(G,"change",e[12]),S(D,"change",e[12]),S(Q,"change",e[12]),S(U,"click",e[18])],_e=!0)},p(se,ue){e=se,!e[10]&&e[3]!=="bandit"?M?M.p(e,ue):(M=rt(e),M.c(),M.m(b,null)):M&&(M.d(1),M=null),e[3]!=="bandit"?Y?Y.p(e,ue):(Y=ot(e),Y.c(),Y.m(t,oe)):Y&&(Y.d(1),Y=null),ue&2048&&ie!==(ie=!e[11])&&(U.disabled=ie)},d(se){se&&H(t),M&&M.d(),Y&&Y.d(),_e=!1,ae(ge)}}}function st(e){let t,n,a,i=e[4].length+"",r,c,u,d,o;return{c(){t=f("li"),n=T("Collects "),a=f("strong"),r=T(i),c=g(),u=f("span"),u.textContent="-",d=T(`\r
						for\r
						`),o=f("strong"),o.textContent="sites",s(u,"class","oath svelte-18g3g3b")},m(p,h){I(p,t,h),l(t,n),l(t,a),l(a,r),l(t,c),l(t,u),l(t,d),l(t,o)},p(p,h){h&16&&i!==(i=p[4].length+"")&&wt(r,i)},d(p){p&&H(t)}}}function at(e){let t;return{c(){t=f("li"),t.innerHTML=`Collects <strong>2</strong> <span class="oath svelte-18g3g3b">-</span> for
						<strong>pawn</strong>`},m(n,a){I(n,t,a)},d(n){n&&H(t)}}}function it(e){let t;return{c(){t=f("li"),t.innerHTML=`Collects <span class="oath svelte-18g3g3b">-</span> as shown on
						<strong>relics</strong>`},m(n,a){I(n,t,a)},d(n){n&&H(t)}}}function ft(e){let t;return{c(){t=f("li"),t.innerHTML=`Collects <span class="oath svelte-18g3g3b">-</span> equal to
						<span class="oath svelte-18g3g3b">1</span>
						on
						<strong>banner</strong>`},m(n,a){I(n,t,a)},d(n){n&&H(t)}}}function ct(e){let t;return{c(){t=f("li"),t.innerHTML=`Collects <span class="oath svelte-18g3g3b">-</span> equal to
						<span class="oath svelte-18g3g3b">2</span>
						on
						<strong>banner</strong>`},m(n,a){I(n,t,a)},d(n){n&&H(t)}}}function rt(e){let t,n,a,i,r,c,u,d,o,p,h,m;return{c(){t=f("button"),n=T("Is the defender pawn ("),a=f("span"),r=T(`) at\r
					`),c=f("em"),c.textContent="your site",u=T("? "),d=f("br"),o=g(),p=f("strong"),p.textContent="Tap here",s(a,"class",i="faction "+e[3]+" svelte-18g3g3b"),s(t,"class","pawnAtSite svelte-18g3g3b")},m(v,z){I(v,t,z),l(t,n),l(t,a),l(t,r),l(t,c),l(t,u),l(t,d),l(t,o),l(t,p),h||(m=S(t,"click",e[13]),h=!0)},p(v,z){z&8&&i!==(i="faction "+v[3]+" svelte-18g3g3b")&&s(a,"class",i)},d(v){v&&H(t),h=!1,m()}}}function ot(e){let t,n,a,i,r,c,u,d,o,p,h,m,v,z,B,N,y,R,E,C;return{c(){t=f("label"),n=f("input"),a=T(`\r
				Attack `),i=f("span"),c=T(" Pawn (and Favor)"),u=g(),d=f("label"),o=f("input"),p=T(`\r
				Attack Relics 💍`),h=g(),m=f("label"),v=f("input"),z=T(" Attack Banner of Favor 🧡"),B=g(),N=f("label"),y=f("input"),R=T(" Attack Banner of Darkest Secret 📘"),s(n,"type","checkbox"),s(i,"class",r="faction "+e[3]+" svelte-18g3g3b"),s(t,"class","faction-btn span-grid svelte-18g3g3b"),s(t,"data-def",e[3]),s(o,"type","checkbox"),s(d,"class","faction-btn span-grid svelte-18g3g3b"),s(v,"type","checkbox"),s(m,"class","faction-btn span-grid svelte-18g3g3b"),s(y,"type","checkbox"),s(N,"class","faction-btn span-grid svelte-18g3g3b")},m(A,L){I(A,t,L),l(t,n),l(t,a),l(t,i),l(t,c),I(A,u,L),I(A,d,L),l(d,o),l(d,p),I(A,h,L),I(A,m,L),l(m,v),l(m,z),I(A,B,L),I(A,N,L),l(N,y),l(N,R),E||(C=[S(n,"change",e[14]),S(o,"change",e[15]),S(v,"change",e[16]),S(y,"change",e[17])],E=!0)},p(A,L){L&8&&r!==(r="faction "+A[3]+" svelte-18g3g3b")&&s(i,"class",r),L&8&&s(t,"data-def",A[3])},d(A){A&&(H(t),H(u),H(d),H(h),H(m),H(B),H(N)),E=!1,ae(C)}}}function Ot(e){let t;function n(r,c){return r[9]?Mt:Et}let a=n(e),i=a(e);return{c(){i.c(),t=kt()},m(r,c){i.m(r,c),I(r,t,c)},p(r,[c]){a===(a=n(r))&&i?i.p(r,c):(i.d(1),i=a(r),i&&(i.c(),i.m(t.parentNode,t)))},i:ce,o:ce,d(r){r&&H(t),i.d(r)}}}function Nt(e,t,n){let a,{nextStep:i}=t,{prevStep:r}=t,{atk:c}=t,{def:u}=t,d=[],o=!1,p=!1,h=!1,m=!1,v=!1,z=!1;function B({target:_}){n(4,d=d.includes(_.value)?d.filter(W=>W!==_.value):n(4,d=[...d,_.value]))}const N=()=>{n(10,z=!0)},y=_=>{n(5,p=_.target.checked)},R=_=>{n(6,h=_.target.checked)},E=_=>{n(7,m=_.target.checked)},C=_=>{n(8,v=_.target.checked)},A=()=>{n(9,o=!0)},L=()=>{n(9,o=!1),n(10,z=!1),n(4,d=[]),n(5,p=!1),n(6,h=!1),n(7,m=!1),n(8,v=!1)};return e.$$set=_=>{"nextStep"in _&&n(0,i=_.nextStep),"prevStep"in _&&n(1,r=_.prevStep),"atk"in _&&n(2,c=_.atk),"def"in _&&n(3,u=_.def)},e.$$.update=()=>{e.$$.dirty&496&&n(11,a=!!(p||h||m||v||d.length))},[i,r,c,u,d,p,h,m,v,o,z,a,B,N,y,R,E,C,A,L]}class Ht extends Ie{constructor(t){super(),De(this,t,Nt,Ot,Ne,{nextStep:0,prevStep:1,atk:2,def:3})}}function Rt(e){let t;return{c(){t=f("li"),t.textContent="+ warbands at targeted sites"},m(n,a){I(n,t,a)},d(n){n&&H(t)}}}function Dt(e){let t;return{c(){t=f("li"),t.innerHTML="+ 1 per targeted site <em>(Bandits have a warband on sites they rule)</em>"},m(n,a){I(n,t,a)},d(n){n&&H(t)}}}function ut(e){let t,n,a,i,r,c,u,d;return{c(){t=f("li"),n=T("+ warbands on their board (if "),a=f("span"),r=T(` is\r
					on targeted site / at\r
					`),c=f("span"),d=T("'s site)"),s(a,"class",i="faction "+e[3]+" svelte-1jbo2mc"),s(c,"class",u="faction "+e[2]+" svelte-1jbo2mc")},m(o,p){I(o,t,p),l(t,n),l(t,a),l(t,r),l(t,c),l(t,d)},p(o,p){p&8&&i!==(i="faction "+o[3]+" svelte-1jbo2mc")&&s(a,"class",i),p&4&&u!==(u="faction "+o[2]+" svelte-1jbo2mc")&&s(c,"class",u)},d(o){o&&H(t)}}}function It(e){let t,n,a,i,r,c,u,d,o,p,h,m,v,z,B,N,y,R,E,C,A,L,_,W,O,G,X,$,D,F,J;function Q(w,j){return w[3]==="bandit"?Dt:Rt}let x=Q(e),b=x(e),k=e[3]!=="bandit"&&ut(e);return{c(){t=f("div"),n=f("button"),n.textContent="Back",a=g(),i=f("h2"),i.textContent="3. Resolve Campaign",r=g(),c=f("div"),u=f("h3"),d=f("span"),p=T(" Total Defense:"),h=g(),m=f("ul"),v=f("li"),v.textContent="Shields rolled",z=g(),b.c(),B=g(),k&&k.c(),N=g(),y=f("div"),R=f("h3"),E=f("span"),A=T(" Total Attack:"),L=g(),_=f("ul"),_.innerHTML="<li>Swords rolled</li> <li>+ warbands sacrificed from force</li>",W=g(),O=f("p"),O.innerHTML=`<strong>Take Losses:</strong> Kill half of the warbands in the
		<strong>defeated player&#39;s force </strong>, <em>rounded down</em>, and move
		the other half to their board.`,G=g(),X=f("p"),X.innerHTML=`<small><strong>Resolve Victory:</strong> May place warbands on targeted sites, take
			targeted relics/banners, move targeted pawn &amp; burn half their favor (rounded
			down).</small>`,$=g(),D=f("button"),D.textContent="Restart",s(n,"class","span-grid svelte-1jbo2mc"),s(i,"class","span-grid svelte-1jbo2mc"),s(d,"class",o="faction "+e[3]+" svelte-1jbo2mc"),s(u,"class","svelte-1jbo2mc"),s(m,"class","svelte-1jbo2mc"),s(c,"class","faction-block span-grid svelte-1jbo2mc"),s(c,"data-def","def"),s(E,"class",C="faction "+e[2]+" svelte-1jbo2mc"),s(R,"class","svelte-1jbo2mc"),s(_,"class","svelte-1jbo2mc"),s(y,"class","faction-block span-grid svelte-1jbo2mc"),s(y,"data-def","atk"),s(O,"class","span-grid svelte-1jbo2mc"),s(X,"class","span-grid svelte-1jbo2mc"),s(D,"class","span-grid svelte-1jbo2mc"),s(t,"class","panel svelte-1jbo2mc"),s(t,"data-panel","resolve")},m(w,j){I(w,t,j),l(t,n),l(t,a),l(t,i),l(t,r),l(t,c),l(c,u),l(u,d),l(u,p),l(c,h),l(c,m),l(m,v),l(m,z),b.m(m,null),l(m,B),k&&k.m(m,null),l(t,N),l(t,y),l(y,R),l(R,E),l(R,A),l(y,L),l(y,_),l(t,W),l(t,O),l(t,G),l(t,X),l(t,$),l(t,D),F||(J=[S(n,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),S(D,"click",function(){K(e[0])&&e[0].apply(this,arguments)})],F=!0)},p(w,[j]){e=w,j&8&&o!==(o="faction "+e[3]+" svelte-1jbo2mc")&&s(d,"class",o),x!==(x=Q(e))&&(b.d(1),b=x(e),b&&(b.c(),b.m(m,B))),e[3]!=="bandit"?k?k.p(e,j):(k=ut(e),k.c(),k.m(m,null)):k&&(k.d(1),k=null),j&4&&C!==(C="faction "+e[2]+" svelte-1jbo2mc")&&s(E,"class",C)},i:ce,o:ce,d(w){w&&H(t),b.d(),k&&k.d(),F=!1,ae(J)}}}function Ft(e,t,n){let{nextStep:a}=t,{prevStep:i}=t,{atk:r}=t,{def:c}=t;return e.$$set=u=>{"nextStep"in u&&n(0,a=u.nextStep),"prevStep"in u&&n(1,i=u.prevStep),"atk"in u&&n(2,r=u.atk),"def"in u&&n(3,c=u.def)},[a,i,r,c]}class qt extends Ie{constructor(t){super(),De(this,t,Ft,It,Ne,{nextStep:0,prevStep:1,atk:2,def:3})}}function dt(e){let t,n;return t=new Pt({props:{atk:e[1],def:e[2],selectAtk:e[3],selectDef:e[4],nextStep:e[5]}}),{c(){Qe(t.$$.fragment)},m(a,i){He(t,a,i),n=!0},p(a,i){const r={};i&2&&(r.atk=a[1]),i&4&&(r.def=a[2]),i&1&&(r.nextStep=a[5]),t.$set(r)},i(a){n||(ee(t.$$.fragment,a),n=!0)},o(a){fe(t.$$.fragment,a),n=!1},d(a){Re(t,a)}}}function pt(e){let t,n;return t=new Ht({props:{atk:e[1],def:e[2],nextStep:e[6],prevStep:e[7]}}),{c(){Qe(t.$$.fragment)},m(a,i){He(t,a,i),n=!0},p(a,i){const r={};i&2&&(r.atk=a[1]),i&4&&(r.def=a[2]),i&1&&(r.nextStep=a[6]),i&1&&(r.prevStep=a[7]),t.$set(r)},i(a){n||(ee(t.$$.fragment,a),n=!0)},o(a){fe(t.$$.fragment,a),n=!1},d(a){Re(t,a)}}}function gt(e){let t,n;return t=new qt({props:{atk:e[1],def:e[2],nextStep:e[8],prevStep:e[9]}}),{c(){Qe(t.$$.fragment)},m(a,i){He(t,a,i),n=!0},p(a,i){const r={};i&2&&(r.atk=a[1]),i&4&&(r.def=a[2]),i&7&&(r.nextStep=a[8]),i&1&&(r.prevStep=a[9]),t.$set(r)},i(a){n||(ee(t.$$.fragment,a),n=!0)},o(a){fe(t.$$.fragment,a),n=!1},d(a){Re(t,a)}}}function Kt(e){let t,n,a,i,r,c,u=e[0]===0&&dt(e),d=e[0]===1&&pt(e),o=e[0]===2&&gt(e);return{c(){t=f("main"),n=f("h1"),n.textContent="Oath Campaign Companion",a=g(),u&&u.c(),i=g(),d&&d.c(),r=g(),o&&o.c(),s(n,"class","svelte-gd3tg"),s(t,"class","svelte-gd3tg")},m(p,h){I(p,t,h),l(t,n),l(t,a),u&&u.m(t,null),l(t,i),d&&d.m(t,null),l(t,r),o&&o.m(t,null),c=!0},p(p,[h]){p[0]===0?u?(u.p(p,h),h&1&&ee(u,1)):(u=dt(p),u.c(),ee(u,1),u.m(t,i)):u&&(Ve(),fe(u,1,1,()=>{u=null}),Ue()),p[0]===1?d?(d.p(p,h),h&1&&ee(d,1)):(d=pt(p),d.c(),ee(d,1),d.m(t,r)):d&&(Ve(),fe(d,1,1,()=>{d=null}),Ue()),p[0]===2?o?(o.p(p,h),h&1&&ee(o,1)):(o=gt(p),o.c(),ee(o,1),o.m(t,null)):o&&(Ve(),fe(o,1,1,()=>{o=null}),Ue())},i(p){c||(ee(u),ee(d),ee(o),c=!0)},o(p){fe(u),fe(d),fe(o),c=!1},d(p){p&&H(t),u&&u.d(),d&&d.d(),o&&o.d()}}}function Vt(e,t,n){let a=0,i,r=null;function c(v){n(1,i=v.target.value)}function u(v){n(2,r=v.target.value)}return[a,i,r,c,u,()=>{n(0,a++,a)},()=>{n(0,a++,a)},()=>{n(0,a--,a)},()=>{n(1,i=null),n(2,r=null),n(0,a=0)},()=>{n(0,a--,a)}]}class Ut extends Ie{constructor(t){super(),De(this,t,Vt,Kt,Ne,{})}}new Ut({target:document.getElementById("app")});
