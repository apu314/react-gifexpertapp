(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=n(2),u=n(9),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:[Object(a.jsx)("h1",{children:i}),Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})]})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"plBzcPxA0YD6D5UTV90QJnBKzaZmVla9",n="https://api.giphy.com/v1/gifs/search?api_key=".concat("plBzcPxA0YD6D5UTV90QJnBKzaZmVla9","&q=").concat(encodeURI(t),"&lang=es&limit=10"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.id,n=e.title,c=e.url;return console.log(t,n,c),Object(a.jsxs)("div",{className:"card animate__animated animate__fadeInDown animate__slow",children:[Object(a.jsx)("img",{src:c,alt:n}),Object(a.jsx)("p",{children:n})]})},m=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(t),r=n.data,i=n.loading;return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeInDown animate__slow",children:t}),i&&Object(a.jsx)("p",{children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(a.jsx)(f,Object(j.a)({},e),e.id)}))})]})},O=function(){var e=Object(c.useState)(["Friends"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h4",{children:"Gifs App"}),Object(a.jsx)(o,{setCategories:r}),Object(a.jsx)("hr",{}),n.map((function(e){return Object(a.jsx)(m,{category:e},e)}))]})};n(17),n(18);i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a752ba5a.chunk.js.map