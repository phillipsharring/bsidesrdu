(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{313:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("33536938",content,!0,{sourceMap:!1})},320:function(t,e,n){"use strict";n(313)},321:function(t,e,n){var r=n(32)(!1);r.push([t.i,".events-spacetime{margin-bottom:2.5rem}.events-spacetime .not-smol{background-image:linear-gradient(180deg,var(--dark),var(--light));padding:1.5rem;border-radius:1rem;color:var(--text)}",""]),t.exports=r},328:function(t,e,n){"use strict";n.r(e);var r={props:{smol:{type:Boolean,default:!1},floor:{type:String,default:"2nd"},end:{type:String,default:"3:55"},from:{type:String,default:"#1c1c1c"},to:{type:String,default:"#949494"},text:{type:String,default:"#f6f6f6"}},computed:{cssVars:function(){return{"--dark":this.from,"--light":this.to,"--text":this.text}}}},o=(n(320),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"events-spacetime"},[t.smol?e("p",[t._v("\n    Events take place starting at 9:40 AM on the 1st, 2nd and 3rd floors\n  ")]):e("p",{staticClass:"not-smol",style:t.cssVars},[t._v("\n    Takes place during BSides RDU"),e("br"),t._v("\n    Friday, Sept. 24th, 2021"),e("br"),t._v("\n    9:40 AM to "+t._s(t.end)+" PM"),e("br"),t._v("\n    at The Carolina Theatre on the "+t._s(t.floor)+" floor\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);