"use strict";(self.webpackChunkPortfolio_of_Monk_Wellington=self.webpackChunkPortfolio_of_Monk_Wellington||[]).push([[962],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,o=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return g},M:function(){return k},P:function(){return v},_:function(){return o},a:function(){return s},b:function(){return u},g:function(){return d},h:function(){return l}});var r=a(6540),n=(a(2729),a(5556)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,m);return r.createElement(r.Fragment,null,r.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,y);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,s({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],v=function(e){let{fallback:t}=e,a=o(e,E);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:i().object.isRequired,alt:S},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],_=new Set;let P,j;const O=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:h}=e,y=o(e,N);const{width:f,height:b,layout:w}=n,E=c(f,b,w),{style:v,className:k}=E,L=o(E,I),x=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,f,b);return(0,r.useEffect)((()=>{P||(P=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(C);if(j&&_.has(C))return;let t,r;return P.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;x.current&&(x.current.innerHTML=a(s({isLoading:!0,isLoaded:_.has(C),image:n},y)),_.has(C)||(t=requestAnimationFrame((()=>{x.current&&(r=o(x.current,C,_,i,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(C)&&j&&(x.current.innerHTML=j(s({isLoading:_.has(C),isLoaded:_.has(C),image:n},y)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},L,{style:s({},v,i,{backgroundColor:u}),className:k+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));A.propTypes=T,A.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=o(t,R);return i&&console.warn(i),n?r.createElement(e,s({image:n},l)):(console.warn("Image not loaded",a),null)}}const z=q((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:m="lazy",imgClassName:p,imgStyle:h,backgroundColor:y,objectFit:f,objectPosition:b}=e,w=o(e,L);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=s({objectFit:f,objectPosition:b,backgroundColor:y},h);const{width:E,height:S,layout:T,images:N,placeholder:I,backgroundColor:_}=l,P=c(E,S,T),{style:j,className:O}=P,A=o(P,x),R={fallback:void 0,sources:[]};return N.fallback&&(R.fallback=s({},N.fallback,{srcSet:N.fallback.srcSet?C(N.fallback.srcSet):void 0})),N.sources&&(R.sources=N.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,s({},A,{style:s({},j,i,{backgroundColor:y}),className:O+(a?" "+a:"")}),r.createElement(g,{layout:T,width:E,height:S},r.createElement(v,s({},d(I,!1,T,E,S,_,f,b))),r.createElement(k,s({"data-gatsby-image-ssr":"",className:p},w,u("eager"===m,!1,R,m,h)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:S,width:W,height:W,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=F;const H=q(A);H.displayName="StaticImage",H.propTypes=F},1768:function(e,t,a){var r=a(6540),n=a(4810),i=a(566);t.A=e=>{let{title:t="",description:a="",pathname:s="",image:o="",children:l=null}=e;const c=(0,i.A)(),{siteTitle:u,siteTitleAlt:d,siteUrl:m,siteDescription:p,siteImage:g,author:h,siteLanguage:y}=c,f={title:t?t+" | "+u:d,description:a||p,url:""+m+(s||""),image:""+m+(o||g)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:y}),r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{property:"og:title",content:f.title}),r.createElement("meta",{property:"og:url",content:f.url}),r.createElement("meta",{property:"og:description",content:f.description}),r.createElement("meta",{property:"og:image",content:f.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:f.title}),r.createElement("meta",{name:"twitter:url",content:f.url}),r.createElement("meta",{name:"twitter:description",content:f.description}),r.createElement("meta",{name:"twitter:image",content:f.image}),r.createElement("meta",{name:"twitter:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-jodie"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,n.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,n.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,n.withPrefix)("/apple-touch-icon.png")}),l)}}}]);
//# sourceMappingURL=51a92b962b7f946f7bf09d24082d574f78186985-146511b16c32210af382.js.map