(window.webpackJsonp=window.webpackJsonp||[]).push([[21,4,9,13,15,18,19],{281:function(e,t,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("011a5aee",content,!0,{sourceMap:!1})},282:function(e,t,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("e4ef33ae",content,!0,{sourceMap:!1})},286:function(e,t,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("28373338",content,!0,{sourceMap:!1})},287:function(e,t,n){"use strict";n.r(t);var r={props:{speakers:{type:Array,default:function(){return[]}},link:{type:Boolean,default:!1},preamble:{type:String,default:""}}},o=n(9),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speakers-list"},[e.preamble&&e.speakers.length>0?n("span",[e._v(e._s(e.preamble))]):e._e(),e._v(" "),e._l(e.speakers,(function(t,i){return n("span",{key:t.slug},[e.link?[n("a",{attrs:{href:"#"+t.slug}},[e._v(e._s(t.name))])]:[e._v("\n      "+e._s(t.name)+"\n    ")],e._v(" "),e.speakers.length>1&&i<e.speakers.length-1?n("span",[e._v("& ")]):e._e()],2)}))],2)}),[],!1,null,null,null);t.default=component.exports},288:function(e,t,n){"use strict";n(281)},289:function(e,t,n){var r=n(24)(!1);r.push([e.i,".prev-next{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1rem;border-radius:1.2rem;background-color:#ccc;background-image:linear-gradient(180deg,#cacaca,#ddd);margin-bottom:3.5rem;font-size:1.6rem}.prev-next__next>a,.prev-next__prev>a{position:relative;z-index:10}",""]),e.exports=r},290:function(e,t,n){"use strict";n(282)},291:function(e,t,n){var r=n(24)(!1);r.push([e.i,".speakers-single{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;background-color:#ccc;background-image:linear-gradient(180deg,#ddd,#eee);padding:3.5rem}.speakers-single__img{display:block;padding-right:3.5rem}.speakers-single__img--sq{display:none}.speakers-single__bio{font-size:1.8rem}@media only screen and (max-width:51.875em){.speakers-single{flex-direction:column}.speakers-single:first-child{margin-bottom:3.5rem}.speakers-single__img{display:none}.speakers-single__img--sq{display:block}}",""]),e.exports=r},292:function(e,t,n){"use strict";n.r(t);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=(n(288),n(9)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"prev-next"},[n("div",{staticClass:"prev-next__prev"},[e.prev?n("nuxt-link",{attrs:{to:"/"+e.prev.slug,alt:"`${prev.title}`"}},[e._v("« "+e._s(e.prev["short-title"]||e.prev.what))]):e._e()],1),e._v(" "),n("div",{staticClass:"prev-next__next"},[e.next?n("nuxt-link",{attrs:{to:"/"+e.next.slug,alt:"`${next.title}`"}},[e._v(e._s(e.next["short-title"]||e.next.what)+" »")]):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports},293:function(e,t,n){"use strict";n.r(t);var r={props:{speaker:{type:Object,required:!0}},mounted:function(){console.log(this.$router)}},o=(n(290),n(9)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speakers-single",attrs:{id:e.speaker.slug}},[e._v("\n  "+e._s(e.speaker.speaker)+"\n  "),n("img",{staticClass:"speakers-single__img",attrs:{alt:"Picture of "+e.speaker.speaker,src:e.$router.options.base+"img/speakers/"+e.speaker.slug+"-md.jpg"}}),e._v(" "),n("div",{staticClass:"speakers-single__bio"},[n("h4",[e._v(e._s(e.speaker.name))]),e._v(" "),n("nuxt-content",{attrs:{document:e.speaker}})],1)])}),[],!1,null,null,null);t.default=component.exports},309:function(e,t,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("40ced61c",content,!0,{sourceMap:!1})},310:function(e,t,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("0ab4066e",content,!0,{sourceMap:!1})},311:function(e,t,n){"use strict";n(286)},312:function(e,t,n){var r=n(24)(!1);r.push([e.i,".session-speakers :not(:last-child){margin-bottom:3.5rem}",""]),e.exports=r},316:function(e,t,n){"use strict";n.r(t);var r={props:{speakers:{type:Array,required:!0}}},o=(n(311),n(9)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"session-speakers"},e._l(e.speakers,(function(e){return n("content-speakers-single",{key:e.slug,attrs:{speaker:e}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentSpeakersSingle:n(293).default})},339:function(e,t,n){"use strict";n(309)},340:function(e,t,n){var r=n(24)(!1);r.push([e.i,'.events-page p.events-page__what{font-size:2.9rem;font-style:italic;font-family:"Crimson Text",serif;margin-bottom:.3rem;font-weight:500}.events-page p.events-page__spacetime{font-size:2rem;font-family:"Crimson Text",serif;color:#545454}.events-page p.events-page__spacetime:not(:last-child){margin-bottom:0}.events-page p.events-page__spacetime:last-child{margin-bottom:3.5rem}.events-page>h2{font-size:2.8rem;font-style:italic;font-family:"Crimson Text",serif}.events-page__content{margin-top:3.5rem}.events-page a.events-page__twitter,.events-page a.events-page__twitter:visited{margin-top:.8rem;color:var(--dark);float:right}.events-page a.events-page__twitter:active,.events-page a.events-page__twitter:hover,.events-page a.events-page__twitter:visited:active,.events-page a.events-page__twitter:visited:hover{color:var(--med)}.events-page a.events-page__twitter:visited svg,.events-page a.events-page__twitter svg{width:3rem;height:3rem;fill:currentColor}',""]),e.exports=r},341:function(e,t,n){"use strict";n(310)},342:function(e,t,n){var r=n(24)(!1);r.push([e.i,'.sessions-page{position:relative}.sessions-page p.sessions-page__what{font-size:2.9rem;font-style:italic;font-family:"Crimson Text",serif;margin-bottom:.3rem;font-weight:500}.sessions-page p.sessions-page__spacetime{font-size:2rem;font-family:"Crimson Text",serif;color:#545454}.sessions-page p.sessions-page__spacetime:not(:last-child){margin-bottom:0}.sessions-page p.sessions-page__spacetime:last-child{margin-bottom:3.5rem}.sessions-page__speakers-names{margin-bottom:3rem}.sessions-page__speakers-list{margin-top:5rem}.sessions-page__food-trucks{margin-top:3.5rem;text-align:center}.sessions-page__schedule--header-img,.sessions-page__schedule--jeopardy-header-img{margin-top:-3rem!important;margin-bottom:3rem!important}.sessions-page__schedule--jeopardy-header-img{-o-object-fit:none;object-fit:none;-o-object-position:left top;object-position:left top}.sessions-page__schedule--mohawk{position:absolute;top:-2.2rem;left:9.7rem}@media only screen and (max-width:51.875em){.sessions-page__schedule--jeopardy-header-img{min-height:44.7rem}}',""]),e.exports=r},353:function(e,t,n){"use strict";n.r(t);var r={props:{event:{type:Object,required:!0},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},computed:{cssVars:function(){return{"--dark":this.event.dark,"--med":this.event.med,"--light":this.event.light}}}},o=(n(339),n(9)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"events-page",style:e.cssVars},[r("content-prev-next",{attrs:{prev:e.prev,next:e.next}}),e._v(" "),r("div",{staticClass:"events-page__meta"},[r("p",{staticClass:"events-page__what"},[e._v(e._s(e.event.what))]),e._v(" "),r("p",{staticClass:"events-page__spacetime"},[e._v("\n      From: "+e._s(e.event.start)+" to "+e._s(e.event.end)+" on the\n      "+e._s(e.event.floor)+" floor\n      "),e.event.virtual?r("span",{staticClass:"events-page__virtual"},[r("br"),e._v("\n        and Virtual (ask in Slack for more info)")]):e._e()])]),e._v(" "),e.event.twitter?r("a",{staticClass:"events-page__twitter",attrs:{href:e.event.twitter}},[r("svg",[r("title",[e._v(e._s(e.event["twitter-text"])+" Twitter Profile")]),e._v(" "),r("use",{attrs:{"xlink:href":n(76)+"#icon-twitter"}})])]):e._e(),e._v(" "),r("h1",[e._v(e._s(e.event["full-title"]||e.event.title))]),e._v(" "),r("img",{staticClass:"center",attrs:{src:e.$router.options.base+"img/events/"+e.event.slug+"-show.png",alt:e.event.alt}}),e._v(" "),r("nuxt-content",{staticClass:"events-page__content",attrs:{document:e.event}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentPrevNext:n(292).default})},354:function(e,t,n){"use strict";n.r(t);n(34),n(42),n(61),n(77);var r={props:{session:{type:Object,required:!0},speakers:{type:Array,default:function(){return[]}},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},followedBy:{type:Object,default:function(){return null}},schedule:{type:Array,required:!0}},computed:{path:function(){return this.$route.path.substring(1)},currentThing:function(){var e=this;return this.schedule.filter((function(t){return e.pathIs(t.slug)}))[0]},sessionsPageClasses:function(){return{"sessions-page--schedule":this.isSchedule,"sessions-page--talk":this.isTalk,"sessions-page--game":this.isGame,"sessions-page--after-party":this.isAfterParty}},isTalk:function(){var e=this.session.what;return e.includes("Session")||e.includes("Keynote")},isSchedule:function(){return["announcement","break"].includes(this.session["session-type"])&&"Hacker Jeopardy"!==this.session.what},isGame:function(){return"Hacker Jeopardy"===this.session.what},isAfterParty:function(){return"after-party"===this.session["session-type"]},followedByPretty:function(){if(!this.followedBy)return"";var e=this.followedBy,a=["Break","Lunch Break"].includes(e.what)?"a":"";return"followed by ".concat(a," ").concat(e.mins," min ").concat(e.what," at ").concat(e.start)}},methods:{pathIs:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.includes(this.path)}}},o=r,l=(n(341),n(9)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sessions-page"},[n("content-prev-next",{attrs:{prev:e.prev,next:e.next}}),e._v(" "),e.isTalk?[n("div",{staticClass:"sessions-page__meta"},[n("p",{staticClass:"sessions-page__what"},[e._v(e._s(e.session.what))]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n        Starts: "+e._s(e.session.start)+", "+e._s(e.session.mins)+" mins in Fletcher Hall\n      ")]),e._v(" "),e.followedBy?n("p",{staticClass:"sessions-page__spacetime sessions-page__spacetime--followed-by"},[e._v("\n        "+e._s(e.followedByPretty)+"\n      ")]):e._e()]),e._v(" "),n("h1",[e._v(e._s(e.session.title))]),e._v(" "),n("content-speakers-list",{staticClass:"sessions-page__speakers-names",attrs:{speakers:e.speakers,link:"",preamble:"Presented by: "}}),e._v(" "),n("nuxt-content",{attrs:{document:e.session}}),e._v(" "),e.speakers.length>0?n("content-sessions-speakers",{staticClass:"sessions-page__speakers-list",attrs:{speakers:e.speakers}}):e._e()]:e.isGame?[n("img",{staticClass:"sessions-page__schedule--mohawk",attrs:{src:e.$router.options.base+"img/sessions/jeopardy-mohawk.png",alt:"Purple mowhawk"}}),e._v(" "),n("img",{staticClass:"sessions-page__schedule--jeopardy-header-img",attrs:{src:e.$router.options.base+"img/sessions/jeopardy-header.jpg",alt:"Hacker Jeopardy header"}}),e._v(" "),n("div",{staticClass:"sessions-page__meta"},[n("p",{staticClass:"sessions-page__what"},[e._v("Game time!")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n        Starts: "+e._s(e.session.start)+", "+e._s(e.session.mins)+" mins in Fletcher Hall\n      ")])]),e._v(" "),n("h1",[e._v(e._s(e.session.what))]),e._v(" "),n("content-speakers-list",{staticClass:"sessions-page__speakers-names",attrs:{speakers:e.speakers,link:"",preamble:"Presented by: "}}),e._v(" "),n("nuxt-content",{attrs:{document:e.session}}),e._v(" "),e.speakers.length>0?n("content-sessions-speakers",{staticClass:"sessions-page__speakers-list",attrs:{speakers:e.speakers}}):e._e()]:e.isSchedule?[n("div",{staticClass:"sessions-page__schedule"},[e.pathIs("opening")?[n("img",{staticClass:"sessions-page__schedule--header-img",attrs:{src:e.$router.options.base+"img/sessions/opening.png",alt:"Opening header"}})]:e.pathIs("closing")?[n("img",{staticClass:"sessions-page__schedule--header-img",attrs:{src:e.$router.options.base+"img/sessions/closing.png",alt:"Closing header"}})]:e.pathIs("prizes-etc")?[n("img",{staticClass:"sessions-page__schedule--header-img",attrs:{src:e.$router.options.base+"/img/sessions/prizes-etc.png",alt:"Prizes, Etc. header"}})]:e._e(),e._v(" "),n("p",{staticClass:"sessions-page__what"},[e._v(e._s(e.currentThing.what))]),e._v(" "),e.pathIs("opening")?[n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n          Doors open: 8:00\n        ")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n          Opening starts: "+e._s(e.session.start)+", "+e._s(e.session.mins)+" mins in\n          Fletcher Hall\n        ")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n          Opening remarks by Ashley Harrington, BSides RDU president\n        ")])]:e.pathIs("lunch-break")?[e._v("\n        🍜🥘🥡🥪"),n("span",{ref:"potato"},[e._v("🥔")]),e._v("🧆🍲\n        "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n          Lunch food trucks will be ouside the theatre\n        ")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime sessions-page__spacetime--followed-by"},[e._v("\n          from 11:00 AM to 2:00 PM\n        ")]),e._v(" "),n("div",{staticClass:"sessions-page__food-trucks"},[n("p",[n("a",{attrs:{href:"http://tysallnatural.com/menu/",rel:"nofollow noopener noreferrer",target:"_blank"}},[n("img",{attrs:{alt:"Ty's All Natural",src:e.$router.options.base+"img/food/tys-all-natural.png"}}),n("br"),e._v("Menu")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.mesasnc.com/",rel:"nofollow noopener noreferrer",target:"_blank"}},[n("img",{attrs:{alt:"Mesas El Salvador logo",src:e.$router.options.base+"img/food/mesas-el-salvador.png"}}),n("br"),e._v("Menu")])])])]:e.pathIs("closing")?[n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n          Starts: "+e._s(e.session.start)+", "+e._s(e.session.mins)+" mins in Fletcher\n          Hall\n        ")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n          Closing remarks from Ashley Harrington\n        ")])]:e.pathIs("prizes-etc")?[n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n          Starts: "+e._s(e.session.start)+", "+e._s(e.session.mins)+" mins in Fletcher\n          Hall\n        ")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n          Presentation of prizes and awards for events.\n        ")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("Silent auction winners.")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("You must be present to win.")])]:e._e()],2)]:e.isAfterParty?[n("img",{staticClass:"sessions-page__schedule--header-img",attrs:{src:e.$router.options.base+"img/sessions/hackers-header.png",alt:"Hackers header"}}),e._v(" "),n("p",{staticClass:"sessions-page__what"},[e._v("After Party")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("17:15 Dinner & Social Time")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("18:15 Screening of Hackers")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("20:15 Social Time / Clean Up")])]:e._e()],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentPrevNext:n(292).default,ContentSpeakersList:n(287).default,ContentSessionsSpeakers:n(316).default})},359:function(e,t,n){"use strict";var r=n(2),o=n(62),l=n(26),c=n(17),_=n(10),v=n(3),f=n(360),d=n(134),m=n(361),h=n(362),k=n(78),y=n(363),x=[],w=x.sort,C=v((function(){x.sort(void 0)})),j=v((function(){x.sort(null)})),O=d("sort"),$=!v((function(){if(k)return k<70;if(!(m&&m>3)){if(h)return!0;if(y)return y<603;var code,e,t,n,r="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)x.push({k:e+n,v:t})}for(x.sort((function(a,b){return b.v-a.v})),n=0;n<x.length;n++)e=x[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:C||!j||!O||!$},{sort:function(e){void 0!==e&&o(e);var t=l(this);if($)return void 0===e?w.call(t):w.call(t,e);var n,r,v=[],d=c(t.length);for(r=0;r<d;r++)r in t&&v.push(t[r]);for(v=f(v,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:_(t)>_(n)?1:-1}}(e)),n=v.length,r=0;r<n;)t[r]=v[r++];for(;r<d;)delete t[r++];return t}})},360:function(e,t){var n=Math.floor,r=function(e,t){var c=e.length,_=n(c/2);return c<8?o(e,t):l(r(e.slice(0,_),t),r(e.slice(_),t),t)},o=function(e,t){for(var element,n,r=e.length,i=1;i<r;){for(n=i,element=e[i];n&&t(e[n-1],element)>0;)e[n]=e[--n];n!==i++&&(e[n]=element)}return e},l=function(e,t,n){for(var r=e.length,o=t.length,l=0,c=0,_=[];l<r||c<o;)l<r&&c<o?_.push(n(e[l],t[c])<=0?e[l++]:t[c++]):_.push(l<r?e[l++]:t[c++]);return _};e.exports=r},361:function(e,t,n){var r=n(60).match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},362:function(e,t,n){var r=n(60);e.exports=/MSIE|Trident/.test(r)},363:function(e,t,n){var r=n(60).match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},378:function(e,t,n){"use strict";n.r(t);var r=n(21),o=n(22),l=n(95),c=n(7),_=(n(50),n(77),n(359),n(42),{scrollToTop:!0,asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,_,v,content,f,d,m,h,k,y,x,w,C,j,O,$,S;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.error,_=e.$content,v=e.route,h={},C=null,j=[],t.prev=4,t.next=7,_("sessions/".concat(v.path)).fetch();case 7:content=t.sent,f="session",d="sessions",m=["slug","what","title","session-type"],k="sort",h={slug:{$nin:["doors-open","break-1","break-2","screening-of-hackers","dinner-and-social-time","social-time-clean-up"]}},t.next=17;break;case 15:t.prev=15,t.t0=t.catch(4);case 17:return t.prev=17,t.next=20,_("events/".concat(v.path)).fetch();case 20:content=t.sent,f="event",d="events",m=["slug","short-title","title"],k="floor",t.next=29;break;case 27:t.prev=27,t.t1=t.catch(17);case 29:return t.prev=29,t.next=32,_(v.path.substring(1)).fetch();case 32:content=t.sent,f="content",t.next=38;break;case 36:t.prev=36,t.t2=t.catch(29);case 38:if(content||c({message:"Page not found"}),"session"!==f){t.next=51;break}return t.next=42,_("speakers").where({session:{$eq:content.slug}}).fetch();case 42:return w=t.sent,t.next=45,_("sessions").only([].concat(Object(l.a)(m),["start","mins"])).where({sort:{$gt:content.sort}}).sortBy("sort","asc").sortBy("what","asc").limit(1).fetch();case 45:return null!=(O=t.sent)&&O.length&&(C=O[0]),C&&!["break"].includes(C["session-type"])&&(C=null),t.next=50,_("sessions").only([].concat(Object(l.a)(m),["start","mins"])).where({"session-type":{$in:["break","announcement"]},slug:{$nin:["doors-open","hacker-jeopardy"]}}).sortBy("sort","asc").sortBy("what","asc").fetch();case 50:j=t.sent;case 51:return t.next=54,_(d).only(m).where(h).sortBy(k,"asc").sortBy("what","asc").surround(content.slug).fetch();case 54:return $=t.sent,S=Object(o.a)($,2),y=S[0],x=S[1],t.abrupt("return",(n={type:f},Object(r.a)(n,f,content),Object(r.a)(n,"prev",y),Object(r.a)(n,"next",x),Object(r.a)(n,"speakers",w||[]),Object(r.a)(n,"followedBy",C||null),Object(r.a)(n,"schedule",j),n));case 59:case"end":return t.stop()}}),t,null,[[4,15],[17,27],[29,36]])})))()}}),v=n(9),component=Object(v.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-section",["event"===e.type?n("content-events-page",{attrs:{event:e.event,prev:e.prev,next:e.next}}):"session"===e.type?n("content-sessions-page",{attrs:{session:e.session,speakers:e.speakers,prev:e.prev,next:e.next,"followed-by":e.followedBy,schedule:e.schedule}}):[n("nuxt-content",{attrs:{document:e.content}})]],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentEventsPage:n(353).default,ContentSessionsPage:n(354).default,ContentSection:n(194).default})}}]);