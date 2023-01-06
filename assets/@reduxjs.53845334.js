import{N as z,t as X,f as F,r as B}from"./immer.90232ec3.js";import{c as Y,a as H,b as J,d as D}from"./redux.16aeff32.js";import{t as W}from"./redux-thunk.58761488.js";var K=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Q=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,v;return v={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function h(a){return function(c){return s([a,c])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(c){a=[6,c],i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},C=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},Z=Object.defineProperty,$=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,G=function(e,t,r){return t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},O=function(e,t){for(var r in t||(t={}))re.call(t,r)&&G(e,r,t[r]);if(V)for(var n=0,i=V(t);n<i.length;n++){var r=i[n];te.call(t,r)&&G(e,r,t[r])}return e},T=function(e,t){return $(e,ee(t))},ne=function(e,t,r){return new Promise(function(n,i){var o=function(s){try{h(r.next(s))}catch(a){i(a)}},v=function(s){try{h(r.throw(s))}catch(a){i(a)}},h=function(s){return s.done?n(s.value):Promise.resolve(s.value).then(o,v)};h((r=r.apply(e,t)).next())})},ae=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?D:D.apply(null,arguments)};function oe(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var ie=function(e){K(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,C([void 0],r[0].concat(this)))):new(t.bind.apply(t,C([void 0],r.concat(this))))},t}(Array);function q(e){return X(e)?F(e,function(){}):e}function ue(e){return typeof e=="boolean"}function ce(){return function(t){return fe(t)}}function fe(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new ie;return r&&(ue(r)?n.push(W):n.push(W.withExtraArgument(r.extraArgument))),n}var le=!0;function je(e){var t=ce(),r=e||{},n=r.reducer,i=n===void 0?void 0:n,o=r.middleware,v=o===void 0?t():o,h=r.devTools,s=h===void 0?!0:h,a=r.preloadedState,c=a===void 0?void 0:a,f=r.enhancers,d=f===void 0?void 0:f,l;if(typeof i=="function")l=i;else if(oe(i))l=Y(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var u=v;typeof u=="function"&&(u=u(t));var y=H.apply(void 0,u),w=D;s&&(w=ae(O({trace:!le},typeof s=="object"&&s)));var p=[y];Array.isArray(d)?p=C([y],d):typeof d=="function"&&(p=d(p));var m=w.apply(void 0,p);return J(l,c,m)}function j(e,t){function r(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(t){var o=t.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return O(O({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function U(e){var t={},r=[],n,i={addCase:function(o,v){var h=typeof o=="string"?o:o.type;if(h in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[h]=v,i},addMatcher:function(o,v){return r.push({matcher:o,reducer:v}),i},addDefaultCase:function(o){return n=o,i}};return e(i),[t,r,n]}function de(e){return typeof e=="function"}function se(e,t,r,n){r===void 0&&(r=[]);var i=typeof t=="function"?U(t):[t,r,n],o=i[0],v=i[1],h=i[2],s;if(de(e))s=function(){return q(e())};else{var a=q(e);s=function(){return a}}function c(f,d){f===void 0&&(f=s());var l=C([o[d.type]],v.filter(function(u){var y=u.matcher;return y(d)}).map(function(u){var y=u.reducer;return y}));return l.filter(function(u){return!!u}).length===0&&(l=[h]),l.reduce(function(u,y){if(y)if(B(u)){var w=u,p=y(w,d);return p===void 0?u:p}else{if(X(u))return F(u,function(m){return y(m,d)});var p=y(u,d);if(p===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return u},f)}return c.getInitialState=s,c}function ve(e,t){return e+"/"+t}function Ee(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:q(e.initialState),n=e.reducers||{},i=Object.keys(n),o={},v={},h={};i.forEach(function(c){var f=n[c],d=ve(t,c),l,u;"reducer"in f?(l=f.reducer,u=f.prepare):l=f,o[c]=l,v[d]=l,h[c]=u?j(d,u):j(d)});function s(){var c=typeof e.extraReducers=="function"?U(e.extraReducers):[e.extraReducers],f=c[0],d=f===void 0?{}:f,l=c[1],u=l===void 0?[]:l,y=c[2],w=y===void 0?void 0:y,p=O(O({},d),v);return se(r,function(m){for(var S in p)m.addCase(S,p[S]);for(var g=0,E=u;g<E.length;g++){var _=E[g];m.addMatcher(_.matcher,_.reducer)}w&&m.addDefaultCase(w)})}var a;return{name:t,reducer:function(c,f){return a||(a=s()),a(c,f)},actions:h,caseReducers:o,getInitialState:function(){return a||(a=s()),a.getInitialState()}}}var he="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ye=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=he[Math.random()*64|0];return t},pe=["name","message","stack","code"],I=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),N=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),me=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=pe;r<n.length;r++){var i=n[r];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,r,n){var i=j(t+"/fulfilled",function(a,c,f,d){return{payload:a,meta:T(O({},d||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),o=j(t+"/pending",function(a,c,f){return{payload:void 0,meta:T(O({},f||{}),{arg:c,requestId:a,requestStatus:"pending"})}}),v=j(t+"/rejected",function(a,c,f,d,l){return{payload:d,error:(n&&n.serializeError||me)(a||"Rejected"),meta:T(O({},l||{}),{arg:f,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"})}}),h=typeof AbortController<"u"?AbortController:function(){function a(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return a.prototype.abort=function(){},a}();function s(a){return function(c,f,d){var l=n!=null&&n.idGenerator?n.idGenerator(a):ye(),u=new h,y,w=new Promise(function(g,E){return u.signal.addEventListener("abort",function(){return E({name:"AbortError",message:y||"Aborted"})})}),p=!1;function m(g){p&&(y=g,u.abort())}var S=function(){return ne(this,null,function(){var g,E,_,R,A,k;return Q(this,function(P){switch(P.label){case 0:return P.trys.push([0,4,,5]),R=(g=n==null?void 0:n.condition)==null?void 0:g.call(n,a,{getState:f,extra:d}),we(R)?[4,R]:[3,2];case 1:R=P.sent(),P.label=2;case 2:if(R===!1)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return p=!0,c(o(l,a,(E=n==null?void 0:n.getPendingMeta)==null?void 0:E.call(n,{requestId:l,arg:a},{getState:f,extra:d}))),[4,Promise.race([w,Promise.resolve(r(a,{dispatch:c,getState:f,extra:d,requestId:l,signal:u.signal,abort:m,rejectWithValue:function(b,M){return new I(b,M)},fulfillWithValue:function(b,M){return new N(b,M)}})).then(function(b){if(b instanceof I)throw b;return b instanceof N?i(b.payload,l,a,b.meta):i(b,l,a)})])];case 3:return _=P.sent(),[3,5];case 4:return A=P.sent(),_=A instanceof I?v(null,l,a,A.payload,A.meta):v(A,l,a),[3,5];case 5:return k=n&&!n.dispatchConditionRejection&&v.match(_)&&_.meta.condition,k||c(_),[2,_]}})})}();return Object.assign(S,{abort:m,requestId:l,arg:a,unwrap:function(){return S.then(be)}})}}return Object.assign(s,{pending:o,rejected:v,fulfilled:i,typePrefix:t})}return e.withTypes=e,e})();function be(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function we(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var x="listenerMiddleware";j(x+"/add");j(x+"/removeAll");j(x+"/remove");var L;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:global);z();export{je as a,Ee as c};
