var yunex=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function a(t){t.forEach(n)}function l(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let r=i?()=>window.performance.now():()=>Date.now(),c=i?t=>requestAnimationFrame(t):t;const u=new Set;function p(t){u.forEach(e=>{e.c(t)||(u.delete(e),e.f())}),0!==u.size&&c(p)}function f(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function $(){return v(" ")}function b(){return v("")}function w(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){(null!=e||t.value)&&(t.value=e)}function k(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function C(t,e,n){t.classList[n?"add":"remove"](e)}function L(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let j,S,_=0,z={};function M(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--_&&c(()=>{if(_)return;let t=j.cssRules.length;for(;t--;)j.deleteRule(t);z={}})}function H(t){S=t}function E(){const t=function(){if(!S)throw new Error("Function called outside component initialization");return S}();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const a=L(e,n);s.slice().forEach(e=>{e.call(t,a)})}}}const T=[],A=[],q=[],D=[],B=Promise.resolve();let F=!1;function R(t){q.push(t)}const J=new Set;function N(){do{for(;T.length;){const t=T.shift();H(t),P(t.$$)}for(;A.length;)A.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];J.has(e)||(J.add(e),e())}q.length=0}while(T.length);for(;D.length;)D.pop()();F=!1,J.clear()}function P(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let I;function O(t,e,n){t.dispatchEvent(L(`${e?"intro":"outro"}${n}`))}const W=new Set;function G(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Q(t,e,n,s){if(t&&t.o){if(W.has(t))return;W.add(t),(void 0).c.push(()=>{W.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Y={duration:0};function V(n,s,a){let o,i,f=s(n,a),g=!1,m=0;function d(){o&&M(n,o)}function v(){const{delay:s=0,duration:a=300,easing:l=e,tick:v=t,css:$}=f||Y;$&&(o=function(t,e,n,s,a,l,o,i=0){const r=16.666/s;let c="{\n";for(let t=0;t<=1;t+=r){const s=e+(n-e)*l(t);c+=100*t+`%{${o(s,1-s)}}\n`}const u=c+`100% {${o(n,1-n)}}\n}`,p=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`;if(!z[p]){if(!j){const t=h("style");document.head.appendChild(t),j=t.sheet}z[p]=!0,j.insertRule(`@keyframes ${p} ${u}`,j.cssRules.length)}const f=t.style.animation||"";return t.style.animation=`${f?`${f}, `:""}${p} ${s}ms linear ${a}ms 1 both`,_+=1,p}(n,0,1,a,s,l,$,m++)),v(0,1);const b=r()+s,w=b+a;i&&i.abort(),g=!0,R(()=>O(n,!0,"start")),i=function(t){let e;return 0===u.size&&c(p),{promise:new Promise(n=>{u.add(e={c:t,f:n})}),abort(){u.delete(e)}}}(t=>{if(g){if(t>=w)return v(1,0),O(n,!0,"end"),d(),g=!1;if(t>=b){const e=l((t-b)/a);v(e,1-e)}}return g})}let $=!1;return{start(){$||(M(n),l(f)?(f=f(),(I||(I=Promise.resolve(),I.then(()=>{I=null})),I).then(v)):v())},invalidate(){$=!1},end(){g&&(d(),g=!1)}}}function U(t){t&&t.c()}function K(t,e,s){const{fragment:o,on_mount:i,on_destroy:r,after_update:c}=t.$$;o&&o.m(e,s),R(()=>{const e=i.map(n).filter(l);r?r.push(...e):a(e),t.$$.on_mount=[]}),c.forEach(R)}function X(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(T.push(t),F||(F=!0,B.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,l,o,i,r,c=[-1]){const u=S;H(e);const p=n.props||{},f=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c};let g=!1;f.ctx=l?l(e,p,(t,n,...s)=>{const a=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=a)&&(f.bound[t]&&f.bound[t](a),g&&Z(e,t)),n}):[],f.update(),g=!0,a(f.before_update),f.fragment=!!o&&o(f.ctx),n.target&&(n.hydrate?f.fragment&&f.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):f.fragment&&f.fragment.c(),n.intro&&G(e.$$.fragment),K(e,n.target,n.anchor),N()),H(u)}class et{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function nt(e){let n,s,a;return{c(){n=h("img"),n.src!==(s="./assets/images/"+e[0]+".png")&&y(n,"src",s),y(n,"alt",a="icon-"+e[0]),k(n,"width",(e[1]||21)+"px"),k(n,"height",(e[1]||21)+"px"),k(n,"margin-right",(e[2]||16)+"px"),y(n,"class","svelte-1txmne")},m(t,e){g(t,n,e)},p(t,[e]){1&e&&n.src!==(s="./assets/images/"+t[0]+".png")&&y(n,"src",s),1&e&&a!==(a="icon-"+t[0])&&y(n,"alt",a),2&e&&k(n,"width",(t[1]||21)+"px"),2&e&&k(n,"height",(t[1]||21)+"px"),4&e&&k(n,"margin-right",(t[2]||16)+"px")},i:t,o:t,d(t){t&&m(n)}}}function st(t,e,n){let{icon:s}=e,{size:a=""}=e,{margin:l=""}=e;return t.$set=t=>{"icon"in t&&n(0,s=t.icon),"size"in t&&n(1,a=t.size),"margin"in t&&n(2,l=t.margin)},[s,a,l]}class at extends et{constructor(t){super(),tt(this,t,st,nt,o,{icon:0,size:1,margin:2})}}function lt(e){let n,s,a,l,o,i,r,c,u,p,d,v,b,w,x,k,C,L;const j=new at({props:{size:"30",margin:"10",icon:"freelancer"}}),S=new at({props:{size:"30",margin:"10",icon:"codepen"}}),_=new at({props:{size:"30",margin:"0",icon:"github"}});return{c(){n=h("header"),s=h("video"),s.innerHTML='<source src="./assets/video/background.mp4" type="video/mp4">',a=$(),l=h("section"),o=h("img"),r=$(),c=h("h1"),c.textContent="Youness Boualam",u=$(),p=h("h2"),p.textContent="Web Developer & graphic designer",d=$(),v=h("div"),b=h("a"),U(j.$$.fragment),w=$(),x=h("a"),U(S.$$.fragment),k=$(),C=h("a"),U(_.$$.fragment),s.loop=!0,s.autoplay=!0,s.muted=!0,y(s,"class","svelte-py7i32"),o.src!==(i="./assets/images/logo.jpg?v1")&&y(o,"src","./assets/images/logo.jpg?v1"),y(o,"alt","Youness Boualam Logo"),y(o,"class","svelte-py7i32"),y(c,"class","svelte-py7i32"),y(p,"class","svelte-py7i32"),y(b,"href","https://www.freelancer.com/u/younessboualam?action=hireme&w=f"),y(b,"target","_blank"),y(b,"class","svelte-py7i32"),y(x,"href","https://codepen.io/younes-b"),y(x,"target","_blank"),y(x,"class","svelte-py7i32"),y(C,"href","https://github.com/younessboualam"),y(C,"target","_blank"),y(C,"class","svelte-py7i32"),y(v,"class","social svelte-py7i32"),y(l,"class","svelte-py7i32"),y(n,"class","svelte-py7i32")},m(t,e){g(t,n,e),f(n,s),f(n,a),f(n,l),f(l,o),f(l,r),f(l,c),f(l,u),f(l,p),f(l,d),f(l,v),f(v,b),K(j,b,null),f(v,w),f(v,x),K(S,x,null),f(v,k),f(v,C),K(_,C,null),L=!0},p:t,i(t){L||(G(j.$$.fragment,t),G(S.$$.fragment,t),G(_.$$.fragment,t),L=!0)},o(t){Q(j.$$.fragment,t),Q(S.$$.fragment,t),Q(_.$$.fragment,t),L=!1},d(t){t&&m(n),X(j),X(S),X(_)}}}class ot extends et{constructor(t){super(),tt(this,t,null,lt,o,{})}}function it(t,e,n){const s=t.slice();return s[5]=e[n],s}function rt(t){let e,n;function s(...e){return t[4](t[5],...e)}return{c(){e=h("div"),y(e,"class","color svelte-huf8lk"),k(e,"background",t[5])},m(t,a){g(t,e,a),n=w(e,"click",s)},p(e,n){t=e},d(t){t&&m(e),n()}}}function ct(e){let n,s,a,l,o,i,r,c,u=e[0],p=[];for(let t=0;t<u.length;t+=1)p[t]=rt(it(e,u,t));return{c(){n=h("div"),s=h("div");for(let t=0;t<p.length;t+=1)p[t].c();a=$(),l=h("div"),o=h("input"),i=$(),r=h("label"),y(s,"class","colors svelte-huf8lk"),y(o,"type","checkbox"),y(o,"id","toggle"),y(o,"class","svelte-huf8lk"),y(r,"for","toggle"),y(r,"class","svelte-huf8lk"),y(l,"class","toggle svelte-huf8lk"),y(n,"class","section svelte-huf8lk")},m(t,u){g(t,n,u),f(n,s);for(let t=0;t<p.length;t+=1)p[t].m(s,null);f(n,a),f(n,l),f(l,o),f(l,i),f(l,r),c=w(o,"change",e[2])},p(t,[e]){if(3&e){let n;for(u=t[0],n=0;n<u.length;n+=1){const a=it(t,u,n);p[n]?p[n].p(a,e):(p[n]=rt(a),p[n].c(),p[n].m(s,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=u.length}},i:t,o:t,d(t){t&&m(n),d(p,t),c()}}}function ut(t){let e=E();function n(t){e("color",t),console.log(t)}return[["#e91e63","#9c27b0","#3f51b5","#00bcd4","#009688","#4caf50","#8bc34a","#ff9800","#ff5722"],n,function(t){t.target.checked?e("theme","dark"):e("theme","light")},e,t=>n(t)]}class pt extends et{constructor(t){super(),tt(this,t,ut,ct,o,{})}}function ft(e){let n,s,l,o,i,r,c,u,p,d,v,b,k,C;return{c(){n=h("div"),s=h("h3"),s.innerHTML='<i class="icon-hireme"></i>Hire Me',l=$(),o=h("form"),i=h("label"),i.textContent="Email",r=$(),c=h("input"),u=$(),p=h("label"),p.textContent="Message",d=$(),v=h("textarea"),b=$(),k=h("button"),k.textContent="Hire me",y(i,"for","email"),y(i,"class","svelte-18urkd0"),y(c,"type","email"),y(c,"id","email"),y(c,"placeholder","your email here"),c.required=!0,y(c,"class","svelte-18urkd0"),y(p,"for","message"),y(p,"class","svelte-18urkd0"),y(v,"id","message"),y(v,"placeholder","Message text"),v.required=!0,y(v,"class","svelte-18urkd0"),y(k,"type","submit"),y(k,"class","svelte-18urkd0"),y(n,"class","section svelte-18urkd0")},m(t,a){g(t,n,a),f(n,s),f(n,l),f(n,o),f(o,i),f(o,r),f(o,c),x(c,e[0]),f(o,u),f(o,p),f(o,d),f(o,v),x(v,e[1]),f(o,b),f(o,k),C=[w(c,"input",e[3]),w(v,"input",e[4]),w(k,"click",e[2])]},p(t,[e]){1&e&&c.value!==t[0]&&x(c,t[0]),2&e&&x(v,t[1])},i:t,o:t,d(t){t&&m(n),a(C)}}}function gt(t,e,n){let s="",a="";return[s,a,t=>{if(t.preventDefault(),""!=s||""!=a){let t=`mailto:youness.boualam95@gmail.com?cc=${s}&subject=Creation%20de%20projet&body=${escape(a)}`;window.location.href=t,n(0,s=""),n(1,a="")}},function(){s=this.value,n(0,s)},function(){a=this.value,n(1,a)}]}class mt extends et{constructor(t){super(),tt(this,t,gt,ft,o,{})}}function dt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-account"></i>About Me</h3> \n\t<p>I&#39;m Youness Boualam from Morocco, I am a web developer &amp; also a graphic designer freelancer,\n\ti love drawing and descovering new web and design trends</p>',y(n,"class","section about")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class ht extends et{constructor(t){super(),tt(this,t,null,dt,o,{})}}function vt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-interests"></i>Interests</h3> \n\t\n\t<span class="tags">Drawing</span> \n\t<span class="tags">2D Animation</span> \n\t<span class="tags">Design</span> \n\t<span class="tags">Coding</span> \n\t<span class="tags">Follow the web tech trends</span> \n\t<span class="tags">Reading</span>',y(n,"class","section")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class $t extends et{constructor(t){super(),tt(this,t,null,vt,o,{})}}function bt(e){let n,s;return{c(){n=h("div"),s=h("div"),y(s,"class","bar svelte-14fsk9z"),k(s,"width",e[0]),y(n,"class","progress-bar svelte-14fsk9z")},m(t,e){g(t,n,e),f(n,s)},p(t,[e]){1&e&&k(s,"width",t[0])},i:t,o:t,d(t){t&&m(n)}}}function wt(t,e,n){let{level:s}=e;return t.$set=t=>{"level"in t&&n(0,s=t.level)},[s]}class yt extends et{constructor(t){super(),tt(this,t,wt,bt,o,{level:0})}}function xt(e){let n,s,a,l,o,i,r,c,u,p,d,v,b,w,x,k,C,L,j;const S=new yt({props:{level:"90%"}}),_=new yt({props:{level:"80%"}}),z=new yt({props:{level:"60%"}}),M=new yt({props:{level:"50%"}});return{c(){n=h("div"),s=h("h3"),s.innerHTML='<i class="icon-language"></i>Languages',a=$(),l=h("div"),o=h("span"),o.textContent="Tamazight",i=$(),U(S.$$.fragment),r=$(),c=h("div"),u=h("span"),u.textContent="Arabic",p=$(),U(_.$$.fragment),d=$(),v=h("div"),b=h("span"),b.textContent="French",w=$(),U(z.$$.fragment),x=$(),k=h("div"),C=h("span"),C.textContent="English",L=$(),U(M.$$.fragment),y(o,"class","svelte-100jfut"),y(l,"class","language svelte-100jfut"),y(u,"class","svelte-100jfut"),y(c,"class","language svelte-100jfut"),y(b,"class","svelte-100jfut"),y(v,"class","language svelte-100jfut"),y(C,"class","svelte-100jfut"),y(k,"class","language svelte-100jfut"),y(n,"class","section language svelte-100jfut")},m(t,e){g(t,n,e),f(n,s),f(n,a),f(n,l),f(l,o),f(l,i),K(S,l,null),f(n,r),f(n,c),f(c,u),f(c,p),K(_,c,null),f(n,d),f(n,v),f(v,b),f(v,w),K(z,v,null),f(n,x),f(n,k),f(k,C),f(k,L),K(M,k,null),j=!0},p:t,i(t){j||(G(S.$$.fragment,t),G(_.$$.fragment,t),G(z.$$.fragment,t),G(M.$$.fragment,t),j=!0)},o(t){Q(S.$$.fragment,t),Q(_.$$.fragment,t),Q(z.$$.fragment,t),Q(M.$$.fragment,t),j=!1},d(t){t&&m(n),X(S),X(_),X(z),X(M)}}}class kt extends et{constructor(t){super(),tt(this,t,null,xt,o,{})}}function Ct(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-contact"></i>Contact</h3> \n\t\n\t<p class="svelte-1i5v3nw"><i class="icon-location svelte-1i5v3nw"></i>Al Moqawama Street Taznakhte</p> \n\t<p class="svelte-1i5v3nw"><i class="icon-email svelte-1i5v3nw"></i>youness.boualam95@gmail.com</p> \n\t<p class="svelte-1i5v3nw"><i class="icon-phone svelte-1i5v3nw"></i>+212 6 02 43 90 66</p> \n\n\t<hr class="svelte-1i5v3nw"> \n\n\t<a href="https://www.facebook.com/youness.boualam95" target="_blank" class="svelte-1i5v3nw"><p class="svelte-1i5v3nw"><i class="icon-facebook svelte-1i5v3nw"></i>youness.boualam95</p></a> \n\t<a href="https://www.instagram.com/younes_boualam/" target="_blank" class="svelte-1i5v3nw"><p class="svelte-1i5v3nw"><i class="icon-instagram svelte-1i5v3nw"></i>youness_boualam</p></a> \n\t<a href="https://www.linkedin.com/in/youness-boualam/" target="_blank" class="svelte-1i5v3nw"><p class="svelte-1i5v3nw"><i class="icon-linkedin svelte-1i5v3nw"></i>youness-boualam</p></a>',y(n,"class","section about")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Lt extends et{constructor(t){super(),tt(this,t,null,Ct,o,{})}}function jt(t){const e=t-1;return e*e*e+1}function St(t,{delay:e=0,duration:n=400,easing:s=jt,x:a=0,y:l=0,opacity:o=0}){const i=getComputedStyle(t),r=+i.opacity,c="none"===i.transform?"":i.transform,u=r*(1-o);return{delay:e,duration:n,easing:s,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*a}px, ${(1-t)*l}px);\n\t\t\topacity: ${r-u*e}`}}function _t(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function zt(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Mt(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Ht(e){let n,s=e[3][0].design,a=[];for(let t=0;t<s.length;t+=1)a[t]=At(_t(e,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();n=b()},m(t,e){for(let n=0;n<a.length;n+=1)a[n].m(t,e);g(t,n,e)},p(t,e){if(24&e){let l;for(s=t[3][0].design,l=0;l<s.length;l+=1){const o=_t(t,s,l);a[l]?(a[l].p(o,e),G(a[l],1)):(a[l]=At(o),a[l].c(),G(a[l],1),a[l].m(n.parentNode,n))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},i(t){for(let t=0;t<s.length;t+=1)G(a[t])},o:t,d(t){d(a,t),t&&m(n)}}}function Et(e){let n,s=e[3][0].web,a=[];for(let t=0;t<s.length;t+=1)a[t]=qt(zt(e,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();n=b()},m(t,e){for(let n=0;n<a.length;n+=1)a[n].m(t,e);g(t,n,e)},p(t,e){if(24&e){let l;for(s=t[3][0].web,l=0;l<s.length;l+=1){const o=zt(t,s,l);a[l]?(a[l].p(o,e),G(a[l],1)):(a[l]=qt(o),a[l].c(),G(a[l],1),a[l].m(n.parentNode,n))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},i(t){for(let t=0;t<s.length;t+=1)G(a[t])},o:t,d(t){d(a,t),t&&m(n)}}}function Tt(e){let n,s=e[3][0].logo,a=[];for(let t=0;t<s.length;t+=1)a[t]=Dt(Mt(e,s,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();n=b()},m(t,e){for(let n=0;n<a.length;n+=1)a[n].m(t,e);g(t,n,e)},p(t,e){if(24&e){let l;for(s=t[3][0].logo,l=0;l<s.length;l+=1){const o=Mt(t,s,l);a[l]?(a[l].p(o,e),G(a[l],1)):(a[l]=Dt(o),a[l].c(),G(a[l],1),a[l].m(n.parentNode,n))}for(;l<a.length;l+=1)a[l].d(1);a.length=s.length}},i(t){for(let t=0;t<s.length;t+=1)G(a[t])},o:t,d(t){d(a,t),t&&m(n)}}}function At(e){let n,s,a,l,o;function i(...t){return e[10](e[12],...t)}return{c(){n=h("img"),n.src!==(s=e[12].source)&&y(n,"src",s),y(n,"alt",a=e[12].source),y(n,"class","svelte-tmqfxp")},m(t,e){g(t,n,e),o=w(n,"click",i)},p(t,n){e=t},i(t){l||R(()=>{l=V(n,St,{y:50,duration:200,delay:100*e[14]}),l.start()})},o:t,d(t){t&&m(n),o()}}}function qt(e){let n,s,a,l,o;function i(...t){return e[9](e[12],...t)}return{c(){n=h("img"),n.src!==(s=e[12].source)&&y(n,"src",s),y(n,"alt",a=e[12].source),y(n,"class","svelte-tmqfxp")},m(t,e){g(t,n,e),o=w(n,"click",i)},p(t,n){e=t},i(t){l||R(()=>{l=V(n,St,{y:50,duration:200,delay:100*e[14]}),l.start()})},o:t,d(t){t&&m(n),o()}}}function Dt(e){let n,s,a,l,o;function i(...t){return e[8](e[12],...t)}return{c(){n=h("img"),n.src!==(s=e[12].source)&&y(n,"src",s),y(n,"alt",a=e[12].source),y(n,"class","svelte-tmqfxp")},m(t,e){g(t,n,e),o=w(n,"click",i)},p(t,n){e=t},i(t){l||R(()=>{l=V(n,St,{y:50,duration:200,delay:100*e[14]}),l.start()})},o:t,d(t){t&&m(n),o()}}}function Bt(t){let e,n,s,a,l,o,i,r,c,u=t[1].title+"";function p(t,e){return"web"==t[2]?Rt:Ft}let d=p(t),b=d(t);return{c(){e=h("div"),n=h("div"),s=h("h4"),a=v(u),l=$(),o=h("div"),i=h("span"),r=$(),b.c(),y(s,"class","svelte-tmqfxp"),y(i,"class","svelte-tmqfxp"),y(o,"class","container svelte-tmqfxp"),y(n,"class","preview"),y(e,"class","overlay svelte-tmqfxp")},m(u,p){g(u,e,p),f(e,n),f(n,s),f(s,a),f(n,l),f(n,o),f(o,i),f(o,r),b.m(o,null),c=w(i,"click",t[11])},p(t,e){2&e&&u!==(u=t[1].title+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(a,u),d===(d=p(t))&&b?b.p(t,e):(b.d(1),b=d(t),b&&(b.c(),b.m(o,null)))},d(t){t&&m(e),b.d(),c()}}}function Ft(t){let e,n,s;return{c(){e=h("img"),e.src!==(n=t[1].source)&&y(e,"src",n),y(e,"alt",s=t[1].title)},m(t,n){g(t,e,n)},p(t,a){2&a&&e.src!==(n=t[1].source)&&y(e,"src",n),2&a&&s!==(s=t[1].title)&&y(e,"alt",s)},d(t){t&&m(e)}}}function Rt(t){let e,n,s;return{c(){e=h("iframe"),e.src!==(n=t[1].link)&&y(e,"src",n),y(e,"title",s=t[1].title),y(e,"frameborder","0"),y(e,"class","svelte-tmqfxp")},m(t,n){g(t,e,n)},p(t,a){2&a&&e.src!==(n=t[1].link)&&y(e,"src",n),2&a&&s!==(s=t[1].title)&&y(e,"title",s)},d(t){t&&m(e)}}}function Jt(e){let n,s,l,o,i,r,c,u,p,d,v,b,x;function k(t,e){return"logo"==t[2]?Tt:"web"==t[2]?Et:Ht}let L=k(e),j=L(e),S=e[0]&&Bt(e);return{c(){n=h("div"),s=h("h3"),s.innerHTML='<i class="icon-portfolio"></i>Portfolios',l=$(),o=h("ol"),i=h("li"),i.textContent="Logos",r=$(),c=h("li"),c.textContent="Graphic Design",u=$(),p=h("li"),p.textContent="Web Design",d=$(),v=h("div"),j.c(),b=$(),S&&S.c(),y(i,"class","svelte-tmqfxp"),C(i,"active","logo"===e[2]),y(c,"class","svelte-tmqfxp"),C(c,"active","design"===e[2]),y(p,"class","svelte-tmqfxp"),C(p,"active","web"===e[2]),y(o,"class","svelte-tmqfxp"),y(v,"class","projects svelte-tmqfxp"),y(n,"class","section")},m(t,a){g(t,n,a),f(n,s),f(n,l),f(n,o),f(o,i),f(o,r),f(o,c),f(o,u),f(o,p),f(n,d),f(n,v),j.m(v,null),f(n,b),S&&S.m(n,null),x=[w(i,"click",e[5]),w(c,"click",e[6]),w(p,"click",e[7])]},p(t,[e]){4&e&&C(i,"active","logo"===t[2]),4&e&&C(c,"active","design"===t[2]),4&e&&C(p,"active","web"===t[2]),L===(L=k(t))&&j?j.p(t,e):(j.d(1),j=L(t),j&&(j.c(),G(j,1),j.m(v,null))),t[0]?S?S.p(t,e):(S=Bt(t),S.c(),S.m(n,null)):S&&(S.d(1),S=null)},i(t){G(j)},o:t,d(t){t&&m(n),j.d(),S&&S.d(),a(x)}}}function Nt(t,e,n){let s=!1,a="",l="";setTimeout(()=>n(2,l="logo"),100);const o=t=>{n(0,s=!0),n(1,a=t)};window.addEventListener("keydown",t=>{"Escape"==t.key&&1==s&&n(0,s=!1)});return[s,a,l,[{logo:[{title:"Robledo Home Remodeling Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/rhr.jpg"},{title:"BarCoe Sounds Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/BarCoeSound.jpg"},{title:"Infinite Holdings Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/InfiniteHoldings.jpg"},{title:"Selfish (Freelancer contest)",source:"./assets/images/portfolios/logo/selfish.jpg"},{title:"Ching's Record Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/chingsRecord.jpg"},{title:"The Britania Coin Company Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/britannia.jpg"},{title:"Consulenze Digitali Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/consulenze.jpg"},{title:"Marc-Philip Neff Logo (Freelancer contest)",source:"./assets/images/portfolios/logo/marcphilip.jpg"}],web:[{title:"amapub.ma (2017)",source:"./assets/images/portfolios/web/amapub.png",link:"https://amapub.ma/home.php?lang=fr"},{title:"amaprod.ma (2018)",source:"./assets/images/portfolios/web/amaprod.png",link:"https://ama-prod.ma/accueil.php?langage=fr"},{title:"amaevents.ma (2018)",source:"./assets/images/portfolios/web/amaevents.png",link:"http://amaevents.ma"}],design:[{title:"Draa Lab Calendar",source:"./assets/images/portfolios/graphic/draaLab.jpg"},{title:"Ando Horse Riding Business Card",source:"./assets/images/portfolios/graphic/Ando Horse Riding.jpg"},{title:"Sawla Association Business Card",source:"./assets/images/portfolios/graphic/salwa.jpg"}]}],o,()=>n(2,l="logo"),()=>n(2,l="design"),()=>n(2,l="web"),t=>o(t),t=>o(t),t=>o(t),()=>n(0,s=!1)]}class Pt extends et{constructor(t){super(),tt(this,t,Nt,Jt,o,{})}}function It(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-experience"></i>Experiences</h3> \n\n\t<ul class="timeline"><li><h4>Freelancer at Freelancer.com</h4> \n\t\t\t<span>19 September 2019, Present</span> \n\t\t\t<p>Creation of logos, and business cards and all concerning graphic design as well as web development</p></li> \n\n\t\t<li><h4>Scholar internship at Media Evolution S.A.R.L</h4> \n\t\t\t<span>15 April, 15 June 2019</span> \n\t\t\t<p>Creation of a desktop application using Electron JS and SQLite for customer management and invoicing</p></li> \n\n\t\t<li><h4>Fullstack developer at AMAPUB S.A.R.L</h4> \n\t\t\t<span>01 November 2017, 31 September 2018</span> \n\t\t\t<p>Creation of websites from layout to hosting and also its maintenance</p></li> \n\n\t\t<li><h4>Scholar internship at the health delegation of Ouarzazate</h4> \n\t\t\t<span>01 May 2017, 30 May 2017</span> \n\t\t\t<p>Creation of a website for the Basma association for abandoned children</p></li> \n\n\t\t<li><h4>Scholar internship at the rural commune of Taznakhte</h4> \n\t\t\t<span>01 July 2016, 31 July 2016</span> \n\t\t\t<p>creation of desktop applications for personnel management using VB.net</p></li></ul>',y(n,"class","section")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Ot extends et{constructor(t){super(),tt(this,t,null,It,o,{})}}function Wt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-formations"></i>Formation</h3> \n\n\t<ul class="timeline"><li><h4>Professional License</h4> \n\t\t\t<span>2018, 2019</span> \n\t\t\t<p>Computer science at the multidisciplinary faculty, Errachidia</p></li> \n\n\t\t<li><h4>Higher Technician Certificate</h4> \n\t\t\t<span>2015, 2017</span> \n\t\t\t<p>Development of information systems at Ibn Al Haitam Technical High School, Ouarzazate</p></li> \n\n\t\t<li><h4>Technical Baccalaureate</h4> \n\t\t\t<span>2014, 2015</span> \n\t\t\t<p>Electrical Science and Technology at the Ibn Al Haitam Technical High School, Ouarzazate</p></li></ul>',y(n,"class","section")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Gt extends et{constructor(t){super(),tt(this,t,null,Wt,o,{})}}function Qt(e){let n;return{c(){n=h("div"),n.innerHTML='<h3><i class="icon-skills"></i>Skills</h3> \n\n\t<h4 class="svelte-1kl46i7">Web development</h4> \n\t<span class="tags">HTML</span> \n\t<span class="tags">CSS</span> \n\t<span class="tags">SCSS</span> \n\t<span class="tags">Bootstrap Css</span> \n\t<span class="tags">JavaScript</span> \n\t<span class="tags">jQuery</span> \n\t<span class="tags">Vue Js</span> \n\t<span class="tags">Svelte Js</span> \n\t<span class="tags">Node Js</span> \n\t<span class="tags">Adonis Js</span> \n\t<span class="tags">PHP</span> \n\t<span class="tags">Laravel</span> \n\t<span class="tags">Wordpress</span> \n\t<span class="tags">MySQL</span> \n\t<span class="tags">MongoDB</span> \n\t<span class="tags">NeDB</span> \n\n\t<h4 class="svelte-1kl46i7">Softwares</h4> \n\t<span class="tags">Git &amp; Github</span> \n\t<span class="tags">Adobe Illustrator</span> \n\t<span class="tags">Gravit Designer</span> \n\n\t<h4 class="svelte-1kl46i7">Other knowledge</h4> \n\t<span class="tags">Electron Js</span> \n\t<span class="tags">NodeWebkit Js (NW.js)</span> \n\t<span class="tags">Chrome Extension Dev</span> \n\t<span class="tags">SQL</span> \n\t<span class="tags">Logo Design</span> \n\t<span class="tags">Business Card Design</span> \n\t<span class="tags">Linux</span>',y(n,"class","section language")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Yt extends et{constructor(t){super(),tt(this,t,null,Qt,o,{})}}function Vt(e){let n;return{c(){n=h("footer"),n.innerHTML='<p>Designed and Developed by <strong class="svelte-h6ee2">Youness Boualam</strong> using Svelte Js</p>',y(n,"class","svelte-h6ee2")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Ut extends et{constructor(t){super(),tt(this,t,null,Vt,o,{})}}function Kt(t){let e,n,s,a,l,o,i,r,c,u,p,d,v,b,w,x,C,L;const j=new ot({}),S=new pt({});S.$on("color",t[2]),S.$on("theme",t[3]);const _=new mt({}),z=new ht({}),M=new kt({}),H=new $t({}),E=new Lt({}),T=new Pt({}),A=new Ot({}),q=new Gt({}),D=new Yt({}),B=new Ut({});return{c(){e=h("link"),s=$(),U(j.$$.fragment),a=$(),l=h("main"),o=h("div"),U(S.$$.fragment),i=$(),U(_.$$.fragment),r=$(),U(z.$$.fragment),c=$(),U(M.$$.fragment),u=$(),U(H.$$.fragment),p=$(),U(E.$$.fragment),d=$(),v=h("div"),U(T.$$.fragment),b=$(),U(A.$$.fragment),w=$(),U(q.$$.fragment),x=$(),U(D.$$.fragment),C=$(),U(B.$$.fragment),y(e,"rel","stylesheet"),y(e,"href",n="assets/styles/themes/"+t[1]+".css"),y(o,"class","left svelte-1jxzdqr"),y(v,"class","right svelte-1jxzdqr"),k(l,"--main-color",t[0]),y(l,"class","svelte-1jxzdqr")},m(t,n){f(document.head,e),g(t,s,n),K(j,t,n),g(t,a,n),g(t,l,n),f(l,o),K(S,o,null),f(o,i),K(_,o,null),f(o,r),K(z,o,null),f(o,c),K(M,o,null),f(o,u),K(H,o,null),f(o,p),K(E,o,null),f(l,d),f(l,v),K(T,v,null),f(v,b),K(A,v,null),f(v,w),K(q,v,null),f(v,x),K(D,v,null),g(t,C,n),K(B,t,n),L=!0},p(t,[s]){(!L||2&s&&n!==(n="assets/styles/themes/"+t[1]+".css"))&&y(e,"href",n),(!L||1&s)&&k(l,"--main-color",t[0])},i(t){L||(G(j.$$.fragment,t),G(S.$$.fragment,t),G(_.$$.fragment,t),G(z.$$.fragment,t),G(M.$$.fragment,t),G(H.$$.fragment,t),G(E.$$.fragment,t),G(T.$$.fragment,t),G(A.$$.fragment,t),G(q.$$.fragment,t),G(D.$$.fragment,t),G(B.$$.fragment,t),L=!0)},o(t){Q(j.$$.fragment,t),Q(S.$$.fragment,t),Q(_.$$.fragment,t),Q(z.$$.fragment,t),Q(M.$$.fragment,t),Q(H.$$.fragment,t),Q(E.$$.fragment,t),Q(T.$$.fragment,t),Q(A.$$.fragment,t),Q(q.$$.fragment,t),Q(D.$$.fragment,t),Q(B.$$.fragment,t),L=!1},d(t){m(e),t&&m(s),X(j,t),t&&m(a),t&&m(l),X(S),X(_),X(z),X(M),X(H),X(E),X(T),X(A),X(q),X(D),t&&m(C),X(B,t)}}}function Xt(t,e,n){let s="#00bcd4",a="light";return[s,a,function(t){n(0,s=t.detail)},function(t){n(1,a=t.detail)}]}return new class extends et{constructor(t){super(),tt(this,t,Xt,Kt,o,{})}}({target:document.body})}();
