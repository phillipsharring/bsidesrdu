(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{267:function(t,n,e){var content=e(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(25).default)("0ec43309",content,!0,{sourceMap:!1})},269:function(t,n,e){"use strict";var o=e(2),r=e(270).start;o({target:"String",proto:!0,forced:e(271)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},270:function(t,n,e){var o=e(17),r=e(9),d=e(189),l=e(18),c=Math.ceil,f=function(t){return function(n,e,f){var m,v,_=r(l(n)),h=_.length,w=void 0===f?" ":r(f),S=o(e);return S<=h||""==w?_:(m=S-h,(v=d.call(w,c(m/w.length))).length>m&&(v=v.slice(0,m)),t?_+v:v+_)}};t.exports={start:f(!1),end:f(!0)}},271:function(t,n,e){var o=e(59);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},272:function(t,n,e){"use strict";e(267)},273:function(t,n,e){var o=e(24)(!1);o.push([t.i,'.countdown-timer[data-v-39fd22b2]{text-align:center}.countdown-timer__ticking-timebomb[data-v-39fd22b2]{font-family:"Ubuntu Mono",monospace;font-style:italic;font-size:4.5rem;color:#f84020}.countdown-timer__until[data-v-39fd22b2]{font-size:2.5rem}@media only screen and (max-width:31.25em){.countdown-timer__ticking-timebomb[data-v-39fd22b2]{font-size:3.5rem}.countdown-timer__until[data-v-39fd22b2]{font-size:2rem}}@media only screen and (min-width:63.75em){.countdown-timer__ticking-timebomb[data-v-39fd22b2]{font-size:5.5rem}.countdown-timer__until[data-v-39fd22b2]{font-size:3.5rem}}',""]),t.exports=o},274:function(t,n,e){"use strict";e.r(n);e(49),e(269),e(14),e(94);var o={data:function(){return{timeout:null,target:new Date("2021-09-24T08:00:00").getTime(),interval:null,days:0,hours:0,minutes:0,seconds:0}},computed:{ready:function(){return null!==this.interval},done:function(){return null!==this.interval&&this.interval<0}},mounted:function(){var t=this;console.debug("mounted"),this.timer=setInterval((function(){var n=(new Date).getTime();t.interval=t.target-n,t.days=Math.floor(t.interval/864e5).toString().padStart(2,"0"),t.hours=Math.floor(t.interval%864e5/36e5).toString().padStart(2,"0"),t.minutes=Math.floor(t.interval%36e5/6e4).toString().padStart(2,"0"),t.seconds=Math.floor(t.interval%6e4/1e3).toString().padStart(2,"0"),t.interval<0&&clearInterval(t.timeout)}),1e3)},beforeDestroy:function(){clearInterval(this.timeout)}},r=(e(272),e(7)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"countdown-timer"},[t.ready&&!t.done?e("div",[e("div",{staticClass:"countdown-timer__ticking-timebomb"},[t._v("\n      "+t._s(t.days)+":"+t._s(t.hours)+":"+t._s(t.minutes)+":"+t._s(t.seconds)+"\n    ")]),t._v(" "),e("div",{staticClass:"countdown-timer__until"},[t._v("\n      Until BSidesRDU 2021!\n    ")])]):t._e(),t._v(" "),t.ready&&t.done?e("div",[t._v("\n    Time for BSides!\n  ")]):t._e()])}),[],!1,null,"39fd22b2",null);n.default=component.exports}}]);