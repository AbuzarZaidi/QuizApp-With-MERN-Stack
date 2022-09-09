"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[676],{4596:function(t,e,i){i.r(e),i.d(e,{deleteQuiz:function(){return m},readQuiz:function(){return d},readUserQuizes:function(){return f}});var n=i(5861),r=i(7757),o=i.n(r),a=i(4569),s=i.n(a),c="https://worldofquiz.herokuapp.com/read",l=function(t){return s().get("".concat(c,"/").concat(t))},u=function(t,e){return s().delete("".concat(c,"/").concat(t,"~").concat(e))},d=function(){var t=(0,n.Z)(o().mark((function t(){var e,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get(c);case 3:return e=t.sent,i=e.data,t.abrupt("return",i);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(o().mark((function t(e){var i,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l(e);case 3:return i=t.sent,n=i.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,n.Z)(o().mark((function t(e,i){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u(e,i);case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,i){return t.apply(this,arguments)}}()},4676:function(t,e,i){i.r(e),i.d(e,{default:function(){return Y}});var n=i(5861),r=i(885),o=i(7757),a=i.n(o),s=i(2791),c=i(4942),l=i(9434),u=i(2030),d=i(3504),f=i(6934),m=i(3718),p=i(890),h=i(4721),x=i(4518),v=i(7621),Z=i(3366),g=i(7462),j=i(8182),y=i(4419),b=i(1402),C=i(1217),w=i(5878);function z(t){return(0,C.Z)("MuiCardMedia",t)}(0,w.Z)("MuiCardMedia",["root","media","img"]);var k=i(184),q=["children","className","component","image","src","style"],M=(0,f.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(t,e){var i=t.ownerState,n=i.isMediaComponent,r=i.isImageComponent;return[e.root,n&&e.media,r&&e.img]}})((function(t){var e=t.ownerState;return(0,g.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})})),D=["video","audio","picture","iframe","img"],T=["picture","img"],S=s.forwardRef((function(t,e){var i=(0,b.Z)({props:t,name:"MuiCardMedia"}),n=i.children,r=i.className,o=i.component,a=void 0===o?"div":o,s=i.image,c=i.src,l=i.style,u=(0,Z.Z)(i,q),d=-1!==D.indexOf(a),f=!d&&s?(0,g.Z)({backgroundImage:'url("'.concat(s,'")')},l):l,m=(0,g.Z)({},i,{component:a,isMediaComponent:d,isImageComponent:-1!==T.indexOf(a)}),p=function(t){var e=t.classes,i={root:["root",t.isMediaComponent&&"media",t.isImageComponent&&"img"]};return(0,y.Z)(i,z,e)}(m);return(0,k.jsx)(M,(0,g.Z)({className:(0,j.Z)(p.root,r),as:a,role:!d&&s?"img":void 0,ref:e,style:f,ownerState:m,src:d?s||c:void 0},u,{children:n}))})),N=S,R=i(9504),A=i(4554);function H(t){return(0,C.Z)("MuiCardActionArea",t)}var P=(0,w.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),Q=i(3701),V=["children","className","focusVisibleClassName"],I=(0,f.ZP)(Q.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(t){var e,i=t.theme;return e={display:"block",textAlign:"inherit",width:"100%"},(0,c.Z)(e,"&:hover .".concat(P.focusHighlight),{opacity:(i.vars||i).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,c.Z)(e,"&.".concat(P.focusVisible," .").concat(P.focusHighlight),{opacity:(i.vars||i).palette.action.focusOpacity}),e})),L=(0,f.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(t,e){return e.focusHighlight}})((function(t){var e=t.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}})),O=s.forwardRef((function(t,e){var i=(0,b.Z)({props:t,name:"MuiCardActionArea"}),n=i.children,r=i.className,o=i.focusVisibleClassName,a=(0,Z.Z)(i,V),s=i,c=function(t){var e=t.classes;return(0,y.Z)({root:["root"],focusHighlight:["focusHighlight"]},H,e)}(s);return(0,k.jsxs)(I,(0,g.Z)({className:(0,j.Z)(c.root,r),focusVisibleClassName:(0,j.Z)(o,c.focusVisible),ref:e,ownerState:s},a,{children:[n,(0,k.jsx)(L,{className:c.focusHighlight,ownerState:s})]}))})),B={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,bgcolor:"background.paper",boxShadow:24,p:4},E=(0,f.ZP)("div")((function(t){var e=t.theme;return(0,c.Z)({padding:e.spacing(1)},e.breakpoints.down("md"),{width:350})}));function F(t){var e=(0,l.I0)(),i=s.useState(!1),n=(0,r.Z)(i,2),o=n[0],a=n[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.Z,{open:o,onClose:function(){return a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,k.jsxs)(E,{sx:B,children:[(0,k.jsxs)(p.Z,{id:"modal-modal-title",variant:"h5",component:"h2",sx:{display:"flex",justifyContent:"center",textTransform:"capitalize"},children:["Title:",t.title]}),(0,k.jsxs)(p.Z,{id:"modal-modal-description",sx:{mt:2,textTransform:"capitalize"},children:[(0,k.jsx)("b",{children:" Description:"})," ",t.description]}),(0,k.jsx)(h.Z,{light:!0}),(0,k.jsxs)(p.Z,{id:"modal-modal-description",sx:{mt:2,textTransform:"capitalize"},children:[(0,k.jsx)("b",{children:" Type:"})," ",t.quizType]}),(0,k.jsx)(h.Z,{light:!0}),(0,k.jsxs)(p.Z,{id:"modal-modal-description",sx:{mt:2,textTransform:"capitalize"},children:[(0,k.jsx)("b",{children:" TimeLimit:"})," ",t.timeLimit,"sec"]}),(0,k.jsx)(h.Z,{light:!0}),(0,k.jsxs)(p.Z,{id:"modal-modal-description",sx:{mt:2,textTransform:"capitalize"},children:[(0,k.jsx)("b",{children:" Visibility:"})," ",t.visibility]}),(0,k.jsx)(h.Z,{light:!0}),(0,k.jsxs)(p.Z,{id:"modal-modal-description",sx:{mt:2,textTransform:"capitalize"},children:[(0,k.jsx)("b",{children:" Category:"})," ",t.category]}),(0,k.jsx)(h.Z,{light:!0}),(0,k.jsx)(x.Z,{variant:"contained",to:"/startquiz",component:d.rU,sx:{display:"flex",justifyContent:"center",mt:3,"&:hover":{color:"#ffffff"}},onClick:function(){e((0,u.w)(t.quiz))},children:"Start Quiz"})]})}),(0,k.jsxs)(v.Z,{sx:{maxWidth:345,mb:3},children:[(0,k.jsxs)(O,{children:[(0,k.jsx)(N,{component:"img",height:"140",image:t.img?"http://localhost:5000/".concat(t.img):"https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",alt:"quiz image"}),(0,k.jsxs)(R.Z,{children:[(0,k.jsxs)(p.Z,{gutterBottom:!0,variant:"h6",component:"div",children:[t.title.slice(0,30),"..."]}),(0,k.jsxs)(p.Z,{variant:"body2",color:"text.secondary",children:[t.description.slice(0,50),"..."]})]})]}),(0,k.jsx)(A.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,k.jsx)(x.Z,{variant:"contained",onClick:function(){return a(!0)},sx:{width:"100%"},children:"Start Quiz"})})]})]})}var W=i(3053),G=i(4387),U=i(1889),_=i(3239),K=i(4596).readQuiz,Y=function(){document.title="Discover-QuizWorld";var t=(0,s.useState)(""),e=(0,r.Z)(t,2),i=e[0],o=e[1],c=(0,s.useState)(!1),l=(0,r.Z)(c,2),u=l[0],d=l[1],f=(0,s.useState)(null),m=(0,r.Z)(f,2),v=m[0],Z=m[1],g=(0,s.useState)(!1),j=(0,r.Z)(g,2),y=j[0],b=j[1],C=(0,s.useState)(null),w=(0,r.Z)(C,2),z=w[0],q=w[1],M=Boolean(z),D=function(){var t=(0,n.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d(!0),b(!1),setTimeout((function(){o(e),b(!0)}),1e3),q(null);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K();case 2:e=t.sent,b(!0),Z(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[Z]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(A.Z,{sx:{display:"flex",justifyContent:"flex-start",ml:3,mt:3},children:[(0,k.jsxs)(x.Z,{id:"demo-positioned-button","aria-controls":M?"demo-positioned-menu":void 0,"aria-haspopup":"true","aria-expanded":M?"true":void 0,onClick:function(t){q(t.currentTarget)},children:[(0,k.jsx)("img",{src:"/icons/filter.png",alt:"",height:"25px",width:"25px"}),(0,k.jsx)(p.Z,{variant:"button",component:"div",sx:{display:"flex",justifyContent:"center",color:"#000000",fontWeight:"bold",textTransform:"capitalize"},children:"Filters"})]}),(0,k.jsxs)(W.Z,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:z,open:M,onClose:D,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[(0,k.jsx)(G.Z,{onClick:function(){D("education")},children:"Education"}),(0,k.jsx)(G.Z,{onClick:function(){D("entertainment")},children:"Entertainment"}),(0,k.jsx)(G.Z,{onClick:function(){D("sports")},children:"Sports"}),(0,k.jsx)(G.Z,{onClick:function(){D("technical")},children:"Technical"}),(0,k.jsx)(G.Z,{onClick:function(){D("programming")},children:"Programming"}),(0,k.jsx)(G.Z,{onClick:function(){D("generalknowledge")},children:"General Knowledge"}),(0,k.jsx)(G.Z,{onClick:function(){D("interviewquestions")},children:"Interview Questions"}),(0,k.jsx)(G.Z,{onClick:function(){D("other")},children:"other"})]})]}),(0,k.jsx)(A.Z,{sx:{display:"flex",justifyContent:"flex-start",ml:3,mt:1},children:u&&(0,k.jsxs)(p.Z,{variant:"h6",component:"div",sx:{display:"flex",justifyContent:"center",color:"#000000",fontWeight:"bold",textTransform:"capitalize"},children:["Category: ",i]})}),(0,k.jsx)(h.Z,{}),(0,k.jsx)(A.Z,{sx:{display:"flex",justifyContent:"center",height:"120vh",mb:3},children:y?(0,k.jsx)(A.Z,{sx:{flexGrow:1,mt:3,ml:5,mb:3},children:(0,k.jsxs)(U.ZP,{container:!0,spacing:2,children:[u&&v.filter((function(t){return t.quizDetail.category===i&&"public"===t.quizDetail.visibility})).map((function(t){return(0,k.jsx)(U.ZP,{item:!0,xs:10,md:4,children:(0,k.jsx)(F,{quizType:t.quizDetail.quizType,timeLimit:t.quizDetail.timeLimit,title:t.quizDetail.title,description:t.quizDetail.description,quiz:t,id:t._id,visibility:t.quizDetail.visibility,category:t.quizDetail.category,img:t.image})},t)})),!u&&v.filter((function(t){return"public"===t.quizDetail.visibility})).map((function(t,e){return(0,k.jsx)(U.ZP,{item:!0,xs:10,md:4,children:(0,k.jsx)(F,{quizType:t.quizDetail.quizType,timeLimit:t.quizDetail.timeLimit,title:t.quizDetail.title,description:t.quizDetail.description,quiz:t,id:t._id,visibility:t.quizDetail.visibility,category:t.quizDetail.category,img:t.image})},e)}))]})}):(0,k.jsx)(A.Z,{children:(0,k.jsx)(_.Z,{})})})]})}},9504:function(t,e,i){i.d(e,{Z:function(){return h}});var n=i(7462),r=i(3366),o=i(2791),a=i(8182),s=i(4419),c=i(6934),l=i(1402),u=i(1217);function d(t){return(0,u.Z)("MuiCardContent",t)}(0,i(5878).Z)("MuiCardContent",["root"]);var f=i(184),m=["className","component"],p=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),h=o.forwardRef((function(t,e){var i=(0,l.Z)({props:t,name:"MuiCardContent"}),o=i.className,c=i.component,u=void 0===c?"div":c,h=(0,r.Z)(i,m),x=(0,n.Z)({},i,{component:u}),v=function(t){var e=t.classes;return(0,s.Z)({root:["root"]},d,e)}(x);return(0,f.jsx)(p,(0,n.Z)({as:u,className:(0,a.Z)(v.root,o),ownerState:x,ref:e},h))}))},7621:function(t,e,i){i.d(e,{Z:function(){return x}});var n=i(7462),r=i(3366),o=i(2791),a=i(8182),s=i(4419),c=i(6934),l=i(1402),u=i(703),d=i(1217);function f(t){return(0,d.Z)("MuiCard",t)}(0,i(5878).Z)("MuiCard",["root"]);var m=i(184),p=["className","raised"],h=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),x=o.forwardRef((function(t,e){var i=(0,l.Z)({props:t,name:"MuiCard"}),o=i.className,c=i.raised,u=void 0!==c&&c,d=(0,r.Z)(i,p),x=(0,n.Z)({},i,{raised:u}),v=function(t){var e=t.classes;return(0,s.Z)({root:["root"]},f,e)}(x);return(0,m.jsx)(h,(0,n.Z)({className:(0,a.Z)(v.root,o),elevation:u?8:void 0,ref:e,ownerState:x},d))}))}}]);
//# sourceMappingURL=676.d27dbdb2.chunk.js.map