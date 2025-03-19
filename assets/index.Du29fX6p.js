import{_ as b}from"./ValaxyMain.vue_vue_type_style_index_0_lang.DAVEWI7U.js";import{u as v}from"./chunks/@vueuse/motion.D6rQsSfL.js";import{o as $}from"./index.ge28e1Fz.js";import{f as g,e as w,Q as p,P as u,$ as j,U as r,W as f,F as q,a0 as x,O as k,u as _,a4 as e,V as n,y as I,A as B}from"./framework.DntyxCiH.js";import{E as L}from"./app.ElGgWGRz.js";import"./chunks/dayjs.Byk5cVHE.js";import{f as R,a as Y,u as z}from"./chunks/vue-router.I2y9rtcs.js";import"./YunComment.vue_vue_type_style_index_0_lang.CXRkUSGA.js";import"./index.C5okkQwF.js";import"./chunks/vue-i18n.DyM89frq.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CgGBEkNu.js";import"./post.uXcjiOb0.js";import"./animation.BmKSPrMr.js";import"./chunks/pinia.NfdmkE6C.js";import"./chunks/nprogress.Cino7761.js";const D=["href","title"],E={class:"yun-link-left"},S={class:"yun-link-avatar size-16 overflow-hidden flex-center"},V=["src","alt"],N={class:"yun-link-info",m:"l-2"},O={class:"yun-link-blog",font:"serif black"},P={class:"yun-link-desc"},C=g({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(s){const a=s;function l(t){$(t,a.errorImg)}const m=w();return v(m,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:a.i*50}}}),(t,i)=>(u(),p("li",{ref_key:"itemRef",ref:m,class:"yun-link-item inline-flex",style:j({"--primary-color":t.link.color})},[r("a",{class:"yun-link-url",p:"x-4 y-2",href:t.link.url,title:t.link.name,alt:"portrait",rel:"friend",target:"_blank"},[r("div",E,[r("div",S,[r("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:t.link.avatar,alt:t.link.name,onError:l},null,40,V)])]),r("div",N,[r("div",O,f(t.link.blog),1),r("div",P,f(t.link.desc),1)])],8,D)],4))}}),F={class:"yun-links"},M={class:"yun-link-items",flex:"center wrap"},U=g({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(s){const a=s,{data:l}=L(a.links,a.random);return(m,t)=>{const i=C;return u(),p("div",F,[r("ul",M,[(u(!0),p(q,null,x(_(l),(c,d)=>(u(),k(i,{key:d,i:d,link:c,"error-img":m.errorImg},null,8,["i","link","error-img"]))),128))])])}}}),A=R("/links",async s=>JSON.parse('{"title":"我的小伙伴们","description":"云游的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"云游的小伙伴们","links":[{"url":"https://www.bx33661.com/","avatar":"http://q.qlogo.cn/headimg_dl?dst_uin=1811753380&spec=640&img_type=jpg","name":"bx33661","blog":"bx33661","desc":"web master","email":"bx33661@gmail.com","color":"#0078e7"},{"url":"https://unjoke.github.io/","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=2801238549&spec=640&img_type=jpg","name":"unjoke","blog":"unjoke","desc":"web master","email":"weiceya@outlook.com","color":"#8058d9"},{"url":"https://orxiain.life","avatar":"https://q.qlogo.cn/headimg_dl?dst_uin=1193087005&spec=640&img_type=jpg","name":"orxiain.","blog":"orxiain.","desc":"web master","email":"orxiain@outlook.com","color":"#6058d9"}],"random":true},"headers":[],"relativePath":"pages/links/index.md","lastUpdated":null}'),{lazy:(s,a)=>s.name===a.name}),ie={__name:"index",setup(s,{expose:a}){var d;const{data:l}=A(),m=z(),t=Y(),i=Object.assign(t.meta.frontmatter||{},((d=l.value)==null?void 0:d.frontmatter)||{});t.meta.frontmatter=i,m.currentRoute.value.data=l.value,B("valaxy:frontmatter",i),globalThis.$frontmatter=i;const c={title:"我的小伙伴们",keywords:"链接",description:"云游的小伙伴们",links:[{url:"https://www.bx33661.com/",avatar:"http://q.qlogo.cn/headimg_dl?dst_uin=1811753380&spec=640&img_type=jpg",name:"bx33661",blog:"bx33661",desc:"web master",email:"bx33661@gmail.com",color:"#0078e7"},{url:"https://unjoke.github.io/",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=2801238549&spec=640&img_type=jpg",name:"unjoke",blog:"unjoke",desc:"web master",email:"weiceya@outlook.com",color:"#8058d9"},{url:"https://orxiain.life",avatar:"https://q.qlogo.cn/headimg_dl?dst_uin=1193087005&spec=640&img_type=jpg",name:"orxiain.",blog:"orxiain.",desc:"web master",email:"orxiain@outlook.com",color:"#6058d9"}],random:!0};return a({frontmatter:c}),(o,J)=>{const h=U,y=b;return u(),k(y,{frontmatter:_(i)},{"main-content-md":e(()=>[I(h,{links:c.links,random:c.random,errorImg:"https://cdn.yunyoujun.cn/img/avatar/none.jpg"},null,8,["links","random"])]),"main-header":e(()=>[n(o.$slots,"main-header")]),"main-header-after":e(()=>[n(o.$slots,"main-header-after")]),"main-nav":e(()=>[n(o.$slots,"main-nav")]),"main-content-before":e(()=>[n(o.$slots,"main-content-before")]),"main-content":e(()=>[n(o.$slots,"main-content")]),"main-content-after":e(()=>[n(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(o.$slots,"main-nav-after")]),comment:e(()=>[n(o.$slots,"comment")]),footer:e(()=>[n(o.$slots,"footer")]),aside:e(()=>[n(o.$slots,"aside")]),"aside-custom":e(()=>[n(o.$slots,"aside-custom")]),default:e(()=>[n(o.$slots,"default")]),_:3},8,["frontmatter"])}}};export{ie as default,A as usePageData};
