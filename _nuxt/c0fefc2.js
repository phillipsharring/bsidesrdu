(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9,15,18,19],{273:function(e,t,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("f62d6292",content,!0,{sourceMap:!1})},274:function(e,t,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("e4ef33ae",content,!0,{sourceMap:!1})},278:function(e,t,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("28373338",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";n.r(t);var r={props:{speakers:{type:Array,default:function(){return[]}},link:{type:Boolean,default:!1},preamble:{type:String,default:""}}},l=n(8),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speakers-list"},[e.preamble&&e.speakers.length>0?n("span",[e._v(e._s(e.preamble))]):e._e(),e._v(" "),e._l(e.speakers,(function(t,i){return n("span",{key:t.slug},[e.link?[n("a",{attrs:{href:"#"+t.slug}},[e._v(e._s(t.name))])]:[e._v("\n      "+e._s(t.name)+"\n    ")],e._v(" "),e.speakers.length>1&&i<e.speakers.length-1?n("span",[e._v("& ")]):e._e()],2)}))],2)}),[],!1,null,null,null);t.default=component.exports},280:function(e,t,n){"use strict";n(273)},281:function(e,t,n){var r=n(24)(!1);r.push([e.i,".prev-next{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1rem;border-radius:1.2rem;background-color:#ccc;background-image:linear-gradient(180deg,#cacaca,#ddd);margin-bottom:3.5rem;font-size:1.6rem}",""]),e.exports=r},282:function(e,t,n){"use strict";n(274)},283:function(e,t,n){var r=n(24)(!1);r.push([e.i,".speakers-single{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;background-color:#ccc;background-image:linear-gradient(180deg,#ddd,#eee);padding:3.5rem}.speakers-single__img{display:block;padding-right:3.5rem}.speakers-single__img--sq{display:none}.speakers-single__bio{font-size:1.8rem}@media only screen and (max-width:51.875em){.speakers-single{flex-direction:column}.speakers-single:first-child{margin-bottom:3.5rem}.speakers-single__img{display:none}.speakers-single__img--sq{display:block}}",""]),e.exports=r},284:function(e,t,n){"use strict";n.r(t);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=(n(280),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"prev-next"},[n("div",{staticClass:"prev-next__prev"},[e.prev?n("span",{domProps:{innerHTML:e._s("&laquo;")}}):e._e(),e._v(" "),e.prev?n("nuxt-link",{attrs:{to:e.prev.slug,alt:"`${prev.title}`"}},[e._v(e._s(e.prev["short-title"]||e.prev.what))]):e._e()],1),e._v(" "),n("div",{staticClass:"prev-next__next"},[e.next?n("nuxt-link",{attrs:{to:e.next.slug,alt:"`${next.title}`"}},[e._v(e._s(e.next["short-title"]||e.next.what))]):e._e(),e._v(" "),e.next?n("span",{domProps:{innerHTML:e._s("&raquo;")}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports},285:function(e,t,n){"use strict";n.r(t);var r={props:{speaker:{type:Object,required:!0}},computed:{valid:function(){return"ashley-harrington"!==this.speaker.slug}}},l=(n(282),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speakers-single",attrs:{id:e.speaker.slug}},[e._v("\n  "+e._s(e.speaker.speaker)+"\n  "),e.valid?n("img",{staticClass:"speakers-single__img",attrs:{alt:"Picture of "+e.speaker.speaker,src:"/img/speakers/"+e.speaker.slug+"-md.jpg"}}):e._e(),e._v(" "),e.valid?n("img",{staticClass:"speakers-single__img--sq",attrs:{alt:"Picture of "+e.speaker.speaker,src:"/img/speakers/"+e.speaker.slug+"-sq.jpg"}}):e._e(),e._v(" "),e.valid?n("div",{staticClass:"speakers-single__bio"},[n("h4",[e._v(e._s(e.speaker.name))]),e._v(" "),n("nuxt-content",{attrs:{document:e.speaker}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports},302:function(e,t,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("0ab4066e",content,!0,{sourceMap:!1})},303:function(e,t,n){"use strict";n(278)},304:function(e,t,n){var r=n(24)(!1);r.push([e.i,".session-speakers :not(:last-child){margin-bottom:3.5rem}",""]),e.exports=r},308:function(e,t,n){"use strict";n.r(t);var r={props:{speakers:{type:Array,required:!0}}},l=(n(303),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"session-speakers"},e._l(e.speakers,(function(e){return n("content-speakers-single",{key:e.slug,attrs:{speaker:e}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentSpeakersSingle:n(285).default})},323:function(e,t,n){"use strict";n(302)},324:function(e,t,n){var r=n(24)(!1);r.push([e.i,'.sessions-page p.sessions-page__what{font-size:2.9rem;font-style:italic;font-family:"Crimson Text",serif;margin-bottom:.3rem;font-weight:500}.sessions-page p.sessions-page__spacetime{font-size:2rem;font-family:"Crimson Text",serif;color:#545454}.sessions-page p.sessions-page__spacetime:not(:last-child){margin-bottom:0}.sessions-page p.sessions-page__spacetime:last-child{margin-bottom:3.5rem}.sessions-page__speakers-names{margin-bottom:3rem}.sessions-page__speakers-list{margin-top:5rem}.sessions-page__food-trucks{margin-top:3.5rem;text-align:center}.sessions-page .🐇{display:inline-block;float:right;width:2.6rem;height:2.6rem;text-align:right;font-size:2rem}.sessions-page .🐇>.🥚{visibility:hidden}.sessions-page .🐇:active>.🥚,.sessions-page .🐇:hover>.🥚{visibility:visible}',""]),e.exports=r},335:function(e,t,n){"use strict";n.r(t);n(35),n(41),n(59),n(71);var r={props:{session:{type:Object,required:!0},speakers:{type:Array,default:function(){return[]}},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},followedBy:{type:Object,default:function(){return null}},schedule:{type:Array,required:!0}},computed:{path:function(){return this.$route.path.substring(1)},currentThing:function(){var e=this;return this.schedule.filter((function(t){return e.pathIs(t.slug)}))[0]},sessionsPageClasses:function(){return{"sessions-page--schedule":this.isSchedule,"sessions-page--talk":this.isTalk,"sessions-page--game":this.isGame,"sessions-page--after-party":this.isAfterParty}},isTalk:function(){var e=this.session.what;return e.includes("Session")||e.includes("Keynote")},isSchedule:function(){return["announcement","break"].includes(this.session["session-type"])&&"Hacker Jeopardy"!==this.session.what},isGame:function(){return"Hacker Jeopardy"===this.session.what},isAfterParty:function(){return"after-party"===this.session["session-type"]},followedByPretty:function(){if(!this.followedBy)return"";var e=this.followedBy,a=["Break","Lunch Break"].includes(e.what)?"a":"";return"followed by ".concat(a," ").concat(e.mins," min ").concat(e.what," at ").concat(e.start)}},methods:{pathIs:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.includes(this.path)}}},l=(n(323),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sessions-page"},[n("content-prev-next",{attrs:{prev:e.prev,next:e.next}}),e._v(" "),e.isTalk?[n("div",{staticClass:"sessions-page__meta"},[n("p",{staticClass:"sessions-page__what"},[e._v(e._s(e.session.what))]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n        Starts: "+e._s(e.session.start)+", "+e._s(e.session.mins)+" mins in Fletcher Hall\n      ")]),e._v(" "),e.followedBy?n("p",{staticClass:"sessions-page__spacetime sessions-page__spacetime--followed-by"},[e._v("\n        "+e._s(e.followedByPretty)+"\n      ")]):e._e()]),e._v(" "),n("h1",[e._v(e._s(e.session.title))]),e._v(" "),n("content-speakers-list",{staticClass:"sessions-page__speakers-names",attrs:{speakers:e.speakers,link:"",preamble:"Presented by: "}}),e._v(" "),n("nuxt-content",{attrs:{document:e.session}}),e._v(" "),e.speakers.length>0?n("content-sessions-speakers",{staticClass:"sessions-page__speakers-list",attrs:{speakers:e.speakers}}):e._e()]:e.isGame?[n("div",{staticClass:"sessions-page__meta"},[n("p",{staticClass:"sessions-page__what"},[e._v("Game time!")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n        Starts: "+e._s(e.session.start)+", "+e._s(e.session.mins)+" mins in Fletcher Hall\n      ")])]),e._v(" "),n("h1",[e._v(e._s(e.session.what))]),e._v(" "),n("content-speakers-list",{staticClass:"sessions-page__speakers-names",attrs:{speakers:e.speakers,link:"",preamble:"Presented by: "}}),e._v(" "),n("nuxt-content",{attrs:{document:e.session}}),e._v(" "),e.speakers.length>0?n("content-sessions-speakers",{staticClass:"sessions-page__speakers-list",attrs:{speakers:e.speakers}}):e._e()]:e.isSchedule?[n("div",{staticClass:"sessions-page__schedule"},[n("p",{staticClass:"sessions-page__what"},[e._v(e._s(e.currentThing.what))]),e._v(" "),e.pathIs("lunch-break")?[e._v("\n        🍜🥘🥡🥪"),n("span",{ref:"potato"},[e._v("🥔")]),e._v("🧆🍲\n        "),n("p",{staticClass:"sessions-page__spacetime"},[e._v("\n          Lunch food trucks will be ouside the theatre\n        ")]),e._v(" "),n("p",{staticClass:"sessions-page__spacetime sessions-page__spacetime--followed-by"},[e._v("\n          from 11:00 AM to 2:00 PM\n        ")]),e._v(" "),e._m(0)]:e._e()],2)]:e.isAfterParty?[n("p",{staticClass:"sessions-page__what"},[e._v("After Party")])]:e._e()],2)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sessions-page__food-trucks"},[n("p",[n("a",{attrs:{href:"http://tysallnatural.com/menu/",rel:"nofollow noopener noreferrer",target:"_blank"}},[n("img",{attrs:{alt:"Ty's All Natural",src:"/img/food/tys-all-natural.png"}}),n("br"),e._v("Menu")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.mesasnc.com/",rel:"nofollow noopener noreferrer",target:"_blank"}},[n("img",{attrs:{alt:"Mesas El Salvador logo",src:"/img/food/mesas-el-salvador.png"}}),n("br"),e._v("Menu")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentPrevNext:n(284).default,ContentSpeakersList:n(279).default,ContentSessionsSpeakers:n(308).default})}}]);