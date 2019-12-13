(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t){e.exports={address:"0x535ee2Affb7C1fC3019DEAC733E26D5AAF8B95D1",abi:[{constant:!0,inputs:[],name:"milestoneMultipler",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"donaRewardsContractAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"prevMilestone",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"contributorsDB",outputs:[{name:"isContributor",type:"bool"},{name:"donationAmount",type:"uint256"},{name:"tokenAmount",type:"uint256"},{name:"prevPercentageAmount",type:"uint256"},{name:"currentPercentageAmount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"goal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isWithdrawEnabled",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"donationBracket",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"charityAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"currentMilestone",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_contributor",type:"address"}],name:"removeContributor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_contributor",type:"address"}],name:"addContributor",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"donate",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{inputs:[{name:"_rewardsContract",type:"address"},{name:"_charityAddress",type:"address"},{name:"_goal",type:"uint256"},{name:"_milestone",type:"uint256"},{name:"_milestoneMultipler",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"_contributor",type:"address"},{indexed:!1,name:"_donationAmount",type:"uint256"}],name:"logDonations",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_contributor",type:"address"}],name:"logContributorAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_contributor",type:"address"}],name:"logContributorRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_contributor",type:"address"},{indexed:!1,name:"_tokenAmount",type:"uint256"}],name:"logWithdrawel",type:"event"}]}},177:function(e,t,n){e.exports=n(297)},297:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n(37),i=n(44),s=n(139),u=n(140),l=n(7),p=function(e){return{type:"SET_BALANCE",balance:e}},d=function(e){return{type:"SET_CONTRIBUTORINFO",contributorInfo:e}},m=function(e){return{type:"SET_CHARITYADDRESS",charityAddress:e}},b=function(e){return{type:"SET_GOAL",goal:e}},y=function(e){return{type:"SET_CURRENTMILESTONE",currentMilestone:e}},f=function(e){return{type:"SET_PREVMILESTONE",prevMilestone:e}},v=function(e){return{type:"SET_MILESTONEARRAY",milestoneArray:e}},E=function(e){return{type:"SET_ISWITHDRAWENABLED",isWithdrawEnabled:e}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=Object(c.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,isWithdrawEnabled:!1,walletAddress:void 0,contract:void 0,provider:void 0,balance:0,contributorInfo:void 0,charityAddress:void 0,goal:0,currentMilestone:0,prevMilestone:0,milestoneArray:[],donationBracket:[10,50,100,500,1e3,5e3,1e4,5e4]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return h({},e,{isLoading:t.isLoading});case"SET_WALLETADDRESS":return h({},e,{walletAddress:t.walletAddress});case"SET_CONTRACT":return h({},e,{contract:t.contract});case"SET_PROVIDER":return h({},e,{provider:t.provider});case"SET_BALANCE":return h({},e,{balance:t.balance});case"SET_CONTRIBUTORINFO":return h({},e,{contributorInfo:t.contributorInfo});case"SET_CHARITYADDRESS":return h({},e,{charityAddress:t.charityAddress});case"SET_GOAL":return h({},e,{goal:t.goal});case"SET_CURRENTMILESTONE":return h({},e,{currentMilestone:t.currentMilestone});case"SET_PREVMILESTONE":return h({},e,{prevMilestone:t.prevMilestone});case"SET_MILESTONEARRAY":return h({},e,{milestoneArray:t.milestoneArray});case"SET_ISWITHDRAWENABLED":return h({},e,{isWithdrawEnabled:t.isWithdrawEnabled});default:return e}}}),O=n(10),A=n.n(O),j=n(18),x=n(75),S=n(29),T=n(141),D=n(142),k=n(161),C=n(76),N=function(){var e=Object(j.a)(A.a.mark(function e(t,n){var r,a,o;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.addContributor(t);case 3:return r=e.sent,e.next=6,r.wait(2);case 6:return a=e.sent,o=a.events.pop().args,e.abrupt("return",{log:o,hasErrored:!1});case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{error:e.t0,hasErrored:!0});case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(A.a.mark(function e(t,n){var r,a,o;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.donate({value:t});case 3:return r=e.sent,e.next=6,r.wait(2);case 6:return a=e.sent,o=a.events.pop().args,e.abrupt("return",{log:o,hasErrored:!1});case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{error:e.t0,hasErrored:!0});case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(A.a.mark(function e(t){var n,r,a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.withdraw();case 3:return n=e.sent,e.next=6,n.wait(2);case 6:return r=e.sent,a=r.events.pop().args,e.abrupt("return",{log:a,hasErrored:!1});case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{error:e.t0,hasErrored:!0});case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),P=n(162),I=n(302),R=n(321),W=n(322),L=n(323),B=n(59),U=n(324),V=n(325),Y=n(326),G=n(327),H=n(332),z=n(333),F=n(334),J=n(328),q=n(331),$=n(73),K=n(4),Q=n(318),X=n(319),Z=n(320),ee=n(57),te=(n(196),n(330));function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ae=Object($.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},button:{margin:e.spacing(1,2,1)},formControl:{margin:e.spacing(3)},group:{margin:e.spacing(1,0)},title:{margin:e.spacing(1,0,1)},submit:{margin:e.spacing(1,0,1)},gridUser:{color:e.palette.getContrastText(Q.a[400]),backgroundColor:Q.a[400]},gridCampaign:{color:e.palette.getContrastText(X.a[500]),backgroundColor:X.a[500]}}}),oe=Object(K.a)(function(e){return{root:{color:e.palette.getContrastText(Z.a[500]),backgroundColor:Z.a[500],"&:hover":{backgroundColor:Z.a[700]}}}})(I.a),ce=Object(K.a)(function(e){return{root:{color:e.palette.getContrastText(X.a[600]),backgroundColor:X.a[600],"&:hover":{backgroundColor:X.a[800]}}}})(I.a);var ie=Object(i.b)(function(e){var t=e.user;return{contract:t.contract,walletAddress:t.walletAddress,charityAddress:t.charityAddress,donationBracket:t.donationBracket,contributorInfo:t.contributorInfo,provider:t.provider,balance:t.balance,goal:t.goal,currentMilestone:t.currentMilestone,prevMilestone:t.prevMilestone,milestoneArray:t.milestoneArray,isWithdrawEnabled:t.isWithdrawEnabled}})(function(e){var t=ae(),n=Object(C.useSnackbar)().enqueueSnackbar,r=e.walletAddress,o=e.charityAddress,c=e.donationBracket,i=e.contract,s=e.contributorInfo,u=e.provider,m=e.balance,b=e.goal,v=e.currentMilestone,g=e.prevMilestone,h=e.milestoneArray,w=e.isWithdrawEnabled,O=e.dispatch,x=a.a.useState({showDonateOptions:!1,donationAmount:10}),S=Object(P.a)(x,2),T=S[0],D=S[1];function k(){for(var e=0;e<h.length;e+=1)if(h[e]===v)return e;return-1}function N(){var e=k(),t=0;return-1!==e&&(t=h[e]-h[e-1]),t}var $=function(){var e=Object(j.a)(A.a.mark(function e(t){var a,o;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"Donate"===t.currentTarget.name&&D(re({},T,{showDonateOptions:!0})),"Withdraw"!==t.currentTarget.name){e.next=19;break}return e.next=5,_(i);case 5:if(e.sent.hasErrored){e.next=18;break}return n("withdraw successful",{variant:"success"}),e.next=10,i.contributorsDB(r);case 10:return a=e.sent,O(d(a)),e.next=14,i.isWithdrawEnabled();case 14:(o=e.sent)!==w&&O(E(o)),e.next=19;break;case 18:n("withdraw failed",{variant:"error"});case 19:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function K(){return(K=Object(j.a)(A.a.mark(function e(t){var a,o,c,s;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=T.donationAmount,!T.showDonateOptions){e.next=27;break}return D(re({},T,{showDonateOptions:!1})),e.next=6,M(ee.ethers.utils.parseUnits(a.toString(),"wei"),i);case 6:if(e.sent.hasErrored){e.next=26;break}return n("successfully donated ".concat(a,", please wait while page reloads"),{variant:"success"}),e.next=11,i.contributorsDB(r);case 11:return o=e.sent,e.t0=Number,e.next=15,u.getBalance(i.address);case 15:return e.t1=e.sent,(c=(0,e.t0)(e.t1))>=v&&(O(f(v)),O(y(v<b?h[k()+1]:b))),e.next=20,i.isWithdrawEnabled();case 20:(s=e.sent)!==w&&O(E(s)),O(d(o)),O(p(c)),e.next=27;break;case 26:n("donation amount is too big",{variant:"error"});case 27:case"end":return e.stop()}},e)}))).apply(this,arguments)}return a.a.createElement(R.a,{component:"main",maxWidth:"md"},a.a.createElement(W.a,null),a.a.createElement("div",{className:t.paper},a.a.createElement(L.a,{className:t.group,container:!0,spacing:8,justify:"space-evenly"},a.a.createElement(L.a,{className:t.gridUser,item:!0,xs:10,sm:5},a.a.createElement(B.a,{variant:"h5",className:t.title},"User details"),a.a.createElement(U.a,null,a.a.createElement(V.a,null,a.a.createElement(Y.a,{primary:a.a.createElement(B.a,{variant:"h6"},"contributer address"),secondary:a.a.createElement(B.a,{variant:"subtitle2"},r)})),a.a.createElement(V.a,null,a.a.createElement(Y.a,{primary:a.a.createElement(B.a,{variant:"h6"},"donation amount"),secondary:a.a.createElement(B.a,{variant:"subtitle2"},"".concat(String(s.donationAmount)," WEI"))})),a.a.createElement(V.a,null,a.a.createElement(Y.a,{primary:a.a.createElement(B.a,{variant:"h6"},"token amount"),secondary:a.a.createElement(B.a,{variant:"subtitle2"},"".concat(String(s.tokenAmount)," DOR"))}))),a.a.createElement(te.a,{value:10*function(){var e=Number(s.currentPercentageAmount)-Number(s.prevPercentageAmount);return 0===e?Number(s.prevPercentageAmount):e}(),total:N(),progress:"percent",size:"medium",label:"user donation percentage to current milestone"})),a.a.createElement(L.a,{className:t.gridCampaign,item:!0,xs:10,sm:5},a.a.createElement(B.a,{variant:"h5",className:t.title},"Campaign details"),a.a.createElement(U.a,null,a.a.createElement(V.a,null,a.a.createElement(Y.a,{primary:a.a.createElement(B.a,{variant:"h6"},"charity address"),secondary:a.a.createElement(B.a,{variant:"subtitle2"},o)})),a.a.createElement(V.a,null,a.a.createElement(Y.a,{primary:a.a.createElement(B.a,{variant:"h6"},"charity goal"),secondary:a.a.createElement(B.a,{variant:"subtitle2"},"".concat(String(b)," WEI"))})),a.a.createElement(te.a,{value:m,total:b,progress:"value",size:"medium",label:"overall donation amount to goal"}),a.a.createElement(V.a,null,a.a.createElement(Y.a,{primary:a.a.createElement(B.a,{variant:"h6"},"current milestone"),secondary:a.a.createElement(B.a,{variant:"subtitle2"},"".concat(String(v)," WEI"))}))),a.a.createElement(te.a,{value:m-g,total:N(),progress:"percent",size:"medium",label:"overall donation percentage to current milestone"}))),a.a.createElement("form",{className:t.form,noValidate:!0,onSubmit:function(e){return K.apply(this,arguments)}},a.a.createElement(G.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.group,"aria-label":"full-width contained primary button group"},a.a.createElement(I.a,{type:"button",name:"Donate",className:t.button,onClick:$},"Donate"),a.a.createElement(ce,{disabled:!w,type:"button",name:"Withdraw",className:t.button,onClick:$},"Withdraw")),T.showDonateOptions&&a.a.createElement("div",null,a.a.createElement(H.a,{component:"fieldset",className:t.formControl},a.a.createElement(z.a,{component:"legend"},"Donation Bracket"),a.a.createElement(F.a,{"aria-label":"donationAmount",name:"donationAmount",className:t.group,value:Number(T.donationAmount),onChange:function(e,t){D(re({},T,Object(l.a)({},e.target.name,t)))}},a.a.createElement(L.a,{container:!0,direction:"row"},c.map(function(e,t){return a.a.createElement(J.a,{key:t,value:e,control:a.a.createElement(q.a,null),label:"".concat(e," WEI")})})," "))),a.a.createElement(oe,{type:"submit",fullWidth:!0,variant:"contained",className:t.submit},"Submit donation Options")))))}),se=n(105),ue=n.n(se),le=function(){var e=Object(j.a)(A.a.mark(function e(){var t,n,r;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,window.ethereum.autoRefreshOnNetworkChange=!1,e.next=5,window.ethereum.enable();case 5:return t=new ee.ethers.providers.Web3Provider(window.ethereum),n=t.getSigner(),r=new ee.ethers.Contract(ue.a.address,ue.a.abi,n),e.abrupt("return",{account:window.ethereum.selectedAddress,web3:window.web3,provider:t,signer:n,contract:r,hasErrored:!1});case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{hasErrored:!0,message:"You denied access to your metamask."});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(){return e.apply(this,arguments)}}(),pe=n(329),de=Object($.a)(function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},progress:{margin:e.spacing(2)}}});function me(){var e=de();return a.a.createElement(R.a,{component:"main",maxWidth:"xs"},a.a.createElement(W.a,null),a.a.createElement("div",{className:e.paper},a.a.createElement(pe.a,{className:e.progress})))}function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}window.ethereum.on("accountsChanged",function(){window.location.reload()});var fe=function(e){function t(){var e,n;Object(x.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(T.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).state={},n}return Object(k.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(A.a.mark(function e(){var t,n,r,a,o,c,i,s,u,l,g,h;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.dispatch,e.next=3,le();case 3:return n=e.sent,this.setState(ye({},n)),e.t0=Number,e.next=8,n.provider.getBalance(n.contract.address);case 8:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.next=12,n.contract.contributorsDB(n.account);case 12:return a=e.sent,e.next=15,n.contract.charityAddress();case 15:return o=e.sent,e.t2=Number,e.next=19,n.contract.goal();case 19:return e.t3=e.sent,c=(0,e.t2)(e.t3),e.t4=Number,e.next=24,n.contract.currentMilestone();case 24:return e.t5=e.sent,i=(0,e.t4)(e.t5),e.t6=Number,e.next=29,n.contract.prevMilestone();case 29:return e.t7=e.sent,s=(0,e.t6)(e.t7),e.t8=Number,e.next=34,n.contract.milestoneMultipler();case 34:return e.t9=e.sent,u=(0,e.t8)(e.t9),e.next=38,n.contract.isWithdrawEnabled();case 38:for(l=e.sent,(g=[]).push(s),h=i;h<c;h+=h*u)g.push(h);if(g.push(c),a.isContributor){e.next=46;break}return e.next=46,N(n.account,n.contract);case 46:t({type:"SET_WALLETADDRESS",walletAddress:n.account}),t({type:"SET_CONTRACT",contract:n.contract}),t({type:"SET_PROVIDER",provider:n.provider}),t(p(r)),t(d(a)),t(m(o)),t(b(c)),t(y(i)),t(f(s)),t(v(g)),t(E(l)),t({type:"SET_LOADING",isLoading:!1});case 58:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.isLoading,t=this.state,n=t.hasErrored,r=t.message;return a.a.createElement("div",null,a.a.createElement(C.SnackbarProvider,{maxSnack:3},e&&a.a.createElement(me,null),!e&&n&&a.a.createElement("h3",null,r),!e&&!n&&a.a.createElement(ie,null)))}}]),t}(a.a.Component),ve=Object(i.b)(function(e){var t=e.user;return{isLoading:t.isLoading,walletAddress:t.walletAddress}})(fe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=Object(c.d)(w,Object(c.a)(s.a,Object(u.createLogger)()));Object(o.render)(a.a.createElement(i.a,{store:Ee},a.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,1,2]]]);
//# sourceMappingURL=main.96b7cc61.chunk.js.map