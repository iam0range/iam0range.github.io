import{l as Q,u as xe,G as Xe,H as jt,g as Bt,I as Qe,J as qe,K as et,L as se,p as Vt,a as qt,k as Ut,M as Dt}from"./app.aQ7TfIiT.js";import{_ as Ft}from"./YunComment.vue_vue_type_style_index_0_lang.CKqr1a0a.js";import{d as Ue}from"./chunks/dayjs.Byk5cVHE.js";import{a as tt,u as Gt}from"./chunks/vue-router.UlgjAsTE.js";import{d as ue,c as S,f as ee,Q as D,U as _,O as J,S as k,u as h,N as Wt,a4 as de,W as P,P as x,e as Kt,L as Zt,Y as Ce,V as y,p as Jt,y as K,$ as Xt}from"./framework.DntyxCiH.js";import{u as Ie}from"./chunks/vue-i18n.DyM89frq.js";import{_ as Qt}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.CgGBEkNu.js";import{u as en}from"./post.IceQWMZ9.js";function tn(e){const t=e.cloneNode(!0);t.style.cssText=`
      position: absolute;
      visibility: hidden;
      display: block;
      left: -9999px;
  `,document.body.appendChild(t);const n=t.scrollHeight;return document.body.removeChild(t),n}function nn(){const e=Q(),n=xe().value.codeHeightLimit||e.value.codeHeightLimit;typeof n!="number"||n<=0||(Xe("click",o=>{const a=o.target;if(a.matches('[class*="language-"] > button.collapse')){const i=a.parentElement;i==null||i.removeAttribute("style"),i==null||i.classList.remove("folded")}}),ue(()=>{const o=document.querySelectorAll('div[class*="language-"]');for(const a of Array.from(o))tn(a)>n&&a.classList.add("folded")}))}function on(){if(jt){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,i=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!i)return;const d=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let m="";i.querySelectorAll("span.line:not(.diff.remove)").forEach(g=>m+=`${g.textContent||""}
