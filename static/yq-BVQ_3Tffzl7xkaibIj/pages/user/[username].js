(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"57m7":function(t,e,n){"use strict";n("1SKB"),n("m3Kr")},"5D78":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("MQDG");var a=n("rR1Q"),r=n.n(a);function o(t){return t.success?r.a.success({message:t.title,description:t.content}):r.a.error({message:t.title,description:t.content}),t.success}},Cp9S:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=r?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=c(n("TSYQ")),s=c(n("0r0h")),i=n("vgIT");function c(t){return t&&t.__esModule?t:{default:t}}function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},d={small:8,middle:16,large:24},v=function(t){var e=r.useContext(i.ConfigContext),n=e.getPrefixCls,a=e.space,c=e.direction,u=t.size,v=void 0===u?(null===a||void 0===a?void 0:a.size)||"small":u,y=t.className,m=t.children,b=t.direction,g=void 0===b?"horizontal":b,h=t.prefixCls,O=p(t,["size","className","children","direction","prefixCls"]),j=(0,s.default)(m),w=j.length;if(0===w)return null;var S=n("space",h),_=(0,o.default)(S,"".concat(S,"-").concat(g),f({},"".concat(S,"-rtl"),"rtl"===c),y),x="".concat(S,"-item"),P="rtl"===c?"marginLeft":"marginRight";return r.createElement("div",l({className:_},O),j.map((function(t,e){return r.createElement("div",{className:x,key:"".concat(x,"-").concat(e),style:e===w-1?{}:f({},"vertical"===g?"marginBottom":P,"string"===typeof v?d[v]:v)},t)})))};e.default=v},"EE/t":function(t,e,n){"use strict";n.r(e);n("RV09");var a=n("N9UN"),r=n.n(a),o=(n("57m7"),n("Cp9S")),s=n.n(o),i=(n("1mXb"),n("iJl9")),c=n.n(i),u=(n("X1UN"),n("hqwM")),l=n.n(u),f=(n("89vs"),n("lbd2")),p=n.n(f),d=(n("SoD3"),n("9xET")),v=n.n(d),y=(n("YKpo"),n("ZPTe")),m=n.n(y),b=(n("bAY4"),n("4IMT")),g=n.n(b),h=(n("SJAb"),n("pWf2")),O=n.n(h),j=n("eVuF"),w=n.n(j),S=n("ln6h"),_=n.n(S),x=n("0iUn"),P=n("sLSF"),k=n("MI3g"),C=n("a7VT"),E=n("AT/M"),I=n("Tit0"),q=n("vYYK"),A=n("q1tI"),T=n.n(A),N=n("8Kt/"),M=n.n(N),D=n("nOHt"),W=n("pJr+"),Q=n("dSKx"),R=n("AoAR"),z=n("5D78"),K=n("IgCw"),Y=T.a.createElement,L=function(t){function e(t){var n;return Object(x.a)(this,e),n=Object(k.a)(this,Object(C.a)(e).call(this,t)),Object(q.a)(Object(E.a)(n),"context",void 0),Object(q.a)(Object(E.a)(n),"getData",(function(){var t;return _.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.awrap(Object(R.p)(n.props.router.query.username));case 2:t=e.sent,n.setState({user:t});case 4:case"end":return e.stop()}}),null,null,null,w.a)})),Object(q.a)(Object(E.a)(n),"onChange",(function(t,e){n.setState((function(n){var a=n.user;return a[t]=e,{user:a}}))})),Object(q.a)(Object(E.a)(n),"update",(function(){var t,e,a,r,o,s,i,c,u,l;return _.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:return n.setState({loading:!0}),t=n.state.user,e=t.username,a=t.email,r=t.ns_id,o=t.ns_name,s=t.ac_name,i=t.ac_island,c=t.qq,u=t.avatar,f.next=4,_.a.awrap(Object(R.F)(e,a,u,r,o,s,i,c,n.state.password));case 4:l=f.sent,Object(z.a)(l)&&(n.props.router.push("/user/[username]","/user/".concat(e)),n.context.callback({user:n.state.user})),n.setState({loading:!1});case 7:case"end":return f.stop()}}),null,null,null,w.a)})),n.state={user:n.props.user,loading:!1,loadingAvatar:!1,password:""},n}return Object(I.a)(e,t),Object(P.a)(e,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var t=this,e=[{key:"avatar",name:"\u5934\u50cf",self:!0},{key:"username",name:"\u7528\u6237\u540d",self:!1},{key:"email",name:"\u90ae\u7bb1",self:!1},{key:"qq",name:"QQ \u53f7",self:!0},{key:"ns_id",name:"NS ID",self:!1},{key:"ns_name",name:"NS \u540d\u79f0",self:!1},{key:"ac_name",name:"\u52a8\u68ee\u540d\u79f0",self:!1},{key:"ac_island",name:"\u52a8\u68ee\u5c9b\u540d",self:!1}],n=this.state.user.self?e:e.filter((function(t){return!t.self}));return Y(W.a,null,Y(Q.a.Consumer,null,(function(e){return Y(M.a,null,Y("title",null,"".concat(t.props.router.query.username,"|\u7528\u6237\u9875|").concat(e.blog_name)))})),Y(r.a,null,Y("p",{style:{textAlign:"center"}},Y(O.a,{size:128,src:this.state.user.avatar})),Y(K.a,{condition:this.state.user.self},Y(v.a,{justify:"center",gutter:20},Y(m.a,null,Y(g.a,{loading:this.state.loadingAvatar,onClick:function(){var e;return _.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setState({loadingAvatar:!0}),n.next=3,_.a.awrap(Object(R.g)(t.state.user.email));case 3:e=n.sent,t.setState((function(t){var n=t.user;return n.avatar=e.avatar,{user:n,loadingAvatar:!1}}));case 5:case"end":return n.stop()}}),null,null,null,w.a)}},"\u6839\u636e\u90ae\u7bb1\u66f4\u65b0 Github\u3001Gavatar \u5934\u50cf")),Y(m.a,null,Y("a",{href:"/api/user/qq_avatar",target:"_blank"},Y(g.a,{disabled:!this.state.user.qq_connected},"\u66f4\u65b0 QQ \u5934\u50cf"))),Y(m.a,null,Y(g.a,{onClick:function(){return t.getData()}},"\u5237\u65b0\u6570\u636e")))),Y(l.a,{dataSource:n,renderItem:function(e){return Y(l.a.Item,{key:e.key},Y(v.a,{style:{width:"100%"}},Y(m.a,{span:4},Y(p.a.Text,{strong:!0},e.name)),Y(m.a,{span:20},Y(p.a.Text,{copyable:!0,editable:!!t.state.user.self&&{onChange:function(n){return t.onChange(e.key,n)}}},t.state.user[e.key]))))}}),Y(K.a,{condition:this.state.user.self},Y(s.a,{direction:"vertical",style:{width:"100%"}},Y(c.a,{type:"password",placeholder:"\u5982\u679c\u4e0d\u9700\u8981\u4fee\u6539\u5bc6\u7801\u8bf7\u7559\u7a7a",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})}}),Y(v.a,{justify:"space-between"},Y(m.a,null,this.state.user.qq_connected?Y(g.a,{disabled:!0},"\u5df2\u7ed1\u5b9a QQ \u767b\u5f55"):Y("a",{href:"/api/user/jump_to_qq?state=connect",target:"_blank"},Y(g.a,null,"\u7ed1\u5b9a QQ \u767b\u5f55"))),Y(m.a,{style:{textAlign:"right"}},Y(g.a,{loading:this.state.loading,type:"primary",onClick:this.update},"\u66f4\u65b0\u4fe1\u606f")))))))}}],[{key:"getInitialProps",value:function(t){var e;return _.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_.a.awrap(Object(R.p)(t.query.username));case 2:return e=n.sent,n.abrupt("return",{user:e});case 4:case"end":return n.stop()}}),null,null,null,w.a)}}]),e}(T.a.Component);Object(q.a)(L,"defaultProps",{}),Object(q.a)(L,"contextType",Q.a),e.default=Object(D.withRouter)(L)},IgCw:function(t,e,n){"use strict";var a=n("0iUn"),r=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("Tit0"),c=n("vYYK"),u=n("q1tI"),l=function(t){function e(t){return Object(a.a)(this,e),Object(o.a)(this,Object(s.a)(e).call(this,t))}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return this.props.condition?this.props.children:null}}]),e}(n.n(u).a.Component);Object(c.a)(l,"defaultProps",{condition:!0}),e.a=l},SJAb:function(t,e,n){"use strict";n("1SKB"),n("Tlp2")},Tlp2:function(t,e,n){t.exports={"ant-avatar":"ant-avatar",antAvatar:"ant-avatar","ant-avatar-image":"ant-avatar-image",antAvatarImage:"ant-avatar-image","ant-avatar-string":"ant-avatar-string",antAvatarString:"ant-avatar-string","ant-avatar-icon":"ant-avatar-icon",antAvatarIcon:"ant-avatar-icon",anticon:"anticon","ant-avatar-lg":"ant-avatar-lg",antAvatarLg:"ant-avatar-lg","ant-avatar-lg-string":"ant-avatar-lg-string",antAvatarLgString:"ant-avatar-lg-string","ant-avatar-sm":"ant-avatar-sm",antAvatarSm:"ant-avatar-sm","ant-avatar-sm-string":"ant-avatar-sm-string",antAvatarSmString:"ant-avatar-sm-string","ant-avatar-square":"ant-avatar-square",antAvatarSquare:"ant-avatar-square"}},pWf2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==u(t)&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var o=a?Object.getOwnPropertyDescriptor(t,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=t[r]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),r=i(n("TSYQ")),o=n("vgIT"),s=i(n("aVg8"));function i(t){return t&&t.__esModule?t:{default:t}}function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},g=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(g,t);var e,n,i,c,u=(e=g,function(){var t,n=m(e);if(y()){var a=m(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return v(this,t)});function g(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,g),(t=u.apply(this,arguments)).state={scale:1,mounted:!1,isImgExist:!0},t.setScale=function(){if(t.avatarChildren&&t.avatarNode){var e=t.avatarChildren.offsetWidth,n=t.avatarNode.offsetWidth;0===e||0===n||t.lastChildrenWidth===e&&t.lastNodeWidth===n||(t.lastChildrenWidth=e,t.lastNodeWidth=n,t.setState({scale:n-8<e?(n-8)/e:1}))}},t.handleImgLoadError=function(){var e=t.props.onError;!1!==(e?e():void 0)&&t.setState({isImgExist:!1})},t.renderAvatar=function(e){var n,o,i=e.getPrefixCls,c=t.props,u=c.prefixCls,p=c.shape,d=c.size,v=c.src,y=c.srcSet,m=c.icon,g=c.className,h=c.alt,O=b(c,["prefixCls","shape","size","src","srcSet","icon","className","alt"]);(0,s.default)(!("string"===typeof m&&m.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(m,"` at https://ant.design/components/icon"));var j=t.state,w=j.isImgExist,S=j.scale,_=(j.mounted,i("avatar",u)),x=(0,r.default)((f(n={},"".concat(_,"-lg"),"large"===d),f(n,"".concat(_,"-sm"),"small"===d),n)),P=(0,r.default)(_,g,x,(f(o={},"".concat(_,"-").concat(p),p),f(o,"".concat(_,"-image"),v&&w),f(o,"".concat(_,"-icon"),m),o)),k="number"===typeof d?{width:d,height:d,lineHeight:"".concat(d,"px"),fontSize:m?d/2:18}:{},C=t.props.children;if(v&&w)C=a.createElement("img",{src:v,srcSet:y,onError:t.handleImgLoadError,alt:h});else if(m)C=m;else{if(t.avatarChildren||1!==S){var E="scale(".concat(S,") translateX(-50%)"),I={msTransform:E,WebkitTransform:E,transform:E},q="number"===typeof d?{lineHeight:"".concat(d,"px")}:{};C=a.createElement("span",{className:"".concat(_,"-string"),ref:function(e){return t.avatarChildren=e},style:l(l({},q),I)},C)}else{C=a.createElement("span",{className:"".concat(_,"-string"),style:{opacity:0},ref:function(e){return t.avatarChildren=e}},C)}}return a.createElement("span",l({},O,{style:l(l({},k),O.style),className:P,ref:function(e){return t.avatarNode=e}}),C)},t}return n=g,(i=[{key:"componentDidMount",value:function(){this.setScale(),this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(t){this.setScale(),t.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return a.createElement(o.ConfigConsumer,null,this.renderAvatar)}}])&&p(n.prototype,i),c&&p(n,c),g}(a.Component);e.default=g,g.defaultProps={shape:"circle",size:"default"}},rc3b:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[username]",function(){return n("EE/t")}])}},[["rc3b",1,2,0,3,4,5,7,6,8,9,10,13,11,12,14,15,20,23,17]]]);