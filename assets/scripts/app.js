var yunex=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function a(t){t.forEach(n)}function l(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let r=i?()=>window.performance.now():()=>Date.now(),c=i?t=>requestAnimationFrame(t):t;const u=new Set;function p(t){u.forEach(e=>{e.c(t)||(u.delete(e),e.f())}),0!==u.size&&c(p)}function g(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function $(){return v(" ")}function b(){return v("")}function w(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){(null!=e||t.value)&&(t.value=e)}function k(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function C(t,e,n){t.classList[n?"add":"remove"](e)}function _(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let L,j,S=0,M={};function H(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--S&&c(()=>{if(S)return;let t=L.cssRules.length;for(;t--;)L.deleteRule(t);M={}})}function z(t){j=t}function D(){const t=function(){if(!j)throw new Error("Function called outside component initialization");return j}();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const a=_(e,n);s.slice().forEach(e=>{e.call(t,a)})}}}const T=[],E=[],q=[],A=[],F=Promise.resolve();let B=!1;function P(t){q.push(t)}const R=new Set;function J(){do{for(;T.length;){const t=T.shift();z(t),N(t.$$)}for(;E.length;)E.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];R.has(e)||(R.add(e),e())}q.length=0}while(T.length);for(;A.length;)A.pop()();B=!1,R.clear()}function N(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let I;function O(t,e,n){t.dispatchEvent(_(`${e?"intro":"outro"}${n}`))}const W=new Set;function G(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Q(t,e,n,s){if(t&&t.o){if(W.has(t))return;W.add(t),(void 0).c.push(()=>{W.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Y={duration:0};function V(n,s,a){let o,i,g=s(n,a),f=!1,m=0;function d(){o&&H(n,o)}function v(){const{delay:s=0,duration:a=300,easing:l=e,tick:v=t,css:$}=g||Y;$&&(o=function(t,e,n,s,a,l,o,i=0){const r=16.666/s;let c="{\n";for(let t=0;t<=1;t+=r){const s=e+(n-e)*l(t);c+=100*t+`%{${o(s,1-s)}}\n`}const u=c+`100% {${o(n,1-n)}}\n}`,p=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`;if(!M[p]){if(!L){const t=h("style");document.head.appendChild(t),L=t.sheet}M[p]=!0,L.insertRule(`@keyframes ${p} ${u}`,L.cssRules.length)}const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${p} ${s}ms linear ${a}ms 1 both`,S+=1,p}(n,0,1,a,s,l,$,m++)),v(0,1);const b=r()+s,w=b+a;i&&i.abort(),f=!0,P(()=>O(n,!0,"start")),i=function(t){let e;return 0===u.size&&c(p),{promise:new Promise(n=>{u.add(e={c:t,f:n})}),abort(){u.delete(e)}}}(t=>{if(f){if(t>=w)return v(1,0),O(n,!0,"end"),d(),f=!1;if(t>=b){const e=l((t-b)/a);v(e,1-e)}}return f})}let $=!1;return{start(){$||(H(n),l(g)?(g=g(),(I||(I=Promise.resolve(),I.then(()=>{I=null})),I).then(v)):v())},invalidate(){$=!1},end(){f&&(d(),f=!1)}}}function U(t){t&&t.c()}function K(t,e,s){const{fragment:o,on_mount:i,on_destroy:r,after_update:c}=t.$$;o&&o.m(e,s),P(()=>{const e=i.map(n).filter(l);r?r.push(...e):a(e),t.$$.on_mount=[]}),c.forEach(P)}function X(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(T.push(t),B||(B=!0,F.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,l,o,i,r,c=[-1]){const u=j;z(e);const p=n.props||{},g=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c};let f=!1;g.ctx=l?l(e,p,(t,n,...s)=>{const a=s.length?s[0]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=a)&&(g.bound[t]&&g.bound[t](a),f&&Z(e,t)),n}):[],g.update(),f=!0,a(g.before_update),g.fragment=!!o&&o(g.ctx),n.target&&(n.hydrate?g.fragment&&g.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):g.fragment&&g.fragment.c(),n.intro&&G(e.$$.fragment),K(e,n.target,n.anchor),J()),z(u)}class et{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function nt(e){let n,s,a;return{c(){n=h("img"),n.src!==(s="./assets/images/"+e[0]+".png")&&y(n,"src",s),y(n,"alt",a="icon-"+e[0]),k(n,"width",(e[1]||21)+"px"),k(n,"height",(e[1]||21)+"px"),k(n,"margin-right",(e[2]||16)+"px"),y(n,"class","svelte-1txmne")},m(t,e){f(t,n,e)},p(t,[e]){1&e&&n.src!==(s="./assets/images/"+t[0]+".png")&&y(n,"src",s),1&e&&a!==(a="icon-"+t[0])&&y(n,"alt",a),2&e&&k(n,"width",(t[1]||21)+"px"),2&e&&k(n,"height",(t[1]||21)+"px"),4&e&&k(n,"margin-right",(t[2]||16)+"px")},i:t,o:t,d(t){t&&m(n)}}}function st(t,e,n){let{icon:s}=e,{size:a=""}=e,{margin:l=""}=e;return t.$set=t=>{"icon"in t&&n(0,s=t.icon),"size"in t&&n(1,a=t.size),"margin"in t&&n(2,l=t.margin)},[s,a,l]}class at extends et{constructor(t){super(),tt(this,t,st,nt,o,{icon:0,size:1,margin:2})}}function lt(e){let n,s,a,l,o,i,r,c,u,p,d,v,b,w,x,k,C,_;const L=new at({props:{size:"30",margin:"10",icon:"freelancer"}}),j=new at({props:{size:"30",margin:"10",icon:"codepen"}}),S=new at({props:{size:"30",margin:"0",icon:"github"}});return{c(){n=h("header"),s=h("video"),s.innerHTML='<source src="./assets/video/background.mp4" type="video/mp4">',a=$(),l=h("section"),o=h("img"),r=$(),c=h("h1"),c.textContent="Youness Boualam",u=$(),p=h("h2"),p.textContent="Web Developer & graphic designer",d=$(),v=h("div"),b=h("a"),U(L.$$.fragment),w=$(),x=h("a"),U(j.$$.fragment),k=$(),C=h("a"),U(S.$$.fragment),s.loop=!0,s.autoplay=!0,s.muted=!0,y(s,"class","svelte-py7i32"),o.src!==(i="./assets/images/logo.jpg?v1")&&y(o,"src","./assets/images/logo.jpg?v1"),y(o,"alt","Youness Boualam Logo"),y(o,"class","svelte-py7i32"),y(c,"class","svelte-py7i32"),y(p,"class","svelte-py7i32"),y(b,"href","https://www.freelancer.com/u/younessboualam?action=hireme&w=f"),y(b,"target","_blank"),y(b,"class","svelte-py7i32"),y(x,"href","https://codepen.io/younes-b"),y(x,"target","_blank"),y(x,"class","svelte-py7i32"),y(C,"href","https://github.com/younessboualam"),y(C,"target","_blank"),y(C,"class","svelte-py7i32"),y(v,"class","social svelte-py7i32"),y(l,"class","svelte-py7i32"),y(n,"class","svelte-py7i32")},m(t,e){f(t,n,e),g(n,s),g(n,a),g(n,l),g(l,o),g(l,r),g(l,c),g(l,u),g(l,p),g(l,d),g(l,v),g(v,b),K(L,b,null),g(v,w),g(v,x),K(j,x,null),g(v,k),g(v,C),K(S,C,null),_=!0},p:t,i(t){_||(G(L.$$.fragment,t),G(j.$$.fragment,t),G(S.$$.fragment,t),_=!0)},o(t){Q(L.$$.fragment,t),Q(j.$$.fragment,t),Q(S.$$.fragment,t),_=!1},d(t){t&&m(n),X(L),X(j),X(S)}}}class ot extends et{constructor(t){super(),tt(this,t,null,lt,o,{})}}function it(t,e,n){const s=t.slice();return s[5]=e[n],s}function rt(t){let e,n;function s(...e){return t[4](t[5],...e)}return{c(){e=h("div"),y(e,"class","color svelte-huf8lk"),k(e,"background",t[5])},m(t,a){f(t,e,a),n=w(e,"click",s)},p(e,n){t=e},d(t){t&&m(e),n()}}}function ct(e){let n,s,a,l,o,i,r,c,u=e[0],p=[];for(let t=0;t<u.length;t+=1)p[t]=rt(it(e,u,t));return{c(){n=h("div"),s=h("div");for(let t=0;t<p.length;t+=1)p[t].c();a=$(),l=h("div"),o=h("input"),i=$(),r=h("label"),y(s,"class","colors svelte-huf8lk"),y(o,"type","checkbox"),y(o,"id","toggle"),y(o,"class","svelte-huf8lk"),y(r,"for","toggle"),y(r,"class","svelte-huf8lk"),y(l,"class","toggle svelte-huf8lk"),y(n,"class","section svelte-huf8lk")},m(t,u){f(t,n,u),g(n,s);for(let t=0;t<p.length;t+=1)p[t].m(s,null);g(n,a),g(n,l),g(l,o),g(l,i),g(l,r),c=w(o,"change",e[2])},p(t,[e]){if(3&e){let n;for(u=t[0],n=0;n<u.length;n+=1){const a=it(t,u,n);p[n]?p[n].p(a,e):(p[n]=rt(a),p[n].c(),p[n].m(s,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=u.length}},i:t,o:t,d(t){t&&m(n),d(p,t),c()}}}function ut(t){let e=D();function n(t){e("color",t),console.log(t)}return[["#e91e63","#9c27b0","#3f51b5","#00bcd4","#009688","#4caf50","#8bc34a","#ff9800","#ff5722"],n,function(t){t.target.checked?e("theme","dark"):e("theme","light")},e,t=>n(t)]}class pt extends et{constructor(t){super(),tt(this,t,ut,ct,o,{})}}function gt(t){let e;return{c(){e=h("div"),e.innerHTML='<span class="tags"><a href="https://www.freelancer.com/u/younessboualam?action=hireme&amp;w=f&amp;ngsw-bypass=" target="_blank">Freelancer</a></span> \n\t\t\t<span class="tags"><a href="https://99designs.com/profiles/younessboualam" target="_blank">99Designs</a></span> \n\t\t\t<span class="tags"><a href="https://mostaql.com/u/younessboualam" target="_blank">Mostaql</a></span> \n\t\t\t<span class="tags"><a href="https://fr.fiverr.com/younessboualam?up_rollout=true" target="_blank">Fiverr</a></span> \n\t\t\t<span class="tags"><a href="https://khamsat.com/user/youness_boualam" target="_blank">khamsat</a></span> \n\t\t\t<span class="tags"><a href="https://www.peopleperhour.com/freelancer/design/youness-boualam-web-developer-graphic-design-vvmwavm" target="_blank">PeoplePerHour</a></span>',y(e,"class","platforms")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function ft(t){let e,n,s,l,o,i,r,c,u,p,d;return{c(){e=h("form"),n=h("label"),n.textContent="Email",s=$(),l=h("input"),o=$(),i=h("label"),i.textContent="Message",r=$(),c=h("textarea"),u=$(),p=h("button"),p.textContent="Hire me",y(n,"for","email"),y(n,"class","svelte-843pcb"),y(l,"type","email"),y(l,"id","email"),y(l,"placeholder","your email here"),l.required=!0,y(l,"class","svelte-843pcb"),y(i,"for","message"),y(i,"class","svelte-843pcb"),y(c,"id","message"),y(c,"placeholder","Message text"),c.required=!0,y(c,"class","svelte-843pcb"),y(p,"type","submit"),y(p,"class","svelte-843pcb")},m(a,m){f(a,e,m),g(e,n),g(e,s),g(e,l),x(l,t[0]),g(e,o),g(e,i),g(e,r),g(e,c),x(c,t[1]),g(e,u),g(e,p),d=[w(l,"input",t[6]),w(c,"input",t[7]),w(p,"click",t[3])]},p(t,e){1&e&&l.value!==t[0]&&x(l,t[0]),2&e&&x(c,t[1])},d(t){t&&m(e),a(d)}}}function mt(e){let n,s,l,o,i,r,c,u,p,d,v="on_platforms"==e[2]&&gt(),b="directly"==e[2]&&ft(e);return{c(){n=h("div"),s=h("h3"),s.innerHTML='<i class="icon-hireme"></i>Hire Me',l=$(),o=h("div"),i=h("span"),i.textContent="On platforms",r=$(),c=h("span"),c.textContent="Directly",u=$(),v&&v.c(),p=$(),b&&b.c(),y(i,"class","svelte-843pcb"),C(i,"active","on_platforms"==e[2]),y(c,"class","svelte-843pcb"),C(c,"active","directly"==e[2]),y(o,"class","tabs svelte-843pcb"),y(n,"class","section svelte-843pcb")},m(t,a){f(t,n,a),g(n,s),g(n,l),g(n,o),g(o,i),g(o,r),g(o,c),g(n,u),v&&v.m(n,null),g(n,p),b&&b.m(n,null),d=[w(i,"click",e[4]),w(c,"click",e[5])]},p(t,[e]){4&e&&C(i,"active","on_platforms"==t[2]),4&e&&C(c,"active","directly"==t[2]),"on_platforms"==t[2]?v||(v=gt(),v.c(),v.m(n,p)):v&&(v.d(1),v=null),"directly"==t[2]?b?b.p(t,e):(b=ft(t),b.c(),b.m(n,null)):b&&(b.d(1),b=null)},i:t,o:t,d(t){t&&m(n),v&&v.d(),b&&b.d(),a(d)}}}function dt(t,e,n){let s="",a="",l="on_platforms";return[s,a,l,t=>{if(t.preventDefault(),""!=s||""!=a){let t=`mailto:youness.boualam95@gmail.com?cc=${s}&subject=Creation%20de%20projet&body=${escape(a)}`;window.location.href=t,n(0,s=""),n(1,a="")}},()=>n(2,l="on_platforms"),()=>n(2,l="directly"),function(){s=this.value,n(0,s)},function(){a=this.value,n(1,a)}]}class ht extends et{constructor(t){super(),tt(this,t,dt,mt,o,{})}}function vt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-account"></i>About Me</h3> \n\t<p>I&#39;m Youness Boualam from Morocco, I am a web developer &amp; also a graphic designer freelancer,\n\ti love drawing and descovering new web and design trends</p>',y(n,"class","section about")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class $t extends et{constructor(t){super(),tt(this,t,null,vt,o,{})}}function bt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-cog"></i>My Services</h3> \n\t\n\t<span class="tags">Logo Design</span> \n\t<span class="tags">Grahic Design</span> \n\t<span class="tags">Desktop app developpement</span> \n\t<span class="tags">Chrome extensions developpement</span> \n\t<span class="tags">Website Design</span>',y(n,"class","section")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class wt extends et{constructor(t){super(),tt(this,t,null,bt,o,{})}}function yt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-interests"></i>Interests</h3> \n\t\n\t<span class="tags">Drawing</span> \n\t<span class="tags">2D Animation</span> \n\t<span class="tags">Design</span> \n\t<span class="tags">Coding</span> \n\t<span class="tags">Follow the web tech trends</span> \n\t<span class="tags">Reading</span>',y(n,"class","section")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class xt extends et{constructor(t){super(),tt(this,t,null,yt,o,{})}}function kt(e){let n,s;return{c(){n=h("div"),s=h("div"),y(s,"class","bar svelte-14fsk9z"),k(s,"width",e[0]),y(n,"class","progress-bar svelte-14fsk9z")},m(t,e){f(t,n,e),g(n,s)},p(t,[e]){1&e&&k(s,"width",t[0])},i:t,o:t,d(t){t&&m(n)}}}function Ct(t,e,n){let{level:s}=e;return t.$set=t=>{"level"in t&&n(0,s=t.level)},[s]}class _t extends et{constructor(t){super(),tt(this,t,Ct,kt,o,{level:0})}}function Lt(e){let n,s,a,l,o,i,r,c,u,p,d,v,b,w,x,k,C,_,L;const j=new _t({props:{level:"90%"}}),S=new _t({props:{level:"80%"}}),M=new _t({props:{level:"60%"}}),H=new _t({props:{level:"50%"}});return{c(){n=h("div"),s=h("h3"),s.innerHTML='<i class="icon-language"></i>Languages',a=$(),l=h("div"),o=h("span"),o.textContent="Tamazight",i=$(),U(j.$$.fragment),r=$(),c=h("div"),u=h("span"),u.textContent="Arabic",p=$(),U(S.$$.fragment),d=$(),v=h("div"),b=h("span"),b.textContent="French",w=$(),U(M.$$.fragment),x=$(),k=h("div"),C=h("span"),C.textContent="English",_=$(),U(H.$$.fragment),y(o,"class","svelte-100jfut"),y(l,"class","language svelte-100jfut"),y(u,"class","svelte-100jfut"),y(c,"class","language svelte-100jfut"),y(b,"class","svelte-100jfut"),y(v,"class","language svelte-100jfut"),y(C,"class","svelte-100jfut"),y(k,"class","language svelte-100jfut"),y(n,"class","section language svelte-100jfut")},m(t,e){f(t,n,e),g(n,s),g(n,a),g(n,l),g(l,o),g(l,i),K(j,l,null),g(n,r),g(n,c),g(c,u),g(c,p),K(S,c,null),g(n,d),g(n,v),g(v,b),g(v,w),K(M,v,null),g(n,x),g(n,k),g(k,C),g(k,_),K(H,k,null),L=!0},p:t,i(t){L||(G(j.$$.fragment,t),G(S.$$.fragment,t),G(M.$$.fragment,t),G(H.$$.fragment,t),L=!0)},o(t){Q(j.$$.fragment,t),Q(S.$$.fragment,t),Q(M.$$.fragment,t),Q(H.$$.fragment,t),L=!1},d(t){t&&m(n),X(j),X(S),X(M),X(H)}}}class jt extends et{constructor(t){super(),tt(this,t,null,Lt,o,{})}}function St(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-contact"></i>Contact</h3> \n\t\n\t<p class="svelte-1i5v3nw"><i class="icon-location svelte-1i5v3nw"></i>Al Moqawama Street Taznakhte</p> \n\t<p class="svelte-1i5v3nw"><i class="icon-email svelte-1i5v3nw"></i>youness.boualam95@gmail.com</p> \n\t<p class="svelte-1i5v3nw"><i class="icon-phone svelte-1i5v3nw"></i>+212 6 02 43 90 66</p> \n\n\t<hr class="svelte-1i5v3nw"> \n\n\t<a href="https://www.facebook.com/youness.boualam95" target="_blank" class="svelte-1i5v3nw"><p class="svelte-1i5v3nw"><i class="icon-facebook svelte-1i5v3nw"></i>youness.boualam95</p></a> \n\t<a href="https://www.instagram.com/youness__boualam/" target="_blank" class="svelte-1i5v3nw"><p class="svelte-1i5v3nw"><i class="icon-instagram svelte-1i5v3nw"></i>youness__boualam</p></a> \n\t<a href="https://www.linkedin.com/in/youness-boualam/" target="_blank" class="svelte-1i5v3nw"><p class="svelte-1i5v3nw"><i class="icon-linkedin svelte-1i5v3nw"></i>youness-boualam</p></a>',y(n,"class","section about")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Mt extends et{constructor(t){super(),tt(this,t,null,St,o,{})}}function Ht(t){const e=t-1;return e*e*e+1}function zt(t,{delay:e=0,duration:n=400,easing:s=Ht,x:a=0,y:l=0,opacity:o=0}){const i=getComputedStyle(t),r=+i.opacity,c="none"===i.transform?"":i.transform,u=r*(1-o);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*a}px, ${(1-t)*l}px);\n\t\t\topacity: ${r-u*e}`}}function Dt(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Tt(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Et(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function qt(e){let n,s=e[3][0].design,a=[];for(let t=0;t<s.length;t+=1)a[t]=Bt(Dt(e,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();n=b()},m(t,e){for(let n=0;n<a.length;n+=1)a[n].m(t,e);f(t,n,e)},p(t,e){if(24&e){let l;for(s=t[3][0].design,l=0;l<s.length;l+=1){const o=Dt(t,s,l);a[l]?(a[l].p(o,e),G(a[l],1)):(a[l]=Bt(o),a[l].c(),G(a[l],1),a[l].m(n.parentNode,n))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},i(t){for(let t=0;t<s.length;t+=1)G(a[t])},o:t,d(t){d(a,t),t&&m(n)}}}function At(e){let n,s=e[3][0].web,a=[];for(let t=0;t<s.length;t+=1)a[t]=Pt(Tt(e,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();n=b()},m(t,e){for(let n=0;n<a.length;n+=1)a[n].m(t,e);f(t,n,e)},p(t,e){if(24&e){let l;for(s=t[3][0].web,l=0;l<s.length;l+=1){const o=Tt(t,s,l);a[l]?(a[l].p(o,e),G(a[l],1)):(a[l]=Pt(o),a[l].c(),G(a[l],1),a[l].m(n.parentNode,n))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},i(t){for(let t=0;t<s.length;t+=1)G(a[t])},o:t,d(t){d(a,t),t&&m(n)}}}function Ft(e){let n,s=e[3][0].logo,a=[];for(let t=0;t<s.length;t+=1)a[t]=Rt(Et(e,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();n=b()},m(t,e){for(let n=0;n<a.length;n+=1)a[n].m(t,e);f(t,n,e)},p(t,e){if(24&e){let l;for(s=t[3][0].logo,l=0;l<s.length;l+=1){const o=Et(t,s,l);a[l]?(a[l].p(o,e),G(a[l],1)):(a[l]=Rt(o),a[l].c(),G(a[l],1),a[l].m(n.parentNode,n))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},i(t){for(let t=0;t<s.length;t+=1)G(a[t])},o:t,d(t){d(a,t),t&&m(n)}}}function Bt(e){let n,s,a,l,o;function i(...t){return e[10](e[12],...t)}return{c(){n=h("img"),n.src!==(s=e[12].source)&&y(n,"src",s),y(n,"alt",a=e[12].source),y(n,"class","svelte-tmqfxp")},m(t,e){f(t,n,e),o=w(n,"click",i)},p(t,n){e=t},i(t){l||P(()=>{l=V(n,zt,{y:50,duration:200,delay:100*e[14]}),l.start()})},o:t,d(t){t&&m(n),o()}}}function Pt(e){let n,s,a,l,o;function i(...t){return e[9](e[12],...t)}return{c(){n=h("img"),n.src!==(s=e[12].source)&&y(n,"src",s),y(n,"alt",a=e[12].source),y(n,"class","svelte-tmqfxp")},m(t,e){f(t,n,e),o=w(n,"click",i)},p(t,n){e=t},i(t){l||P(()=>{l=V(n,zt,{y:50,duration:200,delay:100*e[14]}),l.start()})},o:t,d(t){t&&m(n),o()}}}function Rt(e){let n,s,a,l,o;function i(...t){return e[8](e[12],...t)}return{c(){n=h("img"),n.src!==(s=e[12].source)&&y(n,"src",s),y(n,"alt",a=e[12].source),y(n,"class","svelte-tmqfxp")},m(t,e){f(t,n,e),o=w(n,"click",i)},p(t,n){e=t},i(t){l||P(()=>{l=V(n,zt,{y:50,duration:200,delay:100*e[14]}),l.start()})},o:t,d(t){t&&m(n),o()}}}function Jt(t){let e,n,s,a,l,o,i,r,c,u=t[1].title+"";function p(t,e){return"web"==t[2]?It:Nt}let d=p(t),b=d(t);return{c(){e=h("div"),n=h("div"),s=h("h4"),a=v(u),l=$(),o=h("div"),i=h("span"),r=$(),b.c(),y(s,"class","svelte-tmqfxp"),y(i,"class","svelte-tmqfxp"),y(o,"class","container svelte-tmqfxp"),y(n,"class","preview"),y(e,"class","overlay svelte-tmqfxp")},m(u,p){f(u,e,p),g(e,n),g(n,s),g(s,a),g(n,l),g(n,o),g(o,i),g(o,r),b.m(o,null),c=w(i,"click",t[11])},p(t,e){2&e&&u!==(u=t[1].title+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(a,u),d===(d=p(t))&&b?b.p(t,e):(b.d(1),b=d(t),b&&(b.c(),b.m(o,null)))},d(t){t&&m(e),b.d(),c()}}}function Nt(t){let e,n,s;return{c(){e=h("img"),e.src!==(n=t[1].source)&&y(e,"src",n),y(e,"alt",s=t[1].title)},m(t,n){f(t,e,n)},p(t,a){2&a&&e.src!==(n=t[1].source)&&y(e,"src",n),2&a&&s!==(s=t[1].title)&&y(e,"alt",s)},d(t){t&&m(e)}}}function It(t){let e,n,s;return{c(){e=h("iframe"),e.src!==(n=t[1].link)&&y(e,"src",n),y(e,"title",s=t[1].title),y(e,"frameborder","0"),y(e,"class","svelte-tmqfxp")},m(t,n){f(t,e,n)},p(t,a){2&a&&e.src!==(n=t[1].link)&&y(e,"src",n),2&a&&s!==(s=t[1].title)&&y(e,"title",s)},d(t){t&&m(e)}}}function Ot(e){let n,s,l,o,i,r,c,u,p,d,v,b,x;function k(t,e){return"logo"==t[2]?Ft:"web"==t[2]?At:qt}let _=k(e),L=_(e),j=e[0]&&Jt(e);return{c(){n=h("div"),s=h("h3"),s.innerHTML='<i class="icon-portfolio"></i>Portfolios',l=$(),o=h("ol"),i=h("li"),i.textContent="Logos",r=$(),c=h("li"),c.textContent="Graphic Design",u=$(),p=h("li"),p.textContent="Web Design",d=$(),v=h("div"),L.c(),b=$(),j&&j.c(),y(i,"class","svelte-tmqfxp"),C(i,"active","logo"===e[2]),y(c,"class","svelte-tmqfxp"),C(c,"active","design"===e[2]),y(p,"class","svelte-tmqfxp"),C(p,"active","web"===e[2]),y(o,"class","svelte-tmqfxp"),y(v,"class","projects svelte-tmqfxp"),y(n,"class","section")},m(t,a){f(t,n,a),g(n,s),g(n,l),g(n,o),g(o,i),g(o,r),g(o,c),g(o,u),g(o,p),g(n,d),g(n,v),L.m(v,null),g(n,b),j&&j.m(n,null),x=[w(i,"click",e[5]),w(c,"click",e[6]),w(p,"click",e[7])]},p(t,[e]){4&e&&C(i,"active","logo"===t[2]),4&e&&C(c,"active","design"===t[2]),4&e&&C(p,"active","web"===t[2]),_===(_=k(t))&&L?L.p(t,e):(L.d(1),L=_(t),L&&(L.c(),G(L,1),L.m(v,null))),t[0]?j?j.p(t,e):(j=Jt(t),j.c(),j.m(n,null)):j&&(j.d(1),j=null)},i(t){G(L)},o:t,d(t){t&&m(n),L.d(),j&&j.d(),a(x)}}}function Wt(t,e,n){let s=!1,a="",l="";setTimeout(()=>n(2,l="logo"),100);const o=t=>{n(0,s=!0),n(1,a=t)};window.addEventListener("keydown",t=>{"Escape"==t.key&&1==s&&n(0,s=!1)});return[s,a,l,[{logo:[{title:"Robledo Home Remodeling Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/rhr.jpg"},{title:"Ibn Alhaitam Technical High School (Freelancer Mission)",source:"./assets/images/portfolios/logo/lycee.jpg"},{title:"BarCoe Sounds Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/BarCoeSound.jpg"},{title:"Infinite Holdings Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/InfiniteHoldings.jpg"},{title:"Selfish (Freelancer contest)",source:"./assets/images/portfolios/logo/selfish.jpg"},{title:"Ching's Record Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/chingsRecord.jpg"},{title:"The Britania Coin Company Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/britannia.jpg"},{title:"Consulenze Digitali Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/consulenze.jpg"},{title:"Marc-Philip Neff Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/marcphilip.jpg"}],web:[{title:"amapub.ma (2017)",source:"./assets/images/portfolios/web/amapub.png",link:"https://amapub.ma/home.php?lang=fr"},{title:"amaprod.ma (2018)",source:"./assets/images/portfolios/web/amaprod.png",link:"https://ama-prod.ma/accueil.php?langage=fr"},{title:"amaevents.ma (2018)",source:"./assets/images/portfolios/web/amaevents.png",link:"http://amaevents.ma"}],design:[{title:"Draa Lab Calendar",source:"./assets/images/portfolios/graphic/draaLab.jpg"},{title:"Ando Horse Riding Business Card",source:"./assets/images/portfolios/graphic/Ando Horse Riding.jpg"},{title:"Sawla Association Business Card",source:"./assets/images/portfolios/graphic/salwa.jpg"},{title:"Internation Women Day",source:"./assets/images/portfolios/graphic/Poster.jpg"}]}],o,()=>n(2,l="logo"),()=>n(2,l="design"),()=>n(2,l="web"),t=>o(t),t=>o(t),t=>o(t),()=>n(0,s=!1)]}class Gt extends et{constructor(t){super(),tt(this,t,Wt,Ot,o,{})}}function Qt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-experience"></i>Experiences</h3> \n\n\t<ul class="timeline"><li><h4>Freelancer at Freelancer.com</h4> \n\t\t\t<span>19 September 2019, Present</span> \n\t\t\t<p>Creation of logos, and business cards and all concerning graphic design as well as web development</p></li> \n\n\t\t<li><h4>Scholar internship at Media Evolution S.A.R.L</h4> \n\t\t\t<span>15 April, 15 June 2019</span> \n\t\t\t<p>Creation of a desktop application using Electron JS and SQLite for customer management and invoicing</p></li> \n\n\t\t<li><h4>Fullstack developer at AMAPUB S.A.R.L</h4> \n\t\t\t<span>01 November 2017, 31 September 2018</span> \n\t\t\t<p>Creation of websites from layout to hosting and also its maintenance</p></li> \n\n\t\t<li><h4>Scholar internship at the health delegation of Ouarzazate</h4> \n\t\t\t<span>01 May 2017, 30 May 2017</span> \n\t\t\t<p>Creation of a website for the Basma association for abandoned children</p></li> \n\n\t\t<li><h4>Scholar internship at the rural commune of Taznakhte</h4> \n\t\t\t<span>01 July 2016, 31 July 2016</span> \n\t\t\t<p>creation of desktop applications for personnel management using VB.net</p></li></ul>',y(n,"class","section")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Yt extends et{constructor(t){super(),tt(this,t,null,Qt,o,{})}}function Vt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-formations"></i>Formation</h3> \n\n\t<ul class="timeline"><li><h4>Professional License</h4> \n\t\t\t<span>2018, 2019</span> \n\t\t\t<p>Computer science at the multidisciplinary faculty, Errachidia</p></li> \n\n\t\t<li><h4>Higher Technician Certificate</h4> \n\t\t\t<span>2015, 2017</span> \n\t\t\t<p>Development of information systems at Ibn Al Haitam Technical High School, Ouarzazate</p></li> \n\n\t\t<li><h4>Technical Baccalaureate</h4> \n\t\t\t<span>2014, 2015</span> \n\t\t\t<p>Electrical Science and Technology at the Ibn Al Haitam Technical High School, Ouarzazate</p></li></ul>',y(n,"class","section")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Ut extends et{constructor(t){super(),tt(this,t,null,Vt,o,{})}}function Kt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-skills"></i>Skills</h3> \n\n\t<h4 class="svelte-1kl46i7">Web development</h4> \n\t<span class="tags">HTML</span> \n\t<span class="tags">CSS</span> \n\t<span class="tags">SCSS</span> \n\t<span class="tags">Bootstrap Css</span> \n\t<span class="tags">JavaScript</span> \n\t<span class="tags">jQuery</span> \n\t<span class="tags">Vue Js</span> \n\t<span class="tags">Svelte Js</span> \n\t<span class="tags">Node Js</span> \n\t<span class="tags">Adonis Js</span> \n\t<span class="tags">PHP</span> \n\t<span class="tags">Laravel</span> \n\t<span class="tags">Wordpress</span> \n\t<span class="tags">MySQL</span> \n\t<span class="tags">MongoDB</span> \n\t<span class="tags">NeDB</span> \n\n\t<h4 class="svelte-1kl46i7">Softwares</h4> \n\t<span class="tags">Git &amp; Github</span> \n\t<span class="tags">Adobe Illustrator</span> \n\t<span class="tags">Gravit Designer</span> \n\n\t<h4 class="svelte-1kl46i7">Other knowledge</h4> \n\t<span class="tags">Electron Js</span> \n\t<span class="tags">NodeWebkit Js (NW.js)</span> \n\t<span class="tags">Chrome Extension Dev</span> \n\t<span class="tags">SQL</span> \n\t<span class="tags">Logo Design</span> \n\t<span class="tags">Business Card Design</span> \n\t<span class="tags">Linux</span>',y(n,"class","section language")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Xt extends et{constructor(t){super(),tt(this,t,null,Kt,o,{})}}function Zt(e){let n;return{c(){n=h("footer"),n.innerHTML='<p>Designed and Developed by <strong class="svelte-h6ee2">Youness Boualam</strong> using Svelte Js</p>',y(n,"class","svelte-h6ee2")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class te extends et{constructor(t){super(),tt(this,t,null,Zt,o,{})}}function ee(t){let e,n,s,a,l,o,i,r,c,u,p,d,v,b,w,x,C,_,L;const j=new ot({}),S=new pt({});S.$on("color",t[2]),S.$on("theme",t[3]);const M=new ht({}),H=new $t({}),z=new jt({}),D=new wt({}),T=new xt({}),E=new Mt({}),q=new Gt({}),A=new Yt({}),F=new Ut({}),B=new Xt({}),P=new te({});return{c(){e=h("link"),s=$(),U(j.$$.fragment),a=$(),l=h("main"),o=h("div"),U(S.$$.fragment),i=$(),U(M.$$.fragment),r=$(),U(H.$$.fragment),c=$(),U(z.$$.fragment),u=$(),U(D.$$.fragment),p=$(),U(T.$$.fragment),d=$(),U(E.$$.fragment),v=$(),b=h("div"),U(q.$$.fragment),w=$(),U(A.$$.fragment),x=$(),U(F.$$.fragment),C=$(),U(B.$$.fragment),_=$(),U(P.$$.fragment),y(e,"rel","stylesheet"),y(e,"href",n="assets/styles/themes/"+t[1]+".css"),y(o,"class","left svelte-1jxzdqr"),y(b,"class","right svelte-1jxzdqr"),k(l,"--main-color",t[0]),y(l,"class","svelte-1jxzdqr")},m(t,n){g(document.head,e),f(t,s,n),K(j,t,n),f(t,a,n),f(t,l,n),g(l,o),K(S,o,null),g(o,i),K(M,o,null),g(o,r),K(H,o,null),g(o,c),K(z,o,null),g(o,u),K(D,o,null),g(o,p),K(T,o,null),g(o,d),K(E,o,null),g(l,v),g(l,b),K(q,b,null),g(b,w),K(A,b,null),g(b,x),K(F,b,null),g(b,C),K(B,b,null),f(t,_,n),K(P,t,n),L=!0},p(t,[s]){(!L||2&s&&n!==(n="assets/styles/themes/"+t[1]+".css"))&&y(e,"href",n),(!L||1&s)&&k(l,"--main-color",t[0])},i(t){L||(G(j.$$.fragment,t),G(S.$$.fragment,t),G(M.$$.fragment,t),G(H.$$.fragment,t),G(z.$$.fragment,t),G(D.$$.fragment,t),G(T.$$.fragment,t),G(E.$$.fragment,t),G(q.$$.fragment,t),G(A.$$.fragment,t),G(F.$$.fragment,t),G(B.$$.fragment,t),G(P.$$.fragment,t),L=!0)},o(t){Q(j.$$.fragment,t),Q(S.$$.fragment,t),Q(M.$$.fragment,t),Q(H.$$.fragment,t),Q(z.$$.fragment,t),Q(D.$$.fragment,t),Q(T.$$.fragment,t),Q(E.$$.fragment,t),Q(q.$$.fragment,t),Q(A.$$.fragment,t),Q(F.$$.fragment,t),Q(B.$$.fragment,t),Q(P.$$.fragment,t),L=!1},d(t){m(e),t&&m(s),X(j,t),t&&m(a),t&&m(l),X(S),X(M),X(H),X(z),X(D),X(T),X(E),X(q),X(A),X(F),X(B),t&&m(_),X(P,t)}}}function ne(t,e,n){let s="#00bcd4",a="light";return[s,a,function(t){n(0,s=t.detail)},function(t){n(1,a=t.detail)}]}return new class extends et{constructor(t){super(),tt(this,t,ne,ee,o,{})}}({target:document.body})}();