`),m=m.slice(0,-1),d&&(m=m.replace(/^ *(\$|>) /gm,"").trim()),an(m).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const g=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,g)})}})}}async function an(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},le=function(t){return t.tagName==="IMG"},rn=function(t){return NodeList.prototype.isPrototypeOf(t)},ce=function(t){return t&&t.nodeType===1},De=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Fe=function(t){try{return Array.isArray(t)?t.filter(le):rn(t)?[].slice.call(t).filter(le):ce(t)?[t].filter(le):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(le):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},sn=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},ln=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,i=n.width,d=n.height,m=t.cloneNode(),g=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,w=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return m.removeAttribute("id"),m.style.position="absolute",m.style.top=o+g+"px",m.style.left=a+w+"px",m.style.width=i+"px",m.style.height=d+"px",m.style.transform="",m},U=function(t,n){var o=R({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},cn=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(s){function l(){}s(l,l)},a=function(s){var l=s.target;if(l===re){L();return}E.indexOf(l)!==-1&&ae({target:l})},i=function(){if(!(V||!r.original)){var s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(Be-s)>f.scrollOffset&&setTimeout(L,150)}},d=function(s){var l=s.key||s.keyCode;(l==="Escape"||l==="Esc"||l===27)&&L()},m=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s;if(s.background&&(re.style.background=s.background),s.container&&s.container instanceof Object&&(l.container=R({},f.container,s.container)),s.template){var p=ce(s.template)?s.template:document.querySelector(s.template);l.template=p}return f=R({},f,l),E.forEach(function(v){v.dispatchEvent(U("medium-zoom:update",{detail:{zoom:b}}))}),b},g=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(R({},f,s))},w=function(){for(var s=arguments.length,l=Array(s),p=0;p<s;p++)l[p]=arguments[p];var v=l.reduce(function(c,z){return[].concat(c,Fe(z))},[]);return v.filter(function(c){return E.indexOf(c)===-1}).forEach(function(c){E.push(c),c.classList.add("medium-zoom-image")}),B.forEach(function(c){var z=c.type,A=c.listener,q=c.options;v.forEach(function(O){O.addEventListener(z,A,q)})}),b},he=function(){for(var s=arguments.length,l=Array(s),p=0;p<s;p++)l[p]=arguments[p];r.zoomed&&L();var v=l.length>0?l.reduce(function(c,z){return[].concat(c,Fe(z))},[]):E;return v.forEach(function(c){c.classList.remove("medium-zoom-image"),c.dispatchEvent(U("medium-zoom:detach",{detail:{zoom:b}}))}),E=E.filter(function(c){return v.indexOf(c)===-1}),b},u=function(s,l){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E.forEach(function(v){v.addEventListener("medium-zoom:"+s,l,p)}),B.push({type:"medium-zoom:"+s,listener:l,options:p}),b},je=function(s,l){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return E.forEach(function(v){v.removeEventListener("medium-zoom:"+s,l,p)}),B=B.filter(function(v){return!(v.type==="medium-zoom:"+s&&v.listener.toString()===l.toString())}),b},oe=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.target,p=function(){var c={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},z=void 0,A=void 0;if(f.container)if(f.container instanceof Object)c=R({},c,f.container),z=c.width-c.left-c.right-f.margin*2,A=c.height-c.top-c.bottom-f.margin*2;else{var q=ce(f.container)?f.container:document.querySelector(f.container),O=q.getBoundingClientRect(),Ee=O.width,xt=O.height,It=O.left,St=O.top;c=R({},c,{width:Ee,height:xt,left:It,top:St})}z=z||c.width-f.margin*2,A=A||c.height-f.margin*2;var W=r.zoomedHd||r.original,Ht=De(W)?z:W.naturalWidth||z,Ot=De(W)?A:W.naturalHeight||A,ie=W.getBoundingClientRect(),Tt=ie.top,Nt=ie.left,$e=ie.width,ze=ie.height,Mt=Math.min(Math.max($e,Ht),z)/$e,Rt=Math.min(Math.max(ze,Ot),A)/ze,we=Math.min(Mt,Rt),Pt=(-Nt+(z-$e)/2+f.margin+c.left)/we,Yt=(-Tt+(A-ze)/2+f.margin+c.top)/we,Ve="scale("+we+") translate3d("+Pt+"px, "+Yt+"px, 0)";r.zoomed.style.transform=Ve,r.zoomedHd&&(r.zoomedHd.style.transform=Ve)};return new o(function(v){if(l&&E.indexOf(l)===-1){v(b);return}var c=function Ee(){V=!1,r.zoomed.removeEventListener("transitionend",Ee),r.original.dispatchEvent(U("medium-zoom:opened",{detail:{zoom:b}})),v(b)};if(r.zoomed){v(b);return}if(l)r.original=l;else if(E.length>0){var z=E;r.original=z[0]}else{v(b);return}if(r.original.dispatchEvent(U("medium-zoom:open",{detail:{zoom:b}})),Be=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,V=!0,r.zoomed=ln(r.original),document.body.appendChild(re),f.template){var A=ce(f.template)?f.template:document.querySelector(f.template);r.template=document.createElement("div"),r.template.appendChild(A.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",L),r.zoomed.addEventListener("transitionend",c),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(q),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,p()};var q=setInterval(function(){r.zoomedHd.complete&&(clearInterval(q),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",L),document.body.appendChild(r.zoomedHd),p())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var O=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",O),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",L),document.body.appendChild(r.zoomedHd),p()})}else p()})},L=function(){return new o(function(s){if(V||!r.original){s(b);return}var l=function p(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(re),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),V=!1,r.zoomed.removeEventListener("transitionend",p),r.original.dispatchEvent(U("medium-zoom:closed",{detail:{zoom:b}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,s(b)};V=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(U("medium-zoom:close",{detail:{zoom:b}})),r.zoomed.addEventListener("transitionend",l)})},ae=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.target;return r.original?L():oe({target:l})},be=function(){return f},_e=function(){return E},ye=function(){return r.original},E=[],B=[],V=!1,Be=0,f=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?f=t:(t||typeof t=="string")&&w(t),f=R({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},f);var re=sn(f.background);document.addEventListener("click",a),document.addEventListener("keyup",d),document.addEventListener("scroll",i),window.addEventListener("resize",L);var b={open:oe,close:L,toggle:ae,update:m,clone:g,attach:w,detach:he,on:u,off:je,getOptions:be,getImages:_e,getZoomedImage:ye};return b};function dn(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var mn=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";dn(mn);function un(){const t=Q().value.mediumZoom;t.enable&&ue(()=>{cn(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function nt(e,t,n={smooth:!0,targetPadding:-64}){let o=null;try{o=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){console.warn(a)}if(o){const a=(n==null?void 0:n.targetPadding)||-64,i=window.scrollY+o.getBoundingClientRect().top+a;!n.smooth||Math.abs(i-window.scrollY)>window.innerHeight?window.scrollTo(0,i):window.scrollTo({top:i,behavior:"smooth"})}}function fn(e){window.addEventListener("click",async t=>{const n=t.target.closest("a");if(n){const{protocol:o,hostname:a,pathname:i,hash:d,target:m}=n,g=window.location,w=i.match(/\.\w+$/);!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey&&m!=="_blank"&&o===g.protocol&&a===g.hostname&&!(w&&w[0]!==".html")&&i===g.pathname&&(t.preventDefault(),d&&d!==g.hash&&(await e.push({hash:decodeURIComponent(d)}),nt(n,d,{smooth:n.classList.contains("header-anchor")})))}},{capture:!0})}function pn(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function gn(e=document){e.querySelectorAll("table").forEach(t=>{var o;if((o=t.parentElement)!=null&&o.classList.contains("table-container"))return;const n=document.createElement("div");n.className="table-container",pn(t,"table-container")})}function vn(e){const t=tt(),n=S(()=>t.path),o=Bt(),a=S(()=>{let m=-1;return o.postList.find((g,w)=>g.path===n.value?(m=w,!0):!1),m}),i=S(()=>a.value-1>=0?o.postList[a.value-1]:null),d=S(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[i,d]}function hn(){const e=Q(),t=S(()=>e.value.cdn.prefix);Qe({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),qe(`${t.value}aplayer/dist/APlayer.min.js`,()=>{qe(`${t.value}meting@2/dist/Meting.min.js`)})}function bn(){Qe({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}const _n={class:"post-nav"},yn={class:"post-nav-item"},En={class:"title truncate",text:"sm"},$n={class:"post-nav-item"},zn={class:"title truncate",text:"sm"},wn=ee({__name:"YunPostNav",setup(e){const[t,n]=vn();return(o,a)=>{const i=Wt("RouterLink");return x(),D("div",_n,[_("div",yn,[h(t)?(x(),J(i,{key:0,class:"post-nav-prev",to:h(t).path||"",title:h(t).title},{default:de(()=>[a[0]||(a[0]=_("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1)),_("span",En,P(h(t).title),1)]),_:1},8,["to","title"])):k("v-if",!0)]),_("div",$n,[h(n)?(x(),J(i,{key:0,to:h(n).path||"",title:h(n).title,class:"post-nav-next"},{default:de(()=>[_("span",zn,P(h(n).title),1),a[1]||(a[1]=_("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1))]),_:1},8,["to","title"])):k("v-if",!0)])])}}});function Cn(){Xe("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const i=o.querySelector(".blocks");if(!i)return;const d=Array.from(i.children).find(w=>w.classList.contains("active"));if(!d)return;const m=i.children[a];if(!m||d===m)return;d.classList.remove("active"),m.classList.add("active");const g=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);g==null||g.scrollIntoView({block:"nearest"})}})}const N=typeof window<"u",ot=N&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),at=N&&window.devicePixelRatio>1,Ln={elements_selector:".lazy",container:ot||N?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},rt=e=>Object.assign({},Ln,e),Ge=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},kn=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)Ge(e,n);else Ge(e,t)},H="src",Se="srcset",He="sizes",it="poster",te="llOriginalAttrs",st="data",Oe="loading",lt="loaded",ct="applied",An="entered",Te="error",dt="native",mt="data-",ut="ll-status",C=(e,t)=>e.getAttribute(mt+t),xn=(e,t,n)=>{const o=mt+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ne=e=>C(e,ut),j=(e,t)=>xn(e,ut,t),fe=e=>j(e,null),Ne=e=>ne(e)===null,In=e=>ne(e)===Oe,Sn=e=>ne(e)===Te,Me=e=>ne(e)===dt,Hn=[Oe,lt,ct,Te],On=e=>Hn.indexOf(ne(e))>=0,M=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},G=(e,t)=>{N&&t!==""&&e.classList.add(t)},I=(e,t)=>{N&&t!==""&&e.classList.remove(t)},Tn=e=>{e.llTempImage=document.createElement("IMG")},Nn=e=>{delete e.llTempImage},ft=e=>e.llTempImage,pe=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},Mn=e=>{e.disconnect()},Rn=(e,t,n)=>{t.unobserve_entered&&pe(e,n)},Re=(e,t)=>{e&&(e.loadingCount+=t)},Pn=e=>{e&&(e.toLoadCount-=1)},pt=(e,t)=>{e&&(e.toLoadCount=t)},Yn=e=>e.loadingCount>0,jn=e=>e.toLoadCount>0,gt=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Pe=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&gt(n).forEach(t)},vt=(e,t)=>{gt(e).forEach(t)},ge=[H],ht=[H,it],X=[H,Se,He],bt=[st],ve=e=>!!e[te],_t=e=>e[te],yt=e=>delete e[te],F=(e,t)=>{if(ve(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[te]=n},Bn=e=>{ve(e)||(e[te]={backgroundImage:e.style.backgroundImage})},Y=(e,t)=>{if(!ve(e))return;const n=_t(e);t.forEach(o=>{((a,i,d)=>{d?a.setAttribute(i,d):a.removeAttribute(i)})(e,o,n[o])})},Vn=e=>{if(!ve(e))return;const t=_t(e);e.style.backgroundImage=t.backgroundImage},Et=(e,t,n)=>{G(e,t.class_applied),j(e,ct),n&&(t.unobserve_completed&&pe(e,t),M(t.callback_applied,e,n))},$t=(e,t,n)=>{G(e,t.class_loading),j(e,Oe),n&&(Re(n,1),M(t.callback_loading,e,n))},T=(e,t,n)=>{n&&e.setAttribute(t,n)},We=(e,t)=>{T(e,He,C(e,t.data_sizes)),T(e,Se,C(e,t.data_srcset)),T(e,H,C(e,t.data_src))},qn=(e,t)=>{Pe(e,n=>{F(n,X),We(n,t)}),F(e,X),We(e,t)},Un=(e,t)=>{F(e,ge),T(e,H,C(e,t.data_src))},Dn=(e,t)=>{vt(e,n=>{F(n,ge),T(n,H,C(n,t.data_src))}),F(e,ht),T(e,it,C(e,t.data_poster)),T(e,H,C(e,t.data_src)),e.load()},Fn=(e,t)=>{F(e,bt),T(e,st,C(e,t.data_src))},Gn=(e,t,n)=>{const o=C(e,t.data_bg),a=C(e,t.data_bg_hidpi),i=at&&a?a:o;i&&(e.style.backgroundImage=`url("${i}")`,ft(e).setAttribute(H,i),$t(e,t,n))},Wn=(e,t,n)=>{const o=C(e,t.data_bg_multi),a=C(e,t.data_bg_multi_hidpi),i=at&&a?a:o;i&&(e.style.backgroundImage=i,Et(e,t,n))},Kn=(e,t,n)=>{const o=C(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(i=>`image-set(${i})`);e.style.backgroundImage=a.join(),Et(e,t,n)},zt={IMG:qn,IFRAME:Un,VIDEO:Dn,OBJECT:Fn},Zn=(e,t)=>{const n=zt[e.tagName];n&&n(e,t)},Jn=(e,t,n)=>{const o=zt[e.tagName];o&&(o(e,t),$t(e,t,n))},Xn=["IMG","IFRAME","VIDEO","OBJECT"],Qn=e=>Xn.indexOf(e.tagName)>-1,wt=(e,t)=>{!t||Yn(t)||jn(t)||M(e.callback_finish,t)},Ke=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},eo=(e,t,n)=>{e.removeEventListener(t,n)},Ye=e=>!!e.llEvLisnrs,to=(e,t,n)=>{Ye(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";Ke(e,o,t),Ke(e,"error",n)},Le=e=>{if(!Ye(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];eo(e,n,o)}delete e.llEvLisnrs},Ct=(e,t,n)=>{Nn(e),Re(n,-1),Pn(n),I(e,t.class_loading),t.unobserve_completed&&pe(e,n)},no=(e,t,n,o)=>{const a=Me(t);Ct(t,n,o),G(t,n.class_loaded),j(t,lt),M(n.callback_loaded,t,o),a||wt(n,o)},oo=(e,t,n,o)=>{const a=Me(t);Ct(t,n,o),G(t,n.class_error),j(t,Te),M(n.callback_error,t,o),n.restore_on_error&&Y(t,X),a||wt(n,o)},ke=(e,t,n)=>{const o=ft(e)||e;Ye(o)||to(o,a=>{no(0,e,t,n),Le(o)},a=>{oo(0,e,t,n),Le(o)})},Ae=(e,t,n)=>{Qn(e)?((o,a,i)=>{ke(o,a,i),Jn(o,a,i)})(e,t,n):((o,a,i)=>{Tn(o),ke(o,a,i),Bn(o),Gn(o,a,i),Wn(o,a,i),Kn(o,a,i)})(e,t,n)},ao=(e,t,n)=>{e.setAttribute("loading","lazy"),ke(e,t,n),Zn(e,t),j(e,dt)},Ze=e=>{e.removeAttribute(H),e.removeAttribute(Se),e.removeAttribute(He)},ro=e=>{Pe(e,t=>{Ze(t)}),Ze(e)},Lt=e=>{Pe(e,t=>{Y(t,X)}),Y(e,X)},io=e=>{vt(e,t=>{Y(t,ge)}),Y(e,ht),e.load()},so=e=>{Y(e,ge)},lo=e=>{Y(e,bt)},co={IMG:Lt,IFRAME:so,VIDEO:io,OBJECT:lo},mo=(e,t)=>{(n=>{const o=co[n.tagName];o?o(n):Vn(n)})(e),((n,o)=>{Ne(n)||Me(n)||(I(n,o.class_entered),I(n,o.class_exited),I(n,o.class_applied),I(n,o.class_loading),I(n,o.class_loaded),I(n,o.class_error))})(e,t),fe(e),yt(e)},uo=(e,t,n,o)=>{n.cancel_on_exit&&In(e)&&e.tagName==="IMG"&&(Le(e),ro(e),Lt(e),I(e,n.class_loading),Re(o,-1),fe(e),M(n.callback_cancel,e,t,o))},fo=(e,t,n,o)=>{const a=On(e);j(e,An),G(e,n.class_entered),I(e,n.class_exited),Rn(e,n,o),M(n.callback_enter,e,t,o),a||Ae(e,n,o)},po=(e,t,n,o)=>{Ne(e)||(G(e,n.class_exited),uo(e,t,n,o),M(n.callback_exit,e,t,o))},go=["IMG","IFRAME","VIDEO"],kt=e=>e.use_native&&"loading"in HTMLImageElement.prototype,vo=(e,t,n)=>{e.forEach(o=>{go.indexOf(o.tagName)!==-1&&ao(o,t,n)}),pt(n,0)},ho=e=>e.isIntersecting||e.intersectionRatio>0,bo=(e,t)=>{t.forEach(n=>{e.observe(n)})},_o=(e,t)=>{Mn(e),bo(e,t)},yo=(e,t)=>{kt(e)||(t._observer=new IntersectionObserver(n=>{((o,a,i)=>{o.forEach(d=>ho(d)?fo(d.target,d,a,i):po(d.target,d,a,i))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},At=e=>Array.prototype.slice.call(e),me=e=>e.container.querySelectorAll(e.elements_selector),Eo=e=>At(e).filter(Ne),$o=e=>Sn(e),zo=e=>At(e).filter($o),Je=(e,t)=>Eo(e||me(t)),wo=(e,t)=>{zo(me(e)).forEach(n=>{I(n,e.class_error),fe(n)}),t.update()},Co=(e,t)=>{N&&(t._onlineHandler=()=>{wo(e,t)},window.addEventListener("online",t._onlineHandler))},Lo=e=>{N&&window.removeEventListener("online",e._onlineHandler)},Z=function(e,t){const n=rt(e);this._settings=n,this.loadingCount=0,yo(n,this),Co(n,this),this.update(t)};Z.prototype={update:function(e){const t=this._settings,n=Je(e,t);pt(this,n.length),ot?this.loadAll(n):kt(t)?vo(n,t,this):_o(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),Lo(this),me(this._settings).forEach(e=>{yt(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;Je(e,t).forEach(n=>{pe(n,this),Ae(n,t,this)})},restoreAll:function(){const e=this._settings;me(e).forEach(t=>{mo(t,e)})}},Z.load=(e,t)=>{const n=rt(t);Ae(e,n)},Z.resetStatus=e=>{fe(e)},N&&kn(Z,window.lazyLoadOptions);function ko(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new Z({elements_selector:".lazy",...e})}function Ao(){const e=Q();e.value.vanillaLazyload.enable&&ue(()=>{ko(e.value.vanillaLazyload)})}const xo={key:0,text:"center"},Io=["href"],So={m:"y-4",class:"end flex justify-center items-center"},Ho={p:"x-4",font:"bold",class:"whitespace-nowrap"},Oo=ee({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=Ie(),o=Kt();return et(()=>{gn(o.value)}),ue(()=>{se()}),Zt(()=>{se()}),t.frontmatter.aplayer&&hn(),t.frontmatter.codepen&&bn(),on(),Cn(),nn(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&un(),Ao(),(a,i)=>a.$slots.default?(x(),D("article",{key:0,class:Ce(a.frontmatter.markdownClass||"markdown-body")},[y(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:i[0]||(i[0]=(...d)=>h(se)&&h(se)(...d))}),a.frontmatter.url?(x(),D("div",xo,[_("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},P(h(n)("post.view_link")),9,Io)])):k("v-if",!0),a.frontmatter.end!==void 0?y(a.$slots,"end",{key:1},()=>[_("div",So,[i[1]||(i[1]=_("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1)),_("span",Ho,P(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),i[2]||(i[2]=_("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1))])]):k("v-if",!0)],2)):k("v-if",!0)}}),To={key:0,class:"yun-time-warning",op:"80"},No=ee({__name:"YunMdTimeWarning",setup(e){const t=xe(),{t:n,locale:o}=Ie(),a=S(()=>Ue(t.value.updated||t.value.date).locale(o.value)),i=S(()=>a.value.fromNow()),d=S(()=>{const m=Ue().valueOf()-a.value.valueOf();return typeof t.value.time_warning=="number"?m>t.value.time_warning:t.value.time_warning});return(m,g)=>d.value?(x(),D("blockquote",To,P(h(n)("post.time_warning",{ago:i.value})),1)):k("v-if",!0)}}),Mo={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},Ro={font:"black",flex:"","items-center":""},Po={op:"90","mt-1":""},Yo=ee({__name:"YunAiExcerpt",setup(e){const t=xe(),{t:n}=Ie();return(o,a)=>(x(),D("div",Mo,[_("div",Ro,[a[0]||(a[0]=_("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1)),_("div",null,P(h(n)("excerpt.ai")),1)]),_("div",Po,P(h(t).excerpt),1)]))}}),jo={class:"yun-main lt-md:w-full",flex:"~ center"},Bo={class:"mt-8 mb-4"},Vo={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Jo=ee({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=Vt(),o=Q(),{styles:a,icon:i,color:d}=en(t.frontmatter.type),m=qt(S(()=>t.frontmatter)),g=S(()=>t.frontmatter.aside!==!1),w=tt(),he=Gt();return Jt(()=>{w.hash&&setTimeout(()=>{nt(document.body,w.hash,{smooth:!0})},0)}),et(()=>{fn(he)}),(u,je)=>{const oe=Qt,L=Yo,ae=No,be=Oo,_e=Ut,ye=wn,E=Ft,B=Dt;return x(),D("main",jo,[y(u.$slots,"main",{},()=>[_("div",{class:Ce(["content w-full md:w-3xl lg:w-2xl xl:w-2xl 2xl:w-4xl",{"no-aside":!g.value}]),flex:"~ col grow",p:"lt-md:0"},[K(_e,{cover:u.frontmatter.cover,m:"0",class:"relative",style:Xt(h(a))},{default:de(()=>[_("div",Bo,[y(u.$slots,"main-header",{},()=>[K(oe,{title:h(m),icon:u.frontmatter.icon||h(i),color:u.frontmatter.color||h(d),cover:u.frontmatter.cover,"page-title-class":u.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])])]),y(u.$slots,"main-header-after"),_("div",Vo,[y(u.$slots,"main-content-before"),y(u.$slots,"main-content",{},()=>[k(" <Transition appear> "),K(be,{frontmatter:u.frontmatter},{default:de(()=>[u.frontmatter.excerpt_type==="ai"&&u.frontmatter.excerpt?(x(),J(L,{key:0})):k("v-if",!0),K(ae),y(u.$slots,"default"),y(u.$slots,"main-content-md")]),_:3},8,["frontmatter"]),k(" </Transition> ")]),y(u.$slots,"main-content-after")])]),_:3},8,["cover","style"]),y(u.$slots,"main-nav-before"),y(u.$slots,"main-nav",{},()=>[u.frontmatter.nav!==!1?(x(),J(ye,{key:0})):k("v-if",!0)]),y(u.$slots,"main-nav-after"),h(o).comment.enable&&u.frontmatter.comment!==!1?y(u.$slots,"comment",{key:0},()=>[K(E,{class:Ce(u.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):k("v-if",!0),h(n).size.isLg?k("v-if",!0):(x(),J(B,{key:1,class:"mt-4"})),y(u.$slots,"main-footer-before"),y(u.$slots,"main-footer-after")],2)])])}}});export{Jo as _};
