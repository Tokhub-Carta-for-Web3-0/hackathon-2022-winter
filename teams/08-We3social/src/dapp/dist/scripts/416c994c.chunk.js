"use strict";(self.webpackChunkw3social_interface=self.webpackChunkw3social_interface||[]).push([[727],{6993:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(2863),r="http://114.55.67.80:8081/w3social";const i=function(){function e(){}return e.getTagList=function(){return s.Z.get(r+"/square/moment/getTagList")},e.getPublicPermission=function(e){return s.Z.get(r+"/did/pulishcheck",{params:e})},e.getQuestion=function(e){return s.Z.get(r+"/did/getQuestion",{params:e})},e.postQuestion=function(e){return s.Z.post(r+"/did/postquestion",e)},e.getMessage=function(e){return s.Z.post(r+"/did/frzsnews",e)},e.handleMessage=function(e){return s.Z.post(r+"/did/profrzsnews",e)},e.getDidInfo=function(e){return s.Z.post(r+"/did/info",e)},e.getFriends=function(e){return s.Z.post(r+"/did/friendslist",e)},e}()},8079:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(1527),r=n(6934),i=n(7626);const a=function(e){e.left;var t=e.right,n=e.title,a=e.onRight,l=(0,i.s0)();return(0,s.jsxs)("div",{className:"h-[44px] fixed top-0 w-full flex items-center justify-between px-[16px] bg-white z-10",children:[(0,s.jsx)("div",{onClick:function(){l(-1)},className:"h-[36px] w-[36px] flex items-center",children:(0,s.jsx)(r.Z,{className:"text-[#C1C1C1] text-[16px]"})}),"string"==typeof n?(0,s.jsx)("div",{className:"flex-1 text-center font-semibold",children:n}):n,(0,s.jsxs)("div",{onClick:function(){null==a||a()},className:"h-[36px] w-[36px] flex items-center",children:[" ",t]})]})}},8164:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(1527),r=n(4875),i=n.n(r);const a=function(e){var t=e.labels,n=e.type,r=function(e){void 0===e&&(e="black");var t="text-[10px] rounded-full py-[2px] border-[1px] border-solid px-[8px] ml-[6px] first:ml-[0] flex justify-center items-center";return"grey"===e?i()(t,"text-"+e+" border-current"):"black"!==e?i()(t,"bg-"+e+" text-"+e+" border-current"):i()(t,"bg-black text-white border-black")};return(0,s.jsx)("div",{className:"flex items-center",children:null==t?void 0:t.map((function(e,t){return(0,s.jsx)("span",{className:r(n),children:e},e+t)}))})}},1023:(e,t,n)=>{n.d(t,{IV:()=>s,RU:()=>r});var s=10,r=86400},2470:(e,t,n)=>{n.d(t,{q:()=>s,x:()=>r});var s=[{label:"身份",name:"identify",items:[{label:"builder",value:1},{label:"投资人",value:2}]},{label:"性别",name:"sex",items:[{label:"女性",value:1},{label:"男性",value:2}]},{label:"时间",name:"time",items:[{label:"近一周",value:1},{label:"近一月",value:2}]},{label:"标签",name:"label",items:[{label:"web3er",value:1},{label:"开发者",value:2}]},{label:"年龄",name:"age"}],r={identify:0,sex:0,time:0,label:0,age:[16,65]}},5670:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(959),r=n(7626),i=n(9347),a=n(5107),l=n(6993);const c=function(e){console.log(e);var t=(0,r.s0)(),n=(0,i.lr)()[0],c=(null==e?void 0:e.userId)||n.get("id")||0,d=(0,s.useState)("1"),o=d[0],u=d[1],x=(0,a.useQuery)(["getDidInfo",c],(function(){return l.Z.getDidInfo({id:c})}),{enabled:!!c});return{tabIndex:o,handleTabIndexChange:function(e,t){u(t),e.stopPropagation()},handleBack:function(){t(-1)},userData:x.data,isLoading:x.isLoading,id:c}}},9336:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var s=n(1527),r=n(959),i=n(5670),a=n(6993),l=n(5107),c=n(7293);const d=n.p+"assets/d6fbfc65.png";var o=n(8079),u=n(3231),x=n(8164),f=n(6211),p=n(1474),m=n(4875),v=n.n(m),h=n(5910),g=n(6500),b=n(2292);const j=function(e){var t=e.children,n=e.id,i=e.friendsid,c=(0,r.useState)(!1),d=c[0],o=c[1],u=(0,l.useMutation)(a.Z.handleMessage,{onSuccess:function(){}});return(0,s.jsx)(g.Z,{className:"pt-[5px]",onClick:function(){return o(!d)},open:d,title:(0,s.jsxs)("div",{className:"px-[5px] text-[12px]",children:[(0,s.jsx)("p",{onClick:function(){u.mutate({id:n,friendsid:i,result:1})},children:"通过"}),(0,s.jsx)(b.Z,{className:"bg-white"}),(0,s.jsx)("p",{className:"mt-[10px]",onClick:function(){u.mutate({id:n,friendsid:i,result:2})},children:"拒绝"})]}),children:(0,s.jsxs)("div",{className:"pt-[10px]",children:[" ",t]})})};const N=function(e){var t=e.headSculpture,n=e.content,r=void 0===n?"Hi, 我想认识一下你！":n,i=e.id,a=e.friendsid,l=e.nickname,c=e.identity,d=e.tag,o=void 0===d?[]:d,m=e.className,g=e.createTime;return(0,s.jsxs)("div",{className:v()("flex",m||""),children:[(0,s.jsx)(u.Z,{className:"text-[20px] mr-[14px] h-[52px] w-[52px]",children:(0,s.jsx)("img",{src:t,alt:"avatar"})}),(0,s.jsxs)("div",{className:"flex-1 flex-col",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,s.jsxs)("div",{className:"flex ",children:[(0,s.jsx)("div",{className:"text-[12px] text-black mr-[10px]",children:l}),(0,s.jsx)("div",{className:"text-[#666] text-[10px]",children:c})]}),(0,s.jsx)("div",{className:"mt-[10px]",children:(0,s.jsx)(x.Z,{labels:o})})]}),(0,s.jsxs)("div",{className:"flex flex-col items-end justify-between overflow-visible",children:[(0,s.jsx)(j,{id:i,friendsid:a,children:(0,s.jsx)(p.Z,{children:(0,s.jsx)(f.Z,{className:"text-[15px]"})})}),(0,s.jsx)("div",{className:"text-[#222] text-[10px]",children:(0,h.pC)(g)})]})]}),(0,s.jsx)("div",{className:"mt-[12px]",children:(0,s.jsx)("p",{className:"py-[10px] px-[6px] text-[10px] bg-oMainColor rounded-[6px]",children:r||"Hi, 我想认识一下你！"})})]})]})};function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Z.apply(this,arguments)}const w=function(){var e,t=(0,c.Z)().userInfo,n=(0,i.Z)(),u=(n.tabIndex,n.handleTabIndexChange,n.handleBack,(0,l.useQuery)(["getMessage",null==t?void 0:t.id],(function(){return a.Z.getMessage({userId:t.id})}),{enabled:Number(null==t?void 0:t.id)>0}));return u.isLoading?(0,s.jsx)("div",{className:"text-center mt-[220px]",children:"正在加载"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{title:"我的消息"}),(0,s.jsx)("div",{className:"h-full",children:(0,s.jsxs)("div",{className:"pt-[60px] px-[30px] h-full flex flex-col",children:[(null==u?void 0:u.data)&&(null==u?void 0:u.data.map((function(e,t){return(0,r.createElement)(N,Z({},u.data[t],{key:t,className:t>0?"mt-[20px]":""}))}))),!(null==u||null==(e=u.data)?void 0:e.length)&&(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center mt-[30px]",children:[(0,s.jsx)("img",{src:d,alt:"noData",className:"w-[240px]"}),(0,s.jsx)("p",{children:"暂无数据..."})]})]})})]})}},6438:(e,t,n)=>{n.d(t,{m:()=>i,w:()=>r});var s=n(6117),r=(0,s.sn)(null),i=(0,s.sn)([])},7293:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(2863),r="http://114.55.67.80:8081/w3socialLogin";const i=function(){function e(){}return e.getUserInfo=function(){return s.Z.get(r+"/user/getUserInfo")},e.updateUserInfo=function(e){return s.Z.post(r+"/user/updateUserInfo",e)},e.logout=function(){return s.Z.get(r+"/user/logout")},e}();var a=n(5107),l=n(1202),c=n(6438);const d=function(){var e=(0,l.KO)(c.w),t=e[0],n=e[1];return{userInfo:t,GetUserInfoQuery:(0,a.useQuery)("getUserInfo",i.getUserInfo,{onSuccess:function(e){(null==e?void 0:e.id)&&n((function(t){return e}))},enabled:!(null==t?void 0:t.id)})}}},5910:(e,t,n)=>{n.d(t,{SF:()=>a,gj:()=>i,pC:()=>l,qs:()=>c});var s=n(1023),r=n(2470),i=function(e,t){if(Array.isArray(t))return t[0]+" - "+t[1];for(var n="",s=0;s<r.q.length;s+=1){var i=r.q[s],a=i.name,l=i.items,c=void 0===l?[]:l;if(e===a)for(var d=0;d<c.length;d+=1){var o=c[d],u=o.label;if(o.value===t){n=u;break}}}return n},a=function(e){return 0===e||e[0]===r.x.age[0]&&e[1]===r.x.age[1]},l=function(e){if(!e)return"今天";var t=new Date(e),n=(new Date).getTime()-t.getTime(),r=Math.floor(n/1e3);if(r>=s.RU){var i=Math.floor(r/s.RU);return i>=14?"两周前":i>=7?"一周前":i>0?i+"天前":"今天"}var a=Math.floor(r/3600);return a>0?a+"小时前":Math.floor(r/60)>0?Math.floor(r/60)+"分钟前":"刚刚"};function c(e){for(var t="",n="",s=0;s<e.length;s++)s<5?t+=e.charAt(s):s>=e.length-4&&(n+=e.charAt(s));return t+"..."+n}}}]);