(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{311:function(t,n,e){"use strict";var o=e(2),r=e(316);o({target:"String",proto:!0,forced:e(317)("anchor")},{anchor:function(t){return r(this,"a","name",t)}})},312:function(t,n,e){var content=e(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("7e0faf3b",content,!0,{sourceMap:!1})},316:function(t,n,e){var o=e(3),r=e(22),c=e(12),l=/"/g,d=o("".replace);t.exports=function(t,n,e,o){var f=c(r(t)),_="<"+n;return""!==e&&(_+=" "+e+'="'+d(c(o),l,"&quot;")+'"'),_+">"+f+"</"+n+">"}},317:function(t,n,e){var o=e(4);t.exports=function(t){return o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},318:function(t,n,e){"use strict";e(312)},319:function(t,n,e){var o=e(32)(!1);o.push([t.i,".content-section__anchor[data-v-a8dfa712]{padding-top:10rem;margin-top:-10rem}.content-section__separator[data-v-a8dfa712]{color:#373737}.content-section__separator svg[data-v-a8dfa712]{fill:currentColor;width:35rem;display:block;margin:4rem auto}",""]),t.exports=o},327:function(t,n,e){"use strict";e.r(n);e(311);var o=e(30),r={props:{anchor:{type:String,default:""},document:{type:Object,default:function(){return null}},content:{type:String,default:""},last:{type:Boolean,default:!1}},computed:{articleClass:function(){return Object(o.a)({"content-section__content":!0},this.anchor,!0)}}},c=(e(318),e(15)),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"content-section"},[t.anchor?n("div",{staticClass:"content-section__anchor",attrs:{id:t.anchor}}):t._e(),t._v(" "),null!==t.document?[n("nuxt-content",{class:t.articleClass,attrs:{document:t.document}})]:""!==t.content?[n("article",{class:t.articleClass,domProps:{innerHTML:t._s(t.content)}})]:[n("article",{class:t.articleClass},[t._t("default")],2)],t._v(" "),t.last?t._e():n("div",{staticClass:"content-section__separator"},[n("svg",[n("title",[t._v("==========")]),t._v(" "),n("use",{attrs:{"xlink:href":"/img/decorations.svg#icon-divider"}})])])],2)}),[],!1,null,"a8dfa712",null);n.default=component.exports}}]);