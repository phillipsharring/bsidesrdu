(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{280:function(e,t,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("dbed67b8",content,!0,{sourceMap:!1})},302:function(e,t,n){"use strict";n(280)},303:function(e,t,n){var l=n(24)(!1);l.push([e.i,".events-single{padding:3rem;border-radius:2rem;text-align:left;background-image:linear-gradient(180deg,var(--dark) 0,var(--dark) 40%,var(--med));background-color:var(--dark)}.events-single>a:first-child{display:flex;justify-content:space-evenly;flex-direction:row;align-items:flex-start}.events-single>a>:not(:last-child){padding-right:3rem}.events-single>a:link,.events-single>a:visited{color:var(--bright);border-bottom:none}.events-single__link{color:var(--bright);border-bottom:2px solid transparent}.events-single__link:hover{border-bottom-color:var(--light)}.events-single p{color:var(--bright);font-size:2rem}.events-single:not(:last-child){margin-bottom:2.5rem}.events-single__header{margin-bottom:2rem}.events-single__header h4{margin-bottom:0}.events-single__floor{font-size:1.8rem;color:var(--bright)}.events-single__learn-more{display:inline-block;padding-top:.7rem}.events-single__img{min-width:12.5rem}.events-single__img img{padding-bottom:.5rem}@media only screen and (max-width:31.25em){.events-single>a:first-child{flex-direction:column;align-items:center}.events-single>a>:not(:last-child){padding-right:0;padding-bottom:2rem}}",""]),e.exports=l},310:function(e,t,n){"use strict";n.r(t);var l={props:{event:{type:Object}},computed:{cssVars:function(){return{"--dark":this.event.dark||"#1c1c1c","--med":this.event.med||"#949494","--light":this.event.light||"#d4d4d4","--bright":this.event.bright||"#f6f6f6"}}}},r=(n(302),n(8)),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"events-single",style:e.cssVars},[n("nuxt-link",{attrs:{to:e.event.slug}},[n("div",{staticClass:"events-single__img"},[n("img",{staticClass:"events-single__link",attrs:{src:"/2021/img/events/"+e.event.slug+"-list.png",alt:e.event.alt}})]),e._v(" "),n("div",[n("div",{staticClass:"events-single__header"},[n("h4",[n("span",{staticClass:"events-single__link"},[e._v(e._s(e.event.title))])]),e._v(" "),n("p",[n("span",{staticClass:"events-single__floor"},[e._v(e._s(e.event.floor)+" Floor")]),e._v(" "),e.event.virtual?n("span",{staticClass:"events-single__virtual"},[e._v("and Virtual")]):e._e()])]),e._v(" "),n("p",[e._v("\n        "+e._s(e.event.description)+"\n      ")]),e._v(" "),n("p",[n("span",{staticClass:"events-single__link"},[e._v("Learn more »")])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);