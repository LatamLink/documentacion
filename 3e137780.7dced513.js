(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),c=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=c(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(t),u=a,O=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return t?r.a.createElement(O,p(p({ref:n},l),{},{components:t})):r.a.createElement(O,p({ref:n},l))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(2),r=t(6),i=(t(0),t(103)),o={id:"node-installation",title:"EOSIO Node Installation",sidebar_label:"Node Installation"},p={unversionedId:"node-installation",id:"node-installation",isDocsHomePage:!1,title:"EOSIO Node Installation",description:"EOSIO version tag: v2.0.5",source:"@site/docs/node-installation.md",permalink:"/docs/node-installation",editUrl:"https://github.com/LatamLink/latamlink.io/tree/master/website/docs/node-installation.md",lastUpdatedAt:1597111741,sidebar_label:"Node Installation",sidebar:"docs",previous:{title:"Entity and Node Information",permalink:"/docs/data-entities-nodes"},next:{title:"Hello World Contract",permalink:"/docs/hello-world"}},s=[{value:"1. Install EOSIO from precompiled binaries",id:"1-install-eosio-from-precompiled-binaries",children:[{value:"Uninstall Script",id:"uninstall-script",children:[]}]},{value:"2. Configure LatamLink Testnet Node",id:"2-configure-latamlink-testnet-node",children:[{value:"Starting and Stopping Nodeos",id:"starting-and-stopping-nodeos",children:[]}]},{value:"Relevant nodeos configurations",id:"relevant-nodeos-configurations",children:[{value:"Validator",id:"validator",children:[]},{value:"Validator p2p layer 1",id:"validator-p2p-layer-1",children:[]},{value:"Validator p2p out",id:"validator-p2p-out",children:[]},{value:"Validator p2p bidir",id:"validator-p2p-bidir",children:[]},{value:"boot p2p out",id:"boot-p2p-out",children:[]},{value:"boot p2p bidir",id:"boot-p2p-bidir",children:[]},{value:"writer p2p",id:"writer-p2p",children:[]},{value:"writer api",id:"writer-api",children:[]},{value:"observer api",id:"observer-api",children:[]},{value:"observer p2p",id:"observer-p2p",children:[]}]}],l={rightToc:s};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"EOSIO version tag: ",Object(i.b)("inlineCode",{parentName:"p"},"v2.0.5")," "),Object(i.b)("p",null,"Chain ID: ",Object(i.b)("inlineCode",{parentName:"p"},"2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5")),Object(i.b)("p",null,"Genesis File: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json"}),Object(i.b)("inlineCode",{parentName:"a"},"genesis.json"))),Object(i.b)("h2",{id:"1-install-eosio-from-precompiled-binaries"},"1. Install EOSIO from precompiled binaries"),Object(i.b)("p",null,"Download the latest version of EOSIO for your OS from:  ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/releases/tag/v2.0.5"}),"https://github.com/EOSIO/eos/releases/tag/v2.0.5"),"   "),Object(i.b)("p",null,"For example, for ubuntu 18.04 you need to download ",Object(i.b)("inlineCode",{parentName:"p"},"eosio_2.0.5-1-ubuntu-18.04_amd64.deb"),"  "),Object(i.b)("p",null,"You can use apt to install it:  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/eosio/eos/releases/download/v2.0.5/eosio_2.0.5-1-ubuntu-18.04_amd64.deb\nsudo apt install ./eosio_2.0.5-1-ubuntu-18.04_amd64.deb\n")),Object(i.b)("p",null,"It will download all dependencies and install EOSIO to ",Object(i.b)("inlineCode",{parentName:"p"},"/usr/opt/eosio/v2.0.5"),"  "),Object(i.b)("h3",{id:"uninstall-script"},"Uninstall Script"),Object(i.b)("p",null,"To uninstall the EOSIO built/installed binaries and dependencies, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./scripts/eosio_uninstall.sh\n")),Object(i.b)("h2",{id:"2-configure-latamlink-testnet-node"},"2. Configure LatamLink Testnet Node"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir ~/LatamLink-testnet\ncd ~/LatamLink-testnet\ngit clone https://github.com/LatamLink/testnet.git ./\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit ",Object(i.b)("inlineCode",{parentName:"p"},"config.ini"),"   "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Enter your server's external address: ",Object(i.b)("inlineCode",{parentName:"li"},"p2p-server-address = YOUR_DOMAIN_OR_IP:9876")," "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open TCP Ports (8888, 9876) on your firewall/router  "))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Specify a genesis.json file the first time you run nodeos"),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./start.sh --delete-all-blocks --genesis-json genesis.json\n")),Object(i.b)("p",null,"Follow logs to check your node is running OK. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"tail -f stderr.txt\n")),Object(i.b)("p",null,"Check if you can access your node using link ",Object(i.b)("inlineCode",{parentName:"p"},"http://**YOUR_SERVER**/v1/chain/get_info")," "),Object(i.b)("p",null,"Here is an ",Object(i.b)("a",{href:"https://latamlink.eosio.cr/v1/chain/get_info",target:"_blank"},"API Example"),"  "),Object(i.b)("h3",{id:"starting-and-stopping-nodeos"},"Starting and Stopping Nodeos"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"./start.sh")," Starts and restarts Nodeos service.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"./stop.sh")," Performs graceful shutdown of Nodeos service."))),Object(i.b)("h2",{id:"relevant-nodeos-configurations"},"Relevant nodeos configurations"),Object(i.b)("p",null,"This is not a list of configurations that can be used out of the box, rather a list of important options for each type of node."),Object(i.b)("h3",{id:"validator"},"Validator"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"\nproducer-name = <validator_name>\n\nsignature-provider = EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3\n\npeer-key =\npeer-private-key =\n\neosio::producer_plugin\n\n")),Object(i.b)("h3",{id:"validator-p2p-layer-1"},"Validator p2p layer 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"validator-p2p-out"},"Validator p2p out"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"p2p-accept-transactions = false\napi-accept-transactions = false\n\npeer-key =\npeer-private-key = \np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"validator-p2p-bidir"},"Validator p2p bidir"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"boot-p2p-out"},"boot p2p out"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"p2p-accept-transactions = false\napi-accept-transactions = false\n\npeer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"boot-p2p-bidir"},"boot p2p bidir"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"writer-p2p"},"writer p2p"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"writer-api"},"writer api"),Object(i.b)("p",null,"Please see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.dfuse.io/en"}),"dfuse documentation")),Object(i.b)("h3",{id:"observer-api"},"observer api"),Object(i.b)("p",null,"Please see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.dfuse.io/en"}),"dfuse documentation")),Object(i.b)("h3",{id:"observer-p2p"},"observer p2p"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"p2p-accept-transactions = false\napi-accept-transactions = false\n\npeer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")))}c.isMDXComponent=!0}}]);