(this.webpackJsonpreact_roup=this.webpackJsonpreact_roup||[]).push([[0],{34:function(e,t,a){e.exports=a(79)},39:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),i=a(18),s=a(33),m=a(11),o=(a(39),a(80)),u=a(81),d=a(82),f=a(17),b=a.n(f),g=a(30),_=a(32),E=a(7),p={"x-rapidapi-key":"80b329bd34msh754db68911417eep17038bjsned68b78e75b7","x-rapidapi-host":"nutritionix-api.p.rapidapi.com"},h=a(31),v=a.n(h),x=function(e){var t={method:"GET",url:"https://nutritionix-api.p.rapidapi.com/v1_1/search/".concat(e),params:{fields:"item_name,item_id,brand_name,nf_calories,nf_total_fat"},headers:p};return v.a.request(t).then((function(e){return console.log(e.data),e.data})).catch((function(e){throw console.error(e),new Error("ERROR http")}))},j=function(e){var t=Object(E.get)(e,"selectValue",""),a=Object(E.get)(e,"options",[]),r=Object(n.useState)(!1),l=Object(m.a)(r,2),i=l[0],s=l[1],o=a.map((function(e){return{value:e.fields.item_id,label:"".concat(e.fields.item_name," ").concat(e.fields.brand_name," calories: ").concat(e.fields.nf_calories)}})),u=function(){var t=Object(g.a)(b.a.mark((function t(a){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===a){t.next=7;break}return t.next=3,x(a);case 3:n=t.sent,c=Object(E.get)(n,"hits",[]),s(!1),e.changeOptions(c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=Object(E.debounce)(u,500);return c.a.createElement(_.a,{isClearable:!0,placeholder:"Search for ingredient",value:t,onChange:function(t,a){"clear"===a.action&&(e.changeSelectValue(null),e.changeOptions([])),t&&e.changeSelectValue(t)},options:o,onInputChange:function(e,t){"input-change"===t.action&&(s(!0),d(e))},name:"ingredient",id:"ingredient",isLoading:i})},y=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)([]),s=Object(m.a)(i,2),f=s[0],b=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{className:"justify-content-between"},c.a.createElement(u.a,{xs:{size:6,offset:2},md:{size:8,offset:2}},c.a.createElement(j,{selectValue:r,changeSelectValue:function(e){l(e)},options:f,changeOptions:function(e){b(e)}})),c.a.createElement(u.a,{xs:4,md:2},c.a.createElement(d.a,{disabled:""===r,className:"btn-block text-white",onClick:function(){var t=f.find((function(e){return e.fields.item_id===r.value}));e.addCounter(t)}},"Add"))))},O=function(e){return c.a.createElement("div",{className:"my-search"},c.a.createElement(y,{addCounter:e.addCounter}))},N=a(83),C=a(84),k=a(85),w=a(86),S=a(87),V=function(e){var t=Object(E.get)(e,"item",{}),a=Object(E.get)(t,"_id",""),n=Object(E.get)(t,"qnt",0),r=Object(E.get)(t,"fields.item_name",""),l=Object(E.get)(t,"fields.brand_name",""),i=Math.round(Object(E.get)(t,"fields.nf_calories",0));return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{className:"mt-2 mb-2"},c.a.createElement(C.a,null,c.a.createElement(o.a,{className:"align-items-center"},c.a.createElement(u.a,{md:7,xs:12,lg:8,className:"d-flex align-items-center justify-content-center"},c.a.createElement("p",{className:"text-center"},r+", "+l)),c.a.createElement(u.a,{md:2,xs:12,lg:2,className:"d-flex align-items-center justify-content-center"},c.a.createElement(o.a,{className:"align-items-center justify-content-center"},c.a.createElement(k.a,null,c.a.createElement(d.a,{size:"sm",onClick:function(){return e.changeValue(a,n-1)}},"-"),c.a.createElement(w.a,{className:"ml-2 mr-2 my-input-number",bsSize:"sm",value:n,onChange:function(t){e.changeValue(a,+t.target.value)},type:"number",style:{maxWidth:"50px"}}),c.a.createElement(d.a,{size:"sm",onClick:function(){return e.changeValue(a,n+1)}},"+")))),c.a.createElement(u.a,{md:3,xs:12,lg:2,className:"d-flex align-items-center justify-content-center"},c.a.createElement(o.a,{className:"align-items-center justify-content-center"},c.a.createElement(u.a,{xs:12,md:8},c.a.createElement("h3",{className:"pt-1 text-center"},c.a.createElement(S.a,null,"".concat(i*n," cal")))),c.a.createElement(u.a,{xs:12,md:4},c.a.createElement(d.a,{className:"btn-block pb-1 ml-1",onClick:function(){return e.deleteCounter(a)},close:!0}))))))))},z=function(e){var t=Object(E.get)(e,"counters",[]);return c.a.createElement(c.a.Fragment,null,t.map((function(t){return c.a.createElement(V,{key:t._id,item:t,deleteCounter:e.deleteCounter,changeValue:e.changeValue})})))},q=function(e){var t=Object(E.get)(e,"counters",[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(z,{counters:t,deleteCounter:e.deleteCounter,changeValue:e.changeValue}))},A=a(88),F=a(89),R=a(90),D=function(e){var t=Object(E.get)(e,"counters",[]),a=t.reduce((function(e,t){return e+Math.round(t.fields.nf_calories)*t.qnt}),0),n=Math.round(100*a/3e3),r=0===t.length?"text-muted":null,l=0===n?"muted":n<51?"success":n<101?"warning":"danger";return c.a.createElement("div",null,c.a.createElement(A.a,{fluid:!0},c.a.createElement(F.a,{fluid:!0},c.a.createElement(o.a,null,c.a.createElement(u.a,{sm:12,md:9,lg:7},c.a.createElement("h1",{className:"display-3 "},"Track your meal")),c.a.createElement(u.a,{sm:12,md:3,lg:5,className:"d-flex justify-content-center align-items-center"},c.a.createElement("span",{className:"lead mr-2"},"Total:"),c.a.createElement("h2",{className:"d-inline"},c.a.createElement(S.a,{color:l},"".concat(a," cal"))))),c.a.createElement("hr",{className:"my-2 mb-4"}),c.a.createElement(o.a,null,c.a.createElement(u.a,{sm:12,md:7,lg:6,className:"d-flex justify-content-between"},c.a.createElement("p",{className:"ml-2"},"Search for any product and click Add button")),c.a.createElement(u.a,{sm:12,md:5,lg:6,className:"d-flex justify-content-center"},c.a.createElement("div",{className:"".concat(r," align-items-center")},c.a.createElement("p",{className:"text-center"},"You have covered ",c.a.createElement("span",{className:0===n?"text-muted":n>100?"text-danger":n>50?"text-warning":"text-success"},n,"%")," of your daily 3000 calories norm"),c.a.createElement(R.a,{className:"my-progress",color:l,value:n,max:100})))))))},M=[{fields:{brand_name:"USDA",item_id:"571fb9c478ad77b849f9bd91",item_name:"Beef, ground, 80% lean meat / 20% fat, crumbles, cooked, pan - 4 oz, cooked",nf_calories:308.45,nf_serving_size_qty:1,nf_serving_size_unit:"serving",nf_total_fat:19.69},_id:"571fb9c478ad77b849f9bd91",_index:"f762ef22-e660-434f-9071-a10ea6691c27",_score:12.290755,_type:"item",qnt:1},{fields:{brand_name:"USDA",item_id:"513fceb575b8dbbc210014e2",item_name:"Carrots, cooked, boiled, drained, without salt - 1 carrot",nf_calories:16.1,nf_serving_size_qty:1,nf_serving_size_unit:"serving",nf_total_fat:.08},_id:"513fceb575b8dbbc210014e2",_index:"f762ef22-e660-434f-9071-a10ea6691c27",_score:12.787365,_type:"item",qnt:1},{fields:{brand_name:"USDA",item_id:"5976658a60263c95295fb683",item_name:"Red wine, cabernet sauvignon - 1 bottle",nf_calories:618.8,nf_serving_size_qty:1,nf_serving_size_unit:"serving",nf_total_fat:0},_id:"5976658a60263c95295fb683",_index:"f762ef22-e660-434f-9071-a10ea6691c27",_score:12.858129,_type:"item",qnt:1}];var T=function(){var e=Object(n.useState)(M),t=Object(m.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"container"},c.a.createElement(D,{counters:a}),c.a.createElement(O,{addCounter:function(e){if(!a.find((function(t){return t._id===e._id}))){var t=[Object(i.a)(Object(i.a)({},e),{},{qnt:1})].concat(Object(s.a)(a));r(t)}}}),c.a.createElement(o.a,null,c.a.createElement(q,{counters:a,deleteCounter:function(e){var t=a.filter((function(t){return t._id!==e}));r(t)},changeValue:function(e,t){if(!(t<=0)){var n=a.map((function(a){return a._id===e&&(a.qnt=t),a}));r(n)}}})))};a(78);l.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3c70ee32.chunk.js.map