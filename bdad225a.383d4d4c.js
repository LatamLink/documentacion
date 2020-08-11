(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(103)),a={id:"interoperability",title:"Interoperability",sidebar_label:"Interoperability"},c={unversionedId:"interoperability",id:"interoperability",isDocsHomePage:!1,title:"Interoperability",description:"LAC-Chain technology-agnostic, for which we want to be able to integrate several blockchain protocols that are being used in LAC-Chain.",source:"@site/docs/interoperability.md",permalink:"/docs/interoperability",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/website/docs/interoperability.md",lastUpdatedAt:1597170210,sidebar_label:"Interoperability",sidebar:"docs",previous:{title:"Privacy",permalink:"/docs/privacy"},next:{title:"Project Roadmap",permalink:"/docs/roadmap"}},l=[{value:"Ethereum Interoperability -&gt; EOSIO",id:"ethereum-interoperability---eosio",children:[]},{value:"Ethereum Interoperability &lt;-&gt; EOSIO",id:"ethereum-interoperability---eosio-1",children:[]},{value:"EVM on EOSIO",id:"evm-on-eosio",children:[{value:"Existent EVM Solutions on EOSIO:",id:"existent-evm-solutions-on-eosio",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"LAC-Chain technology-agnostic, for which we want to be able to integrate several blockchain protocols that are being used in LAC-Chain."),Object(i.b)("p",null,"The interoperability between distinct blockchain protocols could be achieved in two ways:"),Object(i.b)("p",null," ",Object(i.b)("strong",{parentName:"p"},"Trusted Peers:")," This modality is simpler of implement, using a trust layer to determine what occurs in each chain."),Object(i.b)("p",null," ",Object(i.b)("strong",{parentName:"p"},"Trustless:")," Is a more difficult solution, specially between protocols POW -> DPOS."),Object(i.b)("h2",{id:"ethereum-interoperability---eosio"},"Ethereum Interoperability -> EOSIO"),Object(i.b)("h2",{id:"ethereum-interoperability---eosio-1"},"Ethereum Interoperability <-> EOSIO"),Object(i.b)("h2",{id:"evm-on-eosio"},"EVM on EOSIO"),Object(i.b)("p",null,"Block.one announced a challenge of a smart contract, offering a prize of 200,000 dollars to who resolved it."),Object(i.b)("p",null,'"In this challenge, the participants should create an EOSIO Smart Contract that can store and invoke EVM (Solidity) Smart Contracts in a virtual environment similar to the Ethereum one", is detailed in one announcement of February 3rd in EOSIO DevPost.'),Object(i.b)("h3",{id:"existent-evm-solutions-on-eosio"},"Existent EVM Solutions on EOSIO:"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jafri/eosio.evm"}),"https://github.com/jafri/eosio.evm")))}p.isMDXComponent=!0}}]);