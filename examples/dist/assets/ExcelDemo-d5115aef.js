import{l as C,r as R,S as B,a as x,g as p,b as $,t as L,c as S}from"./hack-b99fc553.js";import{d as q}from"./url-de9b02cf.js";import{d as F,_ as V,r as b,o as W,n as j,h as I,w as M,a as O,c as N,b as A,i as H,e as P,f as U,j as z,g as G,u as J}from"./index-afaed061.js";import{P as K,u as y}from"./PreviewWrapper-b980be9d.js";import"./_commonjs-dynamic-modules-302442b1.js";const E={xls:!1,minColLength:20},Q=F({name:"VueOfficeExcel",props:{src:[String,ArrayBuffer,Blob],requestOptions:{type:Object,default:()=>({})},options:{type:Object,default:()=>({...E})}},emits:["rendered","error","switchSheet"],setup(t,{emit:n}){const u=b(null),f=b(null);let a={_worksheets:[]},o=[],d=0,_=null,e=null,s=null,l=null;function c(h){l=h,$(h,t.options.xls).then(i=>{if(!i._worksheets||i._worksheets.length===0)throw new Error("未获取到数据，可能文件格式不正确或文件已损坏");t.options.beforeTransformData&&typeof t.options.beforeTransformData=="function"&&(i=t.options.beforeTransformData(i));let{workbookData:m,medias:g,workbookSource:r}=L(i,{...E,...t.options});t.options.transformData&&typeof t.options.transformData=="function"&&(m=t.options.transformData(m)),o=g,a=r,s=null,d=0,S(),e.loadData(m),x(_,o,a._worksheets[d],s,t.options),n("rendered"),n("switchSheet",0)}).catch(i=>{console.warn(i),o=[],a={_worksheets:[]},S(),e&&e.loadData({}),n("error",i),n("switchSheet",0)})}const w=C.debounce(R,200).bind(this,f.value),D=new MutationObserver(w),k={attributes:!0,childList:!0,subtree:!0};W(()=>{j(()=>{D.observe(f.value,k),w(f),e=new B(f.value,{mode:"read",showToolbar:!1,showContextmenu:t.options.showContextmenu||!1,view:{height:()=>u.value&&u.value.clientHeight||300,width:()=>u.value&&u.value.clientWidth||1200},row:{height:24,len:100},col:{len:26,width:80,indexWidth:60,minWidth:60},autoFocus:!1}).loadData({});let h=e.bottombar.swapFunc;e.bottombar.swapFunc=function(r){h.call(e.bottombar,r),d=r,setTimeout(()=>{e.reRender(),x(_,o,a._worksheets[d],s,t.options),n("switchSheet",r)})};let i=e.sheet.editor.clear;e.sheet.editor.clear=function(...r){i.apply(e.sheet.editor,r),setTimeout(()=>{x(_,o,a._worksheets[d],s,t.options)})};let m=e.sheet.editor.setOffset;e.sheet.editor.setOffset=function(...r){m.apply(e.sheet.editor,r),s=r[0],x(_,o,a._worksheets[d],s,t.options)},_=f.value.querySelector("canvas").getContext("2d"),t.src&&p(t.src,t.requestOptions).then(c).catch(r=>{o=[],a={_worksheets:[]},e.loadData({}),n("error",r)})})}),I(()=>{D.disconnect(),e=null}),M(()=>t.src,()=>{t.src?p(t.src,t.requestOptions).then(c).catch(h=>{o=[],a={_worksheets:[]},e.loadData({}),n("error",h)}):(o=[],a={_worksheets:[]},e.loadData({}),n("error",new Error("src属性不能为空")))});function T(h){q(h||`vue-office-excel-${new Date().getTime()}.xlsx`,l)}return{wrapperRef:u,rootRef:f,save:T}}}),X={class:"vue-office-excel",ref:"wrapperRef"},Y={class:"vue-office-excel-main",ref:"rootRef"};function Z(t,n,u,f,a,o){return O(),N("div",X,[A("div",Y,null,512)],512)}const v=V(Q,[["render",Z]]);v.install=function(t){t.component(v.name,v)};const re={__name:"ExcelDemo",setup(t){function n(){y.hideLoading()}function u(e){console.log("出差",e),y.hideLoading()}function f(e){return console.log("transformData",e),e}const a=location.origin+(location.pathname+"/").replace("//","/")+"static/test-files/test.xlsx",o=b();function d(e){return console.log("beforeTransformData",e,o),e._worksheets.forEach(s=>{let l=0;if(s._rows[l]&&s._rows[l]._cells)for(let c=0;c<s._rows[l]._cells.length;c++){let w=s._rows[l]._cells[c];w?w.style={bgcolor:"#00ff00"}:s._rows[l]._cells[c]={text:"",value:"",style:{bgcolor:"#00ff00"}}}}),e}function _(e){console.log("当前sheet",e)}return(e,s)=>{const l=H("loading");return O(),P(K,{accept:".xlsx,.xls",placeholder:"请输入xlsx文件地址","default-src":a},{default:U(c=>[z(G(J(v),{ref_key:"docxRef",ref:o,src:c.src,options:{beforeTransformData:d,transformData:f,xls:c.xls},style:{flex:"1",height:"0"},onRendered:n,onError:u,onSwitchSheet:_},null,8,["src","options"]),[[l,!0]])]),_:1})}}};export{re as default};
