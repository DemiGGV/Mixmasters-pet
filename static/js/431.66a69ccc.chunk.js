"use strict";(self.webpackChunkmixmasters_pet_react=self.webpackChunkmixmasters_pet_react||[]).push([[431],{5445:function(n,e,i){i.r(e),i.d(e,{default:function(){return Wi}});var t,o,r,a,d,s,l,p,c,x,h=i(2791),u=i(7689),m=i(9439),g=i(168),f=i(6487),b=f.ZP.header(t||(t=(0,g.Z)(["\n  border-bottom: 1px solid var(--border-icon-color);\n"]))),w=f.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  column-gap: 14px;\n\n  @media (min-width: 768px) {\n    width: 768px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 20px 32px;\n    column-gap: 24px;\n  }\n\n  @media (min-width: 1440px) {\n    justify-content: space-between;\n    width: 1440px;\n    padding: 20px 100px;\n    column-gap: 28px;\n  }\n"]))),Z=i(1087),v=(0,f.ZP)(Z.OL)(r||(r=(0,g.Z)(["\n  margin-right: auto;\n  z-index: 400;\n\n  @media screen and (min-width: 1440px) {\n  }\n"]))),j=f.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  @media screen and (min-width: 768px) {\n    gap: 14px;\n  }\n"]))),k=f.ZP.svg(d||(d=(0,g.Z)(["\n  width: 22px;\n  height: 22px;\n  fill: var(--btn-color);\n\n  @media screen and (min-width: 768px) {\n    width: 28px;\n    height: 28px;\n  }\n"]))),y=f.ZP.span(s||(s=(0,g.Z)(["\n  font-weight: 600;\n  white-space: nowrap;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n  }\n"]))),P=i(5561),z=i(3329);function C(){return(0,z.jsx)(v,{to:"/home",children:(0,z.jsxs)(j,{children:[(0,z.jsx)(k,{children:(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#icon-logo")})}),(0,z.jsx)(y,{children:"Drink Master"})]})})}var S,M,E,L,I,O,F,_=f.ZP.div(l||(l=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-left: auto;\n  margin-right: 28px;\n"]))),H=f.ZP.label(p||(p=(0,g.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n"]))),U=f.ZP.input(c||(c=(0,g.Z)(["\n  display: none; // \u041f\u0440\u0438\u0445\u043e\u0432\u0443\u0454\u043c\u043e \u0456\u043d\u043f\u0443\u0442\n"]))),q=f.ZP.div(x||(x=(0,g.Z)(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--btn-color);\n  transition: background-color 0.4s;\n  border-radius: 34px;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    height: 18px;\n    width: 18px;\n    background-color: var(--list-color);\n    transition: transform 0.4s;\n    border-radius: 50%;\n  }\n\n  ",":checked + & {\n    background-color: var(--btn-color);\n  }\n\n  ",":checked + &:before {\n    transform: translateX(21px);\n  }\n"])),U,U),D=function(){var n=(0,h.useState)(!1),e=(0,m.Z)(n,2),i=e[0],t=e[1];(0,h.useEffect)((function(){var n=localStorage.getItem("selectedTheme");"dark"===n?(t(!0),document.querySelector("body").setAttribute("data-theme","dark")):(t(!1),document.querySelector("body").setAttribute("data-theme","light"))}),[]);return(0,z.jsx)(_,{children:(0,z.jsxs)(H,{className:"toggle-label",children:[(0,z.jsx)(U,{type:"checkbox",checked:i,onChange:function(){var n=i?"light":"dark";t(!i),document.querySelector("body").setAttribute("data-theme",n),localStorage.setItem("selectedTheme",n)}}),(0,z.jsx)(q,{className:"slider"})]})})},Y=f.ZP.nav(S||(S=(0,g.Z)(["\n\n  @media (max-width: 767.98px) {\n    top: 72.8px;\n  }\n\n  @media (min-width: 768px) {\n    top: 84.8px;\n  }\n  @media (max-width: 1439.98px) {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: var(--background-color);\n    z-index: 200;\n  }\n\n  @media (min-width: 1440px) {\n    transform: translateX(0);\n    z-index: 400;\n  }\n"]))),B=f.ZP.ul(M||(M=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  z-index: 1000;\n\n  @media (max-width: 1439.98px) {\n    margin: 20% auto 0 auto;\n  }\n\n  @media (min-width: 1440px) {\n    flex-direction: row;\n  }\n"]))),N=f.ZP.li(E||(E=(0,g.Z)([""]))),R=(0,f.ZP)(Z.OL)(L||(L=(0,g.Z)(["\n  display: block;\n  padding: 8px 16px;\n  border-radius: 40px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.6;\n  border: 1px solid var(--border-icon-color);\n  white-space: nowrap;\n  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    border 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background: var(--image-wrapper-color);\n    border-color: var(--image-wrapper-color);\n    color: ",";\n  }\n  &.active {\n    color: ",";\n\n    background: var(--image-wrapper-color);\n    border-color: var(--image-wrapper-color);\n  }\n"])),(function(n){return"light"===n.dataTheme?"var(--background-color)":"#f3f3f3"}),(function(n){return"light"===n.dataTheme?"var(--background-color)":"#f3f3f3"})),A=function(){return(0,z.jsx)(Y,{children:(0,z.jsxs)(B,{id:"navigation",children:[(0,z.jsx)(N,{children:(0,z.jsx)(R,{to:"/home",children:"Home"})}),(0,z.jsx)(N,{children:(0,z.jsx)(R,{to:"/drinks",children:"Drinks"})}),(0,z.jsx)(N,{children:(0,z.jsx)(R,{to:"/add",children:"Add drink"})}),(0,z.jsx)(N,{children:(0,z.jsx)(R,{to:"/my",children:"My drinks"})}),(0,z.jsx)(N,{children:(0,z.jsx)(R,{to:"/favorite",children:"Favorites"})})]})})},T=f.ZP.div(I||(I=(0,g.Z)(["\n  width: 32px;\n  height: 32px;\n  stroke: var(--btn-color);\n\n  @media (min-width: 768px) {\n    width: 38px;\n    height: 38px;\n  }\n\n  @media (min-width: 1440px) {\n    display: none;\n  }\n"]))),W=f.ZP.svg(O||(O=(0,g.Z)(["\n  width: 100%;\n  height: 100%;\n  stroke: var(--btn-color);\n"])));f.ZP.div(F||(F=(0,g.Z)(["\n  display: block; /* Always show the burger menu button */\n  max-height: ",";\n  overflow: hidden;\n  transition: max-height 0.5s ease-in-out;\n  \n"])),(function(n){return n.isOpen?"500px":"0"}));function X(n){var e=n.toggleMenu,i=n.isOpenBurgerMenu,t=n.isDesktop;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(T,{onClick:e,id:"burger_menu",children:(0,z.jsx)(W,{className:"icon",children:i?(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#burger-close")}):(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#icon-burger")})})}),i&&!t&&(0,z.jsx)(A,{})]})}var J,V,G,K,Q,$,nn,en,tn,on,rn,an,dn,sn,ln,pn,cn,xn,hn,un,mn,gn,fn,bn,wn,Zn,vn,jn=i(9434),kn=i(6351),yn=f.ZP.div(J||(J=(0,g.Z)(["\n  /* padding: 20px 0px; */\n  position: relative;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  transition: transform;\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    gap: 14px;\n  }\n  @media (min-width: 1440px) {\n    margin-right: 0;\n  }\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),Pn=f.ZP.img(V||(V=(0,g.Z)(["\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n\n  @media (min-width: 768px) {\n    width: 44px;\n    height: 44px;\n  }\n"]))),zn=f.ZP.span(G||(G=(0,g.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"]))),Cn=i(5141),Sn=(i(1008),{borderRadius:"8px",width:"177px",height:"134px",padding:"18px",backgroundColor:"var(--btn-background-color)"}),Mn={backgroundColor:"none"},En=f.ZP.div(K||(K=(0,g.Z)(["\n  margin-bottom: 38px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]))),Ln=f.ZP.span(Q||(Q=(0,g.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.3;\n  color: #f3f3f3;\n"]))),In=f.ZP.svg($||($=(0,g.Z)(["\n  width: 14px;\n  height: 14px;\n"]))),On=(f.ZP.button(nn||(nn=(0,g.Z)([""]))),f.zo.button(en||(en=(0,g.Z)(["\n  border-radius: 42px;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  background: #f3f3f3;\n  display: flex;\n  padding: 12px 45px;\n  align-items: center;\n  color: #161f37;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.28;\n  outline: none;\n  cursor: pointer;\n  transition: 0.3s ease;\n\n  &:hover {\n    background: #434d67;\n    color: #f3f3f3;\n  }\n"])))),Fn=function(n){var e=n.setModalComponent,i=n.modalIsOpen,t=n.toggleModal;(0,h.useEffect)((function(){return document.body.style.overflow=i?"hidden":"auto",function(){document.body.style.overflow="auto"}}),[i]);return(0,z.jsxs)(Cn.Z,{visible:i,onClose:t,closeOnEsc:!0,animation:"zoom",showCloseButton:!1,customStyles:Sn,customMaskStyles:Mn,children:[(0,z.jsxs)(En,{onClick:function(){e("UserInfoModal")},children:[(0,z.jsx)(Ln,{children:"Edit profile"}),(0,z.jsx)(In,{children:(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#icon-edit")})})]}),(0,z.jsx)(On,{type:"button",onClick:function(){e("LogOutModal")},children:"Log out"})]})},_n=i(7413),Hn=i(9888),Un={borderRadius:"8px",padding:"50px",backgroundColor:"var(--btn-background-color)"},qn={backgroundColor:"rgba(0, 0, 0, 0.8)"},Dn=f.ZP.p(tn||(tn=(0,g.Z)(["\n  margin-bottom: 25px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.3;\n  letter-spacing: -0.28px;\n  color: #f3f3f3;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 37px;\n    font-size: 18px;\n    font-weight: 400;\n    letter-spacing: -0.36px;\n  }\n  @media screen and (min-width: 1440px) {\n  }\n"]))),Yn=f.ZP.div(on||(on=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Bn=f.ZP.button(rn||(rn=(0,g.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  background-color: transparent;\n  border: none;\n"]))),Nn=f.ZP.svg(an||(an=(0,g.Z)(["\n  width: 24px;\n  height: 24px;\n  @media screen and (min-width: 768px) {\n    width: 32px;\n    height: 32px;\n  }\n"]))),Rn=f.ZP.button(dn||(dn=(0,g.Z)(["\n  padding: 12px 45px;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  border-radius: 42px;\n  background-color: #434d67;\n  color: #f3f3f3;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.28;\n  outline: none;\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #f3f3f3;\n    color: #434d67;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 18px 69px;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n  @media screen and (min-width: 1440px) {\n  }\n"]))),An=f.ZP.button(sn||(sn=(0,g.Z)(["\n  padding: 12px 45px;\n  background-color: #f3f3f3;\n  color: #161f37;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  border-radius: 42px;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.28;\n  outline: none;\n  cursor: pointer;\n  transition: 0.3s ease;\n  &:hover {\n    background: #434d67;\n    color: #f3f3f3;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 18px 69px;\n    font-size: 16px;\n    line-height: 1.12;\n  }\n  @media screen and (min-width: 1440px) {\n  }\n"]))),Tn=function(n){var e=n.toggleModal,i=n.modalIsOpen,t=(0,jn.I0)(),o=(0,h.useState)([335,193]),r=(0,m.Z)(o,2),a=r[0],d=r[1],s=(0,_n.L)();(0,h.useEffect)((function(){s>=768?d([500,215]):s<768&&d([335,193])}),[s]),(0,h.useEffect)((function(){return document.body.style.overflow=i?"hidden":"auto",function(){document.body.style.overflow="auto"}}),[i]);var l=function(){e()};return(0,z.jsxs)(Cn.Z,{width:a[0],height:a[1],visible:i,onClose:l,closeOnEsc:!0,animation:"zoom",showCloseButton:!1,customStyles:Un,customMaskStyles:qn,children:[(0,z.jsx)(Bn,{type:"button",onClick:l,children:(0,z.jsx)(Nn,{style:{stroke:"#f3f3f3"},children:(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#icon-close")})})}),(0,z.jsx)(Dn,{children:"Are you sure you want to log out?"}),(0,z.jsxs)(Yn,{children:[(0,z.jsx)(An,{type:"button",onClick:function(){t((0,Hn.C3)())},children:"Log out"}),(0,z.jsx)(Rn,{type:"button",onClick:l,children:"Cancel"})]})]})},Wn=i(5705),Xn=i(9959),Jn=i.n(Xn),Vn=i(5218),Gn={borderRadius:"8px",padding:"0px",backgroundColor:"var(--btn-background-color)"},Kn={backgroundColor:"rgba(0, 0, 0, 0.8)"},Qn=f.ZP.div(ln||(ln=(0,g.Z)(["\n  margin: 0px auto;\n  padding: 50px 25px;\n  @media screen and (min-width: 768px) {\n    padding: 50px 50px;\n  }\n"]))),$n=f.ZP.button(pn||(pn=(0,g.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  background-color: transparent;\n  border: none;\n  stroke: #f3f3f3;\n\n  @media screen and (min-width: 768px) {\n    top: 18px;\n    right: 18px;\n  }\n"]))),ne=f.ZP.svg(cn||(cn=(0,g.Z)(["\n  width: 24px;\n  height: 24px;\n  @media screen and (min-width: 768px) {\n    width: 32px;\n    height: 32px;\n  }\n"]))),ee=f.ZP.div(xn||(xn=(0,g.Z)(["\n  position: relative;\n  margin-bottom: 39px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 66px;\n  }\n"]))),ie=f.ZP.img(hn||(hn=(0,g.Z)(["\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: 0px auto;\n  @media screen and (min-width: 768px) {\n    width: 100px;\n    height: 100px;\n  }\n"]))),te=f.ZP.button(un||(un=(0,g.Z)(["\n  position: absolute;\n  bottom: -14px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: transparent;\n  border: none;\n"]))),oe=((0,f.ZP)(Wn.gN)(mn||(mn=(0,g.Z)(["\n  cursor: pointer;\n  margin: 0px auto 10px;\n"]))),f.ZP.div(gn||(gn=(0,g.Z)(["\n  overflow: hidden;\n  margin-bottom: 39px;\n  /* display: flex; */\n  column-gap: 60px;\n  align-items: center;\n  justify-content: center;\n"])))),re=f.ZP.img(fn||(fn=(0,g.Z)(["\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n"]))),ae=(0,f.ZP)(Wn.l0)(bn||(bn=(0,g.Z)(["\n  position: relative;\n"]))),de=(0,f.ZP)(Wn.gN)(wn||(wn=(0,g.Z)(["\n  margin-bottom: 18px;\n  width: 285px;\n  padding: 18px 24px;\n  border-radius: 42px;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  background-color: transparent;\n  color: #f3f3f3;\n  font-size: 14px;\n  line-height: 1.28;\n  @media screen and (min-width: 768px) {\n    width: 400px;\n    margin-bottom: 25px;\n    padding: 14px 24px;\n    font-size: 17px;\n    line-height: 1.5;\n  }\n"]))),se=f.ZP.svg(Zn||(Zn=(0,g.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 18px;\n  width: 16px;\n  height: 16px;\n  @media screen and (min-width: 768px) {\n    width: 20px;\n    height: 20px;\n  }\n"]))),le=f.ZP.button(vn||(vn=(0,g.Z)(["\n  width: 285px;\n  border-radius: 42px;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  background-color: #f3f3f3;\n  padding: 18px 0px;\n  color: #434d67;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.28;\n  outline: none;\n  transition: 0.3s ease;\n  @media screen and (min-width: 768px) {\n    width: 400px;\n    padding: 18px;\n    font-size: 17px;\n    line-height: 1.5;\n  }\n\n  &:hover {\n    background: #161f37;\n    color: #f3f3f3;\n  }\n"]))),pe=i(6727),ce=pe.Ry().shape({name:pe.Z_().min(2,(function(n){var e=n.min;return"Name must be at least ".concat(e," characters")})).required()}),xe=function(n){var e=n.toggleModal,i=n.modalIsOpen,t=(0,jn.I0)(),o=(0,jn.v9)(kn.dy),r=o.name,a=o.avatarURL,d=(0,h.useState)([335,345]),s=(0,m.Z)(d,2),l=s[0],p=s[1],c=(0,h.useState)(!1),x=(0,m.Z)(c,2),u=x[0],g=x[1],f=(0,h.useState)(null),b=(0,m.Z)(f,2),w=b[0],Z=b[1],v=(0,h.useState)(null),j=(0,m.Z)(v,2),k=j[0],y=j[1],C=(0,_n.L)();(0,h.useEffect)((function(){C>=768?p([500,426]):C<768&&p([335,345])}),[C]),(0,h.useEffect)((function(){return document.body.style.overflow=i?"hidden":"auto",function(){document.body.style.overflow="auto"}}),[i]);var S={name:r},M=function(){e()};return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(Cn.Z,{width:l[0],height:l[1],visible:i,onClose:M,closeOnEsc:!0,animation:"zoom",showCloseButton:!1,customStyles:Gn,customMaskStyles:Kn,children:(0,z.jsxs)(Qn,{children:[(0,z.jsx)($n,{type:"button",onClick:M,children:(0,z.jsx)(ne,{children:(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#icon-close")})})}),!u&&(0,z.jsxs)(ee,{children:[(0,z.jsx)(ie,{src:a,alt:"User photo"}),(0,z.jsx)(te,{type:"button",onClick:function(){document.querySelector("input[name^=avatar_loader]").click(),document.querySelector("#avatar-show").style.display="flex",g(!0)},children:(0,z.jsx)(ne,{children:(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#icon-add-photo")})})})]}),(0,z.jsxs)(oe,{id:"avatar-show",style:{display:"none"},children:[(0,z.jsx)(Jn(),{width:100,imageWidth:100,height:100,onCrop:function(n){Z(n)},onClose:function(){var n=document.querySelector("#avatar-show");Z(null),n.style.display="none",g(!1)},onBeforeFileLoad:function(n){n.target.files[0].size>5e6&&(Vn.Am.error("File is too big! Should be maximum 5Mb"),n.target.value="")},src:null,label:"",onFileLoad:function(n){y(n)}}),w&&(0,z.jsx)(re,{src:w,alt:"Preview"})]}),(0,z.jsx)(Wn.J9,{initialValues:S,onSubmit:function(n){var i=new FormData;i.append("name",n.name),i.append("avatar",k),t((0,Hn.Nq)(i)),e()},validationSchema:ce,children:(0,z.jsxs)(ae,{children:[(0,z.jsx)(de,{type:"text",name:"name",id:"name"}),(0,z.jsx)(Wn.Bc,{name:"name"}),(0,z.jsx)(se,{children:(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#icon-edit")})}),(0,z.jsx)(le,{type:"submit",children:"Save changes"})]})})]})})})},he=function(){var n=(0,jn.v9)(kn.dy),e=n.name,i=n.avatarURL,t=(0,h.useState)(!1),o=(0,m.Z)(t,2),r=o[0],a=o[1],d=(0,h.useState)(null),s=(0,m.Z)(d,2),l=s[0],p=s[1],c=function(){a(!r)};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(yn,{onClick:function(){c(),p("UserLogoPopup")},children:[(0,z.jsx)(Pn,{src:i,alt:"User photo"}),(0,z.jsx)(zn,{children:e})]}),"UserLogoPopup"===l&&(0,z.jsx)(Fn,{setModalComponent:p,modalIsOpen:r,toggleModal:c}),"LogOutModal"===l&&(0,z.jsx)(Tn,{toggleModal:c,modalIsOpen:r}),"UserInfoModal"===l&&(0,z.jsx)(xe,{toggleModal:c,modalIsOpen:r})]})};var ue,me,ge,fe,be,we,Ze,ve,je,ke,ye,Pe,ze,Ce,Se,Me=function(){var n=(0,h.useState)(window.innerWidth>=1440),e=(0,m.Z)(n,2),i=e[0],t=e[1],o=(0,h.useState)(!1),r=(0,m.Z)(o,2),a=r[0],d=r[1],s=(0,u.TH)(),l=(0,h.useCallback)((function(){t(window.innerWidth>=1440),i&&d(!1)}),[i]);return(0,h.useEffect)((function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[l]),(0,h.useEffect)((function(){return document.body.style.overflow=a?"hidden":"auto",function(){document.body.style.overflow="auto"}}),[a]),(0,h.useEffect)((function(){d(!1)}),[s.pathname]),(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(b,{children:(0,z.jsxs)(w,{children:[(0,z.jsx)(C,{}),i&&(0,z.jsx)(A,{}),(i||a)&&(0,z.jsx)(D,{}),!a&&(0,z.jsx)(he,{}),(0,z.jsx)(X,{toggleMenu:function(){d((function(n){return!n}))},isOpenBurgerMenu:a,isDesktop:i})]})})})},Ee=(0,f.F4)(ue||(ue=(0,g.Z)(["\n\t0%,\n\t100% {\n\t\ttransform: translateY(0) scale(1) rotate(0);\n\t\topacity: 1;\n\t}\n\t25% {\n\t\ttransform: translateY(-50px) scale(0.8) rotate(45deg);\n\t\topacity: 0.5;\n\t}\n\t50% {\n\t\ttransform: translateY(-100px) scale(0.6) rotate(90deg);\n\t\topacity: 0.2;\n\t}\n\t75% {\n\t\ttransform: translateY(-50px) scale(0.8) rotate(45deg);\n\t\topacity: 0.5;\n\t}\n"]))),Le=f.ZP.div(me||(me=(0,g.Z)(["\n  display: flex;\n  background-size: contain;\n  justify-content: center;\n  align-items: center;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(\n    to right,\n    rgba(6, 6, 9, 1),\n    rgba(10, 10, 17, 0)\n  );\n"]))),Ie=f.ZP.div(ge||(ge=(0,g.Z)(["\n  width: 50vw;\n  height: 130vh;\n  background: radial-gradient(ellipse, rgba(64, 112, 205, 0.5), transparent);\n  top: -50%;\n  left: -28%;\n  z-index: 309;\n  border-radius: 50%;\n  position: absolute;\n  filter: blur(50px);\n  animation: "," 8s ease-in-out infinite;\n"])),Ee),Oe=f.ZP.div(fe||(fe=(0,g.Z)(["\n  width: 32vw;\n  height: 75vh;\n  background: radial-gradient(circle, rgba(188, 230, 210, 0.4), transparent);\n  filter: blur(40px);\n  top: -35%;\n  left: 10%;\n  z-index: 310;\n  border-radius: 50%;\n  position: absolute;\n  animation: "," 8s ease-in-out infinite 2s;\n"])),Ee),Fe=(f.ZP.div(be||(be=(0,g.Z)(["\n  width: 32vw;\n  height: 75vh;\n  background: radial-gradient(circle, rgba(64, 112, 205, 0.5), transparent);\n  filter: blur(50px);\n  bottom: -60%;\n  right: -40%;\n  z-index: 10;\n  border-radius: 50%;\n  position: absolute;\n  animation: "," 8s ease-in-out infinite 2s;\n"])),Ee),function(n){var e=n.children;return(0,z.jsxs)(z.Fragment,{children:[e,(0,z.jsx)(Le,{}),(0,z.jsx)(Ie,{}),(0,z.jsx)(Oe,{})]})}),_e=f.ZP.main(we||(we=(0,g.Z)(["\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  flex-grow: 1;\n\n  @media screen and (max-width: 767.98px) {\n    max-width: 375px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1440px;\n    padding-left: 100px;\n    padding-right: 100px;\n  }\n"]))),He=f.ZP.main(Ze||(Ze=(0,g.Z)(["\n  flex-grow: 1;\n\n  @media screen and (max-width: 767.98px) {\n    max-width: 375px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1440px;\n  }\n"]))),Ue=f.ZP.div(ve||(ve=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n"]))),qe=(0,f.F4)(je||(je=(0,g.Z)(["\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n"]))),De=(0,f.ZP)(Z.OL)(ke||(ke=(0,g.Z)(["\n  margin-right: auto;\n  z-index: 400;\n\n  @media screen and (min-width: 1440px) {\n  }\n"]))),Ye=f.ZP.div(ye||(ye=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  animation: "," 0.8s ease-in-out forwards;\n  transform: translateX(-200%);\n\n  transition-property: transform;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\n\n  @media screen and (min-width: 768px) {\n    gap: 14px;\n  }\n"])),qe),Be=f.ZP.svg(Pe||(Pe=(0,g.Z)(["\n  width: 22px;\n  height: 22px;\n  fill: white;\n\n  @media screen and (min-width: 768px) {\n    width: 28px;\n    height: 28px;\n  }\n"]))),Ne=f.ZP.span(ze||(ze=(0,g.Z)(["\n  font-weight: 600;\n  white-space: nowrap;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n  }\n"])));function Re(){return(0,z.jsx)(De,{to:"/home",children:(0,z.jsxs)(Ye,{children:[(0,z.jsx)(Be,{children:(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#icon-logo")})}),(0,z.jsx)(Ne,{children:"Drink Master"})]})})}var Ae,Te,We,Xe,Je,Ve,Ge,Ke,Qe,$e,ni,ei,ii,ti,oi,ri,ai,di,si,li,pi,ci,xi=f.ZP.nav(Ce||(Ce=(0,g.Z)(["\n  @media (min-width: 768px) {\n    margin-top: 40px;\n  }\n  @media (min-width: 1440px) {\n    margin-top: 0;\n  }\n  ul {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n    @media (min-width: 1440px) {\n      gap: 16px;\n    }\n  }\n"]))),hi=(0,f.ZP)(Z.rU)(Se||(Se=(0,g.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 22.4px;\n  color: #f3f3f3;\n  position: relative;\n  transition: color 0.3s ease-in-out;\n\n  &:hover {\n    color: #dcdcdc;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: -2px;\n    left: 0;\n    width: 0;\n    height: 2px;\n    background-color: #f3f3f3;\n    transition: width 0.3s ease-in-out;\n  }\n\n  &:active {\n    color: #dcdcdc;\n    &::before {\n      width: 100%;\n    }\n  }\n"]))),ui=function(){return(0,z.jsx)(xi,{children:(0,z.jsxs)("ul",{children:[(0,z.jsx)("li",{children:(0,z.jsx)(hi,{to:"/drinks",children:"Drinks"})}),(0,z.jsx)("li",{children:(0,z.jsx)(hi,{to:"/add",children:"Add drink"})}),(0,z.jsx)("li",{children:(0,z.jsx)(hi,{to:"/my",children:"My drinks"})}),(0,z.jsx)("li",{children:(0,z.jsx)(hi,{to:"/favorite",children:"Favorites"})})]})})},mi=i(4165),gi=i(5861),fi=(0,f.ZP)(Wn.l0)(Ae||(Ae=(0,g.Z)(["\n  margin: 0px auto;\n  display: flex;\n  flex-direction: column;\n  max-width: 480px;\n\n  @media (min-width: 768px) {\n    margin: 0;\n    max-width: 309px;\n  }\n"]))),bi=f.ZP.p(Te||(Te=(0,g.Z)(["\n  margin-bottom: 24px;\n  color: #f3f3f3;\n  font-size: 16px;\n  line-height: 20px;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: 24px;\n  }\n"]))),wi=(0,f.ZP)(Wn.gN)(We||(We=(0,g.Z)(["\n  width: 100%;\n  height: 54px;\n  border-radius: 200px;\n  border: ",";\n  background-color: transparent;\n  padding: 18px 24px;\n  color: #f3f3f3;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 18px;\n  transition: border-color 0.3s ease-in-out;\n\n  &::placeholder {\n    color: #666666;\n  }\n\n  @media (min-width: 768px) {\n    height: 56px;\n    padding: 14px 24px;\n    font-size: 17px;\n    line-height: 26px;\n  }\n\n  &:focus,\n  &:hover {\n    outline: none;\n    color: #f3f3f3;\n    border: ",";\n    background-color: transparent;\n  }\n"])),(function(n){return n.border||"1px solid rgba(243, 243, 243, 0.2)"}),(function(n){return n.border||"1px solid rgba(243, 243, 243, 0.2)"})),Zi=f.ZP.div(Xe||(Xe=(0,g.Z)(["\n  position: absolute;\n  bottom: -18px;\n  left: 15px;\n  font-size: 12px;\n  color: #da1414;\n  padding: 0 10px;\n  border-radius: 15px;\n"]))),vi=f.ZP.button(Je||(Je=(0,g.Z)(["\n  margin-top: 18px;\n  height: 54px;\n  color: #f3f3f3;\n  background-color: transparent;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 18px;\n  border-radius: 200px;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  transition: color 0.5s, border-color 0.5s;\n\n  &:hover {\n    border-color: #f3f3f3;\n    color: rgba(243, 243, 243, 0.4941176471);\n    border-color: rgba(243, 243, 243, 0.4941176471);\n  }\n\n  &:disabled,\n  &[disabled] {\n    border: 1px solid #999999;\n    color: #666666;\n    cursor: not-allowed;\n  }\n\n  @media (min-width: 768px) {\n    height: 56px;\n    font-size: 17px;\n    line-height: 26px;\n  }\n"]))),ji=f.ZP.div(Ve||(Ve=(0,g.Z)(["\n  position: relative;\n"]))),ki=pe.Ry().shape({email:pe.Z_().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"Please enter a valid email").required("Email is required")}),yi=function(){var n=(0,jn.I0)(),e=(0,jn.v9)(kn.dy).subscription,i=function(){var e=(0,gi.Z)((0,mi.Z)().mark((function e(i,t){var o,r;return(0,mi.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.resetForm,r=i.email,e.prev=2,e.next=5,n((0,Hn.CU)({subscription:r}));case 5:o(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n,i){return e.apply(this,arguments)}}();return(0,z.jsx)(Wn.J9,{initialValues:{email:""},validationSchema:ki,onSubmit:i,children:function(n){var i=n.errors,t=n.touched;return(0,z.jsxs)(fi,{children:[(0,z.jsx)(bi,{children:"Subscribe to our newsletter and stay in touch with the latest news and special offers."}),(0,z.jsxs)(ji,{children:[(0,z.jsx)(wi,{type:"email",name:"email",placeholder:e,border:t.email&&(i.email?"1px solid #da1414":"1px solid #3cbc81")}),(0,z.jsx)(Wn.Bc,{component:Zi,name:"email"})]}),(0,z.jsx)(vi,{type:"submit",children:"Subscribe"})]})}})},Pi=f.ZP.footer(Ge||(Ge=(0,g.Z)(["\n  border-top: 1px solid rgba(243, 243, 243, 0.2);\n  background: #0a0a11;\n"]))),zi=f.ZP.div(Ke||(Ke=(0,g.Z)(["\n  color: white;\n"]))),Ci=f.ZP.div(Qe||(Qe=(0,g.Z)(["\n  padding: 40px 20px 18px;\n\n  @media (min-width: 768px) {\n    width: 768px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 80px 32px 24px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 1440px;\n    padding: 80px 100px 24px;\n  }\n"]))),Si=f.ZP.div($e||($e=(0,g.Z)(["\n  position: relative;\n  margin-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  z-index: 12;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  @media (min-width: 1440px) {\n    max-width: 1440px;\n  }\n"]))),Mi=f.ZP.div(ni||(ni=(0,g.Z)(["\n  display: flex;\n  margin-bottom: 40px;\n  justify-content: space-between;\n\n  @media (min-width: 768px) {\n    margin-bottom: 0px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  @media (min-width: 1440px) {\n    flex-direction: row;\n    column-gap: 419px;\n  }\n"]))),Ei=f.ZP.div(ei||(ei=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n  z-index: 12;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),Li=f.ZP.p(ii||(ii=(0,g.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.24px;\n  color: #f3f3f37e;\n  transition: border 0.3s ease;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 18px;\n    letter-spacing: -0.28px;\n  }\n"]))),Ii=f.ZP.p(ti||(ti=(0,g.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.24px;\n  color: #f3f3f37e;\n  transition: border 0.3s ease;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 18px;\n    letter-spacing: -0.28px;\n  }\n\n  &:not(:last-child) {\n    margin-right: 14px;\n\n    @media (min-width: 768px) {\n      margin-right: 18px;\n    }\n  }\n"]))),Oi=(0,f.F4)(oi||(oi=(0,g.Z)(["\n  0%, 100% {\n    opacity: 0; /* \u041f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0438\u0439 \u0442\u0430 \u043a\u0456\u043d\u0446\u0435\u0432\u0438\u0439 \u0441\u0442\u0430\u043d\u0438: \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u0438\u0439 */\n  }\n  50% {\n    opacity: 1; /* \u0421\u0435\u0440\u0435\u0434\u0438\u043d\u0430 \u0430\u043d\u0456\u043c\u0430\u0446\u0456\u0457: \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u0438\u0434\u0438\u043c\u0438\u0439 */\n  }\n"]))),Fi=f.ZP.div(ri||(ri=(0,g.Z)(["\n  position: absolute;\n  overflow: hidden;\n"]))),_i=f.ZP.div(ai||(ai=(0,g.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: -689px;\n  width: 784px;\n  height: 649px;\n  border-radius: 849px;\n  background: rgba(64, 112, 205, 1);\n  filter: blur(104.8543701171875px);\n  animation: "," 7s ease-in-out infinite 3s;\n\n  @media (max-width: 768px) {\n    left: -690px;\n  }\n"])),Oi),Hi=f.ZP.div(di||(di=(0,g.Z)(["\n  position: absolute;\n  width: 700px;\n  height: 320px;\n  border-radius: 350px 350px 0 0;\n  background: rgba(188, 230, 210, 1);\n  filter: blur(104.8543701171875px);\n  animation: "," 8s ease-in-out infinite;\n  z-index: 11;\n   transform: translateY(-320px); \n\n   @media (max-width: 768px) {\n     left: 0px;\n     width: 300px;\n     height: 150px;\n     transform: translateY(-105px);\n }\n\n @media (min-width: 768px) {\n     left: 0px;\n\n     @media (min-width: 1440px) {\n    left: 0px;\n  \n\n }\n"])),Oi),Ui=f.ZP.div(si||(si=(0,g.Z)(["\n  position: absolute;\n  width: 700px;\n  height: 320px;\n  border-radius: 350px 350px 0 0;\n  background: rgba(64, 112, 205, 1);\n  filter: blur(104.8543701171875px);\n  animation: "," 8s ease-in-out infinite 2s;\n  z-index: 11;\n   transform: translateY(-320px);\n   \n   @media (max-width: 768px) {\n     right: 0px;\n     width: 300px;\n  height: 150px;\n     transform: translateY(-105px);\n } \n @media (min-width: 768px) {\n     right: 0px;\n    \n }\n\n @media (min-width: 1440px) {\n  right: 0px;\n  \n"])),Oi),qi=f.ZP.div(li||(li=(0,g.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 16px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 28px;\n    gap: 16px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 40px;\n    gap: 16px;\n  }\n"]))),Di=f.ZP.svg(pi||(pi=(0,g.Z)(["\n  width: 22px;\n  height: 22px;\n  display: flex;\n  fill: #f3f3f3;\n\n  @media screen and (min-width: 768px) {\n    width: 28px;\n    height: 28px;\n  }\n"]))),Yi=f.ZP.a(ci||(ci=(0,g.Z)(["\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  border-radius: 10px;\n  padding: 8px;\n  transition: border 0.3s ease;\n\n  &:hover {\n    border: 1px solid #f3f3f3;\n  }\n"]))),Bi=[{name:"Facebook",url:"https://www.facebook.com/goITclub/",iconId:"icon-facebook"},{name:"Instagram",url:"https://www.instagram.com/cocktailbox_ua/?igshid=d3cupeo5kedw",iconId:"icon-instagram"},{name:"YouTube",url:"https://www.youtube.com/watch?v=5McPd0GPqC8&ab_channel=CocktailBox",iconId:"icon-youtube"}],Ni=function(){return(0,z.jsx)(qi,{children:Bi.map((function(n,e){return(0,z.jsx)(Yi,{href:n.url,target:"_blank",rel:"noopener noreferrer",children:(0,z.jsx)(Di,{children:(0,z.jsx)("use",{xlinkHref:"".concat(P.Z,"#").concat(n.iconId)})})},e)}))})};var Ri=function(){return(0,z.jsxs)(Pi,{children:[(0,z.jsxs)(Ci,{children:[(0,z.jsxs)(Si,{children:[(0,z.jsxs)(Mi,{children:[(0,z.jsxs)("div",{children:[(0,z.jsx)(zi,{children:(0,z.jsx)(Re,{})}),(0,z.jsx)(Ni,{})]}),(0,z.jsx)(ui,{})]}),(0,z.jsx)(yi,{})]}),(0,z.jsxs)(Ei,{children:[(0,z.jsx)(Li,{children:"\xa92023 Drink Master. All rights reserved."}),(0,z.jsxs)("div",{style:{display:"flex"},children:[(0,z.jsx)(Ii,{children:(0,z.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/document/d/1Ck8e_RO-DLguG9DnIPeoUE5OkEReDhzwZ1ojE8Ygjy4/edit?usp=sharing",children:"Privacy Policy"})}),(0,z.jsx)(Ii,{children:(0,z.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.google.com/document/d/1i_HoneWhEKvyjp5Vt2afM8NBNC-rWKcRs3OJQdX_f3U/edit?usp=sharing",children:"Terms of Service"})})]})]})]}),(0,z.jsx)(Fi,{children:(0,z.jsx)(_i,{})}),(0,z.jsx)(Hi,{}),(0,z.jsx)(Ui,{})]})},Ai=i(9168),Ti=i(7834),Wi=function(){var n=(0,Ti.a)().isLoggedIn;return(0,z.jsx)(Fe,{children:(0,z.jsx)(Ue,{children:n?(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(h.Suspense,{fallback:(0,z.jsx)(Ai.Z,{}),children:[(0,z.jsx)(Me,{}),(0,z.jsx)(_e,{children:(0,z.jsx)(u.j3,{})}),(0,z.jsx)(Ri,{})]})}):(0,z.jsx)(He,{children:(0,z.jsx)(h.Suspense,{fallback:(0,z.jsx)(Ai.Z,{}),children:(0,z.jsx)(u.j3,{})})})})})}},7413:function(n,e,i){i.d(e,{L:function(){return r}});var t=i(9439),o=i(2791);function r(){var n=(0,o.useState)(window.innerWidth),e=(0,t.Z)(n,2),i=e[0],r=e[1];return(0,o.useLayoutEffect)((function(){function n(){r(window.innerWidth)}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),i}}}]);
//# sourceMappingURL=431.66a69ccc.chunk.js.map