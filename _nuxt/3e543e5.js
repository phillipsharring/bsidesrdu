(window.webpackJsonp=window.webpackJsonp||[]).push([[14,11,13,15,17],{269:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("5355bb68",content,!0,{sourceMap:!1})},270:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("e4ef33ae",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";n.r(e);var r={props:["time","mins"]},l=(n(272),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"time-mins"},[n("div",{staticClass:"time-mins__time"},[t._v(t._s(t.time))]),t._v(" "),t.mins?n("div",{staticClass:"time-mins__mins"},[t._v("\n    "+t._s(t.mins)+" "),n("span",{staticClass:"time-mins__label"},[t._v("mins")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n(269)},273:function(t,e,n){var r=n(24)(!1);r.push([t.i,".time-mins{height:100%;margin-top:0;display:flex;flex-direction:column;justify-content:center;font-size:1.7rem;width:8rem}.time-mins div{text-align:center;width:8rem;white-space:nowrap}.time-mins__time{font-size:2.2rem}.time-mins__label{font-size:1.5rem}",""]),t.exports=r},274:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("bc29e130",content,!0,{sourceMap:!1})},276:function(t,e,n){"use strict";n(270)},277:function(t,e,n){var r=n(24)(!1);r.push([t.i,"",""]),t.exports=r},278:function(t,e,n){"use strict";n.r(e);var r={props:{speaker:{type:Object,required:!0}},computed:{valid:function(){return"ashley-harrington"!==this.speaker.slug}}},l=(n(276),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"speakers-single"},[t._v("\n  "+t._s(t.speaker.name)+"\n  "),t.valid?n("img",{staticClass:"speakers-single__img",attrs:{src:"/img/speakers/"+t.speaker.slug+"-md.jpg"}}):t._e(),t._v(" "),t.valid?n("div",{staticClass:"speakers-single__bio"},[n("nuxt-content",{attrs:{document:t.speaker}})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("28373338",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n(274)},283:function(t,e,n){var r=n(24)(!1);r.push([t.i,".sessions-modal{height:100vh;width:100vw;position:fixed;top:0;left:0;background-color:rgba(31,31,31,.5);z-index:999;opacity:0;visibility:hidden;transition:all .3s}",""]),t.exports=r},286:function(t,e,n){"use strict";n.r(e);var r={props:{slug:{type:String,required:!0}}},l=(n(282),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sessions-modal",attrs:{id:t.slug}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("da535c30",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n(280)},300:function(t,e,n){var r=n(24)(!1);r.push([t.i,"",""]),t.exports=r},304:function(t,e,n){"use strict";n.r(e);var r={props:{speakers:{type:Array,required:!0}}},l=(n(299),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"session-speakers"},t._l(t.speakers,(function(t){return n("content-speakers-single",{key:t.slug,attrs:{speaker:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentSpeakersSingle:n(278).default})},316:function(t,e,n){"use strict";n(298)},317:function(t,e,n){var r=n(24)(!1);r.push([t.i,".talk{position:relative;width:100%;display:flex;justify-content:flex-start;align-items:center}.talk__time-mins{width:8rem;flex:0}.talk__what{max-width:56%;margin-left:1.5rem;margin-right:auto}.talk__what h5{font-weight:400;margin-bottom:.7rem;font-style:italic;font-family:serif;font-size:1.8rem}.talk__what h4{margin-bottom:0!important;font-weight:400;font-size:2.2rem;line-height:3.5rem}.talk__speakers{font-size:1.5rem;width:16rem;text-align:right}@media only screen and (max-width:51.875em){.talk__what{margin:.5rem 0 0;max-width:76%;width:100%}.talk__what h5{position:absolute;top:-.2rem;left:8rem;right:0;margin:0;font-size:1.5rem}.talk__what h4{font-size:1.6rem;line-height:2.4rem;margin-top:1.3rem;margin-bottom:2.5rem!important}.talk__speakers{position:absolute;text-align:left;bottom:0;left:8rem;right:0;width:auto;font-size:1.3rem}}",""]),t.exports=r},325:function(t,e,n){"use strict";n.r(e);var r={props:{session:{type:Object,required:!0},speakers:{type:Array,default:function(){return[]}}}},l=(n(316),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talk"},[n("content-sessions-time-mins",{staticClass:"talk__time-mins",attrs:{time:t.session.start,mins:t.session.mins}}),t._v(" "),n("div",{staticClass:"talk__what"},[n("h5",[t._v(t._s(t.session.what))]),t._v(" "),n("h4",[t._v(t._s(t.session.talk))])]),t._v(" "),n("div",{staticClass:"talk__speakers"},t._l(t.session.speakers,(function(e,i){return n("span",{key:e.slug},[t._v(t._s(e.name)+"\n      "),t.session.speakers.length>1&&0===i?n("span",[t._v("& ")]):t._e()])})),0),t._v(" "),n("content-sessions-modal",{attrs:{slug:t.session.slug}},[n("h4",[t._v(t._s(t.session.what))]),t._v("\n    "+t._s(t.session.description)+"\n    "),n("nuxt-content",{attrs:{document:t.session}}),t._v(" "),t.speakers.length>0?n("content-sessions-speakers",{attrs:{speakers:t.speakers}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentSessionsTimeMins:n(271).default,ContentSessionsSpeakers:n(304).default,ContentSessionsModal:n(286).default})}}]);