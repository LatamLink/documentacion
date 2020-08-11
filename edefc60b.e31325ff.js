(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(103)),i={id:"performance",title:"Network security and Performance",sidebar_label:"Security and Performance"},c={unversionedId:"performance",id:"performance",isDocsHomePage:!1,title:"Network security and Performance",description:"Is essential to know the limits of the infrastructure from cybersecurity and performance perspective.",source:"@site/docs/performance.md",permalink:"/docs/performance",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/website/docs/performance.md",lastUpdatedAt:1597111741,sidebar_label:"Security and Performance",sidebar:"docs",previous:{title:"Network monitoring",permalink:"/docs/monitoring"},next:{title:"Digital Identity",permalink:"/docs/digital-identity"}},s=[{value:"Transactions per seconds (TPS)",id:"transactions-per-seconds-tps",children:[{value:"Contracts examples to test the performance",id:"contracts-examples-to-test-the-performance",children:[]}]},{value:"Quantum safe cryptography",id:"quantum-safe-cryptography",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Is essential to know the limits of the infrastructure from cybersecurity and performance perspective."),Object(o.b)("p",null,"LatamLink plans to make cybersecurity analysis and evaluations in the infrastructure. As well as make coordinate stress tests."),Object(o.b)("h2",{id:"transactions-per-seconds-tps"},"Transactions per seconds (TPS)"),Object(o.b)("p",null,"Depending on the use, EOSIO has the capability of ",Object(o.b)("strong",{parentName:"p"},"10,000 transactions per second")," approximately using EOSIO v2.0."),Object(o.b)("h3",{id:"contracts-examples-to-test-the-performance"},"Contracts examples to test the performance"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CryptoLions/TxShooterContract"}),"Performance tests Contract")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/michaeljyeates/eos-blaster"}),"EOS Blaster"))),Object(o.b)("h2",{id:"quantum-safe-cryptography"},"Quantum safe cryptography"),Object(o.b)("p",null," BID has an interest in beginning to explore how to go-ahead towards one new quantum-secure blockchain technology generation. There is an interest in testing the quantum capabilities of the LAC-Chain network to make it quantum-computers secure."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This topic is addressed in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://publications.iadb.org/es/tecnologias-cuanticas-una-oportunidad-transversal-e-interdisciplinar-para-la-transformacion-digital"}),"this IADB publication"))),Object(o.b)("p",null,"LatamLink will explore the way to generate certificates following the verifiable credentials standard ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.w3.org/TR/vc-data-model/"}),"VC")," to all nodes in the network which will have as an authentication mechanism one public-private key pairs generated with a quantum-secure algorithm."),Object(o.b)("p",null,"In order to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use these keys to encapsulate the process of ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/lacchain/besu-network/blob/master/TOPOLOGY_AND_ARCHITECTURE.md"}),"communication between nodes through TCP / RPLx")),Object(o.b)("li",{parentName:"ul"},"Use the quantum keys to sign the transactions issued by writer nodes, so that be verified by validators nodes")))}p.isMDXComponent=!0}}]);