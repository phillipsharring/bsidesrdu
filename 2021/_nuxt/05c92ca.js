(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{284:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("624cf8ac",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";n(284)},306:function(t,e,n){var r=n(24)(!1);r.push([t.i,".events-spacetime{margin-bottom:2.5rem}.events-spacetime .not-smol{background-image:linear-gradient(180deg,var(--dark),var(--light));padding:1.5rem;border-radius:1rem;color:var(--text)}",""]),t.exports=r},314:function(t,e,n){"use strict";n.r(e);var r={props:{smol:{type:Boolean,default:!1},floor:{type:String,default:"2nd"},end:{type:String,default:"3:55"},from:{type:String,default:"#1c1c1c"},to:{type:String,default:"#949494"},text:{type:String,default:"#f6f6f6"}},computed:{cssVars:function(){return{"--dark":this.from,"--light":this.to,"--text":this.text}}}},o=(n(305),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"events-spacetime"},[t.smol?n("p",[t._v("\n    Events take place starting at 9:40 AM on the 1st, 2nd and 3rd floors\n  ")]):n("p",{staticClass:"not-smol",style:t.cssVars},[t._v("\n    Takes place during BSides RDU"),n("br"),t._v("\n    Friday, Sept. 24th, 2021"),n("br"),t._v("\n    9:40 AM to "+t._s(t.end)+" PM"),n("br"),t._v("\n    at The Carolina Theatre on the "+t._s(t.floor)+" floor\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);