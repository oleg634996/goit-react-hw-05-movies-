"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{4377:function(t,e,n){n.d(e,{Hx:function(){return h},Tg:function(){return o},WK:function(){return v},eb:function(){return p},uV:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),i=n.n(u),s="d76d0790cc7bfcd2f7e0cb888f8ccbbc",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("\nhttps://api.themoviedb.org/3/trending/movie/week?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s,"&language=ru-Ru"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s,"&language=ru-RU"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-En&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},7842:function(t,e,n){n.r(e);var r=n(885),a=n(4377),c=n(2791),u=n(6368),i=n(184);e.default=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1];return(0,c.useEffect)((function(){(0,a.Tg)().then(s)}),[]),(0,i.jsx)("main",{className:"main",children:(0,i.jsx)(u.Z,{film:n})})}},6368:function(t,e,n){var r=n(6871),a=n(501),c=n(184);e.Z=function(t){var e=t.film,n=(0,r.TH)();return(0,c.jsx)("ul",{className:"nav-item",children:e.map((function(t){var e=t.title,r=t.id,u=t.poster_path;return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(r),state:{from:n},children:[(0,c.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(u),alt:e}),(0,c.jsx)("p",{children:e})]})},r)}))})}}}]);
//# sourceMappingURL=842.15be1445.chunk.js.map