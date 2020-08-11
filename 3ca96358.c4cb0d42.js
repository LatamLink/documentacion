(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),b=o,d=m["".concat(a,".").concat(b)]||m[b]||u[b]||i;return r?n.a.createElement(d,c(c({ref:t},p),{},{components:r})):n.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var o=r(2),n=r(6),i=(r(0),r(103)),a={id:"monitor",title:"Network monitor",sidebar_label:"Network monitor"},c={unversionedId:"monitor",id:"monitor",isDocsHomePage:!1,title:"Network monitor",description:'A native network monitor will be created as a tool for developers and users prior to launching the LatamLink Pro Testnet. The network monitor will display both "on-chain" and "off-chain" metrics, please see this article on network monitoring.',source:"@site/docs/monitor.md",permalink:"/docs/monitor",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/website/docs/monitor.md",lastUpdatedAt:1597111741,sidebar_label:"Network monitor",sidebar:"docs",previous:{title:"Hello World Contract",permalink:"/docs/hello-world"},next:{title:"Application Programming Interface API",permalink:"/docs/api"}},l=[{value:"Link to network monitor",id:"link-to-network-monitor",children:[{value:"Other EOSIO monitors",id:"other-eosio-monitors",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'A native network monitor will be created as a tool for developers and users prior to launching the LatamLink Pro Testnet. The network monitor will display both "on-chain" and "off-chain" metrics, please see this article on ',Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/monitoring"}),"network monitoring"),"."),Object(i.b)("h2",{id:"link-to-network-monitor"},"Link to network monitor"),Object(i.b)("p",null,"The network monitor is available at the following URL: ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://monitor.latamlink.io"}),"https://monitor.latamlink.io")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"GitHub Repository")," https://",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/eoscostarica/eosio-monitor"}),"https://github.com/eoscostarica/eosio-monitor")),Object(i.b)("h3",{id:"other-eosio-monitors"},"Other EOSIO monitors"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/CryptoLions/EOS-Network-monitor"}),"https://github.com/CryptoLions/EOS-Network-monitor")))}s.isMDXComponent=!0}}]);