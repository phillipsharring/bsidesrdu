(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9,15,18,19],{274:function(e,t,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("f62d6292",content,!0,{sourceMap:!1})},275:function(e,t,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("e4ef33ae",content,!0,{sourceMap:!1})},280:function(e,t,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("28373338",content,!0,{sourceMap:!1})},281:function(e,t,n){"use strict";n.r(t);var r={props:{speakers:{type:Array,default:function(){return[]}},link:{type:Boolean,default:!1},preamble:{type:String,default:""}}},l=n(8),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speakers-list"},[e._v("\n  "+e._s(e.preamble)+"\n  "),e._l(e.speakers,(function(t,i){return n("span",{key:t.slug},[e.link?[n("a",{attrs:{href:"#"+t.slug}},[e._v(e._s(t.name))])]:[e._v("\n      "+e._s(t.name)+"\n    ")],e._v(" "),e.speakers.length>1&&i<e.speakers.length-1?n("span",[e._v("& ")]):e._e()],2)}))],2)}),[],!1,null,null,null);t.default=component.exports},283:function(e,t,n){"use strict";n(274)},284:function(e,t,n){var r=n(24)(!1);r.push([e.i,".prev-next{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1rem;border-radius:1.5rem;background-color:#ccc;background-image:linear-gradient(180deg,#c7c7c7,#ddd);margin-bottom:3.5rem;font-size:1.6rem}",""]),e.exports=r},285:function(e,t,n){"use strict";n(275)},286:function(e,t,n){var r=n(24)(!1);r.push([e.i,".speakers-single{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;background-color:#ccc;background-image:linear-gradient(180deg,#ddd,#eee);padding:3.5rem}.speakers-single__img{display:block;padding-right:3.5rem}.speakers-single__img--sq{display:none}.speakers-single__bio{font-size:1.8rem}@media only screen and (max-width:51.875em){.speakers-single{flex-direction:column}.speakers-single:first-child{margin-bottom:3.5rem}.speakers-single__img{display:none}.speakers-single__img--sq{display:block}}",""]),e.exports=r},287:function(e,t,n){"use strict";n.r(t);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=(n(283),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"prev-next"},[n("div",{staticClass:"prev-next__prev"},[e.prev?n("span",{domProps:{innerHTML:e._s("&laquo;")}}):e._e(),e._v(" "),e.prev?n("nuxt-link",{attrs:{to:e.prev.slug,alt:"`${prev.title}`"}},[e._v(e._s(e.prev.what||e.prev.title))]):e._e()],1),e._v(" "),n("div",{staticClass:"prev-next__next"},[e.next?n("nuxt-link",{attrs:{to:e.next.slug,alt:"`${next.title}`"}},[e._v(e._s(e.next.what||e.next.title))]):e._e(),e._v(" "),e.next?n("span",{domProps:{innerHTML:e._s("&raquo;")}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports},288:function(e,t,n){"use strict";n.r(t);var r={props:{speaker:{type:Object,required:!0}},computed:{valid:function(){return"ashley-harrington"!==this.speaker.slug}}},l=(n(285),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speakers-single",attrs:{id:e.speaker.slug}},[e._v("\n  "+e._s(e.speaker.speaker)+"\n  "),e.valid?n("img",{staticClass:"speakers-single__img",attrs:{alt:"Picture of "+e.speaker.speaker,src:"/img/speakers/"+e.speaker.slug+"-md.jpg"}}):e._e(),e._v(" "),e.valid?n("img",{staticClass:"speakers-single__img--sq",attrs:{alt:"Picture of "+e.speaker.speaker,src:"/img/speakers/"+e.speaker.slug+"-sq.jpg"}}):e._e(),e._v(" "),e.valid?n("div",{staticClass:"speakers-single__bio"},[n("h4",[e._v(e._s(e.speaker.name))]),e._v(" "),n("nuxt-content",{attrs:{document:e.speaker}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports},302:function(e,t,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("0ab4066e",content,!0,{sourceMap:!1})},303:function(e,t,n){"use strict";n(280)},304:function(e,t,n){var r=n(24)(!1);r.push([e.i,".session-speakers :not(:last-child){margin-bottom:3.5rem}",""]),e.exports=r},307:function(e,t,n){"use strict";n.r(t);var r={props:{speakers:{type:Array,required:!0}}},l=(n(303),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"session-speakers"},e._l(e.speakers,(function(e){return n("content-speakers-single",{key:e.slug,attrs:{speaker:e}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentSpeakersSingle:n(288).default})},320:function(e,t,n){"use strict";n(302)},321:function(e,t,n){var r=n(24)(!1);r.push([e.i,".sessions-page h2{font-size:2.8rem;font-style:italic;font-family:serif}.sessions-page__speakers-names{margin-bottom:3rem}.sessions-page__speakers-list{margin-top:5rem}",""]),e.exports=r},332:function(e,t,n){"use strict";n.r(t);var r={props:{session:{type:Object,required:!0},speakers:{type:Array,default:function(){return[]}},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},followedBy:{type:Object,default:function(){return null}}}},l=(n(320),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sessions-page"},[n("content-prev-next",{attrs:{prev:e.prev,next:e.next}}),e._v(" "),n("h2",[e._v(e._s(e.session.what))]),e._v(" "),n("h1",[e._v(e._s(e.session.title))]),e._v(" "),n("content-speakers-list",{staticClass:"sessions-page__speakers-names",attrs:{speakers:e.speakers,link:"",preamble:"Presented by: "}}),e._v(" "),n("nuxt-content",{attrs:{document:e.session}}),e._v(" "),e.speakers.length>0?n("content-sessions-speakers",{staticClass:"sessions-page__speakers-list",attrs:{speakers:e.speakers}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentPrevNext:n(287).default,ContentSpeakersList:n(281).default,ContentSessionsSpeakers:n(307).default})}}]);