(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8566:function(e,t,n){"use strict";var i=n(930),a=n(5696),o=n(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.src,l=e.sizes,d=e.unoptimized,m=void 0!==d&&d,h=e.priority,w=void 0!==h&&h,k=e.loading,E=e.lazyRoot,j=void 0===E?null:E,I=e.lazyBoundary,C=e.className,M=e.quality,O=e.width,L=e.height,R=e.style,P=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,U=e.placeholder,W=void 0===U?"empty":U,B=e.blurDataURL,Z=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=s.useContext(g.ImageConfigContext),D=s.useMemo((function(){var e=y||H||f.imageConfigDefault,t=[].concat(o(e.deviceSizes),o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:n})}),[H]),F=Z,V=l?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var T=x;if("loader"in F){if(F.loader){var G=F.loader;T=function(e){e.config;var t=c(e,["config"]);return G(t)}}delete F.loader}var J="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(n)){var Q=S(n)?n.default:n;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(B=B||Q.blurDataURL,J=Q.src,(!V||"fill"!==V)&&(L=L||Q.height,O=O||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}var $=!w&&("lazy"===k||"undefined"===typeof k);((n="string"===typeof n?n:J).startsWith("data:")||n.startsWith("blob:"))&&(m=!0,$=!1);v.has(n)&&($=!1);D.unoptimized&&(m=!0);var K,X=s.useState(!1),Y=a(X,2),ee=Y[0],te=Y[1],ne=p.useIntersection({rootRef:j,rootMargin:I||"200px",disabled:!$}),ie=a(ne,3),ae=ie[0],oe=ie[1],re=ie[2],le=!$||oe,de={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q},fe=A(O),pe=A(L),ge=A(M);0;var me=Object.assign({},R,ue),he="blur"!==W||ee?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===V)de.display="block",de.position="absolute",de.top=0,de.left=0,de.bottom=0,de.right=0;else if("undefined"!==typeof fe&&"undefined"!==typeof pe){var ye=pe/fe,ve=isNaN(ye)?"100%":"".concat(100*ye,"%");"responsive"===V?(de.display="block",de.position="relative",se=!0,ce.paddingTop=ve):"intrinsic"===V?(de.display="inline-block",de.position="relative",de.maxWidth="100%",se=!0,ce.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(fe,"%27%20height=%27").concat(pe,"%27/%3e")):"fixed"===V&&(de.display="inline-block",de.position="relative",de.width=fe,de.height=pe)}else 0;var be={src:b,srcSet:void 0,sizes:void 0};le&&(be=z({config:D,src:n,unoptimized:m,layout:V,width:fe,quality:ge,sizes:l,loader:T}));var we=n;0;var Se="imagesrcset",ze="imagesizes";Se="imageSrcSet",ze="imageSizes";var Ae=(i(t={},Se,be.srcSet),i(t,ze,be.sizes),t),xe=s.default.useLayoutEffect,ke=s.useRef(N),_e=s.useRef(n);s.useEffect((function(){ke.current=N}),[N]),xe((function(){_e.current!==n&&(re(),_e.current=n)}),[re,n]);var Ee=r({isLazy:$,imgAttributes:be,heightInt:pe,widthInt:fe,qualityInt:ge,layout:V,className:C,imgStyle:me,blurStyle:he,loading:k,config:D,unoptimized:m,placeholder:W,loader:T,srcString:we,onLoadingCompleteRef:ke,setBlurComplete:te,setIntersection:ae,isVisible:le,noscriptSizes:l},F);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:de},se?s.default.createElement("span",{style:ce},K?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,s.default.createElement(_,Object.assign({},Ee))),w?s.default.createElement(u.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+be.src+be.srcSet+be.sizes,rel:"preload",as:"image",href:be.srcSet?void 0:be.src},Ae))):null)};var r=n(6495).Z,l=n(2648).Z,d=n(1598).Z,c=n(7273).Z,s=d(n(7294)),u=l(n(2717)),f=n(8187),p=n(639),g=n(9239),m=(n(9475),n(4969));function h(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0},v=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality,o=new URL("".concat(t.path).concat(h(n))),r=o.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||i.toString()),a&&r.set("q",a.toString()),o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(h(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(h(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function z(e){var t=e.config,n=e.src,i=e.unoptimized,a=e.layout,r=e.width,l=e.quality,d=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,i){var a=e.deviceSizes,r=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,d=/(^|\s)(1?\d?\d)vw/g,c=[];l=d.exec(i);l)c.push(parseInt(l[2]));if(c.length){var s=.01*Math.min.apply(Math,c);return{widths:r.filter((function(e){return e>=a[0]*s})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:a,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,a,d),u=s.widths,f=s.kind,p=u.length-1;return{sizes:d||"w"!==f?d:"100vw",srcSet:u.map((function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:u[p]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,i,a,o){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===i&&o(!0),null==a?void 0:a.current)){var n=e.naturalWidth,r=e.naturalHeight;a.current({naturalWidth:n,naturalHeight:r})}})))}var _=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,a=e.layout,o=e.className,l=e.imgStyle,d=e.blurStyle,u=e.isLazy,f=e.placeholder,p=e.loading,g=e.srcString,m=e.config,h=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,A=e.onError,x=(e.isVisible,e.noscriptSizes),_=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=u?"lazy":p,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":a,className:o,style:r({},l,d),ref:s.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&k(e,g,0,f,v,b)}),[w,g,a,f,v,b]),onLoad:function(e){k(e.currentTarget,g,0,f,v,b),S&&S(e)},onError:function(e){"blur"===f&&b(!0),A&&A(e)}})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},_,z({config:m,src:g,unoptimized:h,layout:a,width:n,quality:i,sizes:x,loader:y}),{decoding:"async","data-nimg":a,style:l,className:o,loading:p}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=i},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,a=void 0!==i&&i,o=e.hasQuery,r=void 0!==o&&o;return n||a&&r}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=s,t.default=void 0;var i=n(6495).Z,a=n(2648).Z,o=(0,n(1598).Z)(n(7294)),r=a(n(1585)),l=n(8e3),d=n(5850),c=n(9470);n(9475);function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n=t.inAmpMode;return e.reduce(u,[]).reverse().concat(s(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(a){var o=!0,r=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){r=!0;var l=a.key.slice(a.key.indexOf("$")+1);e.has(l)?o=!1:e.add(l)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var d=0,c=f.length;d<c;d++){var s=f[d];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var u=a.props[s],p=i[s]||new Set;"name"===s&&r||!p.has(u)?(p.add(u),i[s]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var a=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var r=i({},e.props||{});return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,o.default.cloneElement(e,r)}return o.default.cloneElement(e,{key:a})}))}var g=function(e){var t=e.children,n=o.useContext(l.AmpStateContext),i=o.useContext(d.HeadManagerContext);return o.default.createElement(r.default,{reduceComponentsToState:p,headManager:i,inAmpMode:c.isInAmpMode(n)},t)};t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function l(){if(t&&t.mountedInstances){var a=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}if(a){var d;null==t||null==(d=t.mountedInstances)||d.add(e.children),l()}return o((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),o((function(){return t&&(t._pendingUpdate=l),function(){t&&(t._pendingUpdate=l)}})),r((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var i=(0,n(1598).Z)(n(7294));var a=!1,o=a?function(){}:i.useLayoutEffect,r=a?function(){}:i.useEffect},930:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},5675:function(e,t,n){e.exports=n(8566)}}]);