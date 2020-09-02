(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(105)),i={id:"data-entities-nodes",title:"Entity and Node Information",sidebar_label:"Entity and Node Data"},c={unversionedId:"data-entities-nodes",id:"data-entities-nodes",isDocsHomePage:!1,title:"Entity and Node Information",description:"Voluntary disclosure of data",source:"@site/docs/data-entities-nodes.md",slug:"/data-entities-nodes",permalink:"/docs/data-entities-nodes",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/docs/data-entities-nodes.md",version:"current",lastUpdatedAt:1599054775,sidebar_label:"Entity and Node Data",sidebar:"docs",previous:{title:"Permissioning Process",permalink:"/docs/permissioning-process"},next:{title:"EOSIO Node Installation",permalink:"/docs/node-installation"}},l=[{value:"Voluntary disclosure of data",id:"voluntary-disclosure-of-data",children:[]},{value:"Data Update Tool",id:"data-update-tool",children:[{value:"Entity JSON Structure",id:"entity-json-structure",children:[]}]},{value:"Node Information",id:"node-information",children:[{value:"Writer Node",id:"writer-node",children:[]},{value:"Validator Node",id:"validator-node",children:[]},{value:"Boot Node",id:"boot-node",children:[]},{value:"Observer Node",id:"observer-node",children:[]}]},{value:"Implementation Phases",id:"implementation-phases",children:[{value:"Phase  I",id:"phase--i",children:[]},{value:"Phase II",id:"phase-ii",children:[]},{value:"Phase III",id:"phase-iii",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"voluntary-disclosure-of-data"},"Voluntary disclosure of data"),Object(o.b)("p",null,"It allows node operators to publicly advertise their ownership of a LAC-Chain account and share information about themselves."),Object(o.b)("p",null,"Think of a WHOIS for LAC-Chain accounts that are verified by a blockchain signature. All of these fields require a single sign-on that authenticates via blockchain and therefore cannot be wrong. Only the BP with the correct key can edit these fields using the user interface."),Object(o.b)("h2",{id:"data-update-tool"},"Data Update Tool"),Object(o.b)("p",null,'To access the user interface to update data, select the "Update Node Info" option in the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dashboard.latamlink.io"}),"Network Monitor"),"."),Object(o.b)("h3",{id:"entity-json-structure"},"Entity JSON Structure"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"eosio::action"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"setentinfo(node, info)")),Object(o.b)("p",null,"Executing this action requires the authorization of the authorized account or the permissioning committee."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"node")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"name")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of the node asociated to the entity")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"info")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"string")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"JSON for entity info")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="on-chain entity info"',title:'"on-chain',entity:!0,'info"':!0}),'{\n    "account_name": "eoscostarica",\n    "org": {\n        "organization_name": "EOS Costa Rica",\n        "organization_id": "3-101-090127",\n        "technical_contact": "Xavier Fernandez",\n        "business_contact": "Edgar Fernandez",\n        "email": "bp@eosio.cr",\n        "website": "https://eoscostarica.io",\n        "code_of_conduct": "https://eoscostarica.io/en/transparency/#code_of_conduct",\n        "ownership_disclosure": "https://eoscostarica.io/en/transparency/#ownership_disclosure",\n        "branding": {\n            "logo_256": "https://eoscostarica.io/assets/eos-CostaRica-256x256.png",\n            "logo_1024": "https://eoscostarica.io/assets/eos-CostaRica-1024x1024.png",\n            "logo_svg": "https://eoscostarica.io/assets/eos-CostaRica-vectors.svg"\n        },\n        "location": {\n            "name": "San Jose",\n            "country": "CR",\n            "latitude": 9.936377,\n            "longitude": -84.078155\n        },\n        "social": {\n            "steemit": "eos-costarica",\n            "twitter": "EOSCostaRica",\n            "youtube": "channel/UCvYinCH3O1iKpi-_dNfQAGQ",\n            "facebook": "costaricaeos",\n            "github": "eoscostarica",\n            "reddit": "eoscostarica",\n            "keybase": "eoscostarica",\n            "telegram": "eoscr",\n            "wechat": ""\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"node-information"},"Node Information"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"eosio::action"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"setnodeinfo(node, info)")),Object(o.b)("p",null,"Executing this action requires the authorization of the authorized account or the permissioning committee."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"node")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"name")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Nombre del nodo asociada a la entidad")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"info")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"string")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"JSON seg\xfan tipo de Nodo")))),Object(o.b)("h3",{id:"writer-node"},"Writer Node"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="on-chain writer node info"',title:'"on-chain',writer:!0,node:!0,'info"':!0}),'{\n    "writer_keys":{\n        "peer_key": "EOS...",\n        "account_key": "EOS..."\n    },\n    "writer_endpoints":{\n        "writer_api": "http://lacchain.eosio.cr",\n        "writer_ssl": "https://lacchain.eosio.cr",\n        "writer_p2p": "lacchain.eosio.cr:9876"\n    },\n    "writer_location": {\n        "name": "San Jose",\n        "country": "CR",\n        "latitude": 9.936377,\n        "longitude": -84.078155\n    }\n}\n')),Object(o.b)("h3",{id:"validator-node"},"Validator Node"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="on-chain validator node info"',title:'"on-chain',validator:!0,node:!0,'info"':!0}),'{\n    "validator_keys":{\n        "peer_key": "EOS...",\n        "block_signing_key": "EOS..."\n    },\n    "validator_endpoints":{\n        "validator_p2p_out": "lacchain.eosio.cr:9876",\n        "validator_p2p_bidir": "lacchain.eosio.cr:9876"\n    },\n    "validator_location": {\n        "name": "San Jose",\n        "country": "CR",\n        "latitude": 9.936377,\n        "longitude": -84.078155\n    }\n}\n')),Object(o.b)("h3",{id:"boot-node"},"Boot Node"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="on-chain boot node info"',title:'"on-chain',boot:!0,node:!0,'info"':!0}),'{\n    "boot_keys":{\n        "peer_key": "EOS..."\n    },\n    "boot_endpoints":{\n        "boot_p2p_out": "",\n        "boot_p2p_bidir": "lacchain.eosio.cr:9876",\n    },\n    "boot_location": {\n        "name": "San Jose",\n        "country": "CR",\n        "latitude": 9.936377,\n        "longitude": -84.078155\n    }\n}\n')),Object(o.b)("h3",{id:"observer-node"},"Observer Node"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="on-chain observer node info"',title:'"on-chain',observer:!0,node:!0,'info"':!0}),'{\n    "observer_keys":{\n        "peer_key": "EOS..."\n    },\n    "observer_endpoints":{\n        "observer_api": "http://lacchain.eosio.cr",\n        "observer_ssl": "https://lacchain.eosio.cr",\n        "observer_p2p": "lacchain.eosio.cr:9876"\n    },\n    "observer_location": {\n        "name": "San Jose",\n        "country": "CR",\n        "latitude": 9.936377,\n        "longitude": -84.078155\n    }\n}\n')),Object(o.b)("h2",{id:"implementation-phases"},"Implementation Phases"),Object(o.b)("h3",{id:"phase--i"},"Phase  I"),Object(o.b)("h4",{id:"self-generated-list-of-all-validator-nodes-extracted-from-the-blockchain"},"Self-generated list of all validator nodes extracted from the blockchain."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Node account name"),Object(o.b)("li",{parentName:"ul"},"Type of node entity"),Object(o.b)("li",{parentName:"ul"},"Node public key"),Object(o.b)("li",{parentName:"ul"},"Location code (ISO 3166-1 numeric)")),Object(o.b)("h4",{id:"voluntary-information-provided-by-each-entity"},"Voluntary information provided by each entity"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Legal name"),Object(o.b)("li",{parentName:"ul"},"Identification number"),Object(o.b)("li",{parentName:"ul"},"Technical contact name"),Object(o.b)("li",{parentName:"ul"},"Business contact name"),Object(o.b)("li",{parentName:"ul"},"Address"),Object(o.b)("li",{parentName:"ul"},"Website"),Object(o.b)("li",{parentName:"ul"},"Email"),Object(o.b)("li",{parentName:"ul"},"Social networks"),Object(o.b)("li",{parentName:"ul"},"Brand / Logo"),Object(o.b)("li",{parentName:"ul"},"Code of conduct")),Object(o.b)("h4",{id:"eosio-nodes"},"EOSIO nodes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Node locations"),Object(o.b)("li",{parentName:"ul"},"API and P2P endpoints"),Object(o.b)("li",{parentName:"ul"},"Validators"),Object(o.b)("li",{parentName:"ul"},"Writer nodes"),Object(o.b)("li",{parentName:"ul"},"History API nodes"),Object(o.b)("li",{parentName:"ul"},"API nodes"),Object(o.b)("li",{parentName:"ul"},"Boot nodes"),Object(o.b)("li",{parentName:"ul"},"Observer nodes")),Object(o.b)("h3",{id:"phase-ii"},"Phase II"),Object(o.b)("h4",{id:"performance"},"Performance"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Blocks lost in X time period ",Object(o.b)("em",{parentName:"li"}," - Involuntary ")),Object(o.b)("li",{parentName:"ul"},"Missed rounds in X time period ",Object(o.b)("em",{parentName:"li"}," - Involuntary ")),Object(o.b)("li",{parentName:"ul"},"Total number of blocks produced ",Object(o.b)("em",{parentName:"li"}," - Involuntary ")),Object(o.b)("li",{parentName:"ul"},"Average position on the BP list ",Object(o.b)("em",{parentName:"li"}," - Involuntary ")),Object(o.b)("li",{parentName:"ul"},"Average performance rating ",Object(o.b)("em",{parentName:"li"}," - Involuntary ")),Object(o.b)("li",{parentName:"ul"},"Total downtime"),Object(o.b)("li",{parentName:"ul"},"Interruptions"),Object(o.b)("li",{parentName:"ul"},"Stress tests"),Object(o.b)("li",{parentName:"ul"},"Patch management"),Object(o.b)("li",{parentName:"ul"},"Disaster Recovery Capacity"),Object(o.b)("li",{parentName:"ul"},"Intrusion tests")),Object(o.b)("h4",{id:"infrastructure"},"Infrastructure"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Physics / Public Cloud / Shared"),Object(o.b)("li",{parentName:"ul"},"Primary site"),Object(o.b)("li",{parentName:"ul"},"Secondary site"),Object(o.b)("li",{parentName:"ul"},"Infrastructure diagram"),Object(o.b)("li",{parentName:"ul"},"DDoS protection"),Object(o.b)("li",{parentName:"ul"},"Firewalls"),Object(o.b)("li",{parentName:"ul"},"Load balancers"),Object(o.b)("li",{parentName:"ul"},"VPN"),Object(o.b)("li",{parentName:"ul"},"Future plans")),Object(o.b)("h3",{id:"phase-iii"},"Phase III"),Object(o.b)("h4",{id:"support-structure"},"Support structure"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Number of technical employees."),Object(o.b)("li",{parentName:"ul"},"24/7 support"),Object(o.b)("li",{parentName:"ul"},"Monitoring tools"),Object(o.b)("li",{parentName:"ul"},"Communication plan with other Validator nodes")),Object(o.b)("h4",{id:"ownership-structure"},"Ownership structure"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Description of the commercial structure"),Object(o.b)("li",{parentName:"ul"},"Number of employees"),Object(o.b)("li",{parentName:"ul"},"Individual interest holders"),Object(o.b)("li",{parentName:"ul"},"Shareholders of commercial entities"),Object(o.b)("li",{parentName:"ul"},"Affiliated entities")))}s.isMDXComponent=!0}}]);