(window.webpackJsonp=window.webpackJsonp||[]).push([[0,10,11,12,16,17,18],{269:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("5355bb68",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";n.r(e);var r={props:["time","mins"]},o=(n(271),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"time-mins"},[n("div",{staticClass:"time-mins__time"},[t._v(t._s(t.time))]),t._v(" "),t.mins?n("div",{staticClass:"time-mins__mins"},[t._v("\n    "+t._s(t.mins)+" "),n("span",{staticClass:"time-mins__label"},[t._v("mins")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n(269)},272:function(t,e,n){var r=n(24)(!1);r.push([t.i,".time-mins{height:100%;margin-top:0;display:flex;flex-direction:column;justify-content:center;font-size:1.7rem;width:8rem}.time-mins div{text-align:center;width:8rem;white-space:nowrap}.time-mins__time{font-size:2.2rem}.time-mins__label{font-size:1.5rem}",""]),t.exports=r},279:function(t,e,n){"use strict";n.r(e);var r={props:{speakers:{type:Array,default:function(){return[]}},link:{type:Boolean,default:!1},preamble:{type:String,default:""}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"speakers-list"},[t.preamble&&t.speakers.length>0?n("span",[t._v(t._s(t.preamble))]):t._e(),t._v(" "),t._l(t.speakers,(function(e,i){return n("span",{key:e.slug},[t.link?[n("a",{attrs:{href:"#"+e.slug}},[t._v(t._s(e.name))])]:[t._v("\n      "+t._s(e.name)+"\n    ")],t._v(" "),t.speakers.length>1&&i<t.speakers.length-1?n("span",[t._v("& ")]):t._e()],2)}))],2)}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("534ec328",content,!0,{sourceMap:!1})},294:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("4b0ee6de",content,!0,{sourceMap:!1})},295:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("8021d870",content,!0,{sourceMap:!1})},296:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("da535c30",content,!0,{sourceMap:!1})},313:function(t,e,n){"use strict";n(293)},314:function(t,e,n){var r=n(24)(!1);r.push([t.i,".break{width:100%}.break>a,.break>a:visited{color:#f6f6f6}.break>a:hover,.break>a:visited:hover{text-decoration:none;border-bottom:2px solid transparent}.break--linked>a,.break--non-linked{padding:1.2rem 0;position:relative;width:100%;display:flex;justify-content:flex-start;align-items:center}.break__what{position:relative;margin:auto;left:-4rem}.break__what h4{font-size:2.7rem;font-weight:500;margin-bottom:0!important}",""]),t.exports=r},315:function(t,e,n){"use strict";n(294)},316:function(t,e,n){var r=n(24)(!1);r.push([t.i,".announcement{width:100%}.announcement>a{padding:1.2rem 1rem 1.2rem 0;position:relative;display:flex;width:100%;justify-content:flex-start;align-items:center;border-bottom:none;color:inherit!important}.announcement>a:hover{text-decoration:none;border-bottom:none}.announcement__what{margin-left:1.5rem;margin-right:auto}.announcement__what h4{margin-bottom:0!important;font-weight:500;font-size:2.2rem;line-height:3.5rem}.announcement__speakers{font-size:1.5rem;width:16rem;text-align:right}@media only screen and (max-width:51.875em){.announcement__what{position:absolute;top:.3rem;left:8rem;margin:.5rem 0 0}.announcement__what h4{font-size:2.2rem;line-height:3.3rem}.announcement__speakers{position:absolute;text-align:left;bottom:1.3rem;left:8rem}}",""]),t.exports=r},317:function(t,e,n){"use strict";n(295)},318:function(t,e,n){var r=n(24)(!1);r.push([t.i,".after-hours{position:relative;width:100%;display:flex;justify-content:flex-start;align-items:flex-start}.after-hours__what{position:relative;margin:.5rem auto auto;left:-4rem}.after-hours__what h4{font-size:2.7rem;font-weight:500;margin-bottom:0!important}@media only screen and (max-width:51.875em){.after-hours__what{position:static;margin:.5rem 0 0;left:0}.after-hours__what h4{font-size:2.2rem}}",""]),t.exports=r},319:function(t,e,n){"use strict";n(296)},320:function(t,e,n){var r=n(24)(!1);r.push([t.i,'.talk,.talk>a{width:100%}.talk>a{padding:1.2rem 1rem 1.2rem 0;position:relative;display:flex;justify-content:flex-start;align-items:center;border-bottom:none;color:inherit!important}.talk>a:hover{text-decoration:none;border-bottom:none}.talk__time-mins{width:8rem;flex:0}.talk__what{max-width:56%;margin-left:1.5rem;margin-right:auto}.talk__what h5{font-weight:400;margin-bottom:.7rem;font-style:italic;font-family:"Crimson Text",serif;font-size:1.8rem}.talk__what h4{margin-bottom:0!important;font-weight:500;font-size:2.2rem;line-height:3.5rem}.talk__speakers{font-size:1.5rem;width:16rem;text-align:right}@media only screen and (max-width:51.875em){.talk__what{margin:.5rem 0 0;max-width:76%;width:100%}.talk__what h5{position:absolute;top:.9rem;left:8rem;right:0;margin:0;font-size:1.5rem}.talk__what h4{font-size:1.6rem;line-height:2.4rem;margin-top:1.3rem;margin-bottom:2.5rem!important}.talk__speakers{position:absolute;text-align:left;bottom:1rem;left:8rem;right:0;width:auto;font-size:1.3rem}}',""]),t.exports=r},325:function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("4fdd89c0",content,!0,{sourceMap:!1})},328:function(t,e,n){"use strict";n.r(e);var r={props:{session:{type:Object,required:!0}},computed:{isBreak:function(){return"break"===this.session["session-type"]},isAnnouncement:function(){return"announcement"===this.session["session-type"]},isAfterParty:function(){return"after-party"===this.session["session-type"]},sessionClasses:function(){return{"session--break":this.isBreak,"session--announcement":this.isAnnouncement,"session--after-party":this.isAfterParty}}}},o=(n(336),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"session",class:t.sessionClasses},[t.isBreak?n("content-sessions-break",{attrs:{session:t.session}}):t.isAnnouncement?n("content-sessions-announcement",{attrs:{session:t.session}}):t.isAfterParty?n("content-sessions-after-hours",{attrs:{session:t.session}}):n("content-sessions-talk",{attrs:{session:t.session}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentSessionsBreak:n(329).default,ContentSessionsAnnouncement:n(330).default,ContentSessionsAfterHours:n(331).default,ContentSessionsTalk:n(332).default})},329:function(t,e,n){"use strict";n.r(e);var r={props:{session:{type:Object,required:!0}}},o=(n(313),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"break"},["lunch-break"!==t.session.slug?n("div",{staticClass:"break break--non-linked"},[n("content-sessions-time-mins",{staticClass:"break__time-mins",attrs:{time:t.session.start,mins:t.session.mins}}),t._v(" "),n("div",{staticClass:"break__what"},[n("h4",[t._v(t._s(t.session.what))])])],1):n("div",{staticClass:"break break--linked"},[n("nuxt-link",{attrs:{to:t.session.slug}},[n("content-sessions-time-mins",{staticClass:"break__time-mins",attrs:{time:t.session.start,mins:t.session.mins}}),t._v(" "),n("div",{staticClass:"break__what"},[n("h4",[t._v("\n          🍜🥘🥡\n          "+t._s(t.session.what)+"\n          🥪🧆🍲\n        ")])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentSessionsTimeMins:n(270).default})},330:function(t,e,n){"use strict";n.r(e);var r={props:{session:{type:Object,required:!0},speakers:{type:Array,default:function(){return[]}}}},o=(n(315),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"announcement"},[n("nuxt-link",{attrs:{to:t.session.slug}},[n("content-sessions-time-mins",{staticClass:"announcement__time-mins",attrs:{time:t.session.start,mins:t.session.mins}}),t._v(" "),n("div",{staticClass:"announcement__what"},[n("h4",[t._v(t._s(t.session.what))])]),t._v(" "),n("div",{staticClass:"announcement__speakers"},t._l(t.session.speakers,(function(e){return n("span",{key:e.slug},[t._v(t._s(e.name))])})),0)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentSessionsTimeMins:n(270).default})},331:function(t,e,n){"use strict";n.r(e);var r={props:{session:{type:Object,required:!0}}},o=(n(317),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"after-hours"},[n("content-sessions-time-mins",{staticClass:"after-hours__time-mins",attrs:{time:t.session.start,mins:t.session.mins}}),t._v(" "),n("div",{staticClass:"after-hours__what"},[n("h4",[t._v(t._s(t.session.what))])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentSessionsTimeMins:n(270).default})},332:function(t,e,n){"use strict";n.r(e);var r={props:{session:{type:Object,required:!0},speakers:{type:Array,default:function(){return[]}}}},o=(n(319),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talk"},[n("nuxt-link",{attrs:{to:t.session.slug}},[n("content-sessions-time-mins",{staticClass:"talk__time-mins",attrs:{time:t.session.start,mins:t.session.mins}}),t._v(" "),n("div",{staticClass:"talk__what"},[n("h5",[t._v(t._s(t.session.what))]),t._v(" "),n("h4",[t._v(t._s(t.session.title))])]),t._v(" "),n("content-speakers-list",{staticClass:"talk__speakers",attrs:{speakers:t.session.speakers}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentSessionsTimeMins:n(270).default,ContentSpeakersList:n(279).default})},336:function(t,e,n){"use strict";n(325)},337:function(t,e,n){var r=n(24)(!1);r.push([t.i,".session{border-radius:1.3rem;margin-bottom:1rem;display:flex;flex-direction:row}",""]),t.exports=r}}]);