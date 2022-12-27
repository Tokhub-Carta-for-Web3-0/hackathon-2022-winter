"use strict";(self.webpackChunkw3social_interface=self.webpackChunkw3social_interface||[]).push([[968],{2513:(e,a,t)=>{t.d(a,{Z:()=>$});var o=t(4280),n=t(7161),i=t(959),r=t(5924),l=t(5754),s=t(945),c=t(8414),d=t(1471),p=t(7683),u=t(1138),v=t(1336),x=t(4379),h=t(83);function m(e){return(0,h.Z)("MuiButton",e)}const b=(0,x.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const g=i.createContext({});var S=t(1527);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],z=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),y=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],a[`${t.variant}${(0,v.Z)(t.color)}`],a[`size${(0,v.Z)(t.size)}`],a[`${t.variant}Size${(0,v.Z)(t.size)}`],"inherit"===t.color&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth]}})((({theme:e,ownerState:a})=>{var t,o;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,n.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===a.variant&&"secondary"===a.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(o=e.palette).getContrastText)?void 0:t.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),w=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.startIcon,a[`iconSize${(0,v.Z)(t.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},z(e)))),Z=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.endIcon,a[`iconSize${(0,v.Z)(t.size)}`]]}})((({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},z(e)))),$=i.forwardRef((function(e,a){const t=i.useContext(g),c=(0,l.Z)(t,e),d=(0,p.Z)({props:c,name:"MuiButton"}),{children:u,color:x="primary",component:h="button",className:b,disabled:z=!1,disableElevation:$=!1,disableFocusRipple:C=!1,endIcon:I,focusVisibleClassName:k,fullWidth:R=!1,size:N="medium",startIcon:j,type:W,variant:E="text"}=d,M=(0,o.Z)(d,f),B=(0,n.Z)({},d,{color:x,component:h,disabled:z,disableElevation:$,disableFocusRipple:C,fullWidth:R,size:N,type:W,variant:E}),F=(e=>{const{color:a,disableElevation:t,fullWidth:o,size:i,variant:r,classes:l}=e,c={root:["root",r,`${r}${(0,v.Z)(a)}`,`size${(0,v.Z)(i)}`,`${r}Size${(0,v.Z)(i)}`,"inherit"===a&&"colorInherit",t&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(i)}`]},d=(0,s.Z)(c,m,l);return(0,n.Z)({},l,d)})(B),L=j&&(0,S.jsx)(w,{className:F.startIcon,ownerState:B,children:j}),T=I&&(0,S.jsx)(Z,{className:F.endIcon,ownerState:B,children:I});return(0,S.jsxs)(y,(0,n.Z)({ownerState:B,className:(0,r.Z)(t.className,F.root,b),component:h,disabled:z,focusRipple:!C,focusVisibleClassName:(0,r.Z)(F.focusVisible,k),ref:a,type:W},M,{classes:F,children:[L,u,T]}))}))},7496:(e,a,t)=>{t.r(a),t.d(a,{default:()=>s});var o=t(1527),n=t(2513),i=t(9954),r=t(9347);const l=t.p+"assets/aa125834.png";const s=function(){return(0,o.jsxs)("div",{className:" h-full",children:[(0,o.jsxs)("div",{className:"h-[300px] bg-logoBg relative flex flex-col items-center justify-center",children:[(0,o.jsx)("img",{src:i,alt:"logo",className:"w-[140px] mt-[60px]"}),(0,o.jsx)("img",{className:"w-[120px] mt-[30px]",src:l,alt:"finishIcon"})]}),(0,o.jsx)("div",{className:"font-black text-center mt-[35px]",children:"感谢您的填写"}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-content",children:[(0,o.jsx)("div",{className:"text-[14px] text-[#515151] pl-[25px] pr-[25px] mt-[52px]",children:(0,o.jsx)("p",{className:"text-center",children:"您可以开始探索Web3 Social啦，其他您的获得全新的社交体验 "})}),(0,o.jsx)(r.rU,{to:"/main",children:(0,o.jsx)(n.Z,{variant:"contained",className:" w-[163px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]",children:"我知道啦"})})]})]})}},9954:(e,a,t)=>{e.exports=t.p+"assets/c5c8b9d2.png"}}]);