(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{287:function(e,t,o){var content=o(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(61).default)("7d2e34aa",content,!0,{sourceMap:!1})},312:function(e,t,o){e.exports=o.p+"img/convert_one.2aca62c.png"},313:function(e,t,o){e.exports=o.p+"img/convert_two.4afcf24.png"},314:function(e,t,o){e.exports=o.p+"img/heart.2f9eb22.png"},315:function(e,t,o){"use strict";o(287)},316:function(e,t,o){var r=o(60)(!1);r.push([e.i,'.envelope-parts[data-v-52c4c37a]{display:flex;justify-content:center;align-items:flex-start;position:relative;z-index:2;max-width:750px;width:100%;height:100%;margin:0 auto}.envelope-parts img[data-v-52c4c37a]{width:100%;max-width:750px;height:auto;max-height:100%}.envelope-parts-head_close[data-v-52c4c37a],.envelope-parts-head_heart[data-v-52c4c37a]{position:absolute;z-index:2}.envelope-parts-head_heart[data-v-52c4c37a]{max-width:20%!important;height:25%!important;top:25%;cursor:pointer;transition:.5s ease}.envelope-parts-head_heart[data-v-52c4c37a]:hover{transform:scale(1.1)}.envelope-parts-body[data-v-52c4c37a]{z-index:2;background:linear-gradient(180deg,#fdf3aa -27.65%,#fbf5ac -13.2%,#f1eaa4 -5.31%,#9e8346 62.99%,#b7974c 83.66%,#c6a350 92.6%,#cba751)}.envelope-parts-text[data-v-52c4c37a]{position:absolute;left:5%;bottom:5%;z-index:2;color:#fff}.envelope-parts-text-second[data-v-52c4c37a]{position:absolute;right:5%;bottom:5%;z-index:2;color:#fff;text-transform:uppercase;text-align:right}@media(max-width:361px){.envelope-parts-text-second[data-v-52c4c37a]{font-size:12px}}.envelope-parts-letter[data-v-52c4c37a]{position:absolute;display:none;width:100%;max-width:750px;border:5px solid;padding:140px 50px;background:#fff;text-align:center;-o-border-image:linear-gradient(180deg,#b7974c,hsla(0,0%,97.3%,0));border-image:linear-gradient(180deg,#b7974c,hsla(0,0%,97.3%,0));-o-border-image:linear-gradient(180deg,#b7974c,hsla(0,0%,97.3%,0)) 0 100%;border-image:linear-gradient(180deg,#b7974c,hsla(0,0%,97.3%,0)) 0 100%;border-image-slice:1;z-index:1}@media(max-width:992px){.envelope-parts-letter[data-v-52c4c37a]{padding:120px 90px}}@media(max-width:768px){.envelope-parts-letter[data-v-52c4c37a]{padding:80px 40px}}@media(max-width:576px){.envelope-parts-letter[data-v-52c4c37a]{max-height:250px;overflow:auto;padding:20px 10px}}.envelope-parts-letter h2[data-v-52c4c37a]{text-transform:uppercase;margin-bottom:20px}@media(max-width:1200px){.envelope-parts-letter[data-v-52c4c37a]{transform:rotate(0deg)!important}}.envelope-parts span[data-v-52c4c37a]{z-index:1;position:absolute;width:50px;height:50px;display:block;right:35px;top:35px;background:#fff;border-radius:50%;opacity:0;cursor:pointer!important}@media(max-width:768px){.envelope-parts span[data-v-52c4c37a]{width:35px;height:35px;right:10px;top:5px}}.envelope-parts span[data-v-52c4c37a]:before{content:"✖";display:block;color:#000;position:absolute;right:50%;font-size:25px;top:50%;transform:translate(50%,-50%)}.envelope-parts span[data-v-52c4c37a]:hover{opacity:.7}',""]),e.exports=r},328:function(e,t,o){"use strict";o.r(t);o(16);var r={props:["envelopObj","envelopClick"],data:function(){return{}},methods:{openEnvelope:function(e){var t=this.$gsap.timeline();document.querySelectorAll(".envelope-parts").forEach((function(o){if(o.contains(e.target)){var r=o.querySelector(".envelope-parts-head_heart"),body=o.querySelector(".envelope-parts-body"),n=o.querySelector(".envelope-parts-head_close"),l=o.querySelector(".envelope-parts-letter"),c=o.querySelector(".envelope-parts-text"),d=o.querySelector(".envelope-parts-text-second"),v=o.querySelector(".closeEnvelopeBtn");t.to(r,{autoAlpha:1,display:"none",duration:0}),t.to(n,{ease:"power3",transform:"matrix(1, 0, 0, -1, 0, 0)",bottom:"100%",zIndex:"1",duration:.8}),t.to(body,{ease:"power3",background:"transparent",duration:.1}),t.to(l,{ease:"power4",display:"block",bottom:"90%",duration:1}),t.to(body,{ease:"power1",background:"#D11F2E",duration:.3}),t.to(body,{duration:0,zIndex:"1"}),t.to(n,{ease:"power1",transform:"matrix(1, 0, 0, 0, 0, 0)",zIndex:"25",duration:0}),t.to(c,{zIndex:"0",duration:0}),t.to(d,{zIndex:"0",duration:0}),t.to(l,{ease:"power4",bottom:"10%",transform:"rotate(+10deg)",duration:1}),t.to(v,{ease:"power4",opacity:1,zIndex:"2"}),v.onclick=function(){t.reverse()}}}))}}},n=(o(315),o(29)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"envelope-parts"},[r("img",{staticClass:"envelope-parts-body",attrs:{src:o(312),alt:""}}),e._v(" "),r("img",{staticClass:"envelope-parts-head_close",attrs:{src:o(313),alt:""}}),e._v(" "),r("img",{staticClass:"envelope-parts-head_heart",attrs:{src:o(314),alt:""}}),e._v(" "),r("span",{staticClass:"closeEnvelopeBtn"}),e._v(" "),r("p",{staticClass:"envelope-parts-text text-xls w400"},[e._v(e._s(e.envelopObj.text_bonus))]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"envelope-parts-letter"},[r("h2",{staticClass:"text-xl w800"},[e._v(e._s(e.envelopObj.title))]),e._v(" "),r("p",{staticClass:"text-md w300"},[e._v(e._s(e.envelopObj.text))])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"envelope-parts-text-second text-sxl w700"},[e._v("\n    To You "),o("br"),e._v("\n    from Santa\n  ")])}],!1,null,"52c4c37a",null);t.default=component.exports}}]);