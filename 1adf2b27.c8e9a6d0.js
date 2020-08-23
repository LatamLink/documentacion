(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,p=u["".concat(r,".").concat(h)]||u[h]||b[h]||i;return n?a.a.createElement(p,s(s({ref:t},l),{},{components:n})):a.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),i=(n(0),n(104)),r={id:"consensus-mechanism",title:"Consensus Mechanism",sidebar_label:"Consensus Mechanism"},s={unversionedId:"consensus-mechanism",id:"consensus-mechanism",isDocsHomePage:!1,title:"Consensus Mechanism",description:"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network.",source:"@site/docs/consensus-mechanism.md",permalink:"/docs/consensus-mechanism",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/docs/consensus-mechanism.md",lastUpdatedAt:1598208122,sidebar_label:"Consensus Mechanism",sidebar:"docs",previous:{title:"LAC-Chain EOSIO Testnet",permalink:"/docs/eosio"},next:{title:"Network Topology",permalink:"/docs/network-topology"}},c=[{value:"LAC-Chain Permisioning Committee",id:"lac-chain-permisioning-committee",children:[{value:"Consensus Group",id:"consensus-group",children:[]}]},{value:"Active Validator Nodes",id:"active-validator-nodes",children:[]},{value:"Block production schedule",id:"block-production-schedule",children:[{value:"Byzantine Fault Tolerance",id:"byzantine-fault-tolerance",children:[]},{value:"Node Fault Tolerance",id:"node-fault-tolerance",children:[]}]},{value:"Stand-By validator nodes",id:"stand-by-validator-nodes",children:[{value:"Validator Node Rotation",id:"validator-node-rotation",children:[]},{value:"Replacement of an active Validator Node",id:"replacement-of-an-active-validator-node",children:[]}]},{value:"Custom EOSIO system contracts",id:"custom-eosio-system-contracts",children:[{value:"Disabled dPOS functions :",id:"disabled-dpos-functions-",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network."),Object(i.b)("p",null,"LatamLink will delegate the the authority to validate and write new blocks to a group of nodes that we call ",Object(i.b)("strong",{parentName:"p"},"validator nodes"),"."),Object(i.b)("h2",{id:"lac-chain-permisioning-committee"},"LAC-Chain Permisioning Committee"),Object(i.b)("p",null,"LACChain is a public / permissioned blockchain which aims to become a legally supervised network. This objective requires a central authority to govern the activity of the network."),Object(i.b)("p",null,"LACChain is designed under the principle that the permisioning committee is transparent and has as little intervention as possible."),Object(i.b)("p",null,"The authority of the permisioning committee can be derived from a set of actors through multi-signature ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-propose-a-multisig-transaction/#gatsby-focus-wrapper"}),Object(i.b)("inlineCode",{parentName:"a"},"multisig"))," approvals so that the group's consensus is required by way of a simple majority, that is, the votes gathered sum 1/2 +1 of the actors."),Object(i.b)("p",null,"One of the main functions of the permisioning committee is to evaluate the entities that want to register as validator nodes."),Object(i.b)("h3",{id:"consensus-group"},"Consensus Group"),Object(i.b)("p",null,"The group of validator nodes have the authority to write to the blockchain because this privilege was granted by a higher authority, the ",Object(i.b)("strong",{parentName:"p"},"permisioning committee"),", who will be the maximum authority and who determines which nodes will be the block producing nodes."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Any entity that meets a minimum of technical and legal requirements can apply to be a validator node on LatamLink. See our section on the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/permissioning-process"}),"permissioning process")," for more information.")),Object(i.b)("p",null,"Eventually there will be a legal vehicle, who verifies identity and signs contracts with validator nodes."),Object(i.b)("h2",{id:"active-validator-nodes"},"Active Validator Nodes"),Object(i.b)("p",null,"The accounts authorized as active validator nodes belong to a group that shares the responsibility of validating and writing all the transactions in the network."),Object(i.b)("p",null,"They are able to recognize the signatures of other nodes and verify that the transactions have been transmitted to the network by authorized nodes through white lists in smart contracts."),Object(i.b)("p",null,"An EOSIO network is configured by default to use 21 active producers and a series of reserve producers for stable operation."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"EOSIO allows up to 125 active validator nodes, specified by ",Object(i.b)("inlineCode",{parentName:"p"},"max_producers")," in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"}),"config.hpp"))),Object(i.b)("h2",{id:"block-production-schedule"},"Block production schedule"),Object(i.b)("p",null,"In EOSIO networks, active validator nodes are listed on a list, called ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"schedule")),"."),Object(i.b)("p",null,"The schedule is arranged alphabetically and thus defines the sequence in which validator nodes must sign blocks."),Object(i.b)("p",null,"Each validator receives a 12 block window to sign before the next producer starts their window. New blocks are produced by the first node in the list for a period of 6 seconds (12 blocks) and then the next node continues to produce the next 12 blocks and so on."),Object(i.b)("p",null,"If a validator node is not ready or unavailable, there is no one to produce the 12 blocks, so all speculative transactions are delayed until the next producer starts signing."),Object(i.b)("h3",{id:"byzantine-fault-tolerance"},"Byzantine Fault Tolerance"),Object(i.b)("p",null,"New blocks are considered reversible until they have been validated by 2/3 +1 of the active producers. This way if a producer node inserts an invalid block, the following nodes will reject it and the block will not be included unless 2/3 +1 of the producers group approve it."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Example:")," A network of 21 active validators requires signatures of 15 nodes (2/3 +1), which takes on average 90 seconds to obtain irreversibility of a new block.")),Object(i.b)("h3",{id:"node-fault-tolerance"},"Node Fault Tolerance"),Object(i.b)("p",null,"Once a block is signed, other producers on the schedule validate it and it goes into an irreversible state after 2/3 + 1 producers have signed. So if 1/3 or more of all producers are offline, the last irreversible block number, known as ",Object(i.b)("strong",{parentName:"p"},"Last Irreversible Block")," or ",Object(i.b)("strong",{parentName:"p"},"LIB"),", would not increase and the blockchain will stop."),Object(i.b)("p",null,"Servers sometimes fail, and sometimes must be decommissioned for software updates and system maintenance, which is important to consider on small EOSIO networks."),Object(i.b)("p",null,"With only 5 producers, the network will tolerate 1 producer going offline. If more than one is offline, the number of the Last Irreversible Block will stop increasing and the network will stop. With 4 nodes, a single failed a node will stall the network. With 9 producers, two nodes can be disconnected without breaking the network."),Object(i.b)("p",null,"It is also important that private keys used by production nodes are properly backed up. If block producer keys are lost due to a system disaster, there is a chance that the network will stop working forever."),Object(i.b)("h2",{id:"stand-by-validator-nodes"},"Stand-By validator nodes"),Object(i.b)("p",null,"EOSIO networks keep a list of registered validators that run nodes that can successfully produce blocks just by being added to the schedule of active producers by the permisioning committee."),Object(i.b)("h3",{id:"validator-node-rotation"},"Validator Node Rotation"),Object(i.b)("p",null,"The periodic rotation of active validator producing nodes in the schedule favors decentralization. For this reason, the permisioning committee will have a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://latamlink.io/docs/network-governance"}),"network management tool")," that allows selecting the validator nodes that it wants to include or exclude in the schedule."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"For example:")," You can define a weekly active node rotation policy.")),Object(i.b)("p",null,"Later on, periodic and automatic rotation based on smart contracts will be enabled. In such a way that it is impossible to predict who are the producers of selected active blocks. (external entropy)"),Object(i.b)("h3",{id:"replacement-of-an-active-validator-node"},"Replacement of an active Validator Node"),Object(i.b)("p",null,"If a node on the schedule stops responding. The permisioning committee may manually replace validator nodes with performance or security issues."),Object(i.b)("p",null,"Eventually, a smart contract may be implemented to replace a block producer's account in the schedule automatically based on objective performance metrics."),Object(i.b)("h2",{id:"custom-eosio-system-contracts"},"Custom EOSIO system contracts"),Object(i.b)("p",null,"LACChain will use tailored system contracts. Building over the native EOSIO system contracts, where the main changes lie replacing native ",Object(i.b)("strong",{parentName:"p"},"Delegated Proof of Stake (dPOS)")," mechanism with the standard defined by ",Object(i.b)("strong",{parentName:"p"},"LAC-Chain"),"."),Object(i.b)("p",null,"This change involves disabling the use of tokens and voting features of the DPOS protocol. It will also no longer be necessary to issue a system token."),Object(i.b)("h3",{id:"disabled-dpos-functions-"},"Disabled dPOS functions :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"System Token"),Object(i.b)("li",{parentName:"ul"},"Block Producer Voting"),Object(i.b)("li",{parentName:"ul"},"Block Producer Payment"),Object(i.b)("li",{parentName:"ul"},"Staking for resources"),Object(i.b)("li",{parentName:"ul"},"Delegation of Resources"),Object(i.b)("li",{parentName:"ul"},"Namebiding"),Object(i.b)("li",{parentName:"ul"},"Resource Exchange (REX)")),Object(i.b)("p",null,"This functionality will not necessarily be removed, but an \u201cassert false\u201d function will be used to disable the functions since these functions are not required."),Object(i.b)("p",null,"In essence, the LAC Chain system contracts define a mechanism to register the validator nodes as well as allocate ",Object(i.b)("strong",{parentName:"p"},"system resources")," required by the network user accounts to execute their smart contracts."))}d.isMDXComponent=!0}}]);