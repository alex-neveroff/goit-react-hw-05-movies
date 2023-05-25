"use strict";(self.webpackChunkreact_app_template=self.webpackChunkreact_app_template||[]).push([[387],{387:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a,r=n(165),s=n(861),i=n(439),c=n(919),o=n(791),u=n(689),l=n(72),p=n(168),h=n(686).default.div(a||(a=(0,p.Z)(["\n  .title {\n    font-size: 30px;\n    text-align: center;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n\n  .reviews-list {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n  }\n\n  .review-item {\n    display: flex;\n    gap: 50px;\n    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16);\n    padding: 15px;\n    background-color: #fff;\n    border-radius: 8px;\n  }\n\n  .author-wrap {\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n  }\n  .author-name {\n    font-size: 18px;\n    font-weight: bold;\n    text-align: center;\n  }\n\n  .author-text {\n    font-size: 20px;\n    width: 1000px;\n  }\n  .no-text {\n    font-size: 24px;\n  }\n"]))),f=n(324),x=n(184),d=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1],p=(0,u.UO)().movieId,d=(0,o.useState)(!1),m=(0,i.Z)(d,2),v=m[0],g=m[1],w=(0,o.useState)(null),b=(0,i.Z)(w,2),Z=b[0],j=b[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,l.Z)("/movie/".concat(p,"/reviews"));case 4:t=e.sent,n=t.results,a(n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),j(e.t0.message),c.Notify.failure(e.t0.message);case 13:return e.prev=13,g(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),(0,x.jsxs)(h,{children:[(0,x.jsx)("h2",{className:"title",children:"Movie reviews"}),v&&(0,x.jsx)(f.Z,{}),Boolean(null!==Z)&&(0,x.jsxs)("p",{children:["Error: ",Z]}),n.length>0&&(0,x.jsx)("ul",{className:"reviews-list",children:n.map((function(e){var t=e.author_details.avatar_path,n=t?t.includes("http")?"".concat(t.slice(1)):"https://www.themoviedb.org/t/p/w150_and_h150_face".concat(t):"https://raw.githubusercontent.com/alex-neveroff/templates/main/images/slider/unknown.jpg";return(0,x.jsxs)("li",{className:"review-item",children:[(0,x.jsxs)("div",{className:"author-wrap",children:[(0,x.jsx)("img",{className:"author-photo",src:n,alt:e.author,width:"80",height:"80"}),(0,x.jsx)("p",{className:"author-name",children:e.author})]}),(0,x.jsx)("p",{className:"author-text",children:e.content})]},e.id)}))})," ",!v&&(0,x.jsx)("p",{className:"no-text",children:"There are no reviews for this movie yet."})]})}},72:function(e,t,n){var a=n(165),r=n(861),s=n(243),i=n(919),c=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r,c,o,u=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:"",e.prev=2,e.next=5,s.Z.get("".concat("https://api.themoviedb.org/3","/").concat(t,"?api_key=").concat("65175319ff5fdf769ef44bf4c6a21d27","&query=").concat(r,"&page=").concat(n));case 5:return c=e.sent,o=c.data,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(2),i.Notify.failure(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();t.Z=c}}]);
//# sourceMappingURL=387.867bd787.chunk.js.map