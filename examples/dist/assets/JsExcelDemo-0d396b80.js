var c=Object.defineProperty;var p=(r,e,t)=>e in r?c(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var s=(r,e,t)=>(p(r,typeof e!="symbol"?e+"":e,t),t);import{S as u,a as n,b as d,t as w,c as l,l as x,r as m,g as f}from"./hack-34d5149e.js";import{d as k}from"./url-de9b02cf.js";/* empty css              */import{r as b,o as v,a as S,c as D}from"./index-afb4c379.js";import"./_commonjs-dynamic-modules-302442b1.js";class _{constructor(e,t={},i={}){s(this,"container",null);s(this,"wrapper",null);s(this,"wrapperMain",null);s(this,"options",{});s(this,"requestOptions",{});s(this,"mediasSource",[]);s(this,"workbookDataSource",{_worksheets:[]});s(this,"sheetIndex",1);s(this,"ctx",null);s(this,"xs",null);s(this,"offset",null);s(this,"observer",null);s(this,"fileData",null);this.container=e,this.options={minColLength:20,...t},this.requestOptions=i,this.createWrapper(),this.initSpreadsheet(),this.hack()}createWrapper(){this.wrapper=document.createElement("div"),this.wrapper.className="vue-office-excel",this.wrapperMain=document.createElement("div"),this.wrapperMain.className="vue-office-excel-main",this.wrapper.appendChild(this.wrapperMain),this.container.appendChild(this.wrapper)}initSpreadsheet(){this.xs=new u(this.wrapperMain,{mode:"read",showToolbar:!1,showContextmenu:this.options.showContextmenu||!1,view:{height:()=>this.wrapper&&this.wrapper.clientHeight||300,width:()=>this.wrapper&&this.wrapper.clientWidth||1200},row:{height:24,len:100},col:{len:26,width:80,indexWidth:60,minWidth:60},autoFocus:!1}).loadData({});let e=this,t=this.xs.bottombar.swapFunc;this.xs.bottombar.swapFunc=function(a){t.call(e.xs.bottombar,a),e.sheetIndex=a+1,setTimeout(()=>{e.xs.reRender(),n(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)})};let i=this.xs.sheet.editor.clear;this.xs.sheet.editor.clear=function(...a){i.apply(e.xs.sheet.editor,a),setTimeout(()=>{n(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)})};let o=this.xs.sheet.editor.setOffset;this.xs.sheet.editor.setOffset=function(...a){o.apply(e.xs.sheet.editor,a),e.offset=a[0],n(e.ctx,e.mediasSource,e.workbookDataSource._worksheets[e.sheetIndex],e.offset)};const h=this.wrapperMain.querySelector("canvas");this.ctx=h.getContext("2d")}renderExcel(e){return this.fileData=e,d(e).then(t=>{if(!t._worksheets||t._worksheets.length===0)throw new Error("未获取到数据，可能文件格式不正确或文件已损坏");const{workbookData:i,medias:o,workbookSource:h}=w(t,this.options);this.mediasSource=o,this.workbookDataSource=h,this.offset=null,this.sheetIndex=1,l(),this.xs.loadData(i),n(this.ctx,this.mediasSource,this.workbookDataSource._worksheets[this.sheetIndex],this.offset)}).catch(t=>(this.mediasSource=[],this.workbookDataSource={_worksheets:[]},l(),this.xs.loadData({}),Promise.reject(t)))}hack(){const e=x.debounce(m,200).bind(this,this.wrapperMain);this.observer=new MutationObserver(e);const t={attributes:!0,childList:!0,subtree:!0};this.observer.observe(this.wrapperMain,t),e(this.wrapperMain)}setOptions(e){this.options=e}setRequestOptions(e){this.requestOptions=e}preview(e){return new Promise((t,i)=>{f(e,this.requestOptions).then(o=>{this.renderExcel(o).then(t)}).catch(o=>{this.xs.loadData({}),i(o)})})}download(e){k(e||`js-preview-excel-${new Date().getTime()}.xlsx`,this.fileData)}destroy(){this.observer.disconnect(),this.container.removeChild(this.wrapper),this.container=null,this.wrapper=null,this.wrapperMain=null,this.ctx=null,this.xs=null,this.observer=null,this.options=null,this.requestOptions=null,this.mediasSource=null,this.workbookDataSource=null}}function E(r,e,t){return new _(r,e,t)}const g={init:E},P={__name:"JsExcelDemo",setup(r){const e=b(null);return v(()=>{window.myExcelPreview=g.init(e.value),window.myExcelPreview.preview("/vue-office/examples/dist/static/test-files/test.xlsx").then(t=>{console.log("excel preview done",window.myExcelPreview)}).catch(t=>{console.log("err",t)})}),(t,i)=>(S(),D("div",{ref_key:"dom",ref:e,style:{height:"calc(100vh - 50px)"}},null,512))}};export{P as default};
