(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"29s/":function(t,e,n){var r=n("WEpk"),o=n("5T2Y"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("uOPS")?"pure":"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(t,e,n){var r=n("eaoh");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"2faE":function(t,e,n){var r=n("5K7Z"),o=n("eUtF"),i=n("G8Mo"),c=Object.defineProperty;e.f=n("jmDH")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"5K7Z":function(t,e,n){var r=n("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5vMV":function(t,e,n){var r=n("B+OT"),o=n("NsO/"),i=n("W070")(!1),c=n("VVlx")("IE_PROTO");t.exports=function(t,e){var n,s=o(t),u=0,a=[];for(n in s)n!=c&&r(s,n)&&a.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~i(a,n)||a.push(n));return a}},"93I4":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"B+OT":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"BGR+":function(t,e,n){"use strict";n.r(e);var r=n("QbLZ"),o=n.n(r);e.default=function(t,e){for(var n=o()({},t),r=0;r<e.length;r++){delete n[e[r]]}return n}},D8kY:function(t,e,n){var r=n("Ojgd"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},FpHa:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Hsns:function(t,e,n){var r=n("93I4"),o=n("5T2Y").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},JB68:function(t,e,n){var r=n("Jes0");t.exports=function(t){return Object(r(t))}},Jes0:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},KUxP:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},M1xp:function(t,e,n){var r=n("a0xu");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},NV0k:function(t,e){e.f={}.propertyIsEnumerable},NegM:function(t,e,n){var r=n("2faE"),o=n("rr1i");t.exports=n("jmDH")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"NsO/":function(t,e,n){var r=n("M1xp"),o=n("Jes0");t.exports=function(t){return r(o(t))}},Ojgd:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},P2sY:function(t,e,n){t.exports={default:n("UbbE"),__esModule:!0}},QbLZ:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("P2sY"),i=(r=o)&&r.__esModule?r:{default:r};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},UbbE:function(t,e,n){n("o8NH"),t.exports=n("WEpk").Object.assign},VVlx:function(t,e,n){var r=n("29s/")("keys"),o=n("YqAc");t.exports=function(t){return r[t]||(r[t]=o(t))}},W070:function(t,e,n){var r=n("NsO/"),o=n("tEej"),i=n("D8kY");t.exports=function(t){return function(e,n,c){var s,u=r(e),a=o(u.length),f=i(c,a);if(t&&n!=n){for(;a>f;)if((s=u[f++])!=s)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},WEpk:function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},Y7ZC:function(t,e,n){var r=n("5T2Y"),o=n("WEpk"),i=n("2GTP"),c=n("NegM"),s=n("B+OT"),u=function(t,e,n){var a,f,h,p=t&u.F,l=t&u.G,d=t&u.S,v=t&u.P,b=t&u.B,y=t&u.W,m=l?o:o[e]||(o[e]={}),_=m.prototype,O=l?r:d?r[e]:(r[e]||{}).prototype;for(a in l&&(n=e),n)(f=!p&&O&&void 0!==O[a])&&s(m,a)||(h=f?O[a]:n[a],m[a]=l&&"function"!=typeof O[a]?n[a]:b&&f?i(h,r):y&&O[a]==h?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(h):v&&"function"==typeof h?i(Function.call,h):h,v&&((m.virtual||(m.virtual={}))[a]=h,t&u.R&&_&&!_[a]&&c(_,a,h)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},YqAc:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},a0xu:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},bQgK:function(t,e,n){(function(e){(function(){var n,r,o,i,c,s;"undefined"!==typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!==typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-c)/1e6},r=e.hrtime,i=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),s=1e9*e.uptime(),c=i-s):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},bdgK:function(t,e,n){"use strict";n.r(e),function(t){var n=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return(function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}())}(),r="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,o="undefined"!==typeof t&&t.Math===Math?t:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),i="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},c=2;var s=20,u=["top","right","bottom","left","width","height","size","weight"],a="undefined"!==typeof MutationObserver,f=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function s(){n&&(n=!1,t()),r&&a()}function u(){i(s)}function a(){var t=Date.now();if(n){if(t-o<c)return;r=!0}else n=!0,r=!1,setTimeout(u,e);o=t}return a}(this.refresh.bind(this),s)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;u.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},p=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},l=_(0,0,0,0);function d(t){return parseFloat(t)||0}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+d(t["border-"+n+"-width"])}),0)}function b(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var r=p(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=d(i)}return e}(r),i=o.left+o.right,c=o.top+o.bottom,s=d(r.width),u=d(r.height);if("border-box"===r.boxSizing&&(Math.round(s+i)!==e&&(s-=v(r,"left","right")+i),Math.round(u+c)!==n&&(u-=v(r,"top","bottom")+c)),!function(t){return t===p(t).document.documentElement}(t)){var a=Math.round(s+i)-e,f=Math.round(u+c)-n;1!==Math.abs(a)&&(s-=a),1!==Math.abs(f)&&(u-=f)}return _(o.left,o.top,s,u)}var y="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof p(t).SVGGraphicsElement}:function(t){return t instanceof p(t).SVGElement&&"function"===typeof t.getBBox};function m(t){return r?y(t)?function(t){var e=t.getBBox();return _(0,0,e.width,e.height)}(t):b(t):l}function _(t,e,n,r){return{x:t,y:e,width:n,height:r}}var O=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=_(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),w=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,o=t.height,i="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(i.prototype);return h(c,{x:e,y:n,width:r,height:o,top:n,right:e+r,bottom:o+n,left:e}),c}(e);h(this,{target:t,contentRect:n})},g=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new O(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof p(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new w(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!==typeof WeakMap?new WeakMap:new n,x=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f.getInstance(),r=new g(e,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){x.prototype[t]=function(){var e;return(e=E.get(this))[t].apply(e,arguments)}}));var j="undefined"!==typeof o.ResizeObserver?o.ResizeObserver:x;e.default=j}.call(this,n("yLpj"))},"c+Xe":function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){e.forEach((function(e){!function(t,e){"function"===typeof t?t(e):"object"===r(t)&&t&&"current"in t&&(t.current=e)}(e,t)}))}}function i(t){return!(t.type&&t.type.prototype&&!t.type.prototype.render)&&!("function"===typeof t&&t.prototype&&!t.prototype.render)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}))},eUtF:function(t,e,n){t.exports=!n("jmDH")&&!n("KUxP")((function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a}))},eaoh:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},jmDH:function(t,e,n){t.exports=!n("KUxP")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},kwZ1:function(t,e,n){"use strict";var r=n("jmDH"),o=n("w6GO"),i=n("mqlF"),c=n("NV0k"),s=n("JB68"),u=n("M1xp"),a=Object.assign;t.exports=!a||n("KUxP")((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r}))?function(t,e){for(var n=s(t),a=arguments.length,f=1,h=i.f,p=c.f;a>f;)for(var l,d=u(arguments[f++]),v=h?o(d).concat(h(d)):o(d),b=v.length,y=0;b>y;)l=v[y++],r&&!p.call(d,l)||(n[l]=d[l]);return n}:a},"m+aA":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("i8i4"),o=n.n(r);function i(t){return t instanceof HTMLElement?t:o.a.findDOMNode(t)}},mqlF:function(t,e){e.f=Object.getOwnPropertySymbols},o8NH:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F,"Object",{assign:n("kwZ1")})},rr1i:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},t23M:function(t,e,n){"use strict";n.r(e);var r=n("rePB"),o=n("1OyB"),i=n("vuIU"),c=n("Ji7U"),s=n("md7G"),u=n("foSv"),a=n("q1tI"),f=n("m+aA"),h=n("Zm9Q"),p=n("Kwbf"),l=n("c+Xe"),d=n("bdgK");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var m=function(){var t=function(t){Object(c.a)(n,t);var e=y(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).resizeObserver=null,t.childNode=null,t.currentElement=null,t.state={width:0,height:0},t.onResize=function(e){var n=t.props.onResize,r=e[0].target,o=r.getBoundingClientRect(),i=o.width,c=o.height,s=r.offsetWidth,u=r.offsetHeight,a=Math.floor(i),f=Math.floor(c);if(t.state.width!==a||t.state.height!==f){var h={width:a,height:f};t.setState(h),n&&n(b(b({},h),{},{offsetWidth:s,offsetHeight:u}))}},t.setChildNode=function(e){t.childNode=e},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var t=Object(f.a)(this.childNode||this);t!==this.currentElement&&(this.destroyObserver(),this.currentElement=t),!this.resizeObserver&&t&&(this.resizeObserver=new d.default(this.onResize),this.resizeObserver.observe(t))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var t=this.props.children,e=Object(h.a)(t);if(e.length>1)Object(p.a)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===e.length)return Object(p.a)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=e[0];if(a.isValidElement(n)&&Object(l.b)(n)){var r=n.ref;e[0]=a.cloneElement(n,{ref:Object(l.a)(r,this.setChildNode)})}return 1===e.length?e[0]:e.map((function(t,e){return!a.isValidElement(t)||"key"in t&&null!==t.key?t:a.cloneElement(t,{key:"".concat("rc-observer-key","-").concat(e)})}))}}]),n}(a.Component);return t.displayName="ResizeObserver",t}();e.default=m},tEej:function(t,e,n){var r=n("Ojgd"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},uOPS:function(t,e){t.exports=!0},w6GO:function(t,e,n){var r=n("5vMV"),o=n("FpHa");t.exports=Object.keys||function(t){return r(t,o)}},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},xEkU:function(t,e,n){(function(e){for(var r=n("bQgK"),o="undefined"===typeof window?e:window,i=["moz","webkit"],c="AnimationFrame",s=o["request"+c],u=o["cancel"+c]||o["cancelRequest"+c],a=0;!s&&a<i.length;a++)s=o[i[a]+"Request"+c],u=o[i[a]+"Cancel"+c]||o[i[a]+"CancelRequest"+c];if(!s||!u){var f=0,h=0,p=[];s=function(t){if(0===p.length){var e=r(),n=Math.max(0,1e3/60-(e-f));f=n+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(f)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return p.push({handle:++h,callback:t,cancelled:!1}),h},u=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return s.call(o,t)},t.exports.cancel=function(){u.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=s,t.cancelAnimationFrame=u}}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}}]);