(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{279:function(e,t,a){e.exports=a(559)},306:function(e,t,a){},556:function(e,t,a){},558:function(e,t,a){},559:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(20),c=a(182),s=a(76),d=a(260),u=a.n(d),m=a(261),p=a(69),h=Object(s.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth_user":return Object(p.a)(Object(p.a)({},e),{},{userData:t.payload});case"register_user":return Object(p.a)(Object(p.a)({},e),{},{register:t.payload});case"login_user":return Object(p.a)(Object(p.a)({},e),{},{loginSucces:t.payload});case"logout_user":return Object(p.a)({},e);default:return e}}}),f=a(19),g=a(561),y=a(66),E=a(24),b=a.n(E);function v(){return{type:"auth_user",payload:b.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}function x(e){return{type:"logout_user",payload:b.a.post("".concat("/api/users","/logout"),e).then((function(e){return e.data}))}}var w=a(90),j=a(16),O=a(43),C=a(563),S=a(93),k=a(568),I=a(567),N=a(570),_=(a(306),a(571)),B=a(572),D=a(573),T=g.a.Sider;var P=function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(""),c=Object(j.a)(o,2),s=c[0],d=c[1],u=Object(n.useState)([]),m=Object(j.a)(u,2),p=m[0],h=m[1],f=Object(n.useState)(0),g=Object(j.a)(f,2),E=g[0],v=g[1];Object(n.useEffect)((function(){x()}),[]);var x=function(){var t={id:e.userData};b.a.post("/api/categorys/category",t).then((function(e){e.data.success?h(e.data.categoryNames):alert("\uce74\ud14c\uace0\ub9ac \ubaa9\ub85d\uc744 \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))},w=p.map((function(e,t){return r.a.createElement(k.a.Item,{value:e._id,key:t+1,icon:r.a.createElement(_.a,null)},r.a.createElement(B.a,null),e.category)}));return r.a.createElement(T,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)},style:{overflow:"auto",height:"100vh",position:"fixed",left:0,paddingLeft:"10px"},theme:"light",className:"sidebar"},r.a.createElement("div",{className:"logo",style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",borderBottom:"1px solid gray"}},"Y LOG"),r.a.createElement(D.a,{onClick:function(){l(!0)},style:{display:"flex",justifyContent:"flex-end",paddingRight:"15px",fontSize:"large"}}),r.a.createElement(I.a,{title:"\uce74\ud14c\uace0\ub9ac \ucd94\uac00",visible:i,onOk:function(){if(!s)return alert("\uce74\ud14c\uace0\ub9ac \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694");var t={id:e.userData,category:s};b.a.post("/api/categorys",t).then((function(e){return e.data.success?(h(e.data.categoryNames),d(""),alert("\uce74\ud14c\uace0\ub9ac\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")):alert(e.err)})),l(!1)},onCancel:function(){l(!1)}},r.a.createElement(N.a,{value:s,onChange:function(e){d(e.currentTarget.value)},placeholder:"\ucd94\uac00\ud560 \uce74\ud14c\uace0\ub9ac\ub97c \uc785\ub825\ud558\uc138\uc694"})),r.a.createElement(k.a,{selectedKeys:E,onClick:function(t){v(t.item.props.eventKey),e.handleCategory(t.item.props.value)},mode:"inline",defaultSelectedKeys:["0"]},w),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(y.a,{onClick:function(){v(0),e.handleCategory()}},"\uc804\uccb4\ubcf4\uae30")))},q=a(562),z=a(574);var R=function(e){return 0===e.content.images.length?r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"100px"}},r.a.createElement(z.a,{onClick:function(){e.cardHandler("detail",e.content)}})):r.a.createElement(q.a,{autoplay:!0},e.content.images.map((function(t,a){return r.a.createElement("div",{key:a,onClick:function(){e.cardHandler("detail",e.content)}},r.a.createElement("img",{style:{width:"100%",height:"100%"},src:"http://localhost:5000/".concat(t)}))})))},H=a(111),L=a.n(H),A=g.a.Header;var F=function(e){var t=e.props.match.params.userId,a=Object(o.c)((function(e){return e.user})),n=Object(o.b)();return a.userData&&a.userData._id===t?r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("div",{style:{borderBottom:"1px solid gray",height:"70px",fontSize:"30px",display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",{style:{width:"38.234px"}}),r.a.createElement("div",null,r.a.createElement(A,{className:"site-layout-background"},"YOON")),r.a.createElement("div",{style:{margin:"24px"}},r.a.createElement(y.a,{onClick:function(){console.log(e);var r=a.userData;n(x(r)).then((function(e){e.payload.success?window.location.replace("/blog/".concat(t)):alert(e.payload.err)}))}},"\ub85c\uadf8\uc544\uc6c3")))):r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("div",{style:{borderBottom:"1px solid gray",height:"70px",fontSize:"30px",display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",{style:{width:"38.234px"}}),r.a.createElement("div",null,r.a.createElement(A,{className:"site-layout-background"},"YOON")),r.a.createElement("div",{style:{margin:"24px"}},r.a.createElement(y.a,{onClick:function(){e.props.history.push("/login")}},"\ub85c\uadf8\uc778"))))},Y=a(575),M=g.a.Content;var V=function(e){var t=e.match.params.userId,a=Object(n.useState)(0),i=Object(j.a)(a,2),l=i[0],c=i[1],s=Object(n.useState)(8),d=Object(j.a)(s,2),u=d[0],m=(d[1],Object(n.useState)([])),p=Object(j.a)(m,2),h=p[0],f=p[1],E=Object(n.useState)(0),v=Object(j.a)(E,2),x=(v[0],v[1]),k=Object(n.useState)(""),I=Object(j.a)(k,2),N=I[0],_=I[1],B=Object(o.c)((function(e){return e.user}));Object(n.useEffect)((function(){D()}),[N]);var D=function(){var e={writer:t,category:N};b.a.post("/api/contents/content",e).then((function(e){e.data.success?(f(Object(w.a)(e.data.contentsInfo)),c(l+u),x(e.data.postSize)):alert("\uc0c1\ud488\uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294\ub370 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))},T=function(a,n){"edit"===a?(console.log(n),e.match.params=n,e.history.push({pathname:"/edit/".concat(n._id),state:{contentsInfo:n}})):"detail"===a&&e.history.push("/blog/".concat(t,"/").concat(n._id))},q=h.map((function(e,a){return B.userData._id===t?r.a.createElement(O.a,{key:a,lg:4,md:8,xs:24},r.a.createElement(C.a,{hoverable:!0,cover:r.a.createElement(R,{content:e,cardHandler:T}),actions:[r.a.createElement(Y.a,{key:"edit",onClick:function(){T("edit",e)}})]},r.a.createElement(L.a,{onClick:function(){T("detail",e)},title:e.title}),r.a.createElement(L.a,{description:e.textcontents,style:{overflow:"hidden",textOverflow:"ellipsis",fontSize:"small",whiteSpace:"nowrap"}}))):r.a.createElement(O.a,{key:a,lg:4,md:8,xs:20},r.a.createElement("a",{href:"/blog/".concat(t,"/").concat(e._id)},r.a.createElement(C.a,{hoverable:!0,cover:r.a.createElement(R,{content:e,cardHandler:T})},r.a.createElement(L.a,{title:e.title}),r.a.createElement(L.a,{description:e.textcontents,style:{overflow:"hidden",textOverflow:"ellipsis",fontSize:"small",whiteSpace:"nowrap"}}))))}));return r.a.createElement(g.a,{style:{height:"100vh"}},r.a.createElement(P,{userData:t,handleCategory:function(e){return function(e){_(e)}(e)}}),r.a.createElement(g.a,{className:"site-layout",style:{marginLeft:200}},r.a.createElement(F,{props:e}),r.a.createElement(M,{style:{margin:"16px"}},r.a.createElement("div",{className:"site-layout-background",style:{overflow:"auto",height:"100%",padding:24,minHeight:360}},r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"10px"}},r.a.createElement(y.a,{onClick:function(){e.history.push("/write")}},"\uae00\uc4f0\uae30")),r.a.createElement(S.a,{gutter:[16,16],style:{height:"10%"}},q)))))},X=(g.a.Header,g.a.Content);var K=function(e){var t=Object(o.c)((function(e){return e.user})),a=Object(o.b)();return t.userData&&t.userData.isAuth?r.a.createElement("div",null,r.a.createElement(g.a,{style:{height:"100vh"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"20%"}}),r.a.createElement(X,{style:{display:"flex",justifyContent:"center",height:"50%",backgroundColor:"skyblue",alignItems:"center"}},r.a.createElement("h1",{style:{fontSize:"50px"}},"Y Log")),r.a.createElement("div",{style:{height:"30%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(y.a,{onClick:function(){e.history.push("/blog/".concat(t.userData._id))},type:"primary",style:{marginRight:"5%",width:"20%",height:"20%"}},t.userData.id,"\ub2d8 \ud658\uc601\ud569\ub2c8\ub2e4 (\ube14\ub85c\uadf8\ub85c \uc774\ub3d9)"),r.a.createElement(y.a,{type:"primary",style:{width:"20%",height:"20%"},onClick:function(){var e=t.userData;a(x(e)).then((function(e){e.payload.success?window.location.replace("/"):alert(e.payload.err)}))}},"\ub85c\uadf8\uc544\uc6c3")))):r.a.createElement("div",null,r.a.createElement(g.a,{style:{height:"100vh"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"20%"}},"Header"),r.a.createElement(X,{style:{display:"flex",justifyContent:"center",height:"50%",backgroundColor:"skyblue",alignItems:"center"}},r.a.createElement("h1",{style:{fontSize:"50px"}},"Y Log")),r.a.createElement("div",{style:{height:"30%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(y.a,{type:"primary",style:{marginRight:"5%",width:"20%",height:"20%"},onClick:function(){e.history.push("/login")}},"\ub85c\uadf8\uc778"),r.a.createElement(y.a,{type:"primary",style:{width:"20%",height:"20%"},onClick:function(){e.history.push("/register")}},"\ud68c\uc6d0\uac00\uc785"))))},W=a(145),J=a(36),U=a(565),G=a(564),Q=a(10),Z=a(569),$=U.a.Title;var ee=function(e){var t=Object(o.b)(),a=!!localStorage.getItem("rememberMe"),i=Object(n.useState)(a),l=Object(j.a)(i,2),c=l[0],s=l[1],d=Object(n.useState)(""),u=Object(j.a)(d,2),m=u[0],p=u[1],h=function(){s(!c)},f=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return r.a.createElement(W.a,{initialValues:{id:f,password:""},validationSchema:J.object().shape({id:J.string().required("\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),password:J.string().min(6,"\ucd5c\uc18c 6\uc790\ub9ac\uc758 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694").required("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout((function(){var n={id:a.id,password:a.password};t(function(e){return{type:"login_user",payload:b.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===c?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):p("Check out your Account or Password again")})).catch((function(e){p("Check out your Account or Password again"),setTimeout((function(){p("")}),3e3)})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,i=(e.dirty,e.isSubmitting),l=e.handleChange,o=e.handleBlur,s=e.handleSubmit;e.handleReset;return r.a.createElement("div",{className:"app",style:{width:"100%",backgroundColor:"skyblue",display:"flex",justifyContent:"center",paddingTop:"1.5%"}},r.a.createElement($,{level:1},"\ub85c\uadf8\uc778"),r.a.createElement("form",{onSubmit:s,style:{width:"350px"}},r.a.createElement(G.a.Item,{required:!0},r.a.createElement(N.a,{id:"id",prefix:r.a.createElement(Q.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your id",type:"text",value:t.id,onChange:l,onBlur:o,className:n.id&&a.id?"text-input error":"text-input"}),n.id&&a.id&&r.a.createElement("div",{className:"input-feedback"},n.id)),r.a.createElement(G.a.Item,{required:!0},r.a.createElement(N.a,{style:{fontFamily:"-apple-system"},id:"password",prefix:r.a.createElement(Q.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:l,onBlur:o,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),m&&r.a.createElement("label",null,r.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},m)),r.a.createElement(G.a.Item,null,r.a.createElement(Z.a,{id:"rememberMe",onChange:h,checked:c},"Remember me"),r.a.createElement("div",null,r.a.createElement(y.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:i,onSubmit:s},"Log in")),r.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),"Or ",r.a.createElement("a",{href:"/register"},"register now!"))))}))},te=U.a.Title,ae={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:10}}};var ne,re=function(e){var t=Object(o.b)();return r.a.createElement(W.a,{initialValues:{name:"",id:"",password:"",confirmPassword:"",email:"",phone:""},validationSchema:J.object().shape({name:J.string().required("\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),id:J.string().required("\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),email:J.string().required("\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),phone:J.string().required("\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),password:J.string().min(6,"\ube44\ubc00\ubc88\ud638\ub294 6\uc790\ub9ac \uc774\uc0c1\uc774\uc5b4\uc57c\ud569\ub2c8\ub2e4").required("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),confirmPassword:J.string().oneOf([J.ref("password"),null],"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4").required("\ube44\ubc00\ubc88\ud638 \ud655\uc778\ub780\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694")}),onSubmit:function(a,n){var r=n.setSubmitting;console.log("\uc11c\ube0c\ubc0b"),setTimeout((function(){var n={name:a.name,id:a.id,email:a.email,phone:a.phone,password:a.password};t(function(e){return{type:"register_user",payload:b.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}(n)).then((function(t){t.payload.success?e.history.push("/login"):alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")})),r(!1)}),500)}},(function(e){var t=e.values,a=e.touched,n=e.errors,i=(e.dirty,e.isSubmitting),l=e.handleChange,o=e.handleBlur,c=e.handleSubmit;e.handleReset;return r.a.createElement("div",{className:"app",style:{width:"100%",backgroundColor:"skyblue",display:"flex",justifyContent:"center",paddingTop:"1.5%"}},r.a.createElement(te,{level:1},"\ud68c\uc6d0\uac00\uc785"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{style:{maxWidth:"375px",width:"100%",backgroundColor:"skyblue"},onSubmit:c},r.a.createElement(G.a.Item,{required:!0,label:"Name"},r.a.createElement(N.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:l,onBlur:o,className:n.name&&a.name?"text-input error":"text-input"}),n.name&&a.name&&r.a.createElement("div",{className:"input-feedback"},n.name)),r.a.createElement(G.a.Item,{required:!0,label:"id"},r.a.createElement(N.a,{id:"id",placeholder:"Enter your ID",type:"text",value:t.id,onChange:l,onBlur:o,className:n.id&&a.id?"text-input error":"text-input"}),n.id&&a.id&&r.a.createElement("div",{className:"input-feedback"},n.id)),r.a.createElement(G.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:n.email&&a.email?"error":"success"},r.a.createElement(N.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:l,onBlur:o,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(G.a.Item,{required:!0,label:"Phone"},r.a.createElement(N.a,{id:"phone",placeholder:"Enter your phone",type:"phone",value:t.phone,onChange:l,onBlur:o,className:n.phone&&a.phone?"text-input error":"text-input"}),n.phone&&a.phone&&r.a.createElement("div",{className:"input-feedback"},n.phone)),r.a.createElement(G.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:n.password&&a.password?"error":"success"},r.a.createElement(N.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:l,onBlur:o,className:n.password&&a.password?"text-input error":"text-input",style:{fontFamily:"cursive"}}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),r.a.createElement(G.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},r.a.createElement(N.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:l,onBlur:o,className:n.confirmPassword&&a.confirmPassword?"text-input error":"text-input",style:{fontFamily:"cursive"}}),n.confirmPassword&&a.confirmPassword&&r.a.createElement("div",{className:"input-feedback"},n.confirmPassword)),r.a.createElement(G.a.Item,ae,r.a.createElement(y.a,{onClick:c,type:"primary",disabled:i},"\uac00\uc785"))))}))},ie=a(144),le=a.n(ie),oe=a(566),ce=(a(257),oe.a.Option);var se=function(e){var t=Object(n.useState)(""),a=Object(j.a)(t,2),i=a[0],l=a[1],c=Object(n.useState)([]),s=Object(j.a)(c,2),d=s[0],u=s[1],m=Object(n.useState)([]),p=Object(j.a)(m,2),h=p[0],f=p[1],g=Object(o.c)((function(e){return e.user})),E=Object(n.useState)(""),v=Object(j.a)(E,2),x=v[0],O=v[1];Object(n.useEffect)((function(){g.userData&&C()}),[g]);var C=function(){console.log(g);var e={id:g.userData._id};b.a.post("/api/categorys/category",e).then((function(e){e.data.success?f(e.data.categoryNames):alert("\uce74\ud14c\uace0\ub9ac \ubaa9\ub85d\uc744 \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))},S=h.map((function(e,t){return r.a.createElement(ce,{key:t,value:e._id}," ",e.category)}));if(document.getElementById("editor")&&0===document.getElementById("editor").childElementCount){var k=new FormData,I={header:{"content-type":"multipart/form-data"}};ne=new le.a({el:document.querySelector("#editor"),previewStyle:"vertical",height:"700px",initialEditType:"wysiwyg",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694",hooks:{addImageBlobHook:function(e,t){console.log(e),k.append("file",e),b.a.post("/api/contents/image",k,I).then((function(e){if(e.data.success){console.log(e.data.filePath),u([].concat(Object(w.a)(d),[e.data.filePath]));var a=e.data.filePath.replace("\\","/");t("http://localhost:5000/".concat(a),"alt text")}else alert("\ud30c\uc77c\uc744 \uc800\uc7a5\ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}))}}})}return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"50px"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(oe.a,{onChange:function(e){O(e)},style:{width:"150px",marginBottom:"10px"}},S),r.a.createElement(N.a,{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",style:{height:"50px",width:"860px",marginBottom:"50px"},onChange:function(e){l(e.currentTarget.value)},value:i})),r.a.createElement("div",{id:"editor",style:{overflowY:"hidden",paddingLeft:"10px",paddingRight:"10px",paddingBottom:"50px",width:"880px"}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(y.a,{onClick:function(t){var a=ne.getHtml(),n=document.getElementsByClassName("tui-editor-contents")[0].innerText;if(!i||!a||!x)return alert("\ubaa8\ub4e0 \uac12\uc744 \uc791\uc131\ud574\uc57c\ud569\ub2c8\ub2e4.");var r={writer:e.user.userData._id,title:i,contents:a,textcontents:n,images:d,category:x};b.a.post("/api/contents/write",r).then((function(t){t.data.success?e.history.push("/blog/".concat(g.userData._id)):console.log(t.data.err)}))},style:{marginRight:"10px"}},"\uc644\ub8cc"),r.a.createElement(y.a,{onClick:function(){e.history.push("blog/".concat(e.user.userData._id))}},"\ucde8\uc18c")))},de=a(275),ue=a.n(de);var me,pe=function(e){var t=e.match.params.userId,a=e.match.params.contentId,i=Object(n.useState)({}),l=Object(j.a)(i,2),o=l[0],c=l[1],s=Object(n.useState)({}),d=Object(j.a)(s,2),u=d[0],m=d[1],p=Object(n.useState)({}),h=Object(j.a)(p,2),f=(h[0],h[1]);Object(n.useEffect)((function(){g()}),[]);var g=function(){var e={contentId:a};b.a.post("/api/contents/detail",e).then((function(e){if(e.data.success){var t=e.data.contentsInfo[0].createdAt.substring(0,10),a=e.data.contentsInfo[0].createdAt.substring(11,19);e.data.contentsInfo[0].createdAt=t+" "+a,console.log(e.data),c(e.data.contentsInfo[0]),m(e.data.contentsInfo[0].category),f(e.data.contentsInfo[0].writer)}else alert("\uac8c\uc2dc\ubb3c\uc744 \ubd88\ub7ec\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}))};if(document.getElementById("viewer"))new ue.a({el:document.querySelector("#viewer"),previewStyle:"vertical",height:"700px",initialValue:o.contents});return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"50px 0 100px 0"}},r.a.createElement("div",{style:{height:"50px",width:"45%",marginBottom:"30px",display:"flex",alignItems:"center",paddingBottom:"20px",fontSize:"xxx-large"}},r.a.createElement("div",{style:{display:"flex",fontSize:"x-large",borderBottom:"1px solid #a3a3a3"}},u.category)),r.a.createElement("div",{style:{height:"50px",width:"45%",padding:"2% 0 3.5% 0",borderBottom:"1px solid black",display:"flex",alignItems:"center",fontSize:"xxx-large"}},o.title),r.a.createElement("div",{style:{height:"50px",width:"45%",display:"flex",alignItems:"center",paddingBottom:"20px",fontSize:"large",justifyContent:"flex-end"}},o.createdAt),r.a.createElement("div",{id:"viewer",style:{overflowY:"hidden",paddingLeft:"10px",paddingRight:"10px",width:"45%",minHeight:"600px",padding:"20px",borderBottom:"1px solid black"}}),r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement(y.a,{onClick:function(){e.history.push("/blog/".concat(t))},style:{marginRight:"10px"}},"\ubaa9\ub85d"),r.a.createElement(y.a,{onClick:function(){var n={contentId:a};b.a.post("/api/contents/delete",n).then((function(a){a.data.success?e.history.push("/blog/".concat(t)):alert("\uac8c\uc2dc\uae00 \uc0ad\uc81c\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}))},style:{marginLeft:"10px"}},"\uc0ad\uc81c"))))};oe.a.Option;var he=function(e){var t=e.location.state.contentsInfo,a=Object(n.useState)(t.title),i=Object(j.a)(a,2),l=i[0],c=i[1],s=Object(n.useState)(t.images),d=Object(j.a)(s,2),u=d[0],m=d[1],p=Object(n.useState)([]),h=Object(j.a)(p,2),f=(h[0],h[1],Object(o.c)((function(e){return e.user}))),g=Object(n.useState)(""),E=Object(j.a)(g,2);if(E[0],E[1],document.getElementById("editor")&&0===document.getElementById("editor").childElementCount){var v=new FormData,x={header:{"content-type":"multipart/form-data"}};me=new le.a({el:document.querySelector("#editor"),previewStyle:"vertical",height:"auto",initialEditType:"wysiwyg",initialValue:t.contents,hooks:{addImageBlobHook:function(e,t){console.log(e),v.append("file",e),b.a.post("/api/contents/image",v,x).then((function(e){if(e.data.success){console.log(e.data.filePath),m([].concat(Object(w.a)(u),[e.data.filePath]));var a=e.data.filePath.replace("\\","/");t("http://localhost:5000/".concat(a),"alt text")}else alert("\ud30c\uc77c\uc744 \uc800\uc7a5\ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}))}}})}return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"50px"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(N.a,{style:{height:"50px",width:"860px",marginBottom:"50px"},onChange:function(e){c(e.currentTarget.value)},value:l})),r.a.createElement("div",{id:"editor",style:{overflowY:"hidden",paddingLeft:"10px",paddingRight:"10px",paddingBottom:"50px",height:"100%",width:"880px"}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(y.a,{onClick:function(a){var n=me.getHtml(),r=document.getElementsByClassName("tui-editor-contents")[0].innerText;if(!l||!n)return alert("\ubaa8\ub4e0 \uac12\uc744 \uc791\uc131\ud574\uc57c\ud569\ub2c8\ub2e4.");var i={title:l,contents:n,textcontents:r,images:u,contentsId:t._id};b.a.post("/api/contents/edit",i).then((function(a){a.data.success?e.history.push("/blog/".concat(f.userData._id,"/").concat(t._id)):alert("\uc218\uc815\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}))},style:{marginRight:"10px"}},"\uc218\uc815"),r.a.createElement(y.a,{onClick:function(){e.history.push("/blog/".concat(e.user.userData._id))}},"\ucde8\uc18c")))},fe=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function i(i){var l=Object(o.c)((function(e){return e.user})),c=Object(o.b)();return Object(n.useEffect)((function(){c(v()).then((function(e){e.payload.isAuth?(a&&!e.payload.isAdmin||!1===t)&&i.history.push("/"):t&&i.history.push("/login")}))}),[]),r.a.createElement(e,Object.assign({},i,{user:l}))}return i};a(258),a(556);var ge=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("div",null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:fe(K,null)}),r.a.createElement(f.a,{exact:!0,path:"/login",component:fe(ee,!1)}),r.a.createElement(f.a,{exact:!0,path:"/register",component:fe(re,!1)}),r.a.createElement(f.a,{exact:!0,path:"/blog/:userId",component:fe(V,null)}),r.a.createElement(f.a,{exact:!0,path:"/blog/:userId/:contentId",component:fe(pe,null)}),r.a.createElement(f.a,{exact:!0,path:"/write",component:fe(se,!0)}),r.a.createElement(f.a,{exact:!0,path:"/edit/:contentId",component:fe(he,!0)}))))},ye=(a(558),Object(s.a)(u.a,m.a)(s.d));l.a.render(r.a.createElement(o.a,{store:ye(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(c.a,null,r.a.createElement(ge,null))),document.getElementById("root"))}},[[279,1,2]]]);
//# sourceMappingURL=main.631464f4.chunk.js.map