(this.webpackJsonpsimpleforum=this.webpackJsonpsimpleforum||[]).push([[4],{37:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return a}));var r=function(){return"".concat("https://jsonplaceholder.typicode.com","/posts")},o=function(){return"".concat("https://jsonplaceholder.typicode.com","/users")},i=function(t){return"".concat("https://jsonplaceholder.typicode.com","/users/").concat(t)},a=function(t){return"".concat("https://jsonplaceholder.typicode.com","/posts/").concat(t)}},39:function(t,e,n){t.exports=n(40)},40:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var l={};function s(){}function f(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(j([])));m&&m!==e&&n.call(m,o)&&(p=m);var v=h.prototype=s.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new g(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},41:function(t,e,n){"use strict";var r=n(39),o=n.n(r);function i(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}var a=n(37),c=n(0);e.a=function(t){var e=t.url,n=t.method,r=Object(c.useState)([]),u=Object(a.a)(r,2),l=u[0],s=u[1],f=Object(c.useState)(!1),h=Object(a.a)(f,2),p=h[0],d=h[1],m=function(){var t,r=(t=o.a.mark((function t(){var r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:if(!(r=t.sent)){t.next=9;break}return t.next=6,r.json();case 6:i=t.sent,s(i),d(!1);case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return Object(c.useEffect)((function(){d(!0),m()}),[]),[l,p]}},42:function(t,e,n){"use strict";var r=n(3),o=n(2);function i(){var t=Object(r.a)(["\n  padding: 1rem 5rem;\n  border: 2px solid ",";\n  border-radius: 4px;\n  outline: none;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 1.6rem;\n\n  &:hover {\n    background: ",";\n    color: #fff;\n  }\n"]);return i=function(){return t},t}e.a=o.c.button(i(),(function(t){return t.theme.secondaryTextColor}),(function(t){return t.theme.secondaryTextColor}))},44:function(t,e,n){"use strict";n.r(e);var r=n(37),o=n(3),i=n(0),a=n.n(i),c=n(2),u=n(17),l=n(42),s=n(41),f=n(38);function h(){var t=Object(o.a)(["\n  display: flex;\n\n  & h3 {\n    margin-bottom: 1rem;\n    text-align: left;\n    font-size: 1.5rem;\n    font-weight: 400;\n  }\n\n  & label {\n    font-size: 1.5rem;\n    font-weight: 400;\n    margin-right: 1rem;\n  }\n"]);return h=function(){return t},t}function p(){var t=Object(o.a)(["\n  border-radius: 0.5rem;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding: 3rem;\n  margin-top: 10rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return p=function(){return t},t}function d(){var t=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 40rem;\n  height: 25rem;\n"]);return d=function(){return t},t}var m=c.c.div(d()),v=c.c.div(p()),y=c.c.div(h());e.default=function(t){var e,n,o=t.match,i=t.history,c=Object(s.a)({url:Object(f.c)(null===o||void 0===o||null===(e=o.params)||void 0===e?void 0:e.userId),method:{method:"GET"}}),h=Object(r.a)(c,2),p=h[0];if(h[1])return a.a.createElement(u.a,null);return a.a.createElement(m,null,a.a.createElement(v,null,a.a.createElement(y,null,a.a.createElement("label",null,"Name: "),a.a.createElement("h3",null,p.name)),a.a.createElement(y,null,a.a.createElement("label",null,"Username: "),a.a.createElement("h3",null,p.username)),a.a.createElement(y,null,a.a.createElement("label",null,"Email: "),a.a.createElement("h3",null,p.email)),a.a.createElement(y,null,a.a.createElement("label",null,"Website: "),a.a.createElement("h3",null,p.website)),a.a.createElement(y,null,a.a.createElement("label",null,"Company Name: "),a.a.createElement("h3",null,null===(n=p.company)||void 0===n?void 0:n.name)),a.a.createElement(l.a,{onClick:function(){i.push("/")}},"Go Back")))}}}]);
//# sourceMappingURL=4.a11739d2.chunk.js.map