(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6,9,11],{296:function(t,e,n){"use strict";var r=n(2),o=n(301);r({target:"String",proto:!0,forced:n(302)("anchor")},{anchor:function(t){return o(this,"a","name",t)}})},297:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("2f53f4d5",content,!0,{sourceMap:!1})},300:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("2a8d99b8",content,!0,{sourceMap:!1})},301:function(t,e,n){var r=n(3),o=n(21),c=n(12),l=/"/g,v=r("".replace);t.exports=function(t,e,n,r){var f=c(o(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+v(c(r),l,"&quot;")+'"'),d+">"+f+"</"+e+">"}},302:function(t,e,n){var r=n(4);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},303:function(t,e,n){"use strict";n(297)},304:function(t,e,n){var r=n(38)(!1);r.push([t.i,".content-section__separator[data-v-1b367636]{color:#373737}.content-section__separator svg[data-v-1b367636]{fill:currentColor;width:35rem;display:block;margin:4rem auto}",""]),t.exports=r},309:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("fcb21152",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";n(300)},311:function(t,e,n){var r=n(38)(!1);r.push([t.i,".prev-next{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1rem;border-radius:1.2rem;background-color:#ccc;background-image:linear-gradient(180deg,#cacaca,#ddd);margin-bottom:3.5rem;font-size:1.6rem}.prev-next__next>a,.prev-next__prev>a{position:relative;z-index:10}",""]),t.exports=r},312:function(t,e,n){"use strict";n.r(e);n(296);var r=n(28),o={props:{anchor:{type:String,default:""},document:{type:Object,default:function(){return null}},content:{type:String,default:""},last:{type:Boolean,default:!1}},computed:{articleClass:function(){return Object(r.a)({"content-section__content":!0},this.anchor,!0)}}},c=(n(303),n(20)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"content-section"},[t.anchor?e("div",{staticClass:"anchor",attrs:{id:t.anchor}}):t._e(),t._v(" "),null!==t.document?[e("nuxt-content",{class:t.articleClass,attrs:{document:t.document}})]:""!==t.content?[e("article",{class:t.articleClass,domProps:{innerHTML:t._s(t.content)}})]:[e("article",{class:t.articleClass},[t._t("default")],2)],t._v(" "),t.last?t._e():e("div",{staticClass:"content-section__separator"},[e("svg",[e("title",[t._v("==========")]),t._v(" "),e("use",{attrs:{"xlink:href":"/img/decorations.svg#icon-divider"}})])])],2)}),[],!1,null,"1b367636",null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=(n(310),n(20)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"prev-next"},[e("div",{staticClass:"prev-next__prev"},[t.prev?e("nuxt-link",{attrs:{to:"/".concat(t.prev.slug),alt:"`${prev.title}`"}},[t._v("« "+t._s(t.prev["short-title"]||t.prev.what))]):t._e()],1),t._v(" "),e("div",{staticClass:"prev-next__next"},[t.next?e("nuxt-link",{attrs:{to:"/".concat(t.next.slug),alt:"`${next.title}`"}},[t._v(t._s(t.next["short-title"]||t.next.what)+" »")]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,n){t.exports=n.p+"img/icons.4343bc4.svg"},317:function(t,e,n){"use strict";n(309)},318:function(t,e,n){var r=n(38)(!1);r.push([t.i,'.events-page p.events-page__what{font-size:2.9rem;font-style:italic;font-family:"Crimson Text",serif;margin-bottom:.3rem;font-weight:500}.events-page p.events-page__spacetime{font-size:2rem;font-family:"Crimson Text",serif;color:#545454}.events-page p.events-page__spacetime:not(:last-child){margin-bottom:0}.events-page p.events-page__spacetime:last-child{margin-bottom:3.5rem}.events-page>h2{font-size:2.8rem;font-style:italic;font-family:"Crimson Text",serif}.events-page__content{margin-top:3.5rem}.events-page a.events-page__twitter,.events-page a.events-page__twitter:visited{margin-top:.8rem;color:var(--dark);float:right}.events-page a.events-page__twitter:active,.events-page a.events-page__twitter:hover,.events-page a.events-page__twitter:visited:active,.events-page a.events-page__twitter:visited:hover{color:var(--med)}.events-page a.events-page__twitter:visited svg,.events-page a.events-page__twitter svg{width:3rem;height:3rem;fill:currentColor}',""]),t.exports=r},322:function(t,e,n){"use strict";n.r(e);n(85);var r={props:{event:{type:Object,required:!0},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},computed:{cssVars:function(){return{"--dark":this.event.dark,"--med":this.event.med,"--light":this.event.light}}}},o=(n(317),n(20)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"events-page",style:t.cssVars},[e("content-prev-next",{attrs:{prev:t.prev,next:t.next}}),t._v(" "),e("div",{staticClass:"events-page__meta"},[e("p",{staticClass:"events-page__what"},[t._v(t._s(t.event.what))]),t._v(" "),t.event.start&&t.event.end?e("p",{staticClass:"events-page__spacetime"},[t._v("\n      From: "+t._s(t.event.start)+" to "+t._s(t.event.end)+" on the\n      "+t._s(t.event.floor)+" floor\n      "),t.event.virtual?e("span",{staticClass:"events-page__virtual"},[e("br"),t._v("\n        and Virtual (ask in Slack for more info)")]):t._e()]):e("p",{staticClass:"events-page__spacetime"},[t._v("\n      Time and location info coming soon!\n    ")])]),t._v(" "),t.event.twitter?e("a",{staticClass:"events-page__twitter",attrs:{href:t.event.twitter}},[e("svg",[e("title",[t._v(t._s(t.event["twitter-text"])+" Twitter Profile")]),t._v(" "),e("use",{attrs:{"xlink:href":n(316)+"#icon-twitter"}})])]):t._e(),t._v(" "),e("h1",[t._v(t._s(t.event["full-title"]||t.event.title))]),t._v(" "),e("img",{staticClass:"center",attrs:{src:"".concat(t.$router.options.base,"img/events/").concat(t.event.slug,"-show.png"),alt:t.event.alt}}),t._v(" "),e("nuxt-content",{staticClass:"events-page__content",attrs:{document:t.event}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentPrevNext:n(315).default})},323:function(t,e,n){"use strict";var r=n(2),o=n(3),c=n(40),l=n(26),v=n(34),f=n(209),d=n(12),_=n(4),h=n(208),m=n(143),x=n(324),w=n(325),y=n(86),k=n(326),C=[],j=o(C.sort),O=o(C.push),B=_((function(){C.sort(void 0)})),T=_((function(){C.sort(null)})),$=m("sort"),M=!_((function(){if(y)return y<70;if(!(x&&x>3)){if(w)return!0;if(k)return k<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)C.push({k:t+n,v:e})}for(C.sort((function(a,b){return b.v-a.v})),n=0;n<C.length;n++)t=C[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:B||!T||!$||!M},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(M)return void 0===t?j(e):j(e,t);var n,r,o=[],_=v(e);for(r=0;r<_;r++)r in e&&O(o,e[r]);for(h(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:d(e)>d(n)?1:-1}}(t)),n=o.length,r=0;r<n;)e[r]=o[r++];for(;r<_;)f(e,r++);return e}})},324:function(t,e,n){var r=n(69).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},325:function(t,e,n){var r=n(69);t.exports=/MSIE|Trident/.test(r)},326:function(t,e,n){var r=n(69).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},346:function(t,e,n){"use strict";n.r(e);var r=n(28),o=n(24),c=n(108);function l(t){throw new TypeError('"'+t+'" is read-only')}var v=n(9),f=(n(50),n(25),n(53),n(15),n(85),n(323),n(52),{scrollToTop:!0,asyncData:function(t){return Object(v.a)(regeneratorRuntime.mark((function e(){var n,v,f,d,content,_,h,m,x,w,y,k,C,j,O,B,T,$,M,S,z;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v=t.error,f=t.$content,d=t.route,m={},C=null,j=[],O=d.path.substring(1).replace(/\/$/,""),e.next=7,f(null,{deep:!0}).only(["type","slug"]).fetch();case 7:if(B=e.sent,T=B.reduce((function(t,e){var n;return t[e.slug]=null!==(n=e.type)&&void 0!==n?n:"content",t}),{}),"session"!==($=T[O])){e.next=23;break}return e.prev=11,e.next=14,f("sessions/".concat(O)).fetch();case 14:content=e.sent,_="sessions",h=["slug","what","title","session-type"],x="sort",m={slug:{$nin:["doors-open","break-1","break-2","screening-of-hackers","dinner-and-social-time","social-time-clean-up"]}},e.next=23;break;case 21:e.prev=21,e.t0=e.catch(11);case 23:if("event"!==$){e.next=35;break}return e.prev=24,e.next=27,f("events/".concat(O)).fetch();case 27:content=e.sent,_="events",h=["slug","short-title","title"],x="floor",e.next=35;break;case 33:e.prev=33,e.t1=e.catch(24);case 35:return e.prev=35,e.next=38,f(path).fetch();case 38:content=e.sent,l("type"),e.next=44;break;case 42:e.prev=42,e.t2=e.catch(35);case 44:if(content||v({message:"Page not found"}),"session"!==$){e.next=57;break}return e.next=48,f("speakers").where({session:{$eq:content.slug}}).fetch();case 48:return k=e.sent,e.next=51,f("sessions").only([].concat(Object(c.a)(h),["start","mins"])).where({sort:{$gt:content.sort}}).sortBy("sort","asc").sortBy("what","asc").limit(1).fetch();case 51:return null!=(M=e.sent)&&M.length&&(C=M[0]),C&&!["break"].includes(C["session-type"])&&(C=null),e.next=56,f("sessions").only([].concat(Object(c.a)(h),["start","mins"])).where({"session-type":{$in:["break","announcement"]},slug:{$nin:["doors-open","hacker-jeopardy"]}}).sortBy("sort","asc").sortBy("what","asc").fetch();case 56:j=e.sent;case 57:return e.next=59,f(_).only(h).where(m).sortBy(x,"asc").sortBy("what","asc").surround(content.slug).fetch();case 59:return S=e.sent,z=Object(o.a)(S,2),w=z[0],y=z[1],e.abrupt("return",(n={type:$},Object(r.a)(n,$,content),Object(r.a)(n,"prev",w),Object(r.a)(n,"next",y),Object(r.a)(n,"speakers",k||[]),Object(r.a)(n,"followedBy",C||null),Object(r.a)(n,"schedule",j),n));case 64:case"end":return e.stop()}}),e,null,[[11,21],[24,33],[35,42]])})))()}}),d=n(20),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("content-section",["event"===t.type?e("content-events-page",{attrs:{event:t.event,prev:t.prev,next:t.next}}):"session"===t.type?e("content-sessions-page",{attrs:{session:t.session,speakers:t.speakers,prev:t.prev,next:t.next,"followed-by":t.followedBy,schedule:t.schedule}}):[e("nuxt-content",{attrs:{document:t.content}})]],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentEventsPage:n(322).default,ContentSection:n(312).default})}}]);