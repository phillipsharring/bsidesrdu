(window.webpackJsonp=window.webpackJsonp||[]).push([[13,17],{270:function(e,t,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("e4ef33ae",content,!0,{sourceMap:!1})},276:function(e,t,n){"use strict";n(270)},277:function(e,t,n){var r=n(24)(!1);r.push([e.i,"",""]),e.exports=r},278:function(e,t,n){"use strict";n.r(t);var r={props:{speaker:{type:Object,required:!0}},computed:{valid:function(){return"ashley-harrington"!==this.speaker.slug}}},l=(n(276),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speakers-single"},[e._v("\n  "+e._s(e.speaker.name)+"\n  "),e.valid?n("img",{staticClass:"speakers-single__img",attrs:{src:"/img/speakers/"+e.speaker.slug+"-md.jpg"}}):e._e(),e._v(" "),e.valid?n("div",{staticClass:"speakers-single__bio"},[n("nuxt-content",{attrs:{document:e.speaker}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports},280:function(e,t,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("28373338",content,!0,{sourceMap:!1})},299:function(e,t,n){"use strict";n(280)},300:function(e,t,n){var r=n(24)(!1);r.push([e.i,"",""]),e.exports=r},304:function(e,t,n){"use strict";n.r(t);var r={props:{speakers:{type:Array,required:!0}}},l=(n(299),n(8)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"session-speakers"},e._l(e.speakers,(function(e){return n("content-speakers-single",{key:e.slug,attrs:{speaker:e}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentSpeakersSingle:n(278).default})}}]);