const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.CBRQ3kc4.js","assets/YunPostList.vue_vue_type_script_setup_true_lang.D7tZKaBm.js","assets/app.B2sCubYz.js","assets/framework.DntyxCiH.js","assets/chunks/dayjs.Byk5cVHE.js","assets/chunks/vue-i18n.DyM89frq.js","assets/chunks/pinia.NfdmkE6C.js","assets/chunks/@vueuse/motion.D6rQsSfL.js","assets/chunks/nprogress.Cino7761.js","assets/app.BTabm_G2.css","assets/YunPostMeta.vue_vue_type_style_index_0_lang.OgVAE5Bf.js","assets/index.DJAQblKH.js","assets/animation.BmKSPrMr.js","assets/YunPostMeta.DCrVMfuT.css","assets/post.BhLkPLr0.js","assets/YunPostList.BfWGcc9d.css","assets/_...path_.Bk0Q5ba7.js","assets/404.CaQ5V4fs.js","assets/ValaxyMain.vue_vue_type_style_index_0_lang.DKdizJES.js","assets/YunComment.vue_vue_type_style_index_0_lang.CjzeLMVo.js","assets/index.C5okkQwF.js","assets/YunComment.C5NdvNaW.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang.CgGBEkNu.js","assets/ValaxyMain.BHXg_53O.css","assets/index.D3ulMruT.js","assets/site.DP3CTkHb.js","assets/index.6L3LPu_n.js","assets/index.CGOsuw8Y.js","assets/index.S2ySqKNA.js","assets/index.DfXt1eUW.css","assets/_page_.C0p8rxCY.js","assets/index.BYHsPgqH.js","assets/kernel_入门.TtntyBkw.js","assets/kernel_pwn中uffd机制的利用.BmtC9NhG.js","assets/index.DMhQbtYr.js"])))=>i.map(i=>d[i]);
import{k as U,s as oe,f as rt,u as se,z as St,r as bt,c as $,i as ot,A as Ee,e as Lt,w as Ot,p as kt,l as Tt,_ as N}from"../framework.DntyxCiH.js";var Se=(e,t,n)=>typeof e=="function"?e(t,n):e;/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const W=typeof document<"u";function st(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ct(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&st(e.default)}const b=Object.assign;function Re(e,t){const n={};for(const r in t){const o=t[r];n[r]=V(o)?o.map(e):e(o)}return n}const ae=()=>{},V=Array.isArray,at=/#/g,xt=/&/g,It=/\//g,Dt=/=/g,Nt=/\?/g,it=/\+/g,Vt=/%5B/g,Mt=/%5D/g,ct=/%5E/g,jt=/%60/g,lt=/%7B/g,$t=/%7C/g,ut=/%7D/g,Kt=/%20/g;function ke(e){return encodeURI(""+e).replace($t,"|").replace(Vt,"[").replace(Mt,"]")}function Bt(e){return ke(e).replace(lt,"{").replace(ut,"}").replace(ct,"^")}function be(e){return ke(e).replace(it,"%2B").replace(Kt,"+").replace(at,"%23").replace(xt,"%26").replace(jt,"`").replace(lt,"{").replace(ut,"}").replace(ct,"^")}function Gt(e){return be(e).replace(Dt,"%3D")}function Ht(e){return ke(e).replace(at,"%23").replace(Nt,"%3F")}function zt(e){return e==null?"":Ht(e).replace(It,"%2F")}function ie(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const qt=/\/$/,Ut=e=>e.replace(qt,"");function we(e,t,n="/"){let r,o={},f="",h="";const p=t.indexOf("#");let s=t.indexOf("?");return p<s&&p>=0&&(s=-1),s>-1&&(r=t.slice(0,s),f=t.slice(s+1,p>-1?p:t.length),o=e(f)),p>-1&&(r=r||t.slice(0,p),h=t.slice(p,t.length)),r=Ft(r??t,n),{fullPath:r+(f&&"?")+f+h,path:r,query:o,hash:ie(h)}}function Zt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Me(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Wt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Q(t.matched[r],n.matched[o])&&ft(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Q(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ft(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Yt(e[n],t[n]))return!1;return!0}function Yt(e,t){return V(e)?je(e,t):V(t)?je(t,e):e===t}function je(e,t){return V(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let f=n.length-1,h,p;for(h=0;h<r.length;h++)if(p=r[h],p!==".")if(p==="..")f>1&&f--;else break;return n.slice(0,f).join("/")+"/"+r.slice(h).join("/")}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var q;(function(e){e.back="back",e.forward="forward",e.unknown=""})(q||(q={}));const Pe="";function dt(e){if(!e)if(W){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ut(e)}const Qt=/^[^#]+#/;function ht(e,t){return e.replace(Qt,"#")+t}function Xt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const de=()=>({left:window.scrollX,top:window.scrollY});function Jt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Xt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $e(e,t){return(history.state?history.state.position-t:-1)+e}const Le=new Map;function en(e,t){Le.set(e,t)}function tn(e){const t=Le.get(e);return Le.delete(e),t}let nn=()=>location.protocol+"//"+location.host;function pt(e,t){const{pathname:n,search:r,hash:o}=t,f=e.indexOf("#");if(f>-1){let p=o.includes(e.slice(f))?e.slice(f).length:1,s=o.slice(p);return s[0]!=="/"&&(s="/"+s),Me(s,"")}return Me(n,e)+r+o}function rn(e,t,n,r){let o=[],f=[],h=null;const p=({state:c})=>{const u=pt(e,location),m=n.value,y=t.value;let w=0;if(c){if(n.value=u,t.value=c,h&&h===m){h=null;return}w=y?c.position-y.position:0}else r(u);o.forEach(A=>{A(n.value,m,{delta:w,type:X.pop,direction:w?w>0?q.forward:q.back:q.unknown})})};function s(){h=n.value}function l(c){o.push(c);const u=()=>{const m=o.indexOf(c);m>-1&&o.splice(m,1)};return f.push(u),u}function d(){const{history:c}=window;c.state&&c.replaceState(b({},c.state,{scroll:de()}),"")}function a(){for(const c of f)c();f=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:s,listen:l,destroy:a}}function Ke(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?de():null}}function on(e){const{history:t,location:n}=window,r={value:pt(e,n)},o={value:t.state};o.value||f(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function f(s,l,d){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+s:nn()+e+s;try{t[d?"replaceState":"pushState"](l,"",c),o.value=l}catch(u){console.error(u),n[d?"replace":"assign"](c)}}function h(s,l){const d=b({},t.state,Ke(o.value.back,s,o.value.forward,!0),l,{position:o.value.position});f(s,d,!0),r.value=s}function p(s,l){const d=b({},o.value,t.state,{forward:s,scroll:de()});f(d.current,d,!0);const a=b({},Ke(r.value,s,null),{position:d.position+1},l);f(s,a,!1),r.value=s}return{location:r,state:o,push:p,replace:h}}function $n(e){e=dt(e);const t=on(e),n=rn(e,t.state,t.location,t.replace);function r(f,h=!0){h||n.pauseListeners(),history.go(f)}const o=b({location:"",base:e,go:r,createHref:ht.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Kn(e=""){let t=[],n=[Pe],r=0;e=dt(e);function o(p){r++,r!==n.length&&n.splice(r),n.push(p)}function f(p,s,{direction:l,delta:d}){const a={direction:l,delta:d,type:X.pop};for(const c of t)c(p,s,a)}const h={location:Pe,state:{},base:e,createHref:ht.bind(null,e),replace(p){n.splice(r--,1),o(p)},push(p,s){o(p)},listen(p){return t.push(p),()=>{const s=t.indexOf(p);s>-1&&t.splice(s,1)}},destroy(){t=[],n=[Pe],r=0},go(p,s=!0){const l=this.location,d=p<0?q.back:q.forward;r=Math.max(0,Math.min(r+p,n.length-1)),s&&f(this.location,l,{direction:d,delta:p})}};return Object.defineProperty(h,"location",{enumerable:!0,get:()=>n[r]}),h}function sn(e){return typeof e=="string"||e&&typeof e=="object"}function mt(e){return typeof e=="string"||typeof e=="symbol"}const gt=Symbol("");var Be;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Be||(Be={}));function J(e,t){return b(new Error,{type:e,[gt]:!0},t)}function j(e,t){return e instanceof Error&&gt in e&&(t==null||!!(e.type&t))}const Ge="[^/]+?",an={sensitive:!1,strict:!1,start:!0,end:!0},cn=/[.+*?^${}()[\]/\\]/g;function ln(e,t){const n=b({},an,t),r=[];let o=n.start?"^":"";const f=[];for(const l of e){const d=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let a=0;a<l.length;a++){const c=l[a];let u=40+(n.sensitive?.25:0);if(c.type===0)a||(o+="/"),o+=c.value.replace(cn,"\\$&"),u+=40;else if(c.type===1){const{value:m,repeatable:y,optional:w,regexp:A}=c;f.push({name:m,repeatable:y,optional:w});const _=A||Ge;if(_!==Ge){u+=10;try{new RegExp(`(${_})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${_}): `+O.message)}}let R=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;a||(R=w&&l.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),o+=R,u+=20,w&&(u+=-8),y&&(u+=-20),_===".*"&&(u+=-50)}d.push(u)}r.push(d)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function p(l){const d=l.match(h),a={};if(!d)return null;for(let c=1;c<d.length;c++){const u=d[c]||"",m=f[c-1];a[m.name]=u&&m.repeatable?u.split("/"):u}return a}function s(l){let d="",a=!1;for(const c of e){(!a||!d.endsWith("/"))&&(d+="/"),a=!1;for(const u of c)if(u.type===0)d+=u.value;else if(u.type===1){const{value:m,repeatable:y,optional:w}=u,A=m in l?l[m]:"";if(V(A)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const _=V(A)?A.join("/"):A;if(!_)if(w)c.length<2&&(d.endsWith("/")?d=d.slice(0,-1):a=!0);else throw new Error(`Missing required param "${m}"`);d+=_}}return d||"/"}return{re:h,score:r,keys:f,parse:p,stringify:s}}function un(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function vt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const f=un(r[n],o[n]);if(f)return f;n++}if(Math.abs(o.length-r.length)===1){if(He(r))return 1;if(He(o))return-1}return o.length-r.length}function He(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const fn={type:0,value:""},dn=/[a-zA-Z0-9_]/;function hn(e){if(!e)return[[]];if(e==="/")return[[fn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(u){throw new Error(`ERR (${n})/"${l}": ${u}`)}let n=0,r=n;const o=[];let f;function h(){f&&o.push(f),f=[]}let p=0,s,l="",d="";function a(){l&&(n===0?f.push({type:0,value:l}):n===1||n===2||n===3?(f.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),f.push({type:1,value:l,regexp:d,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),l="")}function c(){l+=s}for(;p<e.length;){if(s=e[p++],s==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:s==="/"?(l&&a(),h()):s===":"?(a(),n=1):c();break;case 4:c(),n=r;break;case 1:s==="("?n=2:dn.test(s)?c():(a(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--);break;case 2:s===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+s:n=3:d+=s;break;case 3:a(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),a(),h(),o}function pn(e,t,n){const r=ln(hn(e.path),n),o=b(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function mn(e,t){const n=[],r=new Map;t=Ze({strict:!1,end:!0,sensitive:!1},t);function o(a){return r.get(a)}function f(a,c,u){const m=!u,y=qe(a);y.aliasOf=u&&u.record;const w=Ze(t,a),A=[y];if("alias"in a){const O=typeof a.alias=="string"?[a.alias]:a.alias;for(const C of O)A.push(qe(b({},y,{components:u?u.record.components:y.components,path:C,aliasOf:u?u.record:y})))}let _,R;for(const O of A){const{path:C}=O;if(c&&C[0]!=="/"){const I=c.record.path,x=I[I.length-1]==="/"?"":"/";O.path=c.record.path+(C&&x+C)}if(_=pn(O,c,w),u?u.alias.push(_):(R=R||_,R!==_&&R.alias.push(_),m&&a.name&&!Ue(_)&&h(a.name)),yt(_)&&s(_),y.children){const I=y.children;for(let x=0;x<I.length;x++)f(I[x],_,u&&u.children[x])}u=u||_}return R?()=>{h(R)}:ae}function h(a){if(mt(a)){const c=r.get(a);c&&(r.delete(a),n.splice(n.indexOf(c),1),c.children.forEach(h),c.alias.forEach(h))}else{const c=n.indexOf(a);c>-1&&(n.splice(c,1),a.record.name&&r.delete(a.record.name),a.children.forEach(h),a.alias.forEach(h))}}function p(){return n}function s(a){const c=yn(a,n);n.splice(c,0,a),a.record.name&&!Ue(a)&&r.set(a.record.name,a)}function l(a,c){let u,m={},y,w;if("name"in a&&a.name){if(u=r.get(a.name),!u)throw J(1,{location:a});w=u.record.name,m=b(ze(c.params,u.keys.filter(R=>!R.optional).concat(u.parent?u.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),a.params&&ze(a.params,u.keys.map(R=>R.name))),y=u.stringify(m)}else if(a.path!=null)y=a.path,u=n.find(R=>R.re.test(y)),u&&(m=u.parse(y),w=u.record.name);else{if(u=c.name?r.get(c.name):n.find(R=>R.re.test(c.path)),!u)throw J(1,{location:a,currentLocation:c});w=u.record.name,m=b({},c.params,a.params),y=u.stringify(m)}const A=[];let _=u;for(;_;)A.unshift(_.record),_=_.parent;return{name:w,path:y,params:m,matched:A,meta:vn(A)}}e.forEach(a=>f(a));function d(){n.length=0,r.clear()}return{addRoute:f,resolve:l,removeRoute:h,clearRoutes:d,getRoutes:p,getRecordMatcher:o}}function ze(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function qe(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function gn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ue(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vn(e){return e.reduce((t,n)=>b(t,n.meta),{})}function Ze(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function yn(e,t){let n=0,r=t.length;for(;n!==r;){const f=n+r>>1;vt(e,t[f])<0?r=f:n=f+1}const o=_n(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function _n(e){let t=e;for(;t=t.parent;)if(yt(t)&&vt(e,t)===0)return t}function yt({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function En(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const f=r[o].replace(it," "),h=f.indexOf("="),p=ie(h<0?f:f.slice(0,h)),s=h<0?null:ie(f.slice(h+1));if(p in t){let l=t[p];V(l)||(l=t[p]=[l]),l.push(s)}else t[p]=s}return t}function We(e){let t="";for(let n in e){const r=e[n];if(n=Gt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(V(r)?r.map(f=>f&&be(f)):[r&&be(r)]).forEach(f=>{f!==void 0&&(t+=(t.length?"&":"")+n,f!=null&&(t+="="+f))})}return t}function Rn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=V(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const wn=Symbol(""),Ye=Symbol(""),he=Symbol(""),Te=Symbol(""),Oe=Symbol("");function ne(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function H(e,t,n,r,o,f=h=>h()){const h=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((p,s)=>{const l=c=>{c===!1?s(J(4,{from:n,to:t})):c instanceof Error?s(c):sn(c)?s(J(2,{from:t,to:c})):(h&&r.enterCallbacks[o]===h&&typeof c=="function"&&h.push(c),p())},d=f(()=>e.call(r&&r.instances[o],t,n,l));let a=Promise.resolve(d);e.length<3&&(a=a.then(l)),a.catch(c=>s(c))})}function Ae(e,t,n,r,o=f=>f()){const f=[];for(const h of e)for(const p in h.components){let s=h.components[p];if(!(t!=="beforeRouteEnter"&&!h.instances[p]))if(st(s)){const d=(s.__vccOpts||s)[t];d&&f.push(H(d,n,r,h,p,o))}else{let l=s();f.push(()=>l.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${p}" at "${h.path}"`);const a=Ct(d)?d.default:d;h.mods[p]=d,h.components[p]=a;const u=(a.__vccOpts||a)[t];return u&&H(u,n,r,h,p,o)()}))}}return f}function Fe(e){const t=U(he),n=U(Te),r=$(()=>{const s=se(e.to);return t.resolve(s)}),o=$(()=>{const{matched:s}=r.value,{length:l}=s,d=s[l-1],a=n.matched;if(!d||!a.length)return-1;const c=a.findIndex(Q.bind(null,d));if(c>-1)return c;const u=Qe(s[l-2]);return l>1&&Qe(d)===u&&a[a.length-1].path!==u?a.findIndex(Q.bind(null,s[l-2])):c}),f=$(()=>o.value>-1&&Ln(n.params,r.value.params)),h=$(()=>o.value>-1&&o.value===n.matched.length-1&&ft(n.params,r.value.params));function p(s={}){if(bn(s)){const l=t[se(e.replace)?"replace":"push"](se(e.to)).catch(ae);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:$(()=>r.value.href),isActive:f,isExactActive:h,navigate:p}}function Pn(e){return e.length===1?e[0]:e}const An=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fe,setup(e,{slots:t}){const n=bt(Fe(e)),{options:r}=U(he),o=$(()=>({[Xe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const f=t.default&&Pn(t.default(n));return e.custom?f:ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},f)}}}),Sn=An;function bn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ln(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!V(o)||o.length!==r.length||r.some((f,h)=>f!==o[h]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>e??t??n,On=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=U(Oe),o=$(()=>e.route||r.value),f=U(Ye,0),h=$(()=>{let l=se(f);const{matched:d}=o.value;let a;for(;(a=d[l])&&!a.components;)l++;return l}),p=$(()=>o.value.matched[h.value]);Ee(Ye,$(()=>h.value+1)),Ee(wn,p),Ee(Oe,o);const s=Lt();return Ot(()=>[s.value,p.value,e.name],([l,d,a],[c,u,m])=>{d&&(d.instances[a]=l,u&&u!==d&&l&&l===c&&(d.leaveGuards.size||(d.leaveGuards=u.leaveGuards),d.updateGuards.size||(d.updateGuards=u.updateGuards))),l&&d&&(!u||!Q(d,u)||!c)&&(d.enterCallbacks[a]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=o.value,d=e.name,a=p.value,c=a&&a.components[d];if(!c)return Je(n.default,{Component:c,route:l});const u=a.props[d],m=u?u===!0?l.params:typeof u=="function"?u(l):u:null,w=ot(c,b({},m,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(a.instances[d]=null)},ref:s}));return Je(n.default,{Component:w,route:l})||w}}});function Je(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const kn=On;function Bn(e){const t=mn(e.routes,e),n=e.parseQuery||En,r=e.stringifyQuery||We,o=e.history,f=ne(),h=ne(),p=ne(),s=oe(B);let l=B;W&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Re.bind(null,i=>""+i),a=Re.bind(null,zt),c=Re.bind(null,ie);function u(i,v){let g,E;return mt(i)?(g=t.getRecordMatcher(i),E=v):E=i,t.addRoute(E,g)}function m(i){const v=t.getRecordMatcher(i);v&&t.removeRoute(v)}function y(){return t.getRoutes().map(i=>i.record)}function w(i){return!!t.getRecordMatcher(i)}function A(i,v){if(v=b({},v||s.value),typeof i=="string"){const P=we(n,i,v.path),T=t.resolve({path:P.path},v),te=o.createHref(P.fullPath);return b(P,T,{params:c(T.params),hash:ie(P.hash),redirectedFrom:void 0,href:te})}let g;if(i.path!=null)g=b({},i,{path:we(n,i.path,v.path).path});else{const P=b({},i.params);for(const T in P)P[T]==null&&delete P[T];g=b({},i,{params:a(P)}),v.params=a(v.params)}const E=t.resolve(g,v),L=i.hash||"";E.params=d(c(E.params));const k=Zt(r,b({},i,{hash:Bt(L),path:E.path})),S=o.createHref(k);return b({fullPath:k,hash:L,query:r===We?Rn(i.query):i.query||{}},E,{redirectedFrom:void 0,href:S})}function _(i){return typeof i=="string"?we(n,i,s.value.path):b({},i)}function R(i,v){if(l!==i)return J(8,{from:v,to:i})}function O(i){return x(i)}function C(i){return O(b(_(i),{replace:!0}))}function I(i){const v=i.matched[i.matched.length-1];if(v&&v.redirect){const{redirect:g}=v;let E=typeof g=="function"?g(i):g;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=_(E):{path:E},E.params={}),b({query:i.query,hash:i.hash,params:E.path!=null?{}:i.params},E)}}function x(i,v){const g=l=A(i),E=s.value,L=i.state,k=i.force,S=i.replace===!0,P=I(g);if(P)return x(b(_(P),{state:typeof P=="object"?b({},L,P.state):L,force:k,replace:S}),v||g);const T=g;T.redirectedFrom=v;let te;return!k&&Wt(r,E,g)&&(te=J(16,{to:T,from:E}),Ne(E,E,!0,!1)),(te?Promise.resolve(te):Ce(T,E)).catch(D=>j(D)?j(D,2)?D:ve(D):ge(D,T,E)).then(D=>{if(D){if(j(D,2))return x(b({replace:S},_(D.to),{state:typeof D.to=="object"?b({},L,D.to.state):L,force:k}),v||T)}else D=Ie(T,E,!0,S,L);return xe(T,E,D),D})}function K(i,v){const g=R(i,v);return g?Promise.reject(g):Promise.resolve()}function pe(i){const v=le.values().next().value;return v&&typeof v.runWithContext=="function"?v.runWithContext(i):i()}function Ce(i,v){let g;const[E,L,k]=Tn(i,v);g=Ae(E.reverse(),"beforeRouteLeave",i,v);for(const P of E)P.leaveGuards.forEach(T=>{g.push(H(T,i,v))});const S=K.bind(null,i,v);return g.push(S),Z(g).then(()=>{g=[];for(const P of f.list())g.push(H(P,i,v));return g.push(S),Z(g)}).then(()=>{g=Ae(L,"beforeRouteUpdate",i,v);for(const P of L)P.updateGuards.forEach(T=>{g.push(H(T,i,v))});return g.push(S),Z(g)}).then(()=>{g=[];for(const P of k)if(P.beforeEnter)if(V(P.beforeEnter))for(const T of P.beforeEnter)g.push(H(T,i,v));else g.push(H(P.beforeEnter,i,v));return g.push(S),Z(g)}).then(()=>(i.matched.forEach(P=>P.enterCallbacks={}),g=Ae(k,"beforeRouteEnter",i,v,pe),g.push(S),Z(g))).then(()=>{g=[];for(const P of h.list())g.push(H(P,i,v));return g.push(S),Z(g)}).catch(P=>j(P,8)?P:Promise.reject(P))}function xe(i,v,g){p.list().forEach(E=>pe(()=>E(i,v,g)))}function Ie(i,v,g,E,L){const k=R(i,v);if(k)return k;const S=v===B,P=W?history.state:{};g&&(E||S?o.replace(i.fullPath,b({scroll:S&&P&&P.scroll},L)):o.push(i.fullPath,L)),s.value=i,Ne(i,v,g,S),ve()}let ee;function Pt(){ee||(ee=o.listen((i,v,g)=>{if(!Ve.listening)return;const E=A(i),L=I(E);if(L){x(b(L,{replace:!0,force:!0}),E).catch(ae);return}l=E;const k=s.value;W&&en($e(k.fullPath,g.delta),de()),Ce(E,k).catch(S=>j(S,12)?S:j(S,2)?(x(b(_(S.to),{force:!0}),E).then(P=>{j(P,20)&&!g.delta&&g.type===X.pop&&o.go(-1,!1)}).catch(ae),Promise.reject()):(g.delta&&o.go(-g.delta,!1),ge(S,E,k))).then(S=>{S=S||Ie(E,k,!1),S&&(g.delta&&!j(S,8)?o.go(-g.delta,!1):g.type===X.pop&&j(S,20)&&o.go(-1,!1)),xe(E,k,S)}).catch(ae)}))}let me=ne(),De=ne(),ce;function ge(i,v,g){ve(i);const E=De.list();return E.length?E.forEach(L=>L(i,v,g)):console.error(i),Promise.reject(i)}function At(){return ce&&s.value!==B?Promise.resolve():new Promise((i,v)=>{me.add([i,v])})}function ve(i){return ce||(ce=!i,Pt(),me.list().forEach(([v,g])=>i?g(i):v()),me.reset()),i}function Ne(i,v,g,E){const{scrollBehavior:L}=e;if(!W||!L)return Promise.resolve();const k=!g&&tn($e(i.fullPath,0))||(E||!g)&&history.state&&history.state.scroll||null;return kt().then(()=>L(i,v,k)).then(S=>S&&Jt(S)).catch(S=>ge(S,i,v))}const ye=i=>o.go(i);let _e;const le=new Set,Ve={currentRoute:s,listening:!0,addRoute:u,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:w,getRoutes:y,resolve:A,options:e,push:O,replace:C,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:f.add,beforeResolve:h.add,afterEach:p.add,onError:De.add,isReady:At,install(i){const v=this;i.component("RouterLink",Sn),i.component("RouterView",kn),i.config.globalProperties.$router=v,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>se(s)}),W&&!_e&&s.value===B&&(_e=!0,O(o.location).catch(L=>{}));const g={};for(const L in B)Object.defineProperty(g,L,{get:()=>s.value[L],enumerable:!0});i.provide(he,v),i.provide(Te,St(g)),i.provide(Oe,s);const E=i.unmount;le.add(i),i.unmount=function(){le.delete(i),le.size<1&&(l=B,ee&&ee(),ee=null,s.value=B,_e=!1,ce=!1),E()}}};function Z(i){return i.reduce((v,g)=>v.then(()=>pe(g)),Promise.resolve())}return Ve}function Tn(e,t){const n=[],r=[],o=[],f=Math.max(t.matched.length,e.matched.length);for(let h=0;h<f;h++){const p=t.matched[h];p&&(e.matched.find(l=>Q(l,p))?r.push(p):n.push(p));const s=e.matched[h];s&&(t.matched.find(l=>Q(l,s))||o.push(s))}return[n,r,o]}function Cn(){return U(he)}function xn(e){return U(Te)}var M=Symbol("loaders"),F=Symbol("loaderEntries"),_t=Symbol(),G=Symbol(),z=Symbol(),fe=Symbol(),re=Symbol(),ue=Symbol(),Et=Symbol();function et(e){return e&&e[_t]}var Rt;function tt(){return Rt||[]}function Y(e){Rt=e&&e.length?e:null}var In=Object.assign,Dn=Symbol();function Nn({router:e,app:t,effect:n,isSSR:r,errors:o=[],selectNavigationResult:f=h=>h[0].value}){if(e[F]!=null)return()=>{};e[F]=new WeakMap,e[fe]=t,e[Et]=!!r;const h=n.run(()=>oe(!1));t.provide(Dn,h);const p=e.beforeEach(a=>{var u;e[G]&&((u=e[G].meta[re])==null||u.abort()),e[G]=a,a.meta[M]=new Set,a.meta[re]=new AbortController,a.meta[ue]=[];const c=[];for(const m of a.matched)if(!m.meta[M]){m.meta[M]=new Set(m.meta.loaders||[]);for(const y in m.components){const w=m.components[y],A=(Vn(w)?w():Promise.resolve(w)).then(_=>{if(typeof _!="function"){for(const R in _){const O=_[R];et(O)&&m.meta[M].add(O)}if(Array.isArray(_.__loaders))for(const R of _.__loaders)et(R)&&m.meta[M].add(R)}});c.push(A)}}return Promise.all(c).then(()=>{for(const m of a.matched)for(const y of m.meta[M])a.meta[M].add(y)})}),s=e.beforeResolve((a,c)=>{const u=Array.from(a.meta[M]);return Y([]),h.value=!0,Promise.all(u.map(m=>{const{server:y,lazy:w,errors:A}=m._.options;if(!y&&r)return;const _=n.run(()=>t.runWithContext(()=>m._.load(a,e,c)));return!r&&Se(w,a,c)?void 0:_.catch(R=>{if(!A)throw R;if(A===!0){if(Array.isArray(o)?o.some(O=>R instanceof O):o(R))return}else if(Array.isArray(A)?A.some(O=>R instanceof O):A(R))return;throw R})})).then(()=>{if(a.meta[ue].length)return f(a.meta[ue])}).catch(m=>m instanceof wt?m.value:Promise.reject(m)).finally(()=>{Y([]),h.value=!1})}),l=e.afterEach((a,c,u)=>{var m;if(u){if((m=a.meta[re])==null||m.abort(u),j(u,16))for(const y of a.meta[M])y._.getEntry(e).resetPending()}else for(const y of a.meta[M]){const{commit:w,lazy:A}=y._.options;if(w==="after-load"){const _=y._.getEntry(e);_&&(!Se(A,a,c)||!_.isLoading.value)&&_.commit(a)}}e[G]===a&&(e[G]=null)}),d=e.onError((a,c)=>{var u;(u=c.meta[re])==null||u.abort(a),e[G]===c&&(e[G]=null)});return()=>{delete e[F],delete e[fe],p(),s(),l(),d()}}function Vn(e){return typeof e=="function"&&!("displayName"in e)&&!("props"in e)&&!("emits"in e)&&!("__vccOpts"in e)}var wt=class{constructor(e){this.value=e}};function Gn(e,t){const n=Tt(!0),r=Nn(In({app:e,effect:n},t)),{unmount:o}=e;e.unmount=()=>{n.stop(),r(),o.call(e)}}const Hn=[{path:"/",name:"/",component:()=>N(()=>import("../index.CBRQ3kc4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{layout:"home",frontmatter:{time_warning:15552e6}}},{path:"/:path(.*)",name:"/[...path]",component:()=>N(()=>import("../_...path_.Bk0Q5ba7.js"),__vite__mapDeps([16,3])),meta:{layout:404,frontmatter:{time_warning:15552e6}}},{path:"/404",name:"/404",component:()=>N(()=>import("../404.CaQ5V4fs.js"),__vite__mapDeps([17,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:404,date:"2025-03-18T04:46:20.524Z",updated:"2025-03-18T04:46:23.773Z"},excerpt:"",layout:404}},{path:"/about",children:[{path:"",name:"/about/",component:()=>N(()=>import("../index.D3ulMruT.js"),__vite__mapDeps([24,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"关于我",date:"2025-03-20T00:32:21.094Z",updated:"2025-03-20T00:32:21.094Z"},excerpt:""}},{path:"site",name:"/about/site",component:()=>N(()=>import("../site.DP3CTkHb.js"),__vite__mapDeps([25,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"关于站点",date:"2025-03-20T00:31:31.587Z",updated:"2025-03-20T00:31:31.587Z"},excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/archives",children:[{path:"",name:"/archives/",component:()=>N(()=>import("../index.6L3LPu_n.js"),__vite__mapDeps([26,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"archives",nav:!1,comment:!1,date:"2025-03-18T04:46:20.528Z",updated:"2025-03-18T15:54:49.279Z"},excerpt:"",layout:"archives"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/categories",children:[{path:"",name:"/categories/",component:()=>N(()=>import("../index.CGOsuw8Y.js"),__vite__mapDeps([27,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"categories",nav:!1,toc:!1,icon:"i-ri-folder-2-line",title:"学习日志",comment:!1,date:"2025-03-20T00:24:34.308Z",updated:"2025-03-20T00:24:34.308Z"},excerpt:"",layout:"categories"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/links",children:[{path:"",name:"/links/",component:()=>N(()=>import("../index.S2ySqKNA.js"),__vite__mapDeps([28,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23,11,12,29])),meta:{frontmatter:{time_warning:15552e6,title:"我的小伙伴们",keywords:"链接",description:"iamorange的小伙伴们",random:!0,date:"2025-03-20T00:38:32.121Z",updated:"2025-03-20T00:38:32.121Z"},excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/page",children:[{path:":page",name:"/page/[page]",component:()=>N(()=>import("../_page_.C0p8rxCY.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6}}}],meta:{frontmatter:{time_warning:15552e6},layout:"home"}},{path:"/posts",children:[{path:"",name:"/posts/",component:()=>N(()=>import("../index.BYHsPgqH.js"),__vite__mapDeps([31,2,3,4,5,6,7,8,9,1,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"kernel_入门",name:"/posts/kernel_入门",component:()=>N(()=>import("../kernel_入门.TtntyBkw.js"),__vite__mapDeps([32,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"kernel_入门",date:"2025-03-19",updated:"2025-03-19",categories:"复现",tags:["复现"],top:1},layout:"post",excerpt:""}},{path:"kernel_pwn中uffd机制的利用",name:"/posts/kernel_pwn中uffd机制的利用",component:()=>N(()=>import("../kernel_pwn中uffd机制的利用.BmtC9NhG.js"),__vite__mapDeps([33,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"kernel_pwn中uffd机制的利用",date:"2025-03-19",updated:"2025-03-19",categories:"笔记",tags:["笔记"],top:1},layout:"post",excerpt:""}}],meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"/tags",children:[{path:"",name:"/tags/",component:()=>N(()=>import("../index.DMhQbtYr.js"),__vite__mapDeps([34,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"tags",icon:"i-ri-price-tag-3-line",nav:!1,date:"2025-03-18T04:46:20.531Z",updated:"2025-03-18T04:46:23.777Z"},excerpt:"",layout:"tags"}}],meta:{frontmatter:{time_warning:15552e6}}}],zn={};function qn(e,t,n){const r=typeof e=="function"?e:t;n=typeof t=="object"?t:n;const o={...nt,...n,commit:(n==null?void 0:n.commit)||nt.commit};function f(s,l,d,a){var x;const c=l[F],u=l[Et];c.has(r)||c.set(r,{data:oe(),isLoading:oe(!1),error:oe(),to:s,options:o,children:new Set,resetPending(){this.pendingLoad=null,this.pendingTo=null},pendingLoad:null,pendingTo:null,staged:z,stagedError:null,commit:h});const m=c.get(r);if(m.pendingTo===s&&m.pendingLoad)return m.pendingLoad;const{error:y,isLoading:w,data:A}=m,_=l[Mn],R=o.key||"";let O=z;if(_&&R in _&&(O=_[R],delete _[R]),O!==z)return A.value=O,m.pendingLoad=Promise.resolve();m.pendingTo=s,w.value=!0;const C=tt();Y([m,l,s]),m.staged=z,m.stagedError=y.value;const I=Promise.resolve(r(s,{signal:(x=s.meta[re])==null?void 0:x.signal})).then(K=>{m.pendingLoad===I&&(K instanceof wt?s.meta[ue].push(K):(m.staged=K,m.stagedError=null))}).catch(K=>{if(m.pendingLoad===I&&(m.stagedError=K,!Se(o.lazy,s,d)||u))throw K}).finally(()=>{Y(C),m.pendingLoad===I&&(w.value=!1,(o.commit==="immediate"||!l[G])&&m.commit(s))});return Y(C),m.pendingLoad=I,I}function h(s){if(this.pendingTo===s){this.staged!==z&&(this.data.value=this.staged),this.error.value=this.stagedError,this.staged=z,this.stagedError=this.error.value,this.pendingTo=null,this.to=s;for(const l of this.children)l.commit(s)}}const p=()=>{const s=tt(),[l,d,a]=s,c=d||Cn(),u=a||xn(),m=c[F];let y=m.get(r);(!y||l&&y.pendingTo!==u||!y.pendingLoad)&&c[fe].runWithContext(()=>f(u,c,void 0)),y=m.get(r),l&&(l===y&&console.warn(`👶❌ "${o.key}" has itself as parent. This shouldn't be happening. Please report a bug with a reproduction to https://github.com/posva/unplugin-vue-router/`),l.children.add(y));const{data:w,error:A,isLoading:_}=y,R={data:w,error:A,isLoading:_,reload:(C=c.currentRoute.value)=>c[fe].runWithContext(()=>f(C,c)).then(()=>y.commit(C))},O=y.pendingLoad.then(()=>y.staged===z?w.value:y.staged).catch(C=>l?Promise.reject(C):null);return Y(s),Object.assign(O,R)};return p[_t]=!0,p._={load:f,options:o,getEntry(s){return s[F].get(r)}},p}var nt={lazy:!1,server:!0,commit:"after-load"},Mn=Symbol();export{Gn as D,xn as a,$n as b,Bn as c,Kn as d,zn as e,qn as f,Hn as r,Cn as u};
