(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{277:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("8aa4dcae",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n(277)},287:function(t,e,n){var r=n(24)(!1);r.push([t.i,".content-section .event{background-image:linear-gradient(180deg,var(--dark) 0,var(--dark) 40%,var(--med))}.content-section .event a,.content-section .event a:visited{color:var(--bright)}.content-section .event a:hover,.content-section .event a:visited:hover{border-bottom-color:var(--light)}.content-section .event p{color:var(--bright)}",""]),t.exports=r},291:function(t,e,n){"use strict";n.r(e);var r={props:{event:{type:Object}},computed:{cssVars:function(){return{"--dark":this.event.dark||"#1c1c1c","--med":this.event.med||"#949494","--light":this.event.light||"#d4d4d4","--bright":this.event.bright||"#f6f6f6"}}}},o=(n(286),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event",style:t.cssVars,attrs:{id:t.event.id}},[n("nuxt-link",{attrs:{to:t.event.slug}},[n("img",{attrs:{src:"/img/"+t.event.logo+"@0.13x.png",alt:t.event.alt}})]),t._v(" "),n("div",[n("h4",[n("nuxt-link",{attrs:{to:{name:"event",params:{event:t.event.slug}}}},[t._v(t._s(t.event.title))])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.event.description)+"\n      "),n("nuxt-link",{attrs:{to:t.event.slug}},[t._v("Learn more...")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);