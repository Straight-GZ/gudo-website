(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{296:function(t,e,o){},297:function(t,e,o){},298:function(t,e,o){"use strict";var n=o(301),i={name:"JianButton",components:{"g-icon":o(299).a},computed:{classes:function(){var t;return t={},Object(n.a)(t,"icon-".concat(this.iconPosition),!0),Object(n.a)(t,"icon-".concat(this.icon),!0),t}},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}}},c=(o(304),o(40)),s=Object(c.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"g-button",class:t.classes,on:{click:function(e){return t.$emit("click")}}},[t.icon&&!t.loading?o("g-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.loading?o("g-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):t._e(),t._v(" "),o("span",{staticClass:"content"},[t._t("default")],2)],1)}),[],!1,null,"1afa01d9",null);e.a=s.exports},299:function(t,e,o){"use strict";o(302);var n={name:"JianIcon",props:["name"]},i=(o(303),o(40)),c=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"g-icon"},[this.name?e("use",{attrs:{"xlink:href":"#i-"+this.name}}):this._e()])}),[],!1,null,"4baa4958",null);e.a=c.exports},300:function(t,e,o){var n=o(1),i=o(3),c=o(61),s=[].slice,l=function(t){return function(e,o){var n=arguments.length>2,i=n?s.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,o)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(c)},{setTimeout:l(i.setTimeout),setInterval:l(i.setInterval)})},301:function(t,e,o){"use strict";function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.d(e,"a",(function(){return n}))},302:function(t,e,o){o(149),o(300),function(t){var e,o,n,i,c,s,l='<svg><symbol id="i-info" viewBox="0 0 1024 1024"><path d="M512 96c-229.76 0-416 186.24-416 416s186.24 416 416 416 416-186.24 416-416-186.24-416-416-416zM577.248 665.056c-31.392 47.136-63.328 83.456-117.056 83.456-36.672-5.984-51.744-32.256-43.808-59.04l69.12-228.928c1.696-5.6-1.12-11.584-6.24-13.408-5.088-1.792-15.072 4.832-23.712 14.304l-41.792 50.272c-1.12-8.448-0.128-22.4-0.128-28.032 31.392-47.136 82.976-84.32 117.952-84.32 33.248 3.392 48.992 29.984 43.2 59.2l-69.6 230.048c-0.928 5.184 1.824 10.464 6.528 12.128 5.12 1.792 15.872-4.832 24.544-14.304l41.76-50.24c1.12 8.448-0.768 23.232-0.768 28.864zM567.936 366.048c-26.432 0-47.872-19.264-47.872-47.616s21.44-47.584 47.872-47.584 47.872 19.264 47.872 47.584c0 28.384-21.44 47.616-47.872 47.616z"  ></path></symbol><symbol id="i-error" viewBox="0 0 1024 1024"><path d="M512 56.88888853a455.11111147 455.11111147 0 1 0 455.11111147 455.11111147A455.11111147 455.11111147 0 0 0 512 56.88888853z m45.51111147 614.4a22.7555552 22.7555552 0 0 1-22.75555627 22.75555627h-45.5111104a22.7555552 22.7555552 0 0 1-22.75555627-22.75555627v-45.5111104a22.7555552 22.7555552 0 0 1 22.75555627-22.75555626h45.5111104a22.7555552 22.7555552 0 0 1 22.75555627 22.75555626z m-10.0124448-169.30133333a11.37777813 11.37777813 0 0 1-11.37777814 10.0124448h-48.24177706a11.37777813 11.37777813 0 0 1-11.37777814-10.0124448l-18.2044448-146.54577707a22.7555552 22.7555552 0 0 1 22.75555627-25.48622293h61.8951104a22.7555552 22.7555552 0 0 1 22.75555627 25.48622293z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M501.75260167 123.18273633m-101.850403 0a101.850403 101.850403 0 1 0 203.700806 0 101.850403 101.850403 0 1 0-203.700806 0Z"  ></path><path d="M748.50315567 208.84223433m-96.031437 0a96.031437 96.031437 0 1 0 192.062875 0 96.031437 96.031437 0 1 0-192.062875 0Z"  ></path><path d="M881.95337367 402.72909833m-90.210471 0a90.210471 90.210471 0 1 0 180.420943 0 90.210471 90.210471 0 1 0-180.420943 0Z"  ></path><path d="M884.61735867 631.05576033m-84.390506 0a84.390506 84.390506 0 1 0 168.781011 0 84.390506 84.390506 0 1 0-168.781011 0Z"  ></path><path d="M778.66397967 807.46072733m-78.57054 0a78.57054 78.57054 0 1 0 157.141079 0 78.57054 78.57054 0 1 0-157.141079 0Z"  ></path><path d="M583.86312067 911.04212033m-72.750574 0a72.750574 72.750574 0 1 0 145.501148 0 72.750574 72.750574 0 1 0-145.501148 0Z"  ></path><path d="M375.81533967 899.19118933m-66.931608 0a66.931608 66.931608 0 1 0 133.863216 0 66.931608 66.931608 0 1 0-133.863216 0Z"  ></path><path d="M202.33235567 783.81686533m-61.110641 0a61.110642 61.110642 0 1 0 122.221283 0 61.110642 61.110642 0 1 0-122.221283 0Z"  ></path><path d="M113.14987867 608.48189333m-55.290676 0a55.290676 55.290676 0 1 0 110.581352 0 55.290676 55.290676 0 1 0-110.581352 0Z"  ></path><path d="M114.06287367 430.22993733m-49.47071 0a49.47071 49.47071 0 1 0 98.94142 0 49.47071 49.47071 0 1 0-98.94142 0Z"  ></path><path d="M184.00346367 281.38080933m-43.650744 0a43.650744 43.650744 0 1 0 87.301488 0 43.650744 43.650744 0 1 0-87.301488 0Z"  ></path><path d="M294.48181667 181.32339633m-37.829779 0a37.829778 37.829778 0 1 0 75.659557 0 37.829778 37.829778 0 1 0-75.659557 0Z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M734.2 945c-17.5 17.5-45.8 17.5-63.3 0L300.7 574.8c-35-35-35-91.7 0-126.6l372.9-373c17.3-17.3 45.3-17.5 62.8-0.5 17.9 17.4 18.1 46.1 0.5 63.8L395.7 479.8c-17.5 17.5-17.5 45.8 0 63.3l338.6 338.6c17.4 17.5 17.4 45.8-0.1 63.3z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M289.8 79.00000001c17.5-17.5 45.8-17.5 63.3 0L723.3 449.2c35 35 35 91.7 0 126.59999999l-372.9 373.00000001c-17.3 17.3-45.3 17.5-62.8 0.5-17.9-17.4-18.1-46.1-0.5-63.8L628.3 544.2c17.5-17.5 17.5-45.8 0-63.3l-338.6-338.6c-17.4-17.5-17.4-45.8 0.1-63.29999999z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M559.25304889 978.87004445h-87.72266667c-33.14688 0-60.11448889-26.96647111-60.11448889-60.1144889v-59.20540444A358.66168889 358.66168889 0 0 1 343.60888889 832.23210667l-43.30837334 43.30837333c-11.35388445 11.35388445-26.44992 17.60711111-42.50737777 17.60711111-16.05632 0-31.15235555-6.25322667-42.50624-17.60711111L153.25752889 813.51111111c-23.43822222-23.43822222-23.43822222-61.57539555 0-85.01361778l41.86794666-41.86794666a358.67079111 358.67079111 0 0 1-28.64355555-67.26087112H105.24444445c-33.14688 0-60.11448889-26.96647111-60.1144889-60.11448888v-87.72266667c0-33.14688 26.96760889-60.11448889 60.1144889-60.11448889h59.20540444a358.50922667 358.50922667 0 0 1 27.31804444-67.80700444l-43.30837333-43.30837334c-23.43822222-23.43822222-23.43822222-61.57539555 0-85.01361778L210.48888889 153.25752889c11.35388445-11.35388445 26.44992-17.60711111 42.50737778-17.60711111s31.15349333 6.25322667 42.50737778 17.60711111l41.86794666 41.86794666a358.67079111 358.67079111 0 0 1 67.26087111-28.64355555V105.24444445c0-33.14688 26.96647111-60.11448889 60.11448889-60.1144889h87.72380444c33.14688 0 60.11448889 26.96760889 60.1144889 60.1144889v59.20540444a358.53994667 358.53994667 0 0 1 67.80700444 27.31804444l43.30837333-43.30723555c11.35388445-11.35388445 26.44992-17.60711111 42.50737778-17.60711111 16.05632 0 31.15235555 6.25322667 42.50624 17.60711111L870.74360889 210.48888889c11.35388445 11.35388445 17.60711111 26.44992 17.60711111 42.50737778s-6.25322667 31.15349333-17.60711111 42.50737778l-41.86794667 41.86794666a358.77774222 358.77774222 0 0 1 28.64355556 67.26087111H918.75555555c33.14688 0 60.11448889 26.96647111 60.1144889 60.11448889v87.72380444c0 33.14688-26.96647111 60.11448889-60.1144889 60.1144889h-59.20540444a358.69127111 358.69127111 0 0 1-27.31804444 67.80700444l43.30837333 43.30837333c23.43822222 23.43822222 23.43822222 61.57539555 0 85.01361778L813.51111111 870.74360889c-11.35388445 11.35388445-26.44992 17.60711111-42.50624 17.60711111-16.05745778 0-31.15349333-6.25322667-42.50737778-17.60711111l-41.86794666-41.86794667a358.70264889 358.70264889 0 0 1-67.26087112 28.64355556V918.75555555c-0.00113778 33.14688-26.96760889 60.11448889-60.11562666 60.1144889zM334.35306667 759.40522667l19.49809778 11.91936a301.19253333 301.19253333 0 0 0 92.80056888 37.31342222l22.80675556 5.00053333V918.75555555c0 1.14232889 0.93070222 2.07303111 2.07303111 2.07303112h87.72266667a2.07644445 2.07644445 0 0 0 2.07303111-2.07303112v-106.17969777l22.21056-5.36120889a301.35182222 301.35182222 0 0 0 92.00412444-39.25560889l19.66193778-12.59178667 74.33443555 74.33443556c0.15018667 0.15018667 0.60757333 0.60757333 1.46659556 0.60757333 0.85788445 0 1.31527111-0.45738667 1.46545778-0.60757333l62.03050666-62.03050667a2.07416889 2.07416889 0 0 0 0-2.93205333l-75.0944711-75.09219556 11.91936-19.49809778a301.20846222 301.20846222 0 0 0 37.31342222-92.7994311l5.00053333-22.80675556H918.75555555a2.07644445 2.07644445 0 0 0 2.07303112-2.07303111v-87.72380445a2.07530667 2.07530667 0 0 0-2.07303112-2.07303111h-106.18083555l-5.36120889-22.21169777a301.30972445 301.30972445 0 0 0-39.25333333-92.00412445l-12.59178667-19.66193778 74.33443556-74.33329777c0.15018667-0.15018667 0.60757333-0.60757333 0.60757333-1.46659556 0-0.85788445-0.45624889-1.31527111-0.60757333-1.46545778l-62.03050667-62.03050666a1.97176889 1.97176889 0 0 0-1.46545778-0.60757334c-0.85902222 0-1.31640889 0.45738667-1.46659555 0.60757334l-75.09219556 75.09219555-19.49809778-11.91822222a301.20846222 301.20846222 0 0 0-92.79943111-37.31342223l-22.80675555-4.99939555V105.24444445a2.07644445 2.07644445 0 0 0-2.07303112-2.07303112h-87.72380444a2.07530667 2.07530667 0 0 0-2.07303111 2.07303112v106.18083555l-22.21056 5.36120889a301.34385778 301.34385778 0 0 0-92.00412445 39.25447111l-19.66193777 12.59178667-74.33329778-74.33443556c-0.15018667-0.15018667-0.60757333-0.60757333-1.46659555-0.60757333-0.85788445 0-1.31527111 0.45738667-1.46545778 0.60757333l-62.03050667 62.03050667a2.07416889 2.07416889 0 0 0 0 2.93205333l75.09219555 75.09333334-11.91822222 19.49809777a301.19253333 301.19253333 0 0 0-37.31342222 92.80056889l-4.99939556 22.80675556H105.24444445a2.07644445 2.07644445 0 0 0-2.07303112 2.07303111v87.72266667c0 1.14232889 0.93070222 2.07303111 2.07303112 2.0730311h106.18083555l5.36120889 22.21056a301.29720889 301.29720889 0 0 0 39.25447111 92.00412445l12.59178667 19.66193778-74.33443556 74.33443555a2.07644445 2.07644445 0 0 0 0 2.93205334l62.03050667 62.03050666c0.15018667 0.15018667 0.60757333 0.60757333 1.46545777 0.60757334 0.85902222 0 1.31527111-0.45738667 1.46659556-0.60757334l75.09219556-75.09674666z"  ></path><path d="M512 671.28888889c-87.83189333 0-159.28888889-71.45699555-159.28888889-159.28888889s71.45699555-159.28888889 159.28888889-159.28888889 159.28888889 71.45699555 159.28888889 159.28888889-71.45699555 159.28888889-159.28888889 159.28888889z m0-258.30627556c-54.59854222 0-99.01738667 44.41884445-99.01738667 99.01738667 0 54.59740445 44.41884445 99.01738667 99.01738667 99.01738667 54.59740445 0 99.01738667-44.41998222 99.01738667-99.01738667 0-54.59854222-44.41998222-99.01738667-99.01738667-99.01738667z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M783.85303703 602.71881482v77.67229629h97.09037038v194.18074074H181.89274075V680.39111111h97.09037036v-77.67229629h-174.76266666v349.52533333h854.39525925V602.71881482h-174.76266667z"  ></path><path d="M751.03649185 533.0079289l-54.95314963-54.75896889L570.25422222 604.07808001V59.01274074h-77.6722963v545.06533927l-125.82912-125.82912-54.95314962 54.75896889L531.41807408 752.8205274l219.61841777-219.8125985z"  ></path></symbol><symbol id="i-thumbs-up" viewBox="0 0 1024 1024"><path d="M800.924 962.534H154.771c-44.531 0-80.77-36.227-80.77-80.758V466.392c0-44.531 36.238-80.77 80.77-80.77h138.135c28.373-27.81 58.019-65.94 58.019-103.846v-69.23c0-95.44 77.637-173.077 173.077-173.077s173.077 77.637 173.077 173.077v69.23c0 27.381-2.806 55.721-6.378 80.77h110.224c95.44 0 173.077 77.637 173.077 173.077v4.541l-92.465 346.751c-2.672 42.142-37.806 75.619-80.613 75.619zM154.771 454.853c-6.367 0-11.539 5.172-11.539 11.539v415.385c0 6.354 5.172 11.526 11.539 11.526h646.153c6.366 0 11.538-5.172 11.538-11.526v-4.541l92.219-345.828c-2.209-55.314-47.912-99.631-103.757-99.631h-193.19l8.034-41.23c5.511-28.316 12.079-70.177 12.079-108.77v-69.23c0-57.264-46.582-103.846-103.846-103.846s-103.846 46.582-103.846 103.846v69.23c0 54.132-30.322 109.311-90.122 164.006l-9.916 9.07H154.771z"  ></path><path d="M289.39 939.445c-19.122 0-34.615-15.493-34.615-34.615V443.304c0-19.123 15.493-34.615 34.615-34.615 19.121 0 34.615 15.492 34.615 34.615V904.83c0 19.122-15.494 34.615-34.615 34.615z"  ></path></symbol></svg>',r=(r=document.getElementsByTagName("script"))[r.length-1].getAttribute("data-injectcss");if(r&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}function a(){c||(c=!0,n())}e=function(){var t,e,o,n;(n=document.createElement("div")).innerHTML=l,l=null,(o=n.getElementsByTagName("svg")[0])&&(o.setAttribute("aria-hidden","true"),o.style.position="absolute",o.style.width=0,o.style.height=0,o.style.overflow="hidden",t=o,(e=document.body).firstChild?(n=t,(o=e.firstChild).parentNode.insertBefore(n,o)):e.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(e,0):(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),e()},document.addEventListener("DOMContentLoaded",o,!1)):document.attachEvent&&(n=e,i=t.document,c=!1,(s=function(){try{i.documentElement.doScroll("left")}catch(t){return void setTimeout(s,50)}a()})(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,a())})}(window)},303:function(t,e,o){"use strict";o(296)},304:function(t,e,o){"use strict";o(297)},372:function(t,e,o){},422:function(t,e,o){"use strict";o(372)},433:function(t,e,o){"use strict";o.r(e);o(60),o(41),o(149);var n={name:"JianPopover",data:function(){return{visible:!1}},props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}}},mounted:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener(this.openEvent,this.open),this.$refs.popover.addEventListener(this.closeEvent,this.close))},destroyed:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener(this.openEvent,this.open),this.$refs.popover.removeEventListener(this.closeEvent,this.close))},computed:{openEvent:function(){return"click"===this.trigger?"click":"mouseenter"},closeEvent:function(){return"click"===this.trigger?"click":"mouseleave"}},methods:{positionContent:function(){var t=this.$refs,e=t.contentWrapper,o=t.triggerWrapper;document.body.appendChild(e);var n=o.getBoundingClientRect(),i=n.left,c=n.top,s=n.width,l=n.height,r=e.getBoundingClientRect().height,a={top:{left:i+window.scrollX,top:c+window.scrollY},bottom:{left:i+window.scrollX,top:c+l+window.scrollY},left:{left:i+window.scrollX,top:c+(l-r)/2},right:{left:i+s+window.scrollX,top:c+(l-r)/2}};e.style.left=a[this.position].left+"px",e.style.top=a[this.position].top+"px"},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},open:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)}))},close:function(){this.visible=!1,document.removeEventListener("click",this.onClickDocument)},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())}}},i=(o(422),o(40)),c={name:"popover-demo-1",components:{"g-popover":Object(i.a)(n,(function(){var t,e=this.$createElement,o=this._self._c||e;return o("div",{ref:"popover",staticClass:"popover"},[this.visible?o("div",{ref:"contentWrapper",staticClass:"contentWrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2):this._e(),this._v(" "),o("div",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])}),[],!1,null,"7755d630",null).exports,"g-button":o(298).a},data:function(){return{visible1:!1,visible2:!1,content1:' <g-popover position = "bottom">\n    <template slot = "content">popover 内容1</template>\n    <g-button>click</g-button>\n  </g-popover>\n  <g-popover>\n    <template slot = "content">popover 内容2</template>\n    <g-button>click</g-button>\n  </g-popover>\n  <g-popover position = "left">\n    <template slot = "content">popover 内容3</template>\n    <g-button>click</g-button>\n  </g-popover>\n  <g-popover position = "right">\n    <template slot = "content">popover 内容4</template>\n    <g-button>click</g-button>\n  </g-popover>'.replace("/\\s{2,}/",""),content2:' <g-popover position = "bottom" trigger = "hover">\n    <template slot = "content">popover  内容1</template>\n    <g-button>hover</g-button>\n  </g-popover>\n  <g-popover trigger = "hover">\n    <template slot = "content">popover 内容2</template>\n    <g-button>hover</g-button>\n  </g-popover>\n  <g-popover position = "left" trigger = "hover">\n    <template slot = "content">popover 内容3</template>\n    <g-button>hover</g-button>\n  </g-popover>\n  <g-popover position = "right" trigger = "hover">\n    <template slot = "content">popover 内容4</template>\n    <g-button>hover</g-button>\n  </g-popover>'.replace("/\\s{2,}/","")}}},s=Object(i.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{margin:"50px 0"}},[o("h4",[t._v("鼠标点击")]),t._v(" "),o("div",[o("g-popover",{attrs:{position:"bottom"}},[o("template",{slot:"content"},[t._v("popover 内容1")]),t._v(" "),o("g-button",[t._v("click")])],2),t._v(" "),o("g-popover",[o("template",{slot:"content"},[t._v("popover 内容2")]),t._v(" "),o("g-button",[t._v("click")])],2),t._v(" "),o("g-popover",{attrs:{position:"left"}},[o("template",{slot:"content"},[t._v("popover 内容3")]),t._v(" "),o("g-button",[t._v("click")])],2),t._v(" "),o("g-popover",{attrs:{position:"right"}},[o("template",{slot:"content"},[t._v("popover 内容4")]),t._v(" "),o("g-button",[t._v("click")])],2),t._v(" "),o("div",{staticStyle:{"margin-top":"20px"}},[t.visible1?t._e():o("g-button",{on:{click:function(e){t.visible1=!0}}},[t._v("显示代码")]),t._v(" "),t.visible1?o("g-button",{on:{click:function(e){t.visible1=!1}}},[t._v("关闭代码")]):t._e(),t._v(" "),t.visible1?o("pre",[o("code",[t._v(t._s(t.content1))])]):t._e()],1)],1),t._v(" "),o("div",{staticStyle:{"margin-top":"50px"}},[o("h4",[t._v("鼠标悬浮")]),t._v(" "),o("g-popover",{attrs:{position:"bottom",trigger:"hover"}},[o("template",{slot:"content"},[t._v("popover 内容1")]),t._v(" "),o("g-button",[t._v("hover")])],2),t._v(" "),o("g-popover",{attrs:{trigger:"hover"}},[o("template",{slot:"content"},[t._v("popover 内容2")]),t._v(" "),o("g-button",[t._v("hover")])],2),t._v(" "),o("g-popover",{attrs:{position:"left",trigger:"hover"}},[o("template",{slot:"content"},[t._v("popover 内容3")]),t._v(" "),o("g-button",[t._v("hover")])],2),t._v(" "),o("g-popover",{attrs:{position:"right",trigger:"hover"}},[o("template",{slot:"content"},[t._v("popover 内容4")]),t._v(" "),o("g-button",[t._v("hover")])],2),t._v(" "),o("div",{staticStyle:{"margin-top":"20px"}},[t.visible2?t._e():o("g-button",{on:{click:function(e){t.visible2=!0}}},[t._v("显示代码")]),t._v(" "),t.visible2?o("g-button",{on:{click:function(e){t.visible2=!1}}},[t._v("关闭代码")]):t._e(),t._v(" "),t.visible2?o("pre",[o("code",[t._v(t._s(t.content2))])]):t._e()],1)],1)])}),[],!1,null,"3a90d442",null);e.default=s.exports}}]);