/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/data","@grafana/runtime","@grafana/ui"],(function(t,r,e,n){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/",e(e.s=51)}([function(r,e){r.exports=t},function(t,r){t.exports=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}},function(t,e){t.exports=r},function(t,r,e){var n=e(8),o=e(28),u=e(29),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):u(t)}},function(t,r,e){var n=e(9),o="object"==typeof self&&self&&self.Object===Object&&self,u=n||o||Function("return this")();t.exports=u},function(t,r){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,r){t.exports=function(t){return t}},function(t,r,e){var n=e(3),o=e(1);t.exports=function(t){if(!o(t))return!1;var r=n(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},function(t,r,e){var n=e(4).Symbol;t.exports=n},function(t,r,e){(function(r){var e="object"==typeof r&&r&&r.Object===Object&&r;t.exports=e}).call(this,e(27))},function(t,r){t.exports=function(t,r){return t===r||t!=t&&r!=r}},function(t,r,e){var n=e(7),o=e(12);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,r){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,r){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&e.test(t))&&t>-1&&t%1==0&&t<r}},function(t,r){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,r,e){var n=e(18),o=e(10),u=e(35),a=e(36),i=Object.prototype,c=i.hasOwnProperty,f=n((function(t,r){t=Object(t);var e=-1,n=r.length,f=n>2?r[2]:void 0;for(f&&u(r[0],r[1],f)&&(n=1);++e<n;)for(var s=r[e],l=a(s),p=-1,y=l.length;++p<y;){var v=l[p],b=t[v];(void 0===b||o(b,i[v])&&!c.call(t,v))&&(t[v]=s[v])}return t}));t.exports=f},function(t,r){t.exports=e},function(t,r){t.exports=n},function(t,r,e){var n=e(6),o=e(19),u=e(21);t.exports=function(t,r){return u(o(t,r,n),t+"")}},function(t,r,e){var n=e(20),o=Math.max;t.exports=function(t,r,e){return r=o(void 0===r?t.length-1:r,0),function(){for(var u=arguments,a=-1,i=o(u.length-r,0),c=Array(i);++a<i;)c[a]=u[r+a];a=-1;for(var f=Array(r+1);++a<r;)f[a]=u[a];return f[r]=e(c),n(t,this,f)}}},function(t,r){t.exports=function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}},function(t,r,e){var n=e(22),o=e(34)(n);t.exports=o},function(t,r,e){var n=e(23),o=e(24),u=e(6),a=o?function(t,r){return o(t,"toString",{configurable:!0,enumerable:!1,value:n(r),writable:!0})}:u;t.exports=a},function(t,r){t.exports=function(t){return function(){return t}}},function(t,r,e){var n=e(25),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,r,e){var n=e(26),o=e(33);t.exports=function(t,r){var e=o(t,r);return n(e)?e:void 0}},function(t,r,e){var n=e(7),o=e(30),u=e(1),a=e(32),i=/^\[object .+?Constructor\]$/,c=Function.prototype,f=Object.prototype,s=c.toString,l=f.hasOwnProperty,p=RegExp("^"+s.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!u(t)||o(t))&&(n(t)?p:i).test(a(t))}},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){var n=e(8),o=Object.prototype,u=o.hasOwnProperty,a=o.toString,i=n?n.toStringTag:void 0;t.exports=function(t){var r=u.call(t,i),e=t[i];try{t[i]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(r?t[i]=e:delete t[i]),o}},function(t,r){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},function(t,r,e){var n,o=e(31),u=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!u&&u in t}},function(t,r,e){var n=e(4)["__core-js_shared__"];t.exports=n},function(t,r){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,r){t.exports=function(t,r){return null==t?void 0:t[r]}},function(t,r){var e=Date.now;t.exports=function(t){var r=0,n=0;return function(){var o=e(),u=16-(o-n);if(n=o,u>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}},function(t,r,e){var n=e(10),o=e(11),u=e(13),a=e(1);t.exports=function(t,r,e){if(!a(e))return!1;var i=typeof r;return!!("number"==i?o(e)&&u(r,e.length):"string"==i&&r in e)&&n(e[r],t)}},function(t,r,e){var n=e(37),o=e(48),u=e(11);t.exports=function(t){return u(t)?n(t,!0):o(t)}},function(t,r,e){var n=e(38),o=e(39),u=e(41),a=e(42),i=e(13),c=e(44),f=Object.prototype.hasOwnProperty;t.exports=function(t,r){var e=u(t),s=!e&&o(t),l=!e&&!s&&a(t),p=!e&&!s&&!l&&c(t),y=e||s||l||p,v=y?n(t.length,String):[],b=v.length;for(var d in t)!r&&!f.call(t,d)||y&&("length"==d||l&&("offset"==d||"parent"==d)||p&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||i(d,b))||v.push(d);return v}},function(t,r){t.exports=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}},function(t,r,e){var n=e(40),o=e(5),u=Object.prototype,a=u.hasOwnProperty,i=u.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&a.call(t,"callee")&&!i.call(t,"callee")};t.exports=c},function(t,r,e){var n=e(3),o=e(5);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},function(t,r){var e=Array.isArray;t.exports=e},function(t,r,e){(function(t){var n=e(4),o=e(43),u=r&&!r.nodeType&&r,a=u&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===u?n.Buffer:void 0,c=(i?i.isBuffer:void 0)||o;t.exports=c}).call(this,e(14)(t))},function(t,r){t.exports=function(){return!1}},function(t,r,e){var n=e(45),o=e(46),u=e(47),a=u&&u.isTypedArray,i=a?o(a):n;t.exports=i},function(t,r,e){var n=e(3),o=e(12),u=e(5),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return u(t)&&o(t.length)&&!!a[n(t)]}},function(t,r){t.exports=function(t){return function(r){return t(r)}}},function(t,r,e){(function(t){var n=e(9),o=r&&!r.nodeType&&r,u=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=u&&u.exports===o&&n.process,i=function(){try{var t=u&&u.require&&u.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=i}).call(this,e(14)(t))},function(t,r,e){var n=e(1),o=e(49),u=e(50),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return u(t);var r=o(t),e=[];for(var i in t)("constructor"!=i||!r&&a.call(t,i))&&e.push(i);return e}},function(t,r){var e=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||e)}},function(t,r){t.exports=function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}},function(t,r,e){"use strict";e.r(r);var n=e(2),o=function(t,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};function u(t,r){function e(){this.constructor=t}o(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}var a=function(){return(a=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function i(t,r,e,n){return new(e||(e=Promise))((function(o,u){function a(t){try{c(n.next(t))}catch(t){u(t)}}function i(t){try{c(n.throw(t))}catch(t){u(t)}}function c(t){var r;t.done?o(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(a,i)}c((n=n.apply(t,r||[])).next())}))}function c(t,r){var e,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=r.call(t,a)}catch(t){u=[6,t],n=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}function f(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,u=e.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(n=u.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=u.return)&&e.call(u)}finally{if(o)throw o.error}}return a}var s=e(15),l=e.n(s),p=e(16),y={},v=function(t){function r(r){var e=t.call(this,r)||this;return e.handleErrors=function(t,r){var n={message:t&&t.statusText||"Unknown error during query transaction. Please check JS console logs.",refId:r.refId};return t.data?"string"==typeof t.data?n.message=t.data:t.data.error&&(n.message=e.safeStringifyValue(t.data.error)):t.message?n.message=t.message:"string"==typeof t&&(n.message=t),n.status=t.status,n.statusText=t.statusText,n},e.safeStringifyValue=function(t,r){if(!t)return"";try{return JSON.stringify(t,null,r)}catch(t){console.error(t)}return""},e.url=r.url,e.defaultUrl=r.jsonData.defaultUrl,e}return u(r,t),r.prototype._request=function(t,r){void 0===r&&(r={});var e={url:this.url+t,method:"GET"};return r&&Object.keys(r).length&&(e.url=e.url+"?"+Object.entries(r).map((function(t){var r=f(t,2),e=r[0],n=r[1];return encodeURIComponent(e)+"="+encodeURIComponent(n)})).join("&")),Object(p.getBackendSrv)().datasourceRequest(e)},r.prototype.performTimeSeriesQuery=function(t){var r=this;if(t.start>t.end)throw{message:"Invalid time range"};var e={query:t.expr,from:t.start,to:t.end};return this._request("/api/v1/query_range",e).catch((function(e){throw r.handleErrors(e,t)}))},r.prototype.query=function(t){return i(this,void 0,Promise,(function(){return c(this,(function(t){return[2,Promise.resolve({data:[]})]}))}))},r.prototype.annotationQuery=function(t){return i(this,void 0,Promise,(function(){var r,e,n,o,u,a,i=this;return c(this,(function(c){switch(c.label){case 0:return r=t.annotation,e=r.expr,(void 0===e?"":e)?((n=l()(t.annotation,y)).start=t.range.from.valueOf(),n.end=t.range.to.valueOf(),[4,this.performTimeSeriesQuery(n)]):[2,Promise.resolve([])];case 1:return o=c.sent(),u=o.data,a=[],u.data.map((function(t){var r=[];for(var e in t.labels)r.push(e+":"+t.labels[e]);t.timestamps.forEach((function(e){var n="{"+Object.entries(t.labels).map((function(t){var r=f(t,2);return r[0]+'="'+r[1]+'"'})).join(",")+"}",o=btoa(n);a.push({title:""+t.labels.__name__,time:e,text:'<div>\n    <a target="_blank" href="'+i.defaultUrl+"/pprof/"+o+"/"+e+'/">pprof UI</a>\n    <a target="_blank" href="'+i.defaultUrl+"/download/"+o+"/"+e+'/">profile Download</a>\n</div>\n',tags:r})}))})),[2,a]}}))}))},r.prototype.testDatasource=function(){return i(this,void 0,void 0,(function(){var t;return c(this,(function(r){switch(r.label){case 0:return[4,this._request("/-/ready")];case 1:return(t=r.sent())?[2,200===t.status?{status:"success",message:"Data source is working"}:{status:"error",message:t.error}]:[2,{status:"error",message:"Cannot connect to Data source"}]}}))}))},r}(n.DataSourceApi),b=e(0),d=e.n(b),h=e(17).LegacyForms.FormField,g=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.onURLChange=function(t){var e=r.props,n=e.onOptionsChange,o=e.options;n(a(a({},o),{url:t.target.value,jsonData:a(a({},o.jsonData),{defaultUrl:t.target.value})}))},r}return u(r,t),r.prototype.componentDidMount=function(){var t=this.props.options;t.jsonData.defaultUrl=t.url},r.prototype.render=function(){var t=this.props.options.url;return d.a.createElement("div",{className:"gf-form-group"},d.a.createElement("h3",{className:"page-heading"},"HTTP"),d.a.createElement("div",{className:"gf-form"},d.a.createElement(h,{label:"URL",labelWidth:11,onChange:this.onURLChange,value:t||"",tooltip:"Specify a complete HTTP URL (for example http://your_server:8080);",placeholder:"http://localhost:8080"})))},r}(b.PureComponent),j=function(){function t(){}return t.templateUrl="partials/annotations.editor.html",t}();e.d(r,"plugin",(function(){return m}));var m=new n.DataSourcePlugin(v).setConfigEditor(g).setAnnotationQueryCtrl(j)}])}));
//# sourceMappingURL=module.js.map