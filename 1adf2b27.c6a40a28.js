(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{103:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(o),p=n,h=b["".concat(i,".").concat(p)]||b[p]||d[p]||a;return o?r.a.createElement(h,c(c({ref:t},l),{},{components:o})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},64:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return u}));var n=o(2),r=o(6),a=(o(0),o(103)),i={id:"consensus-mechanism",title:"Consensus Mechanism",sidebar_label:"Consensus Mechanism"},c={unversionedId:"consensus-mechanism",id:"consensus-mechanism",isDocsHomePage:!1,title:"Consensus Mechanism",description:"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network.",source:"@site/docs/consensus-mechanism.md",permalink:"/docs/consensus-mechanism",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/website/docs/consensus-mechanism.md",lastUpdatedAt:1596492311,sidebar_label:"Consensus Mechanism",sidebar:"docs",previous:{title:"EOSIO blockchain for LACChain testnet",permalink:"/docs/eosio"},next:{title:"Resource Usage",permalink:"/docs/resource-usage"}},s=[{value:"Proof of Authority (POA)",id:"proof-of-authority-poa",children:[{value:"Permisioning Committee",id:"permisioning-committee",children:[]}]},{value:"Active Blocks Producers",id:"active-blocks-producers",children:[]},{value:"Block producer schedule",id:"block-producer-schedule",children:[{value:"Byzantine Fault Tolerance",id:"byzantine-fault-tolerance",children:[]},{value:"Node Fault Tolerance",id:"node-fault-tolerance",children:[]}]},{value:"Stand-By Block Producers",id:"stand-by-block-producers",children:[{value:"Block Producer Rotation",id:"block-producer-rotation",children:[]},{value:"Replacement of an active Block Producer",id:"replacement-of-an-active-block-producer",children:[]}]},{value:"Node traceability",id:"node-traceability",children:[]},{value:"Custom EOSIO system contracts",id:"custom-eosio-system-contracts",children:[{value:"Disabled dPOS functions :",id:"disabled-dpos-functions-",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network."),Object(a.b)("p",null,"LatamLink will delegate the the authority to validate and write new blocks to a group of nodes that we call ",Object(a.b)("strong",{parentName:"p"},"Block Producers"),"."),Object(a.b)("h2",{id:"proof-of-authority-poa"},"Proof of Authority (POA)"),Object(a.b)("p",null,"The group of block producers have the authority to write to the blockchain because this privilege was granted by a higher authority, the ",Object(a.b)("strong",{parentName:"p"},"permisioning committee"),", who will be the maximum authority and who determines which nodes will be the block producing nodes. "),Object(a.b)("h3",{id:"permisioning-committee"},"Permisioning Committee"),Object(a.b)("p",null,"LACChain is a public / permissioned blockchain which aims to become a legally supervised network. This objective requires a central authority to govern the activity of the network."),Object(a.b)("p",null,"LACChain is designed under the principle that the permisioning committee is transparent and has as little intervention as possible."),Object(a.b)("p",null,"The authority of the permisioning committee can be derived from a set of actors through multi-signature ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-propose-a-multisig-transaction/#gatsby-focus-wrapper"}),Object(a.b)("inlineCode",{parentName:"a"},"multisig"))," approvals so that the group's consensus is required by way of a simple majority, that is, the votes gathered sum 1/2 +1 of the actors."),Object(a.b)("p",null,"One of the main functions of the permisioning committee is to evaluate the entities that want to register as block producers."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Any entity that meets a minimum of technical and legal requirements can apply to be a block producer on LatamLink. See our section on the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/permissioning-process"}),"permissioning process")," for more information.")),Object(a.b)("p",null,"Eventually there will be a legal vehicle, who verifies identity and signs contracts with block producers."),Object(a.b)("h2",{id:"active-blocks-producers"},"Active Blocks Producers"),Object(a.b)("p",null,"The accounts authorized as active block producers belong to a group that shares the responsibility of validating and writing all the transactions in the network."),Object(a.b)("p",null,"They are able to recognize the signatures of other nodes and verify that the transactions have been transmitted to the network by authorized nodes through white lists in smart contracts."),Object(a.b)("p",null,"An EOSIO network is configured by default to use 21 active producers and a series of reserve producers for stable operation."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The appropriate fixed number of active producers for the LatamLink network remains to be defined.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"EOSIO allows up to 125 active block producers, specified by ",Object(a.b)("inlineCode",{parentName:"p"},"max_producers")," in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"}),"config.hpp"))),Object(a.b)("h2",{id:"block-producer-schedule"},"Block producer schedule"),Object(a.b)("p",null,"In EOSIO networks, active block producers are listed on a list, called ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"schedule")),"."),Object(a.b)("p",null,"The schedule is arranged alphabetically and thus defines the sequence in which block producers must sign blocks."),Object(a.b)("p",null,"Each producer receives a 12 block window to sign before the next producer starts their window. New blocks are produced by the first node in the list for a period of 6 seconds (12 blocks) and then the next node continues to produce the next 12 blocks and so on."),Object(a.b)("p",null,"If a producer node is not ready or unavailable, there is no one to produce the 12 blocks, so all speculative transactions are delayed until the next producer starts signing."),Object(a.b)("h3",{id:"byzantine-fault-tolerance"},"Byzantine Fault Tolerance"),Object(a.b)("p",null,"New blocks are considered reversible until they have been validated by 2/3 +1 of the active producers. This way if a producer node inserts an invalid block, the following nodes will reject it and the block will not be included unless 2/3 +1 of the producers group approve it."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Example:")," A network of 21 active producers requires validation of 15 nodes (2/3 +1), which takes on average 90 seconds to obtain irreversibility of a new block.")),Object(a.b)("h3",{id:"node-fault-tolerance"},"Node Fault Tolerance"),Object(a.b)("p",null,"Once a block is signed, other producers on the schedule validate it and it goes into an irreversible state after 2/3 + 1 producers have signed. So if 1/3 or more of all producers are offline, the last irreversible block number, known as ",Object(a.b)("strong",{parentName:"p"},"Last Irreversible Block")," or ",Object(a.b)("strong",{parentName:"p"},"LIB"),", would not increase and the blockchain will stop."),Object(a.b)("p",null,"Servers sometimes fail, and sometimes must be decommissioned for software updates and system maintenance, which is important to consider on small EOSIO networks."),Object(a.b)("p",null,"With only 5 producers, the network will tolerate 1 producer going offline. If more than one is offline, the number of the Last Irreversible Block will stop increasing and the network will stop. With 4 nodes, a single failed a node will stall the network. With 9 producers, two nodes can be disconnected without breaking the network."),Object(a.b)("p",null,"It is also important that private keys used by production nodes are properly backed up. If block producer keys are lost due to a system disaster, there is a chance that the network will stop working forever."),Object(a.b)("h2",{id:"stand-by-block-producers"},"Stand-By Block Producers"),Object(a.b)("p",null,"EOSIO networks keep a list of registered block producer accounts that run nodes that can successfully produce blocks just by being added to the schedule of active producers by the permisioning committee."),Object(a.b)("h3",{id:"block-producer-rotation"},"Block Producer Rotation"),Object(a.b)("p",null,"The periodic rotation of active block producing nodes in the schedule favors decentralization. For this reason, the permisioning committee will have a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://latamlink.io/docs/network-governance"}),"network management tool")," that allows selecting the block producers that it wants to include or exclude in the schedule."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"For example:")," You can define a weekly active node rotation policy.")),Object(a.b)("p",null,"Later on, periodic and automatic rotation based on smart contracts will be enabled. In such a way that it is impossible to predict who are the producers of selected active blocks. (external entropy)"),Object(a.b)("h3",{id:"replacement-of-an-active-block-producer"},"Replacement of an active Block Producer"),Object(a.b)("p",null,"If a node on the schedule stops responding. The permisioning committee may manually replace block producers with performance or security issues."),Object(a.b)("p",null,"Eventually, a smart contract may be implemented to replace a block producer's account in the schedule automatically based on objective performance metrics."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"An optimal number of backup blocks producers is still undefined for LACChain.")),Object(a.b)("h2",{id:"node-traceability"},"Node traceability"),Object(a.b)("p",null,"LACCHain currently runs a Hyperledger BESU IBFT 2 network, where it cannot trace which node relayed a transaction, so it is not possible to make them legally responsible for it."),Object(a.b)("p",null,"It is necessary to verify that in LatamLink any transaction that is issued is propagated by a node that is in the list of accounts authorized by the permitting committee."),Object(a.b)("p",null,"This traceability may require modifying the EOSIO transaction protocol to include the signature of the front node so that the other nodes are able to recognize through which node the transactions have entered the network. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This requires further investigation")),Object(a.b)("h2",{id:"custom-eosio-system-contracts"},"Custom EOSIO system contracts"),Object(a.b)("p",null,"LACChain will use tailored system contracts. Building over the native EOSIO system contracts, where the main changes lie replacing native ",Object(a.b)("strong",{parentName:"p"},"Delegated Proof of Stake (dPOS)")," mechanism with LAC-Chain ",Object(a.b)("strong",{parentName:"p"},"Proof of Authority (POA)"),"."),Object(a.b)("p",null,"This change involves disabling the use of tokens and voting features of the DPOS protocol. It will also no longer be necessary to issue a system token."),Object(a.b)("h3",{id:"disabled-dpos-functions-"},"Disabled dPOS functions :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"System Token"),Object(a.b)("li",{parentName:"ul"},"Block Producer Voting"),Object(a.b)("li",{parentName:"ul"},"Block Producer Payment"),Object(a.b)("li",{parentName:"ul"},"Staking for resources"),Object(a.b)("li",{parentName:"ul"},"Delegation of Resources"),Object(a.b)("li",{parentName:"ul"},"Namebiding"),Object(a.b)("li",{parentName:"ul"},"Resource Exchange (REX)")),Object(a.b)("p",null,"This functionality will not necessarily be removed, but an \u201cassert false\u201d function will be used to disable the functions since these functions are not required."),Object(a.b)("p",null,"In essence, the LAC Chain system contracts define a mechanism to register the block producers as well as allocate ",Object(a.b)("strong",{parentName:"p"},"system resources")," required by the network user accounts to execute their smart contracts."))}u.isMDXComponent=!0}}]);