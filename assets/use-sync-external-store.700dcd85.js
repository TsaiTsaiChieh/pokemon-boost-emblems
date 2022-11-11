import x from"react";var w={exports:{}},E={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=x;function _(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var V=typeof Object.is=="function"?Object.is:_,j=s.useState,O=s.useEffect,g=s.useLayoutEffect,k=s.useDebugValue;function q(e,t){var r=t(),i=j({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return g(function(){n.value=r,n.getSnapshot=t,S(n)&&u({inst:n})},[e,r,t]),O(function(){return S(n)&&u({inst:n}),e(function(){S(n)&&u({inst:n})})},[e]),k(r),r}function S(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!V(e,r)}catch{return!0}}function D(e,t){return t()}var R=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?D:q;E.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:R;(function(e){e.exports=E})(w);var L={exports:{}},$={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=x,M=w.exports;function W(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var z=typeof Object.is=="function"?Object.is:W,A=M.useSyncExternalStore,B=v.useRef,C=v.useEffect,F=v.useMemo,G=v.useDebugValue;$.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var u=B(null);if(u.current===null){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=F(function(){function p(o){if(!h){if(h=!0,d=o,o=i(o),n!==void 0&&c.hasValue){var f=c.value;if(n(f,o))return a=f}return a=o}if(f=a,z(d,o))return f;var m=i(o);return n!==void 0&&n(f,m)?f:(d=o,a=m)}var h=!1,d,a,y=r===void 0?null:r;return[function(){return p(t())},y===null?void 0:function(){return p(y())}]},[t,r,i,n]);var l=A(e,u[0],u[1]);return C(function(){c.hasValue=!0,c.value=l},[l]),G(l),l};(function(e){e.exports=$})(L);export{L as w};
