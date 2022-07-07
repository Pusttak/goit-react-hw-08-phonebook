(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[453],{8026:function(t,o,n){"use strict";n.d(o,{II:function(){return m},__:function(){return f},l0:function(){return c},zx:function(){return p}});var e,i,a,r,s=n(168),l=n(2499),c=l.Z.form(e||(e=(0,s.Z)(["\n  border: 4px solid rgba(67, 114, 153, 0.378);\n  border-radius: 6px;\n  padding: 20px 25px 5px;\n  margin-bottom: 25px;\n"]))),f=l.Z.label(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  color: rgba(67, 114, 153, 0.727);\n"]))),m=l.Z.input(a||(a=(0,s.Z)(["\n  border: 2px solid rgb(128, 158, 182);\n  height: 25px;\n  border-radius: 4px;\n  margin-top: 6px;\n  font-size: 16px;\n  font-weight: 600;\n  color: rgb(67, 114, 153);\n  padding: 5px 10px;\n  outline: none;\n"]))),p=l.Z.button(r||(r=(0,s.Z)(["\n  display: block;\n  padding: 10px 20px;\n  border-radius: 4px;\n  border: none;\n  margin: 30px auto;\n  color: white;\n  background-color: rgb(67, 114, 153);\n  cursor: pointer;\n  transition: 0.3s;\n  font-size: 16px;\n  font-weight: 600;\n\n  :hover {\n    background-color: rgb(60, 100, 132);\n  }\n"])))},4519:function(t,o,n){"use strict";n.d(o,{Dx:function(){return l},QE:function(){return c},W2:function(){return s}});var e,i,a=n(168),r=n(2499),s=r.Z.div(e||(e=(0,a.Z)(["\n  margin: 0 auto;\n  margin-top: 10px;\n  padding: 10px;\n  width: 500px;\n"]))),l=r.Z.h1(i||(i=(0,a.Z)(["\n  margin-bottom: 15px;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n  color: rgba(46, 61, 79, 0.877);\n"]))),c=l.withComponent("h2")},6453:function(t,o,n){"use strict";n.r(o),n.d(o,{default:function(){return T}});var e,i,a,r,s,l,c,f,m,p=n(2791),d=n(885),x=n(5264),u=n(8026),y=n(2411),b=n(3329),g=function(){var t=(0,p.useState)(""),o=(0,d.Z)(t,2),n=o[0],e=o[1],i=(0,p.useState)(""),a=(0,d.Z)(i,2),r=a[0],s=a[1],l=(0,y.wY)().data,c=(0,y.F3)(),f=(0,d.Z)(c,2),m=f[0],g=f[1].isLoading,h=function(t){var o=t.target,n=o.name,i=o.value;switch(n){case"name":e(i);break;case"phone":s(i)}},w=function(t){var o=t.toLowerCase();return null===l||void 0===l?void 0:l.find((function(t){return t.name.toLowerCase()===o}))},v=function(){e(""),s("")};return(0,b.jsxs)(u.l0,{onSubmit:function(t){t.preventDefault(),w(n)?x.Notify.failure("".concat(n," is already in contacts")):m({name:n,number:r})&&v()},children:[(0,b.jsxs)(u.__,{children:["Name",(0,b.jsx)(u.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:h,value:n,autoComplete:"off"})]}),(0,b.jsxs)(u.__,{children:["Phone",(0,b.jsx)(u.II,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:h,value:r,autoComplete:"off"})]}),(0,b.jsx)(u.zx,{type:"submit",disabled:g,children:g?"Loading...":"Add contact"})]})},h=n(5048),w=n(168),v=n(2499),k=v.Z.div(e||(e=(0,w.Z)(["\n  display: flex;\n  padding: 2px;\n  transition: 0.3s;\n  cursor: context-menu;\n\n  :hover {\n    background-color: rgba(242, 56, 127, 0.084);\n    border-radius: 4px;\n  }\n"]))),N=v.Z.span(i||(i=(0,w.Z)(["\n  max-width: 50%;\n"]))),C=v.Z.span(a||(a=(0,w.Z)(["\n  margin-left: auto;\n  color: rgba(155, 53, 102, 0.849);\n"]))),I=v.Z.button(r||(r=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px 10px;\n  text-align: center;\n  margin-left: 10px;\n  color: white;\n  min-width: 25px;\n  height: 25px;\n  border-radius: 3px;\n  background-color: ",";\n  cursor: pointer;\n  border: none;\n  transition: 0.3s;\n\n  :hover {\n    background-color: ",";\n    transform: scale(1.2);\n  }\n\n  :disabled {\n    background-color: rgba(197, 78, 100, 0.53);\n  }\n"])),(function(t){return t.isEdit?"rgba(241, 163, 9, 0.904)":"rgba(242, 56, 90, 0.552)"}),(function(t){return t.isEdit?"rgba(205, 138, 5, 0.904)":"rgba(210, 3, 41, 0.552)"})),z=v.Z.form(s||(s=(0,w.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin-right: auto;\n"]))),A=v.Z.input(l||(l=(0,w.Z)(["\n  width: 38%;\n  border: 2px solid rgba(205, 138, 5, 0.364);\n  background-color: rgba(241, 167, 9, 0.823);\n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #ffffff;\n  padding: 2px 5px;\n  outline: none;\n"]))),W=function(t){var o=t.name,n=t.number,e=t.id,i=(0,p.useState)(o),a=(0,d.Z)(i,2),r=a[0],s=a[1],l=(0,p.useState)(n),c=(0,d.Z)(l,2),f=c[0],m=c[1],x=(0,p.useState)(!1),u=(0,d.Z)(x,2),g=u[0],h=u[1],w=(0,y.Nt)(),v=(0,d.Z)(w,2),W=v[0],j=v[1],Z=(0,y.i)(),L=(0,d.Z)(Z,2),S=L[0],E=L[1],B=function(t){var o=t.target,n=o.name,e=o.value;switch(n){case"name":s(e);break;case"phone":m(e)}};return(0,b.jsxs)(k,{children:[g?(0,b.jsxs)(z,{onSubmit:function(t){t.preventDefault(),S({name:r,number:f,id:e}),h(!1)},children:[(0,b.jsx)(A,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:B,value:r,autoComplete:"off"}),(0,b.jsx)(A,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:B,value:f,autoComplete:"off"}),(0,b.jsx)(I,{isEdit:g,type:"submit",children:"Save"})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(N,{children:o}),(0,b.jsx)(C,{children:n}),(0,b.jsx)(I,{type:"button",disabled:E.isLoading,onClick:function(){return h(!0)},children:E.isLoading?"Loading":"Edit"})]}),(0,b.jsx)(I,{type:"button",disabled:j.isLoading,onClick:function(){return W(e)},children:"x"})]})},j=v.Z.ul(c||(c=(0,w.Z)(["\n  border: 4px solid rgba(153, 67, 109, 0.34);\n  border-radius: 6px;\n  padding: 20px;\n  font-size: 18px;\n  font-weight: 500;\n  color: rgba(153, 67, 109, 0.732);\n"]))),Z=function(t){return t.filter},L=function(){var t=(0,h.v9)(Z),o=(0,y.wY)().data,n=(0,p.useMemo)((function(){var n=t.toLowerCase();return null===o||void 0===o?void 0:o.filter((function(t){return t.name.toLowerCase().includes(n)}))}),[t,o]);return(0,b.jsx)(j,{children:null!==n&&void 0!==n&&n.length?n.map((function(t){var o=t.name,n=t.number,e=t.id;return(0,b.jsx)("li",{children:(0,b.jsx)(W,{name:o,number:n,id:e})},e)})):(0,b.jsx)("p",{children:"Phonebook is empty"})})},S=v.Z.input(f||(f=(0,w.Z)(["\n  border: 2px solid rgba(142, 137, 139, 0.34);\n  height: 25px;\n  border-radius: 4px;\n  margin-top: 6px;\n  margin-bottom: 15px;\n  font-size: 16px;\n  font-weight: 600;\n  color: rgba(155, 145, 150, 0.732);\n  padding: 5px 10px;\n  outline: none;\n"]))),E=v.Z.label(m||(m=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 700;\n  color: rgba(107, 103, 105, 0.536);\n"]))),B=function(){var t=(0,h.v9)(Z),o=(0,h.I0)();return(0,b.jsxs)(E,{children:["Find contacts by name",(0,b.jsx)(S,{type:"text",name:"filter",onChange:function(t){o((0,y.xO)(t.target.value))},value:t})]})},D=n(4519),T=function(){return(0,b.jsxs)(D.W2,{children:[(0,b.jsx)(D.Dx,{children:"Phonebook"}),(0,b.jsx)(g,{}),(0,b.jsx)(D.QE,{children:"Contacts"}),(0,b.jsx)(B,{}),(0,b.jsx)(L,{})]})}},5264:function(t,o,n){var e,i;i="undefined"!==typeof n.g?n.g:"undefined"!==typeof window?window:this,e=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var o,n="Notiflix",e="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",i='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c "+n+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+e)},l=function(o){return o||(o="head"),null!==t.document[o]||(s('\nNotiflix needs to be appended to the "<'+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},c=function(o,n){if(!l("head"))return!1;if(null!==o()&&!t.document.getElementById(n)){var e=t.document.createElement("style");e.id=n,e.innerHTML=o(),t.document.head.appendChild(e)}},f=function t(){var o={},n=!1,e=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],e++);for(var i=function(e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n&&"[object Object]"===Object.prototype.toString.call(e[i])?o[i]=t(o[i],e[i]):o[i]=e[i])};e<arguments.length;e++)i(arguments[e]);return o},m=function(o){var n=t.document.createElement("div");return n.innerHTML=o,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,x=function(n,e,s,c){if(!l("body"))return!1;o||u.Notify.init({});var p=f(!0,o,{});if("object"===typeof s&&!Array.isArray(s)||"object"===typeof c&&!Array.isArray(c)){var x={};"object"===typeof s?x=s:"object"===typeof c&&(x=c),o=f(!0,o,x)}var y=o[n.toLocaleLowerCase("en")];d++,"string"!==typeof e&&(e="Notiflix "+n),o.plainText&&(e=m(e)),!o.plainText&&e.length>o.messageMaxLength&&(o=f(!0,o,{closeButton:!0,messageMaxLength:150}),e='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),e.length>o.messageMaxLength&&(e=e.substring(0,o.messageMaxLength)+"..."),"shadow"===o.fontAwesomeIconStyle&&(y.fontAwesomeIconColor=y.background),o.cssAnimation||(o.cssAnimationDuration=0);var b=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(b.id=r.wrapID,b.style.width=o.width,b.style.zIndex=o.zindex,b.style.opacity=o.opacity,"center-center"===o.position?(b.style.left=o.distance,b.style.top=o.distance,b.style.right=o.distance,b.style.bottom=o.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===o.position?(b.style.left=o.distance,b.style.right=o.distance,b.style.top=o.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===o.position?(b.style.left=o.distance,b.style.right=o.distance,b.style.bottom=o.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===o.position?(b.style.right=o.distance,b.style.bottom=o.distance,b.style.top="auto",b.style.left="auto"):"left-top"===o.position?(b.style.left=o.distance,b.style.top=o.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===o.position?(b.style.left=o.distance,b.style.bottom=o.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=o.distance,b.style.top=o.distance,b.style.left="auto",b.style.bottom="auto"),o.backOverlay){var g=t.document.getElementById(r.overlayID)||t.document.createElement("div");g.id=r.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=o.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=y.backOverlayColor||o.backOverlayColor,g.className=o.cssAnimation?"nx-with-animation":"",g.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(b);var h=t.document.createElement("div");h.id=o.ID+"-"+d,h.className=o.className+" "+y.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&"function"!==typeof s?"nx-with-close-button":"")+" "+("function"===typeof s?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),h.style.fontSize=o.fontSize,h.style.color=y.textColor,h.style.background=y.background,h.style.borderRadius=o.borderRadius,h.style.pointerEvents="all",o.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.fontFamily='"'+o.fontFamily+'", '+i,o.cssAnimation&&(h.style.animationDuration=o.cssAnimationDuration+"ms");var w="";if(o.closeButton&&"function"!==typeof s&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+y.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)h.innerHTML='<i style="color:'+y.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+y.fontAwesomeClassName+" "+("shadow"===o.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+e+"</span>"+(o.closeButton?w:"");else{var v="";n===a.Success?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===a.Failure?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===a.Warning?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===a.Info&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),h.innerHTML=v+'<span class="nx-message nx-with-icon">'+e+"</span>"+(o.closeButton?w:"")}else h.innerHTML='<span class="nx-message">'+e+"</span>"+(o.closeButton?w:"");if("left-bottom"===o.position||"right-bottom"===o.position){var k=t.document.getElementById(r.wrapID);k.insertBefore(h,k.firstChild)}else t.document.getElementById(r.wrapID).appendChild(h);var N=t.document.getElementById(h.id);if(N){var C,I,z=function(){N.classList.add("nx-remove");var o=t.document.getElementById(r.overlayID);o&&b.childElementCount<=0&&o.classList.add("nx-remove"),clearTimeout(C)},A=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var o=t.document.getElementById(r.overlayID);o&&null!==o.parentNode&&o.parentNode.removeChild(o)}clearTimeout(I)};if(o.closeButton&&"function"!==typeof s&&t.document.getElementById(h.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){A(),clearTimeout(t)}),o.cssAnimationDuration)})),("function"===typeof s||o.clickToClose)&&N.addEventListener("click",(function(){"function"===typeof s&&s(),z();var t=setTimeout((function(){A(),clearTimeout(t)}),o.cssAnimationDuration)})),!o.closeButton&&"function"!==typeof s){var W=function(){C=setTimeout((function(){z()}),o.timeout),I=setTimeout((function(){A()}),o.timeout+o.cssAnimationDuration)};W(),o.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(C),clearTimeout(I)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),W()})))}}if(o.showOnlyTheLastOne&&d>0)for(var j=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+d+"])"),Z=0;Z<j.length;Z++){var L=j[Z];null!==L.parentNode&&L.parentNode.removeChild(L)}o=f(!0,o,p)},u={Notify:{init:function(t){o=f(!0,r,t),c(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!o)return s("You have to initialize the Notify module before call Merge function."),!1;o=f(!0,o,t)},success:function(t,o,n){x(a.Success,t,o,n)},failure:function(t,o,n){x(a.Failure,t,o,n)},warning:function(t,o,n){x(a.Warning,t,o,n)},info:function(t,o,n){x(a.Info,t,o,n)}}};return"object"===typeof t.Notiflix?f(!0,t.Notiflix,{Notify:u.Notify}):{Notify:u.Notify}}(i)}.apply(o,[]),void 0===e||(t.exports=e)}}]);
//# sourceMappingURL=453.38b80aa9.chunk.js.map