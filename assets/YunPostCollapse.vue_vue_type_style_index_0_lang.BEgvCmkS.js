import{u as B}from"./chunks/@vueuse/motion.D6rQsSfL.js";import{C as x,D as N}from"./app.BAgrp6BB.js";import"./chunks/dayjs.Byk5cVHE.js";import{f as C,e as u,N as $,Q as a,P as o,Y as y,U as n,S as g,W as d,u as _,y as Y,a4 as b,X as I,w as L,c as P,a3 as R,F as k,a0 as w,O as V}from"./framework.DntyxCiH.js";import{u as M}from"./chunks/vue-i18n.DyM89frq.js";const E={class:"post-meta"},F={key:0,class:"post-time",font:"mono",opacity:"80"},S={class:"post-title w-full","inline-flex":"","items-center":"",font:"serif black"},T=C({__name:"YunPostCollapseItem",props:{i:{},post:{}},setup(m){const p=m,c=u(!1),r=u();return B(r,{initial:{opacity:0,y:20},enter:{opacity:1,y:0,transition:{duration:200,delay:p.i*50,onComplete(){c.value=!0}}}}),(e,l)=>{const v=$("RouterLink");return o(),a("article",{ref_key:"itemRef",ref:r,class:y(["post-item relative",{show:c.value}])},[n("header",{class:y(["post-header cursor-pointer w-full",{show:c.value}]),flex:"~","items-center":"",relative:"",hover:"bg-black/1"},[n("div",E,[e.post.date?(o(),a("time",F,d(_(x)(e.post.date,{template:"MM-DD"})),1)):g("v-if",!0)]),n("h2",S,[Y(v,{to:e.post.path||"",class:"post-title-link"},{default:b(()=>[I(d(e.post.title),1)]),_:1},8,["to"])])],2)],2)}}}),z={class:"post-collapse px-10 lt-sm:px-5 max-w-3xl",relative:""},O={w:"full",text:"center",class:"yun-text-light",p:"2"},Q={class:"post-collapse-action",text:"center"},U={key:0,"i-ri-sort-desc":""},W={key:1,"i-ri-sort-asc":""},X={class:"collection-title","m-0":"",relative:""},q=["id"],Z=C({__name:"YunPostCollapse",props:{posts:{}},setup(m){const p=m,{t:c}=M(),r=u([]),e=u({});L(()=>p.posts,()=>{e.value={},r.value=[],p.posts.forEach(s=>{if(!(s.hide&&s.hide!=="index")&&s.date){const t=Number.parseInt(x(s.date,{template:"YYYY"}));e.value[t]?e.value[t].push(s):(r.value.push(t),e.value[t]=[s])}})},{immediate:!0});const l=u(!0),v=P(()=>{const t=r.value.sort((h,i)=>i-h);return l.value?t:[...t].reverse()});return(s,t)=>{const h=T;return o(),a("div",z,[Y(R,{appear:"","enter-active-class":"animate-fade-in animate-duration-400"},{default:b(()=>[n("div",O,d(_(c)("counter.archives",s.posts.length)),1)]),_:1}),n("div",Q,[n("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:t[0]||(t[0]=i=>l.value=!l.value)},[l.value?(o(),a("div",U)):(o(),a("div",W))])]),(o(!0),a(k,null,w(v.value,i=>(o(),a("div",{key:i,m:"b-6"},[n("div",X,[n("h2",{id:`#archive-year-${i}`,class:"archive-year",text:"4xl",p:"y-2"},d(i),9,q)]),(o(!0),a(k,null,w(_(N)(e.value[i],l.value),(D,f)=>(o(),V(h,{key:f,post:D,i:f},null,8,["post","i"]))),128))]))),128))])}}});export{Z as _};
