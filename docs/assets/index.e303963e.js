import{j as e,a,r as i,u as B,F as E,p}from"./index.0a0753d6.js";import{projectSummary as y}from"./work1.e4db7a48.js";import{projectSummary as F}from"./work2.0237eeec.js";import{projectSummary as g}from"./work3.edc945ef.js";import{projectSummary as v}from"./work4.0c05ad9d.js";import{projectSummary as D}from"./selfwork1.ff68066b.js";const A=()=>e("div",{className:"bg-black w-full p-6 md:pt-20 md:pb-20",children:a("div",{className:"max-w-3xl mx-auto p-4 text-white",children:[e("h1",{className:"text-2xl md:text-4xl lg:text-5xl font-bold text-center md:p-5",children:"\u793E\u4F1A\u4FDD\u967A\u52B4\u52D9\u58EB \xD7 \u30A8\u30F3\u30B8\u30CB\u30A2"}),e("div",{className:"text-2xl md:text-4xl lg:text-5xl font-bold text-center p-5",children:"yato Lab"})]})}),N=({children:s,onClick:t})=>e("li",{className:"text-xs md:text-2xl lg:text-3xl flex-1 h-full flex items-center justify-center border-l border-gray-500 hover:text-white cursor-pointer",onClick:t,children:s}),w=({contents:s,onItemClick:t})=>e("header",{className:"sticky top-0 bg-gray-800 text-gray-400 h-16 w-full",children:e("nav",{className:"h-full",children:e("ul",{className:"flex items-center h-full w-full",children:s.map((l,u)=>e(N,{onClick:()=>t(u),children:l},u))})})}),C=async s=>{try{const t=await fetch("https://e2gwnx4pad.execute-api.ap-northeast-1.amazonaws.com/prod/portfolioSendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!t.ok)throw new Error("Network response was not ok");const l=await t.json();return console.log("Success:",l),l}catch(t){throw console.error("Error:",t),t}},k=()=>{const s=i.exports.useRef(null),t=i.exports.useRef(null),l=i.exports.useRef(null);return e("div",{className:"bg-black w-full p-6 md:pt-20 md:pb-20",children:a("form",{onSubmit:async r=>{var m,x,h;r.preventDefault();const n=(m=s.current)==null?void 0:m.value,d=(x=t.current)==null?void 0:x.value,o=(h=l.current)==null?void 0:h.value;if(n&&d&&o){const f={name:n,contact:d,message:o};try{await C(f),alert("\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\uFF01"),s.current&&(s.current.value=""),t.current&&(t.current.value=""),l.current&&(l.current.value="")}catch{alert("\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u9001\u4FE1\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002")}}},className:"mt-8 space-y-6",children:[a("div",{children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300",children:"\u500B\u4EBA\u540D/\u4F1A\u793E\u540D"}),e("input",{type:"text",id:"name",name:"name",ref:s,className:"mt-1 block w-full md:w-1/2 p-2.5 bg-gray-700 border border-gray-600 text-white",required:!0})]}),a("div",{children:[e("label",{htmlFor:"contact",className:"block text-sm font-medium text-gray-300",children:"\u9023\u7D61\u5148"}),e("input",{type:"text",id:"contact",name:"contact",ref:t,className:"mt-1 block w-full md:w-1/2 p-2.5 bg-gray-700 border border-gray-600 text-white",required:!0})]}),a("div",{children:[e("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300",children:"\u5185\u5BB9"}),e("textarea",{id:"message",name:"message",ref:l,className:"mt-1 block w-full h-32 p-2.5 bg-gray-700 border border-gray-600 text-white",required:!0})]}),e("div",{children:e("button",{type:"submit",className:"w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold",children:"\u9001\u4FE1"})})]})})},b=s=>{const{handleNavigation:t,projects:l}=s;return e("div",{className:"space-y-8 p-4 flex justify-center",children:e("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:l.map(u=>a("div",{className:"space-y-4 p-4 border rounded-lg shadow-md flex flex-col justify-between",children:[a("div",{children:[e("div",{className:"text-xl font-semibold",children:u.title}),e("img",{src:`/Portfolio/${u.imageUrl}`,alt:"Project_Thumbnail",className:"w-full h-88 rounded border-2 border-black"}),e("div",{className:"text-gray-700",children:u.description})]}),a("div",{children:[e("div",{className:"font-bold",children:"\u4E3B\u306A\u4F7F\u7528\u8A00\u8A9E\u7B49"}),e("div",{className:"flex flex-wrap gap-2",children:u.technologies.map(r=>e("div",{className:"bg-red-500 text-white px-2 py-1 rounded",children:r},r))}),e("button",{onClick:()=>t(u.id),className:"flex items-center space-x-2 bg-blue-500 text-white border border-blue-500 hover:bg-white hover:text-blue-500 px-4 py-2 rounded-md mt-4",children:e("div",{children:"\u958B\u767A\u306E\u8A73\u7D30\u306F\u3053\u3061\u3089"})})]})]},u.id))})})},S=({headers:s,data:t,columnWidths:l})=>a("table",{className:"border border-white w-full text-gray-400 table-fixed",children:[a("colgroup",{children:[e("col",{style:{width:`${l[0]/l.reduce((u,r)=>u+r,0)*100}%`}}),e("col",{style:{width:`${l[1]/l.reduce((u,r)=>u+r,0)*100}%`}}),e("col",{style:{width:`${l[2]/l.reduce((u,r)=>u+r,0)*100}%`}})]}),e("thead",{children:e("tr",{children:s.map((u,r)=>e("th",{className:"border py-2 text-sm md:text-base text-white",children:u},r))})}),e("tbody",{children:t.map((u,r)=>a("tr",{children:[e("td",{className:"border py-2 text-sm md:text-base",children:u.startDay}),e("td",{className:"border py-2 text-sm md:text-base",children:u.endDay}),a("td",{className:"border py-2 text-sm md:text-base",children:[u.value1,e("br",{}),u.value2]})]},r))})]}),j=({profileData:s})=>a("div",{className:"flex flex-col md:flex-row p-4 md:m-8 w-full",children:[e("div",{className:"flex-1 flex",children:a("div",{className:"",children:[e("div",{className:"w-fit mx-auto",children:e("img",{src:"/Portfolio/src/assets/index/profile.png",alt:"profile",className:"rounded-2xl w-72 h-72 md:w-96 md:h-96 object-cover"})}),a("p",{className:"text-sm text-gray-400 p-4",children:["\u306F\u3058\u3081\u307E\u3057\u3066 yato \u3067\u3059\u3002",e("br",{}),"\u73FE\u5728\u67D0\u5927\u624BIT\u4F01\u696D\u306B\u3066\u3001\u793E\u5185SE\u517C\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u3057\u3066\u5927\u898F\u6A21\u306E\u4EBA\u4E8B\u30FB\u7D66\u4E0E\u30B5\u30FC\u30D3\u30B9\u306E\u958B\u767A\u3092\u884C\u3063\u3066\u304A\u308A\u307E\u3059\u3002",e("br",{}),"\u793E\u5185\u3067\u52B4\u52D9\u7BA1\u7406\u3001\u793E\u4F1A\u4FDD\u967A\u306E\u77E5\u8B58\u304C\u6D3B\u304B\u305B\u308B\u3053\u3068\u3092\u8E0F\u307E\u3048\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u3067\u3042\u308A\u306A\u304C\u3089\u3001\u793E\u4F1A\u4FDD\u967A\u52B4\u52D9\u58EB\u8A66\u9A13\u3092\u76EE\u6307\u30572024\u5E74\u306B\u5408\u683C\u3057\u307E\u3057\u305F\u3002",e("br",{}),"\u6301\u3061\u524D\u306E\u597D\u5947\u5FC3\u3068\u30B9\u30C8\u30A4\u30C3\u30AF\u3055\u3092\u6D3B\u304B\u3057\u65E5\u3005\u65B0\u3057\u3044\u3053\u3068\u306B\u6311\u6226\u3057\u3066\u3044\u304D\u307E\u3059\u3002"]})]})}),e("div",{className:"flex-1 ml-4 flex flex-col md:p-4",children:e(S,{headers:["\u958B\u59CB\u65E5","\u7D42\u4E86\u65E5","\u8077\u6B74\u30FB\u5B66\u6B74"],data:s,columnWidths:[1,1,3]})})]}),c=["\u81EA\u5DF1\u7D39\u4ECB","\u7D44\u7E54\u958B\u767A","\u500B\u4EBA\u958B\u767A","\u304A\u554F\u3044\u5408\u308F\u305B"],T=[{startDay:"2021/01",endDay:"\u73FE\u5728",value1:"\u67D0\u5927\u624BIT\u4F01\u696D",value2:"SE\u3001\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30B8\u4E8C\u30A2"},{startDay:"2020/12",endDay:"2022/12",value1:"\u65B0\u898F\u4F1A\u793E CTO",value2:"\u533B\u7642\u8A3A\u7642EC\u30B5\u30FC\u30D3\u30B9\u958B\u767A"},{startDay:"2020/09",endDay:"2021/09",value1:"\u67D0\u5927\u624BIT\u4F01\u696D\u5225\u4F1A\u793E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",value2:"\u30B2\u30FC\u30E0\u5411\u3051\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u30A2\u30D7\u30EA\u958B\u767A"},{startDay:"2020/07",endDay:"2021/09",value1:"\u67D0\u5927\u624BIT\u4F01\u696D\u65B0\u898F\u5225\u4F1A\u793E",value2:"\u793E\u5185\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u30A2\u30D7\u30EA\u958B\u767A"},{startDay:"2018",endDay:"2019",value1:"\u5EFA\u7BC9\u7CFBIT\u4F1A\u793E",value2:"\u5EFA\u7BC9\u696D\u754C\u5411\u3051\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u30A2\u30D7\u30EA\u958B\u767A"}],$=[v,g,F,y],I=[D],L=()=>{const s=B(),t=r=>{s(p.work.getHref(r))},l=r=>{s(p.selfwork.getHref(r))};return a(E,{children:[e(A,{}),e(w,{contents:c,onItemClick:r=>{const n=c[r],d=Array.from(document.querySelectorAll("h2")).find(o=>o.textContent===n);d&&d.scrollIntoView({behavior:"smooth"})}}),e("div",{className:"bg-black w-full p-6 pt-20 md:pb-20",children:a("div",{className:"md:p-4 text-white",children:[e("h2",{className:"text-2xl md:text-3xl lg:text-4xl font-bold text-center",children:c[0]}),e(j,{profileData:T})]})}),e("div",{className:"w-full p-6 pt-20 md:pb-20",children:a("div",{className:"md:p-4",children:[e("h2",{className:"text-2xl md:text-3xl lg:text-4xl font-bold text-center",children:c[1]}),e(b,{handleNavigation:t,projects:$})]})}),e("div",{className:"w-full p-6 pt-20 md:pb-20",children:a("div",{className:"md:p-4",children:[e("h2",{className:"text-2xl md:text-3xl lg:text-4xl font-bold text-center",children:c[2]}),e(b,{handleNavigation:l,projects:I})]})}),e("div",{className:"bg-black w-full p-6 pt-20 md:pb-20",children:a("div",{className:"md:p-4 text-white",children:[e("h2",{className:"text-2xl md:text-3xl lg:text-4xl font-bold text-center",children:c[3]}),e(k,{})]})})]})};export{L as HomeRoute};
