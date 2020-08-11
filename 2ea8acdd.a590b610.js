(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(103)),c={id:"block-explorer",title:"Block Explorer"},i={unversionedId:"block-explorer",id:"block-explorer",isDocsHomePage:!1,title:"Block Explorer",description:"A block explorer is a tool for visualizing all transactions that occur on the network.",source:"@site/docs/block-explorer.md",permalink:"/docs/block-explorer",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/website/docs/block-explorer.md",lastUpdatedAt:1597161913,sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/docs/cli"},next:{title:"Network Governance Tool",permalink:"/docs/network-governance"}},l=[{value:"eosq high-precision block explorer",id:"eosq-high-precision-block-explorer",children:[{value:"Link to block explorer",id:"link-to-block-explorer",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A block explorer is a tool for visualizing all transactions that occur on the network. "),Object(a.b)("h2",{id:"eosq-high-precision-block-explorer"},"eosq high-precision block explorer"),Object(a.b)("p",null,"LatamLink has installed ",Object(a.b)("strong",{parentName:"p"},"eosq"),", a block explorer that provides access to detailed, accurate, actionable data about accounts, actions, block producers, and more on the LatamLink testnet."),Object(a.b)("h3",{id:"link-to-block-explorer"},"Link to block explorer"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://explorer.testnet.latamlink.io/"}),"http://explorer.testnet.latamlink.io/")),Object(a.b)("p",null,"eosq was developed by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.dfuse.io/"}),"dfuse")," for the EOSIO community."))}s.isMDXComponent=!0}}]);