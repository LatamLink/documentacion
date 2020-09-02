/*! For license information please see 2.e8ddcebc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{124:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(125),o=n(107),i=n(116),l=n(8),s="light",u="dark",d=function(e){return e===u?u:s},f=function(){return l.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):s},h=function(e){try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}},m=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).colorMode,r=(n=void 0===n?{}:n).disableSwitch,c=void 0!==r&&r,i=Object(a.useState)(f),l=i[0],m=i[1],v=Object(a.useCallback)((function(){m(s),h(s)}),[]),b=Object(a.useCallback)((function(){m(u),h(u)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",d(l))}),[l]),Object(a.useEffect)((function(){if(!c)try{var e=localStorage.getItem("theme");null!==e&&m(d(e))}catch(t){console.error(t)}}),[m]),Object(a.useEffect)((function(){c||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;m(t?u:s)}))}),[]),{isDarkTheme:l===u,setLightTheme:v,setDarkTheme:b}},v=n(156);var b=function(e){var t=m(),n=t.isDarkTheme,a=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(v.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:c}},e.children)},p=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith("docusaurus.tab."))e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},g=function(){var e=Object(o.a)().siteConfig.themeConfig.announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useCallback)((function(){localStorage.setItem("docusaurus.announcement.dismiss","true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem("docusaurus.announcement.id");"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},k=n(157);var E=function(e){var t=p(),n=t.tabGroupChoices,a=t.setTabGroupChoices,c=g(),o=c.isAnnouncementBarClosed,i=c.closeAnnouncementBar;return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)},O=n(158),j=n(51),y=n.n(j);var C=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).announcementBar,a=void 0===n?{}:n,c=a.content,i=a.backgroundColor,l=a.textColor,s=Object(O.a)(),u=s.isAnnouncementBarClosed,d=s.closeAnnouncementBar;return!c||u?null:r.a.createElement("div",{className:y.a.announcementBar,style:{backgroundColor:i,color:l},role:"banner"},r.a.createElement("div",{className:y.a.announcementBarContent,dangerouslySetInnerHTML:{__html:c}}),r.a.createElement("button",{type:"button",className:y.a.announcementBarClose,onClick:d,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},w=n(2),_=n(109),S=n(114),N=n(20),T=n(121),L=n(159);function I(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var M=n(160);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function x(){return"undefined"==typeof navigator?"Ctrl":/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var A=r.a.forwardRef((function(e,t){var n=P(Object(a.useState)((function(){return x()?"\u2318":"Ctrl"})),2),c=n[0],o=n[1];return Object(a.useEffect)((function(){x()&&o("\u2318")}),[]),r.a.createElement("button",D({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement(M.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),r.a.createElement("span",{className:"DocSearch-Button-Key"},"Ctrl"===c?r.a.createElement(I,null):c),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))})),R=null;function U(e){var t=e.hit,n=e.children;return r.a.createElement(S.a,{to:t.url},n)}function V(e){var t=e.state,n=e.onClose,a=Object(L.a)().generateSearchPageLink;return r.a.createElement(S.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function X(e){var t=Object(o.a)().siteMetadata,l=Object(i.b)().withBaseUrl,s=Object(T.useHistory)(),u=Object(a.useRef)(null),d=Object(a.useState)(!1),f=d[0],h=d[1],m=Object(a.useState)(null),v=m[0],b=m[1],p=Object(a.useCallback)((function(){return R?Promise.resolve():Promise.all([n.e(48).then(n.bind(null,474)),Promise.all([n.e(0),n.e(49)]).then(n.bind(null,473)),n.e(0).then(n.t.bind(null,104,7))]).then((function(e){var t=e[0].DocSearchModal;R=t}))}),[]),g=Object(a.useCallback)((function(){p().then((function(){h(!0)}))}),[p,h]),k=Object(a.useCallback)((function(){h(!1)}),[h]),E=Object(a.useCallback)((function(e){p().then((function(){h(!0),b(e.key)}))}),[p,h,b]),O=Object(a.useRef)({navigate:function(e){var t=e.suggestionUrl;s.push(t)}}).current,j=Object(a.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:l(""+t.pathname+t.hash)})}))})).current,y=Object(a.useMemo)((function(){return function(e){return r.a.createElement(V,Object(w.a)({},e,{onClose:k}))}}),[k]),C=Object(a.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}),[t.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,c,o])}({isOpen:f,onOpen:g,onClose:k,onInput:E,searchButtonRef:u}),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:!0})),r.a.createElement(A,{onTouchStart:p,onFocus:p,onMouseOver:p,onClick:g,ref:u}),f&&Object(N.createPortal)(r.a.createElement(R,Object(w.a)({onClose:k,initialScrollY:window.scrollY,initialQuery:v,navigator:O,transformItems:j,hitComponent:U,resultsFooterComponent:y,transformSearchClient:C},e)),document.body))}var F=function(){var e=Object(o.a)().siteConfig;return r.a.createElement(X,e.themeConfig.algolia)},H=n(213),K=n.n(H),Y=n(52),q=n.n(Y),G=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(_.a)(q.a.toggle,q.a.dark),style:n},t)},W=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(_.a)(q.a.toggle,q.a.light),style:n},t)},z=function(e){var t=Object(o.a)(),n=t.siteConfig.themeConfig.colorMode.switchConfig,a=n.darkIcon,c=n.darkIconStyle,i=n.lightIcon,l=n.lightIconStyle,s=t.isClient;return r.a.createElement(K.a,Object(w.a)({disabled:!s,icons:{checked:r.a.createElement(G,{icon:a,style:c}),unchecked:r.a.createElement(W,{icon:i,style:l})}},e))},J=n(138);var Q,Z=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},$=n(161),ee=function(e){var t=Object(a.useState)(!0),n=t[0],r=t[1],c=Object(a.useState)(!1),o=c[0],i=c[1],l=Object(a.useState)(0),s=l[0],u=l[1],d=Object(a.useState)(0),f=d[0],h=d[1],m=Object(a.useCallback)((function(e){null!==e&&h(e.getBoundingClientRect().height)}),[]),v=Object(T.useLocation)(),b=Z(v.hash),p=b[0],g=b[1];return Object($.a)((function(t){var n=t.scrollY;if(e&&(0===n&&r(!0),!(n<f))){if(o)return i(!1),r(!1),void u(n);var a=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&n>=s?r(!1):n+c<a&&r(!0),u(n)}}),[s,f]),Object(a.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(a.useEffect)((function(){e&&p&&i(!0)}),[p]),{navbarRef:m,isNavbarVisible:n}},te=n(162),ne=n(163),ae=n(164),re=n(53),ce=n.n(re),oe=n(6);var ie=function(){if(void 0!==Q)return Q;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),Q=e,e},le=a.useLayoutEffect,se=function(e){var t=Object(a.useRef)(e);return le((function(){t.current=e})),t},ue=["mousedown","touchstart"],de=function(e){if("touchstart"===e)return ie()?{passive:!0}:void 0};var fe=function(e,t){var n=se(t);Object(a.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return ue.forEach((function(e){document.addEventListener(e,a,de(e))})),function(){ue.forEach((function(e){document.removeEventListener(e,a,de(e))}))}}}),[!t])};function he(e){var t=e.activeBasePath,n=e.activeBaseRegex,a=e.to,c=e.href,o=e.label,l=e.activeClassName,s=void 0===l?"navbar__link--active":l,u=e.prependBaseUrlToHref,d=Object(oe.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),f=Object(i.a)(a),h=Object(i.a)(t),m=Object(i.a)(c,{forcePrependBaseUrl:!0});return r.a.createElement(S.a,Object(w.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:u?m:c}:Object.assign({isNavLink:!0,activeClassName:s,to:f},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(h)}}:null),d),o)}function me(e){var t=e.items,n=e.position,c=e.className,o=Object(oe.a)(e,["items","position","className"]),i=r.a.useRef(null),l=r.a.useRef(null),s=Object(a.useState)(!1),u=s[0],d=s[1];function f(e){if(e){var t,n,a=null==l||null===(t=l.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;a&&a.focus()}d(e)}fe(i,(function(){return f(!1)}));var h=function(e,t){return void 0===t&&(t=!1),Object(_.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{ref:i,className:Object(_.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":u})},r.a.createElement(he,Object(w.a)({className:h(c)},o,{onClick:o.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!o.to||"Tab"===e.key)&&(e.preventDefault(),f(!0))}}),o.label),r.a.createElement("ul",{ref:l,className:"dropdown__menu"},t.map((function(e,n){var a=e.className,c=Object(oe.a)(e,["className"]);return r.a.createElement("li",{key:n},r.a.createElement(he,Object(w.a)({onKeyDown:function(e){n===t.length-1&&"Tab"===e.key&&(e.preventDefault(),f(!1))},activeClassName:"dropdown__link--active",className:h(a,!0)},c)))})))):r.a.createElement(he,Object(w.a)({className:h(c)},o))}function ve(e){var t=e.items,n=(e.position,e.className),a=Object(oe.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),Object(_.a)("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(he,Object(w.a)({className:c(n,!0)},a),a.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var n=e.className,o=Object(oe.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(he,Object(w.a)({activeClassName:"menu__link--active",className:c(n)},o,{onClick:a.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(he,Object(w.a)({className:c(n)},a)))}var be=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(oe.a)(e,["mobile"]),c=n?ve:me;return r.a.createElement(c,a)},pe=n(127);var ge=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};var ke={default:be,docsVersion:function(e){var t=e.label,n=e.to,a=e.docsPluginId,c=Object(oe.a)(e,["label","to","docsPluginId"]),o=Object(pe.useActiveVersion)(a),i=Object(pe.useLatestVersion)(a),l=null!=o?o:i,s=null!=t?t:l.label,u=null!=n?n:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(l).path;return r.a.createElement(be,Object(w.a)({},c,{label:s,to:u}))},docsVersionDropdown:function(e){var t,n=e.mobile,a=e.docsPluginId,c=Object(oe.a)(e,["mobile","docsPluginId"]),o=Object(pe.useActiveDocContext)(a),i=Object(pe.useVersions)(a),l=Object(pe.useLatestVersion)(a),s=i.map((function(e){var t=(null==o?void 0:o.alternateDocVersions[e.name])||ge(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==o?void 0:o.activeVersion)}}})),u=null!==(t=o.activeVersion)&&void 0!==t?t:l,d=n?"Versions":u.label,f=n?void 0:ge(u).path;return r.a.createElement(be,Object(w.a)({},c,{mobile:n,label:d,to:f,items:s}))}};function Ee(e){var t=e.type,n=Object(oe.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=ke[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t}(t);return r.a.createElement(a,n)}var Oe=function(){var e,t,n=Object(o.a)(),c=n.siteConfig.themeConfig,i=c.navbar,l=(i=void 0===i?{}:i).title,s=void 0===l?"":l,u=i.items,d=void 0===u?[]:u,f=i.hideOnScroll,h=void 0!==f&&f,m=c.colorMode,v=(m=void 0===m?{}:m).disableSwitch,b=void 0!==v&&v,p=n.isClient,g=Object(a.useState)(!1),k=g[0],E=g[1],O=Object(a.useState)(!1),j=O[0],y=O[1],C=Object(J.a)(),N=C.isDarkTheme,T=C.setLightTheme,L=C.setDarkTheme,I=ee(h),M=I.navbarRef,D=I.isNavbarVisible,P=Object(ae.a)(),B=P.logoLink,x=P.logoLinkProps,A=P.logoImageUrl,R=P.logoAlt;Object(te.a)(k);var U=Object(a.useCallback)((function(){E(!0)}),[E]),V=Object(a.useCallback)((function(){E(!1)}),[E]),X=Object(a.useCallback)((function(e){return e.target.checked?L():T()}),[T,L]),H=Object(ne.a)();Object(a.useEffect)((function(){H===ne.b.desktop&&E(!1)}),[H]);var K=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(d),Y=K.leftItems,q=K.rightItems;return r.a.createElement("nav",{ref:M,className:Object(_.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":k},e[ce.a.navbarHideable]=h,e[ce.a.navbarHidden]=!D,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=d&&0!==d.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(S.a,Object(w.a)({className:"navbar__brand",to:B},x),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:R}),null!=s&&r.a.createElement("strong",{className:Object(_.a)("navbar__title",(t={},t[ce.a.hideLogoText]=j,t))},s)),Y.map((function(e,t){return r.a.createElement(Ee,Object(w.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},q.map((function(e,t){return r.a.createElement(Ee,Object(w.a)({},e,{key:t}))})),!b&&r.a.createElement(z,{className:ce.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:N,onChange:X}),r.a.createElement(F,{handleSearchBarToggle:y,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(S.a,Object(w.a)({className:"navbar__brand",onClick:V,to:B},x),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:R}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!b&&k&&r.a.createElement(z,{"aria-label":"Dark mode toggle in sidebar",checked:N,onChange:X})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement(Ee,Object(w.a)({mobile:!0},e,{onClick:V,key:t}))})))))))},je=n(128);n(54);function ye(e){var t=e.children;return r.a.createElement(b,null,r.a.createElement(E,null,t))}t.a=function(e){var t=Object(o.a)().siteConfig,n=void 0===t?{}:t,a=n.favicon,l=n.title,s=n.themeConfig.image,u=n.url,d=e.children,f=e.title,h=e.noFooter,m=e.description,v=e.image,b=e.keywords,p=e.permalink,g=e.version,k=f?f+" | "+l:l,E=v||s,O=Object(i.a)(E,{absolute:!0}),j=Object(i.a)(a);return r.a.createElement(ye,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),a&&r.a.createElement("link",{rel:"shortcut icon",href:j}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),g&&r.a.createElement("meta",{name:"docsearch:version",content:g}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:O}),E&&r.a.createElement("meta",{property:"twitter:image",content:O}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),p&&r.a.createElement("meta",{property:"og:url",content:u+p}),p&&r.a.createElement("link",{rel:"canonical",href:u+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(C,null),r.a.createElement(Oe,null),r.a.createElement("div",{className:"main-wrapper"},d),!h&&r.a.createElement(je.a,null))}},138:function(e,t,n){"use strict";var a=n(0),r=n(156);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},157:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},158:function(e,t,n){"use strict";var a=n(0),r=n(157);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},159:function(e,t,n){"use strict";var a=n(121),r=n(8),c=n(107);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.a)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},161:function(e,t,n){"use strict";var a=n(0),r=n(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],i=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},162:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),c=n[0],o=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){o(t())}}),[]),c}},164:function(e,t,n){"use strict";var a=n(107),r=n(138),c=n(116),o=n(126);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).navbar,i=(n=void 0===n?{}:n).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=Object(c.a)(l.href||"/"),d={};l.target?d={target:l.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(f),logoAlt:l.alt}}},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),i=f(n(214)),l=f(n(7)),s=f(n(215)),u=f(n(216)),d=n(217);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},214:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},217:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}}}]);