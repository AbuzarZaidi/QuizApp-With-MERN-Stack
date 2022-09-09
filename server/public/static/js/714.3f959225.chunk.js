"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[714],{4596:function(e,t,n){n.r(t),n.d(t,{deleteQuiz:function(){return h},readQuiz:function(){return u},readUserQuizes:function(){return p}});var r=n(5861),a=n(7757),o=n.n(a),i=n(4569),s=n.n(i),c="https://worldofquiz.herokuapp.com/read",l=function(e){return s().get("".concat(c,"/").concat(e))},d=function(e,t){return s().delete("".concat(c,"/").concat(e,"~").concat(t))},u=function(){var e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get(c);case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(o().mark((function e(t,n){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t,n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()},4714:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var r=n(5861),a=n(885),o=n(7757),i=n.n(o),s=n(2791),c=n(3366),l=n(7462),d=n(8182),u=n(4419);var p=s.createContext(),h=n(1402),f=n(6934),v=n(1217),x=n(5878);function g(e){return(0,v.Z)("MuiTable",e)}(0,x.Z)("MuiTable",["root","stickyHeader"]);var m=n(184),Z=["className","component","padding","size","stickyHeader"],y=(0,f.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,n=e.ownerState;return(0,l.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,l.Z)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},n.stickyHeader&&{borderCollapse:"separate"})})),b="table",j=s.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiTable"}),r=n.className,a=n.component,o=void 0===a?b:a,i=n.padding,f=void 0===i?"normal":i,v=n.size,x=void 0===v?"medium":v,j=n.stickyHeader,w=void 0!==j&&j,k=(0,c.Z)(n,Z),C=(0,l.Z)({},n,{component:o,padding:f,size:x,stickyHeader:w}),z=function(e){var t=e.classes,n={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,u.Z)(n,g,t)}(C),T=s.useMemo((function(){return{padding:f,size:x,stickyHeader:w}}),[f,x,w]);return(0,m.jsx)(p.Provider,{value:T,children:(0,m.jsx)(y,(0,l.Z)({as:o,role:o===b?null:"table",ref:t,className:(0,d.Z)(z.root,r),ownerState:C},k))})}));var w=s.createContext();function k(e){return(0,v.Z)("MuiTableBody",e)}(0,x.Z)("MuiTableBody",["root"]);var C=["className","component"],z=(0,f.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),T={variant:"body"},R="tbody",M=s.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiTableBody"}),r=n.className,a=n.component,o=void 0===a?R:a,i=(0,c.Z)(n,C),s=(0,l.Z)({},n,{component:o}),p=function(e){var t=e.classes;return(0,u.Z)({root:["root"]},k,t)}(s);return(0,m.jsx)(w.Provider,{value:T,children:(0,m.jsx)(z,(0,l.Z)({className:(0,d.Z)(p.root,r),as:o,ref:t,role:o===R?null:"rowgroup",ownerState:s},i))})})),H=n(4942),N=n(2065),S=n(4036);function P(e){return(0,v.Z)("MuiTableCell",e)}var A=(0,x.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),W=["align","className","component","padding","scope","size","sortDirection","variant"],D=(0,f.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["size".concat((0,S.Z)(n.size))],"normal"!==n.padding&&t["padding".concat((0,S.Z)(n.padding))],"inherit"!==n.align&&t["align".concat((0,S.Z)(n.align))],n.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,n=e.ownerState;return(0,l.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?(0,N.$n)((0,N.Fq)(t.palette.divider,1),.88):(0,N._j)((0,N.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===n.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===n.variant&&{color:t.palette.text.primary},"footer"===n.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===n.size&&(0,H.Z)({padding:"6px 16px"},"&.".concat(A.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===n.padding&&{width:48,padding:"0 0 0 4px"},"none"===n.padding&&{padding:0},"left"===n.align&&{textAlign:"left"},"center"===n.align&&{textAlign:"center"},"right"===n.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===n.align&&{textAlign:"justify"},n.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),Q=s.forwardRef((function(e,t){var n,r=(0,h.Z)({props:e,name:"MuiTableCell"}),a=r.align,o=void 0===a?"inherit":a,i=r.className,f=r.component,v=r.padding,x=r.scope,g=r.size,Z=r.sortDirection,y=r.variant,b=(0,c.Z)(r,W),j=s.useContext(p),k=s.useContext(w),C=k&&"head"===k.variant;n=f||(C?"th":"td");var z=x;!z&&C&&(z="col");var T=y||k&&k.variant,R=(0,l.Z)({},r,{align:o,component:n,padding:v||(j&&j.padding?j.padding:"normal"),size:g||(j&&j.size?j.size:"medium"),sortDirection:Z,stickyHeader:"head"===T&&j&&j.stickyHeader,variant:T}),M=function(e){var t=e.classes,n=e.variant,r=e.align,a=e.padding,o=e.size,i={root:["root",n,e.stickyHeader&&"stickyHeader","inherit"!==r&&"align".concat((0,S.Z)(r)),"normal"!==a&&"padding".concat((0,S.Z)(a)),"size".concat((0,S.Z)(o))]};return(0,u.Z)(i,P,t)}(R),H=null;return Z&&(H="asc"===Z?"ascending":"descending"),(0,m.jsx)(D,(0,l.Z)({as:n,ref:t,className:(0,d.Z)(M.root,i),"aria-sort":H,scope:z,ownerState:R},b))})),B=Q;function q(e){return(0,v.Z)("MuiTableContainer",e)}(0,x.Z)("MuiTableContainer",["root"]);var O=["className","component"],F=(0,f.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),$=s.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiTableContainer"}),r=n.className,a=n.component,o=void 0===a?"div":a,i=(0,c.Z)(n,O),s=(0,l.Z)({},n,{component:o}),p=function(e){var t=e.classes;return(0,u.Z)({root:["root"]},q,t)}(s);return(0,m.jsx)(F,(0,l.Z)({ref:t,as:o,className:(0,d.Z)(p.root,r),ownerState:s},i))}));function L(e){return(0,v.Z)("MuiTableHead",e)}(0,x.Z)("MuiTableHead",["root"]);var E=["className","component"],I=(0,f.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),U={variant:"head"},G="thead",J=s.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiTableHead"}),r=n.className,a=n.component,o=void 0===a?G:a,i=(0,c.Z)(n,E),s=(0,l.Z)({},n,{component:o}),p=function(e){var t=e.classes;return(0,u.Z)({root:["root"]},L,t)}(s);return(0,m.jsx)(w.Provider,{value:U,children:(0,m.jsx)(I,(0,l.Z)({as:o,className:(0,d.Z)(p.root,r),ref:t,role:o===G?null:"rowgroup",ownerState:s},i))})}));function X(e){return(0,v.Z)("MuiTableRow",e)}var _=(0,x.Z)("MuiTableRow",["root","selected","hover","head","footer"]),K=["className","component","hover","selected"],V=(0,f.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.head&&t.head,n.footer&&t.footer]}})((function(e){var t,n=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,H.Z)(t,"&.".concat(_.hover,":hover"),{backgroundColor:(n.vars||n).palette.action.hover}),(0,H.Z)(t,"&.".concat(_.selected),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,N.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity),"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,N.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity)}}),t})),Y=s.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiTableRow"}),r=n.className,a=n.component,o=void 0===a?"tr":a,i=n.hover,p=void 0!==i&&i,f=n.selected,v=void 0!==f&&f,x=(0,c.Z)(n,K),g=s.useContext(w),Z=(0,l.Z)({},n,{component:o,hover:p,selected:v,head:g&&"head"===g.variant,footer:g&&"footer"===g.variant}),y=function(e){var t=e.classes,n={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,u.Z)(n,X,t)}(Z);return(0,m.jsx)(V,(0,l.Z)({as:o,ref:t,className:(0,d.Z)(y.root,r),role:"tr"===o?null:"row",ownerState:Z},x))})),ee=Y,te=n(703),ne=n(890),re=n(4554),ae=n(4518),oe=function(e){var t=e.data,n=e.reset,r=e.show;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(re.Z,{sx:{display:"flex",justifyContent:"center",mt:3},children:(0,m.jsx)($,{component:te.Z,sx:{width:"95%"},children:(0,m.jsxs)(j,{sx:{minWidth:850},size:"small","aria-label":"a dense table",children:[r&&(0,m.jsx)(J,{children:(0,m.jsxs)(ee,{children:[(0,m.jsx)(B,{children:(0,m.jsx)(ne.Z,{sx:{fontWeight:"bold"},children:"Name"})}),(0,m.jsx)(B,{align:"right",children:(0,m.jsx)(ne.Z,{sx:{fontWeight:"bold"},children:"Date"})}),(0,m.jsx)(B,{align:"right",children:(0,m.jsxs)(ne.Z,{sx:{fontWeight:"bold"},children:["Correct"," "]})}),(0,m.jsx)(B,{align:"right",children:(0,m.jsx)(ne.Z,{sx:{fontWeight:"bold"},children:"Total Question"})})]})}),(0,m.jsx)(M,{children:t.map((function(e,t){return(0,m.jsxs)(ee,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,m.jsx)(B,{component:"th",scope:"row",children:e.userName}),(0,m.jsx)(B,{align:"right",children:e.Date}),(0,m.jsx)(B,{align:"right",sx:{textTransform:"capitalize"},children:e.CorrectAnswer}),(0,m.jsx)(B,{align:"right",children:e.TotalQuestion})]},t)}))})]})})}),r&&(0,m.jsx)(re.Z,{sx:{display:"flex",justifyContent:"center",mt:3},children:(0,m.jsx)(ae.Z,{variant:"contained",sx:{width:"25%"},onClick:function(){return n()},children:"Back"})})]})},ie=n(9434),se=n(3239),ce=function(e){return(0,m.jsxs)(ee,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,m.jsx)(B,{component:"th",scope:"row",children:e.name}),(0,m.jsx)(B,{align:"right",children:e.date}),(0,m.jsx)(B,{align:"right",sx:{textTransform:"capitalize"},children:e.mode}),(0,m.jsx)(B,{align:"right",children:e.players}),(0,m.jsx)(B,{align:"right",children:(0,m.jsx)(ae.Z,{variant:"contained",onClick:function(){return e.openQuizAttempts(e.no)},children:"Open"})})]},e.name)},le=n(7391),de=n(1184),ue=n(5682),pe=n(8519),he=n(2466),fe=["component","direction","spacing","divider","children"];function ve(e,t){var n=s.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,a){return e.push(r),a<n.length-1&&e.push(s.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var xe=(0,f.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r=(0,l.Z)({display:"flex"},(0,de.k9)({theme:n},(0,de.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var a=(0,ue.hB)(n),o=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),i=(0,de.P$)({values:t.direction,base:o}),s=(0,de.P$)({values:t.spacing,base:o});r=(0,he.Z)(r,(0,de.k9)({theme:n},s,(function(e,n){return{"& > :not(style) + :not(style)":(0,H.Z)({margin:0},"margin".concat((r=n?i[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,ue.NA)(a,e))};var r})))}return r})),ge=s.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiStack"}),r=(0,pe.Z)(n),a=r.component,o=void 0===a?"div":a,i=r.direction,s=void 0===i?"column":i,d=r.spacing,u=void 0===d?0:d,p=r.divider,f=r.children,v=(0,c.Z)(r,fe),x={direction:s,spacing:u};return(0,m.jsx)(xe,(0,l.Z)({as:o,ownerState:x,ref:t},v,{children:p?ve(f,p):f}))})),me=ge,Ze=n(4596).readUserQuizes,ye=function(){document.title="Reports-QuizWorld";var e=(0,ie.v9)((function(e){return e.authData.id})),t=(0,s.useState)([]),n=(0,a.Z)(t,2),o=n[0],c=n[1],l=(0,s.useState)(!1),d=(0,a.Z)(l,2),u=d[0],p=d[1],h=(0,s.useState)(!1),f=(0,a.Z)(h,2),v=f[0],x=f[1],g=(0,s.useState)([]),Z=(0,a.Z)(g,2),y=Z[0],b=Z[1],w=function(e){p(!1),x(!0),b(o[e].attempts)};return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ze(e);case 2:(n=t.sent).length>0&&(p(!0),c(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[c,e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(re.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,m.jsx)(me,{spacing:1,sx:{width:300,mr:3,mt:3},children:(0,m.jsx)(le.Z,{id:"standard-search",label:"Search field",type:"search",variant:"standard"})})}),(0,m.jsx)(re.Z,{sx:{display:"flex",justifyContent:"center",mt:3},children:(0,m.jsx)($,{component:te.Z,sx:{width:"95%"},children:(0,m.jsxs)(j,{sx:{minWidth:850,TableLayout:"fixed"},size:"small","aria-label":"a dense table",children:[u&&!v&&(0,m.jsx)(J,{children:(0,m.jsxs)(ee,{children:[(0,m.jsx)(B,{children:(0,m.jsx)(ne.Z,{sx:{fontWeight:"bold"},children:"Name"})}),(0,m.jsx)(B,{align:"right",children:(0,m.jsx)(ne.Z,{sx:{fontWeight:"bold"},children:"Date"})}),(0,m.jsx)(B,{align:"right",children:(0,m.jsx)(ne.Z,{sx:{fontWeight:"bold"},children:"Game Mode"})}),(0,m.jsx)(B,{align:"right",children:(0,m.jsx)(ne.Z,{sx:{fontWeight:"bold"},children:"No. of Player"})})]})}),(0,m.jsx)(M,{children:u&&!v&&o.map((function(e,t){return(0,m.jsx)(ce,{no:t,openQuizAttempts:w,name:e.quizDetail.title,mode:e.quizDetail.quizType,players:e.attempts.length,date:e.creationDate},t)}))})]})})}),u||v||0===o.length?"":(0,m.jsx)(re.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,m.jsx)(se.Z,{})}),u||v||0!==o.length?"":(0,m.jsx)(re.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,m.jsx)(ne.Z,{sx:{textTransform:"capitalize"},children:"It looks very empty in here, go ahead and create a Quiz."})}),!u&&y?(0,m.jsx)(oe,{data:y,reset:function(e){b([]),p(!0),x(!1)},show:v}):""]})}}}]);
//# sourceMappingURL=714.3f959225.chunk.js.map