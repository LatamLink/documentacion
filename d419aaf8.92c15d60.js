(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,m=u["".concat(i,".").concat(O)]||u[O]||d[O]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(104)),i={},c={unversionedId:"entity-node-info",id:"entity-node-info",isDocsHomePage:!1,title:"entity-node-info",description:"Set Entity Information",source:"@site/docs/entity-node-info.md",permalink:"/docs/entity-node-info",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/docs/entity-node-info.md",lastUpdatedAt:1598208122},b=[{value:"Set Entity Information",id:"set-entity-information",children:[{value:"Partner",id:"partner",children:[]},{value:"Non-Partner",id:"non-partner",children:[]}]},{value:"Set Node Information",id:"set-node-information",children:[{value:"Validator",id:"validator",children:[]},{value:"Writer",id:"writer",children:[]},{value:"Boot",id:"boot",children:[]},{value:"Observer",id:"observer",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"set-entity-information"},"Set Entity Information"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"eosio::action")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"setentinfo(entity, info)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"entity type name"),Object(o.b)("li",{parentName:"ul"},"info type json ")),Object(o.b)("h3",{id:"partner"},"Partner"),Object(o.b)("p",null,"json format"),Object(o.b)("h3",{id:"non-partner"},"Non-Partner"),Object(o.b)("h2",{id:"set-node-information"},"Set Node Information"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"eosio::action")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"setnodeinfo(node, info)")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"parameter"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"node"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"account name must be a registered entity")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"info"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The corresponding JSON structure for each node")))),Object(o.b)("p",null,"JSON structure example below. "),Object(o.b)("h3",{id:"validator"},"Validator"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),"")),Object(o.b)("h3",{id:"writer"},"Writer"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),"")),Object(o.b)("h3",{id:"boot"},"Boot"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),"")),Object(o.b)("h3",{id:"observer"},"Observer"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),"")))}p.isMDXComponent=!0}}]);