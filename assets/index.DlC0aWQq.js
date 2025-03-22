import{_ as y}from"./ValaxyMain.vue_vue_type_style_index_0_lang.BAhapzV_.js";import{u as q}from"./chunks/@vueuse/motion.D6rQsSfL.js";import{o as v}from"./index.0EtFMWVV.js";import{f as h,e as w,Q as u,P as p,$ as j,U as r,W as g,F as $,a0 as x,O as _,u as f,a4 as t,V as o,y as I,A as B}from"./framework.DntyxCiH.js";import{E as L}from"./app.CX3hFjFA.js";import"./chunks/dayjs.Byk5cVHE.js";import{f as R,a as Y,u as z}from"./chunks/vue-router.DXOWUr9z.js";import"./YunComment.vue_vue_type_style_index_0_lang.TE8iuUiC.js";import"./index.C5okkQwF.js";import"./chunks/vue-i18n.DyM89frq.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CgGBEkNu.js";import"./post.C0SZ8MSH.js";import"./animation.BmKSPrMr.js";import"./chunks/pinia.NfdmkE6C.js";import"./chunks/nprogress.Cino7761.js";const C=["href","title"],D={class:"yun-link-left"},E={class:"yun-link-avatar size-16 overflow-hidden flex-center"},S=["src","alt"],V={class:"yun-link-info",m:"l-2"},N={class:"yun-link-blog",font:"serif black"},O={class:"yun-link-desc"},P=h({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(s){const n=s;function l(e){v(e,n.errorImg)}const m=w();return q(m,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:n.i*50}}}),(e,i)=>(p(),u("li",{ref_key:"itemRef",ref:m,class:"yun-link-item inline-flex",style:j({"--primary-color":e.link.color})},[r("a",{class:"yun-link-url",p:"x-4 y-2",href:e.link.url,title:e.link.name,alt:"portrait",rel:"friend",target:"_blank"},[r("div",D,[r("div",E,[r("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:e.link.avatar,alt:e.link.name,onError:l},null,40,S)])]),r("div",V,[r("div",N,g(e.link.blog),1),r("div",O,g(e.link.desc),1)])],8,C)],4))}}),F={class:"yun-links"},M={class:"yun-link-items",flex:"center wrap"},U=h({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(s){const n=s,{data:l}=L(n.links,n.random);return(m,e)=>{const i=P;return p(),u("div",F,[r("ul",M,[(p(!0),u($,null,x(f(l),(c,d)=>(p(),_(i,{key:d,i:d,link:c,"error-img":m.errorImg},null,8,["i","link","error-img"]))),128))])])}}}),A=R("/links",async s=>JSON.parse('{"title":"我的小伙伴们","description":"iamorange的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"iamorange的小伙伴们","links":[{"url":"https://www.bx33661.com/","avatar":"http://q.qlogo.cn/headimg_dl?dst_uin=1811753380&spec=640&img_type=jpg","name":"bx33661","blog":"bx33661","desc":"web master","email":"bx33661@gmail.com","color":"#0078e7"},{"url":"https://unjoke.github.io/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=2801238549&spec=640&img_type=jpg","name":"unjoke","blog":"unjoke","desc":"web master","email":"weiceya@outlook.com","color":"#8058d9"},{"url":"https://orxiain.life","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=1193087005&spec=640&img_type=jpg","name":"orxiain.","blog":"orxiain.","desc":"web master","email":"orxiain@outlook.com","color":"#6058d9"},{"url":"https://natro92.fun/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=2997453446&spec=640&img_type=jpg","name":"natro92","blog":"natro92","desc":"web master","email":"natro92@natro92.fun","color":"#3075d9"},{"url":"https://mi1n9.github.io/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=2605742754&spec=640&img_type=jpg","name":"m1n9","blog":"m1n9","desc":"Crypto master","email":"2605742754@qq.com","color":"#4075d9"},{"url":"https://berial.cn/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=1409080135&spec=640&img_type=jpg","name":"berial","blog":"berial","desc":"pwn master","email":"1409080135@qq.com","color":"#7075d9"},{"url":"https://waltchans.github.io/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=1420970368&spec=640&img_type=jpg","name":"walt","blog":"walt","desc":"pwn master","email":"1420970368@qq.com","color":"#9075d9"}],"random":true},"headers":[],"relativePath":"pages/links/index.md","lastUpdated":null}'),{lazy:(s,n)=>s.name===n.name}),it={__name:"index",setup(s,{expose:n}){var d;const{data:l}=A(),m=z(),e=Y(),i=Object.assign(e.meta.frontmatter||{},((d=l.value)==null?void 0:d.frontmatter)||{});e.meta.frontmatter=i,m.currentRoute.value.data=l.value,B("valaxy:frontmatter",i),globalThis.$frontmatter=i;const c={title:"我的小伙伴们",keywords:"链接",description:"iamorange的小伙伴们",links:[{url:"https://www.bx33661.com/",avatar:"http://q.qlogo.cn/headimg_dl?dst_uin=1811753380&spec=640&img_type=jpg",name:"bx33661",blog:"bx33661",desc:"web master",email:"bx33661@gmail.com",color:"#0078e7"},{url:"https://unjoke.github.io/",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=2801238549&spec=640&img_type=jpg",name:"unjoke",blog:"unjoke",desc:"web master",email:"weiceya@outlook.com",color:"#8058d9"},{url:"https://orxiain.life",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=1193087005&spec=640&img_type=jpg",name:"orxiain.",blog:"orxiain.",desc:"web master",email:"orxiain@outlook.com",color:"#6058d9"},{url:"https://natro92.fun/",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=2997453446&spec=640&img_type=jpg",name:"natro92",blog:"natro92",desc:"web master",email:"natro92@natro92.fun",color:"#3075d9"},{url:"https://mi1n9.github.io/",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=2605742754&spec=640&img_type=jpg",name:"m1n9",blog:"m1n9",desc:"Crypto master",email:"2605742754@qq.com",color:"#4075d9"},{url:"https://berial.cn/",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=1409080135&spec=640&img_type=jpg",name:"berial",blog:"berial",desc:"pwn master",email:"1409080135@qq.com",color:"#7075d9"},{url:"https://waltchans.github.io/",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=1420970368&spec=640&img_type=jpg",name:"walt",blog:"walt",desc:"pwn master",email:"1420970368@qq.com",color:"#9075d9"}],random:!0};return n({frontmatter:c}),(a,J)=>{const b=U,k=y;return p(),_(k,{frontmatter:f(i)},{"main-content-md":t(()=>[I(b,{links:c.links,random:c.random,errorImg:"https://cdn.yunyoujun.cn/img/avatar/none.jpg"},null,8,["links","random"])]),"main-header":t(()=>[o(a.$slots,"main-header")]),"main-header-after":t(()=>[o(a.$slots,"main-header-after")]),"main-nav":t(()=>[o(a.$slots,"main-nav")]),"main-content-before":t(()=>[o(a.$slots,"main-content-before")]),"main-content":t(()=>[o(a.$slots,"main-content")]),"main-content-after":t(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[o(a.$slots,"main-nav-after")]),comment:t(()=>[o(a.$slots,"comment")]),footer:t(()=>[o(a.$slots,"footer")]),aside:t(()=>[o(a.$slots,"aside")]),"aside-custom":t(()=>[o(a.$slots,"aside-custom")]),default:t(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{it as default,A as usePageData};
