(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(u.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},u=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,u=e.hasQuery;return n||a&&(void 0!==u&&u)}},"5D78":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u}));var r=n("wvHr");function a(e){return e.success?Object(r.b)({title:e.title,content:e.content,alertType:"success"}):Object(r.b)({title:e.title,content:e.content,alertType:"error"}),e.success}function u(e){"undefined"!==typeof document&&(Notification.requestPermission(),new Notification("\u901a\u77e5",{body:e,icon:"/static/img/logo_196x196.png"}))}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=i(n("q1tI")),a=i(n("Xuae")),u=n("lwAK"),o=n("FYa8"),c=n("/0+H");function i(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var u=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?u=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?u=!1:t.add(a.type);break;case"meta":for(var c=0,i=l.length;c<i;c++){var s=l[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?u=!1:n.add(s);else{var f=a.props[s],d=r[s]||new Set;d.has(f)?u=!1:(d.add(f),r[s]=d)}}}return u}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,a.default)();function m(e){var t=e.children;return(r.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(o.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var h=m;t.default=h},"EE/t":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),u=n("HaE+"),o=n("1OyB"),c=n("vuIU"),i=n("JX7q"),s=n("Ji7U"),f=n("md7G"),l=n("foSv"),d=n("rePB"),p=n("q1tI"),m=n.n(p),h=n("8Kt/"),v=n.n(h),y=n("nOHt"),b=n("pJr+"),w=n("Au3V"),g=n("bTPZ"),k=n("tJ/W"),_=n("HXPj"),j=n("IgCw"),O=n("dSKx"),S=n("AoAR"),x=n("5D78"),C=m.a.createElement;function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var A=function(e){Object(s.a)(n,e);var t=q(n);function n(e){var r;return Object(o.a)(this,n),r=t.call(this,e),Object(d.a)(Object(i.a)(r),"context",void 0),Object(d.a)(Object(i.a)(r),"getData",Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.p)(r.props.router.query.username);case 2:t=e.sent,r.setState({user:t});case 4:case"end":return e.stop()}}),e)})))),Object(d.a)(Object(i.a)(r),"update",Object(u.a)(a.a.mark((function e(){var t,n,u,o,c,i,s,f,l,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({loading:!0}),t=r.state.user,n=t.username,u=t.email,o=t.ns_id,c=t.ns_name,i=t.ac_name,s=t.ac_island,f=t.qq,l=t.avatar,e.next=4,Object(S.P)(n,u,l,o,c,i,s,f,r.state.password);case 4:d=e.sent,Object(x.b)(d)&&(r.props.router.push("/user/[username]","/user/".concat(n)),r.context.callback({user:r.state.user})),r.setState({loading:!1});case 7:case"end":return e.stop()}}),e)})))),r.state={user:r.props.user,loading:!1,loadingAvatar:!1,password:""},r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=[{key:"avatar",name:"\u5934\u50cf",self:!0,rewrite:function(e){return e.replace("http://","https://")}},{key:"username",name:"\u7528\u6237\u540d",self:!1},{key:"email",name:"\u90ae\u7bb1",self:!1},{key:"qq",name:"QQ \u53f7",self:!0},{key:"ns_id",name:"NS ID",self:!1,prefix:"SW",rewrite:function(e){return e.replace(/[^0-9\-]/g,"")}},{key:"ns_name",name:"NS \u540d\u79f0",self:!1},{key:"ac_name",name:"\u52a8\u68ee\u540d\u79f0",self:!1},{key:"ac_island",name:"\u52a8\u68ee\u5c9b\u540d",self:!1,suffix:"\u5c9b",rewrite:function(e){return e.length>0&&"\u5c9b"==e[e.length-1]&&(e=e.slice(0,e.length-1)),e}}],n=this.state.user.self?t:t.filter((function(e){return!e.self}));return C(g.a,{neumorphism:!0},C(O.a.Consumer,null,(function(t){return C(v.a,null,C("title",null,"".concat(e.props.router.query.username,"|\u7528\u6237\u9875|").concat(t.blog_name)))})),C(b.a,{direction:"TB",fullWidth:!0},C(_.a,{style:{fontSize:128,margin:"auto"},src:this.state.user.avatar}),C(j.a,{condition:this.state.user.self},C(b.a,null,C(w.b,{neumorphism:!0,loading:this.state.loadingAvatar,onClick:Object(u.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loadingAvatar:!0}),t.next=3,Object(S.g)(e.state.user.email);case 3:n=t.sent,e.setState((function(e){var t=e.user;return t.avatar=n.avatar,{user:t,loadingAvatar:!1}}));case 5:case"end":return t.stop()}}),t)})))},"\u6839\u636e\u90ae\u7bb1\u66f4\u65b0 Github\u3001Gavatar \u5934\u50cf"),C("a",{href:"/api/user/qq_avatar",target:"_blank"},C(w.b,{neumorphism:!0,disabled:!this.state.user.qq_connected},"\u66f4\u65b0 QQ \u5934\u50cf")),C(w.b,{neumorphism:!0,onClick:function(){return e.getData()}},"\u5237\u65b0\u6570\u636e"))),C(b.a,{direction:"TB",fullWidth:!0},n.map((function(t){return e.state.user.self?C(k.j,{key:t.key,label:t.name,prefix:t.prefix,suffix:t.suffix,value:e.state.user[t.key],onChange:function(n){t.rewrite&&(n=t.rewrite(n)),e.setState((function(e){var r=e.user;return r[t.key]=n,{user:r}}))}}):C("p",null,t.prefix," ",e.state.user[t.key]," ",t.suffix)}))),C(j.a,{condition:this.state.user.self},C(b.a,null,C(k.j,{type:"password",placeholder:"\u5982\u679c\u4e0d\u9700\u8981\u4fee\u6539\u5bc6\u7801\u8bf7\u7559\u7a7a",value:this.state.password,onChange:function(t){return e.setState({password:t})}}),this.state.user.qq_connected?C(w.b,{neumorphism:!0,disabled:!0},"\u5df2\u7ed1\u5b9a QQ \u767b\u5f55"):C("a",{href:"/api/user/jump_to_qq?state=connect",target:"_blank"},C(w.b,{neumorphism:!0},"\u7ed1\u5b9a QQ \u767b\u5f55")),this.state.user.github_connected?C(w.b,{neumorphism:!0,disabled:!0},"\u5df2\u7ed1\u5b9a Github \u767b\u5f55"):C("a",{href:"/api/user/jump_to_github?state=connect",target:"_blank"},C(w.b,{neumorphism:!0},"\u7ed1\u5b9a Github \u767b\u5f55")),C(w.b,{neumorphism:!0,loading:this.state.loading,primary:!0,onClick:this.update},"\u66f4\u65b0\u4fe1\u606f")))))}}],[{key:"getInitialProps",value:function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.p)(t.query.username);case 2:return n=e.sent,e.abrupt("return",{user:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(m.a.Component);Object(d.a)(A,"defaultProps",{}),Object(d.a)(A,"contextType",O.a),t.default=Object(y.withRouter)(A)},HXPj:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),u=n("IrJS"),o=n.n(u),c=a.a.createElement;function i(e){var t=e.src,n=e.className,r=e.style,a=e.children;return c("div",{className:[n,o.a.avatar].join(" "),style:r},!a&&t?c("img",{src:t}):a)}},IgCw:function(e,t,n){"use strict";var r=n("1OyB"),a=n("vuIU"),u=n("Ji7U"),o=n("md7G"),c=n("foSv"),i=n("rePB"),s=n("q1tI");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var l=function(e){Object(u.a)(n,e);var t=f(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){return this.props.condition?this.props.children:null}}]),n}(n.n(s).a.Component);Object(i.a)(l,"defaultProps",{condition:!0}),t.a=l},IrJS:function(e,t,n){e.exports={avatar:"avatar___FhI1z"}},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),u=n("i2R6"),o=n("48fX"),c=n("tCBg"),i=n("T0f4"),s=n("mPvQ");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){o(s,c);var i=f(s);function s(e){var u;return r(this,s),u=i.call(this,e),d&&(t.add(a(u)),n(a(u))),u}return u(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(l.Component))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),u=n("KckH"),o=n("kG2m");e.exports=function(e){return r(e)||a(e)||u(e)||o()}},rc3b:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[username]",function(){return n("EE/t")}])},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[["rc3b",0,2,1,3,4,5,6,7,8]]]);