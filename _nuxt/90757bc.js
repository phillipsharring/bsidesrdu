(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{294:function(e,n,o){var content=o(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("64038efe",content,!0,{sourceMap:!1})},308:function(e,n,o){"use strict";o(294)},309:function(e,n,o){var r=o(24)(!1);r.push([e.i,'.sessions{font-size:1.8rem;margin-bottom:3rem;position:relative}.sessions:before{content:"";position:absolute;top:-2px;left:0;display:block;height:2.6rem;width:100%;height:15px;background-color:#777;border-top-right-radius:1.3rem;border-top-left-radius:1.3rem;z-index:1}.sessions__header{position:relative;z-index:2;border-radius:1.3rem;margin-bottom:1rem;background-image:url(/img/sessions/bsides-opening.jpg);background-size:cover;background-position:50% 50%;color:#1f1f1f;padding:1.2rem .4rem;font-weight:700;font-style:italic;text-align:center;font-size:3.2rem}.sessions #session-2{background-image:linear-gradient(180deg,#e7ab3c,#fad670)}.sessions #session-3{background-image:linear-gradient(180deg,#e0e9ae,#bae7cf)}.sessions #session-4{background-image:linear-gradient(180deg,#8cd9d6,#5cc1da)}.sessions #session-6{background-image:linear-gradient(180deg,#2f96d7,#1357ab)}.sessions #session-7{background-image:linear-gradient(180deg,#032cb6,#2d249a)}.sessions #session-9{background-image:linear-gradient(180deg,#4c1e84,#71166c)}.sessions #session-10{background-image:linear-gradient(180deg,#71166c,#aa183d)}.sessions #session-11{background-image:linear-gradient(180deg,#aa183d,#781f37)}.sessions #session-13{background-image:linear-gradient(180deg,#ac3a62,#7e285f)}.sessions #session-14{background-image:linear-gradient(180deg,#76246f,#3f203d)}.sessions #session-1,.sessions #session-5,.sessions #session-8,.sessions #session-12{background-color:#151411;background-image:url(/img/sessions/breaks.jpg);background-size:cover;background-position:50% 50%;color:#f6f6f6}.sessions #session-1,.sessions #session-5,.sessions #session-6,.sessions #session-7,.sessions #session-8,.sessions #session-9,.sessions #session-10,.sessions #session-11,.sessions #session-12,.sessions #session-13,.sessions #session-14{color:#f6f6f6;background-color:#151411}.sessions #session-15,.sessions #session-16,.sessions #session-17,.sessions #session-18,.sessions #session-19,.sessions #session-20,.sessions #session-21{background-size:cover;background-position:50% 50%;color:#f6f6f6;background-color:#151411}.sessions #session-15{background-image:url(/img/sessions/bsides-closing.jpg)}.sessions #session-16{background-image:url(/img/sessions/jeopardy.jpg)}.sessions #session-17{background-image:url(/img/sessions/rubber-duckies.jpg)}.sessions #session-18{background-image:url(/img/sessions/after-party.jpg)}.sessions #session-19{background-image:url(/img/sessions/welcome-to-moes.jpg)}.sessions #session-20{background-image:url(/img/sessions/hackers.jpg)}.sessions #session-21{background-image:url(/img/sessions/closing-time.jpg)}',""]),e.exports=r},320:function(e,n,o){"use strict";o.r(n);var r={props:{sessions:{type:Object,required:!0}},computed:{schedule:function(){var e;return null!==(e=this.sessions.schedule)&&void 0!==e?e:[]},speakers:function(){var e;return null!==(e=this.sessions.speakers)&&void 0!==e?e:[]}}},t=(o(308),o(8)),component=Object(t.a)(r,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"sessions"},[o("div",{staticClass:"sessions__header"},[e._v("\n    BSides RDU at Fletcher Hall\n  ")]),e._v(" "),e._l(e.schedule,(function(n,i){return o("content-sessions-single",{key:n.slug,staticClass:"sessions__single",attrs:{session:n,speakers:e.speakers[n.slug],id:"session-"+(i+1)}})}))],2)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ContentSessionsSingle:o(321).default})}}]);