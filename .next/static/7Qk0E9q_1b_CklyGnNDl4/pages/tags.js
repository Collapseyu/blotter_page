(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{I7Dx:function(t,e,n){"use strict";n("1SKB"),n("wY8d")},JyG4:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=l();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),i=(o=n("TSYQ"))&&o.__esModule?o:{default:o},c=n("vgIT"),u=n("vCXI");function l(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return l=function(){return t},t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function m(t){return t?t.toString().split("").reverse().map((function(t){var e=Number(t);return isNaN(e)?t:e})):[]}var y=function(t){var e=t.prefixCls,n=t.count,r=t.className,o=t.style,l=t.title,p=t.component,y=void 0===p?"sup":p,v=t.displayComponent,b=t.onAnimated,g=void 0===b?function(){}:b,h=d(t,["prefixCls","count","className","style","title","component","displayComponent","onAnimated"]),O=f(a.useState(!0),2),w=O[0],E=O[1],S=f(a.useState(n),2),j=S[0],P=S[1],C=f(a.useState(n),2),x=C[0],T=C[1],N=f(a.useState(n),2),k=N[0],_=N[1],M=(0,a.useContext(c.ConfigContext).getPrefixCls)("scroll-number",e);x!==n&&(E(!0),T(n)),a.useEffect((function(){var t;return _(j),w&&(t=setTimeout((function(){E(!1),P(n),g()}))),function(){t&&clearTimeout(t)}}),[w,n,g]);var A=function(t,e){if("number"===typeof t){var n=function(t,e){var n=Math.abs(Number(j)),r=Math.abs(Number(k)),o=Math.abs(m(j)[e]),a=Math.abs(m(r)[e]);return w?10+t:n>r?o>=a?10+t:20+t:o<=a?10+t:t}(t,e),r=w||void 0===m(k)[e];return a.createElement("span",{className:"".concat(M,"-only"),style:{transition:r?"none":void 0,msTransform:"translateY(".concat(100*-n,"%)"),WebkitTransform:"translateY(".concat(100*-n,"%)"),transform:"translateY(".concat(100*-n,"%)")},key:e},function(t,e){for(var n=[],r=0;r<30;r++)n.push(a.createElement("p",{key:r.toString(),className:(0,i.default)(e,{current:t===r})},r%10));return n}(n,"".concat(M,"-only-unit")))}return(a.createElement("span",{key:"symbol",className:"".concat(M,"-symbol")},t))},I=s(s({},h),{style:o,className:(0,i.default)(M,r),title:l});return o&&o.borderColor&&(I.style=s(s({},o),{boxShadow:"0 0 0 1px ".concat(o.borderColor," inset")})),v?(0,u.cloneElement)(v,{className:(0,i.default)("".concat(M,"-custom-component"),v.props&&v.props.className)}):a.createElement(y,I,j&&Number(j)%1===0?m(j).map((function(t,e){return A(t,e)})).reverse():j)};e.default=y},KhRl:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return n("MLuH")}])},MLuH:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=(n("RV09"),n("N9UN")),c=n.n(i),u=(n("SoD3"),n("9xET")),l=n.n(u),s=(n("I7Dx"),n("RWbP")),f=n.n(s),p=n("1OyB"),d=n("vuIU"),m=n("JX7q"),y=n("Ji7U"),v=n("md7G"),b=n("foSv"),g=n("rePB"),h=n("q1tI"),O=n.n(h),w=n("8Kt/"),E=n.n(w),S=n("rfoC"),j=n("pJr+"),P=n("AoAR"),C=n("dSKx");function x(t){if("undefined"===typeof String.prototype.localeCompare)return 0;if(t&&0==t.length)return 0;var e="\u963f\u516b\u5693\u54d2\u59b8\u53d1\u65ee\u54c8\u8ba5\u8ba5\u5494\u5783\u75f3\u62cf\u5662\u5991\u4e03\u5465\u6268\u5b83\u7a75\u7a75\u7a75\u5915\u4e2b\u5e00".split(""),n=t.charCodeAt(0);if(n>=97&&n<=122)return n-97+1;if(n>=65&&n<=90)return n-65+1;for(var r=1;r<=26;++r)if(e[r-1].localeCompare(t[0],"zh")<=0&&t[0].localeCompare(e[r],"zh")<0)return r;return 0}var T=function(t){if(!String.prototype.localeCompare)return t.sort();for(var e=[],n=0;n<27;++n)e.push({title:0==n?"#":String.fromCharCode(n+65-1),tags:[]});var r=t.length;for(n=0;n<r;++n){var o=t[n];e[x(o.name)].tags.push(o)}for(n=0;n<27;++n)e[n].tags.sort((function(t,e){return t.count==e.count?0:t.count<e.count?1:-1}));return e},N=n("ZCPt"),k=n.n(N),_=O.a.createElement;function M(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(b.a)(t);if(e){var o=Object(b.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(v.a)(this,n)}}var A=function(t){Object(y.a)(n,t);var e=M(n);function n(t){var r;return Object(p.a)(this,n),r=e.call(this,t),Object(g.a)(Object(m.a)(r),"render_tag",(function(t){return _("div",{key:t.short,className:k.a.tag},_(f.a,{className:k.a.badge,count:t.count,overflowCount:9999,showZero:!0,title:"\u5171\u6709".concat(t.count,"\u7bc7\u6587\u7ae0")},_(S.a,{tag:t})))})),Object(g.a)(Object(m.a)(r),"render_group",(function(t){return t.tags.length>0?_(c.a,{className:k.a.card,key:t.title,title:t.title},_(l.a,null,t.tags.map(r.render_tag))):null})),r.state={},r}return Object(d.a)(n,[{key:"render",value:function(){return _(j.c,null,_(C.a.Consumer,null,(function(t){return _(E.a,null,_("title",null,"\u6807\u7b7e\u5217\u8868|".concat(t.blog_name)))})),this.props.tags.map(this.render_group))}}],[{key:"getInitialProps",value:function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.K)();case 2:return n=t.sent,t.abrupt("return",{total:n.total,tags:T(n.tags)});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(O.a.Component);Object(g.a)(A,"defaultProps",{total:0,tags:[]});e.default=A},RWbP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==d(t)&&"function"!==typeof t)return{default:t};var e=f();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=s(n("MFj2")),a=s(n("TSYQ")),i=s(n("JyG4")),c=n("dANV"),u=n("vgIT"),l=n("vCXI");function s(t){return t&&t.__esModule?t:{default:t}}function f(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return f=function(){return t},t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var y=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function v(t){return-1!==c.PresetColorTypes.indexOf(t)}var b=function(t){var e,n,c=t.prefixCls,s=t.scrollNumberPrefixCls,f=t.children,b=t.status,g=t.text,h=t.color,O=t.count,w=void 0===O?null:O,E=t.overflowCount,S=void 0===E?99:E,j=t.dot,P=void 0!==j&&j,C=t.title,x=t.offset,T=t.style,N=t.className,k=t.showZero,_=void 0!==k&&k,M=y(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","title","offset","style","className","showZero"]),A=r.useContext(u.ConfigContext),I=A.getPrefixCls,W=A.direction,D=I("badge",c),R=function(){return w>S?"".concat(S,"+"):w},L=function(){return!!b||!!h},z=function(){var t=R();return"0"===t||0===t},V=function(){return P&&!z()||L()},q=function(){return V()?"":R()},J=function(){return"rtl"===W?x?m({left:parseInt(x[0],10),marginTop:x[1]},T):T:x?m({right:-parseInt(x[0],10),marginTop:x[1]},T):T},K=function(){var t=q();return(null===t||void 0===t||""===t||z()&&!_)&&!V()},U=function(){var t=w;if(t&&"object"===d(t))return(0,l.cloneElement)(t,{style:m(m({},J()),t.props&&t.props.style)})},X=(0,a.default)((p(e={},"".concat(D,"-status-dot"),L()),p(e,"".concat(D,"-status-").concat(b),!!b),p(e,"".concat(D,"-status-").concat(h),v(h)),e)),Y={};h&&!v(h)&&(Y.background=h);var B=(0,a.default)(N,D,(p(n={},"".concat(D,"-status"),L()),p(n,"".concat(D,"-not-a-wrapper"),!f),p(n,"".concat(D,"-rtl"),"rtl"===W),n));if(!f&&L()){var H=J(),Z=H&&H.color;return r.createElement("span",m({},M,{className:B,style:H}),r.createElement("span",{className:X,style:Y}),r.createElement("span",{style:{color:Z},className:"".concat(D,"-status-text")},g))}return(r.createElement("span",m({},M,{className:B}),f,r.createElement(o.default,{component:"",showProp:"data-show",transitionName:f?"".concat(D,"-zoom"):"",transitionAppear:!0},function(){var t,e=I("scroll-number",s),n=q(),o=V(),c=K(),u=(0,a.default)((p(t={},"".concat(D,"-dot"),o),p(t,"".concat(D,"-count"),!o),p(t,"".concat(D,"-multiple-words"),!o&&w&&w.toString&&w.toString().length>1),p(t,"".concat(D,"-status-").concat(b),!!b),p(t,"".concat(D,"-status-").concat(h),v(h)),t)),l=J();return h&&!v(h)&&((l=l||{}).background=h),c?null:r.createElement(i.default,{prefixCls:e,"data-show":!c,className:u,count:n,displayComponent:U(),title:C||("string"===typeof w||"number"===typeof w?w:void 0),style:l,key:"scrollNumber"})}()),K()||!g?null:r.createElement("span",{className:"".concat(D,"-status-text")},g)))};e.default=b},dANV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PresetColorTypes=e.PresetStatusColorTypes=void 0;var r=n("KEtS"),o=(0,r.tuple)("success","processing","error","default","warning");e.PresetStatusColorTypes=o;var a=(0,r.tuple)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime");e.PresetColorTypes=a},ev5A:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==f(t)&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),a=n("i8i4"),i=l(n("x5Bg")),c=l(n("i6dq")),u=n("vgIT");function l(t){return t&&t.__esModule?t:{default:t}}function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(t){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==f(e)&&"function"!==typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t){return!t||null===t.offsetParent}var h=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(f,t);var e,n,l,s=m(f);function f(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.apply(this,arguments)).animationStart=!1,t.destroyed=!1,t.onClick=function(e,n){if(!(!e||g(e)||e.className.indexOf("-leave")>=0)){var o=t.props.insertExtraNode;t.extraNode=document.createElement("div");var a=v(t).extraNode,c=t.context.getPrefixCls;a.className="".concat(c(""),"-click-animating-node");var u=t.getAttributeName();e.setAttribute(u,"true"),r=r||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&function(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n&&(t.csp&&t.csp.nonce&&(r.nonce=t.csp.nonce),a.style.borderColor=n,r.innerHTML="\n      [".concat(c(""),"-click-animating-without-extra-node='true']::after, .").concat(c(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),document.body.contains(r)||document.body.appendChild(r)),o&&e.appendChild(a),i.default.addStartEventListener(e,t.onTransitionStart),i.default.addEndEventListener(e,t.onTransitionEnd)}},t.onTransitionStart=function(e){if(!t.destroyed){var n=(0,a.findDOMNode)(v(t));e&&e.target===n&&!t.animationStart&&t.resetEffect(n)}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!g(n.target)){t.resetEffect(e);var r=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(e,r)}),0),c.default.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=(0,c.default)((function(){t.animationStart=!1}),10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.renderWave=function(e){var n=e.csp,r=t.props.children;return t.csp=n,r},t}return e=f,(n=[{key:"componentDidMount",value:function(){var t=(0,a.findDOMNode)(this);t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,e=this.props.insertExtraNode;return"".concat(t(""),e?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var e=this.props.insertExtraNode,n=this.getAttributeName();t.setAttribute(n,"false"),r&&(r.innerHTML=""),e&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),i.default.removeStartEventListener(t,this.onTransitionStart),i.default.removeEndEventListener(t,this.onTransitionEnd)}}},{key:"render",value:function(){return o.createElement(u.ConfigConsumer,null,this.renderWave)}}])&&p(e.prototype,n),l&&p(e,l),f}(o.Component);e.default=h,h.contextType=u.ConfigContext},i6dq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var r,o=(r=n("xEkU"))&&r.__esModule?r:{default:r};var a=0,i={};function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=a++,r=e;return i[n]=(0,o.default)((function e(){(r-=1)<=0?(t(),delete i[n]):i[n]=(0,o.default)(e)})),n}c.cancel=function(t){void 0!==t&&(o.default.cancel(i[t]),delete i[t])},c.ids=i},vCXI:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.replaceElement=c,e.cloneElement=function(t,e){return c(t,t,e)},e.isValidElement=void 0;var o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=a();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var c=o?Object.getOwnPropertyDescriptor(t,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=t[i]}n.default=t,e&&e.set(t,n);return n}(n("q1tI"));function a(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}var i=o.isValidElement;function c(t,e,n){return i(t)?o.cloneElement(t,"function"===typeof n?n():n):e}e.isValidElement=i},x5Bg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},a=[],i=[];function c(t,e,n){t.addEventListener(e,n,!1)}function u(t,e,n){t.removeEventListener(e,n,!1)}"undefined"!==typeof window&&"undefined"!==typeof document&&function(){var t=document.createElement("div").style;function e(e,n){for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];for(var a in o)if(a in t){n.push(o[a]);break}}}"AnimationEvent"in window||(delete r.animationstart.animation,delete o.animationend.animation),"TransitionEvent"in window||(delete r.transitionstart.transition,delete o.transitionend.transition),e(r,a),e(o,i)}();var l={startEvents:a,addStartEventListener:function(t,e){0!==a.length?a.forEach((function(n){c(t,n,e)})):window.setTimeout(e,0)},removeStartEventListener:function(t,e){0!==a.length&&a.forEach((function(n){u(t,n,e)}))},endEvents:i,addEndEventListener:function(t,e){0!==i.length?i.forEach((function(n){c(t,n,e)})):window.setTimeout(e,0)},removeEndEventListener:function(t,e){0!==i.length&&i.forEach((function(n){u(t,n,e)}))}};e.default=l,t.exports=e.default}},[["KhRl",1,2,0,5,11,30,15]]]);