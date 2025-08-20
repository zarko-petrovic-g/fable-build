(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var bf={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function gS(){if(Pg)return mo;Pg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return mo.Fragment=e,mo.jsx=i,mo.jsxs=i,mo}var Bg;function _S(){return Bg||(Bg=1,bf.exports=gS()),bf.exports}var uh=_S(),Rf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function vS(){if(zg)return se;zg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function v(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function M(D,J,vt){this.props=D,this.context=J,this.refs=w,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=M.prototype;function F(D,J,vt){this.props=D,this.context=J,this.refs=w,this.updater=vt||y}var B=F.prototype=new _;B.constructor=F,b(B,M.prototype),B.isPureReactComponent=!0;var U=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function L(D,J,vt,yt,j,mt){return vt=mt.ref,{$$typeof:o,type:D,key:J,ref:vt!==void 0?vt:null,props:mt}}function W(D,J){return L(D.type,J,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function R(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(vt){return J[vt]})}var H=/\/+/g;function st(D,J){return typeof D=="object"&&D!==null&&D.key!=null?R(""+D.key):J.toString(36)}function tt(){}function ct(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(tt,tt):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function lt(D,J,vt,yt,j){var mt=typeof D;(mt==="undefined"||mt==="boolean")&&(D=null);var St=!1;if(D===null)St=!0;else switch(mt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(D.$$typeof){case o:case e:St=!0;break;case g:return St=D._init,lt(St(D._payload),J,vt,yt,j)}}if(St)return j=j(D),St=yt===""?"."+st(D,0):yt,U(j)?(vt="",St!=null&&(vt=St.replace(H,"$&/")+"/"),lt(j,J,vt,"",function(re){return re})):j!=null&&(C(j)&&(j=W(j,vt+(j.key==null||D&&D.key===j.key?"":(""+j.key).replace(H,"$&/")+"/")+St)),J.push(j)),1;St=0;var bt=yt===""?".":yt+":";if(U(D))for(var Rt=0;Rt<D.length;Rt++)yt=D[Rt],mt=bt+st(yt,Rt),St+=lt(yt,J,vt,mt,j);else if(Rt=v(D),typeof Rt=="function")for(D=Rt.call(D),Rt=0;!(yt=D.next()).done;)yt=yt.value,mt=bt+st(yt,Rt++),St+=lt(yt,J,vt,mt,j);else if(mt==="object"){if(typeof D.then=="function")return lt(ct(D),J,vt,yt,j);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return St}function O(D,J,vt){if(D==null)return D;var yt=[],j=0;return lt(D,yt,"","",function(mt){return J.call(vt,mt,j++)}),yt}function Y(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(vt){(D._status===0||D._status===-1)&&(D._status=1,D._result=vt)},function(vt){(D._status===0||D._status===-1)&&(D._status=2,D._result=vt)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var z=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Mt(){}return se.Children={map:O,forEach:function(D,J,vt){O(D,function(){J.apply(this,arguments)},vt)},count:function(D){var J=0;return O(D,function(){J++}),J},toArray:function(D){return O(D,function(J){return J})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=F,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,se.__COMPILER_RUNTIME={__proto__:null,c:function(D){return k.H.useMemoCache(D)}},se.cache=function(D){return function(){return D.apply(null,arguments)}},se.cloneElement=function(D,J,vt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var yt=b({},D.props),j=D.key,mt=void 0;if(J!=null)for(St in J.ref!==void 0&&(mt=void 0),J.key!==void 0&&(j=""+J.key),J)!G.call(J,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&J.ref===void 0||(yt[St]=J[St]);var St=arguments.length-2;if(St===1)yt.children=vt;else if(1<St){for(var bt=Array(St),Rt=0;Rt<St;Rt++)bt[Rt]=arguments[Rt+2];yt.children=bt}return L(D.type,j,void 0,void 0,mt,yt)},se.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},se.createElement=function(D,J,vt){var yt,j={},mt=null;if(J!=null)for(yt in J.key!==void 0&&(mt=""+J.key),J)G.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(j[yt]=J[yt]);var St=arguments.length-2;if(St===1)j.children=vt;else if(1<St){for(var bt=Array(St),Rt=0;Rt<St;Rt++)bt[Rt]=arguments[Rt+2];j.children=bt}if(D&&D.defaultProps)for(yt in St=D.defaultProps,St)j[yt]===void 0&&(j[yt]=St[yt]);return L(D,mt,void 0,void 0,null,j)},se.createRef=function(){return{current:null}},se.forwardRef=function(D){return{$$typeof:d,render:D}},se.isValidElement=C,se.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:Y}},se.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},se.startTransition=function(D){var J=k.T,vt={};k.T=vt;try{var yt=D(),j=k.S;j!==null&&j(vt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Mt,z)}catch(mt){z(mt)}finally{k.T=J}},se.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},se.use=function(D){return k.H.use(D)},se.useActionState=function(D,J,vt){return k.H.useActionState(D,J,vt)},se.useCallback=function(D,J){return k.H.useCallback(D,J)},se.useContext=function(D){return k.H.useContext(D)},se.useDebugValue=function(){},se.useDeferredValue=function(D,J){return k.H.useDeferredValue(D,J)},se.useEffect=function(D,J,vt){var yt=k.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(D,J)},se.useId=function(){return k.H.useId()},se.useImperativeHandle=function(D,J,vt){return k.H.useImperativeHandle(D,J,vt)},se.useInsertionEffect=function(D,J){return k.H.useInsertionEffect(D,J)},se.useLayoutEffect=function(D,J){return k.H.useLayoutEffect(D,J)},se.useMemo=function(D,J){return k.H.useMemo(D,J)},se.useOptimistic=function(D,J){return k.H.useOptimistic(D,J)},se.useReducer=function(D,J,vt){return k.H.useReducer(D,J,vt)},se.useRef=function(D){return k.H.useRef(D)},se.useState=function(D){return k.H.useState(D)},se.useSyncExternalStore=function(D,J,vt){return k.H.useSyncExternalStore(D,J,vt)},se.useTransition=function(){return k.H.useTransition()},se.version="19.1.1",se}var Fg;function Qh(){return Fg||(Fg=1,Rf.exports=vS()),Rf.exports}var cs=Qh(),Cf={exports:{}},go={},wf={exports:{}},Df={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function SS(){return Ig||(Ig=1,(function(o){function e(O,Y){var z=O.length;O.push(Y);t:for(;0<z;){var Mt=z-1>>>1,D=O[Mt];if(0<l(D,Y))O[Mt]=Y,O[z]=D,z=Mt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Y=O[0],z=O.pop();if(z!==Y){O[0]=z;t:for(var Mt=0,D=O.length,J=D>>>1;Mt<J;){var vt=2*(Mt+1)-1,yt=O[vt],j=vt+1,mt=O[j];if(0>l(yt,z))j<D&&0>l(mt,yt)?(O[Mt]=mt,O[j]=z,Mt=j):(O[Mt]=yt,O[vt]=z,Mt=vt);else if(j<D&&0>l(mt,z))O[Mt]=mt,O[j]=z,Mt=j;else break t}}return Y}function l(O,Y){var z=O.sortIndex-Y.sortIndex;return z!==0?z:O.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,S=null,v=3,y=!1,b=!1,w=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=O)r(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=i(p)}}function k(O){if(w=!1,U(O),!b)if(i(m)!==null)b=!0,G||(G=!0,st());else{var Y=i(p);Y!==null&&lt(k,Y.startTime-O)}}var G=!1,L=-1,W=5,C=-1;function R(){return M?!0:!(o.unstable_now()-C<W)}function H(){if(M=!1,G){var O=o.unstable_now();C=O;var Y=!0;try{t:{b=!1,w&&(w=!1,F(L),L=-1),y=!0;var z=v;try{e:{for(U(O),S=i(m);S!==null&&!(S.expirationTime>O&&R());){var Mt=S.callback;if(typeof Mt=="function"){S.callback=null,v=S.priorityLevel;var D=Mt(S.expirationTime<=O);if(O=o.unstable_now(),typeof D=="function"){S.callback=D,U(O),Y=!0;break e}S===i(m)&&r(m),U(O)}else r(m);S=i(m)}if(S!==null)Y=!0;else{var J=i(p);J!==null&&lt(k,J.startTime-O),Y=!1}}break t}finally{S=null,v=z,y=!1}Y=void 0}}finally{Y?st():G=!1}}}var st;if(typeof B=="function")st=function(){B(H)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ct=tt.port2;tt.port1.onmessage=H,st=function(){ct.postMessage(null)}}else st=function(){_(H,0)};function lt(O,Y){L=_(function(){O(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(O){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var z=v;v=Y;try{return O()}finally{v=z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=v;v=O;try{return Y()}finally{v=z}},o.unstable_scheduleCallback=function(O,Y,z){var Mt=o.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Mt+z:Mt):z=Mt,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=z+D,O={id:g++,callback:Y,priorityLevel:O,startTime:z,expirationTime:D,sortIndex:-1},z>Mt?(O.sortIndex=z,e(p,O),i(m)===null&&O===i(p)&&(w?(F(L),L=-1):w=!0,lt(k,z-Mt))):(O.sortIndex=D,e(m,O),b||y||(b=!0,G||(G=!0,st()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var Y=v;return function(){var z=v;v=Y;try{return O.apply(this,arguments)}finally{v=z}}}})(Df)),Df}var Hg;function xS(){return Hg||(Hg=1,wf.exports=SS()),wf.exports}var Uf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function MS(){if(Gg)return An;Gg=1;var o=Qh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:S,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.1",An}var Vg;function yS(){if(Vg)return Uf.exports;Vg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Uf.exports=MS(),Uf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function ES(){if(Xg)return go;Xg=1;var o=xS(),e=Qh(),i=yS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,s=f;break}if(T===s){x=!0,s=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=u;break}if(T===s){x=!0,s=f,a=u;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),B=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var tt=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case M:return"Profiler";case w:return"StrictMode";case k:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case B:return(t.displayName||"Context")+".Provider";case F:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var lt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},Mt=[],D=-1;function J(t){return{current:t}}function vt(t){0>D||(t.current=Mt[D],Mt[D]=null,D--)}function yt(t,n){D++,Mt[D]=t.current,t.current=n}var j=J(null),mt=J(null),St=J(null),bt=J(null);function Rt(t,n){switch(yt(St,n),yt(mt,t),yt(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ug(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ug(n),t=cg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}vt(j),yt(j,t)}function re(){vt(j),vt(mt),vt(St)}function Zt(t){t.memoizedState!==null&&yt(bt,t);var n=j.current,a=cg(n,t.type);n!==a&&(yt(mt,t),yt(j,a))}function Se(t){mt.current===t&&(vt(j),vt(mt)),bt.current===t&&(vt(bt),uo._currentValue=z)}var Me=Object.prototype.hasOwnProperty,Qt=o.unstable_scheduleCallback,I=o.unstable_cancelCallback,_n=o.unstable_shouldYield,ye=o.unstable_requestPaint,de=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,ae=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,et=o.unstable_setDisableYieldValue,ht=null,pt=null;function ut(t){if(typeof E=="function"&&et(t),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ht,t)}catch{}}var Ot=Math.clz32?Math.clz32:Vt,Dt=Math.log,Ht=Math.LN2;function Vt(t){return t>>>=0,t===0?32:31-(Dt(t)/Ht|0)|0}var xt=256,Pt=4194304;function Wt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Wt(s):(x&=T,x!==0?u=Wt(x):a||(a=T&~t,a!==0&&(u=Wt(a))))):(T=s&~f,T!==0?u=Wt(T):x!==0?u=Wt(x):a||(a=s&~t,a!==0&&(u=Wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=xt;return xt<<=1,(xt&4194048)===0&&(xt=256),t}function Ut(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function Et(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Bt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function At(t,n,a,s,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var ft=31-Ot(a),gt=1<<ft;T[ft]=0,P[ft]=-1;var nt=$[ft];if(nt!==null)for($[ft]=null,ft=0;ft<nt.length;ft++){var it=nt[ft];it!==null&&(it.lane&=-536870913)}a&=~gt}s!==0&&_t(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function _t(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ot(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Ft(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ot(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function ne(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function we(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ee(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:wg(t.type))}function Fn(t,n){var a=Y.p;try{return Y.p=t,n()}finally{Y.p=a}}var cn=Math.random().toString(36).slice(2),an="__reactFiber$"+cn,vn="__reactProps$"+cn,Un="__reactContainer$"+cn,Ia="__reactEvents$"+cn,No="__reactListeners$"+cn,Oo="__reactHandles$"+cn,Ha="__reactResources$"+cn,na="__reactMarker$"+cn;function ia(t){delete t[an],delete t[vn],delete t[Ia],delete t[No],delete t[Oo]}function Ti(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Un]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=pg(t);t!==null;){if(a=t[an])return a;t=pg(t)}return n}t=a,a=t.parentNode}return null}function Ai(t){if(t=t[an]||t[Un]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ga(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function aa(t){var n=t[Ha];return n||(n=t[Ha]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Je(t){t[na]=!0}var Po=new Set,Bo={};function bi(t,n){A(t,n),A(t+"Capture",n)}function A(t,n){for(Bo[t]=n,t=0;t<n.length;t++)Po.add(n[t])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function K(t){return Me.call(rt,t)?!0:Me.call(at,t)?!1:Z.test(t)?rt[t]=!0:(at[t]=!0,!1)}function Tt(t,n,a){if(K(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function wt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Nt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var zt,te;function jt(t){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+t+te}var Xt=!1;function le(t,n){if(!t||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(it){var nt=it}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(it){nt=it}t.call(gt.prototype)}}else{try{throw Error()}catch(it){nt=it}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var P=x.split(`
`),$=T.split(`
`);for(u=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(s===P.length||u===$.length)for(s=P.length-1,u=$.length-1;1<=s&&0<=u&&P[s]!==$[u];)u--;for(;1<=s&&0<=u;s--,u--)if(P[s]!==$[u]){if(s!==1||u!==1)do if(s--,u--,0>u||P[s]!==$[u]){var ft=`
`+P[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=u);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?jt(a):""}function Re(t){switch(t.tag){case 26:case 27:case 5:return jt(t.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return le(t.type,!1);case 11:return le(t.type.render,!1);case 1:return le(t.type,!0);case 31:return jt("Activity");default:return""}}function Xe(t){try{var n="";do n+=Re(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t){var n=Ce(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Le(t){t._valueTracker||(t._valueTracker=Kt(t))}function _e(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ce(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function fn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ra=/[\n"\\]/g;function Ge(t){return t.replace(ra,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ri(t,n,a,s,u,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fe(n)):t.value!==""+fe(n)&&(t.value=""+fe(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?En(t,x,fe(n)):a!=null?En(t,x,fe(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+fe(T):t.removeAttribute("name")}function Ie(t,n,a,s,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function En(t,n,a){n==="number"&&fn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function rn(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function hn(t,n,a){if(n!=null&&(n=""+fe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+fe(a):""}function Sn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fe(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function pi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ci=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ud(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Ci.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function cd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ud(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&ud(t,f,n[f])}function Eu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zo(t){return mv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Tu=null;function Au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sr=null,xr=null;function fd(t){var n=Ai(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ri(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[vn]||null;if(!u)throw Error(r(90));Ri(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&_e(s)}break t;case"textarea":hn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(t,!!a.multiple,n,!1)}}}var bu=!1;function hd(t,n,a){if(bu)return t(n,a);bu=!0;try{var s=t(n);return s}finally{if(bu=!1,(Sr!==null||xr!==null)&&(yl(),Sr&&(n=Sr,t=xr,xr=Sr=null,fd(n),t)))for(n=0;n<t.length;n++)fd(t[n])}}function ys(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=!1;if(wi)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Ru=!1}var sa=null,Cu=null,Fo=null;function dd(){if(Fo)return Fo;var t,n=Cu,a=n.length,s,u="value"in sa?sa.value:sa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===u[f-s];s++);return Fo=u.slice(t,1<s?1-s:void 0)}function Io(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function pd(){return!1}function Ln(t){function n(a,s,u,f,x){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ho:pd,this.isPropagationStopped=pd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Ln(Va),Ts=g({},Va,{view:0,detail:0}),gv=Ln(Ts),wu,Du,As,Vo=g({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(wu=t.screenX-As.screenX,Du=t.screenY-As.screenY):Du=wu=0,As=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),md=Ln(Vo),_v=g({},Vo,{dataTransfer:0}),vv=Ln(_v),Sv=g({},Ts,{relatedTarget:0}),Uu=Ln(Sv),xv=g({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=Ln(xv),yv=g({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ev=Ln(yv),Tv=g({},Va,{data:0}),gd=Ln(Tv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Rv[t])?!!n[t]:!1}function Lu(){return Cv}var wv=g({},Ts,{key:function(t){if(t.key){var n=Av[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dv=Ln(wv),Uv=g({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=Ln(Uv),Lv=g({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),Nv=Ln(Lv),Ov=g({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=Ln(Ov),Bv=g({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=Ln(Bv),Fv=g({},Va,{newState:0,oldState:0}),Iv=Ln(Fv),Hv=[9,13,27,32],Nu=wi&&"CompositionEvent"in window,bs=null;wi&&"documentMode"in document&&(bs=document.documentMode);var Gv=wi&&"TextEvent"in window&&!bs,vd=wi&&(!Nu||bs&&8<bs&&11>=bs),Sd=" ",xd=!1;function Md(t,n){switch(t){case"keyup":return Hv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function Vv(t,n){switch(t){case"compositionend":return yd(n);case"keypress":return n.which!==32?null:(xd=!0,Sd);case"textInput":return t=n.data,t===Sd&&xd?null:t;default:return null}}function Xv(t,n){if(Mr)return t==="compositionend"||!Nu&&Md(t,n)?(t=dd(),Fo=Cu=sa=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vd&&n.locale!=="ko"?null:n.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!kv[t.type]:n==="textarea"}function Td(t,n,a,s){Sr?xr?xr.push(s):xr=[s]:Sr=s,n=Cl(n,"onChange"),0<n.length&&(a=new Go("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Rs=null,Cs=null;function Wv(t){ag(t,0)}function Xo(t){var n=Ga(t);if(_e(n))return t}function Ad(t,n){if(t==="change")return n}var bd=!1;if(wi){var Ou;if(wi){var Pu="oninput"in document;if(!Pu){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),Pu=typeof Rd.oninput=="function"}Ou=Pu}else Ou=!1;bd=Ou&&(!document.documentMode||9<document.documentMode)}function Cd(){Rs&&(Rs.detachEvent("onpropertychange",wd),Cs=Rs=null)}function wd(t){if(t.propertyName==="value"&&Xo(Cs)){var n=[];Td(n,Cs,t,Au(t)),hd(Wv,n)}}function qv(t,n,a){t==="focusin"?(Cd(),Rs=n,Cs=a,Rs.attachEvent("onpropertychange",wd)):t==="focusout"&&Cd()}function Yv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Cs)}function Zv(t,n){if(t==="click")return Xo(n)}function Kv(t,n){if(t==="input"||t==="change")return Xo(n)}function jv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var In=typeof Object.is=="function"?Object.is:jv;function ws(t,n){if(In(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Me.call(n,u)||!In(t[u],n[u]))return!1}return!0}function Dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ud(t,n){var a=Dd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Dd(a)}}function Ld(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ld(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Nd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=fn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=fn(t.document)}return n}function Bu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Qv=wi&&"documentMode"in document&&11>=document.documentMode,yr=null,zu=null,Ds=null,Fu=!1;function Od(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||yr==null||yr!==fn(s)||(s=yr,"selectionStart"in s&&Bu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ds&&ws(Ds,s)||(Ds=s,s=Cl(zu,"onSelect"),0<s.length&&(n=new Go("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=yr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Er={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},Iu={},Pd={};wi&&(Pd=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function ka(t){if(Iu[t])return Iu[t];if(!Er[t])return t;var n=Er[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pd)return Iu[t]=n[a];return t}var Bd=ka("animationend"),zd=ka("animationiteration"),Fd=ka("animationstart"),Jv=ka("transitionrun"),$v=ka("transitionstart"),t0=ka("transitioncancel"),Id=ka("transitionend"),Hd=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function si(t,n){Hd.set(t,n),bi(n,[t])}var Gd=new WeakMap;function jn(t,n){if(typeof t=="object"&&t!==null){var a=Gd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Xe(n)},Gd.set(t,n),n)}return{value:t,source:n,stack:Xe(n)}}var Qn=[],Tr=0,Gu=0;function ko(){for(var t=Tr,n=Gu=Tr=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var u=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&u!==null){var x=s.pending;x===null?u.next=u:(u.next=x.next,x.next=u),s.pending=u}f!==0&&Vd(a,u,f)}}function Wo(t,n,a,s){Qn[Tr++]=t,Qn[Tr++]=n,Qn[Tr++]=a,Qn[Tr++]=s,Gu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Vu(t,n,a,s){return Wo(t,n,a,s),qo(t)}function Ar(t,n){return Wo(t,null,null,n),qo(t)}function Vd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ot(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function qo(t){if(50<eo)throw eo=0,Zc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var br={};function e0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,n,a,s){return new e0(t,n,a,s)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Di(t,n){var a=t.alternate;return a===null?(a=Hn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yo(t,n,a,s,u,f){var x=0;if(s=t,typeof t=="function")Xu(t)&&(x=1);else if(typeof t=="string")x=iS(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=Hn(31,a,n,u),t.elementType=C,t.lanes=f,t;case b:return Wa(a.children,u,f,n);case w:x=8,u|=24;break;case M:return t=Hn(12,a,n,u|2),t.elementType=M,t.lanes=f,t;case k:return t=Hn(13,a,n,u),t.elementType=k,t.lanes=f,t;case G:return t=Hn(19,a,n,u),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case B:x=10;break t;case F:x=9;break t;case U:x=11;break t;case L:x=14;break t;case W:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Hn(x,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Wa(t,n,a,s){return t=Hn(7,t,s,n),t.lanes=a,t}function ku(t,n,a){return t=Hn(6,t,null,n),t.lanes=a,t}function Wu(t,n,a){return n=Hn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Rr=[],Cr=0,Zo=null,Ko=0,Jn=[],$n=0,qa=null,Ui=1,Li="";function Ya(t,n){Rr[Cr++]=Ko,Rr[Cr++]=Zo,Zo=t,Ko=n}function kd(t,n,a){Jn[$n++]=Ui,Jn[$n++]=Li,Jn[$n++]=qa,qa=t;var s=Ui;t=Li;var u=32-Ot(s)-1;s&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var x=u-u%5;f=(s&(1<<x)-1).toString(32),s>>=x,u-=x,Ui=1<<32-Ot(n)+u|a<<u|s,Li=f+t}else Ui=1<<f|a<<u|s,Li=t}function qu(t){t.return!==null&&(Ya(t,1),kd(t,1,0))}function Yu(t){for(;t===Zo;)Zo=Rr[--Cr],Rr[Cr]=null,Ko=Rr[--Cr],Rr[Cr]=null;for(;t===qa;)qa=Jn[--$n],Jn[$n]=null,Li=Jn[--$n],Jn[$n]=null,Ui=Jn[--$n],Jn[$n]=null}var Cn=null,qe=null,be=!1,Za=null,mi=!1,Zu=Error(r(519));function Ka(t){var n=Error(r(418,""));throw Ns(jn(n,t)),Zu}function Wd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[an]=t,n[vn]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<io.length;a++)me(io[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Ie(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Le(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Sn(n,s.value,s.defaultValue,s.children),Le(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||lg(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=wl),n=!0):n=!1,n||Ka(t)}function qd(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Cn=Cn.return}}function Us(t){if(t!==Cn)return!1;if(!be)return qd(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||hf(t.type,t.memoizedProps)),a=!a),a&&qe&&Ka(t),qd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){qe=li(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}qe=null}}else n===27?(n=qe,ya(t.type)?(t=gf,gf=null,qe=t):qe=n):qe=Cn?li(t.stateNode.nextSibling):null;return!0}function Ls(){qe=Cn=null,be=!1}function Yd(){var t=Za;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),Za=null),t}function Ns(t){Za===null?Za=[t]:Za.push(t)}var Ku=J(null),ja=null,Ni=null;function oa(t,n,a){yt(Ku,n._currentValue),n._currentValue=a}function Oi(t){t._currentValue=Ku.current,vt(Ku)}function ju(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Qu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),ju(f.return,a,t),s||(x=null);break t}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ju(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Os(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=u.type;In(u.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(u===bt.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}u=u.return}t!==null&&Qu(n,t,a,s),n.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Qa(t){ja=t,Ni=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Zd(ja,t)}function Qo(t,n){return ja===null&&Qa(t),Zd(t,n)}function Zd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ni===null){if(t===null)throw Error(r(308));Ni=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ni=Ni.next=n;return a}var n0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},i0=o.unstable_scheduleCallback,a0=o.unstable_NormalPriority,sn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new n0,data:new Map,refCount:0}}function Ps(t){t.refCount--,t.refCount===0&&i0(a0,function(){t.controller.abort()})}var Bs=null,$u=0,wr=0,Dr=null;function r0(t,n){if(Bs===null){var a=Bs=[];$u=0,wr=nf(),Dr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return $u++,n.then(Kd,Kd),n}function Kd(){if(--$u===0&&Bs!==null){Dr!==null&&(Dr.status="fulfilled");var t=Bs;Bs=null,wr=0,Dr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function s0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var jd=O.S;O.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&r0(t,n),jd!==null&&jd(t,n)};var Ja=J(null);function tc(){var t=Ja.current;return t!==null?t:Ve.pooledCache}function Jo(t,n){n===null?yt(Ja,Ja.current):yt(Ja,n.pool)}function Qd(){var t=tc();return t===null?null:{parent:sn._currentValue,pool:t}}var zs=Error(r(460)),Jd=Error(r(474)),$o=Error(r(542)),ec={then:function(){}};function $d(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tl(){}function tp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(tl,tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,np(t),t;default:if(typeof n.status=="string")n.then(tl,tl);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,np(t),t}throw Fs=n,zs}}var Fs=null;function ep(){if(Fs===null)throw Error(r(459));var t=Fs;return Fs=null,t}function np(t){if(t===zs||t===$o)throw Error(r(483))}var la=!1;function nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ic(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ca(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=qo(t),Vd(t,null,a),n}return Wo(t,s,n,a),qo(t)}function Is(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ft(t,a)}}function ac(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var rc=!1;function Hs(){if(rc){var t=Dr;if(t!==null)throw t}}function Gs(t,n,a,s){rc=!1;var u=t.updateQueue;la=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,$=P.next;P.next=null,x===null?f=$:x.next=$,x=P;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==x&&(T===null?ft.firstBaseUpdate=$:T.next=$,ft.lastBaseUpdate=P))}if(f!==null){var gt=u.baseState;x=0,ft=$=P=null,T=f;do{var nt=T.lane&-536870913,it=nt!==T.lane;if(it?(xe&nt)===nt:(s&nt)===nt){nt!==0&&nt===wr&&(rc=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ee=t,Jt=T;nt=n;var Pe=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){gt=ee.call(Pe,gt,nt);break t}gt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(Pe,gt,nt):ee,nt==null)break t;gt=g({},gt,nt);break t;case 2:la=!0}}nt=T.callback,nt!==null&&(t.flags|=64,it&&(t.flags|=8192),it=u.callbacks,it===null?u.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?($=ft=it,P=gt):ft=ft.next=it,x|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;it=T,T=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ft===null&&(P=gt),u.baseState=P,u.firstBaseUpdate=$,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),va|=x,t.lanes=x,t.memoizedState=gt}}function ip(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function ap(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ip(a[t],n)}var Ur=J(null),el=J(0);function rp(t,n){t=Gi,yt(el,t),yt(Ur,n),Gi=t|n.baseLanes}function sc(){yt(el,Gi),yt(Ur,Ur.current)}function oc(){Gi=el.current,vt(Ur),vt(el)}var fa=0,ce=null,Ne=null,$e=null,nl=!1,Lr=!1,$a=!1,il=0,Vs=0,Nr=null,o0=0;function Ke(){throw Error(r(321))}function lc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!In(t[a],n[a]))return!1;return!0}function uc(t,n,a,s,u,f){return fa=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Vp:Xp,$a=!1,f=a(s,u),$a=!1,Lr&&(f=op(n,a,s,u)),sp(t),f}function sp(t){O.H=ul;var n=Ne!==null&&Ne.next!==null;if(fa=0,$e=Ne=ce=null,nl=!1,Vs=0,Nr=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&jo(t)&&(dn=!0))}function op(t,n,a,s){ce=t;var u=0;do{if(Lr&&(Nr=null),Vs=0,Lr=!1,25<=u)throw Error(r(301));if(u+=1,$e=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=p0,f=n(a,s)}while(Lr);return f}function l0(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Xs(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(ce.flags|=1024),n}function cc(){var t=il!==0;return il=0,t}function fc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function hc(t){if(nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nl=!1}fa=0,$e=Ne=ce=null,Lr=!1,Vs=il=0,Nr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ce.memoizedState=$e=t:$e=$e.next=t,$e}function tn(){if(Ne===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=$e===null?ce.memoizedState:$e.next;if(n!==null)$e=n,Ne=t;else{if(t===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},$e===null?ce.memoizedState=$e=t:$e=$e.next=t}return $e}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xs(t){var n=Vs;return Vs+=1,Nr===null&&(Nr=[]),t=tp(Nr,t,n),n=ce,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Vp:Xp),t}function al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xs(t);if(t.$$typeof===B)return Tn(t)}throw Error(r(438,String(t)))}function pc(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ce.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dc(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Pi(t,n){return typeof n=="function"?n(t):n}function rl(t){var n=tn();return mc(n,Ne,t)}function mc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=x=null,P=null,$=n,ft=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(xe&gt)===gt:(fa&gt)===gt){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===wr&&(ft=!0);else if((fa&nt)===nt){$=$.next,nt===wr&&(ft=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=gt,x=f):P=P.next=gt,ce.lanes|=nt,va|=nt;gt=$.action,$a&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else nt={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=nt,x=f):P=P.next=nt,ce.lanes|=gt,va|=gt;$=$.next}while($!==null&&$!==n);if(P===null?x=f:P.next=T,!In(f,t.memoizedState)&&(dn=!0,ft&&(a=Dr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=P,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function gc(t){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);In(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function lp(t,n,a){var s=ce,u=tn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!In((Ne||u).memoizedState,a);x&&(u.memoizedState=a,dn=!0),u=u.queue;var T=fp.bind(null,s,u,t);if(ks(2048,8,T,[t]),u.getSnapshot!==n||x||$e!==null&&$e.memoizedState.tag&1){if(s.flags|=2048,Or(9,sl(),cp.bind(null,s,u,a,n),null),Ve===null)throw Error(r(349));f||(fa&124)!==0||up(s,n,a)}return a}function up(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=dc(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function cp(t,n,a,s){n.value=a,n.getSnapshot=s,hp(n)&&dp(t)}function fp(t,n,a){return a(function(){hp(n)&&dp(t)})}function hp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!In(t,a)}catch{return!0}}function dp(t){var n=Ar(t,2);n!==null&&Wn(n,t,2)}function _c(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),$a){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:t},n}function pp(t,n,a,s){return t.baseState=a,mc(t,Ne,typeof s=="function"?s:Pi)}function u0(t,n,a,s,u){if(ll(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,mp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function mp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var T=a(u,s),P=O.S;P!==null&&P(x,T),gp(t,n,T)}catch($){vc(t,n,$)}finally{O.T=f}}else try{f=a(u,s),gp(t,n,f)}catch($){vc(t,n,$)}}function gp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){_p(t,n,s)},function(s){return vc(t,n,s)}):_p(t,n,a)}function _p(t,n,a){n.status="fulfilled",n.value=a,vp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,mp(t,a)))}function vc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,vp(n),n=n.next;while(n!==s)}t.action=null}function vp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Sp(t,n){return n}function xp(t,n){if(be){var a=Ve.formState;if(a!==null){t:{var s=ce;if(be){if(qe){e:{for(var u=qe,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=li(u.nextSibling),s=u.data==="F!";break t}}Ka(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sp,lastRenderedState:n},a.queue=s,a=Ip.bind(null,ce,s),s.dispatch=a,s=_c(!1),f=Ec.bind(null,ce,!1,s.queue),s=Nn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=u0.bind(null,ce,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mp(t){var n=tn();return yp(n,Ne,t)}function yp(t,n,a){if(n=mc(t,n,Sp)[0],t=rl(Pi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xs(n)}catch(x){throw x===zs?$o:x}else s=n;n=tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Or(9,sl(),c0.bind(null,u,a),null)),[s,f,t]}function c0(t,n){t.action=n}function Ep(t){var n=tn(),a=Ne;if(a!==null)return yp(n,a,t);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Or(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ce.updateQueue,n===null&&(n=dc(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function sl(){return{destroy:void 0,resource:void 0}}function Tp(){return tn().memoizedState}function ol(t,n,a,s){var u=Nn();s=s===void 0?null:s,ce.flags|=t,u.memoizedState=Or(1|n,sl(),a,s)}function ks(t,n,a,s){var u=tn();s=s===void 0?null:s;var f=u.memoizedState.inst;Ne!==null&&s!==null&&lc(s,Ne.memoizedState.deps)?u.memoizedState=Or(n,f,a,s):(ce.flags|=t,u.memoizedState=Or(1|n,f,a,s))}function Ap(t,n){ol(8390656,8,t,n)}function bp(t,n){ks(2048,8,t,n)}function Rp(t,n){return ks(4,2,t,n)}function Cp(t,n){return ks(4,4,t,n)}function wp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Dp(t,n,a){a=a!=null?a.concat([t]):null,ks(4,4,wp.bind(null,n,t),a)}function Sc(){}function Up(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&lc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Lp(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&lc(n,s[1]))return s[0];if(s=t(),$a){ut(!0);try{t()}finally{ut(!1)}}return a.memoizedState=[s,n],s}function xc(t,n,a){return a===void 0||(fa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Pm(),ce.lanes|=t,va|=t,a)}function Np(t,n,a,s){return In(a,n)?a:Ur.current!==null?(t=xc(t,a,s),In(t,n)||(dn=!0),t):(fa&42)===0?(dn=!0,t.memoizedState=a):(t=Pm(),ce.lanes|=t,va|=t,n)}function Op(t,n,a,s,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var x=O.T,T={};O.T=T,Ec(t,!1,n,a);try{var P=u(),$=O.S;if($!==null&&$(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ft=s0(P,s);Ws(t,n,ft,kn(t))}else Ws(t,n,s,kn(t))}catch(gt){Ws(t,n,{then:function(){},status:"rejected",reason:gt},kn())}finally{Y.p=f,O.T=x}}function f0(){}function Mc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Pp(t).queue;Op(t,u,n,z,a===null?f0:function(){return Bp(t),a(s)})}function Pp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Bp(t){var n=Pp(t).next.queue;Ws(t,n,{},kn())}function yc(){return Tn(uo)}function zp(){return tn().memoizedState}function Fp(){return tn().memoizedState}function h0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=kn();t=ua(a);var s=ca(n,t,a);s!==null&&(Wn(s,n,a),Is(s,n,a)),n={cache:Ju()},t.payload=n;return}n=n.return}}function d0(t,n,a){var s=kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ll(t)?Hp(n,a):(a=Vu(t,n,a,s),a!==null&&(Wn(a,t,s),Gp(a,n,s)))}function Ip(t,n,a){var s=kn();Ws(t,n,a,s)}function Ws(t,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(t))Hp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,In(T,x))return Wo(t,n,u,0),Ve===null&&ko(),!1}catch{}finally{}if(a=Vu(t,n,u,s),a!==null)return Wn(a,t,s),Gp(a,n,s),!0}return!1}function Ec(t,n,a,s){if(s={lane:2,revertLane:nf(),action:s,hasEagerState:!1,eagerState:null,next:null},ll(t)){if(n)throw Error(r(479))}else n=Vu(t,a,s,2),n!==null&&Wn(n,t,2)}function ll(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Hp(t,n){Lr=nl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Gp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ft(t,a)}}var ul={readContext:Tn,use:al,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},Vp={readContext:Tn,use:al,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Ap,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ol(4194308,4,wp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ol(4194308,4,t,n)},useInsertionEffect:function(t,n){ol(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if($a){ut(!0);try{t()}finally{ut(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var u=a(n);if($a){ut(!0);try{a(n)}finally{ut(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=d0.bind(null,ce,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=_c(t);var n=t.queue,a=Ip.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Sc,useDeferredValue:function(t,n){var a=Nn();return xc(a,t,n)},useTransition:function(){var t=_c(!1);return t=Op.bind(null,ce,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ce,u=Nn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(xe&124)!==0||up(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Ap(fp.bind(null,s,f,t),[t]),s.flags|=2048,Or(9,sl(),cp.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=Ve.identifierPrefix;if(be){var a=Li,s=Ui;a=(s&~(1<<32-Ot(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=il++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=o0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:yc,useFormState:xp,useActionState:xp,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ec.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:pc,useCacheRefresh:function(){return Nn().memoizedState=h0.bind(null,ce)}},Xp={readContext:Tn,use:al,useCallback:Up,useContext:Tn,useEffect:bp,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Cp,useMemo:Lp,useReducer:rl,useRef:Tp,useState:function(){return rl(Pi)},useDebugValue:Sc,useDeferredValue:function(t,n){var a=tn();return Np(a,Ne.memoizedState,t,n)},useTransition:function(){var t=rl(Pi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:lp,useId:zp,useHostTransitionStatus:yc,useFormState:Mp,useActionState:Mp,useOptimistic:function(t,n){var a=tn();return pp(a,Ne,t,n)},useMemoCache:pc,useCacheRefresh:Fp},p0={readContext:Tn,use:al,useCallback:Up,useContext:Tn,useEffect:bp,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Cp,useMemo:Lp,useReducer:gc,useRef:Tp,useState:function(){return gc(Pi)},useDebugValue:Sc,useDeferredValue:function(t,n){var a=tn();return Ne===null?xc(a,t,n):Np(a,Ne.memoizedState,t,n)},useTransition:function(){var t=gc(Pi)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:lp,useId:zp,useHostTransitionStatus:yc,useFormState:Ep,useActionState:Ep,useOptimistic:function(t,n){var a=tn();return Ne!==null?pp(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:pc,useCacheRefresh:Fp},Pr=null,qs=0;function cl(t){var n=qs;return qs+=1,Pr===null&&(Pr=[]),tp(Pr,t,n)}function Ys(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function fl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function kp(t){var n=t._init;return n(t._payload)}function Wp(t){function n(q,V){if(t){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=Di(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function x(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function T(q,V,Q,dt){return V===null||V.tag!==6?(V=ku(Q,q.mode,dt),V.return=q,V):(V=u(V,Q),V.return=q,V)}function P(q,V,Q,dt){var It=Q.type;return It===b?ft(q,V,Q.props.children,dt,Q.key):V!==null&&(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===W&&kp(It)===V.type)?(V=u(V,Q.props),Ys(V,Q),V.return=q,V):(V=Yo(Q.type,Q.key,Q.props,null,q.mode,dt),Ys(V,Q),V.return=q,V)}function $(q,V,Q,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Wu(Q,q.mode,dt),V.return=q,V):(V=u(V,Q.children||[]),V.return=q,V)}function ft(q,V,Q,dt,It){return V===null||V.tag!==7?(V=Wa(Q,q.mode,dt,It),V.return=q,V):(V=u(V,Q),V.return=q,V)}function gt(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ku(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return Q=Yo(V.type,V.key,V.props,null,q.mode,Q),Ys(Q,V),Q.return=q,Q;case y:return V=Wu(V,q.mode,Q),V.return=q,V;case W:var dt=V._init;return V=dt(V._payload),gt(q,V,Q)}if(lt(V)||st(V))return V=Wa(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return gt(q,cl(V),Q);if(V.$$typeof===B)return gt(q,Qo(q,V),Q);fl(q,V)}return null}function nt(q,V,Q,dt){var It=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return It!==null?null:T(q,V,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===It?P(q,V,Q,dt):null;case y:return Q.key===It?$(q,V,Q,dt):null;case W:return It=Q._init,Q=It(Q._payload),nt(q,V,Q,dt)}if(lt(Q)||st(Q))return It!==null?null:ft(q,V,Q,dt,null);if(typeof Q.then=="function")return nt(q,V,cl(Q),dt);if(Q.$$typeof===B)return nt(q,V,Qo(q,Q),dt);fl(q,Q)}return null}function it(q,V,Q,dt,It){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(Q)||null,T(V,q,""+dt,It);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case v:return q=q.get(dt.key===null?Q:dt.key)||null,P(V,q,dt,It);case y:return q=q.get(dt.key===null?Q:dt.key)||null,$(V,q,dt,It);case W:var he=dt._init;return dt=he(dt._payload),it(q,V,Q,dt,It)}if(lt(dt)||st(dt))return q=q.get(Q)||null,ft(V,q,dt,It,null);if(typeof dt.then=="function")return it(q,V,Q,cl(dt),It);if(dt.$$typeof===B)return it(q,V,Q,Qo(V,dt),It);fl(V,dt)}return null}function ee(q,V,Q,dt){for(var It=null,he=null,kt=V,$t=V=0,mn=null;kt!==null&&$t<Q.length;$t++){kt.index>$t?(mn=kt,kt=null):mn=kt.sibling;var Te=nt(q,kt,Q[$t],dt);if(Te===null){kt===null&&(kt=mn);break}t&&kt&&Te.alternate===null&&n(q,kt),V=f(Te,V,$t),he===null?It=Te:he.sibling=Te,he=Te,kt=mn}if($t===Q.length)return a(q,kt),be&&Ya(q,$t),It;if(kt===null){for(;$t<Q.length;$t++)kt=gt(q,Q[$t],dt),kt!==null&&(V=f(kt,V,$t),he===null?It=kt:he.sibling=kt,he=kt);return be&&Ya(q,$t),It}for(kt=s(kt);$t<Q.length;$t++)mn=it(kt,q,$t,Q[$t],dt),mn!==null&&(t&&mn.alternate!==null&&kt.delete(mn.key===null?$t:mn.key),V=f(mn,V,$t),he===null?It=mn:he.sibling=mn,he=mn);return t&&kt.forEach(function(Ra){return n(q,Ra)}),be&&Ya(q,$t),It}function Jt(q,V,Q,dt){if(Q==null)throw Error(r(151));for(var It=null,he=null,kt=V,$t=V=0,mn=null,Te=Q.next();kt!==null&&!Te.done;$t++,Te=Q.next()){kt.index>$t?(mn=kt,kt=null):mn=kt.sibling;var Ra=nt(q,kt,Te.value,dt);if(Ra===null){kt===null&&(kt=mn);break}t&&kt&&Ra.alternate===null&&n(q,kt),V=f(Ra,V,$t),he===null?It=Ra:he.sibling=Ra,he=Ra,kt=mn}if(Te.done)return a(q,kt),be&&Ya(q,$t),It;if(kt===null){for(;!Te.done;$t++,Te=Q.next())Te=gt(q,Te.value,dt),Te!==null&&(V=f(Te,V,$t),he===null?It=Te:he.sibling=Te,he=Te);return be&&Ya(q,$t),It}for(kt=s(kt);!Te.done;$t++,Te=Q.next())Te=it(kt,q,$t,Te.value,dt),Te!==null&&(t&&Te.alternate!==null&&kt.delete(Te.key===null?$t:Te.key),V=f(Te,V,$t),he===null?It=Te:he.sibling=Te,he=Te);return t&&kt.forEach(function(mS){return n(q,mS)}),be&&Ya(q,$t),It}function Pe(q,V,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===b&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:t:{for(var It=Q.key;V!==null;){if(V.key===It){if(It=Q.type,It===b){if(V.tag===7){a(q,V.sibling),dt=u(V,Q.props.children),dt.return=q,q=dt;break t}}else if(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===W&&kp(It)===V.type){a(q,V.sibling),dt=u(V,Q.props),Ys(dt,Q),dt.return=q,q=dt;break t}a(q,V);break}else n(q,V);V=V.sibling}Q.type===b?(dt=Wa(Q.props.children,q.mode,dt,Q.key),dt.return=q,q=dt):(dt=Yo(Q.type,Q.key,Q.props,null,q.mode,dt),Ys(dt,Q),dt.return=q,q=dt)}return x(q);case y:t:{for(It=Q.key;V!==null;){if(V.key===It)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),dt=u(V,Q.children||[]),dt.return=q,q=dt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}dt=Wu(Q,q.mode,dt),dt.return=q,q=dt}return x(q);case W:return It=Q._init,Q=It(Q._payload),Pe(q,V,Q,dt)}if(lt(Q))return ee(q,V,Q,dt);if(st(Q)){if(It=st(Q),typeof It!="function")throw Error(r(150));return Q=It.call(Q),Jt(q,V,Q,dt)}if(typeof Q.then=="function")return Pe(q,V,cl(Q),dt);if(Q.$$typeof===B)return Pe(q,V,Qo(q,Q),dt);fl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),dt=u(V,Q),dt.return=q,q=dt):(a(q,V),dt=ku(Q,q.mode,dt),dt.return=q,q=dt),x(q)):a(q,V)}return function(q,V,Q,dt){try{qs=0;var It=Pe(q,V,Q,dt);return Pr=null,It}catch(kt){if(kt===zs||kt===$o)throw kt;var he=Hn(29,kt,null,q.mode);return he.lanes=dt,he.return=q,he}finally{}}}var Br=Wp(!0),qp=Wp(!1),ti=J(null),gi=null;function ha(t){var n=t.alternate;yt(on,on.current&1),yt(ti,t),gi===null&&(n===null||Ur.current!==null||n.memoizedState!==null)&&(gi=t)}function Yp(t){if(t.tag===22){if(yt(on,on.current),yt(ti,t),gi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(gi=t)}}else da()}function da(){yt(on,on.current),yt(ti,ti.current)}function Bi(t){vt(ti),gi===t&&(gi=null),vt(on)}var on=J(0);function hl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||mf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Tc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ac={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=kn(),u=ua(s);u.payload=n,a!=null&&(u.callback=a),n=ca(t,u,s),n!==null&&(Wn(n,t,s),Is(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=kn(),u=ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ca(t,u,s),n!==null&&(Wn(n,t,s),Is(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=kn(),s=ua(a);s.tag=2,n!=null&&(s.callback=n),n=ca(t,s,a),n!==null&&(Wn(n,t,a),Is(n,t,a))}};function Zp(t,n,a,s,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!ws(a,s)||!ws(u,f):!0}function Kp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ac.enqueueReplaceState(n,n.state,null)}function tr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function jp(t){dl(t)}function Qp(t){console.error(t)}function Jp(t){dl(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function $p(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bc(t,n,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function tm(t){return t=ua(t),t.tag=3,t}function em(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){$p(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){$p(n,a,s),typeof u!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function m0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 13:return gi===null?jc():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Jc(t,s,u)),!1;case 22:return a.flags|=65536,s===ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Jc(t,s,u)),!1}throw Error(r(435,a.tag))}return Jc(t,s,u),jc(),!1}if(be)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Zu&&(t=Error(r(422),{cause:s}),Ns(jn(t,a)))):(s!==Zu&&(n=Error(r(423),{cause:s}),Ns(jn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=jn(s,a),u=bc(t.stateNode,s,u),ac(t,u),Ye!==4&&(Ye=2)),!1;var f=Error(r(520),{cause:s});if(f=jn(f,a),to===null?to=[f]:to.push(f),Ye!==4&&(Ye=2),n===null)return!0;s=jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=bc(a.stateNode,s,t),ac(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=tm(u),em(u,t,a,s),ac(a,u),!1}a=a.return}while(a!==null);return!1}var nm=Error(r(461)),dn=!1;function xn(t,n,a,s){n.child=t===null?qp(n,null,a,s):Br(n,t.child,a,s)}function im(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return Qa(n),s=uc(t,n,a,x,f,u),T=cc(),t!==null&&!dn?(fc(t,n,u),zi(t,n,u)):(be&&T&&qu(n),n.flags|=1,xn(t,n,s,u),n.child)}function am(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,rm(t,n,f,s,u)):(t=Yo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Oc(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:ws,a(x,s)&&t.ref===n.ref)return zi(t,n,u)}return n.flags|=1,t=Di(f,s),t.ref=n.ref,t.return=n,n.child=t}function rm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(ws(f,s)&&t.ref===n.ref)if(dn=!1,n.pendingProps=s=f,Oc(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,zi(t,n,u)}return Rc(t,n,a,s,u)}function sm(t,n,a){var s=n.pendingProps,u=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return om(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jo(n,f!==null?f.cachePool:null),f!==null?rp(n,f):sc(),Yp(n);else return n.lanes=n.childLanes=536870912,om(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Jo(n,f.cachePool),rp(n,f),da(),n.memoizedState=null):(t!==null&&Jo(n,null),sc(),da());return xn(t,n,u,a),n.child}function om(t,n,a,s){var u=tc();return u=u===null?null:{parent:sn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Jo(n,null),sc(),Yp(n),t!==null&&Os(t,n,s,!0),null}function ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Rc(t,n,a,s,u){return Qa(n),a=uc(t,n,a,s,void 0,u),s=cc(),t!==null&&!dn?(fc(t,n,u),zi(t,n,u)):(be&&s&&qu(n),n.flags|=1,xn(t,n,a,u),n.child)}function lm(t,n,a,s,u,f){return Qa(n),n.updateQueue=null,a=op(n,s,a,u),sp(t),s=cc(),t!==null&&!dn?(fc(t,n,f),zi(t,n,f)):(be&&s&&qu(n),n.flags|=1,xn(t,n,a,f),n.child)}function um(t,n,a,s,u){if(Qa(n),n.stateNode===null){var f=br,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ac,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},nc(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):br,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Tc(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Ac.enqueueReplaceState(f,f.state,null),Gs(n,s,f,u),Hs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=tr(a,T);f.props=P;var $=f.context,ft=a.contextType;x=br,typeof ft=="object"&&ft!==null&&(x=Tn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==x)&&Kp(n,f,s,x),la=!1;var nt=n.memoizedState;f.state=nt,Gs(n,s,f,u),Hs(),$=n.memoizedState,T||nt!==$||la?(typeof gt=="function"&&(Tc(n,a,gt,s),$=n.memoizedState),(P=la||Zp(n,a,P,s,nt,$,x))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=x,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ic(t,n),x=n.memoizedProps,ft=tr(a,x),f.props=ft,gt=n.pendingProps,nt=f.context,$=a.contextType,P=br,typeof $=="object"&&$!==null&&(P=Tn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==gt||nt!==P)&&Kp(n,f,s,P),la=!1,nt=n.memoizedState,f.state=nt,Gs(n,s,f,u),Hs();var it=n.memoizedState;x!==gt||nt!==it||la||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof T=="function"&&(Tc(n,a,T,s),it=n.memoizedState),(ft=la||Zp(n,a,ft,s,nt,it,P)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=P,s=ft):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ml(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Br(n,t.child,null,u),n.child=Br(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=zi(t,n,u),t}function cm(t,n,a,s){return Ls(),n.flags|=256,xn(t,n,a,s),n.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(t){return{baseLanes:t,cachePool:Qd()}}function Dc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function fm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(u?ha(n):da(),be){var T=qe,P;if(P=T){t:{for(P=T,T=mi;P.nodeType!==8;){if(!T){T=null;break t}if(P=li(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:qa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},P=Hn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Cn=n,qe=null,P=!0):P=!1}P||Ka(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return mf(T)?n.lanes=32:n.lanes=536870912,null;Bi(n)}return T=s.children,s=s.fallback,u?(da(),u=n.mode,T=gl({mode:"hidden",children:T},u),s=Wa(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=wc(a),u.childLanes=Dc(t,x,a),n.memoizedState=Cc,s):(ha(n),Uc(n,T))}if(P=t.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Lc(t,n,a)):n.memoizedState!==null?(da(),n.child=t.child,n.flags|=128,n=null):(da(),u=s.fallback,T=n.mode,s=gl({mode:"visible",children:s.children},T),u=Wa(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Br(n,t.child,null,a),s=n.child,s.memoizedState=wc(a),s.childLanes=Dc(t,x,a),n.memoizedState=Cc,n=u);else if(ha(n),mf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var $=x.dgst;x=$,s=Error(r(419)),s.stack="",s.digest=x,Ns({value:s,source:null,stack:null}),n=Lc(t,n,a)}else if(dn||Os(t,n,a,!1),x=(a&t.childLanes)!==0,dn||x){if(x=Ve,x!==null&&(s=a&-a,s=(s&42)!==0?1:ne(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Ar(t,s),Wn(x,t,s),nm;T.data==="$?"||jc(),n=Lc(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,qe=li(T.nextSibling),Cn=n,be=!0,Za=null,mi=!1,t!==null&&(Jn[$n++]=Ui,Jn[$n++]=Li,Jn[$n++]=qa,Ui=t.id,Li=t.overflow,qa=n),n=Uc(n,s.children),n.flags|=4096);return n}return u?(da(),u=s.fallback,T=n.mode,P=t.child,$=P.sibling,s=Di(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,$!==null?u=Di($,u):(u=Wa(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=t.child.memoizedState,T===null?T=wc(a):(P=T.cachePool,P!==null?($=sn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Qd(),T={baseLanes:T.baseLanes|a,cachePool:P}),u.memoizedState=T,u.childLanes=Dc(t,x,a),n.memoizedState=Cc,s):(ha(n),a=t.child,t=a.sibling,a=Di(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Uc(t,n){return n=gl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gl(t,n){return t=Hn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Lc(t,n,a){return Br(n,t.child,null,a),t=Uc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function hm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ju(t.return,n,a)}function Nc(t,n,a,s,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function dm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(xn(t,n,s.children,a),s=on.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,a,n);else if(t.tag===19)hm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(yt(on,s),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&hl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&hl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Nc(n,!0,a,null,f);break;case"together":Nc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Di(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Di(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Oc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function g0(t,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),oa(n,sn,t.memoizedState.cache),Ls();break;case 27:case 5:Zt(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:oa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?fm(t,n,a):(ha(n),t=zi(t,n,a),t!==null?t.sibling:null);ha(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Os(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return dm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(on,on.current),s)break;return null;case 22:case 23:return n.lanes=0,sm(t,n,a);case 24:oa(n,sn,t.memoizedState.cache)}return zi(t,n,a)}function pm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Oc(t,a)&&(n.flags&128)===0)return dn=!1,g0(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,be&&(n.flags&1048576)!==0&&kd(n,Ko,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Xu(s)?(t=tr(s,t),n.tag=1,n=um(null,n,s,t,a)):(n.tag=0,n=Rc(null,n,s,t,a));else{if(s!=null){if(u=s.$$typeof,u===U){n.tag=11,n=im(null,n,s,t,a);break t}else if(u===L){n.tag=14,n=am(null,n,s,t,a);break t}}throw n=ct(s)||s,Error(r(306,n,""))}}return n;case 0:return Rc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=tr(s,n.pendingProps),um(t,n,s,u,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,ic(t,n),Gs(n,s,null,a);var x=n.memoizedState;if(s=x.cache,oa(n,sn,s),s!==f.cache&&Qu(n,[sn],a,!0),Hs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=cm(t,n,s,a);break t}else if(s!==u){u=jn(Error(r(424)),n),Ns(u),n=cm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=li(t.firstChild),Cn=n,be=!0,Za=null,mi=!0,a=qp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ls(),s===u){n=zi(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return ml(t,n),t===null?(a=vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Dl(St.current).createElement(a),s[an]=n,s[vn]=t,yn(s,a,t),Je(s),n.stateNode=s):n.memoizedState=vg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&be&&(s=n.stateNode=mg(n.type,n.pendingProps,St.current),Cn=n,mi=!0,u=qe,ya(n.type)?(gf=u,qe=li(s.firstChild)):qe=u),xn(t,n,n.pendingProps.children,a),ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((u=s=qe)&&(s=k0(s,n.type,n.pendingProps,mi),s!==null?(n.stateNode=s,Cn=n,qe=li(s.firstChild),mi=!1,u=!0):u=!1),u||Ka(n)),Zt(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,hf(u,f)?s=null:x!==null&&hf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=uc(t,n,l0,null,null,a),uo._currentValue=u),ml(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=qe)&&(a=W0(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Cn=n,qe=null,t=!0):t=!1),t||Ka(n)),null;case 13:return fm(t,n,a);case 4:return Rt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Br(n,null,s,a):xn(t,n,s,a),n.child;case 11:return im(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,oa(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Qa(n),u=Tn(u),s=s(u),n.flags|=1,xn(t,n,s,a),n.child;case 14:return am(t,n,n.type,n.pendingProps,a);case 15:return rm(t,n,n.type,n.pendingProps,a);case 19:return dm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=gl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Di(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return sm(t,n,a);case 24:return Qa(n),s=Tn(sn),t===null?(u=tc(),u===null&&(u=Ve,f=Ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},nc(n),oa(n,sn,u)):((t.lanes&a)!==0&&(ic(t,n),Gs(n,null,null,a),Hs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),oa(n,sn,s)):(s=f.cache,oa(n,sn,s),s!==u.cache&&Qu(n,[sn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Fi(t){t.flags|=4}function mm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Eg(n)){if(n=ti.current,n!==null&&((xe&4194048)===xe?gi!==null:(xe&62914560)!==xe&&(xe&536870912)===0||n!==gi))throw Fs=ec,Jd;t.flags|=8192}}function _l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ut():536870912,t.lanes|=n,Hr|=n)}function Zs(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function _0(t,n,a){var s=n.pendingProps;switch(Yu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Oi(sn),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Us(n)?Fi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yd())),We(n),null;case 26:return a=n.memoizedState,t===null?(Fi(n),a!==null?(We(n),mm(n,a)):(We(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Fi(n),We(n),mm(n,a)):(We(n),n.flags&=-16777217):(t.memoizedProps!==s&&Fi(n),We(n),n.flags&=-16777217),null;case 27:Se(n),a=St.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=j.current,Us(n)?Wd(n):(t=mg(u,s,a),n.stateNode=t,Fi(n))}return We(n),null;case 5:if(Se(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(t=j.current,Us(n))Wd(n);else{switch(u=Dl(St.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}t[an]=n,t[vn]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;t:switch(yn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Fi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=St.current,Us(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||lg(t.nodeValue,a)),t||Ka(n)}else t=Dl(t).createTextNode(s),t[an]=n,n.stateNode=t}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Us(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=Yd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Bi(n),n):(Bi(n),null)}if(Bi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),_l(n,n.updateQueue),We(n),null;case 4:return re(),t===null&&of(n.stateNode.containerInfo),We(n),null;case 10:return Oi(n.type),We(n),null;case 19:if(vt(on),u=n.memoizedState,u===null)return We(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)Zs(u,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=hl(t),f!==null){for(n.flags|=128,Zs(u,!1),t=f.updateQueue,n.updateQueue=t,_l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xd(a,t),a=a.sibling;return yt(on,on.current&1|2),n.child}t=t.sibling}u.tail!==null&&de()>xl&&(n.flags|=128,s=!0,Zs(u,!1),n.lanes=4194304)}else{if(!s)if(t=hl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,_l(n,t),Zs(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!be)return We(n),null}else 2*de()-u.renderingStartTime>xl&&a!==536870912&&(n.flags|=128,s=!0,Zs(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=de(),n.sibling=null,t=on.current,yt(on,s?t&1|2:t&1),n):(We(n),null);case 22:case 23:return Bi(n),oc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&_l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&vt(Ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oi(sn),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function v0(t,n){switch(Yu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Oi(sn),re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Se(n),null;case 13:if(Bi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vt(on),null;case 4:return re(),null;case 10:return Oi(n.type),null;case 22:case 23:return Bi(n),oc(),t!==null&&vt(Ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Oi(sn),null;case 25:return null;default:return null}}function gm(t,n){switch(Yu(n),n.tag){case 3:Oi(sn),re();break;case 26:case 27:case 5:Se(n);break;case 4:re();break;case 13:Bi(n);break;case 19:vt(on);break;case 10:Oi(n.type);break;case 22:case 23:Bi(n),oc(),t!==null&&vt(Ja);break;case 24:Oi(sn)}}function Ks(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==u)}}catch(T){He(n,n.return,T)}}function pa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var P=a,$=T;try{$()}catch(ft){He(u,P,ft)}}}s=s.next}while(s!==f)}}catch(ft){He(n,n.return,ft)}}function _m(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ap(n,a)}catch(s){He(t,t.return,s)}}}function vm(t,n,a){a.props=tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){He(t,n,s)}}function js(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){He(t,n,u)}}function _i(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){He(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(t,n,u)}else a.current=null}function Sm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){He(t,t.return,u)}}function Pc(t,n,a){try{var s=t.stateNode;I0(s,t.type,a,n),s[vn]=n}catch(u){He(t,t.return,u)}}function xm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ya(t.type)||t.tag===4}function Bc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||xm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=wl));else if(s!==4&&(s===27&&ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(zc(t,n,a),t=t.sibling;t!==null;)zc(t,n,a),t=t.sibling}function vl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(vl(t,n,a),t=t.sibling;t!==null;)vl(t,n,a),t=t.sibling}function Mm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);yn(n,s,a),n[an]=t,n[vn]=a}catch(f){He(t,t.return,f)}}var Ii=!1,je=!1,Fc=!1,ym=typeof WeakSet=="function"?WeakSet:Set,pn=null;function S0(t,n){if(t=t.containerInfo,cf=Bl,t=Nd(t),Bu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,P=-1,$=0,ft=0,gt=t,nt=null;e:for(;;){for(var it;gt!==a||u!==0&&gt.nodeType!==3||(T=x+u),gt!==f||s!==0&&gt.nodeType!==3||(P=x+s),gt.nodeType===3&&(x+=gt.nodeValue.length),(it=gt.firstChild)!==null;)nt=gt,gt=it;for(;;){if(gt===t)break e;if(nt===a&&++$===u&&(T=x),nt===f&&++ft===s&&(P=x),(it=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=it}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ff={focusedElem:t,selectionRange:a},Bl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ee=tr(a.type,u,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ee,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){He(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Em(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),s&4&&Ks(5,a);break;case 1:if(ma(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){He(a,a.return,x)}else{var u=tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){He(a,a.return,x)}}s&64&&_m(a),s&512&&js(a,a.return);break;case 3:if(ma(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ap(t,n)}catch(x){He(a,a.return,x)}}break;case 27:n===null&&s&4&&Mm(a);case 26:case 5:ma(t,a),n===null&&s&4&&Sm(a),s&512&&js(a,a.return);break;case 12:ma(t,a);break;case 13:ma(t,a),s&4&&bm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=C0.bind(null,a),q0(t,a))));break;case 22:if(s=a.memoizedState!==null||Ii,!s){n=n!==null&&n.memoizedState!==null||je,u=Ii;var f=je;Ii=s,(je=n)&&!f?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),Ii=u,je=f}break;case 30:break;default:ma(t,a)}}function Tm(t){var n=t.alternate;n!==null&&(t.alternate=null,Tm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ia(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ke=null,On=!1;function Hi(t,n,a){for(a=a.child;a!==null;)Am(t,n,a),a=a.sibling}function Am(t,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:je||_i(a,n),Hi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||_i(a,n);var s=ke,u=On;ya(a.type)&&(ke=a.stateNode,On=!1),Hi(t,n,a),ro(a.stateNode),ke=s,On=u;break;case 5:je||_i(a,n);case 6:if(s=ke,u=On,ke=null,Hi(t,n,a),ke=s,On=u,ke!==null)if(On)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){He(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){He(a,n,f)}break;case 18:ke!==null&&(On?(t=ke,dg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),po(t)):dg(ke,a.stateNode));break;case 4:s=ke,u=On,ke=a.stateNode.containerInfo,On=!0,Hi(t,n,a),ke=s,On=u;break;case 0:case 11:case 14:case 15:je||pa(2,a,n),je||pa(4,a,n),Hi(t,n,a);break;case 1:je||(_i(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&vm(a,n,s)),Hi(t,n,a);break;case 21:Hi(t,n,a);break;case 22:je=(s=je)||a.memoizedState!==null,Hi(t,n,a),je=s;break;default:Hi(t,n,a)}}function bm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{po(t)}catch(a){He(n,n.return,a)}}function x0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ym),n;default:throw Error(r(435,t.tag))}}function Ic(t,n){var a=x0(t);n.forEach(function(s){var u=w0.bind(null,t,s);a.has(s)||(a.add(s),s.then(u,u))})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(ya(T.type)){ke=T.stateNode,On=!1;break t}break;case 5:ke=T.stateNode,On=!1;break t;case 3:case 4:ke=T.stateNode.containerInfo,On=!0;break t}T=T.return}if(ke===null)throw Error(r(160));Am(f,x,u),ke=null,On=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Rm(n,t),n=n.sibling}var oi=null;function Rm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),s&4&&(pa(3,t,t.return),Ks(3,t),pa(5,t,t.return));break;case 1:Gn(n,t),Vn(t),s&512&&(je||a===null||_i(a,a.return)),s&64&&Ii&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=oi;if(Gn(n,t),Vn(t),s&512&&(je||a===null||_i(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[na]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),yn(f,s,a),f[an]=t,Je(f),s=f;break t;case"link":var x=Mg("link","href",u).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;case"meta":if(x=Mg("meta","content",u).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=t,Je(f),s=f}t.stateNode=s}else yg(u,t.type,t.stateNode);else t.stateNode=xg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?yg(u,t.type,t.stateNode):xg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Pc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),s&512&&(je||a===null||_i(a,a.return)),a!==null&&s&4&&Pc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),s&512&&(je||a===null||_i(a,a.return)),t.flags&32){u=t.stateNode;try{pi(u,"")}catch(it){He(t,t.return,it)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Pc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Fc=!0);break;case 6:if(Gn(n,t),Vn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(it){He(t,t.return,it)}}break;case 3:if(Nl=null,u=oi,oi=Ul(n.containerInfo),Gn(n,t),oi=u,Vn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{po(n.containerInfo)}catch(it){He(t,t.return,it)}Fc&&(Fc=!1,Cm(t));break;case 4:s=oi,oi=Ul(t.stateNode.containerInfo),Gn(n,t),Vn(t),oi=s;break;case 12:Gn(n,t),Vn(t);break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wc=de()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ic(t,s)));break;case 22:u=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Ii,ft=je;if(Ii=$||u,je=ft||P,Gn(n,t),je=ft,Ii=$,Vn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||Ii||je||er(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=P.stateNode;var gt=P.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){He(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(it){He(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ic(t,a))));break;case 19:Gn(n,t),Vn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ic(t,s)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(xm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Bc(t);vl(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(pi(x,""),a.flags&=-33);var T=Bc(t);vl(t,T,x);break;case 3:case 4:var P=a.stateNode.containerInfo,$=Bc(t);zc(t,$,P);break;default:throw Error(r(161))}}catch(ft){He(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Cm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Cm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Em(t,n.alternate,n),n=n.sibling}function er(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),er(n);break;case 1:_i(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&vm(n,n.return,a),er(n);break;case 27:ro(n.stateNode);case 26:case 5:_i(n,n.return),er(n);break;case 22:n.memoizedState===null&&er(n);break;case 30:er(n);break;default:er(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ga(u,f,a),Ks(4,f);break;case 1:if(ga(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){He(s,s.return,$)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)ip(P[u],T)}catch($){He(s,s.return,$)}}a&&x&64&&_m(f),js(f,f.return);break;case 27:Mm(f);case 26:case 5:ga(u,f,a),a&&s===null&&x&4&&Sm(f),js(f,f.return);break;case 12:ga(u,f,a);break;case 13:ga(u,f,a),a&&x&4&&bm(u,f);break;case 22:f.memoizedState===null&&ga(u,f,a),js(f,f.return);break;case 30:break;default:ga(u,f,a)}n=n.sibling}}function Hc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ps(a))}function Gc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t))}function vi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wm(t,n,a,s),n=n.sibling}function wm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),u&2048&&Ks(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t)));break;case 12:if(u&2048){vi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){He(n,n.return,P)}}else vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,s):Qs(t,n):f._visibility&2?vi(t,n,a,s):(f._visibility|=2,zr(t,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Hc(x,n);break;case 24:vi(t,n,a,s),u&2048&&Gc(n.alternate,n);break;default:vi(t,n,a,s)}}function zr(t,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,T=a,P=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:zr(f,x,T,P,u),Ks(8,x);break;case 23:break;case 22:var ft=x.stateNode;x.memoizedState!==null?ft._visibility&2?zr(f,x,T,P,u):Qs(f,x):(ft._visibility|=2,zr(f,x,T,P,u)),u&&$&2048&&Hc(x.alternate,x);break;case 24:zr(f,x,T,P,u),u&&$&2048&&Gc(x.alternate,x);break;default:zr(f,x,T,P,u)}n=n.sibling}}function Qs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Qs(a,s),u&2048&&Hc(s.alternate,s);break;case 24:Qs(a,s),u&2048&&Gc(s.alternate,s);break;default:Qs(a,s)}n=n.sibling}}var Js=8192;function Fr(t){if(t.subtreeFlags&Js)for(t=t.child;t!==null;)Dm(t),t=t.sibling}function Dm(t){switch(t.tag){case 26:Fr(t),t.flags&Js&&t.memoizedState!==null&&rS(oi,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=oi;oi=Ul(t.stateNode.containerInfo),Fr(t),oi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Js,Js=16777216,Fr(t),Js=n):Fr(t));break;default:Fr(t)}}function Um(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $s(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Nm(s,t)}Um(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lm(t),t=t.sibling}function Lm(t){switch(t.tag){case 0:case 11:case 15:$s(t),t.flags&2048&&pa(9,t,t.return);break;case 3:$s(t);break;case 12:$s(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Sl(t)):$s(t);break;default:$s(t)}}function Sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Nm(s,t)}Um(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:pa(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sl(n));break;default:Sl(n)}t=t.sibling}}function Nm(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ps(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(Tm(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var M0={getCacheForType:function(t){var n=Tn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},y0=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,pe=null,xe=0,Ue=0,Xn=null,_a=!1,Ir=!1,Vc=!1,Gi=0,Ye=0,va=0,nr=0,Xc=0,ei=0,Hr=0,to=null,Pn=null,kc=!1,Wc=0,xl=1/0,Ml=null,Sa=null,Mn=0,xa=null,Gr=null,Vr=0,qc=0,Yc=null,Om=null,eo=0,Zc=null;function kn(){if((De&2)!==0&&xe!==0)return xe&-xe;if(O.T!==null){var t=wr;return t!==0?t:nf()}return Ee()}function Pm(){ei===0&&(ei=(xe&536870912)===0||be?X():536870912);var t=ti.current;return t!==null&&(t.flags|=32),ei}function Wn(t,n,a){(t===Ve&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(Xr(t,0),Ma(t,xe,ei,!1)),Bt(t,a),((De&2)===0||t!==Ve)&&(t===Ve&&((De&2)===0&&(nr|=a),Ye===4&&Ma(t,xe,ei,!1)),Si(t))}function Bm(t,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ct(t,n),u=s?A0(t,n):Qc(t,n,!0),f=s;do{if(u===0){Ir&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!E0(a)){u=Qc(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;u=to;var P=T.current.memoizedState.isDehydrated;if(P&&(Xr(T,x).flags|=256),x=Qc(T,x,!1),x!==2){if(Vc&&!P){T.errorRecoveryDisabledLanes|=f,nr|=f,u=4;break t}f=Pn,Pn=u,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){Xr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,ei,!_a);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wc+300-de(),10<u)){if(Ma(s,n,ei,!_a),qt(s,0,!0)!==0)break t;s.timeoutHandle=fg(zm.bind(null,s,a,Pn,Ml,kc,n,ei,nr,Hr,_a,f,2,-0,0),u);break t}zm(s,a,Pn,Ml,kc,n,ei,nr,Hr,_a,f,0,-0,0)}}break}while(!0);Si(t)}function zm(t,n,a,s,u,f,x,T,P,$,ft,gt,nt,it){if(t.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(lo={stylesheets:null,count:0,unsuspend:aS},Dm(n),gt=sS(),gt!==null)){t.cancelPendingCommit=gt(km.bind(null,t,n,f,a,s,u,x,T,P,ft,1,nt,it)),Ma(t,f,x,!$);return}km(t,n,f,a,s,u,x,T,P)}function E0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!In(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~Xc,n&=~nr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),x=1<<f;s[f]=-1,u&=~x}a!==0&&_t(t,a,n)}function yl(){return(De&6)===0?(no(0),!1):!0}function Kc(){if(pe!==null){if(Ue===0)var t=pe.return;else t=pe,Ni=ja=null,hc(t),Pr=null,qs=0,t=pe;for(;t!==null;)gm(t.alternate,t),t=t.return;pe=null}}function Xr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,G0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Kc(),Ve=t,pe=a=Di(t.current,null),xe=n,Ue=0,Xn=null,_a=!1,Ir=Ct(t,n),Vc=!1,Hr=ei=Xc=nr=va=Ye=0,Pn=to=null,kc=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Ot(s),f=1<<u;n|=t[u],s&=~f}return Gi=n,ko(),a}function Fm(t,n){ce=null,O.H=ul,n===zs||n===$o?(n=ep(),Ue=3):n===Jd?(n=ep(),Ue=4):Ue=n===nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,pe===null&&(Ye=1,pl(t,jn(n,t.current)))}function Im(){var t=O.H;return O.H=ul,t===null?ul:t}function Hm(){var t=O.A;return O.A=M0,t}function jc(){Ye=4,_a||(xe&4194048)!==xe&&ti.current!==null||(Ir=!0),(va&134217727)===0&&(nr&134217727)===0||Ve===null||Ma(Ve,xe,ei,!1)}function Qc(t,n,a){var s=De;De|=2;var u=Im(),f=Hm();(Ve!==t||xe!==n)&&(Ml=null,Xr(t,n)),n=!1;var x=Ye;t:do try{if(Ue!==0&&pe!==null){var T=pe,P=Xn;switch(Ue){case 8:Kc(),x=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var $=Ue;if(Ue=0,Xn=null,kr(t,T,P,$),a&&Ir){x=0;break t}break;default:$=Ue,Ue=0,Xn=null,kr(t,T,P,$)}}T0(),x=Ye;break}catch(ft){Fm(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Ni=ja=null,De=s,O.H=u,O.A=f,pe===null&&(Ve=null,xe=0,ko()),x}function T0(){for(;pe!==null;)Gm(pe)}function A0(t,n){var a=De;De|=2;var s=Im(),u=Hm();Ve!==t||xe!==n?(Ml=null,xl=de()+500,Xr(t,n)):Ir=Ct(t,n);t:do try{if(Ue!==0&&pe!==null){n=pe;var f=Xn;e:switch(Ue){case 1:Ue=0,Xn=null,kr(t,n,f,1);break;case 2:case 9:if($d(f)){Ue=0,Xn=null,Vm(n);break}n=function(){Ue!==2&&Ue!==9||Ve!==t||(Ue=7),Si(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:$d(f)?(Ue=0,Xn=null,Vm(n)):(Ue=0,Xn=null,kr(t,n,f,7));break;case 5:var x=null;switch(pe.tag){case 26:x=pe.memoizedState;case 5:case 27:var T=pe;if(!x||Eg(x)){Ue=0,Xn=null;var P=T.sibling;if(P!==null)pe=P;else{var $=T.return;$!==null?(pe=$,El($)):pe=null}break e}}Ue=0,Xn=null,kr(t,n,f,5);break;case 6:Ue=0,Xn=null,kr(t,n,f,6);break;case 8:Kc(),Ye=6;break t;default:throw Error(r(462))}}b0();break}catch(ft){Fm(t,ft)}while(!0);return Ni=ja=null,O.H=s,O.A=u,De=a,pe!==null?0:(Ve=null,xe=0,ko(),Ye)}function b0(){for(;pe!==null&&!_n();)Gm(pe)}function Gm(t){var n=pm(t.alternate,t,Gi);t.memoizedProps=t.pendingProps,n===null?El(t):pe=n}function Vm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=lm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=lm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:hc(n);default:gm(a,n),n=pe=Xd(n,Gi),n=pm(a,n,Gi)}t.memoizedProps=t.pendingProps,n===null?El(t):pe=n}function kr(t,n,a,s){Ni=ja=null,hc(n),Pr=null,qs=0;var u=n.return;try{if(m0(t,u,n,a,xe)){Ye=1,pl(t,jn(a,t.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;Ye=1,pl(t,jn(a,t.current)),pe=null;return}n.flags&32768?(be||s===1?t=!0:Ir||(xe&536870912)!==0?t=!1:(_a=t=!0,(s===2||s===9||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),Xm(n,t)):El(n)}function El(t){var n=t;do{if((n.flags&32768)!==0){Xm(n,_a);return}t=n.return;var a=_0(n.alternate,n,Gi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);Ye===0&&(Ye=5)}function Xm(t,n){do{var a=v0(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);Ye=6,pe=null}function km(t,n,a,s,u,f,x,T,P){t.cancelPendingCommit=null;do Tl();while(Mn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Gu,At(t,a,f,x,T,P),t===Ve&&(pe=Ve=null,xe=0),Gr=n,xa=t,Vr=a,qc=f,Yc=u,Om=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,D0(ae,function(){return Km(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,u=Y.p,Y.p=2,x=De,De|=4;try{S0(t,n,a)}finally{De=x,Y.p=u,O.T=s}}Mn=1,Wm(),qm(),Ym()}}function Wm(){if(Mn===1){Mn=0;var t=xa,n=Gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=Y.p;Y.p=2;var u=De;De|=4;try{Rm(n,t);var f=ff,x=Nd(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Ld(T.ownerDocument.documentElement,T)){if(P!==null&&Bu(T)){var $=P.start,ft=P.end;if(ft===void 0&&(ft=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ft,T.value.length);else{var gt=T.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ee=T.textContent.length,Jt=Math.min(P.start,ee),Pe=P.end===void 0?Jt:Math.min(P.end,ee);!it.extend&&Jt>Pe&&(x=Pe,Pe=Jt,Jt=x);var q=Ud(T,Jt),V=Ud(T,Pe);if(q&&V&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var Q=gt.createRange();Q.setStart(q.node,q.offset),it.removeAllRanges(),Jt>Pe?(it.addRange(Q),it.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),it.addRange(Q))}}}}for(gt=[],it=T;it=it.parentNode;)it.nodeType===1&&gt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var dt=gt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Bl=!!cf,ff=cf=null}finally{De=u,Y.p=s,O.T=a}}t.current=n,Mn=2}}function qm(){if(Mn===2){Mn=0;var t=xa,n=Gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=Y.p;Y.p=2;var u=De;De|=4;try{Em(t,n.alternate,n)}finally{De=u,Y.p=s,O.T=a}}Mn=3}}function Ym(){if(Mn===4||Mn===3){Mn=0,ye();var t=xa,n=Gr,a=Vr,s=Om;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Gr=xa=null,Zm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Sa=null),we(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,u=Y.p,Y.p=2,O.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var T=s[x];f(T.value,{componentStack:T.stack})}}finally{O.T=n,Y.p=u}}(Vr&3)!==0&&Tl(),Si(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Zc?eo++:(eo=0,Zc=t):eo=0,no(0)}}function Zm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ps(n)))}function Tl(t){return Wm(),qm(),Ym(),Km()}function Km(){if(Mn!==5)return!1;var t=xa,n=qc;qc=0;var a=we(Vr),s=O.T,u=Y.p;try{Y.p=32>a?32:a,O.T=null,a=Yc,Yc=null;var f=xa,x=Vr;if(Mn=0,Gr=xa=null,Vr=0,(De&6)!==0)throw Error(r(331));var T=De;if(De|=4,Lm(f.current),wm(f,f.current,x,a),De=T,no(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{Y.p=u,O.T=s,Zm(t,n)}}function jm(t,n,a){n=jn(a,n),n=bc(t.stateNode,n,2),t=ca(t,n,2),t!==null&&(Bt(t,2),Si(t))}function He(t,n,a){if(t.tag===3)jm(t,t,a);else for(;n!==null;){if(n.tag===3){jm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){t=jn(a,t),a=tm(2),s=ca(n,a,2),s!==null&&(em(a,s,n,t),Bt(s,2),Si(s));break}}n=n.return}}function Jc(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new y0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Vc=!0,u.add(a),t=R0.bind(null,t,n,a),n.then(t,t))}function R0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(xe&a)===a&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>de()-Wc?(De&2)===0&&Xr(t,0):Xc|=a,Hr===xe&&(Hr=0)),Si(t)}function Qm(t,n){n===0&&(n=Ut()),t=Ar(t,n),t!==null&&(Bt(t,n),Si(t))}function C0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qm(t,a)}function w0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Qm(t,a)}function D0(t,n){return Qt(t,n)}var Al=null,Wr=null,$c=!1,bl=!1,ef=!1,ir=0;function Si(t){t!==Wr&&t.next===null&&(Wr===null?Al=Wr=t:Wr=Wr.next=t),bl=!0,$c||($c=!0,L0())}function no(t,n){if(!ef&&bl){ef=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ot(42|t)+1)-1,f&=u&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,eg(s,f))}else f=xe,f=qt(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,eg(s,f));s=s.next}while(a);ef=!1}}function U0(){Jm()}function Jm(){bl=$c=!1;var t=0;ir!==0&&(H0()&&(t=ir),ir=0);for(var n=de(),a=null,s=Al;s!==null;){var u=s.next,f=$m(s,n);f===0?(s.next=null,a===null?Al=u:a.next=u,u===null&&(Wr=a)):(a=s,(t!==0||(f&3)!==0)&&(bl=!0)),s=u}no(t)}function $m(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Ot(f),T=1<<x,P=u[x];P===-1?((T&a)===0||(T&s)!==0)&&(u[x]=ie(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ve,a=xe,a=qt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&I(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ct(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&I(s),we(a)){case 2:case 8:a=Yt;break;case 32:a=ae;break;case 268435456:a=N;break;default:a=ae}return s=tg.bind(null,t),a=Qt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&I(s),t.callbackPriority=2,t.callbackNode=null,2}function tg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Tl()&&t.callbackNode!==a)return null;var s=xe;return s=qt(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Bm(t,s,n),$m(t,de()),t.callbackNode!=null&&t.callbackNode===a?tg.bind(null,t):null)}function eg(t,n){if(Tl())return null;Bm(t,n,!0)}function L0(){V0(function(){(De&6)!==0?Qt(ge,U0):Jm()})}function nf(){return ir===0&&(ir=X()),ir}function ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zo(""+t)}function ig(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function N0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=ng((u[vn]||null).action),x=s.submitter;x&&(n=(n=x[vn]||null)?ng(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Go("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ir!==0){var P=x?ig(u,x):new FormData(u);Mc(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=x?ig(u,x):new FormData(u),Mc(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var af=0;af<Hu.length;af++){var rf=Hu[af],O0=rf.toLowerCase(),P0=rf[0].toUpperCase()+rf.slice(1);si(O0,"on"+P0)}si(Bd,"onAnimationEnd"),si(zd,"onAnimationIteration"),si(Fd,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(Jv,"onTransitionRun"),si($v,"onTransitionStart"),si(t0,"onTransitionCancel"),si(Id,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bi("onBeforeInput",["compositionend","keypress","textInput","paste"]),bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function ag(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],P=T.instance,$=T.currentTarget;if(T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ft){dl(ft)}u.currentTarget=null,f=P}else for(x=0;x<s.length;x++){if(T=s[x],P=T.instance,$=T.currentTarget,T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ft){dl(ft)}u.currentTarget=null,f=P}}}}function me(t,n){var a=n[Ia];a===void 0&&(a=n[Ia]=new Set);var s=t+"__bubble";a.has(s)||(rg(n,t,2,!1),a.add(s))}function sf(t,n,a){var s=0;n&&(s|=4),rg(a,t,s,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function of(t){if(!t[Rl]){t[Rl]=!0,Po.forEach(function(a){a!=="selectionchange"&&(B0.has(a)||sf(a,!1,t),sf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,sf("selectionchange",!1,n))}}function rg(t,n,a,s){switch(wg(n)){case 2:var u=uS;break;case 8:u=cS;break;default:u=Mf}a=u.bind(null,n,a,t),u=void 0,!Ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function lf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=s.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=Ti(T),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){s=f=x;continue t}T=T.parentNode}}s=s.return}hd(function(){var $=f,ft=Au(a),gt=[];t:{var nt=Hd.get(t);if(nt!==void 0){var it=Go,ee=t;switch(t){case"keypress":if(Io(a)===0)break t;case"keydown":case"keyup":it=Dv;break;case"focusin":ee="focus",it=Uu;break;case"focusout":ee="blur",it=Uu;break;case"beforeblur":case"afterblur":it=Uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Nv;break;case Bd:case zd:case Fd:it=Mv;break;case Id:it=Pv;break;case"scroll":case"scrollend":it=gv;break;case"wheel":it=zv;break;case"copy":case"cut":case"paste":it=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=_d;break;case"toggle":case"beforetoggle":it=Iv}var Jt=(n&4)!==0,Pe=!Jt&&(t==="scroll"||t==="scrollend"),q=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var V=$,Q;V!==null;){var dt=V;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||q===null||(dt=ys(V,q),dt!=null&&Jt.push(ao(V,dt,Q))),Pe)break;V=V.return}0<Jt.length&&(nt=new it(nt,ee,null,a,ft),gt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",nt&&a!==Tu&&(ee=a.relatedTarget||a.fromElement)&&(Ti(ee)||ee[Un]))break t;if((it||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ee=a.relatedTarget||a.toElement,it=$,ee=ee?Ti(ee):null,ee!==null&&(Pe=c(ee),Jt=ee.tag,ee!==Pe||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(it=null,ee=$),it!==ee)){if(Jt=md,dt="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=_d,dt="onPointerLeave",q="onPointerEnter",V="pointer"),Pe=it==null?nt:Ga(it),Q=ee==null?nt:Ga(ee),nt=new Jt(dt,V+"leave",it,a,ft),nt.target=Pe,nt.relatedTarget=Q,dt=null,Ti(ft)===$&&(Jt=new Jt(q,V+"enter",ee,a,ft),Jt.target=Q,Jt.relatedTarget=Pe,dt=Jt),Pe=dt,it&&ee)e:{for(Jt=it,q=ee,V=0,Q=Jt;Q;Q=qr(Q))V++;for(Q=0,dt=q;dt;dt=qr(dt))Q++;for(;0<V-Q;)Jt=qr(Jt),V--;for(;0<Q-V;)q=qr(q),Q--;for(;V--;){if(Jt===q||q!==null&&Jt===q.alternate)break e;Jt=qr(Jt),q=qr(q)}Jt=null}else Jt=null;it!==null&&sg(gt,nt,it,Jt,!1),ee!==null&&Pe!==null&&sg(gt,Pe,ee,Jt,!0)}}t:{if(nt=$?Ga($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var It=Ad;else if(Ed(nt))if(bd)It=Kv;else{It=Yv;var he=qv}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Eu($.elementType)&&(It=Ad):It=Zv;if(It&&(It=It(t,$))){Td(gt,It,a,ft);break t}he&&he(t,nt,$),t==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&En(nt,"number",nt.value)}switch(he=$?Ga($):window,t){case"focusin":(Ed(he)||he.contentEditable==="true")&&(yr=he,zu=$,Ds=null);break;case"focusout":Ds=zu=yr=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Od(gt,a,ft);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":Od(gt,a,ft)}var kt;if(Nu)t:{switch(t){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Mr?Md(t,a)&&($t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(vd&&a.locale!=="ko"&&(Mr||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Mr&&(kt=dd()):(sa=ft,Cu="value"in sa?sa.value:sa.textContent,Mr=!0)),he=Cl($,$t),0<he.length&&($t=new gd($t,t,null,a,ft),gt.push({event:$t,listeners:he}),kt?$t.data=kt:(kt=yd(a),kt!==null&&($t.data=kt)))),(kt=Gv?Vv(t,a):Xv(t,a))&&($t=Cl($,"onBeforeInput"),0<$t.length&&(he=new gd("onBeforeInput","beforeinput",null,a,ft),gt.push({event:he,listeners:$t}),he.data=kt)),N0(gt,t,$,a,ft)}ag(gt,n)})}function ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ys(t,a),u!=null&&s.unshift(ao(t,u,f)),u=ys(t,n),u!=null&&s.push(ao(t,u,f))),t.tag===3)return s;t=t.return}return[]}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sg(t,n,a,s,u){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,P=T.alternate,$=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||$===null||(P=$,u?($=ys(a,f),$!=null&&x.unshift(ao(a,$,P))):u||($=ys(a,f),$!=null&&x.push(ao(a,$,P)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var z0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(z0,`
`).replace(F0,"")}function lg(t,n){return n=og(n),og(t)===n}function wl(){}function Oe(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||pi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&pi(t,""+s);break;case"className":wt(t,"class",s);break;case"tabIndex":wt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(t,a,s);break;case"style":cd(t,s,f);break;case"data":if(n!=="object"){wt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=zo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(t,n,"name",u.name,u,null),Oe(t,n,"formEncType",u.formEncType,u,null),Oe(t,n,"formMethod",u.formMethod,u,null),Oe(t,n,"formTarget",u.formTarget,u,null)):(Oe(t,n,"encType",u.encType,u,null),Oe(t,n,"method",u.method,u,null),Oe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=zo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=wl);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=zo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),Tt(t,"popover",s);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pv.get(a)||a,Tt(t,a,s))}}function uf(t,n,a,s,u,f){switch(a){case"style":cd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?pi(t,s):(typeof s=="number"||typeof s=="bigint")&&pi(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Tt(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,f,x,a,null)}}u&&Oe(t,n,"srcSet",a.srcSet,a,null),s&&Oe(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var T=f=x=u=null,P=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":x=ft;break;case"checked":P=ft;break;case"defaultChecked":$=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Oe(t,n,s,ft,a,null)}}Ie(t,f,T,P,$,x,u,!1),Le(t);return;case"select":me("invalid",t),s=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:Oe(t,n,u,T,a,null)}n=f,a=x,t.multiple=!!s,n!=null?rn(t,!!s,n,!1):a!=null&&rn(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=u=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(t,n,x,T,a,null)}Sn(t,s,u,f),Le(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(t,n,P,s,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<io.length;s++)me(io[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,$,s,a,null)}return;default:if(Eu(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&uf(t,n,ft,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Oe(t,n,T,s,a,null))}function I0(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,P=null,$=null,ft=null;for(it in a){var gt=a[it];if(a.hasOwnProperty(it)&&gt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=gt;default:s.hasOwnProperty(it)||Oe(t,n,it,null,s,gt)}}for(var nt in s){var it=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(it!=null||gt!=null))switch(nt){case"type":f=it;break;case"name":u=it;break;case"checked":$=it;break;case"defaultChecked":ft=it;break;case"value":x=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==gt&&Oe(t,n,nt,it,s,gt)}}Ri(t,x,T,P,$,ft,f,u);return;case"select":it=x=T=nt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":it=P;default:s.hasOwnProperty(f)||Oe(t,n,f,null,s,P)}for(u in s)if(f=s[u],P=a[u],s.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==P&&Oe(t,n,u,f,s,P)}n=T,a=x,s=it,nt!=null?rn(t,!!a,nt,!1):!!s!=!!a&&(n!=null?rn(t,!!a,n,!0):rn(t,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(t,n,T,null,s,u)}for(x in s)if(u=s[x],f=a[x],s.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":nt=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Oe(t,n,x,u,s,f)}hn(t,nt,it);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!s.hasOwnProperty(ee))switch(ee){case"selected":t.selected=!1;break;default:Oe(t,n,ee,null,s,nt)}for(P in s)if(nt=s[P],it=a[P],s.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Oe(t,n,P,nt,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!s.hasOwnProperty(Jt)&&Oe(t,n,Jt,null,s,nt);for($ in s)if(nt=s[$],it=a[$],s.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Oe(t,n,$,nt,s,it)}return;default:if(Eu(n)){for(var Pe in a)nt=a[Pe],a.hasOwnProperty(Pe)&&nt!==void 0&&!s.hasOwnProperty(Pe)&&uf(t,n,Pe,void 0,s,nt);for(ft in s)nt=s[ft],it=a[ft],!s.hasOwnProperty(ft)||nt===it||nt===void 0&&it===void 0||uf(t,n,ft,nt,s,it);return}}for(var q in a)nt=a[q],a.hasOwnProperty(q)&&nt!=null&&!s.hasOwnProperty(q)&&Oe(t,n,q,null,s,nt);for(gt in s)nt=s[gt],it=a[gt],!s.hasOwnProperty(gt)||nt===it||nt==null&&it==null||Oe(t,n,gt,nt,s,it)}var cf=null,ff=null;function Dl(t){return t.nodeType===9?t:t.ownerDocument}function ug(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var df=null;function H0(){var t=window.event;return t&&t.type==="popstate"?t===df?!1:(df=t,!0):(df=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(X0)}:fg;function X0(t){setTimeout(function(){throw t})}function ya(t){return t==="head"}function dg(t,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=t.ownerDocument;if(a&1&&ro(x.documentElement),a&2&&ro(x.body),a&4)for(a=x.head,ro(a),x=a.firstChild;x;){var T=x.nextSibling,P=x.nodeName;x[na]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=T}}if(u===0){t.removeChild(f),po(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);po(n)}function pf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pf(a),ia(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function k0(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function W0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function mf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function q0(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var gf=null;function pg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function mg(t,n,a){switch(n=Dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ia(t)}var ni=new Map,gg=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Vi=Y.d;Y.d={f:Y0,r:Z0,D:K0,C:j0,L:Q0,m:J0,X:tS,S:$0,M:eS};function Y0(){var t=Vi.f(),n=yl();return t||n}function Z0(t){var n=Ai(t);n!==null&&n.tag===5&&n.type==="form"?Bp(n):Vi.r(t)}var Yr=typeof document>"u"?null:document;function _g(t,n,a){var s=Yr;if(s&&typeof n=="string"&&n){var u=Ge(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),gg.has(u)||(gg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),yn(n,"link",t),Je(n),s.head.appendChild(n)))}}function K0(t){Vi.D(t),_g("dns-prefetch",t,null)}function j0(t,n){Vi.C(t,n),_g("preconnect",t,n)}function Q0(t,n,a){Vi.L(t,n,a);var s=Yr;if(s&&t&&n){var u='link[rel="preload"][as="'+Ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ge(a.imageSizes)+'"]')):u+='[href="'+Ge(t)+'"]';var f=u;switch(n){case"style":f=Zr(t);break;case"script":f=Kr(t)}ni.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(so(f))||n==="script"&&s.querySelector(oo(f))||(n=s.createElement("link"),yn(n,"link",t),Je(n),s.head.appendChild(n)))}}function J0(t,n){Vi.m(t,n);var a=Yr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ge(s)+'"][href="'+Ge(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(t)}if(!ni.has(f)&&(t=g({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(oo(f)))return}s=a.createElement("link"),yn(s,"link",t),Je(s),a.head.appendChild(s)}}}function $0(t,n,a){Vi.S(t,n,a);var s=Yr;if(s&&t){var u=aa(s).hoistableStyles,f=Zr(t);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(so(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&_f(t,a);var P=x=s.createElement("link");Je(P),yn(P,"link",t),P._p=new Promise(function($,ft){P.onload=$,P.onerror=ft}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ll(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function tS(t,n){Vi.X(t,n);var a=Yr;if(a&&t){var s=aa(a).hoistableScripts,u=Kr(t),f=s.get(u);f||(f=a.querySelector(oo(u)),f||(t=g({src:t,async:!0},n),(n=ni.get(u))&&vf(t,n),f=a.createElement("script"),Je(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function eS(t,n){Vi.M(t,n);var a=Yr;if(a&&t){var s=aa(a).hoistableScripts,u=Kr(t),f=s.get(u);f||(f=a.querySelector(oo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ni.get(u))&&vf(t,n),f=a.createElement("script"),Je(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function vg(t,n,a,s){var u=(u=St.current)?Ul(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Zr(a.href),a=aa(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zr(a.href);var f=aa(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(so(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||nS(u,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=aa(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zr(t){return'href="'+Ge(t)+'"'}function so(t){return'link[rel="stylesheet"]['+t+"]"}function Sg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function nS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),Je(n),t.head.appendChild(n))}function Kr(t){return'[src="'+Ge(t)+'"]'}function oo(t){return"script[async]"+t}function xg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ge(a.href)+'"]');if(s)return n.instance=s,Je(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Je(s),yn(s,"style",u),Ll(s,a.precedence,t),n.instance=s;case"stylesheet":u=Zr(a.href);var f=t.querySelector(so(u));if(f)return n.state.loading|=4,n.instance=f,Je(f),f;s=Sg(a),(u=ni.get(u))&&_f(s,u),f=(t.ownerDocument||t).createElement("link"),Je(f);var x=f;return x._p=new Promise(function(T,P){x.onload=T,x.onerror=P}),yn(f,"link",s),n.state.loading|=4,Ll(f,a.precedence,t),n.instance=f;case"script":return f=Kr(a.src),(u=t.querySelector(oo(f)))?(n.instance=u,Je(u),u):(s=a,(u=ni.get(f))&&(s=g({},a),vf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Je(u),yn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ll(s,a.precedence,t));return n.instance}function Ll(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function _f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nl=null;function Mg(t,n,a){if(Nl===null){var s=new Map,u=Nl=new Map;u.set(a,s)}else u=Nl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[na]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function yg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function iS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Eg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var lo=null;function aS(){}function rS(t,n,a){if(lo===null)throw Error(r(475));var s=lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Zr(a.href),f=t.querySelector(so(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ol.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,Je(f);return}f=t.ownerDocument||t,a=Sg(a),(u=ni.get(u))&&_f(a,u),f=f.createElement("link"),Je(f);var x=f;x._p=new Promise(function(T,P){x.onload=T,x.onerror=P}),yn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ol.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function sS(){if(lo===null)throw Error(r(475));var t=lo;return t.stylesheets&&t.count===0&&Sf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Sf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)Sf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pl=null;function Sf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pl=new Map,n.forEach(oS,t),Pl=null,Ol.call(t))}function oS(t,n){if(!(n.state.loading&4)){var a=Pl.get(t);if(a)var s=a.get(null);else{a=new Map,Pl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,u),a.set(x,u),this.count++,s=Ol.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var uo={$$typeof:B,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function lS(t,n,a,s,u,f,x,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Tg(t,n,a,s,u,f,x,T,P,$,ft,gt){return t=new lS(t,n,a,x,T,P,$,gt),n=1,f===!0&&(n|=24),f=Hn(3,null,null,n),t.current=f,f.stateNode=t,n=Ju(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},nc(f),t}function Ag(t){return t?(t=br,t):br}function bg(t,n,a,s,u,f){u=Ag(u),s.context===null?s.context=u:s.pendingContext=u,s=ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ca(t,s,n),a!==null&&(Wn(a,t,n),Is(a,t,n))}function Rg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xf(t,n){Rg(t,n),(t=t.alternate)&&Rg(t,n)}function Cg(t){if(t.tag===13){var n=Ar(t,67108864);n!==null&&Wn(n,t,67108864),xf(t,67108864)}}var Bl=!0;function uS(t,n,a,s){var u=O.T;O.T=null;var f=Y.p;try{Y.p=2,Mf(t,n,a,s)}finally{Y.p=f,O.T=u}}function cS(t,n,a,s){var u=O.T;O.T=null;var f=Y.p;try{Y.p=8,Mf(t,n,a,s)}finally{Y.p=f,O.T=u}}function Mf(t,n,a,s){if(Bl){var u=yf(s);if(u===null)lf(t,n,s,zl,a),Dg(t,s);else if(hS(u,t,n,a,s))s.stopPropagation();else if(Dg(t,s),n&4&&-1<fS.indexOf(t)){for(;u!==null;){var f=Ai(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Wt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var P=1<<31-Ot(x);T.entanglements[1]|=P,x&=~P}Si(f),(De&6)===0&&(xl=de()+500,no(0))}}break;case 13:T=Ar(f,2),T!==null&&Wn(T,f,2),yl(),xf(f,2)}if(f=yf(s),f===null&&lf(t,n,s,zl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else lf(t,n,s,null,a)}}function yf(t){return t=Au(t),Ef(t)}var zl=null;function Ef(t){if(zl=null,t=Ti(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return zl=t,null}function wg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case ge:return 2;case Yt:return 8;case ae:case Ze:return 32;case N:return 268435456;default:return 32}default:return 32}}var Tf=!1,Ea=null,Ta=null,Aa=null,co=new Map,fo=new Map,ba=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dg(t,n){switch(t){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(n.pointerId)}}function ho(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ai(n),n!==null&&Cg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function hS(t,n,a,s,u){switch(n){case"focusin":return Ea=ho(Ea,t,n,a,s,u),!0;case"dragenter":return Ta=ho(Ta,t,n,a,s,u),!0;case"mouseover":return Aa=ho(Aa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return co.set(f,ho(co.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,fo.set(f,ho(fo.get(f)||null,t,n,a,s,u)),!0}return!1}function Ug(t){var n=Ti(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Fn(t.priority,function(){if(a.tag===13){var s=kn();s=ne(s);var u=Ar(a,s);u!==null&&Wn(u,a,s),xf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=yf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Tu=s,a.target.dispatchEvent(s),Tu=null}else return n=Ai(a),n!==null&&Cg(n),t.blockedOn=a,!1;n.shift()}return!0}function Lg(t,n,a){Fl(t)&&a.delete(n)}function dS(){Tf=!1,Ea!==null&&Fl(Ea)&&(Ea=null),Ta!==null&&Fl(Ta)&&(Ta=null),Aa!==null&&Fl(Aa)&&(Aa=null),co.forEach(Lg),fo.forEach(Lg)}function Il(t,n){t.blockedOn===n&&(t.blockedOn=null,Tf||(Tf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dS)))}var Hl=null;function Ng(t){Hl!==t&&(Hl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Hl===t&&(Hl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Ef(s||a)===null)continue;break}var f=Ai(a);f!==null&&(t.splice(n,3),n-=3,Mc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function po(t){function n(P){return Il(P,t)}Ea!==null&&Il(Ea,t),Ta!==null&&Il(Ta,t),Aa!==null&&Il(Aa,t),co.forEach(n),fo.forEach(n);for(var a=0;a<ba.length;a++){var s=ba[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)Ug(a),a.blockedOn===null&&ba.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],x=u[vn]||null;if(typeof f=="function")x||Ng(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[vn]||null)T=x.formAction;else if(Ef(u)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Ng(a)}}}function Af(t){this._internalRoot=t}Gl.prototype.render=Af.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=kn();bg(a,s,t,n,null,null)},Gl.prototype.unmount=Af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;bg(t.current,2,null,t,null,null),yl(),n[Un]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ee();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ba.length&&n!==0&&n<ba[a].priority;a++);ba.splice(a,0,t),a===0&&Ug(t)}};var Og=e.version;if(Og!=="19.1.1")throw Error(r(527,Og,"19.1.1"));Y.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var pS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{ht=Vl.inject(pS),pt=Vl}catch{}}return go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=jp,f=Qp,x=Jp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Tg(t,1,!1,null,null,a,s,u,f,x,T,null),t[Un]=n.current,of(t),new Af(n)},go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=jp,x=Qp,T=Jp,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Tg(t,1,!0,n,a??null,s,u,f,x,T,P,$),n.context=Ag(null),a=n.current,s=kn(),s=ne(s),u=ua(s),u.callback=null,ca(a,u,s),a=s,n.current.lanes=a,Bt(n,a),Si(n),t[Un]=n.current,of(t),new Gl(n)},go.version="19.1.1",go}var kg;function TS(){if(kg)return Cf.exports;kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Cf.exports=ES(),Cf.exports}var AS=TS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jh="178",bS=0,Wg=1,RS=2,H_=1,CS=2,Zi=3,za=0,zn=1,Ki=2,Pa=0,hs=1,qg=2,Yg=3,Zg=4,wS=5,hr=100,DS=101,US=102,LS=103,NS=104,OS=200,PS=201,BS=202,zS=203,ch=204,fh=205,FS=206,IS=207,HS=208,GS=209,VS=210,XS=211,kS=212,WS=213,qS=214,hh=0,dh=1,ph=2,ms=3,mh=4,gh=5,_h=6,vh=7,G_=0,YS=1,ZS=2,Ba=0,KS=1,jS=2,QS=3,JS=4,$S=5,tx=6,ex=7,V_=300,gs=301,_s=302,Sh=303,xh=304,xu=306,Mh=1e3,ji=1001,yh=1002,Zn=1003,nx=1004,Xl=1005,Mi=1006,Lf=1007,pr=1008,ta=1009,X_=1010,k_=1011,Eo=1012,$h=1013,gr=1014,Qi=1015,Ro=1016,td=1017,ed=1018,To=1020,W_=35902,q_=1021,Y_=1022,di=1023,Ao=1026,bo=1027,Z_=1028,nd=1029,K_=1030,id=1031,ad=1033,fu=33776,hu=33777,du=33778,pu=33779,Eh=35840,Th=35841,Ah=35842,bh=35843,Rh=36196,Ch=37492,wh=37496,Dh=37808,Uh=37809,Lh=37810,Nh=37811,Oh=37812,Ph=37813,Bh=37814,zh=37815,Fh=37816,Ih=37817,Hh=37818,Gh=37819,Vh=37820,Xh=37821,mu=36492,kh=36494,Wh=36495,j_=36283,qh=36284,Yh=36285,Zh=36286,ix=3200,ax=3201,rx=0,sx=1,Oa="",ai="srgb",vs="srgb-linear",_u="linear",Be="srgb",jr=7680,Kg=519,ox=512,lx=513,ux=514,Q_=515,cx=516,fx=517,hx=518,dx=519,jg=35044,Qg="300 es",Ji=2e3,vu=2001;class xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=Math.PI/180,Kh=180/Math.PI;function Co(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function px(o,e){return(o%e+e)%e}function Of(o,e,i){return(1-i)*o+i*e}function _o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,i=0){Fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],S=r[l+3];const v=c[h+0],y=c[h+1],b=c[h+2],w=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S;return}if(d===1){e[i+0]=v,e[i+1]=y,e[i+2]=b,e[i+3]=w;return}if(S!==w||m!==v||p!==y||g!==b){let M=1-d;const _=m*v+p*y+g*b+S*w,F=_>=0?1:-1,B=1-_*_;if(B>Number.EPSILON){const k=Math.sqrt(B),G=Math.atan2(k,_*F);M=Math.sin(M*G)/k,d=Math.sin(d*G)/k}const U=d*F;if(m=m*M+v*U,p=p*M+y*U,g=g*M+b*U,S=S*M+w*U,M===1-d){const k=1/Math.sqrt(m*m+p*p+g*g+S*S);m*=k,p*=k,g*=k,S*=k}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],S=c[h],v=c[h+1],y=c[h+2],b=c[h+3];return e[i]=d*b+g*S+m*y-p*v,e[i+1]=m*b+g*v+p*S-d*y,e[i+2]=p*b+g*y+d*v-m*S,e[i+3]=g*b-d*S-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),S=d(c/2),v=m(r/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=v*g*S+p*y*b,this._y=p*y*S-v*g*b,this._z=p*g*b+v*y*S,this._w=p*g*S-v*y*b;break;case"YXZ":this._x=v*g*S+p*y*b,this._y=p*y*S-v*g*b,this._z=p*g*b-v*y*S,this._w=p*g*S+v*y*b;break;case"ZXY":this._x=v*g*S-p*y*b,this._y=p*y*S+v*g*b,this._z=p*g*b+v*y*S,this._w=p*g*S-v*y*b;break;case"ZYX":this._x=v*g*S-p*y*b,this._y=p*y*S+v*g*b,this._z=p*g*b-v*y*S,this._w=p*g*S+v*y*b;break;case"YZX":this._x=v*g*S+p*y*b,this._y=p*y*S+v*g*b,this._z=p*g*b-v*y*S,this._w=p*g*S-v*y*b;break;case"XZY":this._x=v*g*S-p*y*b,this._y=p*y*S-v*g*b,this._z=p*g*b+v*y*S,this._w=p*g*S+v*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],S=i[10],v=r+d+S;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),S=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*S+this._w*v,this._x=r*S+this._x*v,this._y=l*S+this._y*v,this._z=c*S+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Jg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Jg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-c*l),S=2*(c*r-h*i);return this.x=i+m*p+h*S-d*g,this.y=r+m*g+d*p-c*S,this.z=l+m*S+c*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pf.copy(this).projectOnVector(e),this.sub(Pf)}reflect(e){return this.sub(Pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pf=new ot,Jg=new wo;class oe{constructor(e,i,r,l,c,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],S=r[7],v=r[2],y=r[5],b=r[8],w=l[0],M=l[3],_=l[6],F=l[1],B=l[4],U=l[7],k=l[2],G=l[5],L=l[8];return c[0]=h*w+d*F+m*k,c[3]=h*M+d*B+m*G,c[6]=h*_+d*U+m*L,c[1]=p*w+g*F+S*k,c[4]=p*M+g*B+S*G,c[7]=p*_+g*U+S*L,c[2]=v*w+y*F+b*k,c[5]=v*M+y*B+b*G,c[8]=v*_+y*U+b*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],S=g*h-d*p,v=d*m-g*c,y=p*c-h*m,b=i*S+r*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=S*w,e[1]=(l*p-g*r)*w,e[2]=(d*r-l*h)*w,e[3]=v*w,e[4]=(g*i-l*m)*w,e[5]=(l*c-d*i)*w,e[6]=y*w,e[7]=(r*m-p*i)*w,e[8]=(h*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Bf.makeScale(e,i)),this}rotate(e){return this.premultiply(Bf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Bf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bf=new oe;function J_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Su(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function mx(){const o=Su("canvas");return o.style.display="block",o}const $g={};function ds(o){o in $g||($g[o]=!0,console.warn(o))}function gx(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function _x(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const t_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sx(){const o={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=$i(l.r),l.g=$i(l.g),l.b=$i(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=ps(l.r),l.g=ps(l.g),l.b=ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Oa?_u:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ds("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ds("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vs]:{primaries:e,whitePoint:r,transfer:_u,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Be,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const Ae=Sx();function $i(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qr;class xx{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qr===void 0&&(Qr=Su("canvas")),Qr.width=e.width,Qr.height=e.height;const l=Qr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Qr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Su("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=$i(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor($i(i[r]/255)*255):i[r]=$i(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mx=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(zf(l[h].image)):c.push(zf(l[h]))}else c=zf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?xx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yx=0;const Ff=new ot;class Dn extends xs{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,r=ji,l=ji,c=Mi,h=pr,d=di,m=ta,p=Dn.DEFAULT_ANISOTROPY,g=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Co(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ff).x}get height(){return this.source.getSize(Ff).y}get depth(){return this.source.getSize(Ff).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=V_;Dn.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,i=0,r=0,l=1){Qe.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],S=m[8],v=m[1],y=m[5],b=m[9],w=m[2],M=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(S-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(S+w)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,U=(y+1)/2,k=(_+1)/2,G=(g+v)/4,L=(S+w)/4,W=(b+M)/4;return B>U&&B>k?B<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(B),l=G/r,c=L/r):U>k?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=G/l,c=W/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=L/c,l=W/c),this.set(r,l,c,i),this}let F=Math.sqrt((M-b)*(M-b)+(S-w)*(S-w)+(v-g)*(v-g));return Math.abs(F)<.001&&(F=1),this.x=(M-b)/F,this.y=(S-w)/F,this.z=(v-g)/F,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ex extends xs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Qe(0,0,e,i),this.scissorTest=!1,this.viewport=new Qe(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Dn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new rd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends Ex{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class $_ extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tx extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ui):ui.fromBufferAttribute(c,h),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),kl.copy(r.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Wl.subVectors(this.max,vo),Jr.subVectors(e.a,vo),$r.subVectors(e.b,vo),ts.subVectors(e.c,vo),Ca.subVectors($r,Jr),wa.subVectors(ts,$r),ar.subVectors(Jr,ts);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-ar.z,ar.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,ar.z,0,-ar.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-ar.y,ar.x,0];return!If(i,Jr,$r,ts,Wl)||(i=[1,0,0,0,1,0,0,0,1],!If(i,Jr,$r,ts,Wl))?!1:(ql.crossVectors(Ca,wa),i=[ql.x,ql.y,ql.z],If(i,Jr,$r,ts,Wl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],ui=new ot,kl=new Do,Jr=new ot,$r=new ot,ts=new ot,Ca=new ot,wa=new ot,ar=new ot,vo=new ot,Wl=new ot,ql=new ot,rr=new ot;function If(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){rr.fromArray(o,c);const d=l.x*Math.abs(rr.x)+l.y*Math.abs(rr.y)+l.z*Math.abs(rr.z),m=e.dot(rr),p=i.dot(rr),g=r.dot(rr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Ax=new Do,So=new ot,Hf=new ot;class sd{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ax.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const i=So.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(So,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Hf)),this.expandByPoint(So.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ki=new ot,Gf=new ot,Yl=new ot,Da=new ot,Vf=new ot,Zl=new ot,Xf=new ot;class bx{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,i),ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Gf.copy(e).add(i).multiplyScalar(.5),Yl.copy(i).sub(e).normalize(),Da.copy(this.origin).sub(Gf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Yl),d=Da.dot(this.direction),m=-Da.dot(Yl),p=Da.lengthSq(),g=Math.abs(1-h*h);let S,v,y,b;if(g>0)if(S=h*m-d,v=h*d-m,b=c*g,S>=0)if(v>=-b)if(v<=b){const w=1/g;S*=w,v*=w,y=S*(S+h*v+2*d)+v*(h*S+v+2*m)+p}else v=c,S=Math.max(0,-(h*v+d)),y=-S*S+v*(v+2*m)+p;else v=-c,S=Math.max(0,-(h*v+d)),y=-S*S+v*(v+2*m)+p;else v<=-b?(S=Math.max(0,-(-h*c+d)),v=S>0?-c:Math.min(Math.max(-c,-m),c),y=-S*S+v*(v+2*m)+p):v<=b?(S=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(S=Math.max(0,-(h*c+d)),v=S>0?c:Math.min(Math.max(-c,-m),c),y=-S*S+v*(v+2*m)+p);else v=h>0?-c:c,S=Math.max(0,-(h*v+d)),y=-S*S+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Gf).addScaledVector(Yl,v),y}intersectSphere(e,i){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),l=ki.dot(ki)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,h=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,h=(e.min.y-v.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-v.z)*S,m=(e.max.z-v.z)*S):(d=(e.max.z-v.z)*S,m=(e.min.z-v.z)*S),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,i,r,l,c){Vf.subVectors(i,e),Zl.subVectors(r,e),Xf.crossVectors(Vf,Zl);let h=this.direction.dot(Xf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Da.subVectors(this.origin,e);const m=d*this.direction.dot(Zl.crossVectors(Da,Zl));if(m<0)return null;const p=d*this.direction.dot(Vf.cross(Da));if(p<0||m+p>h)return null;const g=-d*Da.dot(Xf);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,r,l,c,h,d,m,p,g,S,v,y,b,w,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,g,S,v,y,b,w,M)}set(e,i,r,l,c,h,d,m,p,g,S,v,y,b,w,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=S,_[14]=v,_[3]=y,_[7]=b,_[11]=w,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/es.setFromMatrixColumn(e,0).length(),c=1/es.setFromMatrixColumn(e,1).length(),h=1/es.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const v=h*g,y=h*S,b=d*g,w=d*S;i[0]=m*g,i[4]=-m*S,i[8]=p,i[1]=y+b*p,i[5]=v-w*p,i[9]=-d*m,i[2]=w-v*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const v=m*g,y=m*S,b=p*g,w=p*S;i[0]=v+w*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*S,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=w+v*d,i[10]=h*m}else if(e.order==="ZXY"){const v=m*g,y=m*S,b=p*g,w=p*S;i[0]=v-w*d,i[4]=-h*S,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=w-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const v=h*g,y=h*S,b=d*g,w=d*S;i[0]=m*g,i[4]=b*p-y,i[8]=v*p+w,i[1]=m*S,i[5]=w*p+v,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const v=h*m,y=h*p,b=d*m,w=d*p;i[0]=m*g,i[4]=w-v*S,i[8]=b*S+y,i[1]=S,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*S+b,i[10]=v-w*S}else if(e.order==="XZY"){const v=h*m,y=h*p,b=d*m,w=d*p;i[0]=m*g,i[4]=-S,i[8]=p*g,i[1]=v*S+w,i[5]=h*g,i[9]=y*S-b,i[2]=b*S-y,i[6]=d*g,i[10]=w*S+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Cx)}lookAt(e,i,r){const l=this.elements;return qn.subVectors(e,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ua.crossVectors(r,qn),Ua.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ua.crossVectors(r,qn)),Ua.normalize(),Kl.crossVectors(qn,Ua),l[0]=Ua.x,l[4]=Kl.x,l[8]=qn.x,l[1]=Ua.y,l[5]=Kl.y,l[9]=qn.y,l[2]=Ua.z,l[6]=Kl.z,l[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],S=r[5],v=r[9],y=r[13],b=r[2],w=r[6],M=r[10],_=r[14],F=r[3],B=r[7],U=r[11],k=r[15],G=l[0],L=l[4],W=l[8],C=l[12],R=l[1],H=l[5],st=l[9],tt=l[13],ct=l[2],lt=l[6],O=l[10],Y=l[14],z=l[3],Mt=l[7],D=l[11],J=l[15];return c[0]=h*G+d*R+m*ct+p*z,c[4]=h*L+d*H+m*lt+p*Mt,c[8]=h*W+d*st+m*O+p*D,c[12]=h*C+d*tt+m*Y+p*J,c[1]=g*G+S*R+v*ct+y*z,c[5]=g*L+S*H+v*lt+y*Mt,c[9]=g*W+S*st+v*O+y*D,c[13]=g*C+S*tt+v*Y+y*J,c[2]=b*G+w*R+M*ct+_*z,c[6]=b*L+w*H+M*lt+_*Mt,c[10]=b*W+w*st+M*O+_*D,c[14]=b*C+w*tt+M*Y+_*J,c[3]=F*G+B*R+U*ct+k*z,c[7]=F*L+B*H+U*lt+k*Mt,c[11]=F*W+B*st+U*O+k*D,c[15]=F*C+B*tt+U*Y+k*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],S=e[6],v=e[10],y=e[14],b=e[3],w=e[7],M=e[11],_=e[15];return b*(+c*m*S-l*p*S-c*d*v+r*p*v+l*d*y-r*m*y)+w*(+i*m*y-i*p*v+c*h*v-l*h*y+l*p*g-c*m*g)+M*(+i*p*S-i*d*y-c*h*S+r*h*y+c*d*g-r*p*g)+_*(-l*d*g-i*m*S+i*d*v+l*h*S-r*h*v+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],S=e[9],v=e[10],y=e[11],b=e[12],w=e[13],M=e[14],_=e[15],F=S*M*p-w*v*p+w*m*y-d*M*y-S*m*_+d*v*_,B=b*v*p-g*M*p-b*m*y+h*M*y+g*m*_-h*v*_,U=g*w*p-b*S*p+b*d*y-h*w*y-g*d*_+h*S*_,k=b*S*m-g*w*m-b*d*v+h*w*v+g*d*M-h*S*M,G=i*F+r*B+l*U+c*k;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/G;return e[0]=F*L,e[1]=(w*v*c-S*M*c-w*l*y+r*M*y+S*l*_-r*v*_)*L,e[2]=(d*M*c-w*m*c+w*l*p-r*M*p-d*l*_+r*m*_)*L,e[3]=(S*m*c-d*v*c-S*l*p+r*v*p+d*l*y-r*m*y)*L,e[4]=B*L,e[5]=(g*M*c-b*v*c+b*l*y-i*M*y-g*l*_+i*v*_)*L,e[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*_-i*m*_)*L,e[7]=(h*v*c-g*m*c+g*l*p-i*v*p-h*l*y+i*m*y)*L,e[8]=U*L,e[9]=(b*S*c-g*w*c-b*r*y+i*w*y+g*r*_-i*S*_)*L,e[10]=(h*w*c-b*d*c+b*r*p-i*w*p-h*r*_+i*d*_)*L,e[11]=(g*d*c-h*S*c-g*r*p+i*S*p+h*r*y-i*d*y)*L,e[12]=k*L,e[13]=(g*w*l-b*S*l+b*r*v-i*w*v-g*r*M+i*S*M)*L,e[14]=(b*d*l-h*w*l-b*r*m+i*w*m+h*r*M-i*d*M)*L,e[15]=(h*S*l-g*d*l+g*r*m-i*S*m-h*r*v+i*d*v)*L,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,S=d+d,v=c*p,y=c*g,b=c*S,w=h*g,M=h*S,_=d*S,F=m*p,B=m*g,U=m*S,k=r.x,G=r.y,L=r.z;return l[0]=(1-(w+_))*k,l[1]=(y+U)*k,l[2]=(b-B)*k,l[3]=0,l[4]=(y-U)*G,l[5]=(1-(v+_))*G,l[6]=(M+F)*G,l[7]=0,l[8]=(b+B)*L,l[9]=(M-F)*L,l[10]=(1-(v+w))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=es.set(l[0],l[1],l[2]).length();const h=es.set(l[4],l[5],l[6]).length(),d=es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],ci.copy(this);const p=1/c,g=1/h,S=1/d;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=g,ci.elements[5]*=g,ci.elements[6]*=g,ci.elements[8]*=S,ci.elements[9]*=S,ci.elements[10]*=S,i.setFromRotationMatrix(ci),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ji){const m=this.elements,p=2*c/(i-e),g=2*c/(r-l),S=(i+e)/(i-e),v=(r+l)/(r-l);let y,b;if(d===Ji)y=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===vu)y=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ji){const m=this.elements,p=1/(i-e),g=1/(r-l),S=1/(h-c),v=(i+e)*p,y=(r+l)*g;let b,w;if(d===Ji)b=(h+c)*S,w=-2*S;else if(d===vu)b=c*S,w=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=w,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const es=new ot,ci=new nn,Rx=new ot(0,0,0),Cx=new ot(1,1,1),Ua=new ot,Kl=new ot,qn=new ot,n_=new nn,i_=new wo;class ea{constructor(e=0,i=0,r=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],S=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return n_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return i_.setFromEuler(this),this.setFromQuaternion(i_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class tv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wx=0;const a_=new ot,ns=new wo,Wi=new nn,jl=new ot,xo=new ot,Dx=new ot,Ux=new wo,r_=new ot(1,0,0),s_=new ot(0,1,0),o_=new ot(0,0,1),l_={type:"added"},Lx={type:"removed"},is={type:"childadded",child:null},kf={type:"childremoved",child:null};class Kn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new ot,i=new ea,r=new wo,l=new ot(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new oe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ns.setFromAxisAngle(e,i),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,i){return ns.setFromAxisAngle(e,i),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(r_,e)}rotateY(e){return this.rotateOnAxis(s_,e)}rotateZ(e){return this.rotateOnAxis(o_,e)}translateOnAxis(e,i){return a_.copy(e).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(r_,e)}translateY(e){return this.translateOnAxis(s_,e)}translateZ(e){return this.translateOnAxis(o_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?jl.copy(e):jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(xo,jl,this.up):Wi.lookAt(jl,xo,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),ns.setFromRotationMatrix(Wi),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l_),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Lx),kf.child=e,this.dispatchEvent(kf),kf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l_),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,Dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),S=h(e.shapes),v=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),S.length>0&&(r.shapes=S),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Kn.DEFAULT_UP=new ot(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ot,qi=new ot,Wf=new ot,Yi=new ot,as=new ot,rs=new ot,u_=new ot,qf=new ot,Yf=new ot,Zf=new ot,Kf=new Qe,jf=new Qe,Qf=new Qe;class hi{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),fi.subVectors(e,i),l.cross(fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){fi.subVectors(l,i),qi.subVectors(r,i),Wf.subVectors(e,i);const h=fi.dot(fi),d=fi.dot(qi),m=fi.dot(Wf),p=qi.dot(qi),g=qi.dot(Wf),S=h*p-d*d;if(S===0)return c.set(0,0,0),null;const v=1/S,y=(p*m-d*g)*v,b=(h*g-d*m)*v;return c.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Yi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Yi.x),m.addScaledVector(h,Yi.y),m.addScaledVector(d,Yi.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Kf.setScalar(0),jf.setScalar(0),Qf.setScalar(0),Kf.fromBufferAttribute(e,i),jf.fromBufferAttribute(e,r),Qf.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Kf,c.x),h.addScaledVector(jf,c.y),h.addScaledVector(Qf,c.z),h}static isFrontFacing(e,i,r,l){return fi.subVectors(r,i),qi.subVectors(e,i),fi.cross(qi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),fi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return hi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;as.subVectors(l,r),rs.subVectors(c,r),qf.subVectors(e,r);const m=as.dot(qf),p=rs.dot(qf);if(m<=0&&p<=0)return i.copy(r);Yf.subVectors(e,l);const g=as.dot(Yf),S=rs.dot(Yf);if(g>=0&&S<=g)return i.copy(l);const v=m*S-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(as,h);Zf.subVectors(e,c);const y=as.dot(Zf),b=rs.dot(Zf);if(b>=0&&y<=b)return i.copy(c);const w=y*p-m*b;if(w<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(rs,d);const M=g*b-y*S;if(M<=0&&S-g>=0&&y-b>=0)return u_.subVectors(c,l),d=(S-g)/(S-g+(y-b)),i.copy(l).addScaledVector(u_,d);const _=1/(M+w+v);return h=w*_,d=v*_,i.copy(r).addScaledVector(as,h).addScaledVector(rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function Jf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ze{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=px(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Jf(h,c,e+1/3),this.g=Jf(h,c,e),this.b=Jf(h,c,e-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(e,i=ai){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=ev[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ae.workingToColorSpace(Rn.copy(this),e),Math.round(ve(Rn.r*255,0,255))*65536+Math.round(ve(Rn.g*255,0,255))*256+Math.round(ve(Rn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.workingToColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=g<=.5?S/(h+d):S/(2-h-d),h){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=ai){Ae.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(La),this.setHSL(La.h+e,La.s+i,La.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(La),e.getHSL(Ql);const r=Of(La.h,Ql.h,i),l=Of(La.s,Ql.s,i),c=Of(La.l,Ql.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ze;ze.NAMES=ev;let Nx=0;class Mu extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=hs,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=fh,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ch&&(r.blendSrc=this.blendSrc),this.blendDst!==fh&&(r.blendDst=this.blendDst),this.blendEquation!==hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class od extends Mu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=G_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new ot,Jl=new Fe;let Ox=0;class Ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ox++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=jg,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Jl.fromBufferAttribute(this,i),Jl.applyMatrix3(e),this.setXY(i,Jl.x,Jl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix3(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix4(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyNormalMatrix(e),this.setXYZ(i,en.x,en.y,en.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.transformDirection(e),this.setXYZ(i,en.x,en.y,en.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jg&&(e.usage=this.usage),e}}class nv extends Ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class iv extends Ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class mr extends Ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Px=0;const ii=new nn,$f=new Kn,ss=new ot,Yn=new Do,Mo=new Do,gn=new ot;class vr extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J_(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new oe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return $f.lookAt(e),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new mr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Yn.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Mo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Yn.min,Mo.min),Yn.expandByPoint(gn),gn.addVectors(Yn.max,Mo.max),Yn.expandByPoint(gn)):(Yn.expandByPoint(Mo.min),Yn.expandByPoint(Mo.max))}Yn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)gn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(ss.fromBufferAttribute(e,p),gn.add(ss)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new ot,m[W]=new ot;const p=new ot,g=new ot,S=new ot,v=new Fe,y=new Fe,b=new Fe,w=new ot,M=new ot;function _(W,C,R){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,C),S.fromBufferAttribute(r,R),v.fromBufferAttribute(c,W),y.fromBufferAttribute(c,C),b.fromBufferAttribute(c,R),g.sub(p),S.sub(p),y.sub(v),b.sub(v);const H=1/(y.x*b.y-b.x*y.y);isFinite(H)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(S,-y.y).multiplyScalar(H),M.copy(S).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(H),d[W].add(w),d[C].add(w),d[R].add(w),m[W].add(M),m[C].add(M),m[R].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let W=0,C=F.length;W<C;++W){const R=F[W],H=R.start,st=R.count;for(let tt=H,ct=H+st;tt<ct;tt+=3)_(e.getX(tt+0),e.getX(tt+1),e.getX(tt+2))}const B=new ot,U=new ot,k=new ot,G=new ot;function L(W){k.fromBufferAttribute(l,W),G.copy(k);const C=d[W];B.copy(C),B.sub(k.multiplyScalar(k.dot(C))).normalize(),U.crossVectors(G,C);const H=U.dot(m[W])<0?-1:1;h.setXYZW(W,B.x,B.y,B.z,H)}for(let W=0,C=F.length;W<C;++W){const R=F[W],H=R.start,st=R.count;for(let tt=H,ct=H+st;tt<ct;tt+=3)L(e.getX(tt+0)),L(e.getX(tt+1)),L(e.getX(tt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new ot,c=new ot,h=new ot,d=new ot,m=new ot,p=new ot,g=new ot,S=new ot;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),g.subVectors(h,c),S.subVectors(l,c),g.cross(S),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,c),S.subVectors(l,c),g.cross(S),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,S=d.normalized,v=new p.constructor(m.length*g);let y=0,b=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*g;for(let _=0;_<g;_++)v[b++]=p[y++]}return new Ei(v,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new vr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,S=p.length;g<S;g++){const v=p[g],y=e(v,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let S=0,v=p.length;S<v;S++){const y=p[S];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],S=c[p];for(let v=0,y=S.length;v<y;v++)g.push(S[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c_=new nn,sr=new bx,$l=new sd,f_=new ot,tu=new ot,eu=new ot,nu=new ot,th=new ot,iu=new ot,h_=new ot,au=new ot;class yi extends Kn{constructor(e=new vr,i=new od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){iu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],S=c[m];g!==0&&(th.fromBufferAttribute(S,e),h?iu.addScaledVector(th,g):iu.addScaledVector(th.sub(i),g))}i.add(iu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(c),sr.copy(e.ray).recast(e.near),!($l.containsPoint(sr.origin)===!1&&(sr.intersectSphere($l,f_)===null||sr.origin.distanceToSquared(f_)>(e.far-e.near)**2))&&(c_.copy(c).invert(),sr.copy(e.ray).applyMatrix4(c_),!(r.boundingBox!==null&&sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,sr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,S=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=v.length;b<w;b++){const M=v[b],_=h[M.materialIndex],F=Math.max(M.start,y.start),B=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=F,k=B;U<k;U+=3){const G=d.getX(U),L=d.getX(U+1),W=d.getX(U+2);l=ru(this,_,e,r,p,g,S,G,L,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=b,_=w;M<_;M+=3){const F=d.getX(M),B=d.getX(M+1),U=d.getX(M+2);l=ru(this,h,e,r,p,g,S,F,B,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=v.length;b<w;b++){const M=v[b],_=h[M.materialIndex],F=Math.max(M.start,y.start),B=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=F,k=B;U<k;U+=3){const G=U,L=U+1,W=U+2;l=ru(this,_,e,r,p,g,S,G,L,W),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=b,_=w;M<_;M+=3){const F=M,B=M+1,U=M+2;l=ru(this,h,e,r,p,g,S,F,B,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Bx(o,e,i,r,l,c,h,d){let m;if(e.side===zn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===za,d),m===null)return null;au.copy(d),au.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(au);return p<i.near||p>i.far?null:{distance:p,point:au.clone(),object:o}}function ru(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,tu),o.getVertexPosition(m,eu),o.getVertexPosition(p,nu);const g=Bx(o,e,i,r,tu,eu,nu,h_);if(g){const S=new ot;hi.getBarycoord(h_,tu,eu,nu,S),l&&(g.uv=hi.getInterpolatedAttribute(l,d,m,p,S,new Fe)),c&&(g.uv1=hi.getInterpolatedAttribute(c,d,m,p,S,new Fe)),h&&(g.normal=hi.getInterpolatedAttribute(h,d,m,p,S,new ot),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new ot,materialIndex:0};hi.getNormal(tu,eu,nu,v.normal),g.face=v,g.barycoord=S}return g}class Uo extends vr{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],S=[];let v=0,y=0;b("z","y","x",-1,-1,r,i,e,h,c,0),b("z","y","x",1,-1,r,i,-e,h,c,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new mr(p,3)),this.setAttribute("normal",new mr(g,3)),this.setAttribute("uv",new mr(S,2));function b(w,M,_,F,B,U,k,G,L,W,C){const R=U/L,H=k/W,st=U/2,tt=k/2,ct=G/2,lt=L+1,O=W+1;let Y=0,z=0;const Mt=new ot;for(let D=0;D<O;D++){const J=D*H-tt;for(let vt=0;vt<lt;vt++){const yt=vt*R-st;Mt[w]=yt*F,Mt[M]=J*B,Mt[_]=ct,p.push(Mt.x,Mt.y,Mt.z),Mt[w]=0,Mt[M]=0,Mt[_]=G>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),S.push(vt/L),S.push(1-D/W),Y+=1}}for(let D=0;D<W;D++)for(let J=0;J<L;J++){const vt=v+J+lt*D,yt=v+J+lt*(D+1),j=v+(J+1)+lt*(D+1),mt=v+(J+1)+lt*D;m.push(vt,yt,mt),m.push(yt,j,mt),z+=6}d.addGroup(y,z,C),y+=z,v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function wn(o){const e={};for(let i=0;i<o.length;i++){const r=Ss(o[i]);for(const l in r)e[l]=r[l]}return e}function zx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function av(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const Fx={clone:Ss,merge:wn};var Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fa extends Mu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=zx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class rv extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ji}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Na=new ot,d_=new Fe,p_=new Fe;class ri extends rv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(Nf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Na.x,Na.y).multiplyScalar(-e/Na.z),Na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Na.x,Na.y).multiplyScalar(-e/Na.z)}getViewSize(e,i){return this.getViewBounds(e,d_,p_),i.subVectors(p_,d_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Nf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const os=-90,ls=1;class Gx extends Kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(os,ls,e,i);l.layers=this.layers,this.add(l);const c=new ri(os,ls,e,i);c.layers=this.layers,this.add(c);const h=new ri(os,ls,e,i);h.layers=this.layers,this.add(h);const d=new ri(os,ls,e,i);d.layers=this.layers,this.add(d);const m=new ri(os,ls,e,i);m.layers=this.layers,this.add(m);const p=new ri(os,ls,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===vu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,S=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(S,v,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class sv extends Dn{constructor(e=[],i=gs,r,l,c,h,d,m,p,g){super(e,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vx extends _r{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Uo(5,5,5),c=new Fa({name:"CubemapFromEquirect",uniforms:Ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Pa});c.uniforms.tEquirect.value=i;const h=new yi(l,c),d=i.minFilter;return i.minFilter===pr&&(i.minFilter=Mi),new Gx(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class su extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xx={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new su,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new su,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new su,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),_=this._getHandJoint(p,w);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],v=g.position.distanceTo(S.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new su;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class kx extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const nh=new ot,Wx=new ot,qx=new oe;class cr{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=nh.subVectors(r,i).cross(Wx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(nh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||qx.getNormalMatrix(e),l=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new sd,Yx=new Fe(.5,.5),ou=new ot;class ov{constructor(e=new cr,i=new cr,r=new cr,l=new cr,c=new cr,h=new cr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ji){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],S=l[6],v=l[7],y=l[8],b=l[9],w=l[10],M=l[11],_=l[12],F=l[13],B=l[14],U=l[15];if(r[0].setComponents(m-c,v-p,M-y,U-_).normalize(),r[1].setComponents(m+c,v+p,M+y,U+_).normalize(),r[2].setComponents(m+h,v+g,M+b,U+F).normalize(),r[3].setComponents(m-h,v-g,M-b,U-F).normalize(),r[4].setComponents(m-d,v-S,M-w,U-B).normalize(),i===Ji)r[5].setComponents(m+d,v+S,M+w,U+B).normalize();else if(i===vu)r[5].setComponents(d,S,w,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const i=Yx.distanceTo(e.center);return or.radius=.7071067811865476+i,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ou.x=l.normal.x>0?e.max.x:e.min.x,ou.y=l.normal.y>0?e.max.y:e.min.y,ou.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ou)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zx extends Dn{constructor(e,i,r,l,c,h,d,m,p){super(e,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lv extends Dn{constructor(e,i,r=gr,l,c,h,d=Zn,m=Zn,p,g=Ao,S=1){if(g!==Ao&&g!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:S};super(v,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lo extends vr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,S=e/d,v=i/m,y=[],b=[],w=[],M=[];for(let _=0;_<g;_++){const F=_*v-h;for(let B=0;B<p;B++){const U=B*S-c;b.push(U,-F,0),w.push(0,0,1),M.push(B/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let F=0;F<d;F++){const B=F+p*_,U=F+p*(_+1),k=F+1+p*(_+1),G=F+1+p*_;y.push(B,U,G),y.push(U,k,G)}this.setIndex(y),this.setAttribute("position",new mr(b,3)),this.setAttribute("normal",new mr(w,3)),this.setAttribute("uv",new mr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kx extends Mu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jx extends Mu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qx extends rv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Jx extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function m_(o,e,i,r){const l=$x(r);switch(i){case q_:return o*e;case Z_:return o*e/l.components*l.byteLength;case nd:return o*e/l.components*l.byteLength;case K_:return o*e*2/l.components*l.byteLength;case id:return o*e*2/l.components*l.byteLength;case Y_:return o*e*3/l.components*l.byteLength;case di:return o*e*4/l.components*l.byteLength;case ad:return o*e*4/l.components*l.byteLength;case fu:case hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case du:case pu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Th:case bh:return Math.max(o,16)*Math.max(e,8)/4;case Eh:case Ah:return Math.max(o,8)*Math.max(e,8)/2;case Rh:case Ch:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case mu:case kh:case Wh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case j_:case qh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Yh:case Zh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $x(o){switch(o){case ta:case X_:return{byteLength:1,components:1};case Eo:case k_:case Ro:return{byteLength:2,components:1};case td:case ed:return{byteLength:2,components:4};case gr:case $h:case Qi:return{byteLength:4,components:1};case W_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function tM(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,S=p.byteLength,v=o.createBuffer();o.bindBuffer(m,v),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,m,p){const g=m.array,S=m.updateRanges;if(o.bindBuffer(p,d),S.length===0)o.bufferSubData(p,0,g);else{S.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<S.length;y++){const b=S[v],w=S[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,S[v]=w)}S.length=v+1;for(let y=0,b=S.length;y<b;y++){const w=S[y];o.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var eM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UM="gl_FragColor = linearToOutputTexel( gl_FragColor );",LM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,YM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$M=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ty=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ny=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ky=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ME=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:eM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:aM,alphatest_fragment:rM,alphatest_pars_fragment:sM,aomap_fragment:oM,aomap_pars_fragment:lM,batching_pars_vertex:uM,batching_vertex:cM,begin_vertex:fM,beginnormal_vertex:hM,bsdfs:dM,iridescence_fragment:pM,bumpmap_pars_fragment:mM,clipping_planes_fragment:gM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:vM,clipping_planes_vertex:SM,color_fragment:xM,color_pars_fragment:MM,color_pars_vertex:yM,color_vertex:EM,common:TM,cube_uv_reflection_fragment:AM,defaultnormal_vertex:bM,displacementmap_pars_vertex:RM,displacementmap_vertex:CM,emissivemap_fragment:wM,emissivemap_pars_fragment:DM,colorspace_fragment:UM,colorspace_pars_fragment:LM,envmap_fragment:NM,envmap_common_pars_fragment:OM,envmap_pars_fragment:PM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:YM,envmap_vertex:zM,fog_vertex:FM,fog_pars_vertex:IM,fog_fragment:HM,fog_pars_fragment:GM,gradientmap_pars_fragment:VM,lightmap_pars_fragment:XM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:WM,lights_pars_begin:qM,lights_toon_fragment:ZM,lights_toon_pars_fragment:KM,lights_phong_fragment:jM,lights_phong_pars_fragment:QM,lights_physical_fragment:JM,lights_physical_pars_fragment:$M,lights_fragment_begin:ty,lights_fragment_maps:ey,lights_fragment_end:ny,logdepthbuf_fragment:iy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:sy,map_fragment:oy,map_pars_fragment:ly,map_particle_fragment:uy,map_particle_pars_fragment:cy,metalnessmap_fragment:fy,metalnessmap_pars_fragment:hy,morphinstance_vertex:dy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:vy,normal_fragment_maps:Sy,normal_pars_fragment:xy,normal_pars_vertex:My,normal_vertex:yy,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:Ay,clearcoat_pars_fragment:by,iridescence_pars_fragment:Ry,opaque_fragment:Cy,packing:wy,premultiplied_alpha_fragment:Dy,project_vertex:Uy,dithering_fragment:Ly,dithering_pars_fragment:Ny,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:By,shadowmap_pars_vertex:zy,shadowmap_vertex:Fy,shadowmask_pars_fragment:Iy,skinbase_vertex:Hy,skinning_pars_vertex:Gy,skinning_vertex:Vy,skinnormal_vertex:Xy,specularmap_fragment:ky,specularmap_pars_fragment:Wy,tonemapping_fragment:qy,tonemapping_pars_fragment:Yy,transmission_fragment:Zy,transmission_pars_fragment:Ky,uv_pars_fragment:jy,uv_pars_vertex:Qy,uv_vertex:Jy,worldpos_vertex:$y,background_vert:tE,background_frag:eE,backgroundCube_vert:nE,backgroundCube_frag:iE,cube_vert:aE,cube_frag:rE,depth_vert:sE,depth_frag:oE,distanceRGBA_vert:lE,distanceRGBA_frag:uE,equirect_vert:cE,equirect_frag:fE,linedashed_vert:hE,linedashed_frag:dE,meshbasic_vert:pE,meshbasic_frag:mE,meshlambert_vert:gE,meshlambert_frag:_E,meshmatcap_vert:vE,meshmatcap_frag:SE,meshnormal_vert:xE,meshnormal_frag:ME,meshphong_vert:yE,meshphong_frag:EE,meshphysical_vert:TE,meshphysical_frag:AE,meshtoon_vert:bE,meshtoon_frag:RE,points_vert:CE,points_frag:wE,shadow_vert:DE,shadow_frag:UE,sprite_vert:LE,sprite_frag:NE},Lt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},xi={basic:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:wn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:wn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:wn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:wn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:wn([Lt.points,Lt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:wn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:wn([Lt.common,Lt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:wn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:wn([Lt.sprite,Lt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:wn([Lt.common,Lt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:wn([Lt.lights,Lt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};xi.physical={uniforms:wn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const lu={r:0,b:0,g:0},lr=new ea,OE=new nn;function PE(o,e,i,r,l,c,h){const d=new ze(0);let m=c===!0?0:1,p,g,S=null,v=0,y=null;function b(B){let U=B.isScene===!0?B.background:null;return U&&U.isTexture&&(U=(B.backgroundBlurriness>0?i:e).get(U)),U}function w(B){let U=!1;const k=b(B);k===null?_(d,m):k&&k.isColor&&(_(k,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(B,U){const k=b(U);k&&(k.isCubeTexture||k.mapping===xu)?(g===void 0&&(g=new yi(new Uo(1,1,1),new Fa({name:"BackgroundCubeMaterial",uniforms:Ss(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,L,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),lr.copy(U.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(OE.makeRotationFromEuler(lr)),g.material.toneMapped=Ae.getTransfer(k.colorSpace)!==Be,(S!==k||v!==k.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,S=k,v=k.version,y=o.toneMapping),g.layers.enableAll(),B.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new yi(new Lo(2,2),new Fa({name:"BackgroundMaterial",uniforms:Ss(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(k.colorSpace)!==Be,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(S!==k||v!==k.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,S=k,v=k.version,y=o.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function _(B,U){B.getRGB(lu,av(o)),r.buffers.color.setClear(lu.r,lu.g,lu.b,U,h)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(B,U=1){d.set(B),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,_(d,m)},render:w,addToRenderList:M,dispose:F}}function BE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,h=!1;function d(R,H,st,tt,ct){let lt=!1;const O=S(tt,st,H);c!==O&&(c=O,p(c.object)),lt=y(R,tt,st,ct),lt&&b(R,tt,st,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,U(R,H,st,tt),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function S(R,H,st){const tt=st.wireframe===!0;let ct=r[R.id];ct===void 0&&(ct={},r[R.id]=ct);let lt=ct[H.id];lt===void 0&&(lt={},ct[H.id]=lt);let O=lt[tt];return O===void 0&&(O=v(m()),lt[tt]=O),O}function v(R){const H=[],st=[],tt=[];for(let ct=0;ct<i;ct++)H[ct]=0,st[ct]=0,tt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:tt,object:R,attributes:{},index:null}}function y(R,H,st,tt){const ct=c.attributes,lt=H.attributes;let O=0;const Y=st.getAttributes();for(const z in Y)if(Y[z].location>=0){const D=ct[z];let J=lt[z];if(J===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),D===void 0||D.attribute!==J||J&&D.data!==J.data)return!0;O++}return c.attributesNum!==O||c.index!==tt}function b(R,H,st,tt){const ct={},lt=H.attributes;let O=0;const Y=st.getAttributes();for(const z in Y)if(Y[z].location>=0){let D=lt[z];D===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(D=R.instanceColor));const J={};J.attribute=D,D&&D.data&&(J.data=D.data),ct[z]=J,O++}c.attributes=ct,c.attributesNum=O,c.index=tt}function w(){const R=c.newAttributes;for(let H=0,st=R.length;H<st;H++)R[H]=0}function M(R){_(R,0)}function _(R,H){const st=c.newAttributes,tt=c.enabledAttributes,ct=c.attributeDivisors;st[R]=1,tt[R]===0&&(o.enableVertexAttribArray(R),tt[R]=1),ct[R]!==H&&(o.vertexAttribDivisor(R,H),ct[R]=H)}function F(){const R=c.newAttributes,H=c.enabledAttributes;for(let st=0,tt=H.length;st<tt;st++)H[st]!==R[st]&&(o.disableVertexAttribArray(st),H[st]=0)}function B(R,H,st,tt,ct,lt,O){O===!0?o.vertexAttribIPointer(R,H,st,ct,lt):o.vertexAttribPointer(R,H,st,tt,ct,lt)}function U(R,H,st,tt){w();const ct=tt.attributes,lt=st.getAttributes(),O=H.defaultAttributeValues;for(const Y in lt){const z=lt[Y];if(z.location>=0){let Mt=ct[Y];if(Mt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor)),Mt!==void 0){const D=Mt.normalized,J=Mt.itemSize,vt=e.get(Mt);if(vt===void 0)continue;const yt=vt.buffer,j=vt.type,mt=vt.bytesPerElement,St=j===o.INT||j===o.UNSIGNED_INT||Mt.gpuType===$h;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Rt=bt.stride,re=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<z.locationSize;Zt++)_(z.location+Zt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Zt=0;Zt<z.locationSize;Zt++)M(z.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Zt=0;Zt<z.locationSize;Zt++)B(z.location+Zt,J/z.locationSize,j,D,Rt*mt,(re+J/z.locationSize*Zt)*mt,St)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<z.locationSize;bt++)_(z.location+bt,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<z.locationSize;bt++)M(z.location+bt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let bt=0;bt<z.locationSize;bt++)B(z.location+bt,J/z.locationSize,j,D,J*mt,J/z.locationSize*bt*mt,St)}}else if(O!==void 0){const D=O[Y];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(z.location,D);break;case 3:o.vertexAttrib3fv(z.location,D);break;case 4:o.vertexAttrib4fv(z.location,D);break;default:o.vertexAttrib1fv(z.location,D)}}}}F()}function k(){W();for(const R in r){const H=r[R];for(const st in H){const tt=H[st];for(const ct in tt)g(tt[ct].object),delete tt[ct];delete H[st]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const st in H){const tt=H[st];for(const ct in tt)g(tt[ct].object),delete tt[ct];delete H[st]}delete r[R.id]}function L(R){for(const H in r){const st=r[H];if(st[R.id]===void 0)continue;const tt=st[R.id];for(const ct in tt)g(tt[ct].object),delete tt[ct];delete st[R.id]}}function W(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:G,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:M,disableUnusedAttributes:F}}function zE(o,e,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,S){S!==0&&(o.drawArraysInstanced(r,p,g,S),i.update(g,r,S))}function d(p,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,S);let y=0;for(let b=0;b<S;b++)y+=g[b];i.update(y,r,1)}function m(p,g,S,v){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,S);let b=0;for(let w=0;w<S;w++)b+=g[w]*v[w];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function FE(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==di&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const W=L===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ta&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Qi&&!W)}function m(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const S=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:F,maxVaryings:B,maxFragmentUniforms:U,vertexTextures:k,maxSamples:G}}function IE(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new cr,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,v){const y=S.length!==0||v||r!==0||l;return l=v,r=S.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,v){i=g(S,v,0)},this.setState=function(S,v,y){const b=S.clippingPlanes,w=S.clipIntersection,M=S.clipShadows,_=o.get(S);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const F=c?0:r,B=F*4;let U=_.clippingState||null;m.value=U,U=g(b,v,B,y);for(let k=0;k!==B;++k)U[k]=i[k];_.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(S,v,y,b){const w=S!==null?S.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const _=y+w*4,F=v.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<_)&&(M=new Float32Array(_));for(let B=0,U=y;B!==w;++B,U+=4)h.copy(S[B]).applyMatrix4(F,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function HE(o){let e=new WeakMap;function i(h,d){return d===Sh?h.mapping=gs:d===xh&&(h.mapping=_s),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Sh||d===xh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Vx(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const fs=4,g_=[.125,.215,.35,.446,.526,.582],dr=20,ih=new Qx,__=new ze;let ah=null,rh=0,sh=0,oh=!1;const fr=(1+Math.sqrt(5))/2,us=1/fr,v_=[new ot(-fr,us,0),new ot(fr,us,0),new ot(-us,0,fr),new ot(us,0,fr),new ot(0,fr,-us),new ot(0,fr,us),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],GE=new ot;class S_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=GE}=c;ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,rh,sh),this._renderer.xr.enabled=oh,e.scissorTest=!1,uu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Ro,format:di,colorSpace:vs,depthBuffer:!1},l=x_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VE(c)),this._blurMaterial=XE(c,e,i)}return l}_compileMaterial(e){const i=new yi(this._lodPlanes[0],e);this._renderer.compile(i,ih)}_sceneToCubeUV(e,i,r,l,c){const m=new ri(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],S=this._renderer,v=S.autoClear,y=S.toneMapping;S.getClearColor(__),S.toneMapping=Ba,S.autoClear=!1;const b=new od({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),w=new yi(new Uo,b);let M=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,M=!0):(b.color.copy(__),M=!0);for(let F=0;F<6;F++){const B=F%3;B===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[F],c.y,c.z)):B===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[F]));const U=this._cubeSize;uu(l,B*U,F>2?U:0,U,U),S.setRenderTarget(l),M&&S.render(w,m),S.render(e,m)}w.geometry.dispose(),w.material.dispose(),S.toneMapping=y,S.autoClear=v,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===gs||e.mapping===_s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new yi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;uu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ih)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=v_[(l-c-1)%v_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new yi(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*dr-1),w=c/b,M=isFinite(c)?1+Math.floor(g*w):dr;M>dr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${dr}`);const _=[];let F=0;for(let L=0;L<dr;++L){const W=L/w,C=Math.exp(-W*W/2);_.push(C),L===0?F+=C:L<M&&(F+=2*C)}for(let L=0;L<_.length;L++)_[L]=_[L]/F;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:B}=this;v.dTheta.value=b,v.mipInt.value=B-r;const U=this._sizeLods[l],k=3*U*(l>B-fs?l-B+fs:0),G=4*(this._cubeSize-U);uu(i,k,G,3*U,2*U),m.setRenderTarget(i),m.render(S,ih)}}function VE(o){const e=[],i=[],r=[];let l=o;const c=o-fs+1+g_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-fs?m=g_[h-o+fs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,S=1+p,v=[g,g,S,g,S,S,g,g,S,S,g,S],y=6,b=6,w=3,M=2,_=1,F=new Float32Array(w*b*y),B=new Float32Array(M*b*y),U=new Float32Array(_*b*y);for(let G=0;G<y;G++){const L=G%3*2/3-1,W=G>2?0:-1,C=[L,W,0,L+2/3,W,0,L+2/3,W+1,0,L,W,0,L+2/3,W+1,0,L,W+1,0];F.set(C,w*b*G),B.set(v,M*b*G);const R=[G,G,G,G,G,G];U.set(R,_*b*G)}const k=new vr;k.setAttribute("position",new Ei(F,w)),k.setAttribute("uv",new Ei(B,M)),k.setAttribute("faceIndex",new Ei(U,_)),e.push(k),l>fs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function x_(o,e,i){const r=new _r(o,e,i);return r.texture.mapping=xu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function XE(o,e,i){const r=new Float32Array(dr),l=new ot(0,1,0);return new Fa({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function M_(){return new Fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function y_(){return new Fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function ld(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kE(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Sh||m===xh,g=m===gs||m===_s;if(p||g){let S=e.get(d);const v=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new S_(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new S_(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function WE(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ds("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function qE(o,e,i,r){const l={},c=new WeakMap;function h(S){const v=S.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",h),delete l[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(S,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(S){const v=S.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function p(S){const v=[],y=S.index,b=S.attributes.position;let w=0;if(y!==null){const F=y.array;w=y.version;for(let B=0,U=F.length;B<U;B+=3){const k=F[B+0],G=F[B+1],L=F[B+2];v.push(k,G,G,L,L,k)}}else if(b!==void 0){const F=b.array;w=b.version;for(let B=0,U=F.length/3-1;B<U;B+=3){const k=B+0,G=B+1,L=B+2;v.push(k,G,G,L,L,k)}}else return;const M=new(J_(v)?iv:nv)(v,1);M.version=w;const _=c.get(S);_&&e.remove(_),c.set(S,M)}function g(S){const v=c.get(S);if(v){const y=S.index;y!==null&&v.version<y.version&&p(S)}else p(S);return c.get(S)}return{get:d,update:m,getWireframeAttribute:g}}function YE(o,e,i){let r;function l(v){r=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function m(v,y){o.drawElements(r,y,c,v*h),i.update(y,r,1)}function p(v,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,v*h,b),i.update(y,r,b))}function g(v,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,v,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function S(v,y,b,w){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<v.length;_++)p(v[_]/h,y[_],w[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,v,0,w,0,b);let _=0;for(let F=0;F<b;F++)_+=y[F]*w[F];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=S}function ZE(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function KE(o,e,i){const r=new WeakMap,l=new Qe;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==S){let R=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),w===!0&&(U=2),M===!0&&(U=3);let k=d.attributes.position.count*U,G=1;k>e.maxTextureSize&&(G=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const L=new Float32Array(k*G*4*S),W=new $_(L,k,G,S);W.type=Qi,W.needsUpdate=!0;const C=U*4;for(let H=0;H<S;H++){const st=_[H],tt=F[H],ct=B[H],lt=k*G*4*H;for(let O=0;O<st.count;O++){const Y=O*C;b===!0&&(l.fromBufferAttribute(st,O),L[lt+Y+0]=l.x,L[lt+Y+1]=l.y,L[lt+Y+2]=l.z,L[lt+Y+3]=0),w===!0&&(l.fromBufferAttribute(tt,O),L[lt+Y+4]=l.x,L[lt+Y+5]=l.y,L[lt+Y+6]=l.z,L[lt+Y+7]=0),M===!0&&(l.fromBufferAttribute(ct,O),L[lt+Y+8]=l.x,L[lt+Y+9]=l.y,L[lt+Y+10]=l.z,L[lt+Y+11]=ct.itemSize===4?l.w:1)}}v={count:S,texture:W,size:new Fe(k,G)},r.set(d,v),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const w=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function jE(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,S=e.get(m,g);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const cv=new Dn,E_=new lv(1,1),fv=new $_,hv=new Tx,dv=new sv,T_=[],A_=[],b_=new Float32Array(16),R_=new Float32Array(9),C_=new Float32Array(4);function Ms(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=T_[l];if(c===void 0&&(c=new Float32Array(l),T_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function un(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function yu(o,e){let i=A_[e];i===void 0&&(i=new Int32Array(e),A_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function QE(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function JE(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),un(i,e)}}function $E(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),un(i,e)}}function tT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),un(i,e)}}function eT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(i,e)}else{if(ln(i,r))return;C_.set(r),o.uniformMatrix2fv(this.addr,!1,C_),un(i,r)}}function nT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(i,e)}else{if(ln(i,r))return;R_.set(r),o.uniformMatrix3fv(this.addr,!1,R_),un(i,r)}}function iT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(i,e)}else{if(ln(i,r))return;b_.set(r),o.uniformMatrix4fv(this.addr,!1,b_),un(i,r)}}function aT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),un(i,e)}}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),un(i,e)}}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),un(i,e)}}function lT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),un(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),un(i,e)}}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),un(i,e)}}function hT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(E_.compareFunction=Q_,c=E_):c=cv,i.setTexture2D(e||c,l)}function dT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||hv,l)}function pT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||dv,l)}function mT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||fv,l)}function gT(o){switch(o){case 5126:return QE;case 35664:return JE;case 35665:return $E;case 35666:return tT;case 35674:return eT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return aT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return lT;case 36294:return uT;case 36295:return cT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}function _T(o,e){o.uniform1fv(this.addr,e)}function vT(o,e){const i=Ms(e,this.size,2);o.uniform2fv(this.addr,i)}function ST(o,e){const i=Ms(e,this.size,3);o.uniform3fv(this.addr,i)}function xT(o,e){const i=Ms(e,this.size,4);o.uniform4fv(this.addr,i)}function MT(o,e){const i=Ms(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yT(o,e){const i=Ms(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ET(o,e){const i=Ms(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function TT(o,e){o.uniform1iv(this.addr,e)}function AT(o,e){o.uniform2iv(this.addr,e)}function bT(o,e){o.uniform3iv(this.addr,e)}function RT(o,e){o.uniform4iv(this.addr,e)}function CT(o,e){o.uniform1uiv(this.addr,e)}function wT(o,e){o.uniform2uiv(this.addr,e)}function DT(o,e){o.uniform3uiv(this.addr,e)}function UT(o,e){o.uniform4uiv(this.addr,e)}function LT(o,e,i){const r=this.cache,l=e.length,c=yu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||cv,c[h])}function NT(o,e,i){const r=this.cache,l=e.length,c=yu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||hv,c[h])}function OT(o,e,i){const r=this.cache,l=e.length,c=yu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||dv,c[h])}function PT(o,e,i){const r=this.cache,l=e.length,c=yu(i,l);ln(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||fv,c[h])}function BT(o){switch(o){case 5126:return _T;case 35664:return vT;case 35665:return ST;case 35666:return xT;case 35674:return MT;case 35675:return yT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return bT;case 35669:case 35673:return RT;case 5125:return CT;case 36294:return wT;case 36295:return DT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return PT}}class zT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=gT(i.type)}}class FT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=BT(i.type)}}class IT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function w_(o,e){o.seq.push(e),o.map[e.id]=e}function HT(o,e,i){const r=o.name,l=r.length;for(lh.lastIndex=0;;){const c=lh.exec(r),h=lh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){w_(i,p===void 0?new zT(d,o,e):new FT(d,o,e));break}else{let S=i.map[d];S===void 0&&(S=new IT(d),w_(i,S)),i=S}}}class gu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);HT(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function D_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const GT=37297;let VT=0;function XT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const U_=new oe;function kT(o){Ae._getMatrix(U_,Ae.workingColorSpace,o);const e=`mat3( ${U_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case _u:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function L_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+XT(o.getShaderSource(e),h)}else return l}function WT(o,e){const i=kT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function qT(o,e){let i;switch(e){case KS:i="Linear";break;case jS:i="Reinhard";break;case QS:i="Cineon";break;case JS:i="ACESFilmic";break;case tx:i="AgX";break;case ex:i="Neutral";break;case $S:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const cu=new ot;function YT(){Ae.getLuminanceCoefficients(cu);const o=cu.x.toFixed(4),e=cu.y.toFixed(4),i=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function KT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function jT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function yo(o){return o!==""}function N_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(o){return o.replace(QT,$T)}const JT=new Map;function $T(o,e){let i=ue[e];if(i===void 0){const r=JT.get(e);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jh(i)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P_(o){return o.replace(tA,eA)}function eA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function B_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===H_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===CS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function iA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function rA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case G_:e="ENVMAP_BLENDING_MULTIPLY";break;case YS:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function sA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function oA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=nA(i),p=iA(i),g=aA(i),S=rA(i),v=sA(i),y=ZT(i),b=KT(c),w=l.createProgram();let M,_,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(yo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(yo).join(`
`),_.length>0&&(_+=`
`)):(M=[B_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),_=[B_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?ue.tonemapping_pars_fragment:"",i.toneMapping!==Ba?qT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,WT("linearToOutputTexel",i.outputColorSpace),YT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yo).join(`
`)),h=jh(h),h=N_(h,i),h=O_(h,i),d=jh(d),d=N_(d,i),d=O_(d,i),h=P_(h),d=P_(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const B=F+M+h,U=F+_+d,k=D_(l,l.VERTEX_SHADER,B),G=D_(l,l.FRAGMENT_SHADER,U);l.attachShader(w,k),l.attachShader(w,G),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function L(H){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(w).trim(),tt=l.getShaderInfoLog(k).trim(),ct=l.getShaderInfoLog(G).trim();let lt=!0,O=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,k,G);else{const Y=L_(l,k,"vertex"),z=L_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+Y+`
`+z)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(tt===""||ct==="")&&(O=!1);O&&(H.diagnostics={runnable:lt,programLog:st,vertexShader:{log:tt,prefix:M},fragmentShader:{log:ct,prefix:_}})}l.deleteShader(k),l.deleteShader(G),W=new gu(l,w),C=jT(l,w)}let W;this.getUniforms=function(){return W===void 0&&L(this),W};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,GT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=G,this}let lA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new cA(e),i.set(e,r)),r}}class cA{constructor(e){this.id=lA++,this.code=e,this.usedTimes=0}}function fA(o,e,i,r,l,c,h){const d=new tv,m=new uA,p=new Set,g=[],S=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,R,H,st,tt){const ct=st.fog,lt=tt.geometry,O=C.isMeshStandardMaterial?st.environment:null,Y=(C.isMeshStandardMaterial?i:e).get(C.envMap||O),z=Y&&Y.mapping===xu?Y.image.height:null,Mt=b[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const D=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=D!==void 0?D.length:0;let vt=0;lt.morphAttributes.position!==void 0&&(vt=1),lt.morphAttributes.normal!==void 0&&(vt=2),lt.morphAttributes.color!==void 0&&(vt=3);let yt,j,mt,St;if(Mt){const Ee=xi[Mt];yt=Ee.vertexShader,j=Ee.fragmentShader}else yt=C.vertexShader,j=C.fragmentShader,m.update(C),mt=m.getVertexShaderID(C),St=m.getFragmentShaderID(C);const bt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),re=tt.isInstancedMesh===!0,Zt=tt.isBatchedMesh===!0,Se=!!C.map,Me=!!C.matcap,Qt=!!Y,I=!!C.aoMap,_n=!!C.lightMap,ye=!!C.bumpMap,de=!!C.normalMap,Gt=!!C.displacementMap,ge=!!C.emissiveMap,Yt=!!C.metalnessMap,ae=!!C.roughnessMap,Ze=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,et=C.iridescence>0,ht=C.sheen>0,pt=C.transmission>0,ut=Ze&&!!C.anisotropyMap,Ot=N&&!!C.clearcoatMap,Dt=N&&!!C.clearcoatNormalMap,Ht=N&&!!C.clearcoatRoughnessMap,Vt=et&&!!C.iridescenceMap,xt=et&&!!C.iridescenceThicknessMap,Pt=ht&&!!C.sheenColorMap,Wt=ht&&!!C.sheenRoughnessMap,qt=!!C.specularMap,Ct=!!C.specularColorMap,ie=!!C.specularIntensityMap,X=pt&&!!C.transmissionMap,Ut=pt&&!!C.thicknessMap,Et=!!C.gradientMap,Bt=!!C.alphaMap,At=C.alphaTest>0,_t=!!C.alphaHash,Ft=!!C.extensions;let ne=Ba;C.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const we={shaderID:Mt,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:j,defines:C.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Zt,batchingColor:Zt&&tt._colorsTexture!==null,instancing:re,instancingColor:re&&tt.instanceColor!==null,instancingMorph:re&&tt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:vs,alphaToCoverage:!!C.alphaToCoverage,map:Se,matcap:Me,envMap:Qt,envMapMode:Qt&&Y.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:_n,bumpMap:ye,normalMap:de,displacementMap:v&&Gt,emissiveMap:ge,normalMapObjectSpace:de&&C.normalMapType===sx,normalMapTangentSpace:de&&C.normalMapType===rx,metalnessMap:Yt,roughnessMap:ae,anisotropy:Ze,anisotropyMap:ut,clearcoat:N,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ht,dispersion:E,iridescence:et,iridescenceMap:Vt,iridescenceThicknessMap:xt,sheen:ht,sheenColorMap:Pt,sheenRoughnessMap:Wt,specularMap:qt,specularColorMap:Ct,specularIntensityMap:ie,transmission:pt,transmissionMap:X,thicknessMap:Ut,gradientMap:Et,opaque:C.transparent===!1&&C.blending===hs&&C.alphaToCoverage===!1,alphaMap:Bt,alphaTest:At,alphaHash:_t,combine:C.combine,mapUv:Se&&w(C.map.channel),aoMapUv:I&&w(C.aoMap.channel),lightMapUv:_n&&w(C.lightMap.channel),bumpMapUv:ye&&w(C.bumpMap.channel),normalMapUv:de&&w(C.normalMap.channel),displacementMapUv:Gt&&w(C.displacementMap.channel),emissiveMapUv:ge&&w(C.emissiveMap.channel),metalnessMapUv:Yt&&w(C.metalnessMap.channel),roughnessMapUv:ae&&w(C.roughnessMap.channel),anisotropyMapUv:ut&&w(C.anisotropyMap.channel),clearcoatMapUv:Ot&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&w(C.sheenRoughnessMap.channel),specularMapUv:qt&&w(C.specularMap.channel),specularColorMapUv:Ct&&w(C.specularColorMap.channel),specularIntensityMapUv:ie&&w(C.specularIntensityMap.channel),transmissionMapUv:X&&w(C.transmissionMap.channel),thicknessMapUv:Ut&&w(C.thicknessMap.channel),alphaMapUv:Bt&&w(C.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(de||Ze),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!lt.attributes.uv&&(Se||Bt),fog:!!ct,useFog:C.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Rt,skinning:tt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:Se&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===Be,decodeVideoTextureEmissive:ge&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===Be,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ki,flipSided:C.side===zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ft&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&C.extensions.multiDraw===!0||Zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function _(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)R.push(H),R.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(F(R,C),B(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function F(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function B(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const R=b[C.type];let H;if(R){const st=xi[R];H=Fx.clone(st.uniforms)}else H=C.uniforms;return H}function k(C,R){let H;for(let st=0,tt=g.length;st<tt;st++){const ct=g[st];if(ct.cacheKey===R){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new oA(o,R,C,c),g.push(H)),H}function G(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function L(C){m.remove(C)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:k,releaseProgram:G,releaseShaderCache:L,programs:g,dispose:W}}function hA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function dA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function z_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function F_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(S,v,y,b,w,M){let _=o[e];return _===void 0?(_={id:S.id,object:S,geometry:v,material:y,groupOrder:b,renderOrder:S.renderOrder,z:w,group:M},o[e]=_):(_.id=S.id,_.object=S,_.geometry=v,_.material=y,_.groupOrder=b,_.renderOrder=S.renderOrder,_.z=w,_.group=M),e++,_}function d(S,v,y,b,w,M){const _=h(S,v,y,b,w,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(S,v,y,b,w,M){const _=h(S,v,y,b,w,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(S,v){i.length>1&&i.sort(S||dA),r.length>1&&r.sort(v||z_),l.length>1&&l.sort(v||z_)}function g(){for(let S=e,v=o.length;S<v;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function pA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new F_,o.set(r,[h])):l>=c.length?(h=new F_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function mA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new ze};break;case"SpotLight":i={position:new ot,direction:new ot,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function gA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let _A=0;function vA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function SA(o){const e=new mA,i=gA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,c=new nn,h=new nn;function d(p){let g=0,S=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,b=0,w=0,M=0,_=0,F=0,B=0,U=0,k=0,G=0,L=0;p.sort(vA);for(let C=0,R=p.length;C<R;C++){const H=p[C],st=H.color,tt=H.intensity,ct=H.distance,lt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=st.r*tt,S+=st.g*tt,v+=st.b*tt;else if(H.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(H.sh.coefficients[O],tt);L++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,z=i.get(H);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,r.directionalShadow[y]=z,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=H.shadow.matrix,F++}r.directional[y]=O,y++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(st).multiplyScalar(tt),O.distance=ct,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,r.spot[w]=O;const Y=H.shadow;if(H.map&&(r.spotLightMap[k]=H.map,k++,Y.updateMatrices(H),H.castShadow&&G++),r.spotLightMatrix[w]=Y.matrix,H.castShadow){const z=i.get(H);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,r.spotShadow[w]=z,r.spotShadowMap[w]=lt,U++}w++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(st).multiplyScalar(tt),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=O,M++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Y=H.shadow,z=i.get(H);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,r.pointShadow[b]=z,r.pointShadowMap[b]=lt,r.pointShadowMatrix[b]=H.shadow.matrix,B++}r.point[b]=O,b++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(tt),O.groundColor.copy(H.groundColor).multiplyScalar(tt),r.hemi[_]=O,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=S,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==y||W.pointLength!==b||W.spotLength!==w||W.rectAreaLength!==M||W.hemiLength!==_||W.numDirectionalShadows!==F||W.numPointShadows!==B||W.numSpotShadows!==U||W.numSpotMaps!==k||W.numLightProbes!==L)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=U+k-G,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=L,W.directionalLength=y,W.pointLength=b,W.spotLength=w,W.rectAreaLength=M,W.hemiLength=_,W.numDirectionalShadows=F,W.numPointShadows=B,W.numSpotShadows=U,W.numSpotMaps=k,W.numLightProbes=L,r.version=_A++)}function m(p,g){let S=0,v=0,y=0,b=0,w=0;const M=g.matrixWorldInverse;for(let _=0,F=p.length;_<F;_++){const B=p[_];if(B.isDirectionalLight){const U=r.directional[S];U.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),S++}else if(B.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(B.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(B.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(B.width*.5,0,0),U.halfHeight.set(0,B.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(B.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(M),v++}else if(B.isHemisphereLight){const U=r.hemi[w];U.direction.setFromMatrixPosition(B.matrixWorld),U.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:r}}function I_(o){const e=new SA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function xA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new I_(o),e.set(l,[d])):c>=h.length?(d=new I_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const MA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EA(o,e,i){let r=new ov;const l=new Fe,c=new Fe,h=new Qe,d=new Kx({depthPacking:ax}),m=new jx,p={},g=i.maxTextureSize,S={[za]:zn,[zn]:za,[Ki]:Ki},v=new Fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:MA,fragmentShader:yA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new vr;b.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new yi(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H_;let _=this.type;this.render=function(G,L,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Pa),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const tt=_!==Zi&&this.type===Zi,ct=_===Zi&&this.type!==Zi;for(let lt=0,O=G.length;lt<O;lt++){const Y=G[lt],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const Mt=z.getFrameExtents();if(l.multiply(Mt),c.copy(z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Mt.x),l.x=c.x*Mt.x,z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Mt.y),l.y=c.y*Mt.y,z.mapSize.y=c.y)),z.map===null||tt===!0||ct===!0){const J=this.type!==Zi?{minFilter:Zn,magFilter:Zn}:{};z.map!==null&&z.map.dispose(),z.map=new _r(l.x,l.y,J),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const D=z.getViewportCount();for(let J=0;J<D;J++){const vt=z.getViewport(J);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),st.viewport(h),z.updateMatrices(Y,J),r=z.getFrustum(),U(L,W,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Zi&&F(z,W),z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(C,R,H)};function F(G,L){const W=e.update(w);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new _r(l.x,l.y)),v.uniforms.shadow_pass.value=G.map.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(L,null,W,v,w,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(L,null,W,y,w,null)}function B(G,L,W,C){let R=null;const H=W.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)R=H;else if(R=W.isPointLight===!0?m:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const st=R.uuid,tt=L.uuid;let ct=p[st];ct===void 0&&(ct={},p[st]=ct);let lt=ct[tt];lt===void 0&&(lt=R.clone(),ct[tt]=lt,L.addEventListener("dispose",k)),R=lt}if(R.visible=L.visible,R.wireframe=L.wireframe,C===Zi?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:S[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,R.map=L.map,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const st=o.properties.get(R);st.light=W}return R}function U(G,L,W,C,R){if(G.visible===!1)return;if(G.layers.test(L.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===Zi)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,G.matrixWorld);const tt=e.update(G),ct=G.material;if(Array.isArray(ct)){const lt=tt.groups;for(let O=0,Y=lt.length;O<Y;O++){const z=lt[O],Mt=ct[z.materialIndex];if(Mt&&Mt.visible){const D=B(G,Mt,C,R);G.onBeforeShadow(o,G,L,W,tt,D,z),o.renderBufferDirect(W,null,tt,D,G,z),G.onAfterShadow(o,G,L,W,tt,D,z)}}}else if(ct.visible){const lt=B(G,ct,C,R);G.onBeforeShadow(o,G,L,W,tt,lt,null),o.renderBufferDirect(W,null,tt,lt,G,null),G.onAfterShadow(o,G,L,W,tt,lt,null)}}const st=G.children;for(let tt=0,ct=st.length;tt<ct;tt++)U(st[tt],L,W,C,R)}function k(G){G.target.removeEventListener("dispose",k);for(const W in p){const C=p[W],R=G.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const TA={[hh]:dh,[ph]:_h,[mh]:vh,[ms]:gh,[dh]:hh,[_h]:ph,[vh]:mh,[gh]:ms};function AA(o,e){function i(){let X=!1;const Ut=new Qe;let Et=null;const Bt=new Qe(0,0,0,0);return{setMask:function(At){Et!==At&&!X&&(o.colorMask(At,At,At,At),Et=At)},setLocked:function(At){X=At},setClear:function(At,_t,Ft,ne,we){we===!0&&(At*=ne,_t*=ne,Ft*=ne),Ut.set(At,_t,Ft,ne),Bt.equals(Ut)===!1&&(o.clearColor(At,_t,Ft,ne),Bt.copy(Ut))},reset:function(){X=!1,Et=null,Bt.set(-1,0,0,0)}}}function r(){let X=!1,Ut=!1,Et=null,Bt=null,At=null;return{setReversed:function(_t){if(Ut!==_t){const Ft=e.get("EXT_clip_control");_t?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ne=At;At=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(_t){_t?bt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(_t){Et!==_t&&!X&&(o.depthMask(_t),Et=_t)},setFunc:function(_t){if(Ut&&(_t=TA[_t]),Bt!==_t){switch(_t){case hh:o.depthFunc(o.NEVER);break;case dh:o.depthFunc(o.ALWAYS);break;case ph:o.depthFunc(o.LESS);break;case ms:o.depthFunc(o.LEQUAL);break;case mh:o.depthFunc(o.EQUAL);break;case gh:o.depthFunc(o.GEQUAL);break;case _h:o.depthFunc(o.GREATER);break;case vh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){At!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),At=_t)},reset:function(){X=!1,Et=null,Bt=null,At=null,Ut=!1}}}function l(){let X=!1,Ut=null,Et=null,Bt=null,At=null,_t=null,Ft=null,ne=null,we=null;return{setTest:function(Ee){X||(Ee?bt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!X&&(o.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,Fn,cn){(Et!==Ee||Bt!==Fn||At!==cn)&&(o.stencilFunc(Ee,Fn,cn),Et=Ee,Bt=Fn,At=cn)},setOp:function(Ee,Fn,cn){(_t!==Ee||Ft!==Fn||ne!==cn)&&(o.stencilOp(Ee,Fn,cn),_t=Ee,Ft=Fn,ne=cn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){we!==Ee&&(o.clearStencil(Ee),we=Ee)},reset:function(){X=!1,Ut=null,Et=null,Bt=null,At=null,_t=null,Ft=null,ne=null,we=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},S={},v=new WeakMap,y=[],b=null,w=!1,M=null,_=null,F=null,B=null,U=null,k=null,G=null,L=new ze(0,0,0),W=0,C=!1,R=null,H=null,st=null,tt=null,ct=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const z=o.getParameter(o.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=Y>=2);let Mt=null,D={};const J=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),yt=new Qe().fromArray(J),j=new Qe().fromArray(vt);function mt(X,Ut,Et,Bt){const At=new Uint8Array(4),_t=o.createTexture();o.bindTexture(X,_t),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ft=0;Ft<Et;Ft++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Ut+Ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return _t}const St={};St[o.TEXTURE_2D]=mt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),bt(o.DEPTH_TEST),h.setFunc(ms),ye(!1),de(Wg),bt(o.CULL_FACE),I(Pa);function bt(X){g[X]!==!0&&(o.enable(X),g[X]=!0)}function Rt(X){g[X]!==!1&&(o.disable(X),g[X]=!1)}function re(X,Ut){return S[X]!==Ut?(o.bindFramebuffer(X,Ut),S[X]=Ut,X===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ut),X===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Zt(X,Ut){let Et=y,Bt=!1;if(X){Et=v.get(Ut),Et===void 0&&(Et=[],v.set(Ut,Et));const At=X.textures;if(Et.length!==At.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ft=At.length;_t<Ft;_t++)Et[_t]=o.COLOR_ATTACHMENT0+_t;Et.length=At.length,Bt=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Et)}function Se(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const Me={[hr]:o.FUNC_ADD,[DS]:o.FUNC_SUBTRACT,[US]:o.FUNC_REVERSE_SUBTRACT};Me[LS]=o.MIN,Me[NS]=o.MAX;const Qt={[OS]:o.ZERO,[PS]:o.ONE,[BS]:o.SRC_COLOR,[ch]:o.SRC_ALPHA,[VS]:o.SRC_ALPHA_SATURATE,[HS]:o.DST_COLOR,[FS]:o.DST_ALPHA,[zS]:o.ONE_MINUS_SRC_COLOR,[fh]:o.ONE_MINUS_SRC_ALPHA,[GS]:o.ONE_MINUS_DST_COLOR,[IS]:o.ONE_MINUS_DST_ALPHA,[XS]:o.CONSTANT_COLOR,[kS]:o.ONE_MINUS_CONSTANT_COLOR,[WS]:o.CONSTANT_ALPHA,[qS]:o.ONE_MINUS_CONSTANT_ALPHA};function I(X,Ut,Et,Bt,At,_t,Ft,ne,we,Ee){if(X===Pa){w===!0&&(Rt(o.BLEND),w=!1);return}if(w===!1&&(bt(o.BLEND),w=!0),X!==wS){if(X!==M||Ee!==C){if((_!==hr||U!==hr)&&(o.blendEquation(o.FUNC_ADD),_=hr,U=hr),Ee)switch(X){case hs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFunc(o.ONE,o.ONE);break;case Yg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case hs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Yg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}F=null,B=null,k=null,G=null,L.set(0,0,0),W=0,M=X,C=Ee}return}At=At||Ut,_t=_t||Et,Ft=Ft||Bt,(Ut!==_||At!==U)&&(o.blendEquationSeparate(Me[Ut],Me[At]),_=Ut,U=At),(Et!==F||Bt!==B||_t!==k||Ft!==G)&&(o.blendFuncSeparate(Qt[Et],Qt[Bt],Qt[_t],Qt[Ft]),F=Et,B=Bt,k=_t,G=Ft),(ne.equals(L)===!1||we!==W)&&(o.blendColor(ne.r,ne.g,ne.b,we),L.copy(ne),W=we),M=X,C=!1}function _n(X,Ut){X.side===Ki?Rt(o.CULL_FACE):bt(o.CULL_FACE);let Et=X.side===zn;Ut&&(Et=!Et),ye(Et),X.blending===hs&&X.transparent===!1?I(Pa):I(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ge(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function de(X){X!==bS?(bt(o.CULL_FACE),X!==H&&(X===Wg?o.cullFace(o.BACK):X===RS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),H=X}function Gt(X){X!==st&&(O&&o.lineWidth(X),st=X)}function ge(X,Ut,Et){X?(bt(o.POLYGON_OFFSET_FILL),(tt!==Ut||ct!==Et)&&(o.polygonOffset(Ut,Et),tt=Ut,ct=Et)):Rt(o.POLYGON_OFFSET_FILL)}function Yt(X){X?bt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function ae(X){X===void 0&&(X=o.TEXTURE0+lt-1),Mt!==X&&(o.activeTexture(X),Mt=X)}function Ze(X,Ut,Et){Et===void 0&&(Mt===null?Et=o.TEXTURE0+lt-1:Et=Mt);let Bt=D[Et];Bt===void 0&&(Bt={type:void 0,texture:void 0},D[Et]=Bt),(Bt.type!==X||Bt.texture!==Ut)&&(Mt!==Et&&(o.activeTexture(Et),Mt=Et),o.bindTexture(X,Ut||St[X]),Bt.type=X,Bt.texture=Ut)}function N(){const X=D[Mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(X){yt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),yt.copy(X))}function Wt(X){j.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),j.copy(X))}function qt(X,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let Bt=Et.get(X);Bt===void 0&&(Bt=o.getUniformBlockIndex(Ut,X.name),Et.set(X,Bt))}function Ct(X,Ut){const Bt=p.get(Ut).get(X);m.get(Ut)!==Bt&&(o.uniformBlockBinding(Ut,Bt,X.__bindingPointIndex),m.set(Ut,Bt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Mt=null,D={},S={},v=new WeakMap,y=[],b=null,w=!1,M=null,_=null,F=null,B=null,U=null,k=null,G=null,L=new ze(0,0,0),W=0,C=!1,R=null,H=null,st=null,tt=null,ct=null,yt.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:bt,disable:Rt,bindFramebuffer:re,drawBuffers:Zt,useProgram:Se,setBlending:I,setMaterial:_n,setFlipSided:ye,setCullFace:de,setLineWidth:Gt,setPolygonOffset:ge,setScissorTest:Yt,activeTexture:ae,bindTexture:Ze,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Vt,texImage3D:xt,updateUBOMapping:qt,uniformBlockBinding:Ct,texStorage2D:Dt,texStorage3D:Ht,texSubImage2D:ht,texSubImage3D:pt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ot,scissor:Pt,viewport:Wt,reset:ie}}function bA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Fe,g=new WeakMap;let S;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return y?new OffscreenCanvas(N,E):Su("canvas")}function w(N,E,et){let ht=1;const pt=Ze(N);if((pt.width>et||pt.height>et)&&(ht=et/Math.max(pt.width,pt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ht*pt.width),Ot=Math.floor(ht*pt.height);S===void 0&&(S=b(ut,Ot));const Dt=E?b(ut,Ot):S;return Dt.width=ut,Dt.height=Ot,Dt.getContext("2d").drawImage(N,0,0,ut,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ut+"x"+Ot+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function B(N,E,et,ht,pt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=E;if(E===o.RED&&(et===o.FLOAT&&(ut=o.R32F),et===o.HALF_FLOAT&&(ut=o.R16F),et===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.R8UI),et===o.UNSIGNED_SHORT&&(ut=o.R16UI),et===o.UNSIGNED_INT&&(ut=o.R32UI),et===o.BYTE&&(ut=o.R8I),et===o.SHORT&&(ut=o.R16I),et===o.INT&&(ut=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ut=o.RG32F),et===o.HALF_FLOAT&&(ut=o.RG16F),et===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RG8UI),et===o.UNSIGNED_SHORT&&(ut=o.RG16UI),et===o.UNSIGNED_INT&&(ut=o.RG32UI),et===o.BYTE&&(ut=o.RG8I),et===o.SHORT&&(ut=o.RG16I),et===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),et===o.UNSIGNED_INT&&(ut=o.RGB32UI),et===o.BYTE&&(ut=o.RGB8I),et===o.SHORT&&(ut=o.RGB16I),et===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),et===o.UNSIGNED_INT&&(ut=o.RGBA32UI),et===o.BYTE&&(ut=o.RGBA8I),et===o.SHORT&&(ut=o.RGBA16I),et===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),E===o.RGBA){const Ot=pt?_u:Ae.getTransfer(ht);et===o.FLOAT&&(ut=o.RGBA32F),et===o.HALF_FLOAT&&(ut=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ut=Ot===Be?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function U(N,E){let et;return N?E===null||E===gr||E===To?et=o.DEPTH24_STENCIL8:E===Qi?et=o.DEPTH32F_STENCIL8:E===Eo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gr||E===To?et=o.DEPTH_COMPONENT24:E===Qi?et=o.DEPTH_COMPONENT32F:E===Eo&&(et=o.DEPTH_COMPONENT16),et}function k(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Zn&&N.minFilter!==Mi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function G(N){const E=N.target;E.removeEventListener("dispose",G),W(E),E.isVideoTexture&&g.delete(E)}function L(N){const E=N.target;E.removeEventListener("dispose",L),R(E)}function W(N){const E=r.get(N);if(E.__webglInit===void 0)return;const et=N.source,ht=v.get(et);if(ht){const pt=ht[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&C(N),Object.keys(ht).length===0&&v.delete(et)}r.remove(N)}function C(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const et=N.source,ht=v.get(et);delete ht[E.__cacheKey],h.memory.textures--}function R(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let pt=0;pt<E.__webglFramebuffer[ht].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=N.textures;for(let ht=0,pt=et.length;ht<pt;ht++){const ut=r.get(et[ht]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(et[ht])}r.remove(N)}let H=0;function st(){H=0}function tt(){const N=H;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function ct(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function lt(N,E){const et=r.get(N);if(N.isVideoTexture&&Yt(N),N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(et,N,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function O(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){St(et,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function Y(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){St(et,N,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function z(N,E){const et=r.get(N);if(N.version>0&&et.__version!==N.version){bt(et,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const Mt={[Mh]:o.REPEAT,[ji]:o.CLAMP_TO_EDGE,[yh]:o.MIRRORED_REPEAT},D={[Zn]:o.NEAREST,[nx]:o.NEAREST_MIPMAP_NEAREST,[Xl]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[Lf]:o.LINEAR_MIPMAP_NEAREST,[pr]:o.LINEAR_MIPMAP_LINEAR},J={[ox]:o.NEVER,[dx]:o.ALWAYS,[lx]:o.LESS,[Q_]:o.LEQUAL,[ux]:o.EQUAL,[hx]:o.GEQUAL,[cx]:o.GREATER,[fx]:o.NOTEQUAL};function vt(N,E){if(E.type===Qi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Mi||E.magFilter===Lf||E.magFilter===Xl||E.magFilter===pr||E.minFilter===Mi||E.minFilter===Lf||E.minFilter===Xl||E.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Mt[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Mt[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Mt[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,D[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zn||E.minFilter!==Xl&&E.minFilter!==pr||E.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function yt(N,E){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",G));const ht=E.source;let pt=v.get(ht);pt===void 0&&(pt={},v.set(ht,pt));const ut=ct(E);if(ut!==N.__cacheKey){pt[ut]===void 0&&(pt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),pt[ut].usedTimes++;const Ot=pt[N.__cacheKey];Ot!==void 0&&(pt[N.__cacheKey].usedTimes--,Ot.usedTimes===0&&C(E)),N.__cacheKey=ut,N.__webglTexture=pt[ut].texture}return et}function j(N,E,et){return Math.floor(Math.floor(N/et)/E)}function mt(N,E,et,ht){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,ht,E.data);else{ut.sort((xt,Pt)=>xt.start-Pt.start);let Ot=0;for(let xt=1;xt<ut.length;xt++){const Pt=ut[Ot],Wt=ut[xt],qt=Pt.start+Pt.count,Ct=j(Wt.start,E.width,4),ie=j(Pt.start,E.width,4);Wt.start<=qt+1&&Ct===ie&&j(Wt.start+Wt.count-1,E.width,4)===Ct?Pt.count=Math.max(Pt.count,Wt.start+Wt.count-Pt.start):(++Ot,ut[Ot]=Wt)}ut.length=Ot+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Ht=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let xt=0,Pt=ut.length;xt<Pt;xt++){const Wt=ut[xt],qt=Math.floor(Wt.start/4),Ct=Math.ceil(Wt.count/4),ie=qt%E.width,X=Math.floor(qt/E.width),Ut=Ct,Et=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ie,X,Ut,Et,et,ht,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function St(N,E,et){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const pt=yt(N,E),ut=E.source;i.bindTexture(ht,N.__webglTexture,o.TEXTURE0+et);const Ot=r.get(ut);if(ut.version!==Ot.__version||pt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=Ae.getPrimaries(Ae.workingColorSpace),Ht=E.colorSpace===Oa?null:Ae.getPrimaries(E.colorSpace),Vt=E.colorSpace===Oa||Dt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let xt=w(E.image,!1,l.maxTextureSize);xt=ae(E,xt);const Pt=c.convert(E.format,E.colorSpace),Wt=c.convert(E.type);let qt=B(E.internalFormat,Pt,Wt,E.colorSpace,E.isVideoTexture);vt(ht,E);let Ct;const ie=E.mipmaps,X=E.isVideoTexture!==!0,Ut=Ot.__version===void 0||pt===!0,Et=ut.dataReady,Bt=k(E,xt);if(E.isDepthTexture)qt=U(E.format===bo,E.type),Ut&&(X?i.texStorage2D(o.TEXTURE_2D,1,qt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,null));else if(E.isDataTexture)if(ie.length>0){X&&Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,qt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],X?Et&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,Pt,Wt,Ct.data):i.texImage2D(o.TEXTURE_2D,At,qt,Ct.width,Ct.height,0,Pt,Wt,Ct.data);E.generateMipmaps=!1}else X?(Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,qt,xt.width,xt.height),Et&&mt(E,xt,Pt,Wt)):i.texImage2D(o.TEXTURE_2D,0,qt,xt.width,xt.height,0,Pt,Wt,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,qt,ie[0].width,ie[0].height,xt.depth);for(let At=0,_t=ie.length;At<_t;At++)if(Ct=ie[At],E.format!==di)if(Pt!==null)if(X){if(Et)if(E.layerUpdates.size>0){const Ft=m_(Ct.width,Ct.height,E.format,E.type);for(const ne of E.layerUpdates){const we=Ct.data.subarray(ne*Ft/Ct.data.BYTES_PER_ELEMENT,(ne+1)*Ft/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,ne,Ct.width,Ct.height,1,Pt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,xt.depth,Pt,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,qt,Ct.width,Ct.height,xt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Et&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,xt.depth,Pt,Wt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,qt,Ct.width,Ct.height,xt.depth,0,Pt,Wt,Ct.data)}else{X&&Ut&&i.texStorage2D(o.TEXTURE_2D,Bt,qt,ie[0].width,ie[0].height);for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],E.format!==di?Pt!==null?X?Et&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,Pt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,At,qt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Et&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ct.width,Ct.height,Pt,Wt,Ct.data):i.texImage2D(o.TEXTURE_2D,At,qt,Ct.width,Ct.height,0,Pt,Wt,Ct.data)}else if(E.isDataArrayTexture)if(X){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,qt,xt.width,xt.height,xt.depth),Et)if(E.layerUpdates.size>0){const At=m_(xt.width,xt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ft=xt.data.subarray(_t*At/xt.data.BYTES_PER_ELEMENT,(_t+1)*At/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,xt.width,xt.height,1,Pt,Wt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(E.isData3DTexture)X?(Ut&&i.texStorage3D(o.TEXTURE_3D,Bt,qt,xt.width,xt.height,xt.depth),Et&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Wt,xt.data)):i.texImage3D(o.TEXTURE_3D,0,qt,xt.width,xt.height,xt.depth,0,Pt,Wt,xt.data);else if(E.isFramebufferTexture){if(Ut)if(X)i.texStorage2D(o.TEXTURE_2D,Bt,qt,xt.width,xt.height);else{let At=xt.width,_t=xt.height;for(let Ft=0;Ft<Bt;Ft++)i.texImage2D(o.TEXTURE_2D,Ft,qt,At,_t,0,Pt,Wt,null),At>>=1,_t>>=1}}else if(ie.length>0){if(X&&Ut){const At=Ze(ie[0]);i.texStorage2D(o.TEXTURE_2D,Bt,qt,At.width,At.height)}for(let At=0,_t=ie.length;At<_t;At++)Ct=ie[At],X?Et&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Pt,Wt,Ct):i.texImage2D(o.TEXTURE_2D,At,qt,Pt,Wt,Ct);E.generateMipmaps=!1}else if(X){if(Ut){const At=Ze(xt);i.texStorage2D(o.TEXTURE_2D,Bt,qt,At.width,At.height)}Et&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Wt,xt)}else i.texImage2D(o.TEXTURE_2D,0,qt,Pt,Wt,xt);M(E)&&_(ht),Ot.__version=ut.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function bt(N,E,et){if(E.image.length!==6)return;const ht=yt(N,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const ut=r.get(pt);if(pt.version!==ut.__version||ht===!0){i.activeTexture(o.TEXTURE0+et);const Ot=Ae.getPrimaries(Ae.workingColorSpace),Dt=E.colorSpace===Oa?null:Ae.getPrimaries(E.colorSpace),Ht=E.colorSpace===Oa||Ot===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,xt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!Vt&&!xt?Pt[_t]=w(E.image[_t],!0,l.maxCubemapSize):Pt[_t]=xt?E.image[_t].image:E.image[_t],Pt[_t]=ae(E,Pt[_t]);const Wt=Pt[0],qt=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),ie=B(E.internalFormat,qt,Ct,E.colorSpace),X=E.isVideoTexture!==!0,Ut=ut.__version===void 0||ht===!0,Et=pt.dataReady;let Bt=k(E,Wt);vt(o.TEXTURE_CUBE_MAP,E);let At;if(Vt){X&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ie,Wt.width,Wt.height);for(let _t=0;_t<6;_t++){At=Pt[_t].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];E.format!==di?qt!==null?X?Et&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,qt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,ne.width,ne.height,qt,Ct,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,ie,ne.width,ne.height,0,qt,Ct,ne.data)}}}else{if(At=E.mipmaps,X&&Ut){At.length>0&&Bt++;const _t=Ze(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(xt){X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,qt,Ct,Pt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Pt[_t].width,Pt[_t].height,0,qt,Ct,Pt[_t].data);for(let Ft=0;Ft<At.length;Ft++){const we=At[Ft].image[_t].image;X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,we.width,we.height,qt,Ct,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,we.width,we.height,0,qt,Ct,we.data)}}else{X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,qt,Ct,Pt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,qt,Ct,Pt[_t]);for(let Ft=0;Ft<At.length;Ft++){const ne=At[Ft];X?Et&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,qt,Ct,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,ie,qt,Ct,ne.image[_t])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ut.__version=pt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Rt(N,E,et,ht,pt,ut){const Ot=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Ht=B(et.internalFormat,Ot,Dt,et.colorSpace),Vt=r.get(E),xt=r.get(et);if(xt.__renderTarget=E,!Vt.__hasExternalTextures){const Pt=Math.max(1,E.width>>ut),Wt=Math.max(1,E.height>>ut);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,ut,Ht,Pt,Wt,E.depth,0,Ot,Dt,null):i.texImage2D(pt,ut,Ht,Pt,Wt,0,Ot,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),ge(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,pt,xt.__webglTexture,0,Gt(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,pt,xt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function re(N,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ht=E.depthTexture,pt=ht&&ht.isDepthTexture?ht.type:null,ut=U(E.stencilBuffer,pt),Ot=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Gt(E);ge(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,ut,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,N)}else{const ht=E.textures;for(let pt=0;pt<ht.length;pt++){const ut=ht[pt],Ot=c.convert(ut.format,ut.colorSpace),Dt=c.convert(ut.type),Ht=B(ut.internalFormat,Ot,Dt,ut.colorSpace),Vt=Gt(E);et&&ge(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Vt,Ht,E.width,E.height):ge(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Vt,Ht,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt(E.depthTexture,0);const pt=ht.__webglTexture,ut=Gt(E);if(E.depthTexture.format===Ao)ge(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(E.depthTexture.format===bo)ge(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Se(N){const E=r.get(N),et=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",pt)};ht.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=ht}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ht=N.texture.mipmaps;ht&&ht.length>0?Zt(E.__webglFramebuffer[0],N):Zt(E.__webglFramebuffer,N)}else if(et){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),re(E.__webglDepthbuffer[ht],N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ut)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),re(E.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Me(N,E,et){const ht=r.get(N);E!==void 0&&Rt(ht.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Se(N)}function Qt(N){const E=N.texture,et=r.get(N),ht=r.get(E);N.addEventListener("dispose",L);const pt=N.textures,ut=N.isWebGLCubeRenderTarget===!0,Ot=pt.length>1;if(Ot||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ut){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Ht=0;Ht<E.mipmaps.length;Ht++)et.__webglFramebuffer[Dt][Ht]=o.createFramebuffer()}else et.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let Dt=0,Ht=pt.length;Dt<Ht;Dt++){const Vt=r.get(pt[Dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&ge(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<pt.length;Dt++){const Ht=pt[Dt];et.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Vt=c.convert(Ht.format,Ht.colorSpace),xt=c.convert(Ht.type),Pt=B(Ht.internalFormat,Vt,xt,Ht.colorSpace,N.isXRRenderTarget===!0),Wt=Gt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Pt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),re(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Rt(et.__webglFramebuffer[Dt][Ht],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ht);else Rt(et.__webglFramebuffer[Dt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Ht=pt.length;Dt<Ht;Dt++){const Vt=pt[Dt],xt=r.get(Vt);i.bindTexture(o.TEXTURE_2D,xt.__webglTexture),vt(o.TEXTURE_2D,Vt),Rt(et.__webglFramebuffer,N,Vt,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),M(Vt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ht.__webglTexture),vt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ht=0;Ht<E.mipmaps.length;Ht++)Rt(et.__webglFramebuffer[Ht],N,E,o.COLOR_ATTACHMENT0,Dt,Ht);else Rt(et.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Dt,0);M(E)&&_(Dt),i.unbindTexture()}N.depthBuffer&&Se(N)}function I(N){const E=N.textures;for(let et=0,ht=E.length;et<ht;et++){const pt=E[et];if(M(pt)){const ut=F(N),Ot=r.get(pt).__webglTexture;i.bindTexture(ut,Ot),_(ut),i.unbindTexture()}}}const _n=[],ye=[];function de(N){if(N.samples>0){if(ge(N)===!1){const E=N.textures,et=N.width,ht=N.height;let pt=o.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(N),Dt=E.length>1;if(Dt)for(let Vt=0;Vt<E.length;Vt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=N.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=r.get(E[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xt,0)}o.blitFramebuffer(0,0,et,ht,0,0,et,ht,pt,o.NEAREST),m===!0&&(_n.length=0,ye.length=0,_n.push(o.COLOR_ATTACHMENT0+Vt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(_n.push(ut),ye.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ye)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_n))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Vt=0;Vt<E.length;Vt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Vt]);const xt=r.get(E[Vt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,xt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Gt(N){return Math.min(l.maxSamples,N.samples)}function ge(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Yt(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function ae(N,E){const et=N.colorSpace,ht=N.format,pt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==vs&&et!==Oa&&(Ae.getTransfer(et)===Be?(ht!==di||pt!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=st,this.setTexture2D=lt,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=Me,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=ge}function RA(o,e){function i(r,l=Oa){let c;const h=Ae.getTransfer(l);if(r===ta)return o.UNSIGNED_BYTE;if(r===td)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ed)return o.UNSIGNED_SHORT_5_5_5_1;if(r===W_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===X_)return o.BYTE;if(r===k_)return o.SHORT;if(r===Eo)return o.UNSIGNED_SHORT;if(r===$h)return o.INT;if(r===gr)return o.UNSIGNED_INT;if(r===Qi)return o.FLOAT;if(r===Ro)return o.HALF_FLOAT;if(r===q_)return o.ALPHA;if(r===Y_)return o.RGB;if(r===di)return o.RGBA;if(r===Ao)return o.DEPTH_COMPONENT;if(r===bo)return o.DEPTH_STENCIL;if(r===Z_)return o.RED;if(r===nd)return o.RED_INTEGER;if(r===K_)return o.RG;if(r===id)return o.RG_INTEGER;if(r===ad)return o.RGBA_INTEGER;if(r===fu||r===hu||r===du||r===pu)if(h===Be)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Eh||r===Th||r===Ah||r===bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Eh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rh||r===Ch||r===wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Rh||r===Ch)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===wh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Bh||r===zh||r===Fh||r===Ih||r===Hh||r===Gh||r===Vh||r===Xh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Dh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ph)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ih)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xh)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mu||r===kh||r===Wh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===mu)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===j_||r===qh||r===Yh||r===Zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===mu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===To?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Dn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Fa({vertexShader:CA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yi(new Lo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends xs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,S=null,v=null,y=null,b=null;const w=new DA,M=i.getContextAttributes();let _=null,F=null;const B=[],U=[],k=new Fe;let G=null;const L=new ri;L.viewport=new Qe;const W=new ri;W.viewport=new Qe;const C=[L,W],R=new Jx;let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let mt=B[j];return mt===void 0&&(mt=new eh,B[j]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(j){let mt=B[j];return mt===void 0&&(mt=new eh,B[j]=mt),mt.getGripSpace()},this.getHand=function(j){let mt=B[j];return mt===void 0&&(mt=new eh,B[j]=mt),mt.getHandSpace()};function tt(j){const mt=U.indexOf(j.inputSource);if(mt===-1)return;const St=B[mt];St!==void 0&&(St.update(j.inputSource,j.frame,p||h),St.dispatchEvent({type:j.type,data:j.inputSource}))}function ct(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",lt);for(let j=0;j<B.length;j++){const mt=U[j];mt!==null&&(U[j]=null,B[j].disconnect(mt))}H=null,st=null,w.reset(),e.setRenderTarget(_),y=null,v=null,S=null,l=null,F=null,yt.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",lt),M.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,bt=null,Rt=null;M.depth&&(Rt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?bo:Ao,bt=M.stencil?To:gr);const re={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};S=new XRWebGLBinding(l,i),v=S.createProjectionLayer(re),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),F=new _r(v.textureWidth,v.textureHeight,{format:di,type:ta,depthTexture:new lv(v.textureWidth,v.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new _r(y.framebufferWidth,y.framebufferHeight,{format:di,type:ta,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function lt(j){for(let mt=0;mt<j.removed.length;mt++){const St=j.removed[mt],bt=U.indexOf(St);bt>=0&&(U[bt]=null,B[bt].disconnect(St))}for(let mt=0;mt<j.added.length;mt++){const St=j.added[mt];let bt=U.indexOf(St);if(bt===-1){for(let re=0;re<B.length;re++)if(re>=U.length){U.push(St),bt=re;break}else if(U[re]===null){U[re]=St,bt=re;break}if(bt===-1)break}const Rt=B[bt];Rt&&Rt.connect(St)}}const O=new ot,Y=new ot;function z(j,mt,St){O.setFromMatrixPosition(mt.matrixWorld),Y.setFromMatrixPosition(St.matrixWorld);const bt=O.distanceTo(Y),Rt=mt.projectionMatrix.elements,re=St.projectionMatrix.elements,Zt=Rt[14]/(Rt[10]-1),Se=Rt[14]/(Rt[10]+1),Me=(Rt[9]+1)/Rt[5],Qt=(Rt[9]-1)/Rt[5],I=(Rt[8]-1)/Rt[0],_n=(re[8]+1)/re[0],ye=Zt*I,de=Zt*_n,Gt=bt/(-I+_n),ge=Gt*-I;if(mt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ge),j.translateZ(Gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Rt[10]===-1)j.projectionMatrix.copy(mt.projectionMatrix),j.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Yt=Zt+Gt,ae=Se+Gt,Ze=ye-ge,N=de+(bt-ge),E=Me*Se/ae*Yt,et=Qt*Se/ae*Yt;j.projectionMatrix.makePerspective(Ze,N,E,et,Yt,ae),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Mt(j,mt){mt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(mt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let mt=j.near,St=j.far;w.texture!==null&&(w.depthNear>0&&(mt=w.depthNear),w.depthFar>0&&(St=w.depthFar)),R.near=W.near=L.near=mt,R.far=W.far=L.far=St,(H!==R.near||st!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,st=R.far),L.layers.mask=j.layers.mask|2,W.layers.mask=j.layers.mask|4,R.layers.mask=L.layers.mask|W.layers.mask;const bt=j.parent,Rt=R.cameras;Mt(R,bt);for(let re=0;re<Rt.length;re++)Mt(Rt[re],bt);Rt.length===2?z(R,L,W):R.projectionMatrix.copy(L.projectionMatrix),D(j,R,bt)};function D(j,mt,St){St===null?j.matrix.copy(mt.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(mt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(mt.projectionMatrix),j.projectionMatrixInverse.copy(mt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Kh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(j){m=j,v!==null&&(v.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let J=null;function vt(j,mt){if(g=mt.getViewerPose(p||h),b=mt,g!==null){const St=g.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let bt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,bt=!0);for(let Zt=0;Zt<St.length;Zt++){const Se=St[Zt];let Me=null;if(y!==null)Me=y.getViewport(Se);else{const I=S.getViewSubImage(v,Se);Me=I.viewport,Zt===0&&(e.setRenderTargetTextures(F,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(F))}let Qt=C[Zt];Qt===void 0&&(Qt=new ri,Qt.layers.enable(Zt),Qt.viewport=new Qe,C[Zt]=Qt),Qt.matrix.fromArray(Se.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Se.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Me.x,Me.y,Me.width,Me.height),Zt===0&&(R.matrix.copy(Qt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),bt===!0&&R.cameras.push(Qt)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&S){const Zt=S.getDepthInformation(St[0]);Zt&&Zt.isValid&&Zt.texture&&w.init(e,Zt,l.renderState)}}for(let St=0;St<B.length;St++){const bt=U[St],Rt=B[St];bt!==null&&Rt!==void 0&&Rt.update(bt,mt,p||h)}J&&J(j,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),b=null}const yt=new uv;yt.setAnimationLoop(vt),this.setAnimationLoop=function(j){J=j},this.dispose=function(){}}}const ur=new ea,LA=new nn;function NA(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,av(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,F,B,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),S(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),v(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),w(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,F,B):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===zn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===zn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const F=e.get(_),B=F.envMap,U=F.envMapRotation;B&&(M.envMap.value=B,ur.copy(U),ur.x*=-1,ur.y*=-1,ur.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),M.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(ur)),M.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,F,B){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*F,M.scale.value=B*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function S(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function v(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,F){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function w(M,_){const F=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function OA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,B){const U=B.program;r.uniformBlockBinding(F,U)}function p(F,B){let U=l[F.id];U===void 0&&(b(F),U=g(F),l[F.id]=U,F.addEventListener("dispose",M));const k=B.program;r.updateUBOMapping(F,k);const G=e.render.frame;c[F.id]!==G&&(v(F),c[F.id]=G)}function g(F){const B=S();F.__bindingPointIndex=B;const U=o.createBuffer(),k=F.__size,G=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,k,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,B,U),U}function S(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(F){const B=l[F.id],U=F.uniforms,k=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,B);for(let G=0,L=U.length;G<L;G++){const W=Array.isArray(U[G])?U[G]:[U[G]];for(let C=0,R=W.length;C<R;C++){const H=W[C];if(y(H,G,C,k)===!0){const st=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let lt=0;lt<tt.length;lt++){const O=tt[lt],Y=w(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,st+ct,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,ct),ct+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(F,B,U,k){const G=F.value,L=B+"_"+U;if(k[L]===void 0)return typeof G=="number"||typeof G=="boolean"?k[L]=G:k[L]=G.clone(),!0;{const W=k[L];if(typeof G=="number"||typeof G=="boolean"){if(W!==G)return k[L]=G,!0}else if(W.equals(G)===!1)return W.copy(G),!0}return!1}function b(F){const B=F.uniforms;let U=0;const k=16;for(let L=0,W=B.length;L<W;L++){const C=Array.isArray(B[L])?B[L]:[B[L]];for(let R=0,H=C.length;R<H;R++){const st=C[R],tt=Array.isArray(st.value)?st.value:[st.value];for(let ct=0,lt=tt.length;ct<lt;ct++){const O=tt[ct],Y=w(O),z=U%k,Mt=z%Y.boundary,D=z+Mt;U+=Mt,D!==0&&k-D<Y.storage&&(U+=k-D),st.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=U,U+=Y.storage}}}const G=U%k;return G>0&&(U+=k-G),F.__size=U,F.__cache={},this}function w(F){const B={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(B.boundary=4,B.storage=4):F.isVector2?(B.boundary=8,B.storage=8):F.isVector3||F.isColor?(B.boundary=16,B.storage=12):F.isVector4?(B.boundary=16,B.storage=16):F.isMatrix3?(B.boundary=48,B.storage=48):F.isMatrix4?(B.boundary=64,B.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),B}function M(F){const B=F.target;B.removeEventListener("dispose",M);const U=h.indexOf(B.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function _(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class PA{constructor(e={}){const{canvas:i=mx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),w=new Int32Array(4);let M=null,_=null;const F=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let k=!1;this._outputColorSpace=ai;let G=0,L=0,W=null,C=-1,R=null;const H=new Qe,st=new Qe;let tt=null;const ct=new ze(0);let lt=0,O=i.width,Y=i.height,z=1,Mt=null,D=null;const J=new Qe(0,0,O,Y),vt=new Qe(0,0,O,Y);let yt=!1;const j=new ov;let mt=!1,St=!1;const bt=new nn,Rt=new nn,re=new ot,Zt=new Qe,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Qt(){return W===null?z:1}let I=r;function _n(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jh}`),i.addEventListener("webglcontextlost",Bt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",_t,!1),I===null){const Z="webgl2";if(I=_n(Z,A),I===null)throw _n(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,de,Gt,ge,Yt,ae,Ze,N,E,et,ht,pt,ut,Ot,Dt,Ht,Vt,xt,Pt,Wt,qt,Ct,ie,X;function Ut(){ye=new WE(I),ye.init(),Ct=new RA(I,ye),de=new FE(I,ye,e,Ct),Gt=new AA(I,ye),de.reverseDepthBuffer&&v&&Gt.buffers.depth.setReversed(!0),ge=new ZE(I),Yt=new hA,ae=new bA(I,ye,Gt,Yt,de,Ct,ge),Ze=new HE(U),N=new kE(U),E=new tM(I),ie=new BE(I,E),et=new qE(I,E,ge,ie),ht=new jE(I,et,E,ge),Pt=new KE(I,de,ae),Ht=new IE(Yt),pt=new fA(U,Ze,N,ye,de,ie,Ht),ut=new NA(U,Yt),Ot=new pA,Dt=new xA(ye),xt=new PE(U,Ze,N,Gt,ht,y,m),Vt=new EA(U,ht,de),X=new OA(I,ge,de,Gt),Wt=new zE(I,ye,ge),qt=new YE(I,ye,ge),ge.programs=pt.programs,U.capabilities=de,U.extensions=ye,U.properties=Yt,U.renderLists=Ot,U.shadowMap=Vt,U.state=Gt,U.info=ge}Ut();const Et=new UA(U,I);this.xr=Et,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(O,Y,!1))},this.getSize=function(A){return A.set(O,Y)},this.setSize=function(A,Z,at=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Y=Z,i.width=Math.floor(A*z),i.height=Math.floor(Z*z),at===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(O*z,Y*z).floor()},this.setDrawingBufferSize=function(A,Z,at){O=A,Y=Z,z=at,i.width=Math.floor(A*at),i.height=Math.floor(Z*at),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,Z,at,rt){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,Z,at,rt),Gt.viewport(H.copy(J).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,Z,at,rt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,Z,at,rt),Gt.scissor(st.copy(vt).multiplyScalar(z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Gt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){Mt=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,at=!0){let rt=0;if(A){let K=!1;if(W!==null){const Tt=W.texture.format;K=Tt===ad||Tt===id||Tt===nd}if(K){const Tt=W.texture.type,wt=Tt===ta||Tt===gr||Tt===Eo||Tt===To||Tt===td||Tt===ed,Nt=xt.getClearColor(),zt=xt.getClearAlpha(),te=Nt.r,jt=Nt.g,Xt=Nt.b;wt?(b[0]=te,b[1]=jt,b[2]=Xt,b[3]=zt,I.clearBufferuiv(I.COLOR,0,b)):(w[0]=te,w[1]=jt,w[2]=Xt,w[3]=zt,I.clearBufferiv(I.COLOR,0,w))}else rt|=I.COLOR_BUFFER_BIT}Z&&(rt|=I.DEPTH_BUFFER_BIT),at&&(rt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Bt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",_t,!1),xt.dispose(),Ot.dispose(),Dt.dispose(),Yt.dispose(),Ze.dispose(),N.dispose(),ht.dispose(),ie.dispose(),X.dispose(),pt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",an),Et.removeEventListener("sessionend",vn),Un.stop()};function Bt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=ge.autoReset,Z=Vt.enabled,at=Vt.autoUpdate,rt=Vt.needsUpdate,K=Vt.type;Ut(),ge.autoReset=A,Vt.enabled=Z,Vt.autoUpdate=at,Vt.needsUpdate=rt,Vt.type=K}function _t(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const Z=A.target;Z.removeEventListener("dispose",Ft),ne(Z)}function ne(A){we(A),Yt.remove(A)}function we(A){const Z=Yt.get(A).programs;Z!==void 0&&(Z.forEach(function(at){pt.releaseProgram(at)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,at,rt,K,Tt){Z===null&&(Z=Se);const wt=K.isMesh&&K.matrixWorld.determinant()<0,Nt=Ga(A,Z,at,rt,K);Gt.setMaterial(rt,wt);let zt=at.index,te=1;if(rt.wireframe===!0){if(zt=et.getWireframeAttribute(at),zt===void 0)return;te=2}const jt=at.drawRange,Xt=at.attributes.position;let le=jt.start*te,Re=(jt.start+jt.count)*te;Tt!==null&&(le=Math.max(le,Tt.start*te),Re=Math.min(Re,(Tt.start+Tt.count)*te)),zt!==null?(le=Math.max(le,0),Re=Math.min(Re,zt.count)):Xt!=null&&(le=Math.max(le,0),Re=Math.min(Re,Xt.count));const Xe=Re-le;if(Xe<0||Xe===1/0)return;ie.setup(K,rt,Nt,at,zt);let fe,Ce=Wt;if(zt!==null&&(fe=E.get(zt),Ce=qt,Ce.setIndex(fe)),K.isMesh)rt.wireframe===!0?(Gt.setLineWidth(rt.wireframeLinewidth*Qt()),Ce.setMode(I.LINES)):Ce.setMode(I.TRIANGLES);else if(K.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),Gt.setLineWidth(Kt*Qt()),K.isLineSegments?Ce.setMode(I.LINES):K.isLineLoop?Ce.setMode(I.LINE_LOOP):Ce.setMode(I.LINE_STRIP)}else K.isPoints?Ce.setMode(I.POINTS):K.isSprite&&Ce.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ce.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Kt=K._multiDrawStarts,Le=K._multiDrawCounts,_e=K._multiDrawCount,fn=zt?E.get(zt).bytesPerElement:1,ra=Yt.get(rt).currentProgram.getUniforms();for(let Ge=0;Ge<_e;Ge++)ra.setValue(I,"_gl_DrawID",Ge),Ce.render(Kt[Ge]/fn,Le[Ge])}else if(K.isInstancedMesh)Ce.renderInstances(le,Xe,K.count);else if(at.isInstancedBufferGeometry){const Kt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Le=Math.min(at.instanceCount,Kt);Ce.renderInstances(le,Xe,Le)}else Ce.render(le,Xe)};function Ee(A,Z,at){A.transparent===!0&&A.side===Ki&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,ia(A,Z,at),A.side=za,A.needsUpdate=!0,ia(A,Z,at),A.side=Ki):ia(A,Z,at)}this.compile=function(A,Z,at=null){at===null&&(at=A),_=Dt.get(at),_.init(Z),B.push(_),at.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),A!==at&&A.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const rt=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Nt=Tt[wt];Ee(Nt,at,K),rt.add(Nt)}else Ee(Tt,at,K),rt.add(Tt)}),_=B.pop(),rt},this.compileAsync=function(A,Z,at=null){const rt=this.compile(A,Z,at);return new Promise(K=>{function Tt(){if(rt.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&rt.delete(wt)}),rt.size===0){K(A);return}setTimeout(Tt,10)}ye.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Fn=null;function cn(A){Fn&&Fn(A)}function an(){Un.stop()}function vn(){Un.start()}const Un=new uv;Un.setAnimationLoop(cn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){Fn=A,Et.setAnimationLoop(A),A===null?Un.stop():Un.start()},Et.addEventListener("sessionstart",an),Et.addEventListener("sessionend",vn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(Z),Z=Et.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,Z,W),_=Dt.get(A,B.length),_.init(Z),B.push(_),Rt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,mt=Ht.init(this.clippingPlanes,St),M=Ot.get(A,F.length),M.init(),F.push(M),Et.enabled===!0&&Et.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&Ia(Tt,Z,-1/0,U.sortObjects)}Ia(A,Z,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(Mt,D),Me=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Me&&xt.addToRenderList(M,A),this.info.render.frame++,mt===!0&&Ht.beginShadows();const at=_.state.shadowsArray;Vt.render(at,A,Z),mt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,K=M.transmissive;if(_.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(K.length>0)for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const zt=Tt[wt];Oo(rt,K,A,zt)}Me&&xt.render(A);for(let wt=0,Nt=Tt.length;wt<Nt;wt++){const zt=Tt[wt];No(M,A,zt,zt.viewport)}}else K.length>0&&Oo(rt,K,A,Z),Me&&xt.render(A),No(M,A,Z);W!==null&&L===0&&(ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W)),A.isScene===!0&&A.onAfterRender(U,A,Z),ie.resetDefaultState(),C=-1,R=null,B.pop(),B.length>0?(_=B[B.length-1],mt===!0&&Ht.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function Ia(A,Z,at,rt){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){rt&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const wt=ht.update(A),Nt=A.material;Nt.visible&&M.push(A,wt,Nt,at,Zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const wt=ht.update(A),Nt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Zt.copy(wt.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(Nt)){const zt=wt.groups;for(let te=0,jt=zt.length;te<jt;te++){const Xt=zt[te],le=Nt[Xt.materialIndex];le&&le.visible&&M.push(A,wt,le,at,Zt.z,Xt)}}else Nt.visible&&M.push(A,wt,Nt,at,Zt.z,null)}}const Tt=A.children;for(let wt=0,Nt=Tt.length;wt<Nt;wt++)Ia(Tt[wt],Z,at,rt)}function No(A,Z,at,rt){const K=A.opaque,Tt=A.transmissive,wt=A.transparent;_.setupLightsView(at),mt===!0&&Ht.setGlobalState(U.clippingPlanes,at),rt&&Gt.viewport(H.copy(rt)),K.length>0&&Ha(K,Z,at),Tt.length>0&&Ha(Tt,Z,at),wt.length>0&&Ha(wt,Z,at),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Oo(A,Z,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new _r(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Ro:ta,minFilter:pr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[rt.id],wt=rt.viewport||H;Tt.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);const Nt=U.getRenderTarget(),zt=U.getActiveCubeFace(),te=U.getActiveMipmapLevel();U.setRenderTarget(Tt),U.getClearColor(ct),lt=U.getClearAlpha(),lt<1&&U.setClearColor(16777215,.5),U.clear(),Me&&xt.render(at);const jt=U.toneMapping;U.toneMapping=Ba;const Xt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),mt===!0&&Ht.setGlobalState(U.clippingPlanes,rt),Ha(A,at,rt),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Re=0,Xe=Z.length;Re<Xe;Re++){const fe=Z[Re],Ce=fe.object,Kt=fe.geometry,Le=fe.material,_e=fe.group;if(Le.side===Ki&&Ce.layers.test(rt.layers)){const fn=Le.side;Le.side=zn,Le.needsUpdate=!0,na(Ce,at,rt,Kt,Le,_e),Le.side=fn,Le.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}U.setRenderTarget(Nt,zt,te),U.setClearColor(ct,lt),Xt!==void 0&&(rt.viewport=Xt),U.toneMapping=jt}function Ha(A,Z,at){const rt=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Tt=A.length;K<Tt;K++){const wt=A[K],Nt=wt.object,zt=wt.geometry,te=wt.group;let jt=wt.material;jt.allowOverride===!0&&rt!==null&&(jt=rt),Nt.layers.test(at.layers)&&na(Nt,Z,at,zt,jt,te)}}function na(A,Z,at,rt,K,Tt){A.onBeforeRender(U,Z,at,rt,K,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(U,Z,at,rt,A,Tt),K.transparent===!0&&K.side===Ki&&K.forceSinglePass===!1?(K.side=zn,K.needsUpdate=!0,U.renderBufferDirect(at,Z,rt,K,A,Tt),K.side=za,K.needsUpdate=!0,U.renderBufferDirect(at,Z,rt,K,A,Tt),K.side=Ki):U.renderBufferDirect(at,Z,rt,K,A,Tt),A.onAfterRender(U,Z,at,rt,K,Tt)}function ia(A,Z,at){Z.isScene!==!0&&(Z=Se);const rt=Yt.get(A),K=_.state.lights,Tt=_.state.shadowsArray,wt=K.state.version,Nt=pt.getParameters(A,K.state,Tt,Z,at),zt=pt.getProgramCacheKey(Nt);let te=rt.programs;rt.environment=A.isMeshStandardMaterial?Z.environment:null,rt.fog=Z.fog,rt.envMap=(A.isMeshStandardMaterial?N:Ze).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",Ft),te=new Map,rt.programs=te);let jt=te.get(zt);if(jt!==void 0){if(rt.currentProgram===jt&&rt.lightsStateVersion===wt)return Ai(A,Nt),jt}else Nt.uniforms=pt.getUniforms(A),A.onBeforeCompile(Nt,U),jt=pt.acquireProgram(Nt,zt),te.set(zt,jt),rt.uniforms=Nt.uniforms;const Xt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=Ht.uniform),Ai(A,Nt),rt.needsLights=Je(A),rt.lightsStateVersion=wt,rt.needsLights&&(Xt.ambientLightColor.value=K.state.ambient,Xt.lightProbe.value=K.state.probe,Xt.directionalLights.value=K.state.directional,Xt.directionalLightShadows.value=K.state.directionalShadow,Xt.spotLights.value=K.state.spot,Xt.spotLightShadows.value=K.state.spotShadow,Xt.rectAreaLights.value=K.state.rectArea,Xt.ltc_1.value=K.state.rectAreaLTC1,Xt.ltc_2.value=K.state.rectAreaLTC2,Xt.pointLights.value=K.state.point,Xt.pointLightShadows.value=K.state.pointShadow,Xt.hemisphereLights.value=K.state.hemi,Xt.directionalShadowMap.value=K.state.directionalShadowMap,Xt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xt.spotShadowMap.value=K.state.spotShadowMap,Xt.spotLightMatrix.value=K.state.spotLightMatrix,Xt.spotLightMap.value=K.state.spotLightMap,Xt.pointShadowMap.value=K.state.pointShadowMap,Xt.pointShadowMatrix.value=K.state.pointShadowMatrix),rt.currentProgram=jt,rt.uniformsList=null,jt}function Ti(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=gu.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Ai(A,Z){const at=Yt.get(A);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function Ga(A,Z,at,rt,K){Z.isScene!==!0&&(Z=Se),ae.resetTextureUnits();const Tt=Z.fog,wt=rt.isMeshStandardMaterial?Z.environment:null,Nt=W===null?U.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:vs,zt=(rt.isMeshStandardMaterial?N:Ze).get(rt.envMap||wt),te=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,jt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,Re=!!at.morphAttributes.color;let Xe=Ba;rt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xe=U.toneMapping);const fe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ce=fe!==void 0?fe.length:0,Kt=Yt.get(rt),Le=_.state.lights;if(mt===!0&&(St===!0||A!==R)){const hn=A===R&&rt.id===C;Ht.setState(rt,A,hn)}let _e=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Le.state.version||Kt.outputColorSpace!==Nt||K.isBatchedMesh&&Kt.batching===!1||!K.isBatchedMesh&&Kt.batching===!0||K.isBatchedMesh&&Kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Kt.instancing===!1||!K.isInstancedMesh&&Kt.instancing===!0||K.isSkinnedMesh&&Kt.skinning===!1||!K.isSkinnedMesh&&Kt.skinning===!0||K.isInstancedMesh&&Kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Kt.instancingMorph===!1&&K.morphTexture!==null||Kt.envMap!==zt||rt.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ht.numPlanes||Kt.numIntersection!==Ht.numIntersection)||Kt.vertexAlphas!==te||Kt.vertexTangents!==jt||Kt.morphTargets!==Xt||Kt.morphNormals!==le||Kt.morphColors!==Re||Kt.toneMapping!==Xe||Kt.morphTargetsCount!==Ce)&&(_e=!0):(_e=!0,Kt.__version=rt.version);let fn=Kt.currentProgram;_e===!0&&(fn=ia(rt,Z,K));let ra=!1,Ge=!1,Ri=!1;const Ie=fn.getUniforms(),En=Kt.uniforms;if(Gt.useProgram(fn.program)&&(ra=!0,Ge=!0,Ri=!0),rt.id!==C&&(C=rt.id,Ge=!0),ra||R!==A){Gt.buffers.depth.getReversed()?(bt.copy(A.projectionMatrix),_x(bt),vx(bt),Ie.setValue(I,"projectionMatrix",bt)):Ie.setValue(I,"projectionMatrix",A.projectionMatrix),Ie.setValue(I,"viewMatrix",A.matrixWorldInverse);const Sn=Ie.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,re.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&Ie.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ie.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ge=!0,Ri=!0)}if(K.isSkinnedMesh){Ie.setOptional(I,K,"bindMatrix"),Ie.setOptional(I,K,"bindMatrixInverse");const hn=K.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ie.setValue(I,"boneTexture",hn.boneTexture,ae))}K.isBatchedMesh&&(Ie.setOptional(I,K,"batchingTexture"),Ie.setValue(I,"batchingTexture",K._matricesTexture,ae),Ie.setOptional(I,K,"batchingIdTexture"),Ie.setValue(I,"batchingIdTexture",K._indirectTexture,ae),Ie.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&Ie.setValue(I,"batchingColorTexture",K._colorsTexture,ae));const rn=at.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Pt.update(K,at,fn),(Ge||Kt.receiveShadow!==K.receiveShadow)&&(Kt.receiveShadow=K.receiveShadow,Ie.setValue(I,"receiveShadow",K.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(En.envMap.value=zt,En.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Z.environment!==null&&(En.envMapIntensity.value=Z.environmentIntensity),Ge&&(Ie.setValue(I,"toneMappingExposure",U.toneMappingExposure),Kt.needsLights&&aa(En,Ri),Tt&&rt.fog===!0&&ut.refreshFogUniforms(En,Tt),ut.refreshMaterialUniforms(En,rt,z,Y,_.state.transmissionRenderTarget[A.id]),gu.upload(I,Ti(Kt),En,ae)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(gu.upload(I,Ti(Kt),En,ae),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ie.setValue(I,"center",K.center),Ie.setValue(I,"modelViewMatrix",K.modelViewMatrix),Ie.setValue(I,"normalMatrix",K.normalMatrix),Ie.setValue(I,"modelMatrix",K.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const hn=rt.uniformsGroups;for(let Sn=0,pi=hn.length;Sn<pi;Sn++){const Ci=hn[Sn];X.update(Ci,fn),X.bind(Ci,fn)}}return fn}function aa(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Je(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,Z,at){const rt=Yt.get(A);rt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Yt.get(A.texture).__webglTexture=Z,Yt.get(A.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const at=Yt.get(A);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0};const Po=I.createFramebuffer();this.setRenderTarget=function(A,Z=0,at=0){W=A,G=Z,L=at;let rt=!0,K=null,Tt=!1,wt=!1;if(A){const zt=Yt.get(A);if(zt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(I.FRAMEBUFFER,null),rt=!1;else if(zt.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(zt.__hasExternalTextures)ae.rebindTextures(A,Yt.get(A.texture).__webglTexture,Yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(zt.__boundDepthTexture!==Xt){if(Xt!==null&&Yt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(wt=!0);const jt=Yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[Z])?K=jt[Z][at]:K=jt[Z],Tt=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?K=Yt.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?K=jt[at]:K=jt,H.copy(A.viewport),st.copy(A.scissor),tt=A.scissorTest}else H.copy(J).multiplyScalar(z).floor(),st.copy(vt).multiplyScalar(z).floor(),tt=yt;if(at!==0&&(K=Po),Gt.bindFramebuffer(I.FRAMEBUFFER,K)&&rt&&Gt.drawBuffers(A,K),Gt.viewport(H),Gt.scissor(st),Gt.setScissorTest(tt),Tt){const zt=Yt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,at)}else if(wt){const zt=Yt.get(A.texture),te=Z;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,at,te)}else if(A!==null&&at!==0){const zt=Yt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,at)}C=-1},this.readRenderTargetPixels=function(A,Z,at,rt,K,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt){Gt.bindFramebuffer(I.FRAMEBUFFER,zt);try{const te=A.textures[Nt],jt=te.format,Xt=te.type;if(!de.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-rt&&at>=0&&at<=A.height-K&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(Z,at,rt,K,Ct.convert(jt),Ct.convert(Xt),Tt))}finally{const te=W!==null?Yt.get(W).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(A,Z,at,rt,K,Tt,wt,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt)if(Z>=0&&Z<=A.width-rt&&at>=0&&at<=A.height-K){Gt.bindFramebuffer(I.FRAMEBUFFER,zt);const te=A.textures[Nt],jt=te.format,Xt=te.type;if(!de.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Nt),I.readPixels(Z,at,rt,K,Ct.convert(jt),Ct.convert(Xt),0);const Re=W!==null?Yt.get(W).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Re);const Xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await gx(I,Xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(le),I.deleteSync(Xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,at=0){const rt=Math.pow(2,-at),K=Math.floor(A.image.width*rt),Tt=Math.floor(A.image.height*rt),wt=Z!==null?Z.x:0,Nt=Z!==null?Z.y:0;ae.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,wt,Nt,K,Tt),Gt.unbindTexture()};const Bo=I.createFramebuffer(),bi=I.createFramebuffer();this.copyTextureToTexture=function(A,Z,at=null,rt=null,K=0,Tt=null){Tt===null&&(K!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let wt,Nt,zt,te,jt,Xt,le,Re,Xe;const fe=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)wt=at.max.x-at.min.x,Nt=at.max.y-at.min.y,zt=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,jt=at.min.y,Xt=at.isBox3?at.min.z:0;else{const rn=Math.pow(2,-K);wt=Math.floor(fe.width*rn),Nt=Math.floor(fe.height*rn),A.isDataArrayTexture?zt=fe.depth:A.isData3DTexture?zt=Math.floor(fe.depth*rn):zt=1,te=0,jt=0,Xt=0}rt!==null?(le=rt.x,Re=rt.y,Xe=rt.z):(le=0,Re=0,Xe=0);const Ce=Ct.convert(Z.format),Kt=Ct.convert(Z.type);let Le;Z.isData3DTexture?(ae.setTexture3D(Z,0),Le=I.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ae.setTexture2DArray(Z,0),Le=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(Z,0),Le=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment);const _e=I.getParameter(I.UNPACK_ROW_LENGTH),fn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ra=I.getParameter(I.UNPACK_SKIP_PIXELS),Ge=I.getParameter(I.UNPACK_SKIP_ROWS),Ri=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,jt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt);const Ie=A.isDataArrayTexture||A.isData3DTexture,En=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const rn=Yt.get(A),hn=Yt.get(Z),Sn=Yt.get(rn.__renderTarget),pi=Yt.get(hn.__renderTarget);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Ci=0;Ci<zt;Ci++)Ie&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.get(A).__webglTexture,K,Xt+Ci),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.get(Z).__webglTexture,Tt,Xe+Ci)),I.blitFramebuffer(te,jt,wt,Nt,le,Re,wt,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Yt.has(A)){const rn=Yt.get(A),hn=Yt.get(Z);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Bo),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,bi);for(let Sn=0;Sn<zt;Sn++)Ie?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,rn.__webglTexture,K,Xt+Sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,rn.__webglTexture,K),En?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,Tt,Xe+Sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,Tt),K!==0?I.blitFramebuffer(te,jt,wt,Nt,le,Re,wt,Nt,I.COLOR_BUFFER_BIT,I.NEAREST):En?I.copyTexSubImage3D(Le,Tt,le,Re,Xe+Sn,te,jt,wt,Nt):I.copyTexSubImage2D(Le,Tt,le,Re,te,jt,wt,Nt);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Le,Tt,le,Re,Xe,wt,Nt,zt,Ce,Kt,fe.data):Z.isCompressedArrayTexture?I.compressedTexSubImage3D(Le,Tt,le,Re,Xe,wt,Nt,zt,Ce,fe.data):I.texSubImage3D(Le,Tt,le,Re,Xe,wt,Nt,zt,Ce,Kt,fe):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,le,Re,wt,Nt,Ce,Kt,fe.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,le,Re,fe.width,fe.height,Ce,fe.data):I.texSubImage2D(I.TEXTURE_2D,Tt,le,Re,wt,Nt,Ce,Kt,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ra),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ri),Tt===0&&Z.generateMipmaps&&I.generateMipmap(Le),Gt.unbindTexture()},this.copyTextureToTexture3D=function(A,Z,at=null,rt=null,K=0){return ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Z,at,rt,K)},this.initRenderTarget=function(A){Yt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Gt.unbindTexture()},this.resetState=function(){G=0,L=0,W=null,Gt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}class BA{static createButton(e,i={}){const r=document.createElement("button");function l(){if(i.domOverlay===void 0){const v=document.createElement("div");v.style.display="none",document.body.appendChild(v);const y=document.createElementNS("http://www.w3.org/2000/svg","svg");y.setAttribute("width",38),y.setAttribute("height",38),y.style.position="absolute",y.style.right="20px",y.style.top="20px",y.addEventListener("click",function(){p.end()}),v.appendChild(y);const b=document.createElementNS("http://www.w3.org/2000/svg","path");b.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),b.setAttribute("stroke","#fff"),b.setAttribute("stroke-width",2),y.appendChild(b),i.optionalFeatures===void 0&&(i.optionalFeatures=[]),i.optionalFeatures.push("dom-overlay"),i.domOverlay={root:v}}let p=null;async function g(v){v.addEventListener("end",S),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(v),r.textContent="STOP AR",i.domOverlay.root.style.display="",p=v}function S(){p.removeEventListener("end",S),r.textContent="START AR",i.domOverlay.root.style.display="none",p=null}r.style.display="",r.style.cursor="pointer",r.style.left="calc(50% - 50px)",r.style.width="100px",r.textContent="START AR",r.onmouseenter=function(){r.style.opacity="1.0"},r.onmouseleave=function(){r.style.opacity="0.5"},r.onclick=function(){p===null?navigator.xr.requestSession("immersive-ar",i).then(g):(p.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",i).then(g).catch(v=>{console.warn(v)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",i).then(g).catch(v=>{console.warn(v)})}function c(){r.style.display="",r.style.cursor="auto",r.style.left="calc(50% - 75px)",r.style.width="150px",r.onmouseenter=null,r.onmouseleave=null,r.onclick=null}function h(){c(),r.textContent="AR NOT SUPPORTED"}function d(p){c(),console.warn("Exception when trying to call xr.isSessionSupported",p),r.textContent="AR NOT ALLOWED"}function m(p){p.style.position="absolute",p.style.bottom="20px",p.style.padding="12px 6px",p.style.border="1px solid #fff",p.style.borderRadius="4px",p.style.background="rgba(0,0,0,0.1)",p.style.color="#fff",p.style.font="normal 13px sans-serif",p.style.textAlign="center",p.style.opacity="0.5",p.style.outline="none",p.style.zIndex="999"}if("xr"in navigator)return r.id="ARButton",r.style.display="none",m(r),navigator.xr.isSessionSupported("immersive-ar").then(function(p){p?l():h()}).catch(d),r;{const p=document.createElement("a");return window.isSecureContext===!1?(p.href=document.location.href.replace(/^http:/,"https:"),p.innerHTML="WEBXR NEEDS HTTPS"):(p.href="https://immersiveweb.dev/",p.innerHTML="WEBXR NOT AVAILABLE"),p.style.left="calc(50% - 90px)",p.style.width="180px",p.style.textDecoration="none",m(p),p}}}function zA(){const o=cs.useRef(),e=document.createElement("canvas"),i=256,r=448;let l,c,h;const d=cs.useRef(),m=cs.useRef(),p=cs.useRef({program:null,dstTex:null,locTex:null,locFlip:null,fbo:null,locPos:null,locUV:null});return cs.useEffect(()=>{let g,S,v,y,b;e.width=i,e.height=r,l=e.getContext("2d");const w=document.createElement("canvas");w.width=i,w.height=r;const M=w.getContext("webgl2",{preserveDrawingBuffer:!0})||w.getContext("webgl",{preserveDrawingBuffer:!0});if(!M)throw new Error("Browser ne podržava WebGL2 za segmentaciju.");d.current=w,m.current=M;{let G=function(lt,O){const Y=L.createShader(lt);return L.shaderSource(Y,O),L.compileShader(Y),Y};const L=M,W=new Float32Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,-1,1,0,1,1,-1,1,0,1,1,1,1]),C=L.createVertexArray();L.bindVertexArray(C);const R=L.createBuffer();L.bindBuffer(L.ARRAY_BUFFER,R),L.bufferData(L.ARRAY_BUFFER,W,L.STATIC_DRAW),L.enableVertexAttribArray(0),L.vertexAttribPointer(0,2,L.FLOAT,!1,16,0),L.enableVertexAttribArray(1),L.vertexAttribPointer(1,2,L.FLOAT,!1,16,8);const H=`#version 300 es
      layout(location=0) in vec2 aPosition;
      layout(location=1) in vec2 aUV;
      out vec2 vUV;
      void main() {
        vUV = aUV;
        gl_Position = vec4(aPosition, 0, 1);
      }`,st=`#version 300 es
      precision mediump float;
      in vec2 vUV;
      uniform sampler2D uTex;
      out vec4 outColor;
      void main() {
        outColor = texture(uTex, vUV);
      }`,tt=L.createProgram();L.attachShader(tt,G(L.VERTEX_SHADER,H)),L.attachShader(tt,G(L.FRAGMENT_SHADER,st)),L.linkProgram(tt);const ct=L.createTexture();if(L.bindTexture(L.TEXTURE_2D,ct),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_WRAP_S,L.CLAMP_TO_EDGE),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_WRAP_T,L.CLAMP_TO_EDGE),L.getUniformLocation(tt,"uTex"),tf.findBackend("custom-webgl")==null){const lt=new tf.MathBackendWebGL(w);tf.registerBackend("custom-webgl",()=>lt)}}const _=async()=>{tf.getBackend(),await tf.setBackend("custom-webgl"),await tf.ready(),c=await tf.loadGraphModel("./tfjs/model.json"),console.log("✅ Model loaded")},F=async()=>{await _(),S=new kx,v=new ri,g=new PA({antialias:!0,alpha:!0}),g.setSize(window.innerWidth,window.innerHeight),g.xr.enabled=!0,o.current.appendChild(g.domElement),document.body.appendChild(BA.createButton(g,{requiredFeatures:["camera-access"],optionalFeatures:["local"]})),g.xr.addEventListener("sessionstart",async()=>{const G=g.xr.getSession();y=await G.requestReferenceSpace("local"),b=new XRWebGLBinding(G,g.getContext()),console.log("🟢 XRWebGLBinding created");const L=1,W=window.innerWidth/window.innerHeight,C=v.fov*Math.PI/180,R=2*L*Math.tan(C/2),H=R*W;console.log("DEBUG quad size:",{planeW:H,planeH:R,distance:L});const st=new Lo(H,R),tt=new Zx(e);tt.wrapS=ji,tt.wrapT=ji,tt.minFilter=Zn,tt.magFilter=Zn;const ct=new od({map:tt,transparent:!0});h=new yi(st,ct),h.position.set(0,0,-L),v.add(h),S.add(v);const lt=new Float32Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]),O=`
        attribute vec2 a_position;
        attribute vec2 a_texCoord;
        varying vec2 v_texCoord;
        void main() {
          gl_Position = vec4(a_position, 0.0, 1.0);
          v_texCoord = a_texCoord;
        }
        `,Y=`
        precision mediump float;
        varying vec2 v_texCoord;
        uniform sampler2D u_texture;
        uniform float u_flipY;           // 0.0 = no flip, 1.0 = flip
        void main() {
          vec2 uv = vec2(v_texCoord.x, mix(v_texCoord.y, 1.0 - v_texCoord.y, u_flipY));
          gl_FragColor = texture2D(u_texture, uv);
        }
        `;let z=g.getContext();function Mt(Se,Me){const Qt=z.createShader(Se);if(z.shaderSource(Qt,Me),z.compileShader(Qt),!z.getShaderParameter(Qt,z.COMPILE_STATUS))throw new Error(z.getShaderInfoLog(Qt));return Qt}function D(Se,Me){const Qt=z.createProgram();if(z.attachShader(Qt,Mt(z.VERTEX_SHADER,Se)),z.attachShader(Qt,Mt(z.FRAGMENT_SHADER,Me)),z.linkProgram(Qt),!z.getProgramParameter(Qt,z.LINK_STATUS))throw new Error(z.getProgramInfoLog(Qt));return Qt}const J=D(O,Y);function vt(){z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MIN_FILTER,z.LINEAR),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MAG_FILTER,z.LINE_LINEAR),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_S,z.CLAMP_TO_EDGE),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_WRAP_T,z.CLAMP_TO_EDGE)}function yt(Se,Me){const Qt=z.createTexture();return z.bindTexture(z.TEXTURE_2D,Qt),z.texImage2D(z.TEXTURE_2D,0,z.RGBA,Se,Me,0,z.RGBA,z.UNSIGNED_BYTE,null),vt(),Qt}let j=yt(i,r),mt=z.createFramebuffer();const St=z.getAttribLocation(J,"a_position"),bt=z.getAttribLocation(J,"a_texCoord"),Rt=z.getUniformLocation(J,"u_texture"),re=z.getUniformLocation(J,"u_flipY"),Zt=z.createBuffer();z.bindBuffer(z.ARRAY_BUFFER,Zt),z.bufferData(z.ARRAY_BUFFER,lt,z.STATIC_DRAW),z.enableVertexAttribArray(St),z.vertexAttribPointer(St,2,z.FLOAT,!1,16,0),z.enableVertexAttribArray(bt),z.vertexAttribPointer(bt,2,z.FLOAT,!1,16,8),p.current={program:J,dstTex:j,locTex:Rt,locFlip:re,fbo:mt,locPos:St,locUV:bt},G.requestAnimationFrame(k)})};async function B(G){const L=G.height,W=G.width,C=[L*W*3],R=tf.tensor({texture:G,height:L,width:W,channels:"RGB"},C).expandDims(0).toFloat().div(255),H=await c.predict(R),st=H.argMax(-1).squeeze(),tt=await st.data();st.dispose(),H.dispose(),R.dispose();const ct=l.createImageData(i,r);for(let lt=0;lt<tt.length;lt++){const O=tt[lt]>=1;ct.data[lt*4+0]=255,ct.data[lt*4+1]=255,ct.data[lt*4+2]=0,ct.data[lt*4+3]=O?100:0}l.putImageData(ct,0,0),h.material.map.needsUpdate=!0}function U(G,L,W){const C=g.getContext(),{program:R,dstTex:H,locTex:st,locFlip:tt,fbo:ct,locPos:lt,locUV:O}=p.current;C.bindFramebuffer(C.FRAMEBUFFER,ct),C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,H,0);const Y=C.checkFramebufferStatus(C.FRAMEBUFFER);if(Y!==C.FRAMEBUFFER_COMPLETE)throw new Error("FBO incomplete: "+Y);return C.viewport(0,0,L,W),C.useProgram(R),C.activeTexture(C.TEXTURE0),C.bindTexture(C.TEXTURE_2D,G),C.uniform1i(st,0),C.uniform1f(tt,0),C.drawArrays(C.TRIANGLE_STRIP,0,4),C.bindFramebuffer(C.FRAMEBUFFER,null),H}function k(G,L){const W=L.session;W.requestAnimationFrame(k);const C=L.getViewerPose(y);if(!C)return;const R=g.getContext(),H=W.renderState.baseLayer;R.bindFramebuffer(R.FRAMEBUFFER,H.framebuffer),R.clear(R.COLOR_BUFFER_BIT|R.DEPTH_BUFFER_BIT);for(const st of C.views)if(st.camera){const tt=st.camera.width,ct=st.camera.height;console.log("📷 camera view",tt,ct);const lt=b.getCameraImage(st.camera);let O=U(lt,i,r);B(O)}g.render(S,v)}return F(),()=>g?.dispose()},[]),uh.jsx("div",{ref:o,style:{width:"100vw",height:"100vh",overflow:"hidden"}})}AS.createRoot(document.getElementById("root")).render(uh.jsx(cs.StrictMode,{children:uh.jsx(zA,{})}));
