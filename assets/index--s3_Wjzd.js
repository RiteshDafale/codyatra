const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NewServices1-BC_SE3Up.js","assets/NewServices1-BGZ6TcA0.css","assets/About-ay4Y5-I9.js","assets/About-B5tmuXhG.css","assets/OurServices-BxmE99-x.js","assets/OurServices-Be-SYaiP.css","assets/Testimonial-BL7C_sKp.js","assets/Testimonial-CcvXm_fL.css","assets/Pricing-yvJUOrcx.js","assets/Pricing-SwlJ-I1o.css","assets/Contact-QpPIOYT4.js","assets/Contact-Bsx0KrwL.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(s){if(s.ep)return;s.ep=!0;const u=i(s);fetch(s.href,u)}})();function Xx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Th={exports:{}},bs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function Gx(){if(Lv)return bs;Lv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(r,s,u){var f=null;if(u!==void 0&&(f=""+u),s.key!==void 0&&(f=""+s.key),"key"in s){u={};for(var h in s)h!=="key"&&(u[h]=s[h])}else u=s;return s=u.ref,{$$typeof:o,type:r,key:f,ref:s!==void 0?s:null,props:u}}return bs.Fragment=n,bs.jsx=i,bs.jsxs=i,bs}var Bv;function Vx(){return Bv||(Bv=1,Th.exports=Gx()),Th.exports}var V=Vx(),Sh={exports:{}},Et={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function Qx(){if(qv)return Et;qv=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=_&&T[_]||T["@@iterator"],typeof T=="function"?T:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,b={};function E(T,Q,at){this.props=T,this.context=Q,this.refs=b,this.updater=at||y}E.prototype.isReactComponent={},E.prototype.setState=function(T,Q){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Q,"setState")},E.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function w(){}w.prototype=E.prototype;function k(T,Q,at){this.props=T,this.context=Q,this.refs=b,this.updater=at||y}var D=k.prototype=new w;D.constructor=k,O(D,E.prototype),D.isPureReactComponent=!0;var R=Array.isArray,C={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function N(T,Q,at,nt,rt,bt){return at=bt.ref,{$$typeof:o,type:T,key:Q,ref:at!==void 0?at:null,props:bt}}function G(T,Q){return N(T.type,Q,void 0,void 0,void 0,T.props)}function P(T){return typeof T=="object"&&T!==null&&T.$$typeof===o}function F(T){var Q={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(at){return Q[at]})}var it=/\/+/g;function W(T,Q){return typeof T=="object"&&T!==null&&T.key!=null?F(""+T.key):Q.toString(36)}function _t(){}function Tt(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(_t,_t):(T.status="pending",T.then(function(Q){T.status==="pending"&&(T.status="fulfilled",T.value=Q)},function(Q){T.status==="pending"&&(T.status="rejected",T.reason=Q)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function pt(T,Q,at,nt,rt){var bt=typeof T;(bt==="undefined"||bt==="boolean")&&(T=null);var st=!1;if(T===null)st=!0;else switch(bt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(T.$$typeof){case o:case n:st=!0;break;case g:return st=T._init,pt(st(T._payload),Q,at,nt,rt)}}if(st)return rt=rt(T),st=nt===""?"."+W(T,0):nt,R(rt)?(at="",st!=null&&(at=st.replace(it,"$&/")+"/"),pt(rt,Q,at,"",function(ce){return ce})):rt!=null&&(P(rt)&&(rt=G(rt,at+(rt.key==null||T&&T.key===rt.key?"":(""+rt.key).replace(it,"$&/")+"/")+st)),Q.push(rt)),1;st=0;var Pt=nt===""?".":nt+":";if(R(T))for(var wt=0;wt<T.length;wt++)nt=T[wt],bt=Pt+W(nt,wt),st+=pt(nt,Q,at,bt,rt);else if(wt=x(T),typeof wt=="function")for(T=wt.call(T),wt=0;!(nt=T.next()).done;)nt=nt.value,bt=Pt+W(nt,wt++),st+=pt(nt,Q,at,bt,rt);else if(bt==="object"){if(typeof T.then=="function")return pt(Tt(T),Q,at,nt,rt);throw Q=String(T),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return st}function H(T,Q,at){if(T==null)return T;var nt=[],rt=0;return pt(T,nt,"","",function(bt){return Q.call(at,bt,rt++)}),nt}function Z(T){if(T._status===-1){var Q=T._result;Q=Q(),Q.then(function(at){(T._status===0||T._status===-1)&&(T._status=1,T._result=at)},function(at){(T._status===0||T._status===-1)&&(T._status=2,T._result=at)}),T._status===-1&&(T._status=0,T._result=Q)}if(T._status===1)return T._result.default;throw T._result}var et=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function mt(){}return Et.Children={map:H,forEach:function(T,Q,at){H(T,function(){Q.apply(this,arguments)},at)},count:function(T){var Q=0;return H(T,function(){Q++}),Q},toArray:function(T){return H(T,function(Q){return Q})||[]},only:function(T){if(!P(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Et.Component=E,Et.Fragment=i,Et.Profiler=s,Et.PureComponent=k,Et.StrictMode=r,Et.Suspense=m,Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,Et.__COMPILER_RUNTIME={__proto__:null,c:function(T){return C.H.useMemoCache(T)}},Et.cache=function(T){return function(){return T.apply(null,arguments)}},Et.cloneElement=function(T,Q,at){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var nt=O({},T.props),rt=T.key,bt=void 0;if(Q!=null)for(st in Q.ref!==void 0&&(bt=void 0),Q.key!==void 0&&(rt=""+Q.key),Q)!X.call(Q,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&Q.ref===void 0||(nt[st]=Q[st]);var st=arguments.length-2;if(st===1)nt.children=at;else if(1<st){for(var Pt=Array(st),wt=0;wt<st;wt++)Pt[wt]=arguments[wt+2];nt.children=Pt}return N(T.type,rt,void 0,void 0,bt,nt)},Et.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:u,_context:T},T},Et.createElement=function(T,Q,at){var nt,rt={},bt=null;if(Q!=null)for(nt in Q.key!==void 0&&(bt=""+Q.key),Q)X.call(Q,nt)&&nt!=="key"&&nt!=="__self"&&nt!=="__source"&&(rt[nt]=Q[nt]);var st=arguments.length-2;if(st===1)rt.children=at;else if(1<st){for(var Pt=Array(st),wt=0;wt<st;wt++)Pt[wt]=arguments[wt+2];rt.children=Pt}if(T&&T.defaultProps)for(nt in st=T.defaultProps,st)rt[nt]===void 0&&(rt[nt]=st[nt]);return N(T,bt,void 0,void 0,null,rt)},Et.createRef=function(){return{current:null}},Et.forwardRef=function(T){return{$$typeof:h,render:T}},Et.isValidElement=P,Et.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:Z}},Et.memo=function(T,Q){return{$$typeof:p,type:T,compare:Q===void 0?null:Q}},Et.startTransition=function(T){var Q=C.T,at={};C.T=at;try{var nt=T(),rt=C.S;rt!==null&&rt(at,nt),typeof nt=="object"&&nt!==null&&typeof nt.then=="function"&&nt.then(mt,et)}catch(bt){et(bt)}finally{C.T=Q}},Et.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},Et.use=function(T){return C.H.use(T)},Et.useActionState=function(T,Q,at){return C.H.useActionState(T,Q,at)},Et.useCallback=function(T,Q){return C.H.useCallback(T,Q)},Et.useContext=function(T){return C.H.useContext(T)},Et.useDebugValue=function(){},Et.useDeferredValue=function(T,Q){return C.H.useDeferredValue(T,Q)},Et.useEffect=function(T,Q,at){var nt=C.H;if(typeof at=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return nt.useEffect(T,Q)},Et.useId=function(){return C.H.useId()},Et.useImperativeHandle=function(T,Q,at){return C.H.useImperativeHandle(T,Q,at)},Et.useInsertionEffect=function(T,Q){return C.H.useInsertionEffect(T,Q)},Et.useLayoutEffect=function(T,Q){return C.H.useLayoutEffect(T,Q)},Et.useMemo=function(T,Q){return C.H.useMemo(T,Q)},Et.useOptimistic=function(T,Q){return C.H.useOptimistic(T,Q)},Et.useReducer=function(T,Q,at){return C.H.useReducer(T,Q,at)},Et.useRef=function(T){return C.H.useRef(T)},Et.useState=function(T){return C.H.useState(T)},Et.useSyncExternalStore=function(T,Q,at){return C.H.useSyncExternalStore(T,Q,at)},Et.useTransition=function(){return C.H.useTransition()},Et.version="19.1.1",Et}var Yv;function O0(){return Yv||(Yv=1,Sh.exports=Qx()),Sh.exports}var Y=O0();const I=Xx(Y);var Oh={exports:{}},ys={},Eh={exports:{}},wh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function Zx(){return Pv||(Pv=1,function(o){function n(H,Z){var et=H.length;H.push(Z);t:for(;0<et;){var mt=et-1>>>1,T=H[mt];if(0<s(T,Z))H[mt]=Z,H[et]=T,et=mt;else break t}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Z=H[0],et=H.pop();if(et!==Z){H[0]=et;t:for(var mt=0,T=H.length,Q=T>>>1;mt<Q;){var at=2*(mt+1)-1,nt=H[at],rt=at+1,bt=H[rt];if(0>s(nt,et))rt<T&&0>s(bt,nt)?(H[mt]=bt,H[rt]=et,mt=rt):(H[mt]=nt,H[at]=et,mt=at);else if(rt<T&&0>s(bt,et))H[mt]=bt,H[rt]=et,mt=rt;else break t}}return Z}function s(H,Z){var et=H.sortIndex-Z.sortIndex;return et!==0?et:H.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();o.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,x=3,y=!1,O=!1,b=!1,E=!1,w=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function R(H){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=H)r(p),Z.sortIndex=Z.expirationTime,n(m,Z);else break;Z=i(p)}}function C(H){if(b=!1,R(H),!O)if(i(m)!==null)O=!0,X||(X=!0,W());else{var Z=i(p);Z!==null&&pt(C,Z.startTime-H)}}var X=!1,N=-1,G=5,P=-1;function F(){return E?!0:!(o.unstable_now()-P<G)}function it(){if(E=!1,X){var H=o.unstable_now();P=H;var Z=!0;try{t:{O=!1,b&&(b=!1,k(N),N=-1),y=!0;var et=x;try{e:{for(R(H),_=i(m);_!==null&&!(_.expirationTime>H&&F());){var mt=_.callback;if(typeof mt=="function"){_.callback=null,x=_.priorityLevel;var T=mt(_.expirationTime<=H);if(H=o.unstable_now(),typeof T=="function"){_.callback=T,R(H),Z=!0;break e}_===i(m)&&r(m),R(H)}else r(m);_=i(m)}if(_!==null)Z=!0;else{var Q=i(p);Q!==null&&pt(C,Q.startTime-H),Z=!1}}break t}finally{_=null,x=et,y=!1}Z=void 0}}finally{Z?W():X=!1}}}var W;if(typeof D=="function")W=function(){D(it)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,Tt=_t.port2;_t.port1.onmessage=it,W=function(){Tt.postMessage(null)}}else W=function(){w(it,0)};function pt(H,Z){N=w(function(){H(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(H){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var et=x;x=Z;try{return H()}finally{x=et}},o.unstable_requestPaint=function(){E=!0},o.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var et=x;x=H;try{return Z()}finally{x=et}},o.unstable_scheduleCallback=function(H,Z,et){var mt=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?mt+et:mt):et=mt,H){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=et+T,H={id:g++,callback:Z,priorityLevel:H,startTime:et,expirationTime:T,sortIndex:-1},et>mt?(H.sortIndex=et,n(p,H),i(m)===null&&H===i(p)&&(b?(k(N),N=-1):b=!0,pt(C,et-mt))):(H.sortIndex=T,n(m,H),O||y||(O=!0,X||(X=!0,W()))),H},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(H){var Z=x;return function(){var et=x;x=Z;try{return H.apply(this,arguments)}finally{x=et}}}}(wh)),wh}var jv;function Kx(){return jv||(jv=1,Eh.exports=Zx()),Eh.exports}var Ah={exports:{}},fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function Jx(){if(Xv)return fn;Xv=1;var o=O0();function n(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,fn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(n(299));return u(m,p,null,g)},fn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},fn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},fn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},fn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},fn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},fn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},fn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},fn.requestFormReset=function(m){r.d.r(m)},fn.unstable_batchedUpdates=function(m,p){return m(p)},fn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},fn.version="19.1.1",fn}var Gv;function $x(){if(Gv)return Ah.exports;Gv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Ah.exports=Jx(),Ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function Fx(){if(Vv)return ys;Vv=1;var o=Kx(),n=O0(),i=$x();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var e=t.alternate;if(!e){if(e=u(t),e===null)throw Error(r(188));return e!==t?null:t}for(var a=t,l=e;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(l=c.return,l!==null){a=l;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return h(c),t;if(d===l)return h(c),e;d=d.sibling}throw Error(r(188))}if(a.return!==l.return)a=c,l=d;else{for(var v=!1,S=c.child;S;){if(S===a){v=!0,a=c,l=d;break}if(S===l){v=!0,l=c,a=d;break}S=S.sibling}if(!v){for(S=d.child;S;){if(S===a){v=!0,a=d,l=c;break}if(S===l){v=!0,l=d,a=c;break}S=S.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:e}function p(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=p(t),e!==null)return e;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),D=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=it&&t[it]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===_t?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case E:return"Profiler";case b:return"StrictMode";case C:return"Suspense";case X:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case D:return(t.displayName||"Context")+".Provider";case k:return(t._context.displayName||"Context")+".Consumer";case R:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return e=t.displayName||null,e!==null?e:Tt(t.type)||"Memo";case G:e=t._payload,t=t._init;try{return Tt(t(e))}catch{}}return null}var pt=Array.isArray,H=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},mt=[],T=-1;function Q(t){return{current:t}}function at(t){0>T||(t.current=mt[T],mt[T]=null,T--)}function nt(t,e){T++,mt[T]=t.current,t.current=e}var rt=Q(null),bt=Q(null),st=Q(null),Pt=Q(null);function wt(t,e){switch(nt(st,e),nt(bt,t),nt(rt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?fv(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=fv(e),t=dv(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(rt),nt(rt,t)}function ce(){at(rt),at(bt),at(st)}function ha(t){t.memoizedState!==null&&nt(Pt,t);var e=rt.current,a=dv(e,t.type);e!==a&&(nt(bt,t),nt(rt,a))}function Ce(t){bt.current===t&&(at(rt),at(bt)),Pt.current===t&&(at(Pt),hs._currentValue=et)}var Ke=Object.prototype.hasOwnProperty,Ut=o.unstable_scheduleCallback,fe=o.unstable_cancelCallback,un=o.unstable_shouldYield,vn=o.unstable_requestPaint,j=o.unstable_now,bn=o.unstable_getCurrentPriorityLevel,pa=o.unstable_ImmediatePriority,Na=o.unstable_UserBlockingPriority,ee=o.unstable_NormalPriority,Ua=o.unstable_LowPriority,Ha=o.unstable_IdlePriority,sr=o.log,ze=o.unstable_setDisableYieldValue,Mn=null,qt=null;function Ne(t){if(typeof sr=="function"&&ze(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(Mn,t)}catch{}}var le=Math.clz32?Math.clz32:Te,La=Math.log,Mi=Math.LN2;function Te(t){return t>>>=0,t===0?32:31-(La(t)/Mi|0)|0}var ur=256,Rn=4194304;function Cn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ba(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var c=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var S=l&134217727;return S!==0?(l=S&~d,l!==0?c=Cn(l):(v&=S,v!==0?c=Cn(v):a||(a=S&~t,a!==0&&(c=Cn(a))))):(S=l&~d,S!==0?c=Cn(S):v!==0?c=Cn(v):a||(a=l&~t,a!==0&&(c=Cn(a)))),c===0?0:e!==0&&e!==c&&(e&d)===0&&(d=c&-c,a=e&-e,d>=a||d===32&&(a&4194048)!==0)?e:c}function zn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function cr(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(){var t=ur;return ur<<=1,(ur&4194048)===0&&(ur=256),t}function Za(){var t=Rn;return Rn<<=1,(Rn&62914560)===0&&(Rn=4194304),t}function yn(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function en(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gn(t,e,a,l,c,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var S=t.entanglements,A=t.expirationTimes,L=t.hiddenUpdates;for(a=v&~a;0<a;){var K=31-le(a),$=1<<K;S[K]=0,A[K]=-1;var B=L[K];if(B!==null)for(L[K]=null,K=0;K<B.length;K++){var q=B[K];q!==null&&(q.lane&=-536870913)}a&=~$}l!==0&&Ka(t,l,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~e))}function Ka(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-le(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function fr(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-le(a),c=1<<l;c&e|t[l]&e&&(t[l]|=e),a&=~c}}function Vn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function dr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ot(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Rv(t.type))}function gt(t,e){var a=Z.p;try{return Z.p=t,e()}finally{Z.p=a}}var kt=Math.random().toString(36).slice(2),tt="__reactFiber$"+kt,dt="__reactProps$"+kt,ft="__reactContainer$"+kt,St="__reactEvents$"+kt,Ue="__reactListeners$"+kt,Ht="__reactHandles$"+kt,he="__reactResources$"+kt,Se="__reactMarker$"+kt;function oe(t){delete t[tt],delete t[dt],delete t[St],delete t[Ue],delete t[Ht]}function Qt(t){var e=t[tt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[ft]||a[tt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=gv(t);t!==null;){if(a=t[tt])return a;t=gv(t)}return e}t=a,a=t.parentNode}return null}function jt(t){if(t=t[tt]||t[ft]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function nn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Kt(t){var e=t[he];return e||(e=t[he]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Gt(t){t[Se]=!0}var Qn=new Set,He={};function de(t,e){ve(t,e),ve(t+"Capture",e)}function ve(t,e){for(He[t]=e,t=0;t<e.length;t++)Qn.add(e[t])}var hr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ri={},je={};function Ae(t){return Ke.call(je,t)?!0:Ke.call(Ri,t)?!1:hr.test(t)?je[t]=!0:(Ri[t]=!0,!1)}function _n(t,e,a){if(Ae(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Qr(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ma(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}var pr,Zn;function ga(t){if(pr===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);pr=e&&e[1]||"",Zn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pr+t+Zn}var Zr=!1;function va(t,e){if(!t||Zr)return"";Zr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(q){var B=q}Reflect.construct(t,[],$)}else{try{$.call()}catch(q){B=q}t.call($.prototype)}}else{try{throw Error()}catch(q){B=q}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(q){if(q&&B&&typeof q.stack=="string")return[q.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],S=d[1];if(v&&S){var A=v.split(`
`),L=S.split(`
`);for(c=l=0;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;for(;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;if(l===A.length||c===L.length)for(l=A.length-1,c=L.length-1;1<=l&&0<=c&&A[l]!==L[c];)c--;for(;1<=l&&0<=c;l--,c--)if(A[l]!==L[c]){if(l!==1||c!==1)do if(l--,c--,0>c||A[l]!==L[c]){var K=`
`+A[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=c);break}}}finally{Zr=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ga(a):""}function L1(t){switch(t.tag){case 26:case 27:case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return va(t.type,!1);case 11:return va(t.type.render,!1);case 1:return va(t.type,!0);case 31:return ga("Activity");default:return""}}function ip(t){try{var e="";do e+=L1(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ba(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function B1(t){var e=lp(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return c.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function su(t){t._valueTracker||(t._valueTracker=B1(t))}function op(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=lp(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function uu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var q1=/[\n"\\]/g;function ya(t){return t.replace(q1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function yf(t,e,a,l,c,d,v,S){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),e!=null?v==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ba(e)):t.value!==""+ba(e)&&(t.value=""+ba(e)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),e!=null?_f(t,v,ba(e)):a!=null?_f(t,v,ba(a)):l!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+ba(S):t.removeAttribute("name")}function sp(t,e,a,l,c,d,v,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),e!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||e!=null))return;a=a!=null?""+ba(a):"",e=e!=null?""+ba(e):a,S||e===t.value||(t.value=e),t.defaultValue=e}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=S?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function _f(t,e,a){e==="number"&&uu(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function yl(t,e,a,l){if(t=t.options,e){e={};for(var c=0;c<a.length;c++)e["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=e.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ba(a),e=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}e!==null||t[c].disabled||(e=t[c])}e!==null&&(e.selected=!0)}}function up(t,e,a){if(e!=null&&(e=""+ba(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ba(a):""}function cp(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(r(92));if(pt(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=ba(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function _l(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Y1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fp(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Y1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function dp(t,e,a){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in e)l=e[c],e.hasOwnProperty(c)&&a[c]!==l&&fp(t,c,l)}else for(var d in e)e.hasOwnProperty(d)&&fp(t,d,e[d])}function xf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),j1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cu(t){return j1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Tf=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xl=null,Tl=null;function hp(t){var e=jt(t);if(e&&(t=e.stateNode)){var a=t[dt]||null;t:switch(t=e.stateNode,e.type){case"input":if(yf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ya(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var c=l[dt]||null;if(!c)throw Error(r(90));yf(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&op(l)}break t;case"textarea":up(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&yl(t,!!a.multiple,e,!1)}}}var Of=!1;function pp(t,e,a){if(Of)return t(e,a);Of=!0;try{var l=t(e);return l}finally{if(Of=!1,(xl!==null||Tl!==null)&&(Ju(),xl&&(e=xl,t=Tl,Tl=xl=null,hp(e),t)))for(e=0;e<t.length;e++)hp(t[e])}}function wo(t,e){var a=t.stateNode;if(a===null)return null;var l=a[dt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,e,typeof a));return a}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=!1;if(mr)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Ef=!1}var Kr=null,wf=null,fu=null;function mp(){if(fu)return fu;var t,e=wf,a=e.length,l,c="value"in Kr?Kr.value:Kr.textContent,d=c.length;for(t=0;t<a&&e[t]===c[t];t++);var v=a-t;for(l=1;l<=v&&e[a-l]===c[d-l];l++);return fu=c.slice(t,1<l?1-l:void 0)}function du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hu(){return!0}function gp(){return!1}function Nn(t){function e(a,l,c,d,v){this._reactName=a,this._targetInst=c,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(a=t[S],this[S]=a?a(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?hu:gp,this.isPropagationStopped=gp,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hu)},persist:function(){},isPersistent:hu}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=Nn(Ci),ko=g({},Ci,{view:0,detail:0}),X1=Nn(ko),Af,kf,Do,mu=g({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Af=t.screenX-Do.screenX,kf=t.screenY-Do.screenY):kf=Af=0,Do=t),Af)},movementY:function(t){return"movementY"in t?t.movementY:kf}}),vp=Nn(mu),G1=g({},mu,{dataTransfer:0}),V1=Nn(G1),Q1=g({},ko,{relatedTarget:0}),Df=Nn(Q1),Z1=g({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),K1=Nn(Z1),J1=g({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$1=Nn(J1),F1=g({},Ci,{data:0}),bp=Nn(F1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=t_[t])?!!e[t]:!1}function Mf(){return e_}var n_=g({},ko,{key:function(t){if(t.key){var e=W1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(t){return t.type==="keypress"?du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a_=Nn(n_),r_=g({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=Nn(r_),i_=g({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),l_=Nn(i_),o_=g({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),s_=Nn(o_),u_=g({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c_=Nn(u_),f_=g({},Ci,{newState:0,oldState:0}),d_=Nn(f_),h_=[9,13,27,32],Rf=mr&&"CompositionEvent"in window,Mo=null;mr&&"documentMode"in document&&(Mo=document.documentMode);var p_=mr&&"TextEvent"in window&&!Mo,_p=mr&&(!Rf||Mo&&8<Mo&&11>=Mo),xp=" ",Tp=!1;function Sp(t,e){switch(t){case"keyup":return h_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sl=!1;function m_(t,e){switch(t){case"compositionend":return Op(e);case"keypress":return e.which!==32?null:(Tp=!0,xp);case"textInput":return t=e.data,t===xp&&Tp?null:t;default:return null}}function g_(t,e){if(Sl)return t==="compositionend"||!Rf&&Sp(t,e)?(t=mp(),fu=wf=Kr=null,Sl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _p&&e.locale!=="ko"?null:e.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v_[t.type]:e==="textarea"}function wp(t,e,a,l){xl?Tl?Tl.push(l):Tl=[l]:xl=l,e=ec(e,"onChange"),0<e.length&&(a=new pu("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Ro=null,Co=null;function b_(t){lv(t,0)}function gu(t){var e=nn(t);if(op(e))return t}function Ap(t,e){if(t==="change")return e}var kp=!1;if(mr){var Cf;if(mr){var zf="oninput"in document;if(!zf){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),zf=typeof Dp.oninput=="function"}Cf=zf}else Cf=!1;kp=Cf&&(!document.documentMode||9<document.documentMode)}function Mp(){Ro&&(Ro.detachEvent("onpropertychange",Rp),Co=Ro=null)}function Rp(t){if(t.propertyName==="value"&&gu(Co)){var e=[];wp(e,Co,t,Sf(t)),pp(b_,e)}}function y_(t,e,a){t==="focusin"?(Mp(),Ro=e,Co=a,Ro.attachEvent("onpropertychange",Rp)):t==="focusout"&&Mp()}function __(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(Co)}function x_(t,e){if(t==="click")return gu(e)}function T_(t,e){if(t==="input"||t==="change")return gu(e)}function S_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:S_;function zo(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var c=a[l];if(!Ke.call(e,c)||!Kn(t[c],e[c]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var a=Cp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cp(a)}}function Np(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Np(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=uu(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=uu(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var O_=mr&&"documentMode"in document&&11>=document.documentMode,Ol=null,Uf=null,No=null,Hf=!1;function Hp(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hf||Ol==null||Ol!==uu(l)||(l=Ol,"selectionStart"in l&&Nf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&zo(No,l)||(No=l,l=ec(Uf,"onSelect"),0<l.length&&(e=new pu("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Ol)))}function zi(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var El={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionrun:zi("Transition","TransitionRun"),transitionstart:zi("Transition","TransitionStart"),transitioncancel:zi("Transition","TransitionCancel"),transitionend:zi("Transition","TransitionEnd")},Lf={},Lp={};mr&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete El.animationend.animation,delete El.animationiteration.animation,delete El.animationstart.animation),"TransitionEvent"in window||delete El.transitionend.transition);function Ni(t){if(Lf[t])return Lf[t];if(!El[t])return t;var e=El[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Lp)return Lf[t]=e[a];return t}var Bp=Ni("animationend"),qp=Ni("animationiteration"),Yp=Ni("animationstart"),E_=Ni("transitionrun"),w_=Ni("transitionstart"),A_=Ni("transitioncancel"),Pp=Ni("transitionend"),jp=new Map,Bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bf.push("scrollEnd");function qa(t,e){jp.set(t,e),de(e,[t])}var Xp=new WeakMap;function _a(t,e){if(typeof t=="object"&&t!==null){var a=Xp.get(t);return a!==void 0?a:(e={value:t,source:e,stack:ip(e)},Xp.set(t,e),e)}return{value:t,source:e,stack:ip(e)}}var xa=[],wl=0,qf=0;function vu(){for(var t=wl,e=qf=wl=0;e<t;){var a=xa[e];xa[e++]=null;var l=xa[e];xa[e++]=null;var c=xa[e];xa[e++]=null;var d=xa[e];if(xa[e++]=null,l!==null&&c!==null){var v=l.pending;v===null?c.next=c:(c.next=v.next,v.next=c),l.pending=c}d!==0&&Gp(a,c,d)}}function bu(t,e,a,l){xa[wl++]=t,xa[wl++]=e,xa[wl++]=a,xa[wl++]=l,qf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Yf(t,e,a,l){return bu(t,e,a,l),yu(t)}function Al(t,e){return bu(t,null,null,e),yu(t)}function Gp(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var c=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&e!==null&&(c=31-le(a),t=d.hiddenUpdates,l=t[c],l===null?t[c]=[e]:l.push(e),e.lane=a|536870912),d):null}function yu(t){if(50<is)throw is=0,Qd=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var kl={};function k_(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,e,a,l){return new k_(t,e,a,l)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gr(t,e){var a=t.alternate;return a===null?(a=Jn(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vp(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function _u(t,e,a,l,c,d){var v=0;if(l=t,typeof t=="function")Pf(t)&&(v=1);else if(typeof t=="string")v=Mx(t,a,rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case P:return t=Jn(31,a,e,c),t.elementType=P,t.lanes=d,t;case O:return Ui(a.children,c,d,e);case b:v=8,c|=24;break;case E:return t=Jn(12,a,e,c|2),t.elementType=E,t.lanes=d,t;case C:return t=Jn(13,a,e,c),t.elementType=C,t.lanes=d,t;case X:return t=Jn(19,a,e,c),t.elementType=X,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:case D:v=10;break t;case k:v=9;break t;case R:v=11;break t;case N:v=14;break t;case G:v=16,l=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return e=Jn(v,a,e,c),e.elementType=t,e.type=l,e.lanes=d,e}function Ui(t,e,a,l){return t=Jn(7,t,l,e),t.lanes=a,t}function jf(t,e,a){return t=Jn(6,t,null,e),t.lanes=a,t}function Xf(t,e,a){return e=Jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Dl=[],Ml=0,xu=null,Tu=0,Ta=[],Sa=0,Hi=null,vr=1,br="";function Li(t,e){Dl[Ml++]=Tu,Dl[Ml++]=xu,xu=t,Tu=e}function Qp(t,e,a){Ta[Sa++]=vr,Ta[Sa++]=br,Ta[Sa++]=Hi,Hi=t;var l=vr;t=br;var c=32-le(l)-1;l&=~(1<<c),a+=1;var d=32-le(e)+c;if(30<d){var v=c-c%5;d=(l&(1<<v)-1).toString(32),l>>=v,c-=v,vr=1<<32-le(e)+c|a<<c|l,br=d+t}else vr=1<<d|a<<c|l,br=t}function Gf(t){t.return!==null&&(Li(t,1),Qp(t,1,0))}function Vf(t){for(;t===xu;)xu=Dl[--Ml],Dl[Ml]=null,Tu=Dl[--Ml],Dl[Ml]=null;for(;t===Hi;)Hi=Ta[--Sa],Ta[Sa]=null,br=Ta[--Sa],Ta[Sa]=null,vr=Ta[--Sa],Ta[Sa]=null}var xn=null,Oe=null,Zt=!1,Bi=null,Ja=!1,Qf=Error(r(519));function qi(t){var e=Error(r(418,""));throw Lo(_a(e,t)),Qf}function Zp(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[tt]=t,e[dt]=l,a){case"dialog":Bt("cancel",e),Bt("close",e);break;case"iframe":case"object":case"embed":Bt("load",e);break;case"video":case"audio":for(a=0;a<os.length;a++)Bt(os[a],e);break;case"source":Bt("error",e);break;case"img":case"image":case"link":Bt("error",e),Bt("load",e);break;case"details":Bt("toggle",e);break;case"input":Bt("invalid",e),sp(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),su(e);break;case"select":Bt("invalid",e);break;case"textarea":Bt("invalid",e),cp(e,l.value,l.defaultValue,l.children),su(e)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||cv(e.textContent,a)?(l.popover!=null&&(Bt("beforetoggle",e),Bt("toggle",e)),l.onScroll!=null&&Bt("scroll",e),l.onScrollEnd!=null&&Bt("scrollend",e),l.onClick!=null&&(e.onclick=nc),e=!0):e=!1,e||qi(t)}function Kp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 13:Ja=!1;return;case 27:case 3:Ja=!0;return;default:xn=xn.return}}function Uo(t){if(t!==xn)return!1;if(!Zt)return Kp(t),Zt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sh(t.type,t.memoizedProps)),a=!a),a&&Oe&&qi(t),Kp(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Oe=Pa(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Oe=null}}else e===27?(e=Oe,ci(t.type)?(t=dh,dh=null,Oe=t):Oe=e):Oe=xn?Pa(t.stateNode.nextSibling):null;return!0}function Ho(){Oe=xn=null,Zt=!1}function Jp(){var t=Bi;return t!==null&&(Ln===null?Ln=t:Ln.push.apply(Ln,t),Bi=null),t}function Lo(t){Bi===null?Bi=[t]:Bi.push(t)}var Zf=Q(null),Yi=null,yr=null;function Jr(t,e,a){nt(Zf,e._currentValue),e._currentValue=a}function _r(t){t._currentValue=Zf.current,at(Zf)}function Kf(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Jf(t,e,a,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;t:for(;d!==null;){var S=d;d=c;for(var A=0;A<e.length;A++)if(S.context===e[A]){d.lanes|=a,S=d.alternate,S!==null&&(S.lanes|=a),Kf(d.return,a,t),l||(v=null);break t}d=S.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Kf(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Bo(t,e,a,l){t=null;for(var c=e,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var S=c.type;Kn(c.pendingProps.value,v.value)||(t!==null?t.push(S):t=[S])}}else if(c===Pt.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(hs):t=[hs])}c=c.return}t!==null&&Jf(e,t,a,l),e.flags|=262144}function Su(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pi(t){Yi=t,yr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function cn(t){return $p(Yi,t)}function Ou(t,e){return Yi===null&&Pi(t),$p(t,e)}function $p(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},yr===null){if(t===null)throw Error(r(308));yr=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else yr=yr.next=e;return a}var D_=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},M_=o.unstable_scheduleCallback,R_=o.unstable_NormalPriority,Xe={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $f(){return{controller:new D_,data:new Map,refCount:0}}function qo(t){t.refCount--,t.refCount===0&&M_(R_,function(){t.controller.abort()})}var Yo=null,Ff=0,Rl=0,Cl=null;function C_(t,e){if(Yo===null){var a=Yo=[];Ff=0,Rl=Id(),Cl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ff++,e.then(Fp,Fp),e}function Fp(){if(--Ff===0&&Yo!==null){Cl!==null&&(Cl.status="fulfilled");var t=Yo;Yo=null,Rl=0,Cl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function z_(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var c=0;c<a.length;c++)(0,a[c])(e)},function(c){for(l.status="rejected",l.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),l}var Wp=H.S;H.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&C_(t,e),Wp!==null&&Wp(t,e)};var ji=Q(null);function Wf(){var t=ji.current;return t!==null?t:se.pooledCache}function Eu(t,e){e===null?nt(ji,ji.current):nt(ji,e.pool)}function Ip(){var t=Wf();return t===null?null:{parent:Xe._currentValue,pool:t}}var Po=Error(r(460)),tm=Error(r(474)),wu=Error(r(542)),If={then:function(){}};function em(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Au(){}function nm(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Au,Au),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rm(t),t;default:if(typeof e.status=="string")e.then(Au,Au);else{if(t=se,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var c=e;c.status="fulfilled",c.value=l}},function(l){if(e.status==="pending"){var c=e;c.status="rejected",c.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rm(t),t}throw jo=e,Po}}var jo=null;function am(){if(jo===null)throw Error(r(459));var t=jo;return jo=null,t}function rm(t){if(t===Po||t===wu)throw Error(r(483))}var $r=!1;function td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ed(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,($t&2)!==0){var c=l.pending;return c===null?e.next=e:(e.next=c.next,c.next=e),l.pending=e,e=yu(t),Gp(t,null,a),e}return bu(t,l,e,a),yu(t)}function Xo(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,fr(t,a)}}function nd(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?c=d=e:d=d.next=e}else c=d=e;a={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var ad=!1;function Go(){if(ad){var t=Cl;if(t!==null)throw t}}function Vo(t,e,a,l){ad=!1;var c=t.updateQueue;$r=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var A=S,L=A.next;A.next=null,v===null?d=L:v.next=L,v=A;var K=t.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==v&&(S===null?K.firstBaseUpdate=L:S.next=L,K.lastBaseUpdate=A))}if(d!==null){var $=c.baseState;v=0,K=L=A=null,S=d;do{var B=S.lane&-536870913,q=B!==S.lane;if(q?(Xt&B)===B:(l&B)===B){B!==0&&B===Rl&&(ad=!0),K!==null&&(K=K.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});t:{var xt=t,vt=S;B=e;var te=a;switch(vt.tag){case 1:if(xt=vt.payload,typeof xt=="function"){$=xt.call(te,$,B);break t}$=xt;break t;case 3:xt.flags=xt.flags&-65537|128;case 0:if(xt=vt.payload,B=typeof xt=="function"?xt.call(te,$,B):xt,B==null)break t;$=g({},$,B);break t;case 2:$r=!0}}B=S.callback,B!==null&&(t.flags|=64,q&&(t.flags|=8192),q=c.callbacks,q===null?c.callbacks=[B]:q.push(B))}else q={lane:B,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(L=K=q,A=$):K=K.next=q,v|=B;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;q=S,S=q.next,q.next=null,c.lastBaseUpdate=q,c.shared.pending=null}}while(!0);K===null&&(A=$),c.baseState=A,c.firstBaseUpdate=L,c.lastBaseUpdate=K,d===null&&(c.shared.lanes=0),li|=v,t.lanes=v,t.memoizedState=$}}function im(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function lm(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)im(a[t],e)}var zl=Q(null),ku=Q(0);function om(t,e){t=Ar,nt(ku,t),nt(zl,e),Ar=t|e.baseLanes}function rd(){nt(ku,Ar),nt(zl,zl.current)}function id(){Ar=ku.current,at(zl),at(ku)}var Ir=0,Mt=null,Wt=null,Le=null,Du=!1,Nl=!1,Xi=!1,Mu=0,Qo=0,Ul=null,N_=0;function ke(){throw Error(r(321))}function ld(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Kn(t[a],e[a]))return!1;return!0}function od(t,e,a,l,c,d){return Ir=d,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,H.H=t===null||t.memoizedState===null?Gm:Vm,Xi=!1,d=a(l,c),Xi=!1,Nl&&(d=um(e,a,l,c)),sm(t),d}function sm(t){H.H=Hu;var e=Wt!==null&&Wt.next!==null;if(Ir=0,Le=Wt=Mt=null,Du=!1,Qo=0,Ul=null,e)throw Error(r(300));t===null||Je||(t=t.dependencies,t!==null&&Su(t)&&(Je=!0))}function um(t,e,a,l){Mt=t;var c=0;do{if(Nl&&(Ul=null),Qo=0,Nl=!1,25<=c)throw Error(r(301));if(c+=1,Le=Wt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=P_,d=e(a,l)}while(Nl);return d}function U_(){var t=H.H,e=t.useState()[0];return e=typeof e.then=="function"?Zo(e):e,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(Mt.flags|=1024),e}function sd(){var t=Mu!==0;return Mu=0,t}function ud(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function cd(t){if(Du){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Du=!1}Ir=0,Le=Wt=Mt=null,Nl=!1,Qo=Mu=0,Ul=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?Mt.memoizedState=Le=t:Le=Le.next=t,Le}function Be(){if(Wt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=Le===null?Mt.memoizedState:Le.next;if(e!==null)Le=e,Wt=t;else{if(t===null)throw Mt.alternate===null?Error(r(467)):Error(r(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Le===null?Mt.memoizedState=Le=t:Le=Le.next=t}return Le}function fd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(t){var e=Qo;return Qo+=1,Ul===null&&(Ul=[]),t=nm(Ul,t,e),e=Mt,(Le===null?e.memoizedState:Le.next)===null&&(e=e.alternate,H.H=e===null||e.memoizedState===null?Gm:Vm),t}function Ru(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zo(t);if(t.$$typeof===D)return cn(t)}throw Error(r(438,String(t)))}function dd(t){var e=null,a=Mt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(c){return c.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=fd(),Mt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=F;return e.index++,a}function xr(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=Be();return hd(e,Wt,t)}function hd(t,e,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var c=t.baseQueue,d=l.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}e.baseQueue=c=d,l.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{e=c.next;var S=v=null,A=null,L=e,K=!1;do{var $=L.lane&-536870913;if($!==L.lane?(Xt&$)===$:(Ir&$)===$){var B=L.revertLane;if(B===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),$===Rl&&(K=!0);else if((Ir&B)===B){L=L.next,B===Rl&&(K=!0);continue}else $={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},A===null?(S=A=$,v=d):A=A.next=$,Mt.lanes|=B,li|=B;$=L.action,Xi&&a(d,$),d=L.hasEagerState?L.eagerState:a(d,$)}else B={lane:$,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},A===null?(S=A=B,v=d):A=A.next=B,Mt.lanes|=$,li|=$;L=L.next}while(L!==null&&L!==e);if(A===null?v=d:A.next=S,!Kn(d,t.memoizedState)&&(Je=!0,K&&(a=Cl,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=A,l.lastRenderedState=d}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function pd(t){var e=Be(),a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,c=a.pending,d=e.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do d=t(d,v.action),v=v.next;while(v!==c);Kn(d,e.memoizedState)||(Je=!0),e.memoizedState=d,e.baseQueue===null&&(e.baseState=d),a.lastRenderedState=d}return[d,l]}function cm(t,e,a){var l=Mt,c=Be(),d=Zt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=e();var v=!Kn((Wt||c).memoizedState,a);v&&(c.memoizedState=a,Je=!0),c=c.queue;var S=hm.bind(null,l,c,t);if(Ko(2048,8,S,[t]),c.getSnapshot!==e||v||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Hl(9,zu(),dm.bind(null,l,c,a,e),null),se===null)throw Error(r(349));d||(Ir&124)!==0||fm(l,e,a)}return a}function fm(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Mt.updateQueue,e===null?(e=fd(),Mt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function dm(t,e,a,l){e.value=a,e.getSnapshot=l,pm(e)&&mm(t)}function hm(t,e,a){return a(function(){pm(e)&&mm(t)})}function pm(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Kn(t,a)}catch{return!0}}function mm(t){var e=Al(t,2);e!==null&&ta(e,t,2)}function md(t){var e=Un();if(typeof t=="function"){var a=t;if(t=a(),Xi){Ne(!0);try{a()}finally{Ne(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:t},e}function gm(t,e,a,l){return t.baseState=a,hd(t,Wt,typeof l=="function"?l:xr)}function H_(t,e,a,l,c){if(Uu(t))throw Error(r(485));if(t=e.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,l(d),a=e.pending,a===null?(d.next=e.pending=d,vm(e,d)):(d.next=a.next,e.pending=a.next=d)}}function vm(t,e){var a=e.action,l=e.payload,c=t.state;if(e.isTransition){var d=H.T,v={};H.T=v;try{var S=a(c,l),A=H.S;A!==null&&A(v,S),bm(t,e,S)}catch(L){gd(t,e,L)}finally{H.T=d}}else try{d=a(c,l),bm(t,e,d)}catch(L){gd(t,e,L)}}function bm(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ym(t,e,l)},function(l){return gd(t,e,l)}):ym(t,e,a)}function ym(t,e,a){e.status="fulfilled",e.value=a,_m(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,vm(t,a)))}function gd(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,_m(e),e=e.next;while(e!==l)}t.action=null}function _m(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function xm(t,e){return e}function Tm(t,e){if(Zt){var a=se.formState;if(a!==null){t:{var l=Mt;if(Zt){if(Oe){e:{for(var c=Oe,d=Ja;c.nodeType!==8;){if(!d){c=null;break e}if(c=Pa(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Oe=Pa(c.nextSibling),l=c.data==="F!";break t}}qi(l)}l=!1}l&&(e=a[0])}}return a=Un(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xm,lastRenderedState:e},a.queue=l,a=Pm.bind(null,Mt,l),l.dispatch=a,l=md(!1),d=xd.bind(null,Mt,!1,l.queue),l=Un(),c={state:e,dispatch:null,action:t,pending:null},l.queue=c,a=H_.bind(null,Mt,c,d,a),c.dispatch=a,l.memoizedState=t,[e,a,!1]}function Sm(t){var e=Be();return Om(e,Wt,t)}function Om(t,e,a){if(e=hd(t,e,xm)[0],t=Cu(xr)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Zo(e)}catch(v){throw v===Po?wu:v}else l=e;e=Be();var c=e.queue,d=c.dispatch;return a!==e.memoizedState&&(Mt.flags|=2048,Hl(9,zu(),L_.bind(null,c,a),null)),[l,d,t]}function L_(t,e){t.action=e}function Em(t){var e=Be(),a=Wt;if(a!==null)return Om(e,a,t);Be(),e=e.memoizedState,a=Be();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Hl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=Mt.updateQueue,e===null&&(e=fd(),Mt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function zu(){return{destroy:void 0,resource:void 0}}function wm(){return Be().memoizedState}function Nu(t,e,a,l){var c=Un();l=l===void 0?null:l,Mt.flags|=t,c.memoizedState=Hl(1|e,zu(),a,l)}function Ko(t,e,a,l){var c=Be();l=l===void 0?null:l;var d=c.memoizedState.inst;Wt!==null&&l!==null&&ld(l,Wt.memoizedState.deps)?c.memoizedState=Hl(e,d,a,l):(Mt.flags|=t,c.memoizedState=Hl(1|e,d,a,l))}function Am(t,e){Nu(8390656,8,t,e)}function km(t,e){Ko(2048,8,t,e)}function Dm(t,e){return Ko(4,2,t,e)}function Mm(t,e){return Ko(4,4,t,e)}function Rm(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cm(t,e,a){a=a!=null?a.concat([t]):null,Ko(4,4,Rm.bind(null,e,t),a)}function vd(){}function zm(t,e){var a=Be();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&ld(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function Nm(t,e){var a=Be();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&ld(e,l[1]))return l[0];if(l=t(),Xi){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[l,e],l}function bd(t,e,a){return a===void 0||(Ir&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Lg(),Mt.lanes|=t,li|=t,a)}function Um(t,e,a,l){return Kn(a,e)?a:zl.current!==null?(t=bd(t,a,l),Kn(t,e)||(Je=!0),t):(Ir&42)===0?(Je=!0,t.memoizedState=a):(t=Lg(),Mt.lanes|=t,li|=t,e)}function Hm(t,e,a,l,c){var d=Z.p;Z.p=d!==0&&8>d?d:8;var v=H.T,S={};H.T=S,xd(t,!1,e,a);try{var A=c(),L=H.S;if(L!==null&&L(S,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var K=z_(A,l);Jo(t,e,K,In(t))}else Jo(t,e,l,In(t))}catch($){Jo(t,e,{then:function(){},status:"rejected",reason:$},In())}finally{Z.p=d,H.T=v}}function B_(){}function yd(t,e,a,l){if(t.tag!==5)throw Error(r(476));var c=Lm(t).queue;Hm(t,c,e,et,a===null?B_:function(){return Bm(t),a(l)})}function Lm(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:et},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Bm(t){var e=Lm(t).next.queue;Jo(t,e,{},In())}function _d(){return cn(hs)}function qm(){return Be().memoizedState}function Ym(){return Be().memoizedState}function q_(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=In();t=Fr(a);var l=Wr(e,t,a);l!==null&&(ta(l,e,a),Xo(l,e,a)),e={cache:$f()},t.payload=e;return}e=e.return}}function Y_(t,e,a){var l=In();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Uu(t)?jm(e,a):(a=Yf(t,e,a,l),a!==null&&(ta(a,t,l),Xm(a,e,l)))}function Pm(t,e,a){var l=In();Jo(t,e,a,l)}function Jo(t,e,a,l){var c={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uu(t))jm(e,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=e.lastRenderedReducer,d!==null))try{var v=e.lastRenderedState,S=d(v,a);if(c.hasEagerState=!0,c.eagerState=S,Kn(S,v))return bu(t,e,c,0),se===null&&vu(),!1}catch{}finally{}if(a=Yf(t,e,c,l),a!==null)return ta(a,t,l),Xm(a,e,l),!0}return!1}function xd(t,e,a,l){if(l={lane:2,revertLane:Id(),action:l,hasEagerState:!1,eagerState:null,next:null},Uu(t)){if(e)throw Error(r(479))}else e=Yf(t,a,l,2),e!==null&&ta(e,t,2)}function Uu(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function jm(t,e){Nl=Du=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Xm(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,fr(t,a)}}var Hu={readContext:cn,use:Ru,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke},Gm={readContext:cn,use:Ru,useCallback:function(t,e){return Un().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:Am,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Nu(4194308,4,Rm.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Nu(4194308,4,t,e)},useInsertionEffect:function(t,e){Nu(4,2,t,e)},useMemo:function(t,e){var a=Un();e=e===void 0?null:e;var l=t();if(Xi){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Un();if(a!==void 0){var c=a(e);if(Xi){Ne(!0);try{a(e)}finally{Ne(!1)}}}else c=e;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=Y_.bind(null,Mt,t),[l.memoizedState,t]},useRef:function(t){var e=Un();return t={current:t},e.memoizedState=t},useState:function(t){t=md(t);var e=t.queue,a=Pm.bind(null,Mt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:vd,useDeferredValue:function(t,e){var a=Un();return bd(a,t,e)},useTransition:function(){var t=md(!1);return t=Hm.bind(null,Mt,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=Mt,c=Un();if(Zt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=e(),se===null)throw Error(r(349));(Xt&124)!==0||fm(l,e,a)}c.memoizedState=a;var d={value:a,getSnapshot:e};return c.queue=d,Am(hm.bind(null,l,d,t),[t]),l.flags|=2048,Hl(9,zu(),dm.bind(null,l,d,a,e),null),a},useId:function(){var t=Un(),e=se.identifierPrefix;if(Zt){var a=br,l=vr;a=(l&~(1<<32-le(l)-1)).toString(32)+a,e="«"+e+"R"+a,a=Mu++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=N_++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:_d,useFormState:Tm,useActionState:Tm,useOptimistic:function(t){var e=Un();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=xd.bind(null,Mt,!0,a),a.dispatch=e,[t,e]},useMemoCache:dd,useCacheRefresh:function(){return Un().memoizedState=q_.bind(null,Mt)}},Vm={readContext:cn,use:Ru,useCallback:zm,useContext:cn,useEffect:km,useImperativeHandle:Cm,useInsertionEffect:Dm,useLayoutEffect:Mm,useMemo:Nm,useReducer:Cu,useRef:wm,useState:function(){return Cu(xr)},useDebugValue:vd,useDeferredValue:function(t,e){var a=Be();return Um(a,Wt.memoizedState,t,e)},useTransition:function(){var t=Cu(xr)[0],e=Be().memoizedState;return[typeof t=="boolean"?t:Zo(t),e]},useSyncExternalStore:cm,useId:qm,useHostTransitionStatus:_d,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,e){var a=Be();return gm(a,Wt,t,e)},useMemoCache:dd,useCacheRefresh:Ym},P_={readContext:cn,use:Ru,useCallback:zm,useContext:cn,useEffect:km,useImperativeHandle:Cm,useInsertionEffect:Dm,useLayoutEffect:Mm,useMemo:Nm,useReducer:pd,useRef:wm,useState:function(){return pd(xr)},useDebugValue:vd,useDeferredValue:function(t,e){var a=Be();return Wt===null?bd(a,t,e):Um(a,Wt.memoizedState,t,e)},useTransition:function(){var t=pd(xr)[0],e=Be().memoizedState;return[typeof t=="boolean"?t:Zo(t),e]},useSyncExternalStore:cm,useId:qm,useHostTransitionStatus:_d,useFormState:Em,useActionState:Em,useOptimistic:function(t,e){var a=Be();return Wt!==null?gm(a,Wt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:dd,useCacheRefresh:Ym},Ll=null,$o=0;function Lu(t){var e=$o;return $o+=1,Ll===null&&(Ll=[]),nm(Ll,t,e)}function Fo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Bu(t,e){throw e.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Qm(t){var e=t._init;return e(t._payload)}function Zm(t){function e(z,M){if(t){var U=z.deletions;U===null?(z.deletions=[M],z.flags|=16):U.push(M)}}function a(z,M){if(!t)return null;for(;M!==null;)e(z,M),M=M.sibling;return null}function l(z){for(var M=new Map;z!==null;)z.key!==null?M.set(z.key,z):M.set(z.index,z),z=z.sibling;return M}function c(z,M){return z=gr(z,M),z.index=0,z.sibling=null,z}function d(z,M,U){return z.index=U,t?(U=z.alternate,U!==null?(U=U.index,U<M?(z.flags|=67108866,M):U):(z.flags|=67108866,M)):(z.flags|=1048576,M)}function v(z){return t&&z.alternate===null&&(z.flags|=67108866),z}function S(z,M,U,J){return M===null||M.tag!==6?(M=jf(U,z.mode,J),M.return=z,M):(M=c(M,U),M.return=z,M)}function A(z,M,U,J){var ot=U.type;return ot===O?K(z,M,U.props.children,J,U.key):M!==null&&(M.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===G&&Qm(ot)===M.type)?(M=c(M,U.props),Fo(M,U),M.return=z,M):(M=_u(U.type,U.key,U.props,null,z.mode,J),Fo(M,U),M.return=z,M)}function L(z,M,U,J){return M===null||M.tag!==4||M.stateNode.containerInfo!==U.containerInfo||M.stateNode.implementation!==U.implementation?(M=Xf(U,z.mode,J),M.return=z,M):(M=c(M,U.children||[]),M.return=z,M)}function K(z,M,U,J,ot){return M===null||M.tag!==7?(M=Ui(U,z.mode,J,ot),M.return=z,M):(M=c(M,U),M.return=z,M)}function $(z,M,U){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=jf(""+M,z.mode,U),M.return=z,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case x:return U=_u(M.type,M.key,M.props,null,z.mode,U),Fo(U,M),U.return=z,U;case y:return M=Xf(M,z.mode,U),M.return=z,M;case G:var J=M._init;return M=J(M._payload),$(z,M,U)}if(pt(M)||W(M))return M=Ui(M,z.mode,U,null),M.return=z,M;if(typeof M.then=="function")return $(z,Lu(M),U);if(M.$$typeof===D)return $(z,Ou(z,M),U);Bu(z,M)}return null}function B(z,M,U,J){var ot=M!==null?M.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ot!==null?null:S(z,M,""+U,J);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case x:return U.key===ot?A(z,M,U,J):null;case y:return U.key===ot?L(z,M,U,J):null;case G:return ot=U._init,U=ot(U._payload),B(z,M,U,J)}if(pt(U)||W(U))return ot!==null?null:K(z,M,U,J,null);if(typeof U.then=="function")return B(z,M,Lu(U),J);if(U.$$typeof===D)return B(z,M,Ou(z,U),J);Bu(z,U)}return null}function q(z,M,U,J,ot){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return z=z.get(U)||null,S(M,z,""+J,ot);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return z=z.get(J.key===null?U:J.key)||null,A(M,z,J,ot);case y:return z=z.get(J.key===null?U:J.key)||null,L(M,z,J,ot);case G:var Ct=J._init;return J=Ct(J._payload),q(z,M,U,J,ot)}if(pt(J)||W(J))return z=z.get(U)||null,K(M,z,J,ot,null);if(typeof J.then=="function")return q(z,M,U,Lu(J),ot);if(J.$$typeof===D)return q(z,M,U,Ou(M,J),ot);Bu(M,J)}return null}function xt(z,M,U,J){for(var ot=null,Ct=null,ht=M,yt=M=0,Fe=null;ht!==null&&yt<U.length;yt++){ht.index>yt?(Fe=ht,ht=null):Fe=ht.sibling;var Vt=B(z,ht,U[yt],J);if(Vt===null){ht===null&&(ht=Fe);break}t&&ht&&Vt.alternate===null&&e(z,ht),M=d(Vt,M,yt),Ct===null?ot=Vt:Ct.sibling=Vt,Ct=Vt,ht=Fe}if(yt===U.length)return a(z,ht),Zt&&Li(z,yt),ot;if(ht===null){for(;yt<U.length;yt++)ht=$(z,U[yt],J),ht!==null&&(M=d(ht,M,yt),Ct===null?ot=ht:Ct.sibling=ht,Ct=ht);return Zt&&Li(z,yt),ot}for(ht=l(ht);yt<U.length;yt++)Fe=q(ht,z,yt,U[yt],J),Fe!==null&&(t&&Fe.alternate!==null&&ht.delete(Fe.key===null?yt:Fe.key),M=d(Fe,M,yt),Ct===null?ot=Fe:Ct.sibling=Fe,Ct=Fe);return t&&ht.forEach(function(mi){return e(z,mi)}),Zt&&Li(z,yt),ot}function vt(z,M,U,J){if(U==null)throw Error(r(151));for(var ot=null,Ct=null,ht=M,yt=M=0,Fe=null,Vt=U.next();ht!==null&&!Vt.done;yt++,Vt=U.next()){ht.index>yt?(Fe=ht,ht=null):Fe=ht.sibling;var mi=B(z,ht,Vt.value,J);if(mi===null){ht===null&&(ht=Fe);break}t&&ht&&mi.alternate===null&&e(z,ht),M=d(mi,M,yt),Ct===null?ot=mi:Ct.sibling=mi,Ct=mi,ht=Fe}if(Vt.done)return a(z,ht),Zt&&Li(z,yt),ot;if(ht===null){for(;!Vt.done;yt++,Vt=U.next())Vt=$(z,Vt.value,J),Vt!==null&&(M=d(Vt,M,yt),Ct===null?ot=Vt:Ct.sibling=Vt,Ct=Vt);return Zt&&Li(z,yt),ot}for(ht=l(ht);!Vt.done;yt++,Vt=U.next())Vt=q(ht,z,yt,Vt.value,J),Vt!==null&&(t&&Vt.alternate!==null&&ht.delete(Vt.key===null?yt:Vt.key),M=d(Vt,M,yt),Ct===null?ot=Vt:Ct.sibling=Vt,Ct=Vt);return t&&ht.forEach(function(jx){return e(z,jx)}),Zt&&Li(z,yt),ot}function te(z,M,U,J){if(typeof U=="object"&&U!==null&&U.type===O&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case x:t:{for(var ot=U.key;M!==null;){if(M.key===ot){if(ot=U.type,ot===O){if(M.tag===7){a(z,M.sibling),J=c(M,U.props.children),J.return=z,z=J;break t}}else if(M.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===G&&Qm(ot)===M.type){a(z,M.sibling),J=c(M,U.props),Fo(J,U),J.return=z,z=J;break t}a(z,M);break}else e(z,M);M=M.sibling}U.type===O?(J=Ui(U.props.children,z.mode,J,U.key),J.return=z,z=J):(J=_u(U.type,U.key,U.props,null,z.mode,J),Fo(J,U),J.return=z,z=J)}return v(z);case y:t:{for(ot=U.key;M!==null;){if(M.key===ot)if(M.tag===4&&M.stateNode.containerInfo===U.containerInfo&&M.stateNode.implementation===U.implementation){a(z,M.sibling),J=c(M,U.children||[]),J.return=z,z=J;break t}else{a(z,M);break}else e(z,M);M=M.sibling}J=Xf(U,z.mode,J),J.return=z,z=J}return v(z);case G:return ot=U._init,U=ot(U._payload),te(z,M,U,J)}if(pt(U))return xt(z,M,U,J);if(W(U)){if(ot=W(U),typeof ot!="function")throw Error(r(150));return U=ot.call(U),vt(z,M,U,J)}if(typeof U.then=="function")return te(z,M,Lu(U),J);if(U.$$typeof===D)return te(z,M,Ou(z,U),J);Bu(z,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,M!==null&&M.tag===6?(a(z,M.sibling),J=c(M,U),J.return=z,z=J):(a(z,M),J=jf(U,z.mode,J),J.return=z,z=J),v(z)):a(z,M)}return function(z,M,U,J){try{$o=0;var ot=te(z,M,U,J);return Ll=null,ot}catch(ht){if(ht===Po||ht===wu)throw ht;var Ct=Jn(29,ht,null,z.mode);return Ct.lanes=J,Ct.return=z,Ct}finally{}}}var Bl=Zm(!0),Km=Zm(!1),Oa=Q(null),$a=null;function ti(t){var e=t.alternate;nt(Ge,Ge.current&1),nt(Oa,t),$a===null&&(e===null||zl.current!==null||e.memoizedState!==null)&&($a=t)}function Jm(t){if(t.tag===22){if(nt(Ge,Ge.current),nt(Oa,t),$a===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&($a=t)}}else ei()}function ei(){nt(Ge,Ge.current),nt(Oa,Oa.current)}function Tr(t){at(Oa),$a===t&&($a=null),at(Ge)}var Ge=Q(0);function qu(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||fh(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Td(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:g({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Sd={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=In(),c=Fr(l);c.payload=e,a!=null&&(c.callback=a),e=Wr(t,c,l),e!==null&&(ta(e,t,l),Xo(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=In(),c=Fr(l);c.tag=1,c.payload=e,a!=null&&(c.callback=a),e=Wr(t,c,l),e!==null&&(ta(e,t,l),Xo(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=In(),l=Fr(a);l.tag=2,e!=null&&(l.callback=e),e=Wr(t,l,a),e!==null&&(ta(e,t,a),Xo(e,t,a))}};function $m(t,e,a,l,c,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):e.prototype&&e.prototype.isPureReactComponent?!zo(a,l)||!zo(c,d):!0}function Fm(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&Sd.enqueueReplaceState(e,e.state,null)}function Gi(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Yu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Wm(t){Yu(t)}function Im(t){console.error(t)}function tg(t){Yu(t)}function Pu(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function eg(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Od(t,e,a){return a=Fr(a),a.tag=3,a.payload={element:null},a.callback=function(){Pu(t,e)},a}function ng(t){return t=Fr(t),t.tag=3,t}function ag(t,e,a,l){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=l.value;t.payload=function(){return c(d)},t.callback=function(){eg(e,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){eg(e,a,l),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function j_(t,e,a,l,c){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&Bo(e,a,c,!0),a=Oa.current,a!==null){switch(a.tag){case 13:return $a===null?Kd():a.alternate===null&&Ee===0&&(Ee=3),a.flags&=-257,a.flags|=65536,a.lanes=c,l===If?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),$d(t,l,c)),!1;case 22:return a.flags|=65536,l===If?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),$d(t,l,c)),!1}throw Error(r(435,a.tag))}return $d(t,l,c),Kd(),!1}if(Zt)return e=Oa.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=c,l!==Qf&&(t=Error(r(422),{cause:l}),Lo(_a(t,a)))):(l!==Qf&&(e=Error(r(423),{cause:l}),Lo(_a(e,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=_a(l,a),c=Od(t.stateNode,l,c),nd(t,c),Ee!==4&&(Ee=2)),!1;var d=Error(r(520),{cause:l});if(d=_a(d,a),rs===null?rs=[d]:rs.push(d),Ee!==4&&(Ee=2),e===null)return!0;l=_a(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Od(a.stateNode,l,t),nd(a,t),!1;case 1:if(e=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(oi===null||!oi.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=ng(c),ag(c,t,a,l),nd(a,c),!1}a=a.return}while(a!==null);return!1}var rg=Error(r(461)),Je=!1;function an(t,e,a,l){e.child=t===null?Km(e,null,a,l):Bl(e,t.child,a,l)}function ig(t,e,a,l,c){a=a.render;var d=e.ref;if("ref"in l){var v={};for(var S in l)S!=="ref"&&(v[S]=l[S])}else v=l;return Pi(e),l=od(t,e,a,v,d,c),S=sd(),t!==null&&!Je?(ud(t,e,c),Sr(t,e,c)):(Zt&&S&&Gf(e),e.flags|=1,an(t,e,l,c),e.child)}function lg(t,e,a,l,c){if(t===null){var d=a.type;return typeof d=="function"&&!Pf(d)&&d.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=d,og(t,e,d,l,c)):(t=_u(a.type,null,l,e,e.mode,c),t.ref=e.ref,t.return=e,e.child=t)}if(d=t.child,!Cd(t,c)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(v,l)&&t.ref===e.ref)return Sr(t,e,c)}return e.flags|=1,t=gr(d,l),t.ref=e.ref,t.return=e,e.child=t}function og(t,e,a,l,c){if(t!==null){var d=t.memoizedProps;if(zo(d,l)&&t.ref===e.ref)if(Je=!1,e.pendingProps=l=d,Cd(t,c))(t.flags&131072)!==0&&(Je=!0);else return e.lanes=t.lanes,Sr(t,e,c)}return Ed(t,e,a,l,c)}function sg(t,e,a){var l=e.pendingProps,c=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((e.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(c=e.child=t.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;e.childLanes=d&~l}else e.childLanes=0,e.child=null;return ug(t,e,l,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Eu(e,d!==null?d.cachePool:null),d!==null?om(e,d):rd(),Jm(e);else return e.lanes=e.childLanes=536870912,ug(t,e,d!==null?d.baseLanes|a:a,a)}else d!==null?(Eu(e,d.cachePool),om(e,d),ei(),e.memoizedState=null):(t!==null&&Eu(e,null),rd(),ei());return an(t,e,c,a),e.child}function ug(t,e,a,l){var c=Wf();return c=c===null?null:{parent:Xe._currentValue,pool:c},e.memoizedState={baseLanes:a,cachePool:c},t!==null&&Eu(e,null),rd(),Jm(e),t!==null&&Bo(t,e,l,!0),null}function ju(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Ed(t,e,a,l,c){return Pi(e),a=od(t,e,a,l,void 0,c),l=sd(),t!==null&&!Je?(ud(t,e,c),Sr(t,e,c)):(Zt&&l&&Gf(e),e.flags|=1,an(t,e,a,c),e.child)}function cg(t,e,a,l,c,d){return Pi(e),e.updateQueue=null,a=um(e,l,a,c),sm(t),l=sd(),t!==null&&!Je?(ud(t,e,d),Sr(t,e,d)):(Zt&&l&&Gf(e),e.flags|=1,an(t,e,a,d),e.child)}function fg(t,e,a,l,c){if(Pi(e),e.stateNode===null){var d=kl,v=a.contextType;typeof v=="object"&&v!==null&&(d=cn(v)),d=new a(l,d),e.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Sd,e.stateNode=d,d._reactInternals=e,d=e.stateNode,d.props=l,d.state=e.memoizedState,d.refs={},td(e),v=a.contextType,d.context=typeof v=="object"&&v!==null?cn(v):kl,d.state=e.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Td(e,a,v,l),d.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Sd.enqueueReplaceState(d,d.state,null),Vo(e,l,d,c),Go(),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){d=e.stateNode;var S=e.memoizedProps,A=Gi(a,S);d.props=A;var L=d.context,K=a.contextType;v=kl,typeof K=="object"&&K!==null&&(v=cn(K));var $=a.getDerivedStateFromProps;K=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=e.pendingProps!==S,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||L!==v)&&Fm(e,d,l,v),$r=!1;var B=e.memoizedState;d.state=B,Vo(e,l,d,c),Go(),L=e.memoizedState,S||B!==L||$r?(typeof $=="function"&&(Td(e,a,$,l),L=e.memoizedState),(A=$r||$m(e,a,A,l,B,L,v))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(e.flags|=4194308)):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=L),d.props=l,d.state=L,d.context=v,l=A):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{d=e.stateNode,ed(t,e),v=e.memoizedProps,K=Gi(a,v),d.props=K,$=e.pendingProps,B=d.context,L=a.contextType,A=kl,typeof L=="object"&&L!==null&&(A=cn(L)),S=a.getDerivedStateFromProps,(L=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==$||B!==A)&&Fm(e,d,l,A),$r=!1,B=e.memoizedState,d.state=B,Vo(e,l,d,c),Go();var q=e.memoizedState;v!==$||B!==q||$r||t!==null&&t.dependencies!==null&&Su(t.dependencies)?(typeof S=="function"&&(Td(e,a,S,l),q=e.memoizedState),(K=$r||$m(e,a,K,l,B,q,A)||t!==null&&t.dependencies!==null&&Su(t.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,A),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,A)),typeof d.componentDidUpdate=="function"&&(e.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=q),d.props=l,d.state=q,d.context=A,l=K):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(e.flags|=1024),l=!1)}return d=l,ju(t,e),l=(e.flags&128)!==0,d||l?(d=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),e.flags|=1,t!==null&&l?(e.child=Bl(e,t.child,null,c),e.child=Bl(e,null,a,c)):an(t,e,a,c),e.memoizedState=d.state,t=e.child):t=Sr(t,e,c),t}function dg(t,e,a,l){return Ho(),e.flags|=256,an(t,e,a,l),e.child}var wd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ad(t){return{baseLanes:t,cachePool:Ip()}}function kd(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ea),t}function hg(t,e,a){var l=e.pendingProps,c=!1,d=(e.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(Ge.current&2)!==0),v&&(c=!0,e.flags&=-129),v=(e.flags&32)!==0,e.flags&=-33,t===null){if(Zt){if(c?ti(e):ei(),Zt){var S=Oe,A;if(A=S){t:{for(A=S,S=Ja;A.nodeType!==8;){if(!S){S=null;break t}if(A=Pa(A.nextSibling),A===null){S=null;break t}}S=A}S!==null?(e.memoizedState={dehydrated:S,treeContext:Hi!==null?{id:vr,overflow:br}:null,retryLane:536870912,hydrationErrors:null},A=Jn(18,null,null,0),A.stateNode=S,A.return=e,e.child=A,xn=e,Oe=null,A=!0):A=!1}A||qi(e)}if(S=e.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return fh(S)?e.lanes=32:e.lanes=536870912,null;Tr(e)}return S=l.children,l=l.fallback,c?(ei(),c=e.mode,S=Xu({mode:"hidden",children:S},c),l=Ui(l,c,a,null),S.return=e,l.return=e,S.sibling=l,e.child=S,c=e.child,c.memoizedState=Ad(a),c.childLanes=kd(t,v,a),e.memoizedState=wd,l):(ti(e),Dd(e,S))}if(A=t.memoizedState,A!==null&&(S=A.dehydrated,S!==null)){if(d)e.flags&256?(ti(e),e.flags&=-257,e=Md(t,e,a)):e.memoizedState!==null?(ei(),e.child=t.child,e.flags|=128,e=null):(ei(),c=l.fallback,S=e.mode,l=Xu({mode:"visible",children:l.children},S),c=Ui(c,S,a,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,Bl(e,t.child,null,a),l=e.child,l.memoizedState=Ad(a),l.childLanes=kd(t,v,a),e.memoizedState=wd,e=c);else if(ti(e),fh(S)){if(v=S.nextSibling&&S.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(r(419)),l.stack="",l.digest=v,Lo({value:l,source:null,stack:null}),e=Md(t,e,a)}else if(Je||Bo(t,e,a,!1),v=(a&t.childLanes)!==0,Je||v){if(v=se,v!==null&&(l=a&-a,l=(l&42)!==0?1:Vn(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==A.retryLane))throw A.retryLane=l,Al(t,l),ta(v,t,l),rg;S.data==="$?"||Kd(),e=Md(t,e,a)}else S.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=A.treeContext,Oe=Pa(S.nextSibling),xn=e,Zt=!0,Bi=null,Ja=!1,t!==null&&(Ta[Sa++]=vr,Ta[Sa++]=br,Ta[Sa++]=Hi,vr=t.id,br=t.overflow,Hi=e),e=Dd(e,l.children),e.flags|=4096);return e}return c?(ei(),c=l.fallback,S=e.mode,A=t.child,L=A.sibling,l=gr(A,{mode:"hidden",children:l.children}),l.subtreeFlags=A.subtreeFlags&65011712,L!==null?c=gr(L,c):(c=Ui(c,S,a,null),c.flags|=2),c.return=e,l.return=e,l.sibling=c,e.child=l,l=c,c=e.child,S=t.child.memoizedState,S===null?S=Ad(a):(A=S.cachePool,A!==null?(L=Xe._currentValue,A=A.parent!==L?{parent:L,pool:L}:A):A=Ip(),S={baseLanes:S.baseLanes|a,cachePool:A}),c.memoizedState=S,c.childLanes=kd(t,v,a),e.memoizedState=wd,l):(ti(e),a=t.child,t=a.sibling,a=gr(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(v=e.deletions,v===null?(e.deletions=[t],e.flags|=16):v.push(t)),e.child=a,e.memoizedState=null,a)}function Dd(t,e){return e=Xu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Xu(t,e){return t=Jn(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Md(t,e,a){return Bl(e,t.child,null,a),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pg(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Kf(t.return,e,a)}function Rd(t,e,a,l,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:c}:(d.isBackwards=e,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=c)}function mg(t,e,a){var l=e.pendingProps,c=l.revealOrder,d=l.tail;if(an(t,e,l.children,a),l=Ge.current,(l&2)!==0)l=l&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pg(t,a,e);else if(t.tag===19)pg(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(nt(Ge,l),c){case"forwards":for(a=e.child,c=null;a!==null;)t=a.alternate,t!==null&&qu(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=e.child,e.child=null):(c=a.sibling,a.sibling=null),Rd(e,!1,c,a,d);break;case"backwards":for(a=null,c=e.child,e.child=null;c!==null;){if(t=c.alternate,t!==null&&qu(t)===null){e.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Rd(e,!0,a,null,d);break;case"together":Rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sr(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Bo(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,a=gr(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=gr(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Cd(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Su(t)))}function X_(t,e,a){switch(e.tag){case 3:wt(e,e.stateNode.containerInfo),Jr(e,Xe,t.memoizedState.cache),Ho();break;case 27:case 5:ha(e);break;case 4:wt(e,e.stateNode.containerInfo);break;case 10:Jr(e,e.type,e.memoizedProps.value);break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(ti(e),e.flags|=128,null):(a&e.child.childLanes)!==0?hg(t,e,a):(ti(e),t=Sr(t,e,a),t!==null?t.sibling:null);ti(e);break;case 19:var c=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(Bo(t,e,a,!1),l=(a&e.childLanes)!==0),c){if(l)return mg(t,e,a);e.flags|=128}if(c=e.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),nt(Ge,Ge.current),l)break;return null;case 22:case 23:return e.lanes=0,sg(t,e,a);case 24:Jr(e,Xe,t.memoizedState.cache)}return Sr(t,e,a)}function gg(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Je=!0;else{if(!Cd(t,a)&&(e.flags&128)===0)return Je=!1,X_(t,e,a);Je=(t.flags&131072)!==0}else Je=!1,Zt&&(e.flags&1048576)!==0&&Qp(e,Tu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var l=e.elementType,c=l._init;if(l=c(l._payload),e.type=l,typeof l=="function")Pf(l)?(t=Gi(l,t),e.tag=1,e=fg(null,e,l,t,a)):(e.tag=0,e=Ed(null,e,l,t,a));else{if(l!=null){if(c=l.$$typeof,c===R){e.tag=11,e=ig(null,e,l,t,a);break t}else if(c===N){e.tag=14,e=lg(null,e,l,t,a);break t}}throw e=Tt(l)||l,Error(r(306,e,""))}}return e;case 0:return Ed(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,c=Gi(l,e.pendingProps),fg(t,e,l,c,a);case 3:t:{if(wt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));l=e.pendingProps;var d=e.memoizedState;c=d.element,ed(t,e),Vo(e,l,null,a);var v=e.memoizedState;if(l=v.cache,Jr(e,Xe,l),l!==d.cache&&Jf(e,[Xe],a,!0),Go(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},e.updateQueue.baseState=d,e.memoizedState=d,e.flags&256){e=dg(t,e,l,a);break t}else if(l!==c){c=_a(Error(r(424)),e),Lo(c),e=dg(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Oe=Pa(t.firstChild),xn=e,Zt=!0,Bi=null,Ja=!0,a=Km(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ho(),l===c){e=Sr(t,e,a);break t}an(t,e,l,a)}e=e.child}return e;case 26:return ju(t,e),t===null?(a=_v(e.type,null,e.pendingProps,null))?e.memoizedState=a:Zt||(a=e.type,t=e.pendingProps,l=ac(st.current).createElement(a),l[tt]=e,l[dt]=t,ln(l,a,t),Gt(l),e.stateNode=l):e.memoizedState=_v(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ha(e),t===null&&Zt&&(l=e.stateNode=vv(e.type,e.pendingProps,st.current),xn=e,Ja=!0,c=Oe,ci(e.type)?(dh=c,Oe=Pa(l.firstChild)):Oe=c),an(t,e,e.pendingProps.children,a),ju(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Zt&&((c=l=Oe)&&(l=vx(l,e.type,e.pendingProps,Ja),l!==null?(e.stateNode=l,xn=e,Oe=Pa(l.firstChild),Ja=!1,c=!0):c=!1),c||qi(e)),ha(e),c=e.type,d=e.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,sh(c,d)?l=null:v!==null&&sh(c,v)&&(e.flags|=32),e.memoizedState!==null&&(c=od(t,e,U_,null,null,a),hs._currentValue=c),ju(t,e),an(t,e,l,a),e.child;case 6:return t===null&&Zt&&((t=a=Oe)&&(a=bx(a,e.pendingProps,Ja),a!==null?(e.stateNode=a,xn=e,Oe=null,t=!0):t=!1),t||qi(e)),null;case 13:return hg(t,e,a);case 4:return wt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Bl(e,null,l,a):an(t,e,l,a),e.child;case 11:return ig(t,e,e.type,e.pendingProps,a);case 7:return an(t,e,e.pendingProps,a),e.child;case 8:return an(t,e,e.pendingProps.children,a),e.child;case 12:return an(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,Jr(e,e.type,l.value),an(t,e,l.children,a),e.child;case 9:return c=e.type._context,l=e.pendingProps.children,Pi(e),c=cn(c),l=l(c),e.flags|=1,an(t,e,l,a),e.child;case 14:return lg(t,e,e.type,e.pendingProps,a);case 15:return og(t,e,e.type,e.pendingProps,a);case 19:return mg(t,e,a);case 31:return l=e.pendingProps,a=e.mode,l={mode:l.mode,children:l.children},t===null?(a=Xu(l,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=gr(t.child,l),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return sg(t,e,a);case 24:return Pi(e),l=cn(Xe),t===null?(c=Wf(),c===null&&(c=se,d=$f(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),e.memoizedState={parent:l,cache:c},td(e),Jr(e,Xe,c)):((t.lanes&a)!==0&&(ed(t,e),Vo(e,null,null,a),Go()),c=t.memoizedState,d=e.memoizedState,c.parent!==l?(c={parent:l,cache:l},e.memoizedState=c,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=c),Jr(e,Xe,l)):(l=d.cache,Jr(e,Xe,l),l!==c.cache&&Jf(e,[Xe],a,!0))),an(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function Or(t){t.flags|=4}function vg(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ev(e)){if(e=Oa.current,e!==null&&((Xt&4194048)===Xt?$a!==null:(Xt&62914560)!==Xt&&(Xt&536870912)===0||e!==$a))throw jo=If,tm;t.flags|=8192}}function Gu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Za():536870912,t.lanes|=e,jl|=e)}function Wo(t,e){if(!Zt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function be(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function G_(t,e,a){var l=e.pendingProps;switch(Vf(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(e),null;case 1:return be(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),_r(Xe),ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?Or(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Jp())),be(e),null;case 26:return a=e.memoizedState,t===null?(Or(e),a!==null?(be(e),vg(e,a)):(be(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Or(e),be(e),vg(e,a)):(be(e),e.flags&=-16777217):(t.memoizedProps!==l&&Or(e),be(e),e.flags&=-16777217),null;case 27:Ce(e),a=st.current;var c=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Or(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return be(e),null}t=rt.current,Uo(e)?Zp(e):(t=vv(c,l,a),e.stateNode=t,Or(e))}return be(e),null;case 5:if(Ce(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Or(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return be(e),null}if(t=rt.current,Uo(e))Zp(e);else{switch(c=ac(st.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(a,{is:l.is}):c.createElement(a)}}t[tt]=e,t[dt]=l;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=t;t:switch(ln(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Or(e)}}return be(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Or(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(r(166));if(t=st.current,Uo(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,c=xn,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[tt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||cv(t.nodeValue,a)),t||qi(e)}else t=ac(t).createTextNode(l),t[tt]=e,e.stateNode=t}return be(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Uo(e),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=e.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[tt]=e}else Ho(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;be(e),c=!1}else c=Jp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return e.flags&256?(Tr(e),e):(Tr(e),null)}if(Tr(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=e.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==c&&(l.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Gu(e,e.updateQueue),be(e),null;case 4:return ce(),t===null&&ah(e.stateNode.containerInfo),be(e),null;case 10:return _r(e.type),be(e),null;case 19:if(at(Ge),c=e.memoizedState,c===null)return be(e),null;if(l=(e.flags&128)!==0,d=c.rendering,d===null)if(l)Wo(c,!1);else{if(Ee!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(d=qu(t),d!==null){for(e.flags|=128,Wo(c,!1),t=d.updateQueue,e.updateQueue=t,Gu(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Vp(a,t),a=a.sibling;return nt(Ge,Ge.current&1|2),e.child}t=t.sibling}c.tail!==null&&j()>Zu&&(e.flags|=128,l=!0,Wo(c,!1),e.lanes=4194304)}else{if(!l)if(t=qu(d),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Gu(e,t),Wo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Zt)return be(e),null}else 2*j()-c.renderingStartTime>Zu&&a!==536870912&&(e.flags|=128,l=!0,Wo(c,!1),e.lanes=4194304);c.isBackwards?(d.sibling=e.child,e.child=d):(t=c.last,t!==null?t.sibling=d:e.child=d,c.last=d)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=j(),e.sibling=null,t=Ge.current,nt(Ge,l?t&1|2:t&1),e):(be(e),null);case 22:case 23:return Tr(e),id(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(be(e),e.subtreeFlags&6&&(e.flags|=8192)):be(e),a=e.updateQueue,a!==null&&Gu(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&at(ji),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),_r(Xe),be(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function V_(t,e){switch(Vf(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _r(Xe),ce(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ce(e),null;case 13:if(Tr(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(Ge),null;case 4:return ce(),null;case 10:return _r(e.type),null;case 22:case 23:return Tr(e),id(),t!==null&&at(ji),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return _r(Xe),null;case 25:return null;default:return null}}function bg(t,e){switch(Vf(e),e.tag){case 3:_r(Xe),ce();break;case 26:case 27:case 5:Ce(e);break;case 4:ce();break;case 13:Tr(e);break;case 19:at(Ge);break;case 10:_r(e.type);break;case 22:case 23:Tr(e),id(),t!==null&&at(ji);break;case 24:_r(Xe)}}function Io(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==c)}}catch(S){ne(e,e.return,S)}}function ni(t,e,a){try{var l=e.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var d=c.next;l=d;do{if((l.tag&t)===t){var v=l.inst,S=v.destroy;if(S!==void 0){v.destroy=void 0,c=e;var A=a,L=S;try{L()}catch(K){ne(c,A,K)}}}l=l.next}while(l!==d)}}catch(K){ne(e,e.return,K)}}function yg(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{lm(e,a)}catch(l){ne(t,t.return,l)}}}function _g(t,e,a){a.props=Gi(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){ne(t,e,l)}}function ts(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(c){ne(t,e,c)}}function Fa(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(c){ne(t,e,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ne(t,e,c)}else a.current=null}function xg(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(c){ne(t,t.return,c)}}function zd(t,e,a){try{var l=t.stateNode;dx(l,t.type,a,e),l[dt]=e}catch(c){ne(t,t.return,c)}}function Tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ci(t.type)||t.tag===4}function Nd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ci(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ud(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=nc));else if(l!==4&&(l===27&&ci(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Ud(t,e,a),t=t.sibling;t!==null;)Ud(t,e,a),t=t.sibling}function Vu(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&ci(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Vu(t,e,a),t=t.sibling;t!==null;)Vu(t,e,a),t=t.sibling}function Sg(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,c=e.attributes;c.length;)e.removeAttributeNode(c[0]);ln(e,l,a),e[tt]=t,e[dt]=a}catch(d){ne(t,t.return,d)}}var Er=!1,De=!1,Hd=!1,Og=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Q_(t,e){if(t=t.containerInfo,lh=uc,t=Up(t),Nf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var c=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,S=-1,A=-1,L=0,K=0,$=t,B=null;e:for(;;){for(var q;$!==a||c!==0&&$.nodeType!==3||(S=v+c),$!==d||l!==0&&$.nodeType!==3||(A=v+l),$.nodeType===3&&(v+=$.nodeValue.length),(q=$.firstChild)!==null;)B=$,$=q;for(;;){if($===t)break e;if(B===a&&++L===c&&(S=v),B===d&&++K===l&&(A=v),(q=$.nextSibling)!==null)break;$=B,B=$.parentNode}$=q}a=S===-1||A===-1?null:{start:S,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(oh={focusedElem:t,selectionRange:a},uc=!1,$e=e;$e!==null;)if(e=$e,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,$e=t;else for(;$e!==null;){switch(e=$e,d=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=e,c=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var xt=Gi(a.type,c,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(xt,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(vt){ne(a,a.return,vt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)ch(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ch(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,$e=t;break}$e=e.return}}function Eg(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ai(t,a),l&4&&Io(5,a);break;case 1:if(ai(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(v){ne(a,a.return,v)}else{var c=Gi(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(c,e,t.__reactInternalSnapshotBeforeUpdate)}catch(v){ne(a,a.return,v)}}l&64&&yg(a),l&512&&ts(a,a.return);break;case 3:if(ai(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{lm(t,e)}catch(v){ne(a,a.return,v)}}break;case 27:e===null&&l&4&&Sg(a);case 26:case 5:ai(t,a),e===null&&l&4&&xg(a),l&512&&ts(a,a.return);break;case 12:ai(t,a);break;case 13:ai(t,a),l&4&&kg(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ex.bind(null,a),yx(t,a))));break;case 22:if(l=a.memoizedState!==null||Er,!l){e=e!==null&&e.memoizedState!==null||De,c=Er;var d=De;Er=l,(De=e)&&!d?ri(t,a,(a.subtreeFlags&8772)!==0):ai(t,a),Er=c,De=d}break;case 30:break;default:ai(t,a)}}function wg(t){var e=t.alternate;e!==null&&(t.alternate=null,wg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&oe(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pe=null,Hn=!1;function wr(t,e,a){for(a=a.child;a!==null;)Ag(t,e,a),a=a.sibling}function Ag(t,e,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Mn,a)}catch{}switch(a.tag){case 26:De||Fa(a,e),wr(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:De||Fa(a,e);var l=pe,c=Hn;ci(a.type)&&(pe=a.stateNode,Hn=!1),wr(t,e,a),us(a.stateNode),pe=l,Hn=c;break;case 5:De||Fa(a,e);case 6:if(l=pe,c=Hn,pe=null,wr(t,e,a),pe=l,Hn=c,pe!==null)if(Hn)try{(pe.nodeType===9?pe.body:pe.nodeName==="HTML"?pe.ownerDocument.body:pe).removeChild(a.stateNode)}catch(d){ne(a,e,d)}else try{pe.removeChild(a.stateNode)}catch(d){ne(a,e,d)}break;case 18:pe!==null&&(Hn?(t=pe,mv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vs(t)):mv(pe,a.stateNode));break;case 4:l=pe,c=Hn,pe=a.stateNode.containerInfo,Hn=!0,wr(t,e,a),pe=l,Hn=c;break;case 0:case 11:case 14:case 15:De||ni(2,a,e),De||ni(4,a,e),wr(t,e,a);break;case 1:De||(Fa(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&_g(a,e,l)),wr(t,e,a);break;case 21:wr(t,e,a);break;case 22:De=(l=De)||a.memoizedState!==null,wr(t,e,a),De=l;break;default:wr(t,e,a)}}function kg(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vs(t)}catch(a){ne(e,e.return,a)}}function Z_(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Og),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Og),e;default:throw Error(r(435,t.tag))}}function Ld(t,e){var a=Z_(t);e.forEach(function(l){var c=nx.bind(null,t,l);a.has(l)||(a.add(l),l.then(c,c))})}function $n(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l],d=t,v=e,S=v;t:for(;S!==null;){switch(S.tag){case 27:if(ci(S.type)){pe=S.stateNode,Hn=!1;break t}break;case 5:pe=S.stateNode,Hn=!1;break t;case 3:case 4:pe=S.stateNode.containerInfo,Hn=!0;break t}S=S.return}if(pe===null)throw Error(r(160));Ag(d,v,c),pe=null,Hn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Dg(e,t),e=e.sibling}var Ya=null;function Dg(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(e,t),Fn(t),l&4&&(ni(3,t,t.return),Io(3,t),ni(5,t,t.return));break;case 1:$n(e,t),Fn(t),l&512&&(De||a===null||Fa(a,a.return)),l&64&&Er&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var c=Ya;if($n(e,t),Fn(t),l&512&&(De||a===null||Fa(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(l){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Se]||d[tt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(l),c.head.insertBefore(d,c.querySelector("head > title"))),ln(d,l,a),d[tt]=t,Gt(d),l=d;break t;case"link":var v=Sv("link","href",c).get(l+(a.href||""));if(v){for(var S=0;S<v.length;S++)if(d=v[S],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(S,1);break e}}d=c.createElement(l),ln(d,l,a),c.head.appendChild(d);break;case"meta":if(v=Sv("meta","content",c).get(l+(a.content||""))){for(S=0;S<v.length;S++)if(d=v[S],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(S,1);break e}}d=c.createElement(l),ln(d,l,a),c.head.appendChild(d);break;default:throw Error(r(468,l))}d[tt]=t,Gt(d),l=d}t.stateNode=l}else Ov(c,t.type,t.stateNode);else t.stateNode=Tv(c,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Ov(c,t.type,t.stateNode):Tv(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&zd(t,t.memoizedProps,a.memoizedProps)}break;case 27:$n(e,t),Fn(t),l&512&&(De||a===null||Fa(a,a.return)),a!==null&&l&4&&zd(t,t.memoizedProps,a.memoizedProps);break;case 5:if($n(e,t),Fn(t),l&512&&(De||a===null||Fa(a,a.return)),t.flags&32){c=t.stateNode;try{_l(c,"")}catch(q){ne(t,t.return,q)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,zd(t,c,a!==null?a.memoizedProps:c)),l&1024&&(Hd=!0);break;case 6:if($n(e,t),Fn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(q){ne(t,t.return,q)}}break;case 3:if(lc=null,c=Ya,Ya=rc(e.containerInfo),$n(e,t),Ya=c,Fn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{vs(e.containerInfo)}catch(q){ne(t,t.return,q)}Hd&&(Hd=!1,Mg(t));break;case 4:l=Ya,Ya=rc(t.stateNode.containerInfo),$n(e,t),Fn(t),Ya=l;break;case 12:$n(e,t),Fn(t);break;case 13:$n(e,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xd=j()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ld(t,l)));break;case 22:c=t.memoizedState!==null;var A=a!==null&&a.memoizedState!==null,L=Er,K=De;if(Er=L||c,De=K||A,$n(e,t),De=K,Er=L,Fn(t),l&8192)t:for(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,c&&(a===null||A||Er||De||Vi(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){A=a=e;try{if(d=A.stateNode,c)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{S=A.stateNode;var $=A.memoizedProps.style,B=$!=null&&$.hasOwnProperty("display")?$.display:null;S.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(q){ne(A,A.return,q)}}}else if(e.tag===6){if(a===null){A=e;try{A.stateNode.nodeValue=c?"":A.memoizedProps}catch(q){ne(A,A.return,q)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ld(t,a))));break;case 19:$n(e,t),Fn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ld(t,l)));break;case 30:break;case 21:break;default:$n(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Tg(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=Nd(t);Vu(t,d,c);break;case 5:var v=a.stateNode;a.flags&32&&(_l(v,""),a.flags&=-33);var S=Nd(t);Vu(t,S,v);break;case 3:case 4:var A=a.stateNode.containerInfo,L=Nd(t);Ud(t,L,A);break;default:throw Error(r(161))}}catch(K){ne(t,t.return,K)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Mg(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ai(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Eg(t,e.alternate,e),e=e.sibling}function Vi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ni(4,e,e.return),Vi(e);break;case 1:Fa(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&_g(e,e.return,a),Vi(e);break;case 27:us(e.stateNode);case 26:case 5:Fa(e,e.return),Vi(e);break;case 22:e.memoizedState===null&&Vi(e);break;case 30:Vi(e);break;default:Vi(e)}t=t.sibling}}function ri(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,c=t,d=e,v=d.flags;switch(d.tag){case 0:case 11:case 15:ri(c,d,a),Io(4,d);break;case 1:if(ri(c,d,a),l=d,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(L){ne(l,l.return,L)}if(l=d,c=l.updateQueue,c!==null){var S=l.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)im(A[c],S)}catch(L){ne(l,l.return,L)}}a&&v&64&&yg(d),ts(d,d.return);break;case 27:Sg(d);case 26:case 5:ri(c,d,a),a&&l===null&&v&4&&xg(d),ts(d,d.return);break;case 12:ri(c,d,a);break;case 13:ri(c,d,a),a&&v&4&&kg(c,d);break;case 22:d.memoizedState===null&&ri(c,d,a),ts(d,d.return);break;case 30:break;default:ri(c,d,a)}e=e.sibling}}function Bd(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qo(a))}function qd(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&qo(t))}function Wa(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rg(t,e,a,l),e=e.sibling}function Rg(t,e,a,l){var c=e.flags;switch(e.tag){case 0:case 11:case 15:Wa(t,e,a,l),c&2048&&Io(9,e);break;case 1:Wa(t,e,a,l);break;case 3:Wa(t,e,a,l),c&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&qo(t)));break;case 12:if(c&2048){Wa(t,e,a,l),t=e.stateNode;try{var d=e.memoizedProps,v=d.id,S=d.onPostCommit;typeof S=="function"&&S(v,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){ne(e,e.return,A)}}else Wa(t,e,a,l);break;case 13:Wa(t,e,a,l);break;case 23:break;case 22:d=e.stateNode,v=e.alternate,e.memoizedState!==null?d._visibility&2?Wa(t,e,a,l):es(t,e):d._visibility&2?Wa(t,e,a,l):(d._visibility|=2,ql(t,e,a,l,(e.subtreeFlags&10256)!==0)),c&2048&&Bd(v,e);break;case 24:Wa(t,e,a,l),c&2048&&qd(e.alternate,e);break;default:Wa(t,e,a,l)}}function ql(t,e,a,l,c){for(c=c&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var d=t,v=e,S=a,A=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:ql(d,v,S,A,c),Io(8,v);break;case 23:break;case 22:var K=v.stateNode;v.memoizedState!==null?K._visibility&2?ql(d,v,S,A,c):es(d,v):(K._visibility|=2,ql(d,v,S,A,c)),c&&L&2048&&Bd(v.alternate,v);break;case 24:ql(d,v,S,A,c),c&&L&2048&&qd(v.alternate,v);break;default:ql(d,v,S,A,c)}e=e.sibling}}function es(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,c=l.flags;switch(l.tag){case 22:es(a,l),c&2048&&Bd(l.alternate,l);break;case 24:es(a,l),c&2048&&qd(l.alternate,l);break;default:es(a,l)}e=e.sibling}}var ns=8192;function Yl(t){if(t.subtreeFlags&ns)for(t=t.child;t!==null;)Cg(t),t=t.sibling}function Cg(t){switch(t.tag){case 26:Yl(t),t.flags&ns&&t.memoizedState!==null&&Cx(Ya,t.memoizedState,t.memoizedProps);break;case 5:Yl(t);break;case 3:case 4:var e=Ya;Ya=rc(t.stateNode.containerInfo),Yl(t),Ya=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ns,ns=16777216,Yl(t),ns=e):Yl(t));break;default:Yl(t)}}function zg(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function as(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];$e=l,Ug(l,t)}zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ng(t),t=t.sibling}function Ng(t){switch(t.tag){case 0:case 11:case 15:as(t),t.flags&2048&&ni(9,t,t.return);break;case 3:as(t);break;case 12:as(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Qu(t)):as(t);break;default:as(t)}}function Qu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];$e=l,Ug(l,t)}zg(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ni(8,e,e.return),Qu(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Qu(e));break;default:Qu(e)}t=t.sibling}}function Ug(t,e){for(;$e!==null;){var a=$e;switch(a.tag){case 0:case 11:case 15:ni(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,$e=l;else t:for(a=t;$e!==null;){l=$e;var c=l.sibling,d=l.return;if(wg(l),l===a){$e=null;break t}if(c!==null){c.return=d,$e=c;break t}$e=d}}}var K_={getCacheForType:function(t){var e=cn(Xe),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},J_=typeof WeakMap=="function"?WeakMap:Map,$t=0,se=null,Lt=null,Xt=0,Ft=0,Wn=null,ii=!1,Pl=!1,Yd=!1,Ar=0,Ee=0,li=0,Qi=0,Pd=0,Ea=0,jl=0,rs=null,Ln=null,jd=!1,Xd=0,Zu=1/0,Ku=null,oi=null,rn=0,si=null,Xl=null,Gl=0,Gd=0,Vd=null,Hg=null,is=0,Qd=null;function In(){if(($t&2)!==0&&Xt!==0)return Xt&-Xt;if(H.T!==null){var t=Rl;return t!==0?t:Id()}return Ot()}function Lg(){Ea===0&&(Ea=(Xt&536870912)===0||Zt?At():536870912);var t=Oa.current;return t!==null&&(t.flags|=32),Ea}function ta(t,e,a){(t===se&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(Vl(t,0),ui(t,Xt,Ea,!1)),en(t,a),(($t&2)===0||t!==se)&&(t===se&&(($t&2)===0&&(Qi|=a),Ee===4&&ui(t,Xt,Ea,!1)),Ia(t))}function Bg(t,e,a){if(($t&6)!==0)throw Error(r(327));var l=!a&&(e&124)===0&&(e&t.expiredLanes)===0||zn(t,e),c=l?W_(t,e):Jd(t,e,!0),d=l;do{if(c===0){Pl&&!l&&ui(t,e,0,!1);break}else{if(a=t.current.alternate,d&&!$_(a)){c=Jd(t,e,!1),d=!1;continue}if(c===2){if(d=e,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){e=v;t:{var S=t;c=rs;var A=S.current.memoizedState.isDehydrated;if(A&&(Vl(S,v).flags|=256),v=Jd(S,v,!1),v!==2){if(Yd&&!A){S.errorRecoveryDisabledLanes|=d,Qi|=d,c=4;break t}d=Ln,Ln=c,d!==null&&(Ln===null?Ln=d:Ln.push.apply(Ln,d))}c=v}if(d=!1,c!==2)continue}}if(c===1){Vl(t,0),ui(t,e,0,!0);break}t:{switch(l=t,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:ui(l,e,Ea,!ii);break t;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(c=Xd+300-j(),10<c)){if(ui(l,e,Ea,!ii),Ba(l,0,!0)!==0)break t;l.timeoutHandle=hv(qg.bind(null,l,a,Ln,Ku,jd,e,Ea,Qi,jl,ii,d,2,-0,0),c);break t}qg(l,a,Ln,Ku,jd,e,Ea,Qi,jl,ii,d,0,-0,0)}}break}while(!0);Ia(t)}function qg(t,e,a,l,c,d,v,S,A,L,K,$,B,q){if(t.timeoutHandle=-1,$=e.subtreeFlags,($&8192||($&16785408)===16785408)&&(ds={stylesheets:null,count:0,unsuspend:Rx},Cg(e),$=zx(),$!==null)){t.cancelPendingCommit=$(Qg.bind(null,t,e,d,a,l,c,v,S,A,K,1,B,q)),ui(t,d,v,!L);return}Qg(t,e,d,a,l,c,v,S,A)}function $_(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var c=a[l],d=c.getSnapshot;c=c.value;try{if(!Kn(d(),c))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ui(t,e,a,l){e&=~Pd,e&=~Qi,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var c=e;0<c;){var d=31-le(c),v=1<<d;l[d]=-1,c&=~v}a!==0&&Ka(t,a,e)}function Ju(){return($t&6)===0?(ls(0),!1):!0}function Zd(){if(Lt!==null){if(Ft===0)var t=Lt.return;else t=Lt,yr=Yi=null,cd(t),Ll=null,$o=0,t=Lt;for(;t!==null;)bg(t.alternate,t),t=t.return;Lt=null}}function Vl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,px(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Zd(),se=t,Lt=a=gr(t.current,null),Xt=e,Ft=0,Wn=null,ii=!1,Pl=zn(t,e),Yd=!1,jl=Ea=Pd=Qi=li=Ee=0,Ln=rs=null,jd=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var c=31-le(l),d=1<<c;e|=t[c],l&=~d}return Ar=e,vu(),a}function Yg(t,e){Mt=null,H.H=Hu,e===Po||e===wu?(e=am(),Ft=3):e===tm?(e=am(),Ft=4):Ft=e===rg?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Wn=e,Lt===null&&(Ee=1,Pu(t,_a(e,t.current)))}function Pg(){var t=H.H;return H.H=Hu,t===null?Hu:t}function jg(){var t=H.A;return H.A=K_,t}function Kd(){Ee=4,ii||(Xt&4194048)!==Xt&&Oa.current!==null||(Pl=!0),(li&134217727)===0&&(Qi&134217727)===0||se===null||ui(se,Xt,Ea,!1)}function Jd(t,e,a){var l=$t;$t|=2;var c=Pg(),d=jg();(se!==t||Xt!==e)&&(Ku=null,Vl(t,e)),e=!1;var v=Ee;t:do try{if(Ft!==0&&Lt!==null){var S=Lt,A=Wn;switch(Ft){case 8:Zd(),v=6;break t;case 3:case 2:case 9:case 6:Oa.current===null&&(e=!0);var L=Ft;if(Ft=0,Wn=null,Ql(t,S,A,L),a&&Pl){v=0;break t}break;default:L=Ft,Ft=0,Wn=null,Ql(t,S,A,L)}}F_(),v=Ee;break}catch(K){Yg(t,K)}while(!0);return e&&t.shellSuspendCounter++,yr=Yi=null,$t=l,H.H=c,H.A=d,Lt===null&&(se=null,Xt=0,vu()),v}function F_(){for(;Lt!==null;)Xg(Lt)}function W_(t,e){var a=$t;$t|=2;var l=Pg(),c=jg();se!==t||Xt!==e?(Ku=null,Zu=j()+500,Vl(t,e)):Pl=zn(t,e);t:do try{if(Ft!==0&&Lt!==null){e=Lt;var d=Wn;e:switch(Ft){case 1:Ft=0,Wn=null,Ql(t,e,d,1);break;case 2:case 9:if(em(d)){Ft=0,Wn=null,Gg(e);break}e=function(){Ft!==2&&Ft!==9||se!==t||(Ft=7),Ia(t)},d.then(e,e);break t;case 3:Ft=7;break t;case 4:Ft=5;break t;case 7:em(d)?(Ft=0,Wn=null,Gg(e)):(Ft=0,Wn=null,Ql(t,e,d,7));break;case 5:var v=null;switch(Lt.tag){case 26:v=Lt.memoizedState;case 5:case 27:var S=Lt;if(!v||Ev(v)){Ft=0,Wn=null;var A=S.sibling;if(A!==null)Lt=A;else{var L=S.return;L!==null?(Lt=L,$u(L)):Lt=null}break e}}Ft=0,Wn=null,Ql(t,e,d,5);break;case 6:Ft=0,Wn=null,Ql(t,e,d,6);break;case 8:Zd(),Ee=6;break t;default:throw Error(r(462))}}I_();break}catch(K){Yg(t,K)}while(!0);return yr=Yi=null,H.H=l,H.A=c,$t=a,Lt!==null?0:(se=null,Xt=0,vu(),Ee)}function I_(){for(;Lt!==null&&!un();)Xg(Lt)}function Xg(t){var e=gg(t.alternate,t,Ar);t.memoizedProps=t.pendingProps,e===null?$u(t):Lt=e}function Gg(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=cg(a,e,e.pendingProps,e.type,void 0,Xt);break;case 11:e=cg(a,e,e.pendingProps,e.type.render,e.ref,Xt);break;case 5:cd(e);default:bg(a,e),e=Lt=Vp(e,Ar),e=gg(a,e,Ar)}t.memoizedProps=t.pendingProps,e===null?$u(t):Lt=e}function Ql(t,e,a,l){yr=Yi=null,cd(e),Ll=null,$o=0;var c=e.return;try{if(j_(t,c,e,a,Xt)){Ee=1,Pu(t,_a(a,t.current)),Lt=null;return}}catch(d){if(c!==null)throw Lt=c,d;Ee=1,Pu(t,_a(a,t.current)),Lt=null;return}e.flags&32768?(Zt||l===1?t=!0:Pl||(Xt&536870912)!==0?t=!1:(ii=t=!0,(l===2||l===9||l===3||l===6)&&(l=Oa.current,l!==null&&l.tag===13&&(l.flags|=16384))),Vg(e,t)):$u(e)}function $u(t){var e=t;do{if((e.flags&32768)!==0){Vg(e,ii);return}t=e.return;var a=G_(e.alternate,e,Ar);if(a!==null){Lt=a;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ee===0&&(Ee=5)}function Vg(t,e){do{var a=V_(t.alternate,t);if(a!==null){a.flags&=32767,Lt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Lt=t;return}Lt=t=a}while(t!==null);Ee=6,Lt=null}function Qg(t,e,a,l,c,d,v,S,A){t.cancelPendingCommit=null;do Fu();while(rn!==0);if(($t&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(d=e.lanes|e.childLanes,d|=qf,Gn(t,a,d,v,S,A),t===se&&(Lt=se=null,Xt=0),Xl=e,si=t,Gl=a,Gd=d,Vd=c,Hg=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ax(ee,function(){return Fg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,c=Z.p,Z.p=2,v=$t,$t|=4;try{Q_(t,e,a)}finally{$t=v,Z.p=c,H.T=l}}rn=1,Zg(),Kg(),Jg()}}function Zg(){if(rn===1){rn=0;var t=si,e=Xl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=Z.p;Z.p=2;var c=$t;$t|=4;try{Dg(e,t);var d=oh,v=Up(t.containerInfo),S=d.focusedElem,A=d.selectionRange;if(v!==S&&S&&S.ownerDocument&&Np(S.ownerDocument.documentElement,S)){if(A!==null&&Nf(S)){var L=A.start,K=A.end;if(K===void 0&&(K=L),"selectionStart"in S)S.selectionStart=L,S.selectionEnd=Math.min(K,S.value.length);else{var $=S.ownerDocument||document,B=$&&$.defaultView||window;if(B.getSelection){var q=B.getSelection(),xt=S.textContent.length,vt=Math.min(A.start,xt),te=A.end===void 0?vt:Math.min(A.end,xt);!q.extend&&vt>te&&(v=te,te=vt,vt=v);var z=zp(S,vt),M=zp(S,te);if(z&&M&&(q.rangeCount!==1||q.anchorNode!==z.node||q.anchorOffset!==z.offset||q.focusNode!==M.node||q.focusOffset!==M.offset)){var U=$.createRange();U.setStart(z.node,z.offset),q.removeAllRanges(),vt>te?(q.addRange(U),q.extend(M.node,M.offset)):(U.setEnd(M.node,M.offset),q.addRange(U))}}}}for($=[],q=S;q=q.parentNode;)q.nodeType===1&&$.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<$.length;S++){var J=$[S];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}uc=!!lh,oh=lh=null}finally{$t=c,Z.p=l,H.T=a}}t.current=e,rn=2}}function Kg(){if(rn===2){rn=0;var t=si,e=Xl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=Z.p;Z.p=2;var c=$t;$t|=4;try{Eg(t,e.alternate,e)}finally{$t=c,Z.p=l,H.T=a}}rn=3}}function Jg(){if(rn===4||rn===3){rn=0,vn();var t=si,e=Xl,a=Gl,l=Hg;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?rn=5:(rn=0,Xl=si=null,$g(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(oi=null),dr(a),e=e.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Mn,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=H.T,c=Z.p,Z.p=2,H.T=null;try{for(var d=t.onRecoverableError,v=0;v<l.length;v++){var S=l[v];d(S.value,{componentStack:S.stack})}}finally{H.T=e,Z.p=c}}(Gl&3)!==0&&Fu(),Ia(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Qd?is++:(is=0,Qd=t):is=0,ls(0)}}function $g(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,qo(e)))}function Fu(t){return Zg(),Kg(),Jg(),Fg()}function Fg(){if(rn!==5)return!1;var t=si,e=Gd;Gd=0;var a=dr(Gl),l=H.T,c=Z.p;try{Z.p=32>a?32:a,H.T=null,a=Vd,Vd=null;var d=si,v=Gl;if(rn=0,Xl=si=null,Gl=0,($t&6)!==0)throw Error(r(331));var S=$t;if($t|=4,Ng(d.current),Rg(d,d.current,v,a),$t=S,ls(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Mn,d)}catch{}return!0}finally{Z.p=c,H.T=l,$g(t,e)}}function Wg(t,e,a){e=_a(a,e),e=Od(t.stateNode,e,2),t=Wr(t,e,2),t!==null&&(en(t,2),Ia(t))}function ne(t,e,a){if(t.tag===3)Wg(t,t,a);else for(;e!==null;){if(e.tag===3){Wg(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(oi===null||!oi.has(l))){t=_a(a,t),a=ng(2),l=Wr(e,a,2),l!==null&&(ag(a,l,e,t),en(l,2),Ia(l));break}}e=e.return}}function $d(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new J_;var c=new Set;l.set(e,c)}else c=l.get(e),c===void 0&&(c=new Set,l.set(e,c));c.has(a)||(Yd=!0,c.add(a),t=tx.bind(null,t,e,a),e.then(t,t))}function tx(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,se===t&&(Xt&a)===a&&(Ee===4||Ee===3&&(Xt&62914560)===Xt&&300>j()-Xd?($t&2)===0&&Vl(t,0):Pd|=a,jl===Xt&&(jl=0)),Ia(t)}function Ig(t,e){e===0&&(e=Za()),t=Al(t,e),t!==null&&(en(t,e),Ia(t))}function ex(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Ig(t,a)}function nx(t,e){var a=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(e),Ig(t,a)}function ax(t,e){return Ut(t,e)}var Wu=null,Zl=null,Fd=!1,Iu=!1,Wd=!1,Zi=0;function Ia(t){t!==Zl&&t.next===null&&(Zl===null?Wu=Zl=t:Zl=Zl.next=t),Iu=!0,Fd||(Fd=!0,ix())}function ls(t,e){if(!Wd&&Iu){Wd=!0;do for(var a=!1,l=Wu;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var d=0;else{var v=l.suspendedLanes,S=l.pingedLanes;d=(1<<31-le(42|t)+1)-1,d&=c&~(v&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,av(l,d))}else d=Xt,d=Ba(l,l===se?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||zn(l,d)||(a=!0,av(l,d));l=l.next}while(a);Wd=!1}}function rx(){tv()}function tv(){Iu=Fd=!1;var t=0;Zi!==0&&(hx()&&(t=Zi),Zi=0);for(var e=j(),a=null,l=Wu;l!==null;){var c=l.next,d=ev(l,e);d===0?(l.next=null,a===null?Wu=c:a.next=c,c===null&&(Zl=a)):(a=l,(t!==0||(d&3)!==0)&&(Iu=!0)),l=c}ls(t)}function ev(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-le(d),S=1<<v,A=c[v];A===-1?((S&a)===0||(S&l)!==0)&&(c[v]=cr(S,e)):A<=e&&(t.expiredLanes|=S),d&=~S}if(e=se,a=Xt,a=Ba(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&fe(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||zn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&fe(l),dr(a)){case 2:case 8:a=Na;break;case 32:a=ee;break;case 268435456:a=Ha;break;default:a=ee}return l=nv.bind(null,t),a=Ut(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&fe(l),t.callbackPriority=2,t.callbackNode=null,2}function nv(t,e){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Fu()&&t.callbackNode!==a)return null;var l=Xt;return l=Ba(t,t===se?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Bg(t,l,e),ev(t,j()),t.callbackNode!=null&&t.callbackNode===a?nv.bind(null,t):null)}function av(t,e){if(Fu())return null;Bg(t,e,!0)}function ix(){mx(function(){($t&6)!==0?Ut(pa,rx):tv()})}function Id(){return Zi===0&&(Zi=At()),Zi}function rv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cu(""+t)}function iv(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function lx(t,e,a,l,c){if(e==="submit"&&a&&a.stateNode===c){var d=rv((c[dt]||null).action),v=l.submitter;v&&(e=(e=v[dt]||null)?rv(e.formAction):v.getAttribute("formAction"),e!==null&&(d=e,v=null));var S=new pu("action","action",null,l,c);t.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Zi!==0){var A=v?iv(c,v):new FormData(c);yd(a,{pending:!0,data:A,method:c.method,action:d},null,A)}}else typeof d=="function"&&(S.preventDefault(),A=v?iv(c,v):new FormData(c),yd(a,{pending:!0,data:A,method:c.method,action:d},d,A))},currentTarget:c}]})}}for(var th=0;th<Bf.length;th++){var eh=Bf[th],ox=eh.toLowerCase(),sx=eh[0].toUpperCase()+eh.slice(1);qa(ox,"on"+sx)}qa(Bp,"onAnimationEnd"),qa(qp,"onAnimationIteration"),qa(Yp,"onAnimationStart"),qa("dblclick","onDoubleClick"),qa("focusin","onFocus"),qa("focusout","onBlur"),qa(E_,"onTransitionRun"),qa(w_,"onTransitionStart"),qa(A_,"onTransitionCancel"),qa(Pp,"onTransitionEnd"),ve("onMouseEnter",["mouseout","mouseover"]),ve("onMouseLeave",["mouseout","mouseover"]),ve("onPointerEnter",["pointerout","pointerover"]),ve("onPointerLeave",["pointerout","pointerover"]),de("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),de("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),de("onBeforeInput",["compositionend","keypress","textInput","paste"]),de("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),de("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),de("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(os));function lv(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],c=l.event;l=l.listeners;t:{var d=void 0;if(e)for(var v=l.length-1;0<=v;v--){var S=l[v],A=S.instance,L=S.currentTarget;if(S=S.listener,A!==d&&c.isPropagationStopped())break t;d=S,c.currentTarget=L;try{d(c)}catch(K){Yu(K)}c.currentTarget=null,d=A}else for(v=0;v<l.length;v++){if(S=l[v],A=S.instance,L=S.currentTarget,S=S.listener,A!==d&&c.isPropagationStopped())break t;d=S,c.currentTarget=L;try{d(c)}catch(K){Yu(K)}c.currentTarget=null,d=A}}}}function Bt(t,e){var a=e[St];a===void 0&&(a=e[St]=new Set);var l=t+"__bubble";a.has(l)||(ov(e,t,2,!1),a.add(l))}function nh(t,e,a){var l=0;e&&(l|=4),ov(a,t,l,e)}var tc="_reactListening"+Math.random().toString(36).slice(2);function ah(t){if(!t[tc]){t[tc]=!0,Qn.forEach(function(a){a!=="selectionchange"&&(ux.has(a)||nh(a,!1,t),nh(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tc]||(e[tc]=!0,nh("selectionchange",!1,e))}}function ov(t,e,a,l){switch(Rv(e)){case 2:var c=Hx;break;case 8:c=Lx;break;default:c=vh}a=c.bind(null,e,a,t),c=void 0,!Ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(e,a,{capture:!0,passive:c}):t.addEventListener(e,a,!0):c!==void 0?t.addEventListener(e,a,{passive:c}):t.addEventListener(e,a,!1)}function rh(t,e,a,l,c){var d=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var S=l.stateNode.containerInfo;if(S===c)break;if(v===4)for(v=l.return;v!==null;){var A=v.tag;if((A===3||A===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;S!==null;){if(v=Qt(S),v===null)return;if(A=v.tag,A===5||A===6||A===26||A===27){l=d=v;continue t}S=S.parentNode}}l=l.return}pp(function(){var L=d,K=Sf(a),$=[];t:{var B=jp.get(t);if(B!==void 0){var q=pu,xt=t;switch(t){case"keypress":if(du(a)===0)break t;case"keydown":case"keyup":q=a_;break;case"focusin":xt="focus",q=Df;break;case"focusout":xt="blur",q=Df;break;case"beforeblur":case"afterblur":q=Df;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=V1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=l_;break;case Bp:case qp:case Yp:q=K1;break;case Pp:q=s_;break;case"scroll":case"scrollend":q=X1;break;case"wheel":q=c_;break;case"copy":case"cut":case"paste":q=$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=yp;break;case"toggle":case"beforetoggle":q=d_}var vt=(e&4)!==0,te=!vt&&(t==="scroll"||t==="scrollend"),z=vt?B!==null?B+"Capture":null:B;vt=[];for(var M=L,U;M!==null;){var J=M;if(U=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||U===null||z===null||(J=wo(M,z),J!=null&&vt.push(ss(M,J,U))),te)break;M=M.return}0<vt.length&&(B=new q(B,xt,null,a,K),$.push({event:B,listeners:vt}))}}if((e&7)===0){t:{if(B=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",B&&a!==Tf&&(xt=a.relatedTarget||a.fromElement)&&(Qt(xt)||xt[ft]))break t;if((q||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,q?(xt=a.relatedTarget||a.toElement,q=L,xt=xt?Qt(xt):null,xt!==null&&(te=u(xt),vt=xt.tag,xt!==te||vt!==5&&vt!==27&&vt!==6)&&(xt=null)):(q=null,xt=L),q!==xt)){if(vt=vp,J="onMouseLeave",z="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(vt=yp,J="onPointerLeave",z="onPointerEnter",M="pointer"),te=q==null?B:nn(q),U=xt==null?B:nn(xt),B=new vt(J,M+"leave",q,a,K),B.target=te,B.relatedTarget=U,J=null,Qt(K)===L&&(vt=new vt(z,M+"enter",xt,a,K),vt.target=U,vt.relatedTarget=te,J=vt),te=J,q&&xt)e:{for(vt=q,z=xt,M=0,U=vt;U;U=Kl(U))M++;for(U=0,J=z;J;J=Kl(J))U++;for(;0<M-U;)vt=Kl(vt),M--;for(;0<U-M;)z=Kl(z),U--;for(;M--;){if(vt===z||z!==null&&vt===z.alternate)break e;vt=Kl(vt),z=Kl(z)}vt=null}else vt=null;q!==null&&sv($,B,q,vt,!1),xt!==null&&te!==null&&sv($,te,xt,vt,!0)}}t:{if(B=L?nn(L):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var ot=Ap;else if(Ep(B))if(kp)ot=T_;else{ot=__;var Ct=y_}else q=B.nodeName,!q||q.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?L&&xf(L.elementType)&&(ot=Ap):ot=x_;if(ot&&(ot=ot(t,L))){wp($,ot,a,K);break t}Ct&&Ct(t,B,L),t==="focusout"&&L&&B.type==="number"&&L.memoizedProps.value!=null&&_f(B,"number",B.value)}switch(Ct=L?nn(L):window,t){case"focusin":(Ep(Ct)||Ct.contentEditable==="true")&&(Ol=Ct,Uf=L,No=null);break;case"focusout":No=Uf=Ol=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,Hp($,a,K);break;case"selectionchange":if(O_)break;case"keydown":case"keyup":Hp($,a,K)}var ht;if(Rf)t:{switch(t){case"compositionstart":var yt="onCompositionStart";break t;case"compositionend":yt="onCompositionEnd";break t;case"compositionupdate":yt="onCompositionUpdate";break t}yt=void 0}else Sl?Sp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(_p&&a.locale!=="ko"&&(Sl||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Sl&&(ht=mp()):(Kr=K,wf="value"in Kr?Kr.value:Kr.textContent,Sl=!0)),Ct=ec(L,yt),0<Ct.length&&(yt=new bp(yt,t,null,a,K),$.push({event:yt,listeners:Ct}),ht?yt.data=ht:(ht=Op(a),ht!==null&&(yt.data=ht)))),(ht=p_?m_(t,a):g_(t,a))&&(yt=ec(L,"onBeforeInput"),0<yt.length&&(Ct=new bp("onBeforeInput","beforeinput",null,a,K),$.push({event:Ct,listeners:yt}),Ct.data=ht)),lx($,t,L,a,K)}lv($,e)})}function ss(t,e,a){return{instance:t,listener:e,currentTarget:a}}function ec(t,e){for(var a=e+"Capture",l=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=wo(t,a),c!=null&&l.unshift(ss(t,c,d)),c=wo(t,e),c!=null&&l.push(ss(t,c,d))),t.tag===3)return l;t=t.return}return[]}function Kl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sv(t,e,a,l,c){for(var d=e._reactName,v=[];a!==null&&a!==l;){var S=a,A=S.alternate,L=S.stateNode;if(S=S.tag,A!==null&&A===l)break;S!==5&&S!==26&&S!==27||L===null||(A=L,c?(L=wo(a,d),L!=null&&v.unshift(ss(a,L,A))):c||(L=wo(a,d),L!=null&&v.push(ss(a,L,A)))),a=a.return}v.length!==0&&t.push({event:e,listeners:v})}var cx=/\r\n?/g,fx=/\u0000|\uFFFD/g;function uv(t){return(typeof t=="string"?t:""+t).replace(cx,`
`).replace(fx,"")}function cv(t,e){return e=uv(e),uv(t)===e}function nc(){}function It(t,e,a,l,c,d){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||_l(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&_l(t,""+l);break;case"className":Qr(t,"class",l);break;case"tabIndex":Qr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qr(t,a,l);break;case"style":dp(t,l,d);break;case"data":if(e!=="object"){Qr(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=cu(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(e!=="input"&&It(t,e,"name",c.name,c,null),It(t,e,"formEncType",c.formEncType,c,null),It(t,e,"formMethod",c.formMethod,c,null),It(t,e,"formTarget",c.formTarget,c,null)):(It(t,e,"encType",c.encType,c,null),It(t,e,"method",c.method,c,null),It(t,e,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=cu(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=nc);break;case"onScroll":l!=null&&Bt("scroll",t);break;case"onScrollEnd":l!=null&&Bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=cu(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Bt("beforetoggle",t),Bt("toggle",t),_n(t,"popover",l);break;case"xlinkActuate":ma(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ma(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ma(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ma(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ma(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ma(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ma(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ma(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ma(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_n(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=P1.get(a)||a,_n(t,a,l))}}function ih(t,e,a,l,c,d){switch(a){case"style":dp(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?_l(t,l):(typeof l=="number"||typeof l=="bigint")&&_l(t,""+l);break;case"onScroll":l!=null&&Bt("scroll",t);break;case"onScrollEnd":l!=null&&Bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=nc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!He.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),e=a.slice(2,c?a.length-7:void 0),d=t[dt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(e,d,c),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,c);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):_n(t,a,l)}}}function ln(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Bt("error",t),Bt("load",t);var l=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:It(t,e,d,v,a,null)}}c&&It(t,e,"srcSet",a.srcSet,a,null),l&&It(t,e,"src",a.src,a,null);return;case"input":Bt("invalid",t);var S=d=v=c=null,A=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":c=K;break;case"type":v=K;break;case"checked":A=K;break;case"defaultChecked":L=K;break;case"value":d=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,e));break;default:It(t,e,l,K,a,null)}}sp(t,d,S,A,L,v,c,!1),su(t);return;case"select":Bt("invalid",t),l=v=d=null;for(c in a)if(a.hasOwnProperty(c)&&(S=a[c],S!=null))switch(c){case"value":d=S;break;case"defaultValue":v=S;break;case"multiple":l=S;default:It(t,e,c,S,a,null)}e=d,a=v,t.multiple=!!l,e!=null?yl(t,!!l,e,!1):a!=null&&yl(t,!!l,a,!0);return;case"textarea":Bt("invalid",t),d=c=l=null;for(v in a)if(a.hasOwnProperty(v)&&(S=a[v],S!=null))switch(v){case"value":l=S;break;case"defaultValue":c=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(r(91));break;default:It(t,e,v,S,a,null)}cp(t,l,c,d),su(t);return;case"option":for(A in a)if(a.hasOwnProperty(A)&&(l=a[A],l!=null))switch(A){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:It(t,e,A,l,a,null)}return;case"dialog":Bt("beforetoggle",t),Bt("toggle",t),Bt("cancel",t),Bt("close",t);break;case"iframe":case"object":Bt("load",t);break;case"video":case"audio":for(l=0;l<os.length;l++)Bt(os[l],t);break;case"image":Bt("error",t),Bt("load",t);break;case"details":Bt("toggle",t);break;case"embed":case"source":case"link":Bt("error",t),Bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:It(t,e,L,l,a,null)}return;default:if(xf(e)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&ih(t,e,K,l,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(l=a[S],l!=null&&It(t,e,S,l,a,null))}function dx(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,S=null,A=null,L=null,K=null;for(q in a){var $=a[q];if(a.hasOwnProperty(q)&&$!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":A=$;default:l.hasOwnProperty(q)||It(t,e,q,null,l,$)}}for(var B in l){var q=l[B];if($=a[B],l.hasOwnProperty(B)&&(q!=null||$!=null))switch(B){case"type":d=q;break;case"name":c=q;break;case"checked":L=q;break;case"defaultChecked":K=q;break;case"value":v=q;break;case"defaultValue":S=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,e));break;default:q!==$&&It(t,e,B,q,l,$)}}yf(t,v,S,A,L,K,d,c);return;case"select":q=v=S=B=null;for(d in a)if(A=a[d],a.hasOwnProperty(d)&&A!=null)switch(d){case"value":break;case"multiple":q=A;default:l.hasOwnProperty(d)||It(t,e,d,null,l,A)}for(c in l)if(d=l[c],A=a[c],l.hasOwnProperty(c)&&(d!=null||A!=null))switch(c){case"value":B=d;break;case"defaultValue":S=d;break;case"multiple":v=d;default:d!==A&&It(t,e,c,d,l,A)}e=S,a=v,l=q,B!=null?yl(t,!!a,B,!1):!!l!=!!a&&(e!=null?yl(t,!!a,e,!0):yl(t,!!a,a?[]:"",!1));return;case"textarea":q=B=null;for(S in a)if(c=a[S],a.hasOwnProperty(S)&&c!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:It(t,e,S,null,l,c)}for(v in l)if(c=l[v],d=a[v],l.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":B=c;break;case"defaultValue":q=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&It(t,e,v,c,l,d)}up(t,B,q);return;case"option":for(var xt in a)if(B=a[xt],a.hasOwnProperty(xt)&&B!=null&&!l.hasOwnProperty(xt))switch(xt){case"selected":t.selected=!1;break;default:It(t,e,xt,null,l,B)}for(A in l)if(B=l[A],q=a[A],l.hasOwnProperty(A)&&B!==q&&(B!=null||q!=null))switch(A){case"selected":t.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:It(t,e,A,B,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var vt in a)B=a[vt],a.hasOwnProperty(vt)&&B!=null&&!l.hasOwnProperty(vt)&&It(t,e,vt,null,l,B);for(L in l)if(B=l[L],q=a[L],l.hasOwnProperty(L)&&B!==q&&(B!=null||q!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,e));break;default:It(t,e,L,B,l,q)}return;default:if(xf(e)){for(var te in a)B=a[te],a.hasOwnProperty(te)&&B!==void 0&&!l.hasOwnProperty(te)&&ih(t,e,te,void 0,l,B);for(K in l)B=l[K],q=a[K],!l.hasOwnProperty(K)||B===q||B===void 0&&q===void 0||ih(t,e,K,B,l,q);return}}for(var z in a)B=a[z],a.hasOwnProperty(z)&&B!=null&&!l.hasOwnProperty(z)&&It(t,e,z,null,l,B);for($ in l)B=l[$],q=a[$],!l.hasOwnProperty($)||B===q||B==null&&q==null||It(t,e,$,B,l,q)}var lh=null,oh=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function fv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=null;function hx(){var t=window.event;return t&&t.type==="popstate"?t===uh?!1:(uh=t,!0):(uh=null,!1)}var hv=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(t){return pv.resolve(null).then(t).catch(gx)}:hv;function gx(t){setTimeout(function(){throw t})}function ci(t){return t==="head"}function mv(t,e){var a=e,l=0,c=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=t.ownerDocument;if(a&1&&us(v.documentElement),a&2&&us(v.body),a&4)for(a=v.head,us(a),v=a.firstChild;v;){var S=v.nextSibling,A=v.nodeName;v[Se]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=S}}if(c===0){t.removeChild(d),vs(e);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);vs(e)}function ch(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),oe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function vx(t,e,a,l){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Se])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Pa(t.nextSibling),t===null)break}return null}function bx(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Pa(t.nextSibling),t===null))return null;return t}function fh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function yx(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Pa(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var dh=null;function gv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function vv(t,e,a){switch(e=ac(a),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function us(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);oe(t)}var wa=new Map,bv=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var kr=Z.d;Z.d={f:_x,r:xx,D:Tx,C:Sx,L:Ox,m:Ex,X:Ax,S:wx,M:kx};function _x(){var t=kr.f(),e=Ju();return t||e}function xx(t){var e=jt(t);e!==null&&e.tag===5&&e.type==="form"?Bm(e):kr.r(t)}var Jl=typeof document>"u"?null:document;function yv(t,e,a){var l=Jl;if(l&&typeof e=="string"&&e){var c=ya(e);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),bv.has(c)||(bv.add(c),t={rel:t,crossOrigin:a,href:e},l.querySelector(c)===null&&(e=l.createElement("link"),ln(e,"link",t),Gt(e),l.head.appendChild(e)))}}function Tx(t){kr.D(t),yv("dns-prefetch",t,null)}function Sx(t,e){kr.C(t,e),yv("preconnect",t,e)}function Ox(t,e,a){kr.L(t,e,a);var l=Jl;if(l&&t&&e){var c='link[rel="preload"][as="'+ya(e)+'"]';e==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ya(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ya(a.imageSizes)+'"]')):c+='[href="'+ya(t)+'"]';var d=c;switch(e){case"style":d=$l(t);break;case"script":d=Fl(t)}wa.has(d)||(t=g({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),wa.set(d,t),l.querySelector(c)!==null||e==="style"&&l.querySelector(cs(d))||e==="script"&&l.querySelector(fs(d))||(e=l.createElement("link"),ln(e,"link",t),Gt(e),l.head.appendChild(e)))}}function Ex(t,e){kr.m(t,e);var a=Jl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",c='link[rel="modulepreload"][as="'+ya(l)+'"][href="'+ya(t)+'"]',d=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Fl(t)}if(!wa.has(d)&&(t=g({rel:"modulepreload",href:t},e),wa.set(d,t),a.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fs(d)))return}l=a.createElement("link"),ln(l,"link",t),Gt(l),a.head.appendChild(l)}}}function wx(t,e,a){kr.S(t,e,a);var l=Jl;if(l&&t){var c=Kt(l).hoistableStyles,d=$l(t);e=e||"default";var v=c.get(d);if(!v){var S={loading:0,preload:null};if(v=l.querySelector(cs(d)))S.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":e},a),(a=wa.get(d))&&hh(t,a);var A=v=l.createElement("link");Gt(A),ln(A,"link",t),A._p=new Promise(function(L,K){A.onload=L,A.onerror=K}),A.addEventListener("load",function(){S.loading|=1}),A.addEventListener("error",function(){S.loading|=2}),S.loading|=4,ic(v,e,l)}v={type:"stylesheet",instance:v,count:1,state:S},c.set(d,v)}}}function Ax(t,e){kr.X(t,e);var a=Jl;if(a&&t){var l=Kt(a).hoistableScripts,c=Fl(t),d=l.get(c);d||(d=a.querySelector(fs(c)),d||(t=g({src:t,async:!0},e),(e=wa.get(c))&&ph(t,e),d=a.createElement("script"),Gt(d),ln(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(c,d))}}function kx(t,e){kr.M(t,e);var a=Jl;if(a&&t){var l=Kt(a).hoistableScripts,c=Fl(t),d=l.get(c);d||(d=a.querySelector(fs(c)),d||(t=g({src:t,async:!0,type:"module"},e),(e=wa.get(c))&&ph(t,e),d=a.createElement("script"),Gt(d),ln(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(c,d))}}function _v(t,e,a,l){var c=(c=st.current)?rc(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=$l(a.href),a=Kt(c).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$l(a.href);var d=Kt(c).hoistableStyles,v=d.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=c.querySelector(cs(t)))&&!d._p&&(v.instance=d,v.state.loading=5),wa.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wa.set(t,a),d||Dx(c,t,a,v.state))),e&&l===null)throw Error(r(528,""));return v}if(e&&l!==null)throw Error(r(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Fl(a),a=Kt(c).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $l(t){return'href="'+ya(t)+'"'}function cs(t){return'link[rel="stylesheet"]['+t+"]"}function xv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Dx(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),ln(e,"link",a),Gt(e),t.head.appendChild(e))}function Fl(t){return'[src="'+ya(t)+'"]'}function fs(t){return"script[async]"+t}function Tv(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+ya(a.href)+'"]');if(l)return e.instance=l,Gt(l),l;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Gt(l),ln(l,"style",c),ic(l,a.precedence,t),e.instance=l;case"stylesheet":c=$l(a.href);var d=t.querySelector(cs(c));if(d)return e.state.loading|=4,e.instance=d,Gt(d),d;l=xv(a),(c=wa.get(c))&&hh(l,c),d=(t.ownerDocument||t).createElement("link"),Gt(d);var v=d;return v._p=new Promise(function(S,A){v.onload=S,v.onerror=A}),ln(d,"link",l),e.state.loading|=4,ic(d,a.precedence,t),e.instance=d;case"script":return d=Fl(a.src),(c=t.querySelector(fs(d)))?(e.instance=c,Gt(c),c):(l=a,(c=wa.get(d))&&(l=g({},a),ph(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),Gt(c),ln(c,"link",l),t.head.appendChild(c),e.instance=c);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,ic(l,a.precedence,t));return e.instance}function ic(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,d=c,v=0;v<l.length;v++){var S=l[v];if(S.dataset.precedence===e)d=S;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function hh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ph(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var lc=null;function Sv(t,e,a){if(lc===null){var l=new Map,c=lc=new Map;c.set(a,l)}else c=lc,l=c.get(a),l||(l=new Map,c.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var d=a[c];if(!(d[Se]||d[tt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(e)||"";v=t+v;var S=l.get(v);S?S.push(d):l.set(v,[d])}}return l}function Ov(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Mx(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ev(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ds=null;function Rx(){}function Cx(t,e,a){if(ds===null)throw Error(r(475));var l=ds;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var c=$l(a.href),d=t.querySelector(cs(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=oc.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=d,Gt(d);return}d=t.ownerDocument||t,a=xv(a),(c=wa.get(c))&&hh(a,c),d=d.createElement("link"),Gt(d);var v=d;v._p=new Promise(function(S,A){v.onload=S,v.onerror=A}),ln(d,"link",a),e.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=oc.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}function zx(){if(ds===null)throw Error(r(475));var t=ds;return t.stylesheets&&t.count===0&&mh(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&mh(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function oc(){if(this.count--,this.count===0){if(this.stylesheets)mh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var sc=null;function mh(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,sc=new Map,e.forEach(Nx,t),sc=null,oc.call(t))}function Nx(t,e){if(!(e.state.loading&4)){var a=sc.get(t);if(a)var l=a.get(null);else{a=new Map,sc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}c=e.instance,v=c.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,c),a.set(v,c),this.count++,l=oc.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),e.state.loading|=4}}var hs={$$typeof:D,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function Ux(t,e,a,l,c,d,v,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.hiddenUpdates=yn(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function wv(t,e,a,l,c,d,v,S,A,L,K,$){return t=new Ux(t,e,a,v,S,A,L,$),e=1,d===!0&&(e|=24),d=Jn(3,null,null,e),t.current=d,d.stateNode=t,e=$f(),e.refCount++,t.pooledCache=e,e.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:e},td(d),t}function Av(t){return t?(t=kl,t):kl}function kv(t,e,a,l,c,d){c=Av(c),l.context===null?l.context=c:l.pendingContext=c,l=Fr(e),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Wr(t,l,e),a!==null&&(ta(a,t,e),Xo(a,t,e))}function Dv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function gh(t,e){Dv(t,e),(t=t.alternate)&&Dv(t,e)}function Mv(t){if(t.tag===13){var e=Al(t,67108864);e!==null&&ta(e,t,67108864),gh(t,67108864)}}var uc=!0;function Hx(t,e,a,l){var c=H.T;H.T=null;var d=Z.p;try{Z.p=2,vh(t,e,a,l)}finally{Z.p=d,H.T=c}}function Lx(t,e,a,l){var c=H.T;H.T=null;var d=Z.p;try{Z.p=8,vh(t,e,a,l)}finally{Z.p=d,H.T=c}}function vh(t,e,a,l){if(uc){var c=bh(l);if(c===null)rh(t,e,l,cc,a),Cv(t,l);else if(qx(c,t,e,a,l))l.stopPropagation();else if(Cv(t,l),e&4&&-1<Bx.indexOf(t)){for(;c!==null;){var d=jt(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Cn(d.pendingLanes);if(v!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;v;){var A=1<<31-le(v);S.entanglements[1]|=A,v&=~A}Ia(d),($t&6)===0&&(Zu=j()+500,ls(0))}}break;case 13:S=Al(d,2),S!==null&&ta(S,d,2),Ju(),gh(d,2)}if(d=bh(l),d===null&&rh(t,e,l,cc,a),d===c)break;c=d}c!==null&&l.stopPropagation()}else rh(t,e,l,null,a)}}function bh(t){return t=Sf(t),yh(t)}var cc=null;function yh(t){if(cc=null,t=Qt(t),t!==null){var e=u(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=f(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return cc=t,null}function Rv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bn()){case pa:return 2;case Na:return 8;case ee:case Ua:return 32;case Ha:return 268435456;default:return 32}default:return 32}}var _h=!1,fi=null,di=null,hi=null,ps=new Map,ms=new Map,pi=[],Bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cv(t,e){switch(t){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":di=null;break;case"mouseover":case"mouseout":hi=null;break;case"pointerover":case"pointerout":ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(e.pointerId)}}function gs(t,e,a,l,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[c]},e!==null&&(e=jt(e),e!==null&&Mv(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,c!==null&&e.indexOf(c)===-1&&e.push(c),t)}function qx(t,e,a,l,c){switch(e){case"focusin":return fi=gs(fi,t,e,a,l,c),!0;case"dragenter":return di=gs(di,t,e,a,l,c),!0;case"mouseover":return hi=gs(hi,t,e,a,l,c),!0;case"pointerover":var d=c.pointerId;return ps.set(d,gs(ps.get(d)||null,t,e,a,l,c)),!0;case"gotpointercapture":return d=c.pointerId,ms.set(d,gs(ms.get(d)||null,t,e,a,l,c)),!0}return!1}function zv(t){var e=Qt(t.target);if(e!==null){var a=u(e);if(a!==null){if(e=a.tag,e===13){if(e=f(a),e!==null){t.blockedOn=e,gt(t.priority,function(){if(a.tag===13){var l=In();l=Vn(l);var c=Al(a,l);c!==null&&ta(c,a,l),gh(a,l)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=bh(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Tf=l,a.target.dispatchEvent(l),Tf=null}else return e=jt(a),e!==null&&Mv(e),t.blockedOn=a,!1;e.shift()}return!0}function Nv(t,e,a){fc(t)&&a.delete(e)}function Yx(){_h=!1,fi!==null&&fc(fi)&&(fi=null),di!==null&&fc(di)&&(di=null),hi!==null&&fc(hi)&&(hi=null),ps.forEach(Nv),ms.forEach(Nv)}function dc(t,e){t.blockedOn===e&&(t.blockedOn=null,_h||(_h=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Yx)))}var hc=null;function Uv(t){hc!==t&&(hc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],c=t[e+2];if(typeof l!="function"){if(yh(l||a)===null)continue;break}var d=jt(a);d!==null&&(t.splice(e,3),e-=3,yd(d,{pending:!0,data:c,method:a.method,action:l},l,c))}}))}function vs(t){function e(A){return dc(A,t)}fi!==null&&dc(fi,t),di!==null&&dc(di,t),hi!==null&&dc(hi,t),ps.forEach(e),ms.forEach(e);for(var a=0;a<pi.length;a++){var l=pi[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<pi.length&&(a=pi[0],a.blockedOn===null);)zv(a),a.blockedOn===null&&pi.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var c=a[l],d=a[l+1],v=c[dt]||null;if(typeof d=="function")v||Uv(a);else if(v){var S=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[dt]||null)S=v.formAction;else if(yh(c)!==null)continue}else S=v.action;typeof S=="function"?a[l+1]=S:(a.splice(l,3),l-=3),Uv(a)}}}function xh(t){this._internalRoot=t}pc.prototype.render=xh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var a=e.current,l=In();kv(a,l,t,e,null,null)},pc.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kv(t.current,2,null,t,null,null),Ju(),e[ft]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ot();t={blockedOn:null,target:t,priority:e};for(var a=0;a<pi.length&&e!==0&&e<pi[a].priority;a++);pi.splice(a,0,t),a===0&&zv(t)}};var Hv=n.version;if(Hv!=="19.1.1")throw Error(r(527,Hv,"19.1.1"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(e),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Px={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Mn=mc.inject(Px),qt=mc}catch{}}return ys.createRoot=function(t,e){if(!s(t))throw Error(r(299));var a=!1,l="",c=Wm,d=Im,v=tg,S=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(c=e.onUncaughtError),e.onCaughtError!==void 0&&(d=e.onCaughtError),e.onRecoverableError!==void 0&&(v=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(S=e.unstable_transitionCallbacks)),e=wv(t,1,!1,null,null,a,l,c,d,v,S,null),t[ft]=e.current,ah(t),new xh(e)},ys.hydrateRoot=function(t,e,a){if(!s(t))throw Error(r(299));var l=!1,c="",d=Wm,v=Im,S=tg,A=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(A=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),e=wv(t,1,!0,e,a??null,l,c,d,v,S,A,L),e.context=Av(null),a=e.current,l=In(),l=Vn(l),c=Fr(l),c.callback=null,Wr(a,c,l),a=l,e.current.lanes=a,en(e,a),Ia(e),t[ft]=e.current,ah(t),new pc(e)},ys.version="19.1.1",ys}var Qv;function Wx(){if(Qv)return Oh.exports;Qv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Oh.exports=Fx(),Oh.exports}var Ix=Wx();/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zv="popstate";function t2(o={}){function n(s,u){let{pathname:f="/",search:h="",hash:m=""}=gl(s.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Qh("",{pathname:f,search:h,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(s,u){let f=s.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=s.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof u=="string"?u:Vs(u))}function r(s,u){Qa(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return n2(n,i,r,o)}function xe(o,n){if(o===!1||o===null||typeof o>"u")throw new Error(n)}function Qa(o,n){if(!o){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function e2(){return Math.random().toString(36).substring(2,10)}function Kv(o,n){return{usr:o.state,key:o.key,idx:n}}function Qh(o,n,i=null,r){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof n=="string"?gl(n):n,state:i,key:n&&n.key||r||e2()}}function Vs({pathname:o="/",search:n="",hash:i=""}){return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(o+=i.charAt(0)==="#"?i:"#"+i),o}function gl(o){let n={};if(o){let i=o.indexOf("#");i>=0&&(n.hash=o.substring(i),o=o.substring(0,i));let r=o.indexOf("?");r>=0&&(n.search=o.substring(r),o=o.substring(0,r)),o&&(n.pathname=o)}return n}function n2(o,n,i,r={}){let{window:s=document.defaultView,v5Compat:u=!1}=r,f=s.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function _(){h="POP";let E=g(),w=E==null?null:E-p;p=E,m&&m({action:h,location:b.location,delta:w})}function x(E,w){h="PUSH";let k=Qh(b.location,E,w);i&&i(k,E),p=g()+1;let D=Kv(k,p),R=b.createHref(k);try{f.pushState(D,"",R)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(R)}u&&m&&m({action:h,location:b.location,delta:1})}function y(E,w){h="REPLACE";let k=Qh(b.location,E,w);i&&i(k,E),p=g();let D=Kv(k,p),R=b.createHref(k);f.replaceState(D,"",R),u&&m&&m({action:h,location:b.location,delta:0})}function O(E){return a2(E)}let b={get action(){return h},get location(){return o(s,f)},listen(E){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(Zv,_),m=E,()=>{s.removeEventListener(Zv,_),m=null}},createHref(E){return n(s,E)},createURL:O,encodeLocation(E){let w=O(E);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:x,replace:y,go(E){return f.go(E)}};return b}function a2(o,n=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),xe(i,"No window.location.(origin|href) available to create URL");let r=typeof o=="string"?o:Vs(o);return r=r.replace(/ $/,"%20"),!n&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function jb(o,n,i="/"){return r2(o,n,i,!1)}function r2(o,n,i,r){let s=typeof n=="string"?gl(n):n,u=Hr(s.pathname||"/",i);if(u==null)return null;let f=Xb(o);i2(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=g2(u);h=p2(f[m],p,r)}return h}function Xb(o,n=[],i=[],r=""){let s=(u,f,h)=>{let m={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&(xe(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=Nr([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(xe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Xb(u.children,n,g,p)),!(u.path==null&&!u.index)&&n.push({path:p,score:d2(p,u.index),routesMeta:g})};return o.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))s(u,f);else for(let h of Gb(u.path))s(u,f,h)}),n}function Gb(o){let n=o.split("/");if(n.length===0)return[];let[i,...r]=n,s=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return s?[u,""]:[u];let f=Gb(r.join("/")),h=[];return h.push(...f.map(m=>m===""?u:[u,m].join("/"))),s&&h.push(...f),h.map(m=>o.startsWith("/")&&m===""?"/":m)}function i2(o){o.sort((n,i)=>n.score!==i.score?i.score-n.score:h2(n.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var l2=/^:[\w-]+$/,o2=3,s2=2,u2=1,c2=10,f2=-2,Jv=o=>o==="*";function d2(o,n){let i=o.split("/"),r=i.length;return i.some(Jv)&&(r+=f2),n&&(r+=s2),i.filter(s=>!Jv(s)).reduce((s,u)=>s+(l2.test(u)?o2:u===""?u2:c2),r)}function h2(o,n){return o.length===n.length&&o.slice(0,-1).every((r,s)=>r===n[s])?o[o.length-1]-n[n.length-1]:0}function p2(o,n,i=!1){let{routesMeta:r}=o,s={},u="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=u==="/"?n:n.slice(u.length)||"/",_=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!_&&p&&i&&!r[r.length-1].route.index&&(_=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(s,_.params),f.push({params:s,pathname:Nr([u,_.pathname]),pathnameBase:_2(Nr([u,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(u=Nr([u,_.pathnameBase]))}return f}function Kc(o,n){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[i,r]=m2(o.path,o.caseSensitive,o.end),s=n.match(i);if(!s)return null;let u=s[0],f=u.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:_},x)=>{if(g==="*"){let O=h[x]||"";f=u.slice(0,u.length-O.length).replace(/(.)\/+$/,"$1")}const y=h[x];return _&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:o}}function m2(o,n=!1,i=!0){Qa(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let r=[],s="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(r.push({paramName:"*"}),s+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":o!==""&&o!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),r]}function g2(o){try{return o.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Qa(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),o}}function Hr(o,n){if(n==="/")return o;if(!o.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,r=o.charAt(i);return r&&r!=="/"?null:o.slice(i)||"/"}function v2(o,n="/"){let{pathname:i,search:r="",hash:s=""}=typeof o=="string"?gl(o):o;return{pathname:i?i.startsWith("/")?i:b2(i,n):n,search:x2(r),hash:T2(s)}}function b2(o,n){let i=n.replace(/\/+$/,"").split("/");return o.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function kh(o,n,i,r){return`Cannot include a '${o}' character in a manually specified \`to.${n}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function y2(o){return o.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function Vb(o){let n=y2(o);return n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase)}function Qb(o,n,i,r=!1){let s;typeof o=="string"?s=gl(o):(s={...o},xe(!s.pathname||!s.pathname.includes("?"),kh("?","pathname","search",s)),xe(!s.pathname||!s.pathname.includes("#"),kh("#","pathname","hash",s)),xe(!s.search||!s.search.includes("#"),kh("#","search","hash",s)));let u=o===""||s.pathname==="",f=u?"/":s.pathname,h;if(f==null)h=i;else{let _=n.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;s.pathname=x.join("/")}h=_>=0?n[_]:"/"}let m=v2(s,h),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var Nr=o=>o.join("/").replace(/\/\/+/g,"/"),_2=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),x2=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,T2=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function S2(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var Zb=["POST","PUT","PATCH","DELETE"];new Set(Zb);var O2=["GET",...Zb];new Set(O2);var Eo=Y.createContext(null);Eo.displayName="DataRouter";var uf=Y.createContext(null);uf.displayName="DataRouterState";Y.createContext(!1);var Kb=Y.createContext({isTransitioning:!1});Kb.displayName="ViewTransition";var E2=Y.createContext(new Map);E2.displayName="Fetchers";var w2=Y.createContext(null);w2.displayName="Await";var or=Y.createContext(null);or.displayName="Navigation";var nu=Y.createContext(null);nu.displayName="Location";var Yr=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Yr.displayName="Route";var E0=Y.createContext(null);E0.displayName="RouteError";function A2(o,{relative:n}={}){xe(au(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=Y.useContext(or),{hash:s,pathname:u,search:f}=ru(o,{relative:n}),h=u;return i!=="/"&&(h=u==="/"?i:Nr([i,u])),r.createHref({pathname:h,search:f,hash:s})}function au(){return Y.useContext(nu)!=null}function vl(){return xe(au(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(nu).location}var Jb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $b(o){Y.useContext(or).static||Y.useLayoutEffect(o)}function w0(){let{isDataRoute:o}=Y.useContext(Yr);return o?Y2():k2()}function k2(){xe(au(),"useNavigate() may be used only in the context of a <Router> component.");let o=Y.useContext(Eo),{basename:n,navigator:i}=Y.useContext(or),{matches:r}=Y.useContext(Yr),{pathname:s}=vl(),u=JSON.stringify(Vb(r)),f=Y.useRef(!1);return $b(()=>{f.current=!0}),Y.useCallback((m,p={})=>{if(Qa(f.current,Jb),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Qb(m,JSON.parse(u),s,p.relative==="path");o==null&&n!=="/"&&(g.pathname=g.pathname==="/"?n:Nr([n,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[n,i,u,s,o])}Y.createContext(null);function ru(o,{relative:n}={}){let{matches:i}=Y.useContext(Yr),{pathname:r}=vl(),s=JSON.stringify(Vb(i));return Y.useMemo(()=>Qb(o,JSON.parse(s),r,n==="path"),[o,s,r,n])}function D2(o,n){return Fb(o,n)}function Fb(o,n,i,r){xe(au(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=Y.useContext(or),{matches:u}=Y.useContext(Yr),f=u[u.length-1],h=f?f.params:{},m=f?f.pathname:"/",p=f?f.pathnameBase:"/",g=f&&f.route;{let w=g&&g.path||"";Wb(m,!g||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let _=vl(),x;if(n){let w=typeof n=="string"?gl(n):n;xe(p==="/"||w.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${w.pathname}" was given in the \`location\` prop.`),x=w}else x=_;let y=x.pathname||"/",O=y;if(p!=="/"){let w=p.replace(/^\//,"").split("/");O="/"+y.replace(/^\//,"").split("/").slice(w.length).join("/")}let b=jb(o,{pathname:O});Qa(g||b!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Qa(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=N2(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},h,w.params),pathname:Nr([p,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?p:Nr([p,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),u,i,r);return n&&E?Y.createElement(nu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},E):E}function M2(){let o=q2(),n=S2(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),i=o instanceof Error?o.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",o),f=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:u},"ErrorBoundary")," or"," ",Y.createElement("code",{style:u},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},n),i?Y.createElement("pre",{style:s},i):null,f)}var R2=Y.createElement(M2,null),C2=class extends Y.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,n){return n.location!==o.location||n.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:n.error,location:n.location,revalidation:o.revalidation||n.revalidation}}componentDidCatch(o,n){console.error("React Router caught the following error during render",o,n)}render(){return this.state.error!==void 0?Y.createElement(Yr.Provider,{value:this.props.routeContext},Y.createElement(E0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function z2({routeContext:o,match:n,children:i}){let r=Y.useContext(Eo);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Y.createElement(Yr.Provider,{value:o},i)}function N2(o,n=[],i=null,r=null){if(o==null){if(!i)return null;if(i.errors)o=i.matches;else if(n.length===0&&!i.initialized&&i.matches.length>0)o=i.matches;else return null}let s=o,u=i?.errors;if(u!=null){let m=s.findIndex(p=>p.route.id&&u?.[p.route.id]!==void 0);xe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let f=!1,h=-1;if(i)for(let m=0;m<s.length;m++){let p=s[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:g,errors:_}=i,x=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||x){f=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((m,p,g)=>{let _,x=!1,y=null,O=null;i&&(_=u&&p.route.id?u[p.route.id]:void 0,y=p.route.errorElement||R2,f&&(h<0&&g===0?(Wb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,O=null):h===g&&(x=!0,O=p.route.hydrateFallbackElement||null)));let b=n.concat(s.slice(0,g+1)),E=()=>{let w;return _?w=y:x?w=O:p.route.Component?w=Y.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=m,Y.createElement(z2,{match:p,routeContext:{outlet:m,matches:b,isDataRoute:i!=null},children:w})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?Y.createElement(C2,{location:i.location,revalidation:i.revalidation,component:y,error:_,children:E(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):E()},null)}function A0(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U2(o){let n=Y.useContext(Eo);return xe(n,A0(o)),n}function H2(o){let n=Y.useContext(uf);return xe(n,A0(o)),n}function L2(o){let n=Y.useContext(Yr);return xe(n,A0(o)),n}function k0(o){let n=L2(o),i=n.matches[n.matches.length-1];return xe(i.route.id,`${o} can only be used on routes that contain a unique "id"`),i.route.id}function B2(){return k0("useRouteId")}function q2(){let o=Y.useContext(E0),n=H2("useRouteError"),i=k0("useRouteError");return o!==void 0?o:n.errors?.[i]}function Y2(){let{router:o}=U2("useNavigate"),n=k0("useNavigate"),i=Y.useRef(!1);return $b(()=>{i.current=!0}),Y.useCallback(async(s,u={})=>{Qa(i.current,Jb),i.current&&(typeof s=="number"?o.navigate(s):await o.navigate(s,{fromRouteId:n,...u}))},[o,n])}var $v={};function Wb(o,n,i){!n&&!$v[o]&&($v[o]=!0,Qa(!1,i))}Y.memo(P2);function P2({routes:o,future:n,state:i}){return Fb(o,void 0,i,n)}function ja(o){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function j2({basename:o="/",children:n=null,location:i,navigationType:r="POP",navigator:s,static:u=!1}){xe(!au(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=o.replace(/^\/*/,"/"),h=Y.useMemo(()=>({basename:f,navigator:s,static:u,future:{}}),[f,s,u]);typeof i=="string"&&(i=gl(i));let{pathname:m="/",search:p="",hash:g="",state:_=null,key:x="default"}=i,y=Y.useMemo(()=>{let O=Hr(m,f);return O==null?null:{location:{pathname:O,search:p,hash:g,state:_,key:x},navigationType:r}},[f,m,p,g,_,x,r]);return Qa(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:Y.createElement(or.Provider,{value:h},Y.createElement(nu.Provider,{children:n,value:y}))}function X2({children:o,location:n}){return D2(Zh(o),n)}function Zh(o,n=[]){let i=[];return Y.Children.forEach(o,(r,s)=>{if(!Y.isValidElement(r))return;let u=[...n,s];if(r.type===Y.Fragment){i.push.apply(i,Zh(r.props.children,u));return}xe(r.type===ja,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Zh(r.props.children,u)),i.push(f)}),i}var Lc="get",Bc="application/x-www-form-urlencoded";function cf(o){return o!=null&&typeof o.tagName=="string"}function G2(o){return cf(o)&&o.tagName.toLowerCase()==="button"}function V2(o){return cf(o)&&o.tagName.toLowerCase()==="form"}function Q2(o){return cf(o)&&o.tagName.toLowerCase()==="input"}function Z2(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function K2(o,n){return o.button===0&&(!n||n==="_self")&&!Z2(o)}var gc=null;function J2(){if(gc===null)try{new FormData(document.createElement("form"),0),gc=!1}catch{gc=!0}return gc}var $2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dh(o){return o!=null&&!$2.has(o)?(Qa(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bc}"`),null):o}function F2(o,n){let i,r,s,u,f;if(V2(o)){let h=o.getAttribute("action");r=h?Hr(h,n):null,i=o.getAttribute("method")||Lc,s=Dh(o.getAttribute("enctype"))||Bc,u=new FormData(o)}else if(G2(o)||Q2(o)&&(o.type==="submit"||o.type==="image")){let h=o.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=o.getAttribute("formaction")||h.getAttribute("action");if(r=m?Hr(m,n):null,i=o.getAttribute("formmethod")||h.getAttribute("method")||Lc,s=Dh(o.getAttribute("formenctype"))||Dh(h.getAttribute("enctype"))||Bc,u=new FormData(h,o),!J2()){let{name:p,type:g,value:_}=o;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,_)}}else{if(cf(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Lc,r=null,s=Bc,f=o}return u&&s==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:s,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function D0(o,n){if(o===!1||o===null||typeof o>"u")throw new Error(n)}function W2(o,n,i){let r=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return r.pathname==="/"?r.pathname=`_root.${i}`:n&&Hr(r.pathname,n)==="/"?r.pathname=`${n.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function I2(o,n){if(o.id in n)return n[o.id];try{let i=await import(o.module);return n[o.id]=i,i}catch(i){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function t5(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function e5(o,n,i){let r=await Promise.all(o.map(async s=>{let u=n.routes[s.route.id];if(u){let f=await I2(u,i);return f.links?f.links():[]}return[]}));return i5(r.flat(1).filter(t5).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Fv(o,n,i,r,s,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?n.filter((m,p)=>f(m,p)||h(m,p)):u==="data"?n.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function n5(o,n,{includeHydrateFallback:i}={}){return a5(o.map(r=>{let s=n.routes[r.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),i&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function a5(o){return[...new Set(o)]}function r5(o){let n={},i=Object.keys(o).sort();for(let r of i)n[r]=o[r];return n}function i5(o,n){let i=new Set;return new Set(n),o.reduce((r,s)=>{let u=JSON.stringify(r5(s));return i.has(u)||(i.add(u),r.push({key:u,link:s})),r},[])}function Ib(){let o=Y.useContext(Eo);return D0(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function l5(){let o=Y.useContext(uf);return D0(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var M0=Y.createContext(void 0);M0.displayName="FrameworkContext";function ty(){let o=Y.useContext(M0);return D0(o,"You must render this element inside a <HydratedRouter> element"),o}function o5(o,n){let i=Y.useContext(M0),[r,s]=Y.useState(!1),[u,f]=Y.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=n,x=Y.useRef(null);Y.useEffect(()=>{if(o==="render"&&f(!0),o==="viewport"){let b=w=>{w.forEach(k=>{f(k.isIntersecting)})},E=new IntersectionObserver(b,{threshold:.5});return x.current&&E.observe(x.current),()=>{E.disconnect()}}},[o]),Y.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let y=()=>{s(!0)},O=()=>{s(!1),f(!1)};return i?o!=="intent"?[u,x,{}]:[u,x,{onFocus:_s(h,y),onBlur:_s(m,O),onMouseEnter:_s(p,y),onMouseLeave:_s(g,O),onTouchStart:_s(_,y)}]:[!1,x,{}]}function _s(o,n){return i=>{o&&o(i),i.defaultPrevented||n(i)}}function s5({page:o,...n}){let{router:i}=Ib(),r=Y.useMemo(()=>jb(i.routes,o,i.basename),[i.routes,o,i.basename]);return r?Y.createElement(c5,{page:o,matches:r,...n}):null}function u5(o){let{manifest:n,routeModules:i}=ty(),[r,s]=Y.useState([]);return Y.useEffect(()=>{let u=!1;return e5(o,n,i).then(f=>{u||s(f)}),()=>{u=!0}},[o,n,i]),r}function c5({page:o,matches:n,...i}){let r=vl(),{manifest:s,routeModules:u}=ty(),{basename:f}=Ib(),{loaderData:h,matches:m}=l5(),p=Y.useMemo(()=>Fv(o,n,m,s,r,"data"),[o,n,m,s,r]),g=Y.useMemo(()=>Fv(o,n,m,s,r,"assets"),[o,n,m,s,r]),_=Y.useMemo(()=>{if(o===r.pathname+r.search+r.hash)return[];let O=new Set,b=!1;if(n.forEach(w=>{let k=s.routes[w.route.id];!k||!k.hasLoader||(!p.some(D=>D.route.id===w.route.id)&&w.route.id in h&&u[w.route.id]?.shouldRevalidate||k.hasClientLoader?b=!0:O.add(w.route.id))}),O.size===0)return[];let E=W2(o,f,"data");return b&&O.size>0&&E.searchParams.set("_routes",n.filter(w=>O.has(w.route.id)).map(w=>w.route.id).join(",")),[E.pathname+E.search]},[f,h,r,s,p,n,o,u]),x=Y.useMemo(()=>n5(g,s),[g,s]),y=u5(g);return Y.createElement(Y.Fragment,null,_.map(O=>Y.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...i})),x.map(O=>Y.createElement("link",{key:O,rel:"modulepreload",href:O,...i})),y.map(({key:O,link:b})=>Y.createElement("link",{key:O,...b})))}function f5(...o){return n=>{o.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var ey=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ey&&(window.__reactRouterVersion="7.7.1")}catch{}function d5({basename:o,children:n,window:i}){let r=Y.useRef();r.current==null&&(r.current=t2({window:i,v5Compat:!0}));let s=r.current,[u,f]=Y.useState({action:s.action,location:s.location}),h=Y.useCallback(m=>{Y.startTransition(()=>f(m))},[f]);return Y.useLayoutEffect(()=>s.listen(h),[s,h]),Y.createElement(j2,{basename:o,children:n,location:u.location,navigationType:u.action,navigator:s})}var ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ii=Y.forwardRef(function({onClick:n,discover:i="render",prefetch:r="none",relative:s,reloadDocument:u,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:_,...x},y){let{basename:O}=Y.useContext(or),b=typeof p=="string"&&ny.test(p),E,w=!1;if(typeof p=="string"&&b&&(E=p,ey))try{let P=new URL(window.location.href),F=p.startsWith("//")?new URL(P.protocol+p):new URL(p),it=Hr(F.pathname,O);F.origin===P.origin&&it!=null?p=it+F.search+F.hash:w=!0}catch{Qa(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=A2(p,{relative:s}),[D,R,C]=o5(r,x),X=g5(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:s,viewTransition:_});function N(P){n&&n(P),P.defaultPrevented||X(P)}let G=Y.createElement("a",{...x,...C,href:E||k,onClick:w||u?n:N,ref:f5(y,R),target:m,"data-discover":!b&&i==="render"?"true":void 0});return D&&!b?Y.createElement(Y.Fragment,null,G,Y.createElement(s5,{page:k})):G});Ii.displayName="Link";var h5=Y.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:r="",end:s=!1,style:u,to:f,viewTransition:h,children:m,...p},g){let _=ru(f,{relative:p.relative}),x=vl(),y=Y.useContext(uf),{navigator:O,basename:b}=Y.useContext(or),E=y!=null&&x5(_)&&h===!0,w=O.encodeLocation?O.encodeLocation(_).pathname:_.pathname,k=x.pathname,D=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(k=k.toLowerCase(),D=D?D.toLowerCase():null,w=w.toLowerCase()),D&&b&&(D=Hr(D,b)||D);const R=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let C=k===w||!s&&k.startsWith(w)&&k.charAt(R)==="/",X=D!=null&&(D===w||!s&&D.startsWith(w)&&D.charAt(w.length)==="/"),N={isActive:C,isPending:X,isTransitioning:E},G=C?n:void 0,P;typeof r=="function"?P=r(N):P=[r,C?"active":null,X?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let F=typeof u=="function"?u(N):u;return Y.createElement(Ii,{...p,"aria-current":G,className:P,ref:g,style:F,to:f,viewTransition:h},typeof m=="function"?m(N):m)});h5.displayName="NavLink";var p5=Y.forwardRef(({discover:o="render",fetcherKey:n,navigate:i,reloadDocument:r,replace:s,state:u,method:f=Lc,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:_,...x},y)=>{let O=y5(),b=_5(h,{relative:p}),E=f.toLowerCase()==="get"?"get":"post",w=typeof h=="string"&&ny.test(h),k=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let R=D.nativeEvent.submitter,C=R?.getAttribute("formmethod")||f;O(R||D.currentTarget,{fetcherKey:n,method:C,navigate:i,replace:s,state:u,relative:p,preventScrollReset:g,viewTransition:_})};return Y.createElement("form",{ref:y,method:E,action:b,onSubmit:r?m:k,...x,"data-discover":!w&&o==="render"?"true":void 0})});p5.displayName="Form";function m5(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ay(o){let n=Y.useContext(Eo);return xe(n,m5(o)),n}function g5(o,{target:n,replace:i,state:r,preventScrollReset:s,relative:u,viewTransition:f}={}){let h=w0(),m=vl(),p=ru(o,{relative:u});return Y.useCallback(g=>{if(K2(g,n)){g.preventDefault();let _=i!==void 0?i:Vs(m)===Vs(p);h(o,{replace:_,state:r,preventScrollReset:s,relative:u,viewTransition:f})}},[m,h,p,i,r,n,o,s,u,f])}var v5=0,b5=()=>`__${String(++v5)}__`;function y5(){let{router:o}=ay("useSubmit"),{basename:n}=Y.useContext(or),i=B2();return Y.useCallback(async(r,s={})=>{let{action:u,method:f,encType:h,formData:m,body:p}=F2(r,n);if(s.navigate===!1){let g=s.fetcherKey||b5();await o.fetch(g,i,s.action||u,{preventScrollReset:s.preventScrollReset,formData:m,body:p,formMethod:s.method||f,formEncType:s.encType||h,flushSync:s.flushSync})}else await o.navigate(s.action||u,{preventScrollReset:s.preventScrollReset,formData:m,body:p,formMethod:s.method||f,formEncType:s.encType||h,replace:s.replace,state:s.state,fromRouteId:i,flushSync:s.flushSync,viewTransition:s.viewTransition})},[o,n,i])}function _5(o,{relative:n}={}){let{basename:i}=Y.useContext(or),r=Y.useContext(Yr);xe(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),u={...ru(o||".",{relative:n})},f=vl();if(o==null){u.search=f.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();u.search=g?`?${g}`:""}}return(!o||o===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Nr([i,u.pathname])),Vs(u)}function x5(o,{relative:n}={}){let i=Y.useContext(Kb);xe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=ay("useViewTransitionState"),s=ru(o,{relative:n});if(!i.isTransitioning)return!1;let u=Hr(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Hr(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Kc(s.pathname,f)!=null||Kc(s.pathname,u)!=null}const T5="modulepreload",S5=function(o){return"/codyatra/"+o},Wv={},Pr=function(n,i,r){let s=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=f?.nonce||f?.getAttribute("nonce");s=m(i.map(p=>{if(p=S5(p),p in Wv)return;Wv[p]=!0;const g=p.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${_}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":T5,g||(x.as="script"),x.crossOrigin="",x.href=p,h&&x.setAttribute("nonce",h),document.head.appendChild(x),g)return new Promise((y,O)=>{x.addEventListener("load",y),x.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return s.then(f=>{for(const h of f||[])h.status==="rejected"&&u(h.reason);return n().catch(u)})},O5="/codyatra/assets/intro-bNfiHPpZ.mp4";function Ze(o,n){n===void 0&&(n={});var i=n.insertAt;if(o&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=o:s.appendChild(document.createTextNode(o))}}Ze(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ct=function(){return ct=Object.assign||function(o){for(var n,i=1,r=arguments.length;i<r;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(o[s]=n[s]);return o},ct.apply(this,arguments)};function Jc(o){return Jc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Jc(o)}var E5=/^\s+/,w5=/\s+$/;function ut(o,n){if(n=n||{},(o=o||"")instanceof ut)return o;if(!(this instanceof ut))return new ut(o,n);var i=function(r){var s={r:0,g:0,b:0},u=1,f=null,h=null,m=null,p=!1,g=!1;typeof r=="string"&&(r=function(O){O=O.replace(E5,"").replace(w5,"").toLowerCase();var b,E=!1;if(Kh[O])O=Kh[O],E=!0;else if(O=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(b=Xa.rgb.exec(O))?{r:b[1],g:b[2],b:b[3]}:(b=Xa.rgba.exec(O))?{r:b[1],g:b[2],b:b[3],a:b[4]}:(b=Xa.hsl.exec(O))?{h:b[1],s:b[2],l:b[3]}:(b=Xa.hsla.exec(O))?{h:b[1],s:b[2],l:b[3],a:b[4]}:(b=Xa.hsv.exec(O))?{h:b[1],s:b[2],v:b[3]}:(b=Xa.hsva.exec(O))?{h:b[1],s:b[2],v:b[3],a:b[4]}:(b=Xa.hex8.exec(O))?{r:ea(b[1]),g:ea(b[2]),b:ea(b[3]),a:rb(b[4]),format:E?"name":"hex8"}:(b=Xa.hex6.exec(O))?{r:ea(b[1]),g:ea(b[2]),b:ea(b[3]),format:E?"name":"hex"}:(b=Xa.hex4.exec(O))?{r:ea(b[1]+""+b[1]),g:ea(b[2]+""+b[2]),b:ea(b[3]+""+b[3]),a:rb(b[4]+""+b[4]),format:E?"name":"hex8"}:(b=Xa.hex3.exec(O))?{r:ea(b[1]+""+b[1]),g:ea(b[2]+""+b[2]),b:ea(b[3]+""+b[3]),format:E?"name":"hex"}:!1}(r)),Jc(r)=="object"&&(Dr(r.r)&&Dr(r.g)&&Dr(r.b)?(_=r.r,x=r.g,y=r.b,s={r:255*me(_,255),g:255*me(x,255),b:255*me(y,255)},p=!0,g=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Dr(r.h)&&Dr(r.s)&&Dr(r.v)?(f=Es(r.s),h=Es(r.v),s=function(O,b,E){O=6*me(O,360),b=me(b,100),E=me(E,100);var w=Math.floor(O),k=O-w,D=E*(1-b),R=E*(1-k*b),C=E*(1-(1-k)*b),X=w%6,N=[E,R,D,D,C,E][X],G=[C,E,E,R,D,D][X],P=[D,D,C,E,E,R][X];return{r:255*N,g:255*G,b:255*P}}(r.h,f,h),p=!0,g="hsv"):Dr(r.h)&&Dr(r.s)&&Dr(r.l)&&(f=Es(r.s),m=Es(r.l),s=function(O,b,E){var w,k,D;function R(N,G,P){return P<0&&(P+=1),P>1&&(P-=1),P<1/6?N+6*(G-N)*P:P<.5?G:P<2/3?N+(G-N)*(2/3-P)*6:N}if(O=me(O,360),b=me(b,100),E=me(E,100),b===0)w=k=D=E;else{var C=E<.5?E*(1+b):E+b-E*b,X=2*E-C;w=R(X,C,O+1/3),k=R(X,C,O),D=R(X,C,O-1/3)}return{r:255*w,g:255*k,b:255*D}}(r.h,f,m),p=!0,g="hsl"),r.hasOwnProperty("a")&&(u=r.a));var _,x,y;return u=ry(u),{ok:p,format:r.format||g,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:u}}(o);this._originalInput=o,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||i.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function Iv(o,n,i){o=me(o,255),n=me(n,255),i=me(i,255);var r,s,u=Math.max(o,n,i),f=Math.min(o,n,i),h=(u+f)/2;if(u==f)r=s=0;else{var m=u-f;switch(s=h>.5?m/(2-u-f):m/(u+f),u){case o:r=(n-i)/m+(n<i?6:0);break;case n:r=(i-o)/m+2;break;case i:r=(o-n)/m+4}r/=6}return{h:r,s,l:h}}function tb(o,n,i){o=me(o,255),n=me(n,255),i=me(i,255);var r,s,u=Math.max(o,n,i),f=Math.min(o,n,i),h=u,m=u-f;if(s=u===0?0:m/u,u==f)r=0;else{switch(u){case o:r=(n-i)/m+(n<i?6:0);break;case n:r=(i-o)/m+2;break;case i:r=(o-n)/m+4}r/=6}return{h:r,s,v:h}}function eb(o,n,i,r){var s=[Va(Math.round(o).toString(16)),Va(Math.round(n).toString(16)),Va(Math.round(i).toString(16))];return r&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function nb(o,n,i,r){return[Va(iy(r)),Va(Math.round(o).toString(16)),Va(Math.round(n).toString(16)),Va(Math.round(i).toString(16))].join("")}function A5(o,n){n=n===0?0:n||10;var i=ut(o).toHsl();return i.s-=n/100,i.s=ff(i.s),ut(i)}function k5(o,n){n=n===0?0:n||10;var i=ut(o).toHsl();return i.s+=n/100,i.s=ff(i.s),ut(i)}function D5(o){return ut(o).desaturate(100)}function M5(o,n){n=n===0?0:n||10;var i=ut(o).toHsl();return i.l+=n/100,i.l=ff(i.l),ut(i)}function R5(o,n){n=n===0?0:n||10;var i=ut(o).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-n/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-n/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-n/100*255))),ut(i)}function C5(o,n){n=n===0?0:n||10;var i=ut(o).toHsl();return i.l-=n/100,i.l=ff(i.l),ut(i)}function z5(o,n){var i=ut(o).toHsl(),r=(i.h+n)%360;return i.h=r<0?360+r:r,ut(i)}function N5(o){var n=ut(o).toHsl();return n.h=(n.h+180)%360,ut(n)}function ab(o,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var i=ut(o).toHsl(),r=[ut(o)],s=360/n,u=1;u<n;u++)r.push(ut({h:(i.h+u*s)%360,s:i.s,l:i.l}));return r}function U5(o){var n=ut(o).toHsl(),i=n.h;return[ut(o),ut({h:(i+72)%360,s:n.s,l:n.l}),ut({h:(i+216)%360,s:n.s,l:n.l})]}function H5(o,n,i){n=n||6,i=i||30;var r=ut(o).toHsl(),s=360/i,u=[ut(o)];for(r.h=(r.h-(s*n>>1)+720)%360;--n;)r.h=(r.h+s)%360,u.push(ut(r));return u}function L5(o,n){n=n||6;for(var i=ut(o).toHsv(),r=i.h,s=i.s,u=i.v,f=[],h=1/n;n--;)f.push(ut({h:r,s,v:u})),u=(u+h)%1;return f}ut.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var o=this.toRgb();return(299*o.r+587*o.g+114*o.b)/1e3},getLuminance:function(){var o,n,i,r=this.toRgb();return o=r.r/255,n=r.g/255,i=r.b/255,.2126*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(o){return this._a=ry(o),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var o=tb(this._r,this._g,this._b);return{h:360*o.h,s:o.s,v:o.v,a:this._a}},toHsvString:function(){var o=tb(this._r,this._g,this._b),n=Math.round(360*o.h),i=Math.round(100*o.s),r=Math.round(100*o.v);return this._a==1?"hsv("+n+", "+i+"%, "+r+"%)":"hsva("+n+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var o=Iv(this._r,this._g,this._b);return{h:360*o.h,s:o.s,l:o.l,a:this._a}},toHslString:function(){var o=Iv(this._r,this._g,this._b),n=Math.round(360*o.h),i=Math.round(100*o.s),r=Math.round(100*o.l);return this._a==1?"hsl("+n+", "+i+"%, "+r+"%)":"hsla("+n+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(o){return eb(this._r,this._g,this._b,o)},toHexString:function(o){return"#"+this.toHex(o)},toHex8:function(o){return function(n,i,r,s,u){var f=[Va(Math.round(n).toString(16)),Va(Math.round(i).toString(16)),Va(Math.round(r).toString(16)),Va(iy(s))];return u&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,o)},toHex8String:function(o){return"#"+this.toHex8(o)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*me(this._r,255))+"%",g:Math.round(100*me(this._g,255))+"%",b:Math.round(100*me(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*me(this._r,255))+"%, "+Math.round(100*me(this._g,255))+"%, "+Math.round(100*me(this._b,255))+"%)":"rgba("+Math.round(100*me(this._r,255))+"%, "+Math.round(100*me(this._g,255))+"%, "+Math.round(100*me(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(B5[eb(this._r,this._g,this._b,!0)]||!1)},toFilter:function(o){var n="#"+nb(this._r,this._g,this._b,this._a),i=n,r=this._gradientType?"GradientType = 1, ":"";if(o){var s=ut(o);i="#"+nb(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+i+")"},toString:function(o){var n=!!o;o=o||this._format;var i=!1,r=this._a<1&&this._a>=0;return n||!r||o!=="hex"&&o!=="hex6"&&o!=="hex3"&&o!=="hex4"&&o!=="hex8"&&o!=="name"?(o==="rgb"&&(i=this.toRgbString()),o==="prgb"&&(i=this.toPercentageRgbString()),o!=="hex"&&o!=="hex6"||(i=this.toHexString()),o==="hex3"&&(i=this.toHexString(!0)),o==="hex4"&&(i=this.toHex8String(!0)),o==="hex8"&&(i=this.toHex8String()),o==="name"&&(i=this.toName()),o==="hsl"&&(i=this.toHslString()),o==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):o==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ut(this.toString())},_applyModification:function(o,n){var i=o.apply(null,[this].concat([].slice.call(n)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(M5,arguments)},brighten:function(){return this._applyModification(R5,arguments)},darken:function(){return this._applyModification(C5,arguments)},desaturate:function(){return this._applyModification(A5,arguments)},saturate:function(){return this._applyModification(k5,arguments)},greyscale:function(){return this._applyModification(D5,arguments)},spin:function(){return this._applyModification(z5,arguments)},_applyCombination:function(o,n){return o.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(H5,arguments)},complement:function(){return this._applyCombination(N5,arguments)},monochromatic:function(){return this._applyCombination(L5,arguments)},splitcomplement:function(){return this._applyCombination(U5,arguments)},triad:function(){return this._applyCombination(ab,[3])},tetrad:function(){return this._applyCombination(ab,[4])}},ut.fromRatio=function(o,n){if(Jc(o)=="object"){var i={};for(var r in o)o.hasOwnProperty(r)&&(i[r]=r==="a"?o[r]:Es(o[r]));o=i}return ut(o,n)},ut.equals=function(o,n){return!(!o||!n)&&ut(o).toRgbString()==ut(n).toRgbString()},ut.random=function(){return ut.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ut.mix=function(o,n,i){i=i===0?0:i||50;var r=ut(o).toRgb(),s=ut(n).toRgb(),u=i/100;return ut({r:(s.r-r.r)*u+r.r,g:(s.g-r.g)*u+r.g,b:(s.b-r.b)*u+r.b,a:(s.a-r.a)*u+r.a})},ut.readability=function(o,n){var i=ut(o),r=ut(n);return(Math.max(i.getLuminance(),r.getLuminance())+.05)/(Math.min(i.getLuminance(),r.getLuminance())+.05)},ut.isReadable=function(o,n,i){var r,s,u=ut.readability(o,n);switch(s=!1,(r=function(f){var h,m;return h=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),m=(f.size||"small").toLowerCase(),h!=="AA"&&h!=="AAA"&&(h="AA"),m!=="small"&&m!=="large"&&(m="small"),{level:h,size:m}}(i)).level+r.size){case"AAsmall":case"AAAlarge":s=u>=4.5;break;case"AAlarge":s=u>=3;break;case"AAAsmall":s=u>=7}return s},ut.mostReadable=function(o,n,i){var r,s,u,f,h=null,m=0;s=(i=i||{}).includeFallbackColors,u=i.level,f=i.size;for(var p=0;p<n.length;p++)(r=ut.readability(o,n[p]))>m&&(m=r,h=ut(n[p]));return ut.isReadable(o,h,{level:u,size:f})||!s?h:(i.includeFallbackColors=!1,ut.mostReadable(o,["#fff","#000"],i))};var Kh=ut.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},B5=ut.hexNames=function(o){var n={};for(var i in o)o.hasOwnProperty(i)&&(n[o[i]]=i);return n}(Kh);function ry(o){return o=parseFloat(o),(isNaN(o)||o<0||o>1)&&(o=1),o}function me(o,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(o)&&(o="100%");var i=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(o);return o=Math.min(n,Math.max(0,parseFloat(o))),i&&(o=parseInt(o*n,10)/100),Math.abs(o-n)<1e-6?1:o%n/parseFloat(n)}function ff(o){return Math.min(1,Math.max(0,o))}function ea(o){return parseInt(o,16)}function Va(o){return o.length==1?"0"+o:""+o}function Es(o){return o<=1&&(o=100*o+"%"),o}function iy(o){return Math.round(255*parseFloat(o)).toString(16)}function rb(o){return ea(o)/255}var gi,vc,bc,Xa=(vc="[\\s|\\(]+("+(gi="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+gi+")[,|\\s]+("+gi+")\\s*\\)?",bc="[\\s|\\(]+("+gi+")[,|\\s]+("+gi+")[,|\\s]+("+gi+")[,|\\s]+("+gi+")\\s*\\)?",{CSS_UNIT:new RegExp(gi),rgb:new RegExp("rgb"+vc),rgba:new RegExp("rgba"+bc),hsl:new RegExp("hsl"+vc),hsla:new RegExp("hsla"+bc),hsv:new RegExp("hsv"+vc),hsva:new RegExp("hsva"+bc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Dr(o){return!!Xa.CSS_UNIT.exec(o)}var jr=function(o,n){var i=(typeof o=="string"?parseInt(o):o)||0;if(i>=-5&&i<=5){var r=i,s=parseFloat(n),u=s+r*(s/5)*-1;return(u==0||u<=Number.EPSILON)&&(u=.1),{animationPeriod:u+"s"}}return{animationPeriod:n}},Xr=function(o,n){var i=o||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var s={};if(i.fontSize){var u=i.fontSize;s=function(f,h){var m={};for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&h.indexOf(p)<0&&(m[p]=f[p]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(p=Object.getOwnPropertySymbols(f);g<p.length;g++)h.indexOf(p[g])<0&&Object.prototype.propertyIsEnumerable.call(f,p[g])&&(m[p[g]]=f[p[g]])}return m}(i,["fontSize"]),r=u}return{fontSize:r,styles:s}},q5={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Gr=function(o){var n=o.className,i=o.text,r=o.textColor,s=o.staticText,u=o.style;return i?I.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:ct(ct(ct({},s&&q5),r&&{color:r,mixBlendMode:"unset"}),u&&u)},typeof i=="string"&&i.length?i:"loading"):null},sa="rgb(50, 205, 50)";function Vr(o,n){if(n===void 0&&(n=0),o.length===0)throw new Error("Input array cannot be empty!");var i=[];return function r(s,u){return u===void 0&&(u=0),i.push.apply(i,s),i.length<u&&r(i,u),i.slice(0,u)}(o,n)}Ze(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ut(sa).toRgb();Array.from({length:4},function(o,n){return"--atom-phase".concat(n+1,"-rgb")});Ze(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(o,n){return"--commet-phase".concat(n+1,"-color")});Ze(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var yc=Array.from({length:4},function(o,n){return"--OP-annulus-phase".concat(n+1,"-color")}),Y5=function(o){var n,i=Xr(o?.style,o?.size),r=i.styles,s=i.fontSize,u=o?.easing,f=jr(o?.speedPlus,"1.5s").animationPeriod,h=function(p){var g={},_=yc.length;if(p instanceof Array){for(var x=Vr(p,_),y=0;y<x.length&&!(y>=4);y++)g[yc[y]]=x[y];return g}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<_;O++)g[yc[O]]=p}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),O=0;O<_;O++)g[yc[O]]=sa}return g}((n=o?.color)!==null&&n!==void 0?n:""),m=o?.dense?4.3:2.9;return I.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ct(ct(ct(ct(ct({},s&&{fontSize:s}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),h),r),role:"status","aria-live":"polite","aria-label":"Loading"},I.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},I.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},I.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:m,strokeMiterlimit:"10"})),I.createElement(Gr,{className:"OP-annulus-text",text:o?.text,textColor:o?.textColor})))};function Mh(o){return o&&o.Math===Math&&o}Ze(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Wl=Mh(typeof window=="object"&&window)||Mh(typeof self=="object"&&self)||Mh(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function ly(){var o,n;return!((o=Wl?.crypto)===null||o===void 0)&&o.randomUUID?Wl.crypto.randomUUID():!((n=Wl?.btoa)===null||n===void 0)&&n.name?Wl.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var _c=Array.from({length:4},function(o,n){return"--OP-dotted-phase".concat(n+1,"-color")}),P5=function(o){var n,i=Xr(o?.style,o?.size),r=i.styles,s=i.fontSize,u=o?.easing,f=jr(o?.speedPlus,"1.2s").animationPeriod,h=function(p){var g={},_=_c.length;if(p instanceof Array){for(var x=Vr(p,_),y=0;y<x.length&&!(y>=4);y++)g[_c[y]]=x[y];return g}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<_;O++)g[_c[O]]=p}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),O=0;O<_;O++)g[_c[O]]=sa}return g}((n=o?.color)!==null&&n!==void 0?n:""),m=o?.dense?16:12;return I.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ct(ct(ct(ct(ct({},s&&{fontSize:s}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),h),r),role:"status","aria-live":"polite","aria-label":"Loading"},I.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:m}).map(function(p,g){var _=function(O,b,E){if(b===16){var w=360*O/b,k=b-O,D=Number.parseFloat(E)/b*k*-1;return{transform:"rotate(".concat(w,"deg)"),animationDelay:"".concat(D,"s")}}return{transform:"",animationDelay:""}}(g,m,f),x=_.animationDelay,y=_.transform;return I.createElement("span",{key:ly(),className:"rli-d-i-b dot-shape-holder",style:y?{transform:y}:void 0},I.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))}),I.createElement(Gr,{className:"OP-dotted-text",text:o?.text,textColor:o?.textColor})))};Ze(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var xc=Array.from({length:4},function(o,n){return"--OP-spokes-phase".concat(n+1,"-color")}),j5=function(o){var n,i=Xr(o?.style,o?.size),r=i.styles,s=i.fontSize,u=o?.easing,f=jr(o?.speedPlus,"1.2s").animationPeriod,h=function(p){var g={},_=xc.length;if(p instanceof Array){for(var x=Vr(p,_),y=0;y<x.length&&!(y>=4);y++)g[xc[y]]=x[y];return g}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<_;O++)g[xc[O]]=p}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),O=0;O<_;O++)g[xc[O]]=sa}return g}((n=o?.color)!==null&&n!==void 0?n:""),m=o?.dense?16:12;return I.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ct(ct(ct(ct(ct({},s&&{fontSize:s}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),h),r),role:"status","aria-live":"polite","aria-label":"Loading"},I.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:m},function(p,g){return I.createElement("span",{key:ly(),className:"rli-d-i-b spoke",style:X5(g,m,f)})})),I.createElement(Gr,{text:o?.text,textColor:o?.textColor}))};function X5(o,n,i){if(n===16){var r=n-o,s=Number.parseFloat(i)/n;return{transform:"rotate(".concat(360*o/n,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*s*-1,"s")}}}Ze(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var Tc=Array.from({length:4},function(o,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")}),G5=function(o){var n,i=Xr(o?.style,o?.size),r=i.styles,s=i.fontSize,u=o?.easing,f=jr(o?.speedPlus,"1.2s").animationPeriod,h=function(p){var g={},_=Tc.length;if(p instanceof Array){for(var x=Vr(p,_),y=0;y<x.length&&!(y>=4);y++)g[Tc[y]]=x[y];return g}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<_;O++)g[Tc[O]]=p}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),O=0;O<_;O++)g[Tc[O]]=sa}return g}((n=o?.color)!==null&&n!==void 0?n:""),m=o.dense?"0.45em":"";return I.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ct(ct(ct(ct(ct({},s&&{fontSize:s}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),h),r),role:"status","aria-live":"polite","aria-label":"Loading"},I.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},I.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ct({},m&&{borderWidth:m})}),I.createElement(Gr,{className:"OP-annulus-dual-sectors-text",text:o?.text,textColor:o?.textColor})))};Ze(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var xs=Array.from({length:4},function(o,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]}),Sc=function(o){return o===void 0&&(o=1),.25*o},V5=function(o){var n,i=Xr(o?.style,o?.size),r=i.styles,s=i.fontSize,u=o?.easing,f=jr(o?.speedPlus,"1s").animationPeriod,h=function(p){var g={},_=xs.length;if(p instanceof Array){for(var x=Vr(p,_),y=0;y<x.length&&!(y>=4);y++){var O=xs[y];try{if(!(w=ut(x[y])).isValid())throw new Error("Invalid Color: ".concat(w.getOriginalInput()));var b=w.setAlpha(Sc(w.getAlpha())).toRgbString(),E=x[y];g[O[0]]=b,g[O[1]]=E}catch{E=sa,b=(w=ut(sa)).setAlpha(Sc(w.getAlpha())).toRgbString(),g[O[0]]=b,g[O[1]]=E}}return g}try{var w=ut(p);if(typeof p!="string")throw new Error("Color String expected");if(!w.isValid())throw new Error("Invalid Color: ".concat(w.getOriginalInput()));E=p,b=w.setAlpha(Sc(w.getAlpha())).toRgbString();for(var k=0;k<_;k++)g[(O=xs[k])[0]]=b,g[O[1]]=E}catch(D){for(D instanceof Error?console.warn("[".concat(D.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),E=sa,b=(w=ut(sa)).setAlpha(Sc(w.getAlpha())).toRgbString(),k=0;k<xs.length;k++)g[(O=xs[k])[0]]=b,g[O[1]]=E}return g}((n=o?.color)!==null&&n!==void 0?n:""),m=o.dense?"0.45em":"";return I.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ct(ct(ct(ct(ct({},s&&{fontSize:s}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),h),r),role:"status","aria-live":"polite","aria-label":"Loading"},I.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},I.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ct({},m&&{borderWidth:m})}),I.createElement(Gr,{className:"OP-annulus-sector-text",text:o?.text,textColor:o?.textColor})))},Q5=function(o){var n=Object(o).variant,i=n===void 0?"disc":n;return i==="dotted"?I.createElement(P5,ct({},o)):i==="spokes"?I.createElement(j5,ct({},o)):i==="disc"?I.createElement(Y5,ct({},o)):i==="split-disc"?I.createElement(G5,ct({},o)):i==="track-disc"?I.createElement(V5,ct({},o)):null};Ze(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(o,n){return"--four-square-phase".concat(n+1,"-color")});Ze(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(o,n){return"--mosaic-phase".concat(n+1,"-color")});Ze(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(o,n){return"--riple-phase".concat(n+1,"-color")});Ze(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var Il=Array.from({length:4},function(o,n){return"--TD-pulsate-phase".concat(n+1,"-color")}),Z5=function(o){var n,i=Xr(o?.style,o?.size),r=i.styles,s=i.fontSize,u=o?.easing,f=jr(o?.speedPlus,"1.2s").animationPeriod,h=function(m){var p={};if(m instanceof Array){for(var g=Vr(m,Il.length),_=0;_<g.length&&!(_>=4);_++)p[Il[_]]=g[_];return p}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<Il.length;x++)p[Il[x]]=m}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),x=0;x<Il.length;x++)p[Il[x]]=sa}return p}((n=o?.color)!==null&&n!==void 0?n:"");return I.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:ct(ct(ct(ct(ct({},s&&{fontSize:s}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),h),r),role:"status","aria-live":"polite","aria-label":"Loading"},I.createElement("span",{className:"rli-d-i-b pulsate-indicator"},I.createElement("span",{className:"rli-d-i-b pulsate-dot"}),I.createElement("span",{className:"rli-d-i-b pulsate-dot"}),I.createElement("span",{className:"rli-d-i-b pulsate-dot"})),I.createElement(Gr,{staticText:!0,text:o?.text,textColor:o?.textColor}))};Ze(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var to=Array.from({length:4},function(o,n){return"--TD-brick-stack-phase".concat(n+1,"-color")}),K5=function(o){var n,i=Xr(o?.style,o?.size),r=i.styles,s=i.fontSize,u=o?.easing,f=jr(o?.speedPlus,"1s").animationPeriod,h=function(m){var p={};if(m instanceof Array){for(var g=Vr(m,to.length),_=0;_<g.length&&!(_>=4);_++)p[to[_]]=g[_];return p}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<to.length;x++)p[to[x]]=m}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),x=0;x<to.length;x++)p[to[x]]=sa}return p}((n=o?.color)!==null&&n!==void 0?n:"");return I.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:ct(ct(ct(ct(ct({},s&&{fontSize:s}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),h),r),role:"status","aria-live":"polite","aria-label":"Loading"},I.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},I.createElement("span",{className:"rli-d-i-b brick-stack"})),I.createElement(Gr,{staticText:!0,text:o?.text,textColor:o?.textColor}))};Ze(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var eo=Array.from({length:4},function(o,n){return"--TD-bob-phase".concat(n+1,"-color")}),J5=function(o){var n,i=Xr(o?.style,o?.size),r=i.styles,s=i.fontSize,u=o?.easing,f=jr(o?.speedPlus,"1.2s").animationPeriod,h=function(m){var p={};if(m instanceof Array){for(var g=Vr(m,eo.length),_=0;_<g.length&&!(_>=4);_++)p[eo[_]]=g[_];return p}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<eo.length;x++)p[eo[x]]=m}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),x=0;x<eo.length;x++)p[eo[x]]=sa}return p}((n=o?.color)!==null&&n!==void 0?n:"");return I.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:ct(ct(ct(ct(ct({},s&&{fontSize:s}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),h),r),role:"status","aria-live":"polite","aria-label":"Loading"},I.createElement("span",{className:"bob-indicator"},I.createElement("span",{className:"bobbing"})),I.createElement(Gr,{staticText:!0,text:o?.text,textColor:o?.textColor}))};Ze(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var no=Array.from({length:4},function(o,n){return"--TD-bounce-phase".concat(n+1,"-color")}),$5=function(o){var n,i=Xr(o?.style,o?.size),r=i.styles,s=i.fontSize,u=o?.easing,f=jr(o?.speedPlus,"0.5s").animationPeriod,h=function(m){var p={};if(m instanceof Array){for(var g=Vr(m,no.length),_=0;_<g.length&&!(_>=4);_++)p[no[_]]=g[_];return p}try{if(typeof m!="string")throw new Error("Color String expected");for(var x=0;x<no.length;x++)p[no[x]]=m}catch{for(x=0;x<no.length;x++)p[no[x]]=sa}return p}((n=o?.color)!==null&&n!==void 0?n:"");return I.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:ct(ct(ct(ct(ct({},s&&{fontSize:s}),f&&{"--rli-animation-duration":f}),u&&{"--rli-animation-function":u}),h),r)},I.createElement("span",{className:"wrapper"},I.createElement("span",{className:"group"},I.createElement("span",{className:"rli-d-i-b dot"}),I.createElement("span",{className:"rli-d-i-b dot"}),I.createElement("span",{className:"rli-d-i-b dot"})),I.createElement("span",{className:"group"},I.createElement("span",{className:"rli-d-i-b shadow"}),I.createElement("span",{className:"rli-d-i-b shadow"}),I.createElement("span",{className:"rli-d-i-b shadow"}))),I.createElement(Gr,{staticText:!0,text:o?.text,textColor:o?.textColor,style:{marginTop:"2px"}}))},AO=function(o){var n=Object(o).variant,i=n===void 0?"pulsate":n;return i==="pulsate"?I.createElement(Z5,ct({},o)):i==="brick-stack"?I.createElement(K5,ct({},o)):i==="bob"?I.createElement(J5,ct({},o)):i==="bounce"?I.createElement($5,ct({},o)):null};Ze(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(o,n){return"--shape-phase".concat(n+1,"-color")});Ze(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(o,n){return"--trophySpin-phase".concat(n+1,"-color")});Ze(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(o,n){return"--slab-phase".concat(n+1,"-color")});Ze(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(o,n){return"--life-line-phase".concat(n+1,"-color")});function Mr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function oy(o,n){o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ca={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bo={duration:.5,overwrite:!1,delay:0},R0,sn,ge,Ma=1e8,re=1/Ma,Jh=Math.PI*2,F5=Jh/4,W5=0,sy=Math.sqrt,I5=Math.cos,tT=Math.sin,tn=function(n){return typeof n=="string"},we=function(n){return typeof n=="function"},Lr=function(n){return typeof n=="number"},C0=function(n){return typeof n>"u"},lr=function(n){return typeof n=="object"},qn=function(n){return n!==!1},z0=function(){return typeof window<"u"},Oc=function(n){return we(n)||tn(n)},uy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,$h=/(?:-?\.?\d|\.)+/gi,cy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,so=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fy=/[+-]=-?[.\d]+/,dy=/[^,'"\[\]\s]+/gi,eT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,tr,Fh,N0,fa={},$c={},hy,py=function(n){return($c=yo(n,fa))&&Xn},U0=function(n,i){return console.warn("Invalid property",n,"set to",i,"Missing plugin? gsap.registerPlugin()")},Qs=function(n,i){return!i&&console.warn(n)},my=function(n,i){return n&&(fa[n]=i)&&$c&&($c[n]=i)||fa},Zs=function(){return 0},nT={suppressEvents:!0,isStart:!0,kill:!1},qc={suppressEvents:!0,kill:!1},aT={suppressEvents:!0},H0={},Si=[],Wh={},gy,ra={},Ch={},ib=30,Yc=[],L0="",B0=function(n){var i=n[0],r,s;if(lr(i)||we(i)||(n=[n]),!(r=(i._gsap||{}).harness)){for(s=Yc.length;s--&&!Yc[s].targetTest(i););r=Yc[s]}for(s=n.length;s--;)n[s]&&(n[s]._gsap||(n[s]._gsap=new Yy(n[s],r)))||n.splice(s,1);return n},nl=function(n){return n._gsap||B0(Ra(n))[0]._gsap},vy=function(n,i,r){return(r=n[i])&&we(r)?n[i]():C0(r)&&n.getAttribute&&n.getAttribute(i)||r},Yn=function(n,i){return(n=n.split(",")).forEach(i)||n},Me=function(n){return Math.round(n*1e5)/1e5||0},Pe=function(n){return Math.round(n*1e7)/1e7||0},fo=function(n,i){var r=i.charAt(0),s=parseFloat(i.substr(2));return n=parseFloat(n),r==="+"?n+s:r==="-"?n-s:r==="*"?n*s:n/s},rT=function(n,i){for(var r=i.length,s=0;n.indexOf(i[s])<0&&++s<r;);return s<r},Fc=function(){var n=Si.length,i=Si.slice(0),r,s;for(Wh={},Si.length=0,r=0;r<n;r++)s=i[r],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},q0=function(n){return!!(n._initted||n._startAt||n.add)},by=function(n,i,r,s){Si.length&&!sn&&Fc(),n.render(i,r,!!(sn&&i<0&&q0(n))),Si.length&&!sn&&Fc()},yy=function(n){var i=parseFloat(n);return(i||i===0)&&(n+"").match(dy).length<2?i:tn(n)?n.trim():n},_y=function(n){return n},da=function(n,i){for(var r in i)r in n||(n[r]=i[r]);return n},iT=function(n){return function(i,r){for(var s in r)s in i||s==="duration"&&n||s==="ease"||(i[s]=r[s])}},yo=function(n,i){for(var r in i)n[r]=i[r];return n},lb=function o(n,i){for(var r in i)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(n[r]=lr(i[r])?o(n[r]||(n[r]={}),i[r]):i[r]);return n},Wc=function(n,i){var r={},s;for(s in n)s in i||(r[s]=n[s]);return r},zs=function(n){var i=n.parent||ye,r=n.keyframes?iT(gn(n.keyframes)):da;if(qn(n.inherit))for(;i;)r(n,i.vars.defaults),i=i.parent||i._dp;return n},lT=function(n,i){for(var r=n.length,s=r===i.length;s&&r--&&n[r]===i[r];);return r<0},xy=function(n,i,r,s,u){var f=n[s],h;if(u)for(h=i[u];f&&f[u]>h;)f=f._prev;return f?(i._next=f._next,f._next=i):(i._next=n[r],n[r]=i),i._next?i._next._prev=i:n[s]=i,i._prev=f,i.parent=i._dp=n,i},df=function(n,i,r,s){r===void 0&&(r="_first"),s===void 0&&(s="_last");var u=i._prev,f=i._next;u?u._next=f:n[r]===i&&(n[r]=f),f?f._prev=u:n[s]===i&&(n[s]=u),i._next=i._prev=i.parent=null},wi=function(n,i){n.parent&&(!i||n.parent.autoRemoveChildren)&&n.parent.remove&&n.parent.remove(n),n._act=0},al=function(n,i){if(n&&(!i||i._end>n._dur||i._start<0))for(var r=n;r;)r._dirty=1,r=r.parent;return n},oT=function(n){for(var i=n.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return n},Ih=function(n,i,r,s){return n._startAt&&(sn?n._startAt.revert(qc):n.vars.immediateRender&&!n.vars.autoRevert||n._startAt.render(i,!0,s))},sT=function o(n){return!n||n._ts&&o(n.parent)},ob=function(n){return n._repeat?_o(n._tTime,n=n.duration()+n._rDelay)*n:0},_o=function(n,i){var r=Math.floor(n=Pe(n/i));return n&&r===n?r-1:r},Ic=function(n,i){return(n-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},hf=function(n){return n._end=Pe(n._start+(n._tDur/Math.abs(n._ts||n._rts||re)||0))},pf=function(n,i){var r=n._dp;return r&&r.smoothChildTiming&&n._ts&&(n._start=Pe(r._time-(n._ts>0?i/n._ts:((n._dirty?n.totalDuration():n._tDur)-i)/-n._ts)),hf(n),r._dirty||al(r,n)),n},Ty=function(n,i){var r;if((i._time||!i._dur&&i._initted||i._start<n._time&&(i._dur||!i.add))&&(r=Ic(n.rawTime(),i),(!i._dur||iu(0,i.totalDuration(),r)-i._tTime>re)&&i.render(r,!0)),al(n,i)._dp&&n._initted&&n._time>=n._dur&&n._ts){if(n._dur<n.duration())for(r=n;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;n._zTime=-re}},nr=function(n,i,r,s){return i.parent&&wi(i),i._start=Pe((Lr(r)?r:r||n!==ye?Aa(n,r,i):n._time)+i._delay),i._end=Pe(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),xy(n,i,"_first","_last",n._sort?"_start":0),t0(i)||(n._recent=i),s||Ty(n,i),n._ts<0&&pf(n,n._tTime),n},Sy=function(n,i){return(fa.ScrollTrigger||U0("scrollTrigger",i))&&fa.ScrollTrigger.create(i,n)},Oy=function(n,i,r,s,u){if(P0(n,i,u),!n._initted)return 1;if(!r&&n._pt&&!sn&&(n._dur&&n.vars.lazy!==!1||!n._dur&&n.vars.lazy)&&gy!==la.frame)return Si.push(n),n._lazy=[u,s],1},uT=function o(n){var i=n.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||o(i))},t0=function(n){var i=n.data;return i==="isFromStart"||i==="isStart"},cT=function(n,i,r,s){var u=n.ratio,f=i<0||!i&&(!n._start&&uT(n)&&!(!n._initted&&t0(n))||(n._ts<0||n._dp._ts<0)&&!t0(n))?0:1,h=n._rDelay,m=0,p,g,_;if(h&&n._repeat&&(m=iu(0,n._tDur,i),g=_o(m,h),n._yoyo&&g&1&&(f=1-f),g!==_o(n._tTime,h)&&(u=1-f,n.vars.repeatRefresh&&n._initted&&n.invalidate())),f!==u||sn||s||n._zTime===re||!i&&n._zTime){if(!n._initted&&Oy(n,i,s,r,m))return;for(_=n._zTime,n._zTime=i||(r?re:0),r||(r=i&&!_),n.ratio=f,n._from&&(f=1-f),n._time=0,n._tTime=m,p=n._pt;p;)p.r(f,p.d),p=p._next;i<0&&Ih(n,i,r,!0),n._onUpdate&&!r&&ua(n,"onUpdate"),m&&n._repeat&&!r&&n.parent&&ua(n,"onRepeat"),(i>=n._tDur||i<0)&&n.ratio===f&&(f&&wi(n,1),!r&&!sn&&(ua(n,f?"onComplete":"onReverseComplete",!0),n._prom&&n._prom()))}else n._zTime||(n._zTime=i)},fT=function(n,i,r){var s;if(r>i)for(s=n._first;s&&s._start<=r;){if(s.data==="isPause"&&s._start>i)return s;s=s._next}else for(s=n._last;s&&s._start>=r;){if(s.data==="isPause"&&s._start<i)return s;s=s._prev}},xo=function(n,i,r,s){var u=n._repeat,f=Pe(i)||0,h=n._tTime/n._tDur;return h&&!s&&(n._time*=f/n._dur),n._dur=f,n._tDur=u?u<0?1e10:Pe(f*(u+1)+n._rDelay*u):f,h>0&&!s&&pf(n,n._tTime=n._tDur*h),n.parent&&hf(n),r||al(n.parent,n),n},sb=function(n){return n instanceof An?al(n):xo(n,n._dur)},dT={_start:0,endTime:Zs,totalDuration:Zs},Aa=function o(n,i,r){var s=n.labels,u=n._recent||dT,f=n.duration()>=Ma?u.endTime(!1):n._dur,h,m,p;return tn(i)&&(isNaN(i)||i in s)?(m=i.charAt(0),p=i.substr(-1)==="%",h=i.indexOf("="),m==="<"||m===">"?(h>=0&&(i=i.replace(/=/,"")),(m==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(i.substr(1))||0)*(p?(h<0?u:r).totalDuration()/100:1)):h<0?(i in s||(s[i]=f),s[i]):(m=parseFloat(i.charAt(h-1)+i.substr(h+1)),p&&r&&(m=m/100*(gn(r)?r[0]:r).totalDuration()),h>1?o(n,i.substr(0,h-1),r)+m:f+m)):i==null?f:+i},Ns=function(n,i,r){var s=Lr(i[1]),u=(s?2:1)+(n<2?0:1),f=i[u],h,m;if(s&&(f.duration=i[1]),f.parent=r,n){for(h=f,m=r;m&&!("immediateRender"in h);)h=m.vars.defaults||{},m=qn(m.vars.inherit)&&m.parent;f.immediateRender=qn(h.immediateRender),n<2?f.runBackwards=1:f.startAt=i[u-1]}return new Ye(i[0],f,i[u+1])},Di=function(n,i){return n||n===0?i(n):i},iu=function(n,i,r){return r<n?n:r>i?i:r},pn=function(n,i){return!tn(n)||!(i=eT.exec(n))?"":i[1]},hT=function(n,i,r){return Di(r,function(s){return iu(n,i,s)})},e0=[].slice,Ey=function(n,i){return n&&lr(n)&&"length"in n&&(!i&&!n.length||n.length-1 in n&&lr(n[0]))&&!n.nodeType&&n!==tr},pT=function(n,i,r){return r===void 0&&(r=[]),n.forEach(function(s){var u;return tn(s)&&!i||Ey(s,1)?(u=r).push.apply(u,Ra(s)):r.push(s)})||r},Ra=function(n,i,r){return ge&&!i&&ge.selector?ge.selector(n):tn(n)&&!r&&(Fh||!To())?e0.call((i||N0).querySelectorAll(n),0):gn(n)?pT(n,r):Ey(n)?e0.call(n,0):n?[n]:[]},n0=function(n){return n=Ra(n)[0]||Qs("Invalid scope")||{},function(i){var r=n.current||n.nativeElement||n;return Ra(i,r.querySelectorAll?r:r===n?Qs("Invalid scope")||N0.createElement("div"):n)}},wy=function(n){return n.sort(function(){return .5-Math.random()})},Ay=function(n){if(we(n))return n;var i=lr(n)?n:{each:n},r=rl(i.ease),s=i.from||0,u=parseFloat(i.base)||0,f={},h=s>0&&s<1,m=isNaN(s)||h,p=i.axis,g=s,_=s;return tn(s)?g=_={center:.5,edges:.5,end:1}[s]||0:!h&&m&&(g=s[0],_=s[1]),function(x,y,O){var b=(O||i).length,E=f[b],w,k,D,R,C,X,N,G,P;if(!E){if(P=i.grid==="auto"?0:(i.grid||[1,Ma])[1],!P){for(N=-Ma;N<(N=O[P++].getBoundingClientRect().left)&&P<b;);P<b&&P--}for(E=f[b]=[],w=m?Math.min(P,b)*g-.5:s%P,k=P===Ma?0:m?b*_/P-.5:s/P|0,N=0,G=Ma,X=0;X<b;X++)D=X%P-w,R=k-(X/P|0),E[X]=C=p?Math.abs(p==="y"?R:D):sy(D*D+R*R),C>N&&(N=C),C<G&&(G=C);s==="random"&&wy(E),E.max=N-G,E.min=G,E.v=b=(parseFloat(i.amount)||parseFloat(i.each)*(P>b?b-1:p?p==="y"?b/P:P:Math.max(P,b/P))||0)*(s==="edges"?-1:1),E.b=b<0?u-b:u,E.u=pn(i.amount||i.each)||0,r=r&&b<0?Ly(r):r}return b=(E[x]-E.min)/E.max||0,Pe(E.b+(r?r(b):b)*E.v)+E.u}},a0=function(n){var i=Math.pow(10,((n+"").split(".")[1]||"").length);return function(r){var s=Pe(Math.round(parseFloat(r)/n)*n*i);return(s-s%1)/i+(Lr(r)?0:pn(r))}},ky=function(n,i){var r=gn(n),s,u;return!r&&lr(n)&&(s=r=n.radius||Ma,n.values?(n=Ra(n.values),(u=!Lr(n[0]))&&(s*=s)):n=a0(n.increment)),Di(i,r?we(n)?function(f){return u=n(f),Math.abs(u-f)<=s?u:f}:function(f){for(var h=parseFloat(u?f.x:f),m=parseFloat(u?f.y:0),p=Ma,g=0,_=n.length,x,y;_--;)u?(x=n[_].x-h,y=n[_].y-m,x=x*x+y*y):x=Math.abs(n[_]-h),x<p&&(p=x,g=_);return g=!s||p<=s?n[g]:f,u||g===f||Lr(f)?g:g+pn(f)}:a0(n))},Dy=function(n,i,r,s){return Di(gn(n)?!i:r===!0?!!(r=0):!s,function(){return gn(n)?n[~~(Math.random()*n.length)]:(r=r||1e-5)&&(s=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((n-r/2+Math.random()*(i-n+r*.99))/r)*r*s)/s})},mT=function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return function(s){return i.reduce(function(u,f){return f(u)},s)}},gT=function(n,i){return function(r){return n(parseFloat(r))+(i||pn(r))}},vT=function(n,i,r){return Ry(n,i,0,1,r)},My=function(n,i,r){return Di(r,function(s){return n[~~i(s)]})},bT=function o(n,i,r){var s=i-n;return gn(n)?My(n,o(0,n.length),i):Di(r,function(u){return(s+(u-n)%s)%s+n})},yT=function o(n,i,r){var s=i-n,u=s*2;return gn(n)?My(n,o(0,n.length-1),i):Di(r,function(f){return f=(u+(f-n)%u)%u||0,n+(f>s?u-f:f)})},Ks=function(n){for(var i=0,r="",s,u,f,h;~(s=n.indexOf("random(",i));)f=n.indexOf(")",s),h=n.charAt(s+7)==="[",u=n.substr(s+7,f-s-7).match(h?dy:$h),r+=n.substr(i,s-i)+Dy(h?u:+u[0],h?0:+u[1],+u[2]||1e-5),i=f+1;return r+n.substr(i,n.length-i)},Ry=function(n,i,r,s,u){var f=i-n,h=s-r;return Di(u,function(m){return r+((m-n)/f*h||0)})},_T=function o(n,i,r,s){var u=isNaN(n+i)?0:function(y){return(1-y)*n+y*i};if(!u){var f=tn(n),h={},m,p,g,_,x;if(r===!0&&(s=1)&&(r=null),f)n={p:n},i={p:i};else if(gn(n)&&!gn(i)){for(g=[],_=n.length,x=_-2,p=1;p<_;p++)g.push(o(n[p-1],n[p]));_--,u=function(O){O*=_;var b=Math.min(x,~~O);return g[b](O-b)},r=i}else s||(n=yo(gn(n)?[]:{},n));if(!g){for(m in i)Y0.call(h,n,m,"get",i[m]);u=function(O){return G0(O,h)||(f?n.p:n)}}}return Di(r,u)},ub=function(n,i,r){var s=n.labels,u=Ma,f,h,m;for(f in s)h=s[f]-i,h<0==!!r&&h&&u>(h=Math.abs(h))&&(m=f,u=h);return m},ua=function(n,i,r){var s=n.vars,u=s[i],f=ge,h=n._ctx,m,p,g;if(u)return m=s[i+"Params"],p=s.callbackScope||n,r&&Si.length&&Fc(),h&&(ge=h),g=m?u.apply(p,m):u.call(p),ge=f,g},ws=function(n){return wi(n),n.scrollTrigger&&n.scrollTrigger.kill(!!sn),n.progress()<1&&ua(n,"onInterrupt"),n},uo,Cy=[],zy=function(n){if(n)if(n=!n.name&&n.default||n,z0()||n.headless){var i=n.name,r=we(n),s=i&&!r&&n.init?function(){this._props=[]}:n,u={init:Zs,render:G0,add:Y0,kill:HT,modifier:UT,rawVars:0},f={targetTest:0,get:0,getSetter:X0,aliases:{},register:0};if(To(),n!==s){if(ra[i])return;da(s,da(Wc(n,u),f)),yo(s.prototype,yo(u,Wc(n,f))),ra[s.prop=i]=s,n.targetTest&&(Yc.push(s),H0[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}my(i,s),n.register&&n.register(Xn,s,Pn)}else Cy.push(n)},ae=255,As={aqua:[0,ae,ae],lime:[0,ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ae],navy:[0,0,128],white:[ae,ae,ae],olive:[128,128,0],yellow:[ae,ae,0],orange:[ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ae,0,0],pink:[ae,192,203],cyan:[0,ae,ae],transparent:[ae,ae,ae,0]},zh=function(n,i,r){return n+=n<0?1:n>1?-1:0,(n*6<1?i+(r-i)*n*6:n<.5?r:n*3<2?i+(r-i)*(2/3-n)*6:i)*ae+.5|0},Ny=function(n,i,r){var s=n?Lr(n)?[n>>16,n>>8&ae,n&ae]:0:As.black,u,f,h,m,p,g,_,x,y,O;if(!s){if(n.substr(-1)===","&&(n=n.substr(0,n.length-1)),As[n])s=As[n];else if(n.charAt(0)==="#"){if(n.length<6&&(u=n.charAt(1),f=n.charAt(2),h=n.charAt(3),n="#"+u+u+f+f+h+h+(n.length===5?n.charAt(4)+n.charAt(4):"")),n.length===9)return s=parseInt(n.substr(1,6),16),[s>>16,s>>8&ae,s&ae,parseInt(n.substr(7),16)/255];n=parseInt(n.substr(1),16),s=[n>>16,n>>8&ae,n&ae]}else if(n.substr(0,3)==="hsl"){if(s=O=n.match($h),!i)m=+s[0]%360/360,p=+s[1]/100,g=+s[2]/100,f=g<=.5?g*(p+1):g+p-g*p,u=g*2-f,s.length>3&&(s[3]*=1),s[0]=zh(m+1/3,u,f),s[1]=zh(m,u,f),s[2]=zh(m-1/3,u,f);else if(~n.indexOf("="))return s=n.match(cy),r&&s.length<4&&(s[3]=1),s}else s=n.match($h)||As.transparent;s=s.map(Number)}return i&&!O&&(u=s[0]/ae,f=s[1]/ae,h=s[2]/ae,_=Math.max(u,f,h),x=Math.min(u,f,h),g=(_+x)/2,_===x?m=p=0:(y=_-x,p=g>.5?y/(2-_-x):y/(_+x),m=_===u?(f-h)/y+(f<h?6:0):_===f?(h-u)/y+2:(u-f)/y+4,m*=60),s[0]=~~(m+.5),s[1]=~~(p*100+.5),s[2]=~~(g*100+.5)),r&&s.length<4&&(s[3]=1),s},Uy=function(n){var i=[],r=[],s=-1;return n.split(Oi).forEach(function(u){var f=u.match(so)||[];i.push.apply(i,f),r.push(s+=f.length+1)}),i.c=r,i},cb=function(n,i,r){var s="",u=(n+s).match(Oi),f=i?"hsla(":"rgba(",h=0,m,p,g,_;if(!u)return n;if(u=u.map(function(x){return(x=Ny(x,i,1))&&f+(i?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),r&&(g=Uy(n),m=r.c,m.join(s)!==g.c.join(s)))for(p=n.replace(Oi,"1").split(so),_=p.length-1;h<_;h++)s+=p[h]+(~m.indexOf(h)?u.shift()||f+"0,0,0,0)":(g.length?g:u.length?u:r).shift());if(!p)for(p=n.split(Oi),_=p.length-1;h<_;h++)s+=p[h]+u[h];return s+p[_]},Oi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",n;for(n in As)o+="|"+n+"\\b";return new RegExp(o+")","gi")}(),xT=/hsl[a]?\(/,Hy=function(n){var i=n.join(" "),r;if(Oi.lastIndex=0,Oi.test(i))return r=xT.test(i),n[1]=cb(n[1],r),n[0]=cb(n[0],r,Uy(n[1])),!0},Js,la=function(){var o=Date.now,n=500,i=33,r=o(),s=r,u=1e3/240,f=u,h=[],m,p,g,_,x,y,O=function b(E){var w=o()-s,k=E===!0,D,R,C,X;if((w>n||w<0)&&(r+=w-i),s+=w,C=s-r,D=C-f,(D>0||k)&&(X=++_.frame,x=C-_.time*1e3,_.time=C=C/1e3,f+=D+(D>=u?4:u-D),R=1),k||(m=p(b)),R)for(y=0;y<h.length;y++)h[y](C,x,X,E)};return _={time:0,frame:0,tick:function(){O(!0)},deltaRatio:function(E){return x/(1e3/(E||60))},wake:function(){hy&&(!Fh&&z0()&&(tr=Fh=window,N0=tr.document||{},fa.gsap=Xn,(tr.gsapVersions||(tr.gsapVersions=[])).push(Xn.version),py($c||tr.GreenSockGlobals||!tr.gsap&&tr||{}),Cy.forEach(zy)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,m&&_.sleep(),p=g||function(E){return setTimeout(E,f-_.time*1e3+1|0)},Js=1,O(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(m),Js=0,p=Zs},lagSmoothing:function(E,w){n=E||1/0,i=Math.min(w||33,n)},fps:function(E){u=1e3/(E||240),f=_.time*1e3+u},add:function(E,w,k){var D=w?function(R,C,X,N){E(R,C,X,N),_.remove(D)}:E;return _.remove(E),h[k?"unshift":"push"](D),To(),D},remove:function(E,w){~(w=h.indexOf(E))&&h.splice(w,1)&&y>=w&&y--},_listeners:h},_}(),To=function(){return!Js&&la.wake()},Yt={},TT=/^[\d.\-M][\d.\-,\s]/,ST=/["']/g,OT=function(n){for(var i={},r=n.substr(1,n.length-3).split(":"),s=r[0],u=1,f=r.length,h,m,p;u<f;u++)m=r[u],h=u!==f-1?m.lastIndexOf(","):m.length,p=m.substr(0,h),i[s]=isNaN(p)?p.replace(ST,"").trim():+p,s=m.substr(h+1).trim();return i},ET=function(n){var i=n.indexOf("(")+1,r=n.indexOf(")"),s=n.indexOf("(",i);return n.substring(i,~s&&s<r?n.indexOf(")",r+1):r)},wT=function(n){var i=(n+"").split("("),r=Yt[i[0]];return r&&i.length>1&&r.config?r.config.apply(null,~n.indexOf("{")?[OT(i[1])]:ET(n).split(",").map(yy)):Yt._CE&&TT.test(n)?Yt._CE("",n):r},Ly=function(n){return function(i){return 1-n(1-i)}},By=function o(n,i){for(var r=n._first,s;r;)r instanceof An?o(r,i):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==i&&(r.timeline?o(r.timeline,i):(s=r._ease,r._ease=r._yEase,r._yEase=s,r._yoyo=i)),r=r._next},rl=function(n,i){return n&&(we(n)?n:Yt[n]||wT(n))||i},bl=function(n,i,r,s){r===void 0&&(r=function(m){return 1-i(1-m)}),s===void 0&&(s=function(m){return m<.5?i(m*2)/2:1-i((1-m)*2)/2});var u={easeIn:i,easeOut:r,easeInOut:s},f;return Yn(n,function(h){Yt[h]=fa[h]=u,Yt[f=h.toLowerCase()]=r;for(var m in u)Yt[f+(m==="easeIn"?".in":m==="easeOut"?".out":".inOut")]=Yt[h+"."+m]=u[m]}),u},qy=function(n){return function(i){return i<.5?(1-n(1-i*2))/2:.5+n((i-.5)*2)/2}},Nh=function o(n,i,r){var s=i>=1?i:1,u=(r||(n?.3:.45))/(i<1?i:1),f=u/Jh*(Math.asin(1/s)||0),h=function(g){return g===1?1:s*Math.pow(2,-10*g)*tT((g-f)*u)+1},m=n==="out"?h:n==="in"?function(p){return 1-h(1-p)}:qy(h);return u=Jh/u,m.config=function(p,g){return o(n,p,g)},m},Uh=function o(n,i){i===void 0&&(i=1.70158);var r=function(f){return f?--f*f*((i+1)*f+i)+1:0},s=n==="out"?r:n==="in"?function(u){return 1-r(1-u)}:qy(r);return s.config=function(u){return o(n,u)},s};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,n){var i=n<5?n+1:n;bl(o+",Power"+(i-1),n?function(r){return Math.pow(r,i)}:function(r){return r},function(r){return 1-Math.pow(1-r,i)},function(r){return r<.5?Math.pow(r*2,i)/2:1-Math.pow((1-r)*2,i)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;bl("Elastic",Nh("in"),Nh("out"),Nh());(function(o,n){var i=1/n,r=2*i,s=2.5*i,u=function(h){return h<i?o*h*h:h<r?o*Math.pow(h-1.5/n,2)+.75:h<s?o*(h-=2.25/n)*h+.9375:o*Math.pow(h-2.625/n,2)+.984375};bl("Bounce",function(f){return 1-u(1-f)},u)})(7.5625,2.75);bl("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});bl("Circ",function(o){return-(sy(1-o*o)-1)});bl("Sine",function(o){return o===1?1:-I5(o*F5)+1});bl("Back",Uh("in"),Uh("out"),Uh());Yt.SteppedEase=Yt.steps=fa.SteppedEase={config:function(n,i){n===void 0&&(n=1);var r=1/n,s=n+(i?0:1),u=i?1:0,f=1-re;return function(h){return((s*iu(0,f,h)|0)+u)*r}}};bo.ease=Yt["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return L0+=o+","+o+"Params,"});var Yy=function(n,i){this.id=W5++,n._gsap=this,this.target=n,this.harness=i,this.get=i?i.get:vy,this.set=i?i.getSetter:X0},$s=function(){function o(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,xo(this,+i.duration,1,1),this.data=i.data,ge&&(this._ctx=ge,ge.data.push(this)),Js||la.wake()}var n=o.prototype;return n.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},n.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},n.totalDuration=function(r){return arguments.length?(this._dirty=0,xo(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},n.totalTime=function(r,s){if(To(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(pf(this,r),!u._dp||u.parent||Ty(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&nr(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===re||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),by(this,r,s)),this},n.time=function(r,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+ob(this))%(this._dur+this._rDelay)||(r?this._dur:0),s):this._time},n.totalProgress=function(r,s){return arguments.length?this.totalTime(this.totalDuration()*r,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},n.progress=function(r,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+ob(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},n.iteration=function(r,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*u,s):this._repeat?_o(this._tTime,u)+1:1},n.timeScale=function(r,s){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===r)return this;var u=this.parent&&this._ts?Ic(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-re?0:this._rts,this.totalTime(iu(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),hf(this),oT(this)},n.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(To(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},n.startTime=function(r){if(arguments.length){this._start=r;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&nr(s,this,r-this._delay),this}return this._start},n.endTime=function(r){return this._start+(qn(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},n.rawTime=function(r){var s=this.parent||this._dp;return s?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ic(s.rawTime(r),this):this._tTime:this._tTime},n.revert=function(r){r===void 0&&(r=aT);var s=sn;return sn=r,q0(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),sn=s,this},n.globalTime=function(r){for(var s=this,u=arguments.length?r:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(r):u},n.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,sb(this)):this._repeat===-2?1/0:this._repeat},n.repeatDelay=function(r){if(arguments.length){var s=this._time;return this._rDelay=r,sb(this),s?this.time(s):this}return this._rDelay},n.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},n.seek=function(r,s){return this.totalTime(Aa(this,r),qn(s))},n.restart=function(r,s){return this.play().totalTime(r?-this._delay:0,qn(s)),this._dur||(this._zTime=-re),this},n.play=function(r,s){return r!=null&&this.seek(r,s),this.reversed(!1).paused(!1)},n.reverse=function(r,s){return r!=null&&this.seek(r||this.totalDuration(),s),this.reversed(!0).paused(!1)},n.pause=function(r,s){return r!=null&&this.seek(r,s),this.paused(!0)},n.resume=function(){return this.paused(!1)},n.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-re:0)),this):this._rts<0},n.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},n.isActive=function(){var r=this.parent||this._dp,s=this._start,u;return!!(!r||this._ts&&this._initted&&r.isActive()&&(u=r.rawTime(!0))>=s&&u<this.endTime(!0)-re)},n.eventCallback=function(r,s,u){var f=this.vars;return arguments.length>1?(s?(f[r]=s,u&&(f[r+"Params"]=u),r==="onUpdate"&&(this._onUpdate=s)):delete f[r],this):f[r]},n.then=function(r){var s=this;return new Promise(function(u){var f=we(r)?r:_y,h=function(){var p=s.then;s.then=null,we(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=p),u(f),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?h():s._prom=h})},n.kill=function(){ws(this)},o}();da($s.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var An=function(o){oy(n,o);function n(r,s){var u;return r===void 0&&(r={}),u=o.call(this,r)||this,u.labels={},u.smoothChildTiming=!!r.smoothChildTiming,u.autoRemoveChildren=!!r.autoRemoveChildren,u._sort=qn(r.sortChildren),ye&&nr(r.parent||ye,Mr(u),s),r.reversed&&u.reverse(),r.paused&&u.paused(!0),r.scrollTrigger&&Sy(Mr(u),r.scrollTrigger),u}var i=n.prototype;return i.to=function(s,u,f){return Ns(0,arguments,this),this},i.from=function(s,u,f){return Ns(1,arguments,this),this},i.fromTo=function(s,u,f,h){return Ns(2,arguments,this),this},i.set=function(s,u,f){return u.duration=0,u.parent=this,zs(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new Ye(s,u,Aa(this,f),1),this},i.call=function(s,u,f){return nr(this,Ye.delayedCall(0,s,u),f)},i.staggerTo=function(s,u,f,h,m,p,g){return f.duration=u,f.stagger=f.stagger||h,f.onComplete=p,f.onCompleteParams=g,f.parent=this,new Ye(s,f,Aa(this,m)),this},i.staggerFrom=function(s,u,f,h,m,p,g){return f.runBackwards=1,zs(f).immediateRender=qn(f.immediateRender),this.staggerTo(s,u,f,h,m,p,g)},i.staggerFromTo=function(s,u,f,h,m,p,g,_){return h.startAt=f,zs(h).immediateRender=qn(h.immediateRender),this.staggerTo(s,u,h,m,p,g,_)},i.render=function(s,u,f){var h=this._time,m=this._dirty?this.totalDuration():this._tDur,p=this._dur,g=s<=0?0:Pe(s),_=this._zTime<0!=s<0&&(this._initted||!p),x,y,O,b,E,w,k,D,R,C,X,N;if(this!==ye&&g>m&&s>=0&&(g=m),g!==this._tTime||f||_){if(h!==this._time&&p&&(g+=this._time-h,s+=this._time-h),x=g,R=this._start,D=this._ts,w=!D,_&&(p||(h=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(X=this._yoyo,E=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(E*100+s,u,f);if(x=Pe(g%E),g===m?(b=this._repeat,x=p):(C=Pe(g/E),b=~~C,b&&b===C&&(x=p,b--),x>p&&(x=p)),C=_o(this._tTime,E),!h&&this._tTime&&C!==b&&this._tTime-C*E-this._dur<=0&&(C=b),X&&b&1&&(x=p-x,N=1),b!==C&&!this._lock){var G=X&&C&1,P=G===(X&&b&1);if(b<C&&(G=!G),h=G?0:g%p?p:g,this._lock=1,this.render(h||(N?0:Pe(b*E)),u,!p)._lock=0,this._tTime=g,!u&&this.parent&&ua(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1),h&&h!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,m=this._tDur,P&&(this._lock=2,h=G?p:-1e-4,this.render(h,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!w)return this;By(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(k=fT(this,Pe(h),Pe(x)),k&&(g-=x-(x=k._start))),this._tTime=g,this._time=x,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,h=0),!h&&g&&!u&&!C&&(ua(this,"onStart"),this._tTime!==g))return this;if(x>=h&&s>=0)for(y=this._first;y;){if(O=y._next,(y._act||x>=y._start)&&y._ts&&k!==y){if(y.parent!==this)return this.render(s,u,f);if(y.render(y._ts>0?(x-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(x-y._start)*y._ts,u,f),x!==this._time||!this._ts&&!w){k=0,O&&(g+=this._zTime=-re);break}}y=O}else{y=this._last;for(var F=s<0?s:x;y;){if(O=y._prev,(y._act||F<=y._end)&&y._ts&&k!==y){if(y.parent!==this)return this.render(s,u,f);if(y.render(y._ts>0?(F-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(F-y._start)*y._ts,u,f||sn&&q0(y)),x!==this._time||!this._ts&&!w){k=0,O&&(g+=this._zTime=F?-re:re);break}}y=O}}if(k&&!u&&(this.pause(),k.render(x>=h?0:-re)._zTime=x>=h?1:-1,this._ts))return this._start=R,hf(this),this.render(s,u,f);this._onUpdate&&!u&&ua(this,"onUpdate",!0),(g===m&&this._tTime>=this.totalDuration()||!g&&h)&&(R===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(g===m&&this._ts>0||!g&&this._ts<0)&&wi(this,1),!u&&!(s<0&&!h)&&(g||h||!m)&&(ua(this,g===m&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<m&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(s,u){var f=this;if(Lr(u)||(u=Aa(this,u,s)),!(s instanceof $s)){if(gn(s))return s.forEach(function(h){return f.add(h,u)}),this;if(tn(s))return this.addLabel(s,u);if(we(s))s=Ye.delayedCall(0,s);else return this}return this!==s?nr(this,s,u):this},i.getChildren=function(s,u,f,h){s===void 0&&(s=!0),u===void 0&&(u=!0),f===void 0&&(f=!0),h===void 0&&(h=-Ma);for(var m=[],p=this._first;p;)p._start>=h&&(p instanceof Ye?u&&m.push(p):(f&&m.push(p),s&&m.push.apply(m,p.getChildren(!0,u,f)))),p=p._next;return m},i.getById=function(s){for(var u=this.getChildren(1,1,1),f=u.length;f--;)if(u[f].vars.id===s)return u[f]},i.remove=function(s){return tn(s)?this.removeLabel(s):we(s)?this.killTweensOf(s):(s.parent===this&&df(this,s),s===this._recent&&(this._recent=this._last),al(this))},i.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(la.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},i.addLabel=function(s,u){return this.labels[s]=Aa(this,u),this},i.removeLabel=function(s){return delete this.labels[s],this},i.addPause=function(s,u,f){var h=Ye.delayedCall(0,u||Zs,f);return h.data="isPause",this._hasPause=1,nr(this,h,Aa(this,s))},i.removePause=function(s){var u=this._first;for(s=Aa(this,s);u;)u._start===s&&u.data==="isPause"&&wi(u),u=u._next},i.killTweensOf=function(s,u,f){for(var h=this.getTweensOf(s,f),m=h.length;m--;)bi!==h[m]&&h[m].kill(s,u);return this},i.getTweensOf=function(s,u){for(var f=[],h=Ra(s),m=this._first,p=Lr(u),g;m;)m instanceof Ye?rT(m._targets,h)&&(p?(!bi||m._initted&&m._ts)&&m.globalTime(0)<=u&&m.globalTime(m.totalDuration())>u:!u||m.isActive())&&f.push(m):(g=m.getTweensOf(h,u)).length&&f.push.apply(f,g),m=m._next;return f},i.tweenTo=function(s,u){u=u||{};var f=this,h=Aa(f,s),m=u,p=m.startAt,g=m.onStart,_=m.onStartParams,x=m.immediateRender,y,O=Ye.to(f,da({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:h,overwrite:"auto",duration:u.duration||Math.abs((h-(p&&"time"in p?p.time:f._time))/f.timeScale())||re,onStart:function(){if(f.pause(),!y){var E=u.duration||Math.abs((h-(p&&"time"in p?p.time:f._time))/f.timeScale());O._dur!==E&&xo(O,E,0,1).render(O._time,!0,!0),y=1}g&&g.apply(O,_||[])}},u));return x?O.render(0):O},i.tweenFromTo=function(s,u,f){return this.tweenTo(u,da({startAt:{time:Aa(this,s)}},f))},i.recent=function(){return this._recent},i.nextLabel=function(s){return s===void 0&&(s=this._time),ub(this,Aa(this,s))},i.previousLabel=function(s){return s===void 0&&(s=this._time),ub(this,Aa(this,s),1)},i.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+re)},i.shiftChildren=function(s,u,f){f===void 0&&(f=0);for(var h=this._first,m=this.labels,p;h;)h._start>=f&&(h._start+=s,h._end+=s),h=h._next;if(u)for(p in m)m[p]>=f&&(m[p]+=s);return al(this)},i.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return o.prototype.invalidate.call(this,s)},i.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,f;u;)f=u._next,this.remove(u),u=f;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),al(this)},i.totalDuration=function(s){var u=0,f=this,h=f._last,m=Ma,p,g,_;if(arguments.length)return f.timeScale((f._repeat<0?f.duration():f.totalDuration())/(f.reversed()?-s:s));if(f._dirty){for(_=f.parent;h;)p=h._prev,h._dirty&&h.totalDuration(),g=h._start,g>m&&f._sort&&h._ts&&!f._lock?(f._lock=1,nr(f,h,g-h._delay,1)._lock=0):m=g,g<0&&h._ts&&(u-=g,(!_&&!f._dp||_&&_.smoothChildTiming)&&(f._start+=g/f._ts,f._time-=g,f._tTime-=g),f.shiftChildren(-g,!1,-1/0),m=0),h._end>u&&h._ts&&(u=h._end),h=p;xo(f,f===ye&&f._time>u?f._time:u,1,1),f._dirty=0}return f._tDur},n.updateRoot=function(s){if(ye._ts&&(by(ye,Ic(s,ye)),gy=la.frame),la.frame>=ib){ib+=ca.autoSleep||120;var u=ye._first;if((!u||!u._ts)&&ca.autoSleep&&la._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||la.sleep()}}},n}($s);da(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var AT=function(n,i,r,s,u,f,h){var m=new Pn(this._pt,n,i,0,1,Qy,null,u),p=0,g=0,_,x,y,O,b,E,w,k;for(m.b=r,m.e=s,r+="",s+="",(w=~s.indexOf("random("))&&(s=Ks(s)),f&&(k=[r,s],f(k,n,i),r=k[0],s=k[1]),x=r.match(Rh)||[];_=Rh.exec(s);)O=_[0],b=s.substring(p,_.index),y?y=(y+1)%5:b.substr(-5)==="rgba("&&(y=1),O!==x[g++]&&(E=parseFloat(x[g-1])||0,m._pt={_next:m._pt,p:b||g===1?b:",",s:E,c:O.charAt(1)==="="?fo(E,O)-E:parseFloat(O)-E,m:y&&y<4?Math.round:0},p=Rh.lastIndex);return m.c=p<s.length?s.substring(p,s.length):"",m.fp=h,(fy.test(s)||w)&&(m.e=0),this._pt=m,m},Y0=function(n,i,r,s,u,f,h,m,p,g){we(s)&&(s=s(u||0,n,f));var _=n[i],x=r!=="get"?r:we(_)?p?n[i.indexOf("set")||!we(n["get"+i.substr(3)])?i:"get"+i.substr(3)](p):n[i]():_,y=we(_)?p?CT:Gy:j0,O;if(tn(s)&&(~s.indexOf("random(")&&(s=Ks(s)),s.charAt(1)==="="&&(O=fo(x,s)+(pn(x)||0),(O||O===0)&&(s=O))),!g||x!==s||r0)return!isNaN(x*s)&&s!==""?(O=new Pn(this._pt,n,i,+x||0,s-(x||0),typeof _=="boolean"?NT:Vy,0,y),p&&(O.fp=p),h&&O.modifier(h,this,n),this._pt=O):(!_&&!(i in n)&&U0(i,s),AT.call(this,n,i,x,s,y,m||ca.stringFilter,p))},kT=function(n,i,r,s,u){if(we(n)&&(n=Us(n,u,i,r,s)),!lr(n)||n.style&&n.nodeType||gn(n)||uy(n))return tn(n)?Us(n,u,i,r,s):n;var f={},h;for(h in n)f[h]=Us(n[h],u,i,r,s);return f},Py=function(n,i,r,s,u,f){var h,m,p,g;if(ra[n]&&(h=new ra[n]).init(u,h.rawVars?i[n]:kT(i[n],s,u,f,r),r,s,f)!==!1&&(r._pt=m=new Pn(r._pt,u,n,0,1,h.render,h,0,h.priority),r!==uo))for(p=r._ptLookup[r._targets.indexOf(u)],g=h._props.length;g--;)p[h._props[g]]=m;return h},bi,r0,P0=function o(n,i,r){var s=n.vars,u=s.ease,f=s.startAt,h=s.immediateRender,m=s.lazy,p=s.onUpdate,g=s.runBackwards,_=s.yoyoEase,x=s.keyframes,y=s.autoRevert,O=n._dur,b=n._startAt,E=n._targets,w=n.parent,k=w&&w.data==="nested"?w.vars.targets:E,D=n._overwrite==="auto"&&!R0,R=n.timeline,C,X,N,G,P,F,it,W,_t,Tt,pt,H,Z;if(R&&(!x||!u)&&(u="none"),n._ease=rl(u,bo.ease),n._yEase=_?Ly(rl(_===!0?u:_,bo.ease)):0,_&&n._yoyo&&!n._repeat&&(_=n._yEase,n._yEase=n._ease,n._ease=_),n._from=!R&&!!s.runBackwards,!R||x&&!s.stagger){if(W=E[0]?nl(E[0]).harness:0,H=W&&s[W.prop],C=Wc(s,H0),b&&(b._zTime<0&&b.progress(1),i<0&&g&&h&&!y?b.render(-1,!0):b.revert(g&&O?qc:nT),b._lazy=0),f){if(wi(n._startAt=Ye.set(E,da({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!b&&qn(m),startAt:null,delay:0,onUpdate:p&&function(){return ua(n,"onUpdate")},stagger:0},f))),n._startAt._dp=0,n._startAt._sat=n,i<0&&(sn||!h&&!y)&&n._startAt.revert(qc),h&&O&&i<=0&&r<=0){i&&(n._zTime=i);return}}else if(g&&O&&!b){if(i&&(h=!1),N=da({overwrite:!1,data:"isFromStart",lazy:h&&!b&&qn(m),immediateRender:h,stagger:0,parent:w},C),H&&(N[W.prop]=H),wi(n._startAt=Ye.set(E,N)),n._startAt._dp=0,n._startAt._sat=n,i<0&&(sn?n._startAt.revert(qc):n._startAt.render(-1,!0)),n._zTime=i,!h)o(n._startAt,re,re);else if(!i)return}for(n._pt=n._ptCache=0,m=O&&qn(m)||m&&!O,X=0;X<E.length;X++){if(P=E[X],it=P._gsap||B0(E)[X]._gsap,n._ptLookup[X]=Tt={},Wh[it.id]&&Si.length&&Fc(),pt=k===E?X:k.indexOf(P),W&&(_t=new W).init(P,H||C,n,pt,k)!==!1&&(n._pt=G=new Pn(n._pt,P,_t.name,0,1,_t.render,_t,0,_t.priority),_t._props.forEach(function(et){Tt[et]=G}),_t.priority&&(F=1)),!W||H)for(N in C)ra[N]&&(_t=Py(N,C,n,pt,P,k))?_t.priority&&(F=1):Tt[N]=G=Y0.call(n,P,N,"get",C[N],pt,k,0,s.stringFilter);n._op&&n._op[X]&&n.kill(P,n._op[X]),D&&n._pt&&(bi=n,ye.killTweensOf(P,Tt,n.globalTime(i)),Z=!n.parent,bi=0),n._pt&&m&&(Wh[it.id]=1)}F&&Zy(n),n._onInit&&n._onInit(n)}n._onUpdate=p,n._initted=(!n._op||n._pt)&&!Z,x&&i<=0&&R.render(Ma,!0,!0)},DT=function(n,i,r,s,u,f,h,m){var p=(n._pt&&n._ptCache||(n._ptCache={}))[i],g,_,x,y;if(!p)for(p=n._ptCache[i]=[],x=n._ptLookup,y=n._targets.length;y--;){if(g=x[y][i],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==i&&g.fp!==i;)g=g._next;if(!g)return r0=1,n.vars[i]="+=0",P0(n,h),r0=0,m?Qs(i+" not eligible for reset"):1;p.push(g)}for(y=p.length;y--;)_=p[y],g=_._pt||_,g.s=(s||s===0)&&!u?s:g.s+(s||0)+f*g.c,g.c=r-g.s,_.e&&(_.e=Me(r)+pn(_.e)),_.b&&(_.b=g.s+pn(_.b))},MT=function(n,i){var r=n[0]?nl(n[0]).harness:0,s=r&&r.aliases,u,f,h,m;if(!s)return i;u=yo({},i);for(f in s)if(f in u)for(m=s[f].split(","),h=m.length;h--;)u[m[h]]=u[f];return u},RT=function(n,i,r,s){var u=i.ease||s||"power1.inOut",f,h;if(gn(i))h=r[n]||(r[n]=[]),i.forEach(function(m,p){return h.push({t:p/(i.length-1)*100,v:m,e:u})});else for(f in i)h=r[f]||(r[f]=[]),f==="ease"||h.push({t:parseFloat(n),v:i[f],e:u})},Us=function(n,i,r,s,u){return we(n)?n.call(i,r,s,u):tn(n)&&~n.indexOf("random(")?Ks(n):n},jy=L0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Xy={};Yn(jy+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Xy[o]=1});var Ye=function(o){oy(n,o);function n(r,s,u,f){var h;typeof s=="number"&&(u.duration=s,s=u,u=null),h=o.call(this,f?s:zs(s))||this;var m=h.vars,p=m.duration,g=m.delay,_=m.immediateRender,x=m.stagger,y=m.overwrite,O=m.keyframes,b=m.defaults,E=m.scrollTrigger,w=m.yoyoEase,k=s.parent||ye,D=(gn(r)||uy(r)?Lr(r[0]):"length"in s)?[r]:Ra(r),R,C,X,N,G,P,F,it;if(h._targets=D.length?B0(D):Qs("GSAP target "+r+" not found. https://gsap.com",!ca.nullTargetWarn)||[],h._ptLookup=[],h._overwrite=y,O||x||Oc(p)||Oc(g)){if(s=h.vars,R=h.timeline=new An({data:"nested",defaults:b||{},targets:k&&k.data==="nested"?k.vars.targets:D}),R.kill(),R.parent=R._dp=Mr(h),R._start=0,x||Oc(p)||Oc(g)){if(N=D.length,F=x&&Ay(x),lr(x))for(G in x)~jy.indexOf(G)&&(it||(it={}),it[G]=x[G]);for(C=0;C<N;C++)X=Wc(s,Xy),X.stagger=0,w&&(X.yoyoEase=w),it&&yo(X,it),P=D[C],X.duration=+Us(p,Mr(h),C,P,D),X.delay=(+Us(g,Mr(h),C,P,D)||0)-h._delay,!x&&N===1&&X.delay&&(h._delay=g=X.delay,h._start+=g,X.delay=0),R.to(P,X,F?F(C,P,D):0),R._ease=Yt.none;R.duration()?p=g=0:h.timeline=0}else if(O){zs(da(R.vars.defaults,{ease:"none"})),R._ease=rl(O.ease||s.ease||"none");var W=0,_t,Tt,pt;if(gn(O))O.forEach(function(H){return R.to(D,H,">")}),R.duration();else{X={};for(G in O)G==="ease"||G==="easeEach"||RT(G,O[G],X,O.easeEach);for(G in X)for(_t=X[G].sort(function(H,Z){return H.t-Z.t}),W=0,C=0;C<_t.length;C++)Tt=_t[C],pt={ease:Tt.e,duration:(Tt.t-(C?_t[C-1].t:0))/100*p},pt[G]=Tt.v,R.to(D,pt,W),W+=pt.duration;R.duration()<p&&R.to({},{duration:p-R.duration()})}}p||h.duration(p=R.duration())}else h.timeline=0;return y===!0&&!R0&&(bi=Mr(h),ye.killTweensOf(D),bi=0),nr(k,Mr(h),u),s.reversed&&h.reverse(),s.paused&&h.paused(!0),(_||!p&&!O&&h._start===Pe(k._time)&&qn(_)&&sT(Mr(h))&&k.data!=="nested")&&(h._tTime=-re,h.render(Math.max(0,-g)||0)),E&&Sy(Mr(h),E),h}var i=n.prototype;return i.render=function(s,u,f){var h=this._time,m=this._tDur,p=this._dur,g=s<0,_=s>m-re&&!g?m:s<re?0:s,x,y,O,b,E,w,k,D,R;if(!p)cT(this,s,u,f);else if(_!==this._tTime||!s||f||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(x=_,D=this.timeline,this._repeat){if(b=p+this._rDelay,this._repeat<-1&&g)return this.totalTime(b*100+s,u,f);if(x=Pe(_%b),_===m?(O=this._repeat,x=p):(E=Pe(_/b),O=~~E,O&&O===E?(x=p,O--):x>p&&(x=p)),w=this._yoyo&&O&1,w&&(R=this._yEase,x=p-x),E=_o(this._tTime,b),x===h&&!f&&this._initted&&O===E)return this._tTime=_,this;O!==E&&(D&&this._yEase&&By(D,w),this.vars.repeatRefresh&&!w&&!this._lock&&x!==b&&this._initted&&(this._lock=f=1,this.render(Pe(b*O),!0).invalidate()._lock=0))}if(!this._initted){if(Oy(this,g?s:x,f,u,_))return this._tTime=0,this;if(h!==this._time&&!(f&&this.vars.repeatRefresh&&O!==E))return this;if(p!==this._dur)return this.render(s,u,f)}if(this._tTime=_,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=k=(R||this._ease)(x/p),this._from&&(this.ratio=k=1-k),!h&&_&&!u&&!E&&(ua(this,"onStart"),this._tTime!==_))return this;for(y=this._pt;y;)y.r(k,y.d),y=y._next;D&&D.render(s<0?s:D._dur*D._ease(x/this._dur),u,f)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(g&&Ih(this,s,u,f),ua(this,"onUpdate")),this._repeat&&O!==E&&this.vars.onRepeat&&!u&&this.parent&&ua(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(g&&!this._onUpdate&&Ih(this,s,!0,!0),(s||!p)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&wi(this,1),!u&&!(g&&!h)&&(_||h||w)&&(ua(this,_===m?"onComplete":"onReverseComplete",!0),this._prom&&!(_<m&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},i.resetTo=function(s,u,f,h,m){Js||la.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||P0(this,p),g=this._ease(p/this._dur),DT(this,s,u,f,h,g,p,m)?this.resetTo(s,u,f,h,1):(pf(this,0),this.parent||xy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?ws(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var f=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,bi&&bi.vars.overwrite!==!0)._first||ws(this),this.parent&&f!==this.timeline.totalDuration()&&xo(this,this._dur*this.timeline._tDur/f,0,1),this}var h=this._targets,m=s?Ra(s):h,p=this._ptLookup,g=this._pt,_,x,y,O,b,E,w;if((!u||u==="all")&&lT(h,m))return u==="all"&&(this._pt=0),ws(this);for(_=this._op=this._op||[],u!=="all"&&(tn(u)&&(b={},Yn(u,function(k){return b[k]=1}),u=b),u=MT(h,u)),w=h.length;w--;)if(~m.indexOf(h[w])){x=p[w],u==="all"?(_[w]=u,O=x,y={}):(y=_[w]=_[w]||{},O=u);for(b in O)E=x&&x[b],E&&((!("kill"in E.d)||E.d.kill(b)===!0)&&df(this,E,"_pt"),delete x[b]),y!=="all"&&(y[b]=1)}return this._initted&&!this._pt&&g&&ws(this),this},n.to=function(s,u){return new n(s,u,arguments[2])},n.from=function(s,u){return Ns(1,arguments)},n.delayedCall=function(s,u,f,h){return new n(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:f,onReverseCompleteParams:f,callbackScope:h})},n.fromTo=function(s,u,f){return Ns(2,arguments)},n.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new n(s,u)},n.killTweensOf=function(s,u,f){return ye.killTweensOf(s,u,f)},n}($s);da(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(o){Ye[o]=function(){var n=new An,i=e0.call(arguments,0);return i.splice(o==="staggerFromTo"?5:4,0,0),n[o].apply(n,i)}});var j0=function(n,i,r){return n[i]=r},Gy=function(n,i,r){return n[i](r)},CT=function(n,i,r,s){return n[i](s.fp,r)},zT=function(n,i,r){return n.setAttribute(i,r)},X0=function(n,i){return we(n[i])?Gy:C0(n[i])&&n.setAttribute?zT:j0},Vy=function(n,i){return i.set(i.t,i.p,Math.round((i.s+i.c*n)*1e6)/1e6,i)},NT=function(n,i){return i.set(i.t,i.p,!!(i.s+i.c*n),i)},Qy=function(n,i){var r=i._pt,s="";if(!n&&i.b)s=i.b;else if(n===1&&i.e)s=i.e;else{for(;r;)s=r.p+(r.m?r.m(r.s+r.c*n):Math.round((r.s+r.c*n)*1e4)/1e4)+s,r=r._next;s+=i.c}i.set(i.t,i.p,s,i)},G0=function(n,i){for(var r=i._pt;r;)r.r(n,r.d),r=r._next},UT=function(n,i,r,s){for(var u=this._pt,f;u;)f=u._next,u.p===s&&u.modifier(n,i,r),u=f},HT=function(n){for(var i=this._pt,r,s;i;)s=i._next,i.p===n&&!i.op||i.op===n?df(this,i,"_pt"):i.dep||(r=1),i=s;return!r},LT=function(n,i,r,s){s.mSet(n,i,s.m.call(s.tween,r,s.mt),s)},Zy=function(n){for(var i=n._pt,r,s,u,f;i;){for(r=i._next,s=u;s&&s.pr>i.pr;)s=s._next;(i._prev=s?s._prev:f)?i._prev._next=i:u=i,(i._next=s)?s._prev=i:f=i,i=r}n._pt=u},Pn=function(){function o(i,r,s,u,f,h,m,p,g){this.t=r,this.s=u,this.c=f,this.p=s,this.r=h||Vy,this.d=m||this,this.set=p||j0,this.pr=g||0,this._next=i,i&&(i._prev=this)}var n=o.prototype;return n.modifier=function(r,s,u){this.mSet=this.mSet||this.set,this.set=LT,this.m=r,this.mt=u,this.tween=s},o}();Yn(L0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return H0[o]=1});fa.TweenMax=fa.TweenLite=Ye;fa.TimelineLite=fa.TimelineMax=An;ye=new An({sortChildren:!1,defaults:bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ca.stringFilter=Hy;var il=[],Pc={},BT=[],fb=0,qT=0,Hh=function(n){return(Pc[n]||BT).map(function(i){return i()})},i0=function(){var n=Date.now(),i=[];n-fb>2&&(Hh("matchMediaInit"),il.forEach(function(r){var s=r.queries,u=r.conditions,f,h,m,p;for(h in s)f=tr.matchMedia(s[h]).matches,f&&(m=1),f!==u[h]&&(u[h]=f,p=1);p&&(r.revert(),m&&i.push(r))}),Hh("matchMediaRevert"),i.forEach(function(r){return r.onMatch(r,function(s){return r.add(null,s)})}),fb=n,Hh("matchMedia"))},Ky=function(){function o(i,r){this.selector=r&&n0(r),this.data=[],this._r=[],this.isReverted=!1,this.id=qT++,i&&this.add(i)}var n=o.prototype;return n.add=function(r,s,u){we(r)&&(u=s,s=r,r=we);var f=this,h=function(){var p=ge,g=f.selector,_;return p&&p!==f&&p.data.push(f),u&&(f.selector=n0(u)),ge=f,_=s.apply(f,arguments),we(_)&&f._r.push(_),ge=p,f.selector=g,f.isReverted=!1,_};return f.last=h,r===we?h(f,function(m){return f.add(null,m)}):r?f[r]=h:h},n.ignore=function(r){var s=ge;ge=null,r(this),ge=s},n.getTweens=function(){var r=[];return this.data.forEach(function(s){return s instanceof o?r.push.apply(r,s.getTweens()):s instanceof Ye&&!(s.parent&&s.parent.data==="nested")&&r.push(s)}),r},n.clear=function(){this._r.length=this.data.length=0},n.kill=function(r,s){var u=this;if(r?function(){for(var h=u.getTweens(),m=u.data.length,p;m--;)p=u.data[m],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(g){return h.splice(h.indexOf(g),1)}));for(h.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,_){return _.g-g.g||-1/0}).forEach(function(g){return g.t.revert(r)}),m=u.data.length;m--;)p=u.data[m],p instanceof An?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof Ye)&&p.revert&&p.revert(r);u._r.forEach(function(g){return g(r,u)}),u.isReverted=!0}():this.data.forEach(function(h){return h.kill&&h.kill()}),this.clear(),s)for(var f=il.length;f--;)il[f].id===this.id&&il.splice(f,1)},n.revert=function(r){this.kill(r||{})},o}(),YT=function(){function o(i){this.contexts=[],this.scope=i,ge&&ge.data.push(this)}var n=o.prototype;return n.add=function(r,s,u){lr(r)||(r={matches:r});var f=new Ky(0,u||this.scope),h=f.conditions={},m,p,g;ge&&!f.selector&&(f.selector=ge.selector),this.contexts.push(f),s=f.add("onMatch",s),f.queries=r;for(p in r)p==="all"?g=1:(m=tr.matchMedia(r[p]),m&&(il.indexOf(f)<0&&il.push(f),(h[p]=m.matches)&&(g=1),m.addListener?m.addListener(i0):m.addEventListener("change",i0)));return g&&s(f,function(_){return f.add(null,_)}),this},n.revert=function(r){this.kill(r||{})},n.kill=function(r){this.contexts.forEach(function(s){return s.kill(r,!0)})},o}(),tf={registerPlugin:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach(function(s){return zy(s)})},timeline:function(n){return new An(n)},getTweensOf:function(n,i){return ye.getTweensOf(n,i)},getProperty:function(n,i,r,s){tn(n)&&(n=Ra(n)[0]);var u=nl(n||{}).get,f=r?_y:yy;return r==="native"&&(r=""),n&&(i?f((ra[i]&&ra[i].get||u)(n,i,r,s)):function(h,m,p){return f((ra[h]&&ra[h].get||u)(n,h,m,p))})},quickSetter:function(n,i,r){if(n=Ra(n),n.length>1){var s=n.map(function(g){return Xn.quickSetter(g,i,r)}),u=s.length;return function(g){for(var _=u;_--;)s[_](g)}}n=n[0]||{};var f=ra[i],h=nl(n),m=h.harness&&(h.harness.aliases||{})[i]||i,p=f?function(g){var _=new f;uo._pt=0,_.init(n,r?g+r:g,uo,0,[n]),_.render(1,_),uo._pt&&G0(1,uo)}:h.set(n,m);return f?p:function(g){return p(n,m,r?g+r:g,h,1)}},quickTo:function(n,i,r){var s,u=Xn.to(n,da((s={},s[i]="+=0.1",s.paused=!0,s.stagger=0,s),r||{})),f=function(m,p,g){return u.resetTo(i,m,p,g)};return f.tween=u,f},isTweening:function(n){return ye.getTweensOf(n,!0).length>0},defaults:function(n){return n&&n.ease&&(n.ease=rl(n.ease,bo.ease)),lb(bo,n||{})},config:function(n){return lb(ca,n||{})},registerEffect:function(n){var i=n.name,r=n.effect,s=n.plugins,u=n.defaults,f=n.extendTimeline;(s||"").split(",").forEach(function(h){return h&&!ra[h]&&!fa[h]&&Qs(i+" effect requires "+h+" plugin.")}),Ch[i]=function(h,m,p){return r(Ra(h),da(m||{},u),p)},f&&(An.prototype[i]=function(h,m,p){return this.add(Ch[i](h,lr(m)?m:(p=m)&&{},this),p)})},registerEase:function(n,i){Yt[n]=rl(i)},parseEase:function(n,i){return arguments.length?rl(n,i):Yt},getById:function(n){return ye.getById(n)},exportRoot:function(n,i){n===void 0&&(n={});var r=new An(n),s,u;for(r.smoothChildTiming=qn(n.smoothChildTiming),ye.remove(r),r._dp=0,r._time=r._tTime=ye._time,s=ye._first;s;)u=s._next,(i||!(!s._dur&&s instanceof Ye&&s.vars.onComplete===s._targets[0]))&&nr(r,s,s._start-s._delay),s=u;return nr(ye,r,0),r},context:function(n,i){return n?new Ky(n,i):ge},matchMedia:function(n){return new YT(n)},matchMediaRefresh:function(){return il.forEach(function(n){var i=n.conditions,r,s;for(s in i)i[s]&&(i[s]=!1,r=1);r&&n.revert()})||i0()},addEventListener:function(n,i){var r=Pc[n]||(Pc[n]=[]);~r.indexOf(i)||r.push(i)},removeEventListener:function(n,i){var r=Pc[n],s=r&&r.indexOf(i);s>=0&&r.splice(s,1)},utils:{wrap:bT,wrapYoyo:yT,distribute:Ay,random:Dy,snap:ky,normalize:vT,getUnit:pn,clamp:hT,splitColor:Ny,toArray:Ra,selector:n0,mapRange:Ry,pipe:mT,unitize:gT,interpolate:_T,shuffle:wy},install:py,effects:Ch,ticker:la,updateRoot:An.updateRoot,plugins:ra,globalTimeline:ye,core:{PropTween:Pn,globals:my,Tween:Ye,Timeline:An,Animation:$s,getCache:nl,_removeLinkedListItem:df,reverting:function(){return sn},context:function(n){return n&&ge&&(ge.data.push(n),n._ctx=ge),ge},suppressOverwrites:function(n){return R0=n}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return tf[o]=Ye[o]});la.add(An.updateRoot);uo=tf.to({},{duration:0});var PT=function(n,i){for(var r=n._pt;r&&r.p!==i&&r.op!==i&&r.fp!==i;)r=r._next;return r},jT=function(n,i){var r=n._targets,s,u,f;for(s in i)for(u=r.length;u--;)f=n._ptLookup[u][s],f&&(f=f.d)&&(f._pt&&(f=PT(f,s)),f&&f.modifier&&f.modifier(i[s],n,r[u],s))},Lh=function(n,i){return{name:n,headless:1,rawVars:1,init:function(s,u,f){f._onInit=function(h){var m,p;if(tn(u)&&(m={},Yn(u,function(g){return m[g]=1}),u=m),i){m={};for(p in u)m[p]=i(u[p]);u=m}jT(h,u)}}}},Xn=tf.registerPlugin({name:"attr",init:function(n,i,r,s,u){var f,h,m;this.tween=r;for(f in i)m=n.getAttribute(f)||"",h=this.add(n,"setAttribute",(m||0)+"",i[f],s,u,0,0,f),h.op=f,h.b=m,this._props.push(f)},render:function(n,i){for(var r=i._pt;r;)sn?r.set(r.t,r.p,r.b,r):r.r(n,r.d),r=r._next}},{name:"endArray",headless:1,init:function(n,i){for(var r=i.length;r--;)this.add(n,r,n[r]||0,i[r],0,0,0,0,0,1)}},Lh("roundProps",a0),Lh("modifiers"),Lh("snap",ky))||tf;Ye.version=An.version=Xn.version="3.13.0";hy=1;z0()&&To();Yt.Power0;Yt.Power1;Yt.Power2;Yt.Power3;Yt.Power4;Yt.Linear;Yt.Quad;Yt.Cubic;Yt.Quart;Yt.Quint;Yt.Strong;Yt.Elastic;Yt.Back;Yt.SteppedEase;Yt.Bounce;Yt.Sine;Yt.Expo;Yt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var db,yi,ho,V0,tl,hb,Q0,XT=function(){return typeof window<"u"},Br={},$i=180/Math.PI,po=Math.PI/180,ao=Math.atan2,pb=1e8,Z0=/([A-Z])/g,GT=/(left|right|width|margin|padding|x)/i,VT=/[\s,\(]\S/,ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},l0=function(n,i){return i.set(i.t,i.p,Math.round((i.s+i.c*n)*1e4)/1e4+i.u,i)},QT=function(n,i){return i.set(i.t,i.p,n===1?i.e:Math.round((i.s+i.c*n)*1e4)/1e4+i.u,i)},ZT=function(n,i){return i.set(i.t,i.p,n?Math.round((i.s+i.c*n)*1e4)/1e4+i.u:i.b,i)},KT=function(n,i){var r=i.s+i.c*n;i.set(i.t,i.p,~~(r+(r<0?-.5:.5))+i.u,i)},Jy=function(n,i){return i.set(i.t,i.p,n?i.e:i.b,i)},$y=function(n,i){return i.set(i.t,i.p,n!==1?i.b:i.e,i)},JT=function(n,i,r){return n.style[i]=r},$T=function(n,i,r){return n.style.setProperty(i,r)},FT=function(n,i,r){return n._gsap[i]=r},WT=function(n,i,r){return n._gsap.scaleX=n._gsap.scaleY=r},IT=function(n,i,r,s,u){var f=n._gsap;f.scaleX=f.scaleY=r,f.renderTransform(u,f)},tS=function(n,i,r,s,u){var f=n._gsap;f[i]=r,f.renderTransform(u,f)},_e="transform",jn=_e+"Origin",eS=function o(n,i){var r=this,s=this.target,u=s.style,f=s._gsap;if(n in Br&&u){if(this.tfm=this.tfm||{},n!=="transform")n=ar[n]||n,~n.indexOf(",")?n.split(",").forEach(function(h){return r.tfm[h]=Rr(s,h)}):this.tfm[n]=f.x?f[n]:Rr(s,n),n===jn&&(this.tfm.zOrigin=f.zOrigin);else return ar.transform.split(",").forEach(function(h){return o.call(r,h,i)});if(this.props.indexOf(_e)>=0)return;f.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(jn,i,"")),n=_e}(u||i)&&this.props.push(n,i,u[n])},Fy=function(n){n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},nS=function(){var n=this.props,i=this.target,r=i.style,s=i._gsap,u,f;for(u=0;u<n.length;u+=3)n[u+1]?n[u+1]===2?i[n[u]](n[u+2]):i[n[u]]=n[u+2]:n[u+2]?r[n[u]]=n[u+2]:r.removeProperty(n[u].substr(0,2)==="--"?n[u]:n[u].replace(Z0,"-$1").toLowerCase());if(this.tfm){for(f in this.tfm)s[f]=this.tfm[f];s.svg&&(s.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),u=Q0(),(!u||!u.isStart)&&!r[_e]&&(Fy(r),s.zOrigin&&r[jn]&&(r[jn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Wy=function(n,i){var r={target:n,props:[],revert:nS,save:eS};return n._gsap||Xn.core.getCache(n),i&&n.style&&n.nodeType&&i.split(",").forEach(function(s){return r.save(s)}),r},Iy,o0=function(n,i){var r=yi.createElementNS?yi.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),n):yi.createElement(n);return r&&r.style?r:yi.createElement(n)},Ca=function o(n,i,r){var s=getComputedStyle(n);return s[i]||s.getPropertyValue(i.replace(Z0,"-$1").toLowerCase())||s.getPropertyValue(i)||!r&&o(n,So(i)||i,1)||""},mb="O,Moz,ms,Ms,Webkit".split(","),So=function(n,i,r){var s=i||tl,u=s.style,f=5;if(n in u&&!r)return n;for(n=n.charAt(0).toUpperCase()+n.substr(1);f--&&!(mb[f]+n in u););return f<0?null:(f===3?"ms":f>=0?mb[f]:"")+n},s0=function(){XT()&&window.document&&(db=window,yi=db.document,ho=yi.documentElement,tl=o0("div")||{style:{}},o0("div"),_e=So(_e),jn=_e+"Origin",tl.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Iy=!!So("perspective"),Q0=Xn.core.reverting,V0=1)},gb=function(n){var i=n.ownerSVGElement,r=o0("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=n.cloneNode(!0),u;s.style.display="block",r.appendChild(s),ho.appendChild(r);try{u=s.getBBox()}catch{}return r.removeChild(s),ho.removeChild(r),u},vb=function(n,i){for(var r=i.length;r--;)if(n.hasAttribute(i[r]))return n.getAttribute(i[r])},t1=function(n){var i,r;try{i=n.getBBox()}catch{i=gb(n),r=1}return i&&(i.width||i.height)||r||(i=gb(n)),i&&!i.width&&!i.x&&!i.y?{x:+vb(n,["x","cx","x1"])||0,y:+vb(n,["y","cy","y1"])||0,width:0,height:0}:i},e1=function(n){return!!(n.getCTM&&(!n.parentNode||n.ownerSVGElement)&&t1(n))},fl=function(n,i){if(i){var r=n.style,s;i in Br&&i!==jn&&(i=_e),r.removeProperty?(s=i.substr(0,2),(s==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),r.removeProperty(s==="--"?i:i.replace(Z0,"-$1").toLowerCase())):r.removeAttribute(i)}},_i=function(n,i,r,s,u,f){var h=new Pn(n._pt,i,r,0,1,f?$y:Jy);return n._pt=h,h.b=s,h.e=u,n._props.push(r),h},bb={deg:1,rad:1,turn:1},aS={grid:1,flex:1},Ai=function o(n,i,r,s){var u=parseFloat(r)||0,f=(r+"").trim().substr((u+"").length)||"px",h=tl.style,m=GT.test(i),p=n.tagName.toLowerCase()==="svg",g=(p?"client":"offset")+(m?"Width":"Height"),_=100,x=s==="px",y=s==="%",O,b,E,w;if(s===f||!u||bb[s]||bb[f])return u;if(f!=="px"&&!x&&(u=o(n,i,r,"px")),w=n.getCTM&&e1(n),(y||f==="%")&&(Br[i]||~i.indexOf("adius")))return O=w?n.getBBox()[m?"width":"height"]:n[g],Me(y?u/O*_:u/100*O);if(h[m?"width":"height"]=_+(x?f:s),b=s!=="rem"&&~i.indexOf("adius")||s==="em"&&n.appendChild&&!p?n:n.parentNode,w&&(b=(n.ownerSVGElement||{}).parentNode),(!b||b===yi||!b.appendChild)&&(b=yi.body),E=b._gsap,E&&y&&E.width&&m&&E.time===la.time&&!E.uncache)return Me(u/E.width*_);if(y&&(i==="height"||i==="width")){var k=n.style[i];n.style[i]=_+s,O=n[g],k?n.style[i]=k:fl(n,i)}else(y||f==="%")&&!aS[Ca(b,"display")]&&(h.position=Ca(n,"position")),b===n&&(h.position="static"),b.appendChild(tl),O=tl[g],b.removeChild(tl),h.position="absolute";return m&&y&&(E=nl(b),E.time=la.time,E.width=b[g]),Me(x?O*u/_:O&&u?_/O*u:0)},Rr=function(n,i,r,s){var u;return V0||s0(),i in ar&&i!=="transform"&&(i=ar[i],~i.indexOf(",")&&(i=i.split(",")[0])),Br[i]&&i!=="transform"?(u=Ws(n,s),u=i!=="transformOrigin"?u[i]:u.svg?u.origin:nf(Ca(n,jn))+" "+u.zOrigin+"px"):(u=n.style[i],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=ef[i]&&ef[i](n,i,r)||Ca(n,i)||vy(n,i)||(i==="opacity"?1:0))),r&&!~(u+"").trim().indexOf(" ")?Ai(n,i,u,r)+r:u},rS=function(n,i,r,s){if(!r||r==="none"){var u=So(i,n,1),f=u&&Ca(n,u,1);f&&f!==r?(i=u,r=f):i==="borderColor"&&(r=Ca(n,"borderTopColor"))}var h=new Pn(this._pt,n.style,i,0,1,Qy),m=0,p=0,g,_,x,y,O,b,E,w,k,D,R,C;if(h.b=r,h.e=s,r+="",s+="",s.substring(0,6)==="var(--"&&(s=Ca(n,s.substring(4,s.indexOf(")")))),s==="auto"&&(b=n.style[i],n.style[i]=s,s=Ca(n,i)||s,b?n.style[i]=b:fl(n,i)),g=[r,s],Hy(g),r=g[0],s=g[1],x=r.match(so)||[],C=s.match(so)||[],C.length){for(;_=so.exec(s);)E=_[0],k=s.substring(m,_.index),O?O=(O+1)%5:(k.substr(-5)==="rgba("||k.substr(-5)==="hsla(")&&(O=1),E!==(b=x[p++]||"")&&(y=parseFloat(b)||0,R=b.substr((y+"").length),E.charAt(1)==="="&&(E=fo(y,E)+R),w=parseFloat(E),D=E.substr((w+"").length),m=so.lastIndex-D.length,D||(D=D||ca.units[i]||R,m===s.length&&(s+=D,h.e+=D)),R!==D&&(y=Ai(n,i,b,D)||0),h._pt={_next:h._pt,p:k||p===1?k:",",s:y,c:w-y,m:O&&O<4||i==="zIndex"?Math.round:0});h.c=m<s.length?s.substring(m,s.length):""}else h.r=i==="display"&&s==="none"?$y:Jy;return fy.test(s)&&(h.e=0),this._pt=h,h},yb={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iS=function(n){var i=n.split(" "),r=i[0],s=i[1]||"50%";return(r==="top"||r==="bottom"||s==="left"||s==="right")&&(n=r,r=s,s=n),i[0]=yb[r]||r,i[1]=yb[s]||s,i.join(" ")},lS=function(n,i){if(i.tween&&i.tween._time===i.tween._dur){var r=i.t,s=r.style,u=i.u,f=r._gsap,h,m,p;if(u==="all"||u===!0)s.cssText="",m=1;else for(u=u.split(","),p=u.length;--p>-1;)h=u[p],Br[h]&&(m=1,h=h==="transformOrigin"?jn:_e),fl(r,h);m&&(fl(r,_e),f&&(f.svg&&r.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Ws(r,1),f.uncache=1,Fy(s)))}},ef={clearProps:function(n,i,r,s,u){if(u.data!=="isFromStart"){var f=n._pt=new Pn(n._pt,i,r,0,0,lS);return f.u=s,f.pr=-10,f.tween=u,n._props.push(r),1}}},Fs=[1,0,0,1,0,0],n1={},a1=function(n){return n==="matrix(1, 0, 0, 1, 0, 0)"||n==="none"||!n},_b=function(n){var i=Ca(n,_e);return a1(i)?Fs:i.substr(7).match(cy).map(Me)},K0=function(n,i){var r=n._gsap||nl(n),s=n.style,u=_b(n),f,h,m,p;return r.svg&&n.getAttribute("transform")?(m=n.transform.baseVal.consolidate().matrix,u=[m.a,m.b,m.c,m.d,m.e,m.f],u.join(",")==="1,0,0,1,0,0"?Fs:u):(u===Fs&&!n.offsetParent&&n!==ho&&!r.svg&&(m=s.display,s.display="block",f=n.parentNode,(!f||!n.offsetParent&&!n.getBoundingClientRect().width)&&(p=1,h=n.nextElementSibling,ho.appendChild(n)),u=_b(n),m?s.display=m:fl(n,"display"),p&&(h?f.insertBefore(n,h):f?f.appendChild(n):ho.removeChild(n))),i&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},u0=function(n,i,r,s,u,f){var h=n._gsap,m=u||K0(n,!0),p=h.xOrigin||0,g=h.yOrigin||0,_=h.xOffset||0,x=h.yOffset||0,y=m[0],O=m[1],b=m[2],E=m[3],w=m[4],k=m[5],D=i.split(" "),R=parseFloat(D[0])||0,C=parseFloat(D[1])||0,X,N,G,P;r?m!==Fs&&(N=y*E-O*b)&&(G=R*(E/N)+C*(-b/N)+(b*k-E*w)/N,P=R*(-O/N)+C*(y/N)-(y*k-O*w)/N,R=G,C=P):(X=t1(n),R=X.x+(~D[0].indexOf("%")?R/100*X.width:R),C=X.y+(~(D[1]||D[0]).indexOf("%")?C/100*X.height:C)),s||s!==!1&&h.smooth?(w=R-p,k=C-g,h.xOffset=_+(w*y+k*b)-w,h.yOffset=x+(w*O+k*E)-k):h.xOffset=h.yOffset=0,h.xOrigin=R,h.yOrigin=C,h.smooth=!!s,h.origin=i,h.originIsAbsolute=!!r,n.style[jn]="0px 0px",f&&(_i(f,h,"xOrigin",p,R),_i(f,h,"yOrigin",g,C),_i(f,h,"xOffset",_,h.xOffset),_i(f,h,"yOffset",x,h.yOffset)),n.setAttribute("data-svg-origin",R+" "+C)},Ws=function(n,i){var r=n._gsap||new Yy(n);if("x"in r&&!i&&!r.uncache)return r;var s=n.style,u=r.scaleX<0,f="px",h="deg",m=getComputedStyle(n),p=Ca(n,jn)||"0",g,_,x,y,O,b,E,w,k,D,R,C,X,N,G,P,F,it,W,_t,Tt,pt,H,Z,et,mt,T,Q,at,nt,rt,bt;return g=_=x=b=E=w=k=D=R=0,y=O=1,r.svg=!!(n.getCTM&&e1(n)),m.translate&&((m.translate!=="none"||m.scale!=="none"||m.rotate!=="none")&&(s[_e]=(m.translate!=="none"?"translate3d("+(m.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(m.rotate!=="none"?"rotate("+m.rotate+") ":"")+(m.scale!=="none"?"scale("+m.scale.split(" ").join(",")+") ":"")+(m[_e]!=="none"?m[_e]:"")),s.scale=s.rotate=s.translate="none"),N=K0(n,r.svg),r.svg&&(r.uncache?(et=n.getBBox(),p=r.xOrigin-et.x+"px "+(r.yOrigin-et.y)+"px",Z=""):Z=!i&&n.getAttribute("data-svg-origin"),u0(n,Z||p,!!Z||r.originIsAbsolute,r.smooth!==!1,N)),C=r.xOrigin||0,X=r.yOrigin||0,N!==Fs&&(it=N[0],W=N[1],_t=N[2],Tt=N[3],g=pt=N[4],_=H=N[5],N.length===6?(y=Math.sqrt(it*it+W*W),O=Math.sqrt(Tt*Tt+_t*_t),b=it||W?ao(W,it)*$i:0,k=_t||Tt?ao(_t,Tt)*$i+b:0,k&&(O*=Math.abs(Math.cos(k*po))),r.svg&&(g-=C-(C*it+X*_t),_-=X-(C*W+X*Tt))):(bt=N[6],nt=N[7],T=N[8],Q=N[9],at=N[10],rt=N[11],g=N[12],_=N[13],x=N[14],G=ao(bt,at),E=G*$i,G&&(P=Math.cos(-G),F=Math.sin(-G),Z=pt*P+T*F,et=H*P+Q*F,mt=bt*P+at*F,T=pt*-F+T*P,Q=H*-F+Q*P,at=bt*-F+at*P,rt=nt*-F+rt*P,pt=Z,H=et,bt=mt),G=ao(-_t,at),w=G*$i,G&&(P=Math.cos(-G),F=Math.sin(-G),Z=it*P-T*F,et=W*P-Q*F,mt=_t*P-at*F,rt=Tt*F+rt*P,it=Z,W=et,_t=mt),G=ao(W,it),b=G*$i,G&&(P=Math.cos(G),F=Math.sin(G),Z=it*P+W*F,et=pt*P+H*F,W=W*P-it*F,H=H*P-pt*F,it=Z,pt=et),E&&Math.abs(E)+Math.abs(b)>359.9&&(E=b=0,w=180-w),y=Me(Math.sqrt(it*it+W*W+_t*_t)),O=Me(Math.sqrt(H*H+bt*bt)),G=ao(pt,H),k=Math.abs(G)>2e-4?G*$i:0,R=rt?1/(rt<0?-rt:rt):0),r.svg&&(Z=n.getAttribute("transform"),r.forceCSS=n.setAttribute("transform","")||!a1(Ca(n,_e)),Z&&n.setAttribute("transform",Z))),Math.abs(k)>90&&Math.abs(k)<270&&(u?(y*=-1,k+=b<=0?180:-180,b+=b<=0?180:-180):(O*=-1,k+=k<=0?180:-180)),i=i||r.uncache,r.x=g-((r.xPercent=g&&(!i&&r.xPercent||(Math.round(n.offsetWidth/2)===Math.round(-g)?-50:0)))?n.offsetWidth*r.xPercent/100:0)+f,r.y=_-((r.yPercent=_&&(!i&&r.yPercent||(Math.round(n.offsetHeight/2)===Math.round(-_)?-50:0)))?n.offsetHeight*r.yPercent/100:0)+f,r.z=x+f,r.scaleX=Me(y),r.scaleY=Me(O),r.rotation=Me(b)+h,r.rotationX=Me(E)+h,r.rotationY=Me(w)+h,r.skewX=k+h,r.skewY=D+h,r.transformPerspective=R+f,(r.zOrigin=parseFloat(p.split(" ")[2])||!i&&r.zOrigin||0)&&(s[jn]=nf(p)),r.xOffset=r.yOffset=0,r.force3D=ca.force3D,r.renderTransform=r.svg?sS:Iy?r1:oS,r.uncache=0,r},nf=function(n){return(n=n.split(" "))[0]+" "+n[1]},Bh=function(n,i,r){var s=pn(i);return Me(parseFloat(i)+parseFloat(Ai(n,"x",r+"px",s)))+s},oS=function(n,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,r1(n,i)},Ki="0deg",Ts="0px",Ji=") ",r1=function(n,i){var r=i||this,s=r.xPercent,u=r.yPercent,f=r.x,h=r.y,m=r.z,p=r.rotation,g=r.rotationY,_=r.rotationX,x=r.skewX,y=r.skewY,O=r.scaleX,b=r.scaleY,E=r.transformPerspective,w=r.force3D,k=r.target,D=r.zOrigin,R="",C=w==="auto"&&n&&n!==1||w===!0;if(D&&(_!==Ki||g!==Ki)){var X=parseFloat(g)*po,N=Math.sin(X),G=Math.cos(X),P;X=parseFloat(_)*po,P=Math.cos(X),f=Bh(k,f,N*P*-D),h=Bh(k,h,-Math.sin(X)*-D),m=Bh(k,m,G*P*-D+D)}E!==Ts&&(R+="perspective("+E+Ji),(s||u)&&(R+="translate("+s+"%, "+u+"%) "),(C||f!==Ts||h!==Ts||m!==Ts)&&(R+=m!==Ts||C?"translate3d("+f+", "+h+", "+m+") ":"translate("+f+", "+h+Ji),p!==Ki&&(R+="rotate("+p+Ji),g!==Ki&&(R+="rotateY("+g+Ji),_!==Ki&&(R+="rotateX("+_+Ji),(x!==Ki||y!==Ki)&&(R+="skew("+x+", "+y+Ji),(O!==1||b!==1)&&(R+="scale("+O+", "+b+Ji),k.style[_e]=R||"translate(0, 0)"},sS=function(n,i){var r=i||this,s=r.xPercent,u=r.yPercent,f=r.x,h=r.y,m=r.rotation,p=r.skewX,g=r.skewY,_=r.scaleX,x=r.scaleY,y=r.target,O=r.xOrigin,b=r.yOrigin,E=r.xOffset,w=r.yOffset,k=r.forceCSS,D=parseFloat(f),R=parseFloat(h),C,X,N,G,P;m=parseFloat(m),p=parseFloat(p),g=parseFloat(g),g&&(g=parseFloat(g),p+=g,m+=g),m||p?(m*=po,p*=po,C=Math.cos(m)*_,X=Math.sin(m)*_,N=Math.sin(m-p)*-x,G=Math.cos(m-p)*x,p&&(g*=po,P=Math.tan(p-g),P=Math.sqrt(1+P*P),N*=P,G*=P,g&&(P=Math.tan(g),P=Math.sqrt(1+P*P),C*=P,X*=P)),C=Me(C),X=Me(X),N=Me(N),G=Me(G)):(C=_,G=x,X=N=0),(D&&!~(f+"").indexOf("px")||R&&!~(h+"").indexOf("px"))&&(D=Ai(y,"x",f,"px"),R=Ai(y,"y",h,"px")),(O||b||E||w)&&(D=Me(D+O-(O*C+b*N)+E),R=Me(R+b-(O*X+b*G)+w)),(s||u)&&(P=y.getBBox(),D=Me(D+s/100*P.width),R=Me(R+u/100*P.height)),P="matrix("+C+","+X+","+N+","+G+","+D+","+R+")",y.setAttribute("transform",P),k&&(y.style[_e]=P)},uS=function(n,i,r,s,u){var f=360,h=tn(u),m=parseFloat(u)*(h&&~u.indexOf("rad")?$i:1),p=m-s,g=s+p+"deg",_,x;return h&&(_=u.split("_")[1],_==="short"&&(p%=f,p!==p%(f/2)&&(p+=p<0?f:-f)),_==="cw"&&p<0?p=(p+f*pb)%f-~~(p/f)*f:_==="ccw"&&p>0&&(p=(p-f*pb)%f-~~(p/f)*f)),n._pt=x=new Pn(n._pt,i,r,s,p,QT),x.e=g,x.u="deg",n._props.push(r),x},xb=function(n,i){for(var r in i)n[r]=i[r];return n},cS=function(n,i,r){var s=xb({},r._gsap),u="perspective,force3D,transformOrigin,svgOrigin",f=r.style,h,m,p,g,_,x,y,O;s.svg?(p=r.getAttribute("transform"),r.setAttribute("transform",""),f[_e]=i,h=Ws(r,1),fl(r,_e),r.setAttribute("transform",p)):(p=getComputedStyle(r)[_e],f[_e]=i,h=Ws(r,1),f[_e]=p);for(m in Br)p=s[m],g=h[m],p!==g&&u.indexOf(m)<0&&(y=pn(p),O=pn(g),_=y!==O?Ai(r,m,p,O):parseFloat(p),x=parseFloat(g),n._pt=new Pn(n._pt,h,m,_,x-_,l0),n._pt.u=O||0,n._props.push(m));xb(h,s)};Yn("padding,margin,Width,Radius",function(o,n){var i="Top",r="Right",s="Bottom",u="Left",f=(n<3?[i,r,s,u]:[i+u,i+r,s+r,s+u]).map(function(h){return n<2?o+h:"border"+h+o});ef[n>1?"border"+o:o]=function(h,m,p,g,_){var x,y;if(arguments.length<4)return x=f.map(function(O){return Rr(h,O,p)}),y=x.join(" "),y.split(x[0]).length===5?x[0]:y;x=(g+"").split(" "),y={},f.forEach(function(O,b){return y[O]=x[b]=x[b]||x[(b-1)/2|0]}),h.init(m,y,_)}});var i1={name:"css",register:s0,targetTest:function(n){return n.style&&n.nodeType},init:function(n,i,r,s,u){var f=this._props,h=n.style,m=r.vars.startAt,p,g,_,x,y,O,b,E,w,k,D,R,C,X,N,G;V0||s0(),this.styles=this.styles||Wy(n),G=this.styles.props,this.tween=r;for(b in i)if(b!=="autoRound"&&(g=i[b],!(ra[b]&&Py(b,i,r,s,n,u)))){if(y=typeof g,O=ef[b],y==="function"&&(g=g.call(r,s,n,u),y=typeof g),y==="string"&&~g.indexOf("random(")&&(g=Ks(g)),O)O(this,n,b,g,r)&&(N=1);else if(b.substr(0,2)==="--")p=(getComputedStyle(n).getPropertyValue(b)+"").trim(),g+="",Oi.lastIndex=0,Oi.test(p)||(E=pn(p),w=pn(g)),w?E!==w&&(p=Ai(n,b,p,w)+w):E&&(g+=E),this.add(h,"setProperty",p,g,s,u,0,0,b),f.push(b),G.push(b,0,h[b]);else if(y!=="undefined"){if(m&&b in m?(p=typeof m[b]=="function"?m[b].call(r,s,n,u):m[b],tn(p)&&~p.indexOf("random(")&&(p=Ks(p)),pn(p+"")||p==="auto"||(p+=ca.units[b]||pn(Rr(n,b))||""),(p+"").charAt(1)==="="&&(p=Rr(n,b))):p=Rr(n,b),x=parseFloat(p),k=y==="string"&&g.charAt(1)==="="&&g.substr(0,2),k&&(g=g.substr(2)),_=parseFloat(g),b in ar&&(b==="autoAlpha"&&(x===1&&Rr(n,"visibility")==="hidden"&&_&&(x=0),G.push("visibility",0,h.visibility),_i(this,h,"visibility",x?"inherit":"hidden",_?"inherit":"hidden",!_)),b!=="scale"&&b!=="transform"&&(b=ar[b],~b.indexOf(",")&&(b=b.split(",")[0]))),D=b in Br,D){if(this.styles.save(b),y==="string"&&g.substring(0,6)==="var(--"&&(g=Ca(n,g.substring(4,g.indexOf(")"))),_=parseFloat(g)),R||(C=n._gsap,C.renderTransform&&!i.parseTransform||Ws(n,i.parseTransform),X=i.smoothOrigin!==!1&&C.smooth,R=this._pt=new Pn(this._pt,h,_e,0,1,C.renderTransform,C,0,-1),R.dep=1),b==="scale")this._pt=new Pn(this._pt,C,"scaleY",C.scaleY,(k?fo(C.scaleY,k+_):_)-C.scaleY||0,l0),this._pt.u=0,f.push("scaleY",b),b+="X";else if(b==="transformOrigin"){G.push(jn,0,h[jn]),g=iS(g),C.svg?u0(n,g,0,X,0,this):(w=parseFloat(g.split(" ")[2])||0,w!==C.zOrigin&&_i(this,C,"zOrigin",C.zOrigin,w),_i(this,h,b,nf(p),nf(g)));continue}else if(b==="svgOrigin"){u0(n,g,1,X,0,this);continue}else if(b in n1){uS(this,C,b,x,k?fo(x,k+g):g);continue}else if(b==="smoothOrigin"){_i(this,C,"smooth",C.smooth,g);continue}else if(b==="force3D"){C[b]=g;continue}else if(b==="transform"){cS(this,g,n);continue}}else b in h||(b=So(b)||b);if(D||(_||_===0)&&(x||x===0)&&!VT.test(g)&&b in h)E=(p+"").substr((x+"").length),_||(_=0),w=pn(g)||(b in ca.units?ca.units[b]:E),E!==w&&(x=Ai(n,b,p,w)),this._pt=new Pn(this._pt,D?C:h,b,x,(k?fo(x,k+_):_)-x,!D&&(w==="px"||b==="zIndex")&&i.autoRound!==!1?KT:l0),this._pt.u=w||0,E!==w&&w!=="%"&&(this._pt.b=p,this._pt.r=ZT);else if(b in h)rS.call(this,n,b,p,k?k+g:g);else if(b in n)this.add(n,b,p||n[b],k?k+g:g,s,u);else if(b!=="parseTransform"){U0(b,g);continue}D||(b in h?G.push(b,0,h[b]):typeof n[b]=="function"?G.push(b,2,n[b]()):G.push(b,1,p||n[b])),f.push(b)}}N&&Zy(this)},render:function(n,i){if(i.tween._time||!Q0())for(var r=i._pt;r;)r.r(n,r.d),r=r._next;else i.styles.revert()},get:Rr,aliases:ar,getSetter:function(n,i,r){var s=ar[i];return s&&s.indexOf(",")<0&&(i=s),i in Br&&i!==jn&&(n._gsap.x||Rr(n,"x"))?r&&hb===r?i==="scale"?WT:FT:(hb=r||{})&&(i==="scale"?IT:tS):n.style&&!C0(n.style[i])?JT:~i.indexOf("-")?$T:X0(n,i)},core:{_removeProperty:fl,_getMatrix:K0}};Xn.utils.checkPrefix=So;Xn.core.getStyleSaver=Wy;(function(o,n,i,r){var s=Yn(o+","+n+","+i,function(u){Br[u]=1});Yn(n,function(u){ca.units[u]="deg",n1[u]=1}),ar[s[13]]=o+","+n,Yn(r,function(u){var f=u.split(":");ar[f[1]]=s[f[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){ca.units[o]="px"});Xn.registerPlugin(i1);var ll=Xn.registerPlugin(i1)||Xn;ll.core.Tween;function fS(o,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function dS(o,n,i){return n&&fS(o.prototype,n),o}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on,jc,oa,xi,Ti,mo,l1,Fi,Hs,o1,zr,Ga,s1,u1=function(){return on||typeof window<"u"&&(on=window.gsap)&&on.registerPlugin&&on},c1=1,co=[],Nt=[],ir=[],Ls=Date.now,c0=function(n,i){return i},hS=function(){var n=Hs.core,i=n.bridge||{},r=n._scrollers,s=n._proxies;r.push.apply(r,Nt),s.push.apply(s,ir),Nt=r,ir=s,c0=function(f,h){return i[f](h)}},Ei=function(n,i){return~ir.indexOf(n)&&ir[ir.indexOf(n)+1][i]},Bs=function(n){return!!~o1.indexOf(n)},Sn=function(n,i,r,s,u){return n.addEventListener(i,r,{passive:s!==!1,capture:!!u})},Tn=function(n,i,r,s){return n.removeEventListener(i,r,!!s)},Ec="scrollLeft",wc="scrollTop",f0=function(){return zr&&zr.isPressed||Nt.cache++},af=function(n,i){var r=function s(u){if(u||u===0){c1&&(oa.history.scrollRestoration="manual");var f=zr&&zr.isPressed;u=s.v=Math.round(u)||(zr&&zr.iOS?1:0),n(u),s.cacheID=Nt.cache,f&&c0("ss",u)}else(i||Nt.cache!==s.cacheID||c0("ref"))&&(s.cacheID=Nt.cache,s.v=n());return s.v+s.offset};return r.offset=0,n&&r},kn={s:Ec,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:af(function(o){return arguments.length?oa.scrollTo(o,Qe.sc()):oa.pageXOffset||xi[Ec]||Ti[Ec]||mo[Ec]||0})},Qe={s:wc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:kn,sc:af(function(o){return arguments.length?oa.scrollTo(kn.sc(),o):oa.pageYOffset||xi[wc]||Ti[wc]||mo[wc]||0})},Bn=function(n,i){return(i&&i._ctx&&i._ctx.selector||on.utils.toArray)(n)[0]||(typeof n=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",n):null)},pS=function(n,i){for(var r=i.length;r--;)if(i[r]===n||i[r].contains(n))return!0;return!1},ki=function(n,i){var r=i.s,s=i.sc;Bs(n)&&(n=xi.scrollingElement||Ti);var u=Nt.indexOf(n),f=s===Qe.sc?1:2;!~u&&(u=Nt.push(n)-1),Nt[u+f]||Sn(n,"scroll",f0);var h=Nt[u+f],m=h||(Nt[u+f]=af(Ei(n,r),!0)||(Bs(n)?s:af(function(p){return arguments.length?n[r]=p:n[r]})));return m.target=n,h||(m.smooth=on.getProperty(n,"scrollBehavior")==="smooth"),m},d0=function(n,i,r){var s=n,u=n,f=Ls(),h=f,m=i||50,p=Math.max(500,m*3),g=function(O,b){var E=Ls();b||E-f>m?(u=s,s=O,h=f,f=E):r?s+=O:s=u+(O-u)/(E-h)*(f-h)},_=function(){u=s=r?0:s,h=f=0},x=function(O){var b=h,E=u,w=Ls();return(O||O===0)&&O!==s&&g(O),f===h||w-h>p?0:(s+(r?E:-E))/((r?w:f)-b)*1e3};return{update:g,reset:_,getVelocity:x}},Ss=function(n,i){return i&&!n._gsapAllow&&n.preventDefault(),n.changedTouches?n.changedTouches[0]:n},Tb=function(n){var i=Math.max.apply(Math,n),r=Math.min.apply(Math,n);return Math.abs(i)>=Math.abs(r)?i:r},f1=function(){Hs=on.core.globals().ScrollTrigger,Hs&&Hs.core&&hS()},d1=function(n){return on=n||u1(),!jc&&on&&typeof document<"u"&&document.body&&(oa=window,xi=document,Ti=xi.documentElement,mo=xi.body,o1=[oa,xi,Ti,mo],on.utils.clamp,s1=on.core.context||function(){},Fi="onpointerenter"in mo?"pointer":"mouse",l1=Re.isTouch=oa.matchMedia&&oa.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in oa||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ga=Re.eventTypes=("ontouchstart"in Ti?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ti?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return c1=0},500),f1(),jc=1),jc};kn.op=Qe;Nt.cache=0;var Re=function(){function o(i){this.init(i)}var n=o.prototype;return n.init=function(r){jc||d1(on)||console.warn("Please gsap.registerPlugin(Observer)"),Hs||f1();var s=r.tolerance,u=r.dragMinimum,f=r.type,h=r.target,m=r.lineHeight,p=r.debounce,g=r.preventDefault,_=r.onStop,x=r.onStopDelay,y=r.ignore,O=r.wheelSpeed,b=r.event,E=r.onDragStart,w=r.onDragEnd,k=r.onDrag,D=r.onPress,R=r.onRelease,C=r.onRight,X=r.onLeft,N=r.onUp,G=r.onDown,P=r.onChangeX,F=r.onChangeY,it=r.onChange,W=r.onToggleX,_t=r.onToggleY,Tt=r.onHover,pt=r.onHoverEnd,H=r.onMove,Z=r.ignoreCheck,et=r.isNormalizer,mt=r.onGestureStart,T=r.onGestureEnd,Q=r.onWheel,at=r.onEnable,nt=r.onDisable,rt=r.onClick,bt=r.scrollSpeed,st=r.capture,Pt=r.allowClicks,wt=r.lockAxis,ce=r.onLockAxis;this.target=h=Bn(h)||Ti,this.vars=r,y&&(y=on.utils.toArray(y)),s=s||1e-9,u=u||0,O=O||1,bt=bt||1,f=f||"wheel,touch,pointer",p=p!==!1,m||(m=parseFloat(oa.getComputedStyle(mo).lineHeight)||22);var ha,Ce,Ke,Ut,fe,un,vn,j=this,bn=0,pa=0,Na=r.passive||!g&&r.passive!==!1,ee=ki(h,kn),Ua=ki(h,Qe),Ha=ee(),sr=Ua(),ze=~f.indexOf("touch")&&!~f.indexOf("pointer")&&Ga[0]==="pointerdown",Mn=Bs(h),qt=h.ownerDocument||xi,Ne=[0,0,0],le=[0,0,0],La=0,Mi=function(){return La=Ls()},Te=function(gt,kt){return(j.event=gt)&&y&&pS(gt.target,y)||kt&&ze&&gt.pointerType!=="touch"||Z&&Z(gt,kt)},ur=function(){j._vx.reset(),j._vy.reset(),Ce.pause(),_&&_(j)},Rn=function(){var gt=j.deltaX=Tb(Ne),kt=j.deltaY=Tb(le),tt=Math.abs(gt)>=s,dt=Math.abs(kt)>=s;it&&(tt||dt)&&it(j,gt,kt,Ne,le),tt&&(C&&j.deltaX>0&&C(j),X&&j.deltaX<0&&X(j),P&&P(j),W&&j.deltaX<0!=bn<0&&W(j),bn=j.deltaX,Ne[0]=Ne[1]=Ne[2]=0),dt&&(G&&j.deltaY>0&&G(j),N&&j.deltaY<0&&N(j),F&&F(j),_t&&j.deltaY<0!=pa<0&&_t(j),pa=j.deltaY,le[0]=le[1]=le[2]=0),(Ut||Ke)&&(H&&H(j),Ke&&(E&&Ke===1&&E(j),k&&k(j),Ke=0),Ut=!1),un&&!(un=!1)&&ce&&ce(j),fe&&(Q(j),fe=!1),ha=0},Cn=function(gt,kt,tt){Ne[tt]+=gt,le[tt]+=kt,j._vx.update(gt),j._vy.update(kt),p?ha||(ha=requestAnimationFrame(Rn)):Rn()},Ba=function(gt,kt){wt&&!vn&&(j.axis=vn=Math.abs(gt)>Math.abs(kt)?"x":"y",un=!0),vn!=="y"&&(Ne[2]+=gt,j._vx.update(gt,!0)),vn!=="x"&&(le[2]+=kt,j._vy.update(kt,!0)),p?ha||(ha=requestAnimationFrame(Rn)):Rn()},zn=function(gt){if(!Te(gt,1)){gt=Ss(gt,g);var kt=gt.clientX,tt=gt.clientY,dt=kt-j.x,ft=tt-j.y,St=j.isDragging;j.x=kt,j.y=tt,(St||(dt||ft)&&(Math.abs(j.startX-kt)>=u||Math.abs(j.startY-tt)>=u))&&(Ke=St?2:1,St||(j.isDragging=!0),Ba(dt,ft))}},cr=j.onPress=function(Ot){Te(Ot,1)||Ot&&Ot.button||(j.axis=vn=null,Ce.pause(),j.isPressed=!0,Ot=Ss(Ot),bn=pa=0,j.startX=j.x=Ot.clientX,j.startY=j.y=Ot.clientY,j._vx.reset(),j._vy.reset(),Sn(et?h:qt,Ga[1],zn,Na,!0),j.deltaX=j.deltaY=0,D&&D(j))},At=j.onRelease=function(Ot){if(!Te(Ot,1)){Tn(et?h:qt,Ga[1],zn,!0);var gt=!isNaN(j.y-j.startY),kt=j.isDragging,tt=kt&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),dt=Ss(Ot);!tt&&gt&&(j._vx.reset(),j._vy.reset(),g&&Pt&&on.delayedCall(.08,function(){if(Ls()-La>300&&!Ot.defaultPrevented){if(Ot.target.click)Ot.target.click();else if(qt.createEvent){var ft=qt.createEvent("MouseEvents");ft.initMouseEvent("click",!0,!0,oa,1,dt.screenX,dt.screenY,dt.clientX,dt.clientY,!1,!1,!1,!1,0,null),Ot.target.dispatchEvent(ft)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,_&&kt&&!et&&Ce.restart(!0),Ke&&Rn(),w&&kt&&w(j),R&&R(j,tt)}},Za=function(gt){return gt.touches&&gt.touches.length>1&&(j.isGesturing=!0)&&mt(gt,j.isDragging)},yn=function(){return(j.isGesturing=!1)||T(j)},en=function(gt){if(!Te(gt)){var kt=ee(),tt=Ua();Cn((kt-Ha)*bt,(tt-sr)*bt,1),Ha=kt,sr=tt,_&&Ce.restart(!0)}},Gn=function(gt){if(!Te(gt)){gt=Ss(gt,g),Q&&(fe=!0);var kt=(gt.deltaMode===1?m:gt.deltaMode===2?oa.innerHeight:1)*O;Cn(gt.deltaX*kt,gt.deltaY*kt,0),_&&!et&&Ce.restart(!0)}},Ka=function(gt){if(!Te(gt)){var kt=gt.clientX,tt=gt.clientY,dt=kt-j.x,ft=tt-j.y;j.x=kt,j.y=tt,Ut=!0,_&&Ce.restart(!0),(dt||ft)&&Ba(dt,ft)}},fr=function(gt){j.event=gt,Tt(j)},Vn=function(gt){j.event=gt,pt(j)},dr=function(gt){return Te(gt)||Ss(gt,g)&&rt(j)};Ce=j._dc=on.delayedCall(x||.25,ur).pause(),j.deltaX=j.deltaY=0,j._vx=d0(0,50,!0),j._vy=d0(0,50,!0),j.scrollX=ee,j.scrollY=Ua,j.isDragging=j.isGesturing=j.isPressed=!1,s1(this),j.enable=function(Ot){return j.isEnabled||(Sn(Mn?qt:h,"scroll",f0),f.indexOf("scroll")>=0&&Sn(Mn?qt:h,"scroll",en,Na,st),f.indexOf("wheel")>=0&&Sn(h,"wheel",Gn,Na,st),(f.indexOf("touch")>=0&&l1||f.indexOf("pointer")>=0)&&(Sn(h,Ga[0],cr,Na,st),Sn(qt,Ga[2],At),Sn(qt,Ga[3],At),Pt&&Sn(h,"click",Mi,!0,!0),rt&&Sn(h,"click",dr),mt&&Sn(qt,"gesturestart",Za),T&&Sn(qt,"gestureend",yn),Tt&&Sn(h,Fi+"enter",fr),pt&&Sn(h,Fi+"leave",Vn),H&&Sn(h,Fi+"move",Ka)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=Ut=Ke=!1,j._vx.reset(),j._vy.reset(),Ha=ee(),sr=Ua(),Ot&&Ot.type&&cr(Ot),at&&at(j)),j},j.disable=function(){j.isEnabled&&(co.filter(function(Ot){return Ot!==j&&Bs(Ot.target)}).length||Tn(Mn?qt:h,"scroll",f0),j.isPressed&&(j._vx.reset(),j._vy.reset(),Tn(et?h:qt,Ga[1],zn,!0)),Tn(Mn?qt:h,"scroll",en,st),Tn(h,"wheel",Gn,st),Tn(h,Ga[0],cr,st),Tn(qt,Ga[2],At),Tn(qt,Ga[3],At),Tn(h,"click",Mi,!0),Tn(h,"click",dr),Tn(qt,"gesturestart",Za),Tn(qt,"gestureend",yn),Tn(h,Fi+"enter",fr),Tn(h,Fi+"leave",Vn),Tn(h,Fi+"move",Ka),j.isEnabled=j.isPressed=j.isDragging=!1,nt&&nt(j))},j.kill=j.revert=function(){j.disable();var Ot=co.indexOf(j);Ot>=0&&co.splice(Ot,1),zr===j&&(zr=0)},co.push(j),et&&Bs(h)&&(zr=j),j.enable(b)},dS(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o}();Re.version="3.13.0";Re.create=function(o){return new Re(o)};Re.register=d1;Re.getAll=function(){return co.slice()};Re.getById=function(o){return co.filter(function(n){return n.vars.id===o})[0]};u1()&&on.registerPlugin(Re);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var lt,lo,zt,ue,ia,Jt,J0,rf,Is,qs,ks,Ac,dn,mf,h0,En,Sb,Ob,oo,h1,qh,p1,On,p0,m1,g1,vi,m0,$0,go,F0,lf,g0,Yh,kc=1,hn=Date.now,Ph=hn(),za=0,Ds=0,Eb=function(n,i,r){var s=aa(n)&&(n.substr(0,6)==="clamp("||n.indexOf("max")>-1);return r["_"+i+"Clamp"]=s,s?n.substr(6,n.length-7):n},wb=function(n,i){return i&&(!aa(n)||n.substr(0,6)!=="clamp(")?"clamp("+n+")":n},mS=function o(){return Ds&&requestAnimationFrame(o)},Ab=function(){return mf=1},kb=function(){return mf=0},er=function(n){return n},Ms=function(n){return Math.round(n*1e5)/1e5||0},v1=function(){return typeof window<"u"},b1=function(){return lt||v1()&&(lt=window.gsap)&&lt.registerPlugin&&lt},dl=function(n){return!!~J0.indexOf(n)},y1=function(n){return(n==="Height"?F0:zt["inner"+n])||ia["client"+n]||Jt["client"+n]},_1=function(n){return Ei(n,"getBoundingClientRect")||(dl(n)?function(){return Zc.width=zt.innerWidth,Zc.height=F0,Zc}:function(){return Cr(n)})},gS=function(n,i,r){var s=r.d,u=r.d2,f=r.a;return(f=Ei(n,"getBoundingClientRect"))?function(){return f()[s]}:function(){return(i?y1(u):n["client"+u])||0}},vS=function(n,i){return!i||~ir.indexOf(n)?_1(n):function(){return Zc}},rr=function(n,i){var r=i.s,s=i.d2,u=i.d,f=i.a;return Math.max(0,(r="scroll"+s)&&(f=Ei(n,r))?f()-_1(n)()[u]:dl(n)?(ia[r]||Jt[r])-y1(s):n[r]-n["offset"+s])},Dc=function(n,i){for(var r=0;r<oo.length;r+=3)(!i||~i.indexOf(oo[r+1]))&&n(oo[r],oo[r+1],oo[r+2])},aa=function(n){return typeof n=="string"},mn=function(n){return typeof n=="function"},Rs=function(n){return typeof n=="number"},Wi=function(n){return typeof n=="object"},Os=function(n,i,r){return n&&n.progress(i?0:1)&&r&&n.pause()},jh=function(n,i){if(n.enabled){var r=n._ctx?n._ctx.add(function(){return i(n)}):i(n);r&&r.totalTime&&(n.callbackAnimation=r)}},ro=Math.abs,x1="left",T1="top",W0="right",I0="bottom",ol="width",sl="height",Ys="Right",Ps="Left",js="Top",Xs="Bottom",qe="padding",ka="margin",Oo="Width",tp="Height",Ve="px",Da=function(n){return zt.getComputedStyle(n)},bS=function(n){var i=Da(n).position;n.style.position=i==="absolute"||i==="fixed"?i:"relative"},Db=function(n,i){for(var r in i)r in n||(n[r]=i[r]);return n},Cr=function(n,i){var r=i&&Da(n)[h0]!=="matrix(1, 0, 0, 1, 0, 0)"&&lt.to(n,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=n.getBoundingClientRect();return r&&r.progress(0).kill(),s},of=function(n,i){var r=i.d2;return n["offset"+r]||n["client"+r]||0},S1=function(n){var i=[],r=n.labels,s=n.duration(),u;for(u in r)i.push(r[u]/s);return i},yS=function(n){return function(i){return lt.utils.snap(S1(n),i)}},ep=function(n){var i=lt.utils.snap(n),r=Array.isArray(n)&&n.slice(0).sort(function(s,u){return s-u});return r?function(s,u,f){f===void 0&&(f=.001);var h;if(!u)return i(s);if(u>0){for(s-=f,h=0;h<r.length;h++)if(r[h]>=s)return r[h];return r[h-1]}else for(h=r.length,s+=f;h--;)if(r[h]<=s)return r[h];return r[0]}:function(s,u,f){f===void 0&&(f=.001);var h=i(s);return!u||Math.abs(h-s)<f||h-s<0==u<0?h:i(u<0?s-n:s+n)}},_S=function(n){return function(i,r){return ep(S1(n))(i,r.direction)}},Mc=function(n,i,r,s){return r.split(",").forEach(function(u){return n(i,u,s)})},Ie=function(n,i,r,s,u){return n.addEventListener(i,r,{passive:!s,capture:!!u})},We=function(n,i,r,s){return n.removeEventListener(i,r,!!s)},Rc=function(n,i,r){r=r&&r.wheelHandler,r&&(n(i,"wheel",r),n(i,"touchmove",r))},Mb={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cc={toggleActions:"play",anticipatePin:0},sf={top:0,left:0,center:.5,bottom:1,right:1},Xc=function(n,i){if(aa(n)){var r=n.indexOf("="),s=~r?+(n.charAt(r-1)+1)*parseFloat(n.substr(r+1)):0;~r&&(n.indexOf("%")>r&&(s*=i/100),n=n.substr(0,r-1)),n=s+(n in sf?sf[n]*i:~n.indexOf("%")?parseFloat(n)*i/100:parseFloat(n)||0)}return n},zc=function(n,i,r,s,u,f,h,m){var p=u.startColor,g=u.endColor,_=u.fontSize,x=u.indent,y=u.fontWeight,O=ue.createElement("div"),b=dl(r)||Ei(r,"pinType")==="fixed",E=n.indexOf("scroller")!==-1,w=b?Jt:r,k=n.indexOf("start")!==-1,D=k?p:g,R="border-color:"+D+";font-size:"+_+";color:"+D+";font-weight:"+y+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return R+="position:"+((E||m)&&b?"fixed;":"absolute;"),(E||m||!b)&&(R+=(s===Qe?W0:I0)+":"+(f+parseFloat(x))+"px;"),h&&(R+="box-sizing:border-box;text-align:left;width:"+h.offsetWidth+"px;"),O._isStart=k,O.setAttribute("class","gsap-marker-"+n+(i?" marker-"+i:"")),O.style.cssText=R,O.innerText=i||i===0?n+"-"+i:n,w.children[0]?w.insertBefore(O,w.children[0]):w.appendChild(O),O._offset=O["offset"+s.op.d2],Gc(O,0,s,k),O},Gc=function(n,i,r,s){var u={display:"block"},f=r[s?"os2":"p2"],h=r[s?"p2":"os2"];n._isFlipped=s,u[r.a+"Percent"]=s?-100:0,u[r.a]=s?"1px":0,u["border"+f+Oo]=1,u["border"+h+Oo]=0,u[r.p]=i+"px",lt.set(n,u)},Rt=[],v0={},tu,Rb=function(){return hn()-za>34&&(tu||(tu=requestAnimationFrame(Ur)))},io=function(){(!On||!On.isPressed||On.startX>Jt.clientWidth)&&(Nt.cache++,On?tu||(tu=requestAnimationFrame(Ur)):Ur(),za||pl("scrollStart"),za=hn())},Xh=function(){g1=zt.innerWidth,m1=zt.innerHeight},Cs=function(n){Nt.cache++,(n===!0||!dn&&!p1&&!ue.fullscreenElement&&!ue.webkitFullscreenElement&&(!p0||g1!==zt.innerWidth||Math.abs(zt.innerHeight-m1)>zt.innerHeight*.25))&&rf.restart(!0)},hl={},xS=[],O1=function o(){return We(Dt,"scrollEnd",o)||el(!0)},pl=function(n){return hl[n]&&hl[n].map(function(i){return i()})||xS},na=[],E1=function(n){for(var i=0;i<na.length;i+=5)(!n||na[i+4]&&na[i+4].query===n)&&(na[i].style.cssText=na[i+1],na[i].getBBox&&na[i].setAttribute("transform",na[i+2]||""),na[i+3].uncache=1)},np=function(n,i){var r;for(En=0;En<Rt.length;En++)r=Rt[En],r&&(!i||r._ctx===i)&&(n?r.kill(1):r.revert(!0,!0));lf=!0,i&&E1(i),i||pl("revert")},w1=function(n,i){Nt.cache++,(i||!wn)&&Nt.forEach(function(r){return mn(r)&&r.cacheID++&&(r.rec=0)}),aa(n)&&(zt.history.scrollRestoration=$0=n)},wn,ul=0,Cb,TS=function(){if(Cb!==ul){var n=Cb=ul;requestAnimationFrame(function(){return n===ul&&el(!0)})}},A1=function(){Jt.appendChild(go),F0=!On&&go.offsetHeight||zt.innerHeight,Jt.removeChild(go)},zb=function(n){return Is(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=n?"none":"block"})},el=function(n,i){if(ia=ue.documentElement,Jt=ue.body,J0=[zt,ue,ia,Jt],za&&!n&&!lf){Ie(Dt,"scrollEnd",O1);return}A1(),wn=Dt.isRefreshing=!0,Nt.forEach(function(s){return mn(s)&&++s.cacheID&&(s.rec=s())});var r=pl("refreshInit");h1&&Dt.sort(),i||np(),Nt.forEach(function(s){mn(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),Rt.slice(0).forEach(function(s){return s.refresh()}),lf=!1,Rt.forEach(function(s){if(s._subPinOffset&&s.pin){var u=s.vars.horizontal?"offsetWidth":"offsetHeight",f=s.pin[u];s.revert(!0,1),s.adjustPinSpacing(s.pin[u]-f),s.refresh()}}),g0=1,zb(!0),Rt.forEach(function(s){var u=rr(s.scroller,s._dir),f=s.vars.end==="max"||s._endClamp&&s.end>u,h=s._startClamp&&s.start>=u;(f||h)&&s.setPositions(h?u-1:s.start,f?Math.max(h?u:s.start+1,u):s.end,!0)}),zb(!1),g0=0,r.forEach(function(s){return s&&s.render&&s.render(-1)}),Nt.forEach(function(s){mn(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),w1($0,1),rf.pause(),ul++,wn=2,Ur(2),Rt.forEach(function(s){return mn(s.vars.onRefresh)&&s.vars.onRefresh(s)}),wn=Dt.isRefreshing=!1,pl("refresh")},b0=0,Vc=1,Gs,Ur=function(n){if(n===2||!wn&&!lf){Dt.isUpdating=!0,Gs&&Gs.update(0);var i=Rt.length,r=hn(),s=r-Ph>=50,u=i&&Rt[0].scroll();if(Vc=b0>u?-1:1,wn||(b0=u),s&&(za&&!mf&&r-za>200&&(za=0,pl("scrollEnd")),ks=Ph,Ph=r),Vc<0){for(En=i;En-- >0;)Rt[En]&&Rt[En].update(0,s);Vc=1}else for(En=0;En<i;En++)Rt[En]&&Rt[En].update(0,s);Dt.isUpdating=!1}tu=0},y0=[x1,T1,I0,W0,ka+Xs,ka+Ys,ka+js,ka+Ps,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qc=y0.concat([ol,sl,"boxSizing","max"+Oo,"max"+tp,"position",ka,qe,qe+js,qe+Ys,qe+Xs,qe+Ps]),SS=function(n,i,r){vo(r);var s=n._gsap;if(s.spacerIsNative)vo(s.spacerState);else if(n._gsap.swappedIn){var u=i.parentNode;u&&(u.insertBefore(n,i),u.removeChild(i))}n._gsap.swappedIn=!1},Gh=function(n,i,r,s){if(!n._gsap.swappedIn){for(var u=y0.length,f=i.style,h=n.style,m;u--;)m=y0[u],f[m]=r[m];f.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(f.display="inline-block"),h[I0]=h[W0]="auto",f.flexBasis=r.flexBasis||"auto",f.overflow="visible",f.boxSizing="border-box",f[ol]=of(n,kn)+Ve,f[sl]=of(n,Qe)+Ve,f[qe]=h[ka]=h[T1]=h[x1]="0",vo(s),h[ol]=h["max"+Oo]=r[ol],h[sl]=h["max"+tp]=r[sl],h[qe]=r[qe],n.parentNode!==i&&(n.parentNode.insertBefore(i,n),i.appendChild(n)),n._gsap.swappedIn=!0}},OS=/([A-Z])/g,vo=function(n){if(n){var i=n.t.style,r=n.length,s=0,u,f;for((n.t._gsap||lt.core.getCache(n.t)).uncache=1;s<r;s+=2)f=n[s+1],u=n[s],f?i[u]=f:i[u]&&i.removeProperty(u.replace(OS,"-$1").toLowerCase())}},Nc=function(n){for(var i=Qc.length,r=n.style,s=[],u=0;u<i;u++)s.push(Qc[u],r[Qc[u]]);return s.t=n,s},ES=function(n,i,r){for(var s=[],u=n.length,f=r?8:0,h;f<u;f+=2)h=n[f],s.push(h,h in i?i[h]:n[f+1]);return s.t=n.t,s},Zc={left:0,top:0},Nb=function(n,i,r,s,u,f,h,m,p,g,_,x,y,O){mn(n)&&(n=n(m)),aa(n)&&n.substr(0,3)==="max"&&(n=x+(n.charAt(4)==="="?Xc("0"+n.substr(3),r):0));var b=y?y.time():0,E,w,k;if(y&&y.seek(0),isNaN(n)||(n=+n),Rs(n))y&&(n=lt.utils.mapRange(y.scrollTrigger.start,y.scrollTrigger.end,0,x,n)),h&&Gc(h,r,s,!0);else{mn(i)&&(i=i(m));var D=(n||"0").split(" "),R,C,X,N;k=Bn(i,m)||Jt,R=Cr(k)||{},(!R||!R.left&&!R.top)&&Da(k).display==="none"&&(N=k.style.display,k.style.display="block",R=Cr(k),N?k.style.display=N:k.style.removeProperty("display")),C=Xc(D[0],R[s.d]),X=Xc(D[1]||"0",r),n=R[s.p]-p[s.p]-g+C+u-X,h&&Gc(h,X,s,r-X<20||h._isStart&&X>20),r-=r-X}if(O&&(m[O]=n||-.001,n<0&&(n=0)),f){var G=n+r,P=f._isStart;E="scroll"+s.d2,Gc(f,G,s,P&&G>20||!P&&(_?Math.max(Jt[E],ia[E]):f.parentNode[E])<=G+1),_&&(p=Cr(h),_&&(f.style[s.op.p]=p[s.op.p]-s.op.m-f._offset+Ve))}return y&&k&&(E=Cr(k),y.seek(x),w=Cr(k),y._caScrollDist=E[s.p]-w[s.p],n=n/y._caScrollDist*x),y&&y.seek(b),y?n:Math.round(n)},wS=/(webkit|moz|length|cssText|inset)/i,Ub=function(n,i,r,s){if(n.parentNode!==i){var u=n.style,f,h;if(i===Jt){n._stOrig=u.cssText,h=Da(n);for(f in h)!+f&&!wS.test(f)&&h[f]&&typeof u[f]=="string"&&f!=="0"&&(u[f]=h[f]);u.top=r,u.left=s}else u.cssText=n._stOrig;lt.core.getCache(n).uncache=1,i.appendChild(n)}},k1=function(n,i,r){var s=i,u=s;return function(f){var h=Math.round(n());return h!==s&&h!==u&&Math.abs(h-s)>3&&Math.abs(h-u)>3&&(f=h,r&&r()),u=s,s=Math.round(f),s}},Uc=function(n,i,r){var s={};s[i.p]="+="+r,lt.set(n,s)},Hb=function(n,i){var r=ki(n,i),s="_scroll"+i.p2,u=function f(h,m,p,g,_){var x=f.tween,y=m.onComplete,O={};p=p||r();var b=k1(r,p,function(){x.kill(),f.tween=0});return _=g&&_||0,g=g||h-p,x&&x.kill(),m[s]=h,m.inherit=!1,m.modifiers=O,O[s]=function(){return b(p+g*x.ratio+_*x.ratio*x.ratio)},m.onUpdate=function(){Nt.cache++,f.tween&&Ur()},m.onComplete=function(){f.tween=0,y&&y.call(x)},x=f.tween=lt.to(n,m),x};return n[s]=r,r.wheelHandler=function(){return u.tween&&u.tween.kill()&&(u.tween=0)},Ie(n,"wheel",r.wheelHandler),Dt.isTouch&&Ie(n,"touchmove",r.wheelHandler),u},Dt=function(){function o(i,r){lo||o.register(lt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),m0(this),this.init(i,r)}var n=o.prototype;return n.init=function(r,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ds){this.update=this.refresh=this.kill=er;return}r=Db(aa(r)||Rs(r)||r.nodeType?{trigger:r}:r,Cc);var u=r,f=u.onUpdate,h=u.toggleClass,m=u.id,p=u.onToggle,g=u.onRefresh,_=u.scrub,x=u.trigger,y=u.pin,O=u.pinSpacing,b=u.invalidateOnRefresh,E=u.anticipatePin,w=u.onScrubComplete,k=u.onSnapComplete,D=u.once,R=u.snap,C=u.pinReparent,X=u.pinSpacer,N=u.containerAnimation,G=u.fastScrollEnd,P=u.preventOverlaps,F=r.horizontal||r.containerAnimation&&r.horizontal!==!1?kn:Qe,it=!_&&_!==0,W=Bn(r.scroller||zt),_t=lt.core.getCache(W),Tt=dl(W),pt=("pinType"in r?r.pinType:Ei(W,"pinType")||Tt&&"fixed")==="fixed",H=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],Z=it&&r.toggleActions.split(" "),et="markers"in r?r.markers:Cc.markers,mt=Tt?0:parseFloat(Da(W)["border"+F.p2+Oo])||0,T=this,Q=r.onRefreshInit&&function(){return r.onRefreshInit(T)},at=gS(W,Tt,F),nt=vS(W,Tt),rt=0,bt=0,st=0,Pt=ki(W,F),wt,ce,ha,Ce,Ke,Ut,fe,un,vn,j,bn,pa,Na,ee,Ua,Ha,sr,ze,Mn,qt,Ne,le,La,Mi,Te,ur,Rn,Cn,Ba,zn,cr,At,Za,yn,en,Gn,Ka,fr,Vn;if(T._startClamp=T._endClamp=!1,T._dir=F,E*=45,T.scroller=W,T.scroll=N?N.time.bind(N):Pt,Ce=Pt(),T.vars=r,s=s||r.animation,"refreshPriority"in r&&(h1=1,r.refreshPriority===-9999&&(Gs=T)),_t.tweenScroll=_t.tweenScroll||{top:Hb(W,Qe),left:Hb(W,kn)},T.tweenTo=wt=_t.tweenScroll[F.p],T.scrubDuration=function(tt){Za=Rs(tt)&&tt,Za?At?At.duration(tt):At=lt.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Za,paused:!0,onComplete:function(){return w&&w(T)}}):(At&&At.progress(1).kill(),At=0)},s&&(s.vars.lazy=!1,s._initted&&!T.isReverted||s.vars.immediateRender!==!1&&r.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),T.animation=s.pause(),s.scrollTrigger=T,T.scrubDuration(_),zn=0,m||(m=s.vars.id)),R&&((!Wi(R)||R.push)&&(R={snapTo:R}),"scrollBehavior"in Jt.style&&lt.set(Tt?[Jt,ia]:W,{scrollBehavior:"auto"}),Nt.forEach(function(tt){return mn(tt)&&tt.target===(Tt?ue.scrollingElement||ia:W)&&(tt.smooth=!1)}),ha=mn(R.snapTo)?R.snapTo:R.snapTo==="labels"?yS(s):R.snapTo==="labelsDirectional"?_S(s):R.directional!==!1?function(tt,dt){return ep(R.snapTo)(tt,hn()-bt<500?0:dt.direction)}:lt.utils.snap(R.snapTo),yn=R.duration||{min:.1,max:2},yn=Wi(yn)?qs(yn.min,yn.max):qs(yn,yn),en=lt.delayedCall(R.delay||Za/2||.1,function(){var tt=Pt(),dt=hn()-bt<500,ft=wt.tween;if((dt||Math.abs(T.getVelocity())<10)&&!ft&&!mf&&rt!==tt){var St=(tt-Ut)/ee,Ue=s&&!it?s.totalProgress():St,Ht=dt?0:(Ue-cr)/(hn()-ks)*1e3||0,he=lt.utils.clamp(-St,1-St,ro(Ht/2)*Ht/.185),Se=St+(R.inertia===!1?0:he),oe,Qt,jt=R,nn=jt.onStart,Kt=jt.onInterrupt,Gt=jt.onComplete;if(oe=ha(Se,T),Rs(oe)||(oe=Se),Qt=Math.max(0,Math.round(Ut+oe*ee)),tt<=fe&&tt>=Ut&&Qt!==tt){if(ft&&!ft._initted&&ft.data<=ro(Qt-tt))return;R.inertia===!1&&(he=oe-St),wt(Qt,{duration:yn(ro(Math.max(ro(Se-Ue),ro(oe-Ue))*.185/Ht/.05||0)),ease:R.ease||"power3",data:ro(Qt-tt),onInterrupt:function(){return en.restart(!0)&&Kt&&Kt(T)},onComplete:function(){T.update(),rt=Pt(),s&&!it&&(At?At.resetTo("totalProgress",oe,s._tTime/s._tDur):s.progress(oe)),zn=cr=s&&!it?s.totalProgress():T.progress,k&&k(T),Gt&&Gt(T)}},tt,he*ee,Qt-tt-he*ee),nn&&nn(T,wt.tween)}}else T.isActive&&rt!==tt&&en.restart(!0)}).pause()),m&&(v0[m]=T),x=T.trigger=Bn(x||y!==!0&&y),Vn=x&&x._gsap&&x._gsap.stRevert,Vn&&(Vn=Vn(T)),y=y===!0?x:Bn(y),aa(h)&&(h={targets:x,className:h}),y&&(O===!1||O===ka||(O=!O&&y.parentNode&&y.parentNode.style&&Da(y.parentNode).display==="flex"?!1:qe),T.pin=y,ce=lt.core.getCache(y),ce.spacer?Ua=ce.pinState:(X&&(X=Bn(X),X&&!X.nodeType&&(X=X.current||X.nativeElement),ce.spacerIsNative=!!X,X&&(ce.spacerState=Nc(X))),ce.spacer=ze=X||ue.createElement("div"),ze.classList.add("pin-spacer"),m&&ze.classList.add("pin-spacer-"+m),ce.pinState=Ua=Nc(y)),r.force3D!==!1&&lt.set(y,{force3D:!0}),T.spacer=ze=ce.spacer,Ba=Da(y),Mi=Ba[O+F.os2],qt=lt.getProperty(y),Ne=lt.quickSetter(y,F.a,Ve),Gh(y,ze,Ba),sr=Nc(y)),et){pa=Wi(et)?Db(et,Mb):Mb,j=zc("scroller-start",m,W,F,pa,0),bn=zc("scroller-end",m,W,F,pa,0,j),Mn=j["offset"+F.op.d2];var dr=Bn(Ei(W,"content")||W);un=this.markerStart=zc("start",m,dr,F,pa,Mn,0,N),vn=this.markerEnd=zc("end",m,dr,F,pa,Mn,0,N),N&&(fr=lt.quickSetter([un,vn],F.a,Ve)),!pt&&!(ir.length&&Ei(W,"fixedMarkers")===!0)&&(bS(Tt?Jt:W),lt.set([j,bn],{force3D:!0}),ur=lt.quickSetter(j,F.a,Ve),Cn=lt.quickSetter(bn,F.a,Ve))}if(N){var Ot=N.vars.onUpdate,gt=N.vars.onUpdateParams;N.eventCallback("onUpdate",function(){T.update(0,0,1),Ot&&Ot.apply(N,gt||[])})}if(T.previous=function(){return Rt[Rt.indexOf(T)-1]},T.next=function(){return Rt[Rt.indexOf(T)+1]},T.revert=function(tt,dt){if(!dt)return T.kill(!0);var ft=tt!==!1||!T.enabled,St=dn;ft!==T.isReverted&&(ft&&(Gn=Math.max(Pt(),T.scroll.rec||0),st=T.progress,Ka=s&&s.progress()),un&&[un,vn,j,bn].forEach(function(Ue){return Ue.style.display=ft?"none":"block"}),ft&&(dn=T,T.update(ft)),y&&(!C||!T.isActive)&&(ft?SS(y,ze,Ua):Gh(y,ze,Da(y),Te)),ft||T.update(ft),dn=St,T.isReverted=ft)},T.refresh=function(tt,dt,ft,St){if(!((dn||!T.enabled)&&!dt)){if(y&&tt&&za){Ie(o,"scrollEnd",O1);return}!wn&&Q&&Q(T),dn=T,wt.tween&&!ft&&(wt.tween.kill(),wt.tween=0),At&&At.pause(),b&&s&&(s.revert({kill:!1}).invalidate(),s.getChildren&&s.getChildren(!0,!0,!1).forEach(function(va){return va.vars.immediateRender&&va.render(0,!0,!0)})),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;var Ue=at(),Ht=nt(),he=N?N.duration():rr(W,F),Se=ee<=.01||!ee,oe=0,Qt=St||0,jt=Wi(ft)?ft.end:r.end,nn=r.endTrigger||x,Kt=Wi(ft)?ft.start:r.start||(r.start===0||!x?0:y?"0 0":"0 100%"),Gt=T.pinnedContainer=r.pinnedContainer&&Bn(r.pinnedContainer,T),Qn=x&&Math.max(0,Rt.indexOf(T))||0,He=Qn,de,ve,hr,Ri,je,Ae,_n,Qr,ma,pr,Zn,ga,Zr;for(et&&Wi(ft)&&(ga=lt.getProperty(j,F.p),Zr=lt.getProperty(bn,F.p));He-- >0;)Ae=Rt[He],Ae.end||Ae.refresh(0,1)||(dn=T),_n=Ae.pin,_n&&(_n===x||_n===y||_n===Gt)&&!Ae.isReverted&&(pr||(pr=[]),pr.unshift(Ae),Ae.revert(!0,!0)),Ae!==Rt[He]&&(Qn--,He--);for(mn(Kt)&&(Kt=Kt(T)),Kt=Eb(Kt,"start",T),Ut=Nb(Kt,x,Ue,F,Pt(),un,j,T,Ht,mt,pt,he,N,T._startClamp&&"_startClamp")||(y?-.001:0),mn(jt)&&(jt=jt(T)),aa(jt)&&!jt.indexOf("+=")&&(~jt.indexOf(" ")?jt=(aa(Kt)?Kt.split(" ")[0]:"")+jt:(oe=Xc(jt.substr(2),Ue),jt=aa(Kt)?Kt:(N?lt.utils.mapRange(0,N.duration(),N.scrollTrigger.start,N.scrollTrigger.end,Ut):Ut)+oe,nn=x)),jt=Eb(jt,"end",T),fe=Math.max(Ut,Nb(jt||(nn?"100% 0":he),nn,Ue,F,Pt()+oe,vn,bn,T,Ht,mt,pt,he,N,T._endClamp&&"_endClamp"))||-.001,oe=0,He=Qn;He--;)Ae=Rt[He],_n=Ae.pin,_n&&Ae.start-Ae._pinPush<=Ut&&!N&&Ae.end>0&&(de=Ae.end-(T._startClamp?Math.max(0,Ae.start):Ae.start),(_n===x&&Ae.start-Ae._pinPush<Ut||_n===Gt)&&isNaN(Kt)&&(oe+=de*(1-Ae.progress)),_n===y&&(Qt+=de));if(Ut+=oe,fe+=oe,T._startClamp&&(T._startClamp+=oe),T._endClamp&&!wn&&(T._endClamp=fe||-.001,fe=Math.min(fe,rr(W,F))),ee=fe-Ut||(Ut-=.01)&&.001,Se&&(st=lt.utils.clamp(0,1,lt.utils.normalize(Ut,fe,Gn))),T._pinPush=Qt,un&&oe&&(de={},de[F.a]="+="+oe,Gt&&(de[F.p]="-="+Pt()),lt.set([un,vn],de)),y&&!(g0&&T.end>=rr(W,F)))de=Da(y),Ri=F===Qe,hr=Pt(),le=parseFloat(qt(F.a))+Qt,!he&&fe>1&&(Zn=(Tt?ue.scrollingElement||ia:W).style,Zn={style:Zn,value:Zn["overflow"+F.a.toUpperCase()]},Tt&&Da(Jt)["overflow"+F.a.toUpperCase()]!=="scroll"&&(Zn.style["overflow"+F.a.toUpperCase()]="scroll")),Gh(y,ze,de),sr=Nc(y),ve=Cr(y,!0),Qr=pt&&ki(W,Ri?kn:Qe)(),O?(Te=[O+F.os2,ee+Qt+Ve],Te.t=ze,He=O===qe?of(y,F)+ee+Qt:0,He&&(Te.push(F.d,He+Ve),ze.style.flexBasis!=="auto"&&(ze.style.flexBasis=He+Ve)),vo(Te),Gt&&Rt.forEach(function(va){va.pin===Gt&&va.vars.pinSpacing!==!1&&(va._subPinOffset=!0)}),pt&&Pt(Gn)):(He=of(y,F),He&&ze.style.flexBasis!=="auto"&&(ze.style.flexBasis=He+Ve)),pt&&(je={top:ve.top+(Ri?hr-Ut:Qr)+Ve,left:ve.left+(Ri?Qr:hr-Ut)+Ve,boxSizing:"border-box",position:"fixed"},je[ol]=je["max"+Oo]=Math.ceil(ve.width)+Ve,je[sl]=je["max"+tp]=Math.ceil(ve.height)+Ve,je[ka]=je[ka+js]=je[ka+Ys]=je[ka+Xs]=je[ka+Ps]="0",je[qe]=de[qe],je[qe+js]=de[qe+js],je[qe+Ys]=de[qe+Ys],je[qe+Xs]=de[qe+Xs],je[qe+Ps]=de[qe+Ps],Ha=ES(Ua,je,C),wn&&Pt(0)),s?(ma=s._initted,qh(1),s.render(s.duration(),!0,!0),La=qt(F.a)-le+ee+Qt,Rn=Math.abs(ee-La)>1,pt&&Rn&&Ha.splice(Ha.length-2,2),s.render(0,!0,!0),ma||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),qh(0)):La=ee,Zn&&(Zn.value?Zn.style["overflow"+F.a.toUpperCase()]=Zn.value:Zn.style.removeProperty("overflow-"+F.a));else if(x&&Pt()&&!N)for(ve=x.parentNode;ve&&ve!==Jt;)ve._pinOffset&&(Ut-=ve._pinOffset,fe-=ve._pinOffset),ve=ve.parentNode;pr&&pr.forEach(function(va){return va.revert(!1,!0)}),T.start=Ut,T.end=fe,Ce=Ke=wn?Gn:Pt(),!N&&!wn&&(Ce<Gn&&Pt(Gn),T.scroll.rec=0),T.revert(!1,!0),bt=hn(),en&&(rt=-1,en.restart(!0)),dn=0,s&&it&&(s._initted||Ka)&&s.progress()!==Ka&&s.progress(Ka||0,!0).render(s.time(),!0,!0),(Se||st!==T.progress||N||b||s&&!s._initted)&&(s&&!it&&(s._initted||st||s.vars.immediateRender!==!1)&&s.totalProgress(N&&Ut<-.001&&!st?lt.utils.normalize(Ut,fe,0):st,!0),T.progress=Se||(Ce-Ut)/ee===st?0:st),y&&O&&(ze._pinOffset=Math.round(T.progress*La)),At&&At.invalidate(),isNaN(ga)||(ga-=lt.getProperty(j,F.p),Zr-=lt.getProperty(bn,F.p),Uc(j,F,ga),Uc(un,F,ga-(St||0)),Uc(bn,F,Zr),Uc(vn,F,Zr-(St||0))),Se&&!wn&&T.update(),g&&!wn&&!Na&&(Na=!0,g(T),Na=!1)}},T.getVelocity=function(){return(Pt()-Ke)/(hn()-ks)*1e3||0},T.endAnimation=function(){Os(T.callbackAnimation),s&&(At?At.progress(1):s.paused()?it||Os(s,T.direction<0,1):Os(s,s.reversed()))},T.labelToScroll=function(tt){return s&&s.labels&&(Ut||T.refresh()||Ut)+s.labels[tt]/s.duration()*ee||0},T.getTrailing=function(tt){var dt=Rt.indexOf(T),ft=T.direction>0?Rt.slice(0,dt).reverse():Rt.slice(dt+1);return(aa(tt)?ft.filter(function(St){return St.vars.preventOverlaps===tt}):ft).filter(function(St){return T.direction>0?St.end<=Ut:St.start>=fe})},T.update=function(tt,dt,ft){if(!(N&&!ft&&!tt)){var St=wn===!0?Gn:T.scroll(),Ue=tt?0:(St-Ut)/ee,Ht=Ue<0?0:Ue>1?1:Ue||0,he=T.progress,Se,oe,Qt,jt,nn,Kt,Gt,Qn;if(dt&&(Ke=Ce,Ce=N?Pt():St,R&&(cr=zn,zn=s&&!it?s.totalProgress():Ht)),E&&y&&!dn&&!kc&&za&&(!Ht&&Ut<St+(St-Ke)/(hn()-ks)*E?Ht=1e-4:Ht===1&&fe>St+(St-Ke)/(hn()-ks)*E&&(Ht=.9999)),Ht!==he&&T.enabled){if(Se=T.isActive=!!Ht&&Ht<1,oe=!!he&&he<1,Kt=Se!==oe,nn=Kt||!!Ht!=!!he,T.direction=Ht>he?1:-1,T.progress=Ht,nn&&!dn&&(Qt=Ht&&!he?0:Ht===1?1:he===1?2:3,it&&(jt=!Kt&&Z[Qt+1]!=="none"&&Z[Qt+1]||Z[Qt],Qn=s&&(jt==="complete"||jt==="reset"||jt in s))),P&&(Kt||Qn)&&(Qn||_||!s)&&(mn(P)?P(T):T.getTrailing(P).forEach(function(hr){return hr.endAnimation()})),it||(At&&!dn&&!kc?(At._dp._time-At._start!==At._time&&At.render(At._dp._time-At._start),At.resetTo?At.resetTo("totalProgress",Ht,s._tTime/s._tDur):(At.vars.totalProgress=Ht,At.invalidate().restart())):s&&s.totalProgress(Ht,!!(dn&&(bt||tt)))),y){if(tt&&O&&(ze.style[O+F.os2]=Mi),!pt)Ne(Ms(le+La*Ht));else if(nn){if(Gt=!tt&&Ht>he&&fe+1>St&&St+1>=rr(W,F),C)if(!tt&&(Se||Gt)){var He=Cr(y,!0),de=St-Ut;Ub(y,Jt,He.top+(F===Qe?de:0)+Ve,He.left+(F===Qe?0:de)+Ve)}else Ub(y,ze);vo(Se||Gt?Ha:sr),Rn&&Ht<1&&Se||Ne(le+(Ht===1&&!Gt?La:0))}}R&&!wt.tween&&!dn&&!kc&&en.restart(!0),h&&(Kt||D&&Ht&&(Ht<1||!Yh))&&Is(h.targets).forEach(function(hr){return hr.classList[Se||D?"add":"remove"](h.className)}),f&&!it&&!tt&&f(T),nn&&!dn?(it&&(Qn&&(jt==="complete"?s.pause().totalProgress(1):jt==="reset"?s.restart(!0).pause():jt==="restart"?s.restart(!0):s[jt]()),f&&f(T)),(Kt||!Yh)&&(p&&Kt&&jh(T,p),H[Qt]&&jh(T,H[Qt]),D&&(Ht===1?T.kill(!1,1):H[Qt]=0),Kt||(Qt=Ht===1?1:3,H[Qt]&&jh(T,H[Qt]))),G&&!Se&&Math.abs(T.getVelocity())>(Rs(G)?G:2500)&&(Os(T.callbackAnimation),At?At.progress(1):Os(s,jt==="reverse"?1:!Ht,1))):it&&f&&!dn&&f(T)}if(Cn){var ve=N?St/N.duration()*(N._caScrollDist||0):St;ur(ve+(j._isFlipped?1:0)),Cn(ve)}fr&&fr(-St/N.duration()*(N._caScrollDist||0))}},T.enable=function(tt,dt){T.enabled||(T.enabled=!0,Ie(W,"resize",Cs),Tt||Ie(W,"scroll",io),Q&&Ie(o,"refreshInit",Q),tt!==!1&&(T.progress=st=0,Ce=Ke=rt=Pt()),dt!==!1&&T.refresh())},T.getTween=function(tt){return tt&&wt?wt.tween:At},T.setPositions=function(tt,dt,ft,St){if(N){var Ue=N.scrollTrigger,Ht=N.duration(),he=Ue.end-Ue.start;tt=Ue.start+he*tt/Ht,dt=Ue.start+he*dt/Ht}T.refresh(!1,!1,{start:wb(tt,ft&&!!T._startClamp),end:wb(dt,ft&&!!T._endClamp)},St),T.update()},T.adjustPinSpacing=function(tt){if(Te&&tt){var dt=Te.indexOf(F.d)+1;Te[dt]=parseFloat(Te[dt])+tt+Ve,Te[1]=parseFloat(Te[1])+tt+Ve,vo(Te)}},T.disable=function(tt,dt){if(T.enabled&&(tt!==!1&&T.revert(!0,!0),T.enabled=T.isActive=!1,dt||At&&At.pause(),Gn=0,ce&&(ce.uncache=1),Q&&We(o,"refreshInit",Q),en&&(en.pause(),wt.tween&&wt.tween.kill()&&(wt.tween=0)),!Tt)){for(var ft=Rt.length;ft--;)if(Rt[ft].scroller===W&&Rt[ft]!==T)return;We(W,"resize",Cs),Tt||We(W,"scroll",io)}},T.kill=function(tt,dt){T.disable(tt,dt),At&&!dt&&At.kill(),m&&delete v0[m];var ft=Rt.indexOf(T);ft>=0&&Rt.splice(ft,1),ft===En&&Vc>0&&En--,ft=0,Rt.forEach(function(St){return St.scroller===T.scroller&&(ft=1)}),ft||wn||(T.scroll.rec=0),s&&(s.scrollTrigger=null,tt&&s.revert({kill:!1}),dt||s.kill()),un&&[un,vn,j,bn].forEach(function(St){return St.parentNode&&St.parentNode.removeChild(St)}),Gs===T&&(Gs=0),y&&(ce&&(ce.uncache=1),ft=0,Rt.forEach(function(St){return St.pin===y&&ft++}),ft||(ce.spacer=0)),r.onKill&&r.onKill(T)},Rt.push(T),T.enable(!1,!1),Vn&&Vn(T),s&&s.add&&!ee){var kt=T.update;T.update=function(){T.update=kt,Nt.cache++,Ut||fe||T.refresh()},lt.delayedCall(.01,T.update),ee=.01,Ut=fe=0}else T.refresh();y&&TS()},o.register=function(r){return lo||(lt=r||b1(),v1()&&window.document&&o.enable(),lo=Ds),lo},o.defaults=function(r){if(r)for(var s in r)Cc[s]=r[s];return Cc},o.disable=function(r,s){Ds=0,Rt.forEach(function(f){return f[s?"kill":"disable"](r)}),We(zt,"wheel",io),We(ue,"scroll",io),clearInterval(Ac),We(ue,"touchcancel",er),We(Jt,"touchstart",er),Mc(We,ue,"pointerdown,touchstart,mousedown",Ab),Mc(We,ue,"pointerup,touchend,mouseup",kb),rf.kill(),Dc(We);for(var u=0;u<Nt.length;u+=3)Rc(We,Nt[u],Nt[u+1]),Rc(We,Nt[u],Nt[u+2])},o.enable=function(){if(zt=window,ue=document,ia=ue.documentElement,Jt=ue.body,lt&&(Is=lt.utils.toArray,qs=lt.utils.clamp,m0=lt.core.context||er,qh=lt.core.suppressOverwrites||er,$0=zt.history.scrollRestoration||"auto",b0=zt.pageYOffset||0,lt.core.globals("ScrollTrigger",o),Jt)){Ds=1,go=document.createElement("div"),go.style.height="100vh",go.style.position="absolute",A1(),mS(),Re.register(lt),o.isTouch=Re.isTouch,vi=Re.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),p0=Re.isTouch===1,Ie(zt,"wheel",io),J0=[zt,ue,ia,Jt],lt.matchMedia?(o.matchMedia=function(p){var g=lt.matchMedia(),_;for(_ in p)g.add(_,p[_]);return g},lt.addEventListener("matchMediaInit",function(){return np()}),lt.addEventListener("matchMediaRevert",function(){return E1()}),lt.addEventListener("matchMedia",function(){el(0,1),pl("matchMedia")}),lt.matchMedia().add("(orientation: portrait)",function(){return Xh(),Xh})):console.warn("Requires GSAP 3.11.0 or later"),Xh(),Ie(ue,"scroll",io);var r=Jt.hasAttribute("style"),s=Jt.style,u=s.borderTopStyle,f=lt.core.Animation.prototype,h,m;for(f.revert||Object.defineProperty(f,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",h=Cr(Jt),Qe.m=Math.round(h.top+Qe.sc())||0,kn.m=Math.round(h.left+kn.sc())||0,u?s.borderTopStyle=u:s.removeProperty("border-top-style"),r||(Jt.setAttribute("style",""),Jt.removeAttribute("style")),Ac=setInterval(Rb,250),lt.delayedCall(.5,function(){return kc=0}),Ie(ue,"touchcancel",er),Ie(Jt,"touchstart",er),Mc(Ie,ue,"pointerdown,touchstart,mousedown",Ab),Mc(Ie,ue,"pointerup,touchend,mouseup",kb),h0=lt.utils.checkPrefix("transform"),Qc.push(h0),lo=hn(),rf=lt.delayedCall(.2,el).pause(),oo=[ue,"visibilitychange",function(){var p=zt.innerWidth,g=zt.innerHeight;ue.hidden?(Sb=p,Ob=g):(Sb!==p||Ob!==g)&&Cs()},ue,"DOMContentLoaded",el,zt,"load",el,zt,"resize",Cs],Dc(Ie),Rt.forEach(function(p){return p.enable(0,1)}),m=0;m<Nt.length;m+=3)Rc(We,Nt[m],Nt[m+1]),Rc(We,Nt[m],Nt[m+2])}},o.config=function(r){"limitCallbacks"in r&&(Yh=!!r.limitCallbacks);var s=r.syncInterval;s&&clearInterval(Ac)||(Ac=s)&&setInterval(Rb,s),"ignoreMobileResize"in r&&(p0=o.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(Dc(We)||Dc(Ie,r.autoRefreshEvents||"none"),p1=(r.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(r,s){var u=Bn(r),f=Nt.indexOf(u),h=dl(u);~f&&Nt.splice(f,h?6:2),s&&(h?ir.unshift(zt,s,Jt,s,ia,s):ir.unshift(u,s))},o.clearMatchMedia=function(r){Rt.forEach(function(s){return s._ctx&&s._ctx.query===r&&s._ctx.kill(!0,!0)})},o.isInViewport=function(r,s,u){var f=(aa(r)?Bn(r):r).getBoundingClientRect(),h=f[u?ol:sl]*s||0;return u?f.right-h>0&&f.left+h<zt.innerWidth:f.bottom-h>0&&f.top+h<zt.innerHeight},o.positionInViewport=function(r,s,u){aa(r)&&(r=Bn(r));var f=r.getBoundingClientRect(),h=f[u?ol:sl],m=s==null?h/2:s in sf?sf[s]*h:~s.indexOf("%")?parseFloat(s)*h/100:parseFloat(s)||0;return u?(f.left+m)/zt.innerWidth:(f.top+m)/zt.innerHeight},o.killAll=function(r){if(Rt.slice(0).forEach(function(u){return u.vars.id!=="ScrollSmoother"&&u.kill()}),r!==!0){var s=hl.killAll||[];hl={},s.forEach(function(u){return u()})}},o}();Dt.version="3.13.0";Dt.saveStyles=function(o){return o?Is(o).forEach(function(n){if(n&&n.style){var i=na.indexOf(n);i>=0&&na.splice(i,5),na.push(n,n.style.cssText,n.getBBox&&n.getAttribute("transform"),lt.core.getCache(n),m0())}}):na};Dt.revert=function(o,n){return np(!o,n)};Dt.create=function(o,n){return new Dt(o,n)};Dt.refresh=function(o){return o?Cs(!0):(lo||Dt.register())&&el(!0)};Dt.update=function(o){return++Nt.cache&&Ur(o===!0?2:0)};Dt.clearScrollMemory=w1;Dt.maxScroll=function(o,n){return rr(o,n?kn:Qe)};Dt.getScrollFunc=function(o,n){return ki(Bn(o),n?kn:Qe)};Dt.getById=function(o){return v0[o]};Dt.getAll=function(){return Rt.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Dt.isScrolling=function(){return!!za};Dt.snapDirectional=ep;Dt.addEventListener=function(o,n){var i=hl[o]||(hl[o]=[]);~i.indexOf(n)||i.push(n)};Dt.removeEventListener=function(o,n){var i=hl[o],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)};Dt.batch=function(o,n){var i=[],r={},s=n.interval||.016,u=n.batchMax||1e9,f=function(p,g){var _=[],x=[],y=lt.delayedCall(s,function(){g(_,x),_=[],x=[]}).pause();return function(O){_.length||y.restart(!0),_.push(O.trigger),x.push(O),u<=_.length&&y.progress(1)}},h;for(h in n)r[h]=h.substr(0,2)==="on"&&mn(n[h])&&h!=="onRefreshInit"?f(h,n[h]):n[h];return mn(u)&&(u=u(),Ie(Dt,"refresh",function(){return u=n.batchMax()})),Is(o).forEach(function(m){var p={};for(h in r)p[h]=r[h];p.trigger=m,i.push(Dt.create(p))}),i};var Lb=function(n,i,r,s){return i>s?n(s):i<0&&n(0),r>s?(s-i)/(r-i):r<0?i/(i-r):1},Vh=function o(n,i){i===!0?n.style.removeProperty("touch-action"):n.style.touchAction=i===!0?"auto":i?"pan-"+i+(Re.isTouch?" pinch-zoom":""):"none",n===ia&&o(Jt,i)},Hc={auto:1,scroll:1},AS=function(n){var i=n.event,r=n.target,s=n.axis,u=(i.changedTouches?i.changedTouches[0]:i).target,f=u._gsap||lt.core.getCache(u),h=hn(),m;if(!f._isScrollT||h-f._isScrollT>2e3){for(;u&&u!==Jt&&(u.scrollHeight<=u.clientHeight&&u.scrollWidth<=u.clientWidth||!(Hc[(m=Da(u)).overflowY]||Hc[m.overflowX]));)u=u.parentNode;f._isScroll=u&&u!==r&&!dl(u)&&(Hc[(m=Da(u)).overflowY]||Hc[m.overflowX]),f._isScrollT=h}(f._isScroll||s==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},D1=function(n,i,r,s){return Re.create({target:n,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:s=s&&AS,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return r&&Ie(ue,Re.eventTypes[0],qb,!1,!0)},onDisable:function(){return We(ue,Re.eventTypes[0],qb,!0)}})},kS=/(input|label|select|textarea)/i,Bb,qb=function(n){var i=kS.test(n.target.tagName);(i||Bb)&&(n._gsapAllow=!0,Bb=i)},DS=function(n){Wi(n)||(n={}),n.preventDefault=n.isNormalizer=n.allowClicks=!0,n.type||(n.type="wheel,touch"),n.debounce=!!n.debounce,n.id=n.id||"normalizer";var i=n,r=i.normalizeScrollX,s=i.momentum,u=i.allowNestedScroll,f=i.onRelease,h,m,p=Bn(n.target)||ia,g=lt.core.globals().ScrollSmoother,_=g&&g.get(),x=vi&&(n.content&&Bn(n.content)||_&&n.content!==!1&&!_.smooth()&&_.content()),y=ki(p,Qe),O=ki(p,kn),b=1,E=(Re.isTouch&&zt.visualViewport?zt.visualViewport.scale*zt.visualViewport.width:zt.outerWidth)/zt.innerWidth,w=0,k=mn(s)?function(){return s(h)}:function(){return s||2.8},D,R,C=D1(p,n.type,!0,u),X=function(){return R=!1},N=er,G=er,P=function(){m=rr(p,Qe),G=qs(vi?1:0,m),r&&(N=qs(0,rr(p,kn))),D=ul},F=function(){x._gsap.y=Ms(parseFloat(x._gsap.y)+y.offset)+"px",x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(x._gsap.y)+", 0, 1)",y.offset=y.cacheID=0},it=function(){if(R){requestAnimationFrame(X);var et=Ms(h.deltaY/2),mt=G(y.v-et);if(x&&mt!==y.v+y.offset){y.offset=mt-y.v;var T=Ms((parseFloat(x&&x._gsap.y)||0)-y.offset);x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",x._gsap.y=T+"px",y.cacheID=Nt.cache,Ur()}return!0}y.offset&&F(),R=!0},W,_t,Tt,pt,H=function(){P(),W.isActive()&&W.vars.scrollY>m&&(y()>m?W.progress(1)&&y(m):W.resetTo("scrollY",m))};return x&&lt.set(x,{y:"+=0"}),n.ignoreCheck=function(Z){return vi&&Z.type==="touchmove"&&it()||b>1.05&&Z.type!=="touchstart"||h.isGesturing||Z.touches&&Z.touches.length>1},n.onPress=function(){R=!1;var Z=b;b=Ms((zt.visualViewport&&zt.visualViewport.scale||1)/E),W.pause(),Z!==b&&Vh(p,b>1.01?!0:r?!1:"x"),_t=O(),Tt=y(),P(),D=ul},n.onRelease=n.onGestureStart=function(Z,et){if(y.offset&&F(),!et)pt.restart(!0);else{Nt.cache++;var mt=k(),T,Q;r&&(T=O(),Q=T+mt*.05*-Z.velocityX/.227,mt*=Lb(O,T,Q,rr(p,kn)),W.vars.scrollX=N(Q)),T=y(),Q=T+mt*.05*-Z.velocityY/.227,mt*=Lb(y,T,Q,rr(p,Qe)),W.vars.scrollY=G(Q),W.invalidate().duration(mt).play(.01),(vi&&W.vars.scrollY>=m||T>=m-1)&&lt.to({},{onUpdate:H,duration:mt})}f&&f(Z)},n.onWheel=function(){W._ts&&W.pause(),hn()-w>1e3&&(D=0,w=hn())},n.onChange=function(Z,et,mt,T,Q){if(ul!==D&&P(),et&&r&&O(N(T[2]===et?_t+(Z.startX-Z.x):O()+et-T[1])),mt){y.offset&&F();var at=Q[2]===mt,nt=at?Tt+Z.startY-Z.y:y()+mt-Q[1],rt=G(nt);at&&nt!==rt&&(Tt+=rt-nt),y(rt)}(mt||et)&&Ur()},n.onEnable=function(){Vh(p,r?!1:"x"),Dt.addEventListener("refresh",H),Ie(zt,"resize",H),y.smooth&&(y.target.style.scrollBehavior="auto",y.smooth=O.smooth=!1),C.enable()},n.onDisable=function(){Vh(p,!0),We(zt,"resize",H),Dt.removeEventListener("refresh",H),C.kill()},n.lockAxis=n.lockAxis!==!1,h=new Re(n),h.iOS=vi,vi&&!y()&&y(1),vi&&lt.ticker.add(er),pt=h._dc,W=lt.to(h,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:k1(y,y(),function(){return W.pause()})},onUpdate:Ur,onComplete:pt.vars.onComplete}),h};Dt.sort=function(o){if(mn(o))return Rt.sort(o);var n=zt.pageYOffset||0;return Dt.getAll().forEach(function(i){return i._sortY=i.trigger?n+i.trigger.getBoundingClientRect().top:i.start+zt.innerHeight}),Rt.sort(o||function(i,r){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};Dt.observe=function(o){return new Re(o)};Dt.normalizeScroll=function(o){if(typeof o>"u")return On;if(o===!0&&On)return On.enable();if(o===!1){On&&On.kill(),On=o;return}var n=o instanceof Re?o:DS(o);return On&&On.target===n.target&&On.kill(),dl(n.target)&&(On=n),n};Dt.core={_getVelocityProp:d0,_inputObserver:D1,_scrollers:Nt,_proxies:ir,bridge:{ss:function(){za||pl("scrollStart"),za=hn()},ref:function(){return dn}}};b1()&&lt.registerPlugin(Dt);ll.registerPlugin(Dt);const Yb=({children:o,distance:n=300,direction:i="vertical",reverse:r=!1,duration:s=.8,ease:u="power3.out",initialOpacity:f=0,animateOpacity:h=!0,scale:m=1,threshold:p=.1,delay:g=0,onComplete:_})=>{const x=Y.useRef(null);return Y.useEffect(()=>{const y=x.current;if(!y)return;const O=i==="horizontal"?"x":"y",b=r?-n:n,E=(1-p)*100;return ll.set(y,{[O]:b,scale:m,opacity:h?f:1}),ll.to(y,{[O]:0,scale:1,opacity:1,duration:s,ease:u,delay:g,onComplete:_,scrollTrigger:{trigger:y,start:`top ${E}%`,toggleActions:"play none none none",once:!0}}),Dt.refresh(),()=>{Dt.getAll().forEach(w=>w.kill()),ll.killTweensOf(y)}},[n,i,r,s,u,f,h,m,p,g,_]),V.jsx("div",{ref:x,children:o})};function MS(){w0();const[o,n]=Y.useState(!1),[i,r]=Y.useState(!1),[s,u]=Y.useState("#ffffff");return V.jsx("div",{className:"why-mainDiv mTop ",children:V.jsxs("div",{className:"row ",children:[V.jsx("div",{className:"col-lg-6 col-sm-12 whyColumn icons ",children:V.jsxs(Yb,{direction:"horizontal",reverse:!1,children:[!i&&V.jsx("div",{className:"spinner",children:V.jsx(Q5,{color:["#000000","#000000","#0b0c0b","#232723"]})}),V.jsx("div",{className:"whyimgIcon ",children:V.jsx("video",{src:O5,className:"video-player",autoPlay:!0,muted:!0,loop:!0,controlsList:"nodownload",onLoadedData:()=>{r(!0)},style:{display:i?"block":"none"}})})]})}),V.jsx("div",{className:"col-lg-6 col-sm-12 whyColumn   why_subDiv ",children:V.jsx("div",{className:"whytextContent",children:V.jsxs(Yb,{direction:"horizontal",reverse:!0,children:[V.jsxs("h1",{className:"text-center headWhy   poppins-semibold",children:["How can ",V.jsx("span",{className:"",style:{color:""},children:"Codyatra "})," help your business grow?"]}),V.jsxs("div",{className:"container ans",children:[V.jsx("p",{className:"border-dark roboto-p  ",children:"In today’s crowded digital space, businesses are not just looking for services — they’re looking for real partners, people who understand their goals, respect their vision, and go beyond the usual to create lasting impact."}),V.jsxs("div",{className:"WhyheadPara  ",children:[V.jsxs("p",{className:"border-dark  roboto-p   ",children:["That’s exactly what ",V.jsx("span",{className:"fw-bold",children:"Codyatra "})," stands for."]}),V.jsx("p",{className:" roboto-p ",children:"We’re not here to sell you vanity metrics or empty promises."}),V.jsxs("p",{className:" roboto-p ",children:["We’re here to build, support, and grow — ",V.jsx("span",{className:"fw-bold",children:"together "}),"."]})]})]})]})})})]})})}const RS="/codyatra/assets/owner-Dhz0pnoq.jpg";ll.registerPlugin(Dt);const CS=({children:o,scrollContainerRef:n,containerClassName:i="",textClassName:r="",animationDuration:s=1.5,ease:u="power4.out",scrollStart:f="top 90%",scrollEnd:h="top 40%",stagger:m=.03})=>{const p=Y.useRef(null);return Y.useEffect(()=>{const g=p.current;if(!g)return;const _=n?.current||window;g.querySelectorAll("p").forEach(y=>{ll.fromTo(y,{opacity:0,y:80,scale:.95},{opacity:1,y:0,scale:1,duration:s,ease:u,scrollTrigger:{trigger:y,scroller:_,start:f,end:h,scrub:!0}})})},[n,s,u,f,h]),V.jsx("div",{ref:p,className:i,children:o})};function zS(){return V.jsx("div",{className:"ownerMainDiv container-fluid py-3  d-flex flex-col justify-content-center align-items-center",children:V.jsxs("div",{className:"row align-items-center",children:[V.jsx("h1",{className:"text-center poppins-semiboldServiceMain mb-4",children:"About Founder"}),V.jsx("div",{className:"col-lg-6 col-sm-12 mb-4 ownercol",children:V.jsx("div",{className:"owner-content d-flex flex-column justify-content-center ",children:V.jsxs(CS,{animationDuration:1,ease:"power4.out",scrollStart:"top bottom ",scrollEnd:"bottom center",stagger:.01,children:[V.jsxs("p",{className:"text-start roboto-p ",children:["Hi, I’m ",V.jsx("span",{className:"highlight-owner",children:"Kanishk Mehta"}),", founder of ",V.jsx("span",{className:"highlight-owner",children:"CODYATRA"}),". This isn’t just a company intro — it’s a glimpse into my journey."]}),V.jsx("p",{className:"text-start roboto-p",children:"Our story is still unfolding — built on bold steps, learning, and growth."}),V.jsx("p",{className:"text-start roboto-p",children:"I don't claim to know everything. I learn every day — from our clients, our team, and this evolving digital world."}),V.jsxs("p",{className:"text-start roboto-p",children:["What I do promise is ",V.jsx("strong",{children:"effort, honesty, creativity, and commitment"})," — every single day."]}),V.jsx("p",{className:"text-start roboto-p",children:"This is just the beginning. If you’re ready to grow and create something impactful — let’s build together."}),V.jsxs("p",{className:"text-start roboto-p",children:["Let’s turn ideas into action.",V.jsx("br",{}),"Let’s make your brand unforgettable.",V.jsx("br",{}),"Let’s walk this ",V.jsx("strong",{children:"Yatra"})," together."]}),V.jsxs("p",{className:"mt-3 roboto-p",children:[V.jsx("span",{className:"highlight-owner fw-bold",children:"Kanishk Mehta"}),V.jsx("br",{}),"Founder, CODYATRA",V.jsx("br",{}),V.jsx("em",{children:"“Your growth is our journey.”"})]})]})})}),V.jsx("div",{className:"col-lg-6 col-sm-12 ownercol",children:V.jsx("div",{className:"owner-image-wrapper ",children:V.jsx("img",{src:RS,alt:"Founder",className:"img-fluid owner-img"})})})]})})}const NS=I.lazy(()=>Pr(()=>import("./NewServices1-BC_SE3Up.js"),__vite__mapDeps([0,1])));function US(){return Y.useEffect(()=>{document.title="Codyatra - Digital Marketting"},[]),V.jsxs("div",{children:[V.jsx(MS,{}),V.jsx(Y.Suspense,{fallback:V.jsx("div",{children:"Loading Please wait ..."}),children:V.jsx(NS,{})}),V.jsx(zS,{})]})}const HS="/codyatra/assets/logo2-Crb10-9M.jpg";function LS(){const o=w0();return V.jsx("div",{children:V.jsx("nav",{className:"navbar navbar-expand-lg bg-dark p-3",children:V.jsxs("div",{className:"container-fluid",children:[V.jsx("img",{src:HS,alt:"some issue with logo",className:"Mainlogo"}),V.jsx("button",{className:"navbar-toggler bg-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:V.jsx("span",{className:"navbar-toggler-icon bg-light"})}),V.jsxs("div",{className:"collapse navbar-collapse ",id:"navbarSupportedContent",children:[V.jsxs("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 m-auto",children:[V.jsx("li",{className:"nav-item me-2 ",children:V.jsx(Ii,{className:"nav-link text-light hoverA ",to:"/codyatra",children:" Home"})}),V.jsx("li",{className:"nav-item me-2 ",children:V.jsx(Ii,{className:"nav-link text-light hoverA ",to:"/codyatra/outservices",children:" Our Services"})}),V.jsx("li",{className:"nav-item me-2",children:V.jsx(Ii,{className:"nav-link text-light hoverA ",to:"/codyatra/pricingplan",children:" Pricing plan"})}),V.jsx("li",{className:"nav-item me-2",children:V.jsx(Ii,{className:"nav-link text-light hoverA ",to:"/codyatra/testmonial",children:"Testimonial"})}),V.jsx("li",{className:"nav-item me-2",children:V.jsx(Ii,{className:"nav-link text-light hoverA  ",to:"/codyatra/about",children:"About Codyatra"})})]}),V.jsx("form",{className:"d-flex",role:"button",children:V.jsx("button",{className:"btn btn-primary",type:"submit",onClick:()=>{o("/codyatra/Contact")},children:"Contact us"})})]})]})})})}function BS(){return V.jsx("div",{className:"container-fluid bg-dark footer text-light d-flex flex-column justify-content-center align-items-center",children:V.jsxs("div",{className:"row  w-full",children:[V.jsx("div",{className:"col-lg-4 col-sm-12 footercolumn firstcol d-flex flex-column justify-content-center align-items-center",children:V.jsx("div",{className:"text text-start  px-2 mt-2",children:V.jsxs("p",{className:"roboto-p",children:[V.jsx("span",{className:"fw-bolder",children:"CODYATRA "}),"was born with a clear ",V.jsx("span",{className:"fw-bold",children:"vision:"})," To help startups, small businesses, personal brands, and local entrepreneurs grow with digital clarity—without falling into the trap of fake promises or confusing jargon."]})})}),V.jsx("div",{className:"col-lg-4 col-sm-12 footercolumn d-flex flex-column justify-content-center align-items-center ",children:V.jsxs("div",{className:"servicesCotnent my-2",children:[V.jsx("h3",{className:"text-center mt-2",children:"Services"}),V.jsx("div",{className:"list",children:V.jsxs("ul",{children:[V.jsx("li",{className:"roboto-p",children:"Website & App Development"}),V.jsx("li",{className:"roboto-p",children:"Digital Marketing & Advertising"}),V.jsx("li",{className:"roboto-p",children:"Social Media Management"}),V.jsx("li",{className:"roboto-p",children:"Video & Photography"}),V.jsx("li",{className:"roboto-p",children:"Strategy & Consulting "}),V.jsx("li",{className:"roboto-p",children:"Freebies & Entry Services "})]})})]})}),V.jsxs("div",{className:"col-lg-4 col-sm-12 footercolumn d-flex justify-content-center align-items-center flex-column ",children:[V.jsx("h3",{children:"Social Media "}),V.jsxs("div",{className:" d-flex ",children:[V.jsx("div",{className:"instagram",children:V.jsx("i",{class:"fa-brands fa-instagram insticon ",title:"Instagram",onClick:()=>{document.location.href="https://www.instagram.com/"}})}),V.jsx("div",{className:"instagram",children:V.jsx("i",{class:"fa-brands fa-facebook insticon",onClick:()=>{document.location.href="https://www.facebook.com/"}})}),V.jsx("div",{className:"instagram",children:V.jsx("i",{class:"fa-brands fa-whatsapp insticon"})}),V.jsx("div",{className:"instagram",children:V.jsx("i",{class:"fa-regular fa-envelope insticon",onClick:()=>{document.location.href="#"}})})]})]})]})})}function M1(o){var n,i,r="";if(typeof o=="string"||typeof o=="number")r+=o;else if(typeof o=="object")if(Array.isArray(o)){var s=o.length;for(n=0;n<s;n++)o[n]&&(i=M1(o[n]))&&(r&&(r+=" "),r+=i)}else for(i in o)o[i]&&(r&&(r+=" "),r+=i);return r}function cl(){for(var o,n,i=0,r="",s=arguments.length;i<s;i++)(o=arguments[i])&&(n=M1(o))&&(r&&(r+=" "),r+=n);return r}function qS(o){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o))}qS(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var lu=o=>typeof o=="number"&&!isNaN(o),ml=o=>typeof o=="string",qr=o=>typeof o=="function",YS=o=>ml(o)||lu(o),_0=o=>ml(o)||qr(o)?o:null,PS=(o,n)=>o===!1||lu(o)&&o>0?o:n,x0=o=>Y.isValidElement(o)||ml(o)||qr(o)||lu(o);function jS(o,n,i=300){let{scrollHeight:r,style:s}=o;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition=`all ${i}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(n,i)})})}function ap({enter:o,exit:n,appendPosition:i=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:u,position:f,preventExitTransition:h,done:m,nodeRef:p,isIn:g,playToast:_}){let x=i?`${o}--${f}`:o,y=i?`${n}--${f}`:n,O=Y.useRef(0);return Y.useLayoutEffect(()=>{let b=p.current,E=x.split(" "),w=k=>{k.target===p.current&&(_(),b.removeEventListener("animationend",w),b.removeEventListener("animationcancel",w),O.current===0&&k.type!=="animationcancel"&&b.classList.remove(...E))};b.classList.add(...E),b.addEventListener("animationend",w),b.addEventListener("animationcancel",w)},[]),Y.useEffect(()=>{let b=p.current,E=()=>{b.removeEventListener("animationend",E),r?jS(b,m,s):m()};g||(h?E():(O.current=1,b.className+=` ${y}`,b.addEventListener("animationend",E)))},[g]),I.createElement(I.Fragment,null,u)}}function Pb(o,n){return{content:R1(o.content,o.props),containerId:o.props.containerId,id:o.props.toastId,theme:o.props.theme,type:o.props.type,data:o.props.data||{},isLoading:o.props.isLoading,icon:o.props.icon,reason:o.removalReason,status:n}}function R1(o,n,i=!1){return Y.isValidElement(o)&&!ml(o.type)?Y.cloneElement(o,{closeToast:n.closeToast,toastProps:n,data:n.data,isPaused:i}):qr(o)?o({closeToast:n.closeToast,toastProps:n,data:n.data,isPaused:i}):o}function XS({closeToast:o,theme:n,ariaLabel:i="close"}){return I.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:r=>{r.stopPropagation(),o(!0)},"aria-label":i},I.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},I.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function GS({delay:o,isRunning:n,closeToast:i,type:r="default",hide:s,className:u,controlledProgress:f,progress:h,rtl:m,isIn:p,theme:g}){let _=s||f&&h===0,x={animationDuration:`${o}ms`,animationPlayState:n?"running":"paused"};f&&(x.transform=`scaleX(${h})`);let y=cl("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":m}),O=qr(u)?u({rtl:m,type:r,defaultClassName:y}):cl(y,u),b={[f&&h>=1?"onTransitionEnd":"onAnimationEnd"]:f&&h<1?null:()=>{p&&i()}};return I.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":_},I.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`}),I.createElement("div",{role:"progressbar","aria-hidden":_?"true":"false","aria-label":"notification timer",className:O,style:x,...b}))}var VS=1,C1=()=>`${VS++}`;function QS(o,n,i){let r=1,s=0,u=[],f=[],h=n,m=new Map,p=new Set,g=k=>(p.add(k),()=>p.delete(k)),_=()=>{f=Array.from(m.values()),p.forEach(k=>k())},x=({containerId:k,toastId:D,updateId:R})=>{let C=k?k!==o:o!==1,X=m.has(D)&&R==null;return C||X},y=(k,D)=>{m.forEach(R=>{var C;(D==null||D===R.props.toastId)&&((C=R.toggle)==null||C.call(R,k))})},O=k=>{var D,R;(R=(D=k.props)==null?void 0:D.onClose)==null||R.call(D,k.removalReason),k.isActive=!1},b=k=>{if(k==null)m.forEach(O);else{let D=m.get(k);D&&O(D)}_()},E=()=>{s-=u.length,u=[]},w=k=>{var D,R;let{toastId:C,updateId:X}=k.props,N=X==null;k.staleId&&m.delete(k.staleId),k.isActive=!0,m.set(C,k),_(),i(Pb(k,N?"added":"updated")),N&&((R=(D=k.props).onOpen)==null||R.call(D))};return{id:o,props:h,observe:g,toggle:y,removeToast:b,toasts:m,clearQueue:E,buildToast:(k,D)=>{if(x(D))return;let{toastId:R,updateId:C,data:X,staleId:N,delay:G}=D,P=C==null;P&&s++;let F={...h,style:h.toastStyle,key:r++,...Object.fromEntries(Object.entries(D).filter(([W,_t])=>_t!=null)),toastId:R,updateId:C,data:X,isIn:!1,className:_0(D.className||h.toastClassName),progressClassName:_0(D.progressClassName||h.progressClassName),autoClose:D.isLoading?!1:PS(D.autoClose,h.autoClose),closeToast(W){m.get(R).removalReason=W,b(R)},deleteToast(){let W=m.get(R);if(W!=null){if(i(Pb(W,"removed")),m.delete(R),s--,s<0&&(s=0),u.length>0){w(u.shift());return}_()}}};F.closeButton=h.closeButton,D.closeButton===!1||x0(D.closeButton)?F.closeButton=D.closeButton:D.closeButton===!0&&(F.closeButton=x0(h.closeButton)?h.closeButton:!0);let it={content:k,props:F,staleId:N};h.limit&&h.limit>0&&s>h.limit&&P?u.push(it):lu(G)?setTimeout(()=>{w(it)},G):w(it)},setProps(k){h=k},setToggle:(k,D)=>{let R=m.get(k);R&&(R.toggle=D)},isToastActive:k=>{var D;return(D=m.get(k))==null?void 0:D.isActive},getSnapshot:()=>f}}var Dn=new Map,eu=[],T0=new Set,ZS=o=>T0.forEach(n=>n(o)),z1=()=>Dn.size>0;function KS(){eu.forEach(o=>U1(o.content,o.options)),eu=[]}var JS=(o,{containerId:n})=>{var i;return(i=Dn.get(n||1))==null?void 0:i.toasts.get(o)};function N1(o,n){var i;if(n)return!!((i=Dn.get(n))!=null&&i.isToastActive(o));let r=!1;return Dn.forEach(s=>{s.isToastActive(o)&&(r=!0)}),r}function $S(o){if(!z1()){eu=eu.filter(n=>o!=null&&n.options.toastId!==o);return}if(o==null||YS(o))Dn.forEach(n=>{n.removeToast(o)});else if(o&&("containerId"in o||"id"in o)){let n=Dn.get(o.containerId);n?n.removeToast(o.id):Dn.forEach(i=>{i.removeToast(o.id)})}}var FS=(o={})=>{Dn.forEach(n=>{n.props.limit&&(!o.containerId||n.id===o.containerId)&&n.clearQueue()})};function U1(o,n){x0(o)&&(z1()||eu.push({content:o,options:n}),Dn.forEach(i=>{i.buildToast(o,n)}))}function WS(o){var n;(n=Dn.get(o.containerId||1))==null||n.setToggle(o.id,o.fn)}function H1(o,n){Dn.forEach(i=>{(n==null||!(n!=null&&n.containerId)||n?.containerId===i.id)&&i.toggle(o,n?.id)})}function IS(o){let n=o.containerId||1;return{subscribe(i){let r=QS(n,o,ZS);Dn.set(n,r);let s=r.observe(i);return KS(),()=>{s(),Dn.delete(n)}},setProps(i){var r;(r=Dn.get(n))==null||r.setProps(i)},getSnapshot(){var i;return(i=Dn.get(n))==null?void 0:i.getSnapshot()}}}function tO(o){return T0.add(o),()=>{T0.delete(o)}}function eO(o){return o&&(ml(o.toastId)||lu(o.toastId))?o.toastId:C1()}function ou(o,n){return U1(o,n),n.toastId}function gf(o,n){return{...n,type:n&&n.type||o,toastId:eO(n)}}function vf(o){return(n,i)=>ou(n,gf(o,i))}function ie(o,n){return ou(o,gf("default",n))}ie.loading=(o,n)=>ou(o,gf("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...n}));function nO(o,{pending:n,error:i,success:r},s){let u;n&&(u=ml(n)?ie.loading(n,s):ie.loading(n.render,{...s,...n}));let f={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(p,g,_)=>{if(g==null){ie.dismiss(u);return}let x={type:p,...f,...s,data:_},y=ml(g)?{render:g}:g;return u?ie.update(u,{...x,...y}):ie(y.render,{...x,...y}),_},m=qr(o)?o():o;return m.then(p=>h("success",r,p)).catch(p=>h("error",i,p)),m}ie.promise=nO;ie.success=vf("success");ie.info=vf("info");ie.error=vf("error");ie.warning=vf("warning");ie.warn=ie.warning;ie.dark=(o,n)=>ou(o,gf("default",{theme:"dark",...n}));function aO(o){$S(o)}ie.dismiss=aO;ie.clearWaitingQueue=FS;ie.isActive=N1;ie.update=(o,n={})=>{let i=JS(o,n);if(i){let{props:r,content:s}=i,u={delay:100,...r,...n,toastId:n.toastId||o,updateId:C1()};u.toastId!==o&&(u.staleId=o);let f=u.render||s;delete u.render,ou(f,u)}};ie.done=o=>{ie.update(o,{progress:1})};ie.onChange=tO;ie.play=o=>H1(!0,o);ie.pause=o=>H1(!1,o);function rO(o){var n;let{subscribe:i,getSnapshot:r,setProps:s}=Y.useRef(IS(o)).current;s(o);let u=(n=Y.useSyncExternalStore(i,r,r))==null?void 0:n.slice();function f(h){if(!u)return[];let m=new Map;return o.newestOnTop&&u.reverse(),u.forEach(p=>{let{position:g}=p.props;m.has(g)||m.set(g,[]),m.get(g).push(p)}),Array.from(m,p=>h(p[0],p[1]))}return{getToastToRender:f,isToastActive:N1,count:u?.length}}function iO(o){let[n,i]=Y.useState(!1),[r,s]=Y.useState(!1),u=Y.useRef(null),f=Y.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:m,closeToast:p,onClick:g,closeOnClick:_}=o;WS({id:o.toastId,containerId:o.containerId,fn:i}),Y.useEffect(()=>{if(o.pauseOnFocusLoss)return x(),()=>{y()}},[o.pauseOnFocusLoss]);function x(){document.hasFocus()||w(),window.addEventListener("focus",E),window.addEventListener("blur",w)}function y(){window.removeEventListener("focus",E),window.removeEventListener("blur",w)}function O(N){if(o.draggable===!0||o.draggable===N.pointerType){k();let G=u.current;f.canCloseOnClick=!0,f.canDrag=!0,G.style.transition="none",o.draggableDirection==="x"?(f.start=N.clientX,f.removalDistance=G.offsetWidth*(o.draggablePercent/100)):(f.start=N.clientY,f.removalDistance=G.offsetHeight*(o.draggablePercent===80?o.draggablePercent*1.5:o.draggablePercent)/100)}}function b(N){let{top:G,bottom:P,left:F,right:it}=u.current.getBoundingClientRect();N.nativeEvent.type!=="touchend"&&o.pauseOnHover&&N.clientX>=F&&N.clientX<=it&&N.clientY>=G&&N.clientY<=P?w():E()}function E(){i(!0)}function w(){i(!1)}function k(){f.didMove=!1,document.addEventListener("pointermove",R),document.addEventListener("pointerup",C)}function D(){document.removeEventListener("pointermove",R),document.removeEventListener("pointerup",C)}function R(N){let G=u.current;if(f.canDrag&&G){f.didMove=!0,n&&w(),o.draggableDirection==="x"?f.delta=N.clientX-f.start:f.delta=N.clientY-f.start,f.start!==N.clientX&&(f.canCloseOnClick=!1);let P=o.draggableDirection==="x"?`${f.delta}px, var(--y)`:`0, calc(${f.delta}px + var(--y))`;G.style.transform=`translate3d(${P},0)`,G.style.opacity=`${1-Math.abs(f.delta/f.removalDistance)}`}}function C(){D();let N=u.current;if(f.canDrag&&f.didMove&&N){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance){s(!0),o.closeToast(!0),o.collapseAll();return}N.style.transition="transform 0.2s, opacity 0.2s",N.style.removeProperty("transform"),N.style.removeProperty("opacity")}}let X={onPointerDown:O,onPointerUp:b};return h&&m&&(X.onMouseEnter=w,o.stacked||(X.onMouseLeave=E)),_&&(X.onClick=N=>{g&&g(N),f.canCloseOnClick&&p(!0)}),{playToast:E,pauseToast:w,isRunning:n,preventExitTransition:r,toastRef:u,eventHandlers:X}}var lO=typeof window<"u"?Y.useLayoutEffect:Y.useEffect,bf=({theme:o,type:n,isLoading:i,...r})=>I.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:o==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r});function oO(o){return I.createElement(bf,{...o},I.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function sO(o){return I.createElement(bf,{...o},I.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function uO(o){return I.createElement(bf,{...o},I.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function cO(o){return I.createElement(bf,{...o},I.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function fO(){return I.createElement("div",{className:"Toastify__spinner"})}var S0={info:sO,warning:oO,success:uO,error:cO,spinner:fO},dO=o=>o in S0;function hO({theme:o,type:n,isLoading:i,icon:r}){let s=null,u={theme:o,type:n};return r===!1||(qr(r)?s=r({...u,isLoading:i}):Y.isValidElement(r)?s=Y.cloneElement(r,u):i?s=S0.spinner():dO(n)&&(s=S0[n](u))),s}var pO=o=>{let{isRunning:n,preventExitTransition:i,toastRef:r,eventHandlers:s,playToast:u}=iO(o),{closeButton:f,children:h,autoClose:m,onClick:p,type:g,hideProgressBar:_,closeToast:x,transition:y,position:O,className:b,style:E,progressClassName:w,updateId:k,role:D,progress:R,rtl:C,toastId:X,deleteToast:N,isIn:G,isLoading:P,closeOnClick:F,theme:it,ariaLabel:W}=o,_t=cl("Toastify__toast",`Toastify__toast-theme--${it}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":F}),Tt=qr(b)?b({rtl:C,position:O,type:g,defaultClassName:_t}):cl(_t,b),pt=hO(o),H=!!R||!m,Z={closeToast:x,type:g,theme:it},et=null;return f===!1||(qr(f)?et=f(Z):Y.isValidElement(f)?et=Y.cloneElement(f,Z):et=XS(Z)),I.createElement(y,{isIn:G,done:N,position:O,preventExitTransition:i,nodeRef:r,playToast:u},I.createElement("div",{id:X,tabIndex:0,onClick:p,"data-in":G,className:Tt,...s,style:E,ref:r,...G&&{role:D,"aria-label":W}},pt!=null&&I.createElement("div",{className:cl("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},pt),R1(h,o,!n),et,!o.customProgressBar&&I.createElement(GS,{...k&&!H?{key:`p-${k}`}:{},rtl:C,theme:it,delay:m,isRunning:n,isIn:G,closeToast:x,hide:_,type:g,className:w,controlledProgress:H,progress:R||0})))},rp=(o,n=!1)=>({enter:`Toastify--animate Toastify__${o}-enter`,exit:`Toastify--animate Toastify__${o}-exit`,appendPosition:n}),mO=ap(rp("bounce",!0)),kO=ap(rp("zoom")),DO=ap(rp("flip")),gO={position:"top-right",transition:mO,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:o=>o.altKey&&o.code==="KeyT"};function vO(o){let n={...gO,...o},i=o.stacked,[r,s]=Y.useState(!0),u=Y.useRef(null),{getToastToRender:f,isToastActive:h,count:m}=rO(n),{className:p,style:g,rtl:_,containerId:x,hotKeys:y}=n;function O(E){let w=cl("Toastify__toast-container",`Toastify__toast-container--${E}`,{"Toastify__toast-container--rtl":_});return qr(p)?p({position:E,rtl:_,defaultClassName:w}):cl(w,_0(p))}function b(){i&&(s(!0),ie.play())}return lO(()=>{var E;if(i){let w=u.current.querySelectorAll('[data-in="true"]'),k=12,D=(E=n.position)==null?void 0:E.includes("top"),R=0,C=0;Array.from(w).reverse().forEach((X,N)=>{let G=X;G.classList.add("Toastify__toast--stacked"),N>0&&(G.dataset.collapsed=`${r}`),G.dataset.pos||(G.dataset.pos=D?"top":"bot");let P=R*(r?.2:1)+(r?0:k*N);G.style.setProperty("--y",`${D?P:P*-1}px`),G.style.setProperty("--g",`${k}`),G.style.setProperty("--s",`${1-(r?C:0)}`),R+=G.offsetHeight,C+=.025})}},[r,m,i]),Y.useEffect(()=>{function E(w){var k;let D=u.current;y(w)&&((k=D.querySelector('[tabIndex="0"]'))==null||k.focus(),s(!1),ie.pause()),w.key==="Escape"&&(document.activeElement===D||D!=null&&D.contains(document.activeElement))&&(s(!0),ie.play())}return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[y]),I.createElement("section",{ref:u,className:"Toastify",id:x,onMouseEnter:()=>{i&&(s(!1),ie.pause())},onMouseLeave:b,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":n["aria-label"]},f((E,w)=>{let k=w.length?{...g}:{...g,pointerEvents:"none"};return I.createElement("div",{tabIndex:-1,className:O(E),"data-stacked":i,style:k,key:`c-${E}`},w.map(({content:D,props:R})=>I.createElement(pO,{...R,stacked:i,collapseAll:b,isIn:h(R.toastId,R.containerId),key:`t-${R.key}`},D)))}))}const bO=I.lazy(()=>Pr(()=>import("./About-ay4Y5-I9.js"),__vite__mapDeps([2,3]))),yO=I.lazy(()=>Pr(()=>import("./NewWhy-C64eGiU-.js"),[])),_O=I.lazy(()=>Pr(()=>import("./OurServices-BxmE99-x.js"),__vite__mapDeps([4,5]))),xO=I.lazy(()=>Pr(()=>import("./Testimonial-BL7C_sKp.js"),__vite__mapDeps([6,7]))),TO=I.lazy(()=>Pr(()=>import("./Pricing-yvJUOrcx.js"),__vite__mapDeps([8,9]))),SO=I.lazy(()=>Pr(()=>import("./Dashboard-4my8iXhi.js"),[])),OO=I.lazy(()=>Pr(()=>import("./FreeTools-_sF0u1nl.js"),[])),EO=I.lazy(()=>Pr(()=>import("./Contact-QpPIOYT4.js"),__vite__mapDeps([10,11])));function wO(){return Y.useEffect(()=>{const{hash:o}=window.location;console.log("hash = ",o),(!o||o==="#/"||o==="")&&window.location.replace("/codyatra/#/codyatra")},[]),V.jsxs("div",{className:"mainBackgroundColor",style:{color:"white"},children:[V.jsx(vO,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!1,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),V.jsx(LS,{}),V.jsx(Y.Suspense,{fallback:V.jsx("div",{children:"Loading ..."}),children:V.jsxs(X2,{children:[V.jsx(ja,{path:"/",element:V.jsx("home",{})}),V.jsx(ja,{path:"/codyatra",element:V.jsx(US,{})}),V.jsx(ja,{path:"/codyatra/about",element:V.jsx(bO,{})}),V.jsx(ja,{path:"/codyatra/Why",element:V.jsx(yO,{})}),V.jsx(ja,{path:"/codyatra/outservices",element:V.jsx(_O,{})}),V.jsx(ja,{path:"/codyatra/testmonial",element:V.jsx(xO,{})}),V.jsx(ja,{path:"/codyatra/pricingplan",element:V.jsx(TO,{})}),V.jsx(ja,{path:"/codyatra/Dashboard",element:V.jsx(SO,{})}),V.jsx(ja,{path:"/codyatra/FreeTools",element:V.jsx(OO,{})}),V.jsx(ja,{path:"/codyatra/Contact",element:V.jsx(EO,{})})]})}),V.jsx(BS,{})]})}Ix.createRoot(document.getElementById("root")).render(V.jsx(Y.StrictMode,{children:V.jsx(d5,{children:V.jsx(wO,{})})}));export{Dt as S,AO as a,ll as g,V as j,kO as p,Y as r,DO as u,ie as y};
