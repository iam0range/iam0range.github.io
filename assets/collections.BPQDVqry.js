import{e as d}from"./app.CX3hFjFA.js";import{e as f,f as l,N as i,O as o,P as e,a4 as t,X as k,y as h,a8 as C,U as g,Q as w,F as x,a0 as v,u as y}from"./framework.DntyxCiH.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-router.DXOWUr9z.js";import"./chunks/vue-i18n.DyM89frq.js";import"./chunks/pinia.NfdmkE6C.js";import"./chunks/@vueuse/motion.D6rQsSfL.js";import"./chunks/nprogress.Cino7761.js";function B(){return{collections:f([{id:"i-and-she",name:"I and She",description:"Love letters from the past"},{id:"love-and-peace",name:"爱与和平",description:"Recipes for a good life"}])}}const L=l({__name:"YunCollectionItem",props:{collection:{}},setup(a){return(n,r)=>{const s=i("RouterLink");return e(),o(s,{class:"inline-flex rounded p-4 h-50 w-40 bg-gray-100 dark:bg-dark-300 shadow",to:`/collections/${n.collection.id}`},{default:t(()=>r[0]||(r[0]=[k(" Book ")])),_:1},8,["to"])}}}),R={flex:"~ wrap",gap:"4"},E=l({__name:"collections",setup(a){const{collections:n}=B();return(r,s)=>{const p=L,u=i("RouterView"),m=d;return e(),o(m,null,{default:t(()=>[h(u,null,{default:t(({Component:_})=>[(e(),o(C(_),null,{default:t(()=>[g("div",R,[(e(!0),w(x,null,v(y(n),c=>(e(),o(p,{key:c.id,collection:c},null,8,["collection"]))),128))])]),_:2},1024))]),_:1})]),_:1})}}});export{E as default};
