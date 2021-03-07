(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),h=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=h(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=h(n),p=o,b=u["".concat(i,".").concat(p)]||u[p]||d[p]||r;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var o=n(3),a=n(7),r=(n(0),n(117)),i={id:"hello-world",title:"Hello World Contract",sidebar_label:"Hello World Contract"},c={unversionedId:"hello-world",id:"hello-world",isDocsHomePage:!1,title:"Hello World Contract",description:'We explain by example how to create an account and a "Hello World" contract to upload to a EOS.IO based blockchain. For this example, we based on the resources published by Block.one to share with the community.',source:"@site/docs/hello-world.md",slug:"/hello-world",permalink:"/docs/hello-world",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/docs/hello-world.md",version:"current",lastUpdatedAt:1615139267,sidebar_label:"Hello World Contract",sidebar:"docs",previous:{title:"EOSIO Node Installation",permalink:"/docs/node-installation"},next:{title:"Network monitor",permalink:"/docs/monitor"}},l=[{value:"Get your private keys",id:"get-your-private-keys",children:[]},{value:"Acquire RAM resource",id:"acquire-ram-resource",children:[]},{value:"Create a contract",id:"create-a-contract",children:[]},{value:"Publish the Contract",id:"publish-the-contract",children:[]},{value:"Video-Tutorial",id:"video-tutorial",children:[]}],s={toc:l};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'We explain by example how to create an account and a "Hello World" contract to upload to a EOS.IO based blockchain. For this example, we based on the resources published by ',Object(r.b)("a",{parentName:"p",href:"http://developers.eos.io/"},"Block.one to share with the community"),"."),Object(r.b)("h2",{id:"get-your-private-keys"},"Get your private keys"),Object(r.b)("p",null,"More information ",Object(r.b)("a",{parentName:"p",href:"/docs/private-keys"},"about private keys")),Object(r.b)("h2",{id:"acquire-ram-resource"},"Acquire RAM resource"),Object(r.b)("p",null,"Once you have the account on LatamLink Testnet, we can use the Faucet to receive dummy tokens for free, that in this case will be EOS, necessary to use network resources (as long as we have participation on that network). The sense of that is, for the contract, we will be requiring to acquire RAM resources of the validator nodes, for which that we will need these EOS that were just sent to us."),Object(r.b)("p",null,"With this command, we can check the EOS quantity we have in this account (which in this case are 100 EOS), as well as the RAM resource, which at this moment is 5.366 KiB."),Object(r.b)("p",null,"In this scenario, we are connected to a remote URL through a LatamLink API endpoint to extract the account information."),Object(r.b)("p",null,"To acquire RAM, we write the command ",Object(r.b)("inlineCode",{parentName:"p"},"buyram")," for our account. We must specify twice the name of the account, once to define where the EOS come out and again to indicate where to RAM is sent. In the same line, we must indicate the EOS quantity we will be providing. For this example, we are sending 50 EOS. By having the wallet unlocked, automatically we acquired the RAM for the amount of EOS that we indicated."),Object(r.b)("p",null,"After executing the buy, we can verify that now we have 86 KiB of RAM and just 50 EOS of the 100 that originally were assigned to us."),Object(r.b)("p",null,"In the Bloks.io explorer, we can search for the information in that account. Additionally, we can review the taken actions, including the RAM buy transactions, the Faucet tokens and the complete history of movements."),Object(r.b)("h2",{id:"create-a-contract"},"Create a contract"),Object(r.b)("p",null,'To continue, let\'s create a simple contract inside a new directory, which we call "hellocontract". As resources are needed on EOS, these should be associated with the account tokens, so first should put the same contract name previously created.'),Object(r.b)("p",null,"To edit the contract, a text editor can be used. For this example, Sublime Text was used."),Object(r.b)("p",null,"The first line includes a library in which we have access through the Contract Development Kit (CDT), a tool that allows access to resources to create the contracts."),Object(r.b)("p",null,'In the class line, our "hellocontract" contract should be exposed, which has an action defined, which in this case we call it "hello" and its argument is a user of the type name. Upon saving the contract, is left a C++ in the directory.'),Object(r.b)("p",null,"The C++ file needs to be compiled using the tool CDT (Contract Development Toolkit), that receives as input the C++ file and as output originates a web assembly (warm) file which is an executable file by the contract. Additionally to the wasm file, an abi file is also generated which functions for mapping the contract functions. The command is going to receive the contract as input and as output is going to generate a wasm file which is the file that is uploaded on the blockchain."),Object(r.b)("p",null,"As we didn't specify one, the system give us a message that there is no Ricardian clause. A Ricardian clause is a contract in prose, written in English, that describes the intention of the contract and should be aligned with the intention for which it was created. In the Block.one's site are resources for the Ricardian clauses. For the purposes of the example, we don't create one."),Object(r.b)("p",null,"Once the command has been executed for the set contract, the system reads the information in the contract and then publish it."),Object(r.b)("h2",{id:"publish-the-contract"},"Publish the Contract"),Object(r.b)("p",null,"Once the contract is ready, let's publish in the LatamLink Testnet account. To publish our contract, we should use the ",Object(r.b)("inlineCode",{parentName:"p"},"cleos")," and the API endpoint previously used in LatamLink Testnet to upload the contract to the location we want with active permission to sign with the created wallet."),Object(r.b)("p",null,'Back in the block explorer (Bloks.io), we can verify that the account is the owner of the contract that exposes the "Hello" action and contains the abi information in which is specified in JSON structure the actions within the contract and associated components.'),Object(r.b)("p",null,'Once the contract is ready, we can execute one action in the contract. With cleos there is a command to specify the endpoint within the LatamLink Testnet and execute the "Hello" action. For this example, we put as input: "eoscostarica". The output of the action will be the text "Hello eoscostarica".'),Object(r.b)("p",null,"We can verify in the blocks explorer the executed actions."),Object(r.b)("p",null,"Is necessary to wait some seconds to complete the irreversibility of the block, since the validator nodes should validate the data block for this."),Object(r.b)("p",null,"Finally, this is a sample of how you can interact with a blockchain. There are JavaScript tools, library EOS JS that could be implemented to execute actions in a way more programmatic to integrate with dApps, data may persist, or even execute business logic on the blockchain with this same pattern.>"),Object(r.b)("h2",{id:"video-tutorial"},"Video-Tutorial"),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nMivNMvS09Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,mark:"crwd-mark"}))}h.isMDXComponent=!0}}]);