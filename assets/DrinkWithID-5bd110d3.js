import{b as m,a as L,j as u,r as F,c as fe,y as me,Q as ie,z as Pe,A as pe,P as y,B,C as be,D as xe}from"./index-1ee1ae26.js";import{i as U,S as we,j as _e,k as Se,l as Ee,m as Ie,W as Ce,n as Ae,o as De}from"./defaultImgHelper-b5b8c718.js";const ke=m.li`
  width: calc((100% - 1 * 21px) / 2);

  @media screen and (min-width: 768px) {
    width: calc((100% - 2 * 22px) / 3);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 4 * 35px) / 5);
  }
`,je=m.img`
  max-height: 157px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    max-height: 220px;
    margin-bottom: 14px;
  }
`,Oe=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Re=m.p`
  font-family: "Manpore-500", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.mainPage};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,Te=m.div`
  font-family: "Manpore-500", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:r})=>r.colors.link};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,Ne=()=>{const{ingredients:r}=L(U);return r?u.jsx(u.Fragment,{children:r.map((e,t)=>u.jsxs(ke,{children:[u.jsx(je,{src:e.ingredientId["thumb-medium"],alt:e.title,loading:"lazy"}),u.jsxs(Oe,{children:[u.jsx(Re,{children:e.title}),u.jsx(Te,{children:e.measure})]})]},e._id?e._id:`ingredient-${t}`))}):null},Ve=m.h3`
  margin-bottom: 42px;
  font-family: "Manrope-500";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${({theme:r})=>r.colors.link};

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,Me=m.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    gap: 22px;
  }

  @media screen and (min-width: 1440px) {
    gap: 35px;
    margin-bottom: 100px;
  }
`,Fe=()=>u.jsxs(u.Fragment,{children:[u.jsx(Ve,{children:"Ingredients"}),u.jsx(Me,{children:u.jsx(Ne,{})})]}),Ye=()=>{const[r,e]=F.useState(!1),t=fe(),n=L(U),i=L(U),[a,c]=F.useState(i.isFavorite);F.useEffect(()=>{c(i.isFavorite)},[i.isFavorite]);const h=()=>{a?(t(Pe(n._id)),ie.warning("You removed drink from your favorite"),c(!1)):(t(me(n._id)),ie.success("You added drink to your favorite"),c(!0))};return u.jsxs(we,{children:[u.jsxs("div",{children:[u.jsx(_e,{children:n.drink}),u.jsxs(Se,{children:[n.glass," / ",n.alcoholic]}),u.jsx(Ee,{children:n.description}),u.jsx(Ie,{onClick:h,$isFavorite:a,type:"button",children:a?"Remove from favorites":"Add to favorite drinks"})]}),u.jsxs(Ce,{children:[u.jsx(Ae,{onLoad:()=>e(!0),onError:()=>e(!1),src:n.drinkThumb,alt:n.drink,loading:"lazy",width:"335",height:"400"}),!r&&u.jsx(De,{})]})]})};var Le=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,i,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(i=n;i--!==0;)if(!r(e[i],t[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[i]))return!1;for(i=n;i--!==0;){var c=a[i];if(!r(e[c],t[c]))return!1}return!0}return e!==e&&t!==t};const Ue=pe(Le);var $={exports:{}},he;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/he=function(){var r={},e={};return r.on=function(t,n){var i={name:t,handler:n};return e[t]=e[t]||[],e[t].unshift(i),i},r.off=function(t){var n=e[t.name].indexOf(t);n!==-1&&e[t.name].splice(n,1)},r.trigger=function(t,n){var i=e[t],a;if(i)for(a=i.length;a--;)i[a].handler(n)},r};var ze=he,q={exports:{}},Be=function(e,t,n){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");typeof t=="function"&&(n=t,t={}),t=t||{},n=n||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async="async"in t?!!t.async:!0,a.src=e,t.attrs&&$e(a,t.attrs),t.text&&(a.text=""+t.text);var c="onload"in a?oe:qe;c(a,n),a.onload||oe(a,n),i.appendChild(a)};function $e(r,e){for(var t in e)r.setAttribute(t,e[t])}function oe(r,e){r.onload=function(){this.onerror=this.onload=null,e(null,r)},r.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),r)}}function qe(r,e){r.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,r))}}(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Be,n=i(t);function i(a){return a&&a.__esModule?a:{default:a}}e.default=function(a){var c=new Promise(function(h){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){h(window.YT);return}else{var d=window.location.protocol==="http:"?"http:":"https:";(0,n.default)(d+"//www.youtube.com/iframe_api",function(s){s&&a.trigger("error",s)})}var o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){o&&o(),h(window.YT)}});return c},r.exports=e.default})(q,q.exports);var Qe=q.exports,Q={exports:{}},J={exports:{}},G={exports:{}},O=1e3,R=O*60,T=R*60,N=T*24,Je=N*365.25,Ge=function(r,e){e=e||{};var t=typeof r;if(t==="string"&&r.length>0)return We(r);if(t==="number"&&isNaN(r)===!1)return e.long?He(r):Ze(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function We(r){if(r=String(r),!(r.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(r);if(e){var t=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return t*Je;case"days":case"day":case"d":return t*N;case"hours":case"hour":case"hrs":case"hr":case"h":return t*T;case"minutes":case"minute":case"mins":case"min":case"m":return t*R;case"seconds":case"second":case"secs":case"sec":case"s":return t*O;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function Ze(r){return r>=N?Math.round(r/N)+"d":r>=T?Math.round(r/T)+"h":r>=R?Math.round(r/R)+"m":r>=O?Math.round(r/O)+"s":r+"ms"}function He(r){return M(r,N,"day")||M(r,T,"hour")||M(r,R,"minute")||M(r,O,"second")||r+" ms"}function M(r,e,t){if(!(r<e))return r<e*1.5?Math.floor(r/e)+" "+t:Math.ceil(r/e)+" "+t+"s"}(function(r,e){e=r.exports=i.debug=i.default=i,e.coerce=d,e.disable=c,e.enable=a,e.enabled=h,e.humanize=Ge,e.names=[],e.skips=[],e.formatters={};var t;function n(o){var s=0,l;for(l in o)s=(s<<5)-s+o.charCodeAt(l),s|=0;return e.colors[Math.abs(s)%e.colors.length]}function i(o){function s(){if(s.enabled){var l=s,p=+new Date,v=p-(t||p);l.diff=v,l.prev=t,l.curr=p,t=p;for(var f=new Array(arguments.length),P=0;P<f.length;P++)f[P]=arguments[P];f[0]=e.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");var g=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,function(b,_){if(b==="%%")return b;g++;var w=e.formatters[_];if(typeof w=="function"){var D=f[g];b=w.call(l,D),f.splice(g,1),g--}return b}),e.formatArgs.call(l,f);var x=s.log||e.log||console.log.bind(console);x.apply(l,f)}}return s.namespace=o,s.enabled=e.enabled(o),s.useColors=e.useColors(),s.color=n(o),typeof e.init=="function"&&e.init(s),s}function a(o){e.save(o),e.names=[],e.skips=[];for(var s=(typeof o=="string"?o:"").split(/[\s,]+/),l=s.length,p=0;p<l;p++)s[p]&&(o=s[p].replace(/\*/g,".*?"),o[0]==="-"?e.skips.push(new RegExp("^"+o.substr(1)+"$")):e.names.push(new RegExp("^"+o+"$")))}function c(){e.enable("")}function h(o){var s,l;for(s=0,l=e.skips.length;s<l;s++)if(e.skips[s].test(o))return!1;for(s=0,l=e.names.length;s<l;s++)if(e.names[s].test(o))return!0;return!1}function d(o){return o instanceof Error?o.stack||o.message:o}})(G,G.exports);var Ke=G.exports;(function(r,e){e=r.exports=Ke,e.log=i,e.formatArgs=n,e.save=a,e.load=c,e.useColors=t,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:h(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function t(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(d){try{return JSON.stringify(d)}catch(o){return"[UnexpectedJSONParseError]: "+o.message}};function n(d){var o=this.useColors;if(d[0]=(o?"%c":"")+this.namespace+(o?" %c":" ")+d[0]+(o?"%c ":" ")+"+"+e.humanize(this.diff),!!o){var s="color: "+this.color;d.splice(1,0,s,"color: inherit");var l=0,p=0;d[0].replace(/%[a-zA-Z%]/g,function(v){v!=="%%"&&(l++,v==="%c"&&(p=l))}),d.splice(p,0,s)}}function i(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(d){try{d==null?e.storage.removeItem("debug"):e.storage.debug=d}catch{}}function c(){var d;try{d=e.storage.debug}catch{}return!d&&typeof process<"u"&&"env"in process&&(d={}.DEBUG),d}e.enable(c());function h(){try{return window.localStorage}catch{}}})(J,J.exports);var Xe=J.exports,W={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],r.exports=e.default})(W,W.exports);var et=W.exports,Z={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],r.exports=e.default})(Z,Z.exports);var tt=Z.exports,H={exports:{}},K={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},r.exports=e.default})(K,K.exports);var rt=K.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=rt,n=i(t);function i(a){return a&&a.__esModule?a:{default:a}}e.default={pauseVideo:{acceptableStates:[n.default.ENDED,n.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[n.default.ENDED,n.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[n.default.ENDED,n.default.PLAYING,n.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},r.exports=e.default})(H,H.exports);var nt=H.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Xe,n=s(t),i=et,a=s(i),c=tt,h=s(c),d=nt,o=s(d);function s(v){return v&&v.__esModule?v:{default:v}}var l=(0,n.default)("youtube-player"),p={};p.proxyEvents=function(v){var f={},P=function(k){var E="on"+k.slice(0,1).toUpperCase()+k.slice(1);f[E]=function(C){l('event "%s"',E,C),v.trigger(k,C)}},g=!0,x=!1,b=void 0;try{for(var _=h.default[Symbol.iterator](),w;!(g=(w=_.next()).done);g=!0){var D=w.value;P(D)}}catch(V){x=!0,b=V}finally{try{!g&&_.return&&_.return()}finally{if(x)throw b}}return f},p.promisifyPlayer=function(v){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,P={},g=function(E){f&&o.default[E]?P[E]=function(){for(var C=arguments.length,j=Array(C),I=0;I<C;I++)j[I]=arguments[I];return v.then(function(S){var A=o.default[E],ye=S.getPlayerState(),te=S[E].apply(S,j);return A.stateChangeRequired||Array.isArray(A.acceptableStates)&&A.acceptableStates.indexOf(ye)===-1?new Promise(function(re){var ve=function ne(){var ge=S.getPlayerState(),ae=void 0;typeof A.timeout=="number"&&(ae=setTimeout(function(){S.removeEventListener("onStateChange",ne),re()},A.timeout)),Array.isArray(A.acceptableStates)&&A.acceptableStates.indexOf(ge)!==-1&&(S.removeEventListener("onStateChange",ne),clearTimeout(ae),re())};S.addEventListener("onStateChange",ve)}).then(function(){return te}):te})}:P[E]=function(){for(var C=arguments.length,j=Array(C),I=0;I<C;I++)j[I]=arguments[I];return v.then(function(S){return S[E].apply(S,j)})}},x=!0,b=!1,_=void 0;try{for(var w=a.default[Symbol.iterator](),D;!(x=(D=w.next()).done);x=!0){var V=D.value;g(V)}}catch(k){b=!0,_=k}finally{try{!x&&w.return&&w.return()}finally{if(b)throw _}}return P},e.default=p,r.exports=e.default})(Q,Q.exports);var at=Q.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},n=ze,i=o(n),a=Qe,c=o(a),h=at,d=o(h);function o(l){return l&&l.__esModule?l:{default:l}}var s=void 0;e.default=function(l){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,f=(0,i.default)();if(s||(s=(0,c.default)(f)),p.events)throw new Error("Event handlers cannot be overwritten.");if(typeof l=="string"&&!document.getElementById(l))throw new Error('Element "'+l+'" does not exist.');p.events=d.default.proxyEvents(f);var P=new Promise(function(x){if((typeof l>"u"?"undefined":t(l))==="object"&&l.playVideo instanceof Function){var b=l;x(b)}else s.then(function(_){var w=new _.Player(l,p);return f.on("ready",function(){x(w)}),null})}),g=d.default.promisifyPlayer(P,v);return g.on=f.on,g.off=f.off,g},r.exports=e.default})($,$.exports);var it=$.exports;const ot=pe(it);var st=Object.defineProperty,lt=Object.defineProperties,ut=Object.getOwnPropertyDescriptors,se=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,le=(r,e,t)=>e in r?st(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,X=(r,e)=>{for(var t in e||(e={}))dt.call(e,t)&&le(r,t,e[t]);if(se)for(var t of se(e))ct.call(e,t)&&le(r,t,e[t]);return r},ee=(r,e)=>lt(r,ut(e)),ft=(r,e,t)=>new Promise((n,i)=>{var a=d=>{try{h(t.next(d))}catch(o){i(o)}},c=d=>{try{h(t.throw(d))}catch(o){i(o)}},h=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,c);h((t=t.apply(r,e)).next())});function pt(r,e){var t,n;if(r.videoId!==e.videoId)return!0;const i=((t=r.opts)==null?void 0:t.playerVars)||{},a=((n=e.opts)==null?void 0:n.playerVars)||{};return i.start!==a.start||i.end!==a.end}function ue(r={}){return ee(X({},r),{height:0,width:0,playerVars:ee(X({},r.playerVars),{autoplay:0,start:0,end:0})})}function ht(r,e){return r.videoId!==e.videoId||!Ue(ue(r.opts),ue(e.opts))}function yt(r,e){var t,n,i,a;return r.id!==e.id||r.className!==e.className||((t=r.opts)==null?void 0:t.width)!==((n=e.opts)==null?void 0:n.width)||((i=r.opts)==null?void 0:i.height)!==((a=e.opts)==null?void 0:a.height)||r.iframeClassName!==e.iframeClassName||r.title!==e.title}var vt={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},gt={videoId:y.string,id:y.string,className:y.string,iframeClassName:y.string,style:y.object,title:y.string,loading:y.oneOf(["lazy","eager"]),opts:y.objectOf(y.any),onReady:y.func,onError:y.func,onPlay:y.func,onPause:y.func,onEnd:y.func,onStateChange:y.func,onPlaybackRateChange:y.func,onPlaybackQualityChange:y.func},Y=class extends B.Component{constructor(r){super(r),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,n;return(n=(t=this.props).onReady)==null?void 0:n.call(t,e)},this.onPlayerError=e=>{var t,n;return(n=(t=this.props).onError)==null?void 0:n.call(t,e)},this.onPlayerStateChange=e=>{var t,n,i,a,c,h,d,o;switch((n=(t=this.props).onStateChange)==null||n.call(t,e),e.data){case Y.PlayerState.ENDED:(a=(i=this.props).onEnd)==null||a.call(i,e);break;case Y.PlayerState.PLAYING:(h=(c=this.props).onPlay)==null||h.call(c,e);break;case Y.PlayerState.PAUSED:(o=(d=this.props).onPause)==null||o.call(d,e);break}},this.onPlayerPlaybackRateChange=e=>{var t,n;return(n=(t=this.props).onPlaybackRateChange)==null?void 0:n.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,n;return(n=(t=this.props).onPlaybackQualityChange)==null?void 0:n.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=ee(X({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=ot(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(t=>{this.props.title&&t.setAttribute("title",this.props.title),this.props.loading&&t.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(t=>{this.props.id?t.setAttribute("id",this.props.id):t.removeAttribute("id"),this.props.iframeClassName?t.setAttribute("class",this.props.iframeClassName):t.removeAttribute("class"),this.props.opts&&this.props.opts.width?t.setAttribute("width",this.props.opts.width.toString()):t.removeAttribute("width"),this.props.opts&&this.props.opts.height?t.setAttribute("height",this.props.opts.height.toString()):t.removeAttribute("height"),this.props.title?t.setAttribute("title",this.props.title):t.setAttribute("title","YouTube video player"),this.props.loading?t.setAttribute("loading",this.props.loading):t.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,n,i;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let a=!1;const c={videoId:this.props.videoId};if((t=this.props.opts)!=null&&t.playerVars&&(a=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(c.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(c.endSeconds=this.props.opts.playerVars.end)),a){(n=this.internalPlayer)==null||n.loadVideoById(c);return}(i=this.internalPlayer)==null||i.cueVideoById(c)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(r){return ft(this,null,function*(){yt(r,this.props)&&this.updatePlayer(),ht(r,this.props)&&(yield this.resetPlayer()),pt(r,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return B.createElement("div",{className:this.props.className,style:this.props.style},B.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},z=Y;z.propTypes=gt;z.defaultProps=vt;z.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var mt=z;const de="/node_frontend_bc_56_IrynaDidkivska/img/coctails.jpeg",Pt="/node_frontend_bc_56_IrynaDidkivska/img/coctails.webp",bt="/node_frontend_bc_56_IrynaDidkivska/img/coctail@2x.jpeg",xt=m.img`
  max-height: 430px;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 1440px) {
    order: 1;
    max-width: 631px;
    max-height: 480px;
  }
`,wt=()=>u.jsxs("picture",{children:[u.jsx("source",{srcSet:`${Pt} 1x, ${bt} 2x`,type:"image/webp"}),u.jsx("source",{srcSet:`${de}`,type:"image/jpeg"}),u.jsx(xt,{src:de,alt:"Coctail",width:"335",height:"430",loading:"lazy"})]}),_t=m.div`
  display: flex;
  flex-direction: column;
`,St=m.h2`
  margin-bottom: 40px;
  font-family: 'Manrope-600', sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }

  @media screen and (min-width: 1400px) {
    margin-bottom: 60px;
  }
`,Et=m.div`
  @media screen and (min-width: 1400px) {
    display: flex;
    gap: 60px;
  }
`,It=m.p`
  margin-bottom: 40px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    order: 2;
  }
`,ce=m.div`
  margin: 20px;
`,Ct=()=>{const r=L(U),e={height:"400",width:"500",playerVars:{autoplay:1}};return u.jsxs(_t,{children:[u.jsx(St,{children:"Recipe Preparation"}),u.jsxs(Et,{children:[u.jsx(It,{children:r.instructions}),u.jsxs(ce,{children:[r.video&&r.video!=="Sorry, not specified"&&u.jsx(ce,{children:u.jsx(mt,{videoId:At(r.video),opts:e})}),(r.video=="Sorry, not specified"||!r.video)&&u.jsx(wt,{})]})]})]})},At=r=>{const e=r.match(/(?:youtu\.be\/|youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|.*[?&]v=)([^"&?/ ]{11})/);return e?e[1]:null},jt=()=>{const r=fe(),{drinkId:e}=be();return F.useEffect(()=>{r(xe(e))},[r,e]),u.jsxs(u.Fragment,{children:[u.jsx(Ye,{}),u.jsx(Fe,{}),u.jsx(Ct,{})]})};export{jt as default};
