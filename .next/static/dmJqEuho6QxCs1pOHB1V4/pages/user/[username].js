(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"5D78":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s}));n("MQDG");var a=n("rR1Q"),r=n.n(a);function o(t){return t.success?r.a.success({message:t.title,description:t.content}):r.a.error({message:t.title,description:t.content}),t.success}function s(t){"undefined"!==typeof document&&(Notification.requestPermission(),new Notification("\u901a\u77e5",{body:t,icon:"/static/img/logo_196x196.png"}))}},"EE/t":function(t,e,n){"use strict";n.r(e);n("RV09");var a=n("N9UN"),r=n.n(a),o=(n("X1UN"),n("hqwM")),s=n.n(o),c=(n("SoD3"),n("9xET")),i=n.n(c),u=(n("1mXb"),n("iJl9")),l=n.n(u),f=(n("YKpo"),n("ZPTe")),p=n.n(f),d=(n("89vs"),n("lbd2")),v=n.n(d),h=(n("bAY4"),n("4IMT")),g=n.n(h),m=(n("SJAb"),n("pWf2")),y=n.n(m),b=n("o0o1"),O=n.n(b),j=n("HaE+"),w=n("1OyB"),S=n("vuIU"),_=n("JX7q"),x=n("Ji7U"),k=n("md7G"),P=n("foSv"),E=n("rePB"),q=n("q1tI"),C=n.n(q),A=n("8Kt/"),I=n.n(A),R=n("nOHt"),N=n("pJr+"),D=n("dSKx"),T=n("AoAR"),W=n("5D78"),Q=n("IgCw"),M=C.a.createElement;function J(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(P.a)(t);if(e){var r=Object(P.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(k.a)(this,n)}}var G=function(t){Object(x.a)(n,t);var e=J(n);function n(t){var a;return Object(w.a)(this,n),a=e.call(this,t),Object(E.a)(Object(_.a)(a),"context",void 0),Object(E.a)(Object(_.a)(a),"getData",Object(j.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T.p)(a.props.router.query.username);case 2:e=t.sent,a.setState({user:e});case 4:case"end":return t.stop()}}),t)})))),Object(E.a)(Object(_.a)(a),"update",Object(j.a)(O.a.mark((function t(){var e,n,r,o,s,c,i,u,l,f;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.setState({loading:!0}),e=a.state.user,n=e.username,r=e.email,o=e.ns_id,s=e.ns_name,c=e.ac_name,i=e.ac_island,u=e.qq,l=e.avatar,t.next=4,Object(T.P)(n,r,l,o,s,c,i,u,a.state.password);case 4:f=t.sent,Object(W.b)(f)&&(a.props.router.push("/user/[username]","/user/".concat(n)),a.context.callback({user:a.state.user})),a.setState({loading:!1});case 7:case"end":return t.stop()}}),t)})))),a.state={user:a.props.user,loading:!1,loadingAvatar:!1,password:""},a}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var t=this,e=[{key:"avatar",name:"\u5934\u50cf",self:!0,rewrite:function(t){return t.replace("http://","https://")}},{key:"username",name:"\u7528\u6237\u540d",self:!1},{key:"email",name:"\u90ae\u7bb1",self:!1},{key:"qq",name:"QQ \u53f7",self:!0},{key:"ns_id",name:"NS ID",self:!1,prefix:"SW",rewrite:function(t){return t.replace(/[^0-9\-]/g,"")}},{key:"ns_name",name:"NS \u540d\u79f0",self:!1},{key:"ac_name",name:"\u52a8\u68ee\u540d\u79f0",self:!1},{key:"ac_island",name:"\u52a8\u68ee\u5c9b\u540d",self:!1,suffix:"\u5c9b",rewrite:function(t){return t.length>0&&"\u5c9b"==t[t.length-1]&&(t=t.slice(0,t.length-1)),t}}],n=this.state.user.self?e:e.filter((function(t){return!t.self}));return M(N.c,null,M(D.a.Consumer,null,(function(e){return M(I.a,null,M("title",null,"".concat(t.props.router.query.username,"|\u7528\u6237\u9875|").concat(e.blog_name)))})),M(r.a,null,M("p",{style:{textAlign:"center"}},M(y.a,{size:128,src:this.state.user.avatar})),M(Q.a,{condition:this.state.user.self},M(N.a,{direction:"horizontal",flexCenter:!0},M(g.a,{loading:this.state.loadingAvatar,onClick:Object(j.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loadingAvatar:!0}),e.next=3,Object(T.g)(t.state.user.email);case 3:n=e.sent,t.setState((function(t){var e=t.user;return e.avatar=n.avatar,{user:e,loadingAvatar:!1}}));case 5:case"end":return e.stop()}}),e)})))},"\u6839\u636e\u90ae\u7bb1\u66f4\u65b0 Github\u3001Gavatar \u5934\u50cf"),M("a",{href:"/api/user/qq_avatar",target:"_blank"},M(g.a,{disabled:!this.state.user.qq_connected},"\u66f4\u65b0 QQ \u5934\u50cf")),M(g.a,{onClick:function(){return t.getData()}},"\u5237\u65b0\u6570\u636e"))),M(s.a,{dataSource:n,renderItem:function(e){return M(s.a.Item,{key:e.key},M(i.a,{style:{width:"100%"}},M(p.a,{span:4},M(v.a.Text,{strong:!0},e.name)),M(p.a,{span:20},t.state.user.self?M(l.a,{addonBefore:e.prefix,addonAfter:e.suffix,value:t.state.user[e.key],onChange:function(n){var a=n.target.value;e.rewrite&&(a=e.rewrite(a)),t.setState((function(t){var n=t.user;return n[e.key]=a,{user:n}}))}}):M("p",null,e.prefix," ",t.state.user[e.key]," ",e.suffix))))}}),M(Q.a,{condition:this.state.user.self},M(N.a,null,M(l.a,{type:"password",placeholder:"\u5982\u679c\u4e0d\u9700\u8981\u4fee\u6539\u5bc6\u7801\u8bf7\u7559\u7a7a",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})}}),M(i.a,{justify:"space-between"},M(p.a,null,this.state.user.qq_connected?M(g.a,{disabled:!0},"\u5df2\u7ed1\u5b9a QQ \u767b\u5f55"):M("a",{href:"/api/user/jump_to_qq?state=connect",target:"_blank"},M(g.a,null,"\u7ed1\u5b9a QQ \u767b\u5f55"))),M(p.a,null,this.state.user.github_connected?M(g.a,{disabled:!0},"\u5df2\u7ed1\u5b9a Github \u767b\u5f55"):M("a",{href:"/api/user/jump_to_github?state=connect",target:"_blank"},M(g.a,null,"\u7ed1\u5b9a Github \u767b\u5f55"))),M(p.a,{style:{textAlign:"right"}},M(g.a,{loading:this.state.loading,type:"primary",onClick:this.update},"\u66f4\u65b0\u4fe1\u606f")))))))}}],[{key:"getInitialProps",value:function(){var t=Object(j.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T.p)(e.query.username);case 2:return n=t.sent,t.abrupt("return",{user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(C.a.Component);Object(E.a)(G,"defaultProps",{}),Object(E.a)(G,"contextType",D.a),e.default=Object(R.withRouter)(G)},IgCw:function(t,e,n){"use strict";var a=n("1OyB"),r=n("vuIU"),o=n("Ji7U"),s=n("md7G"),c=n("foSv"),i=n("rePB"),u=n("q1tI");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}var f=function(t){Object(o.a)(n,t);var e=l(n);function n(t){return Object(a.a)(this,n),e.call(this,t)}return Object(r.a)(n,[{key:"render",value:function(){return this.props.condition?this.props.children:null}}]),n}(n.n(u).a.Component);Object(i.a)(f,"defaultProps",{condition:!0}),e.a=f},SJAb:function(t,e,n){"use strict";n("1SKB"),n("Tlp2")},Tlp2:function(t,e,n){t.exports={"ant-avatar":"ant-avatar",antAvatar:"ant-avatar","ant-avatar-image":"ant-avatar-image",antAvatarImage:"ant-avatar-image","ant-avatar-string":"ant-avatar-string",antAvatarString:"ant-avatar-string","ant-avatar-icon":"ant-avatar-icon",antAvatarIcon:"ant-avatar-icon",anticon:"anticon","ant-avatar-lg":"ant-avatar-lg",antAvatarLg:"ant-avatar-lg","ant-avatar-lg-string":"ant-avatar-lg-string",antAvatarLgString:"ant-avatar-lg-string","ant-avatar-sm":"ant-avatar-sm",antAvatarSm:"ant-avatar-sm","ant-avatar-sm-string":"ant-avatar-sm-string",antAvatarSmString:"ant-avatar-sm-string","ant-avatar-square":"ant-avatar-square",antAvatarSquare:"ant-avatar-square"}},pWf2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==u(t)&&"function"!==typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var o=a?Object.getOwnPropertyDescriptor(t,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=t[r]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),r=c(n("TSYQ")),o=n("vgIT"),s=c(n("m4nH"));function c(t){return t&&t.__esModule?t:{default:t}}function i(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=g(t);if(e){var r=g(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},y=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(u,t);var e,n,c,i=v(u);function u(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.apply(this,arguments)).state={scale:1,mounted:!1,isImgExist:!0},t.setScale=function(){if(t.avatarChildren&&t.avatarNode){var e=t.avatarChildren.offsetWidth,n=t.avatarNode.offsetWidth,a=t.props.gap,r=void 0===a?4:a;0===e||0===n||t.lastChildrenWidth===e&&t.lastNodeWidth===n||(t.lastChildrenWidth=e,t.lastNodeWidth=n),2*r<n&&t.setState({scale:n-2*r<e?(n-2*r)/e:1})}},t.handleImgLoadError=function(){var e=t.props.onError;!1!==(e?e():void 0)&&t.setState({isImgExist:!1})},t.renderAvatar=function(e){var n,o,c=e.getPrefixCls,i=t.props,u=i.prefixCls,p=i.shape,d=i.size,v=i.src,h=i.srcSet,g=i.icon,y=i.className,b=i.alt,O=i.draggable,j=m(i,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable"]);(0,s.default)(!("string"===typeof g&&g.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(g,"` at https://ant.design/components/icon"));var w=t.state,S=w.isImgExist,_=w.scale,x=(w.mounted,c("avatar",u)),k=(0,r.default)((f(n={},"".concat(x,"-lg"),"large"===d),f(n,"".concat(x,"-sm"),"small"===d),n)),P=(0,r.default)(x,y,k,(f(o={},"".concat(x,"-").concat(p),p),f(o,"".concat(x,"-image"),v&&S),f(o,"".concat(x,"-icon"),g),o)),E="number"===typeof d?{width:d,height:d,lineHeight:"".concat(d,"px"),fontSize:g?d/2:18}:{},q=t.props.children;if(v&&S)q=a.createElement("img",{src:v,draggable:O,srcSet:h,onError:t.handleImgLoadError,alt:b});else if(g)q=g;else{if(t.avatarChildren||1!==_){var C="scale(".concat(_,") translateX(-50%)"),A={msTransform:C,WebkitTransform:C,transform:C},I="number"===typeof d?{lineHeight:"".concat(d,"px")}:{};q=a.createElement("span",{className:"".concat(x,"-string"),ref:function(e){return t.avatarChildren=e},style:l(l({},I),A)},q)}else{q=a.createElement("span",{className:"".concat(x,"-string"),style:{opacity:0},ref:function(e){return t.avatarChildren=e}},q)}}return delete j.onError,delete j.gap,a.createElement("span",l({},j,{style:l(l({},E),j.style),className:P,ref:function(e){return t.avatarNode=e}}),q)},t}return e=u,(n=[{key:"componentDidMount",value:function(){this.setScale(),this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&this.setState({isImgExist:!0,scale:1}),t.children===this.props.children&&t.gap===this.props.gap||this.setScale()}},{key:"render",value:function(){return a.createElement(o.ConfigConsumer,null,this.renderAvatar)}}])&&p(e.prototype,n),c&&p(e,c),u}(a.Component);e.default=y,y.defaultProps={shape:"circle",size:"default"}},rc3b:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[username]",function(){return n("EE/t")}])}},[["rc3b",1,2,0,4,3,7,5,6,9,8,10,11,12,13,14,17,25,24]]]);