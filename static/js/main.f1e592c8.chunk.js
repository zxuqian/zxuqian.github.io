(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{20:function(n,e,t){n.exports=t.p+"static/media/sample.df46860a.jpeg"},41:function(n,e,t){n.exports=t.p+"static/media/wechatQRcode.7b1b8d36.jpg"},47:function(n,e,t){n.exports=t(91)},54:function(n,e,t){},59:function(n,e,t){n.exports=t.p+"static/media/hero.f6396cd4.svg"},91:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(13),c=t.n(i),o=(t(52),t(53),t(54),t(44)),l=t(10),u=t(2),f=t(3),d=t(7);function m(){var n=Object(f.a)(["\n  align-self: ",";\n  margin: ",";\n  padding: ",";\n"]);return m=function(){return n},n}var s=u.c.div(m(),(function(n){return n.alignSelf||"initial"}),(function(n){return n.m||"initial"}),(function(n){return n.p||"initial"}));var p=a.a.forwardRef((function(n,e){var t=n.children,r=Object(d.a)(n,["children"]);return a.a.createElement(s,Object.assign({},r,{ref:e}),t)}));function g(){var n=Object(f.a)(["\n  display: flex;\n  flex: ",";\n  align-items: ",";\n  justify-content: ",";\n  flex-direction: ",";\n"]);return g=function(){return n},n}var h=Object(u.c)(p)(g(),(function(n){return n.flex||"initial"}),(function(n){return n.align||"stretch"}),(function(n){return n.justify||"flex-start"}),(function(n){return n.d||"row"}));var b=a.a.forwardRef((function(n,e){var t=n.children,r=n.flex,i=n.align,c=n.justify,o=n.d,l=Object(d.a)(n,["children","flex","align","justify","d"]);return a.a.createElement(h,Object.assign({ref:e,flex:r,align:i,justify:c,d:o},l),t)})),v=(t(59),t(38)),x=t(8);function E(){var n=Object(f.a)(["\n  position: absolute;\n  /* z-index: -1; */\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 100vw;\n"]);return E=function(){return n},n}var j=u.c.div(E());var O=function(n){var e=Object(v.a)({},n),t=Object(r.useRef)(null),i=Object(r.useContext)(u.a);return Object(r.useEffect)((function(){if(t.current){var n=new x.a(t.current);n.setup({bgcolor:"#123",retina:!0,resize:!0});var e=n.getForm(),r=new x.c;n.add({start:function(e){(r=x.b.distributeRandom(n.innerBound,80)).forEach((function(n){return n.ratio=.1}))},animate:function(t,a){var i=new x.c(new x.e(0,0),new x.e(n.size.x,0)).op(x.d.perpendicularFromPt);r.rotate2D(5e-4,n.center);var c=n.pointer;r.forEach((function(n,t){var r=i(n);x.d.distanceFromPt([n,r],c)<=50?n.ratio<.3&&(n.ratio+=.015):n.ratio>.1&&(n.ratio-=.01),e.stroke("rgba(255,255,255, ".concat(n.ratio,")"),1).line([n,r]),e.fillOnly(["#f03","#09f","#0c6"][t%3]).point(n,.6)}))}}),n.bindMouse().bindTouch().play()}}),[t,i.main.dark]),a.a.createElement(j,null,a.a.createElement("canvas",Object.assign({ref:t},e)))},w=t(39),y=t.n(w),k=t(4),R=function(n){var e=Object(r.useState)(0),t=Object(k.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(0),o=Object(k.a)(c,2),l=o[0],u=o[1],f=Object(r.useState)(0),d=Object(k.a)(f,2),m=d[0],s=d[1],p=Object(r.useCallback)((function(n){if(n&&n.children){var e=Array.from(n.children).reduce((function(n,e,t){var r=e.getBoundingClientRect().width;return a===t&&u(r),t<a?n+r+16:n}),0);s(e)}}),[a]);return{activeTab:a,activeWidth:l,indicatorOffset:m,onFilterTabClick:function(e,t){i(e),n(t)},filterBarRef:p}};function z(){var n=Object(f.a)(["\n  font-size: 16px;\n  padding: 8px 16px;\n  border: none;\n  background: none;\n  color: ",';\n  transition: color 0.2s linear 0.1s;\n\n  /* remove active box shadow  */\n  &:focus {\n    outline: 0;\n  }\n\n  &:not(:last-child) {\n    margin-right: 16px;\n  }\n\n  &:first-child {\n    ::before {\n      content: "";\n      display: block;\n      position: absolute;\n      background: ',";\n      width: ",";\n      z-index: -50;\n      top: 0;\n      bottom: 0;\n      left: ",";\n      transition: left 0.3s ease-in-out;\n    }\n  }\n"]);return z=function(){return n},n}function S(){var n=Object(f.a)(["\n  position: relative;\n"]);return S=function(){return n},n}var C=[{name:"\u6240\u6709",value:"*"},{name:"\u524d\u7aef",value:".frontend"},{name:"\u540e\u7aef",value:".backend"},{name:"\u79fb\u52a8\u7aef",value:".mobile"}];var F=u.c.div(S()),A=u.c.button(z(),(function(n){return n.active?"#fff":"initial"}),(function(n){return n.theme.main.primary}),(function(n){return n.indicatorWidth||0}),(function(n){return n.indicatorOffset||0})),T=function(n){n.children;var e=n.onFilter,t=(Object(d.a)(n,["children","onFilter"]),R(e)),r=t.activeTab,i=t.activeWidth,c=t.indicatorOffset,o=t.onFilterTabClick,l=t.filterBarRef;return a.a.createElement(F,{ref:l},C.map((function(n,e){return a.a.createElement(A,{active:e===r,indicatorWidth:i+"px",indicatorOffset:c+"px",key:e,onClick:o.bind(null,e,n.value)},n.name)})))},B=t(19),W=t.n(B);function M(){var n=Object(f.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  padding: 48px 0;\n  background: #fff;\n  opacity: 0;\n  transition: opacity 0.4s;\n\n  &:hover {\n    opacity: 1;\n    "," {\n      transform: translateY(32px);\n    }\n    button {\n      transform: translateY(-32px);\n    }\n  }\n\n  ",",\n  button {\n    transform: translateY(0);\n    transition: all 0.3s ease-in-out;\n  }\n\n  button {\n    background: none;\n    border: 2px solid ",";\n    padding: 10px 24px;\n    font-size: 14px;\n\n    :hover {\n      background-color: ",";\n      color: #fff;\n    }\n  }\n"]);return M=function(){return n},n}function P(){var n=Object(f.a)(["\n  h3 {\n    text-align: center;\n    margin: 0;\n    font-size: 20px;\n  }\n\n  p {\n    color: ",";\n    text-align: center;\n    padding: 0 12px;\n  }\n"]);return P=function(){return n},n}function Q(){var n=Object(f.a)(["\n  width: 400px;\n  height: 300px;\n  background: #cccccc;\n\n  @media screen and (max-width: 400px) {\n    width: 100vw;\n  }\n"]);return Q=function(){return n},n}var q=u.c.div(Q()),J=u.c.div(P(),(function(n){return n.theme.main.primary})),L=Object(u.c)(b)(M(),J,J,(function(n){return n.theme.main.primary}),(function(n){return n.theme.main.primary})),Y={content:{background:"none",border:"none"},overlay:{background:"rgba(255, 255, 255, 0.95)"}},D=function(n){var e=n.title,t=n.description,i=n.children,c=Object(r.useState)(!1),o=Object(k.a)(c,2),l=o[0],u=o[1];return a.a.createElement("div",null,a.a.createElement(q,null,a.a.createElement(L,null,a.a.createElement(J,null,a.a.createElement("h3",null,e),a.a.createElement("p",null,t)),a.a.createElement("button",{onClick:function(){u(!0)}},"\u67e5\u770b\u8be6\u60c5"))),a.a.createElement(W.a,{isOpen:l,onRequestClose:function(){u(!1)},style:Y},i))},G=[{id:1,category:["frontend"],title:"CR Insights \u9e70\u773c\u6295\u7814",description:"React + React Router + Apollo GraphQL + Ant Design + Echarts"},{id:2,category:["frontend"],title:"2018\u5e74\u5ea6\u5f71\u54cd\u529b\u699c\u5355\u7533\u62a5\u7cfb\u7edf",description:"React + React Router + Redux + Bootstrap"},{id:21,title:"\u620f\u4e01\u76f4\u64ad",category:["frontend","backend"],description:"Java + Spring Boot + JPA + MySQL + Tencent Cloud Services"},{id:3,title:"Vmoso Android\u5ba2\u6237\u7aef",category:["mobile"],description:"\u539f\u751fAndroid"},{id:4,title:"CHRM\u4eba\u529b\u8d44\u6e90\u7ba1\u7406\u7cfb\u7edf",category:["frontend","backend"],description:"Java + K2"},{id:5,title:"\u8d28\u4fdd\u67e5\u8be2\u7cfb\u7edf",category:["frontend","backend"],description:"PHP + MySQL + jQuery"}],H=t(40),I=t.n(H),K=t(20),N=t.n(K);function V(){var n=Object(f.a)(["\n  .slick-thumb {\n    bottom: -75px;\n    li {\n      width: auto;\n      height: auto;\n      img {\n        width: 100px;\n      }\n    }\n  }\n"]);return V=function(){return n},n}function X(){var n=Object(f.a)(["\n  /* color: #fff; */\n  margin-left: 150px;\n"]);return X=function(){return n},n}var $=u.c.div(X()),U=Object(u.c)(I.a)(V()),Z=function(n){return n.children,Object(d.a)(n,["children"]),a.a.createElement(b,{align:"center",justify:"center",style:{height:"100%"}},a.a.createElement(b,{style:{maxWidth:"1240px"}},a.a.createElement("div",{style:{maxWidth:"700px",padding:"0 24px"}},a.a.createElement(U,{dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},a.a.createElement("div",null,a.a.createElement("img",{src:N.a,width:"700",height:"400"})),a.a.createElement("div",null,a.a.createElement("img",{src:N.a,width:"700",height:"400"})),a.a.createElement("div",null,a.a.createElement("img",{src:N.a,width:"700",height:"400"})))),a.a.createElement($,null,a.a.createElement("h1",null,"\u9e70\u773c\u6295\u7814"),a.a.createElement("p",null,"\u57fa\u4e8eReact + Apollo GraphQL + Redux + Ant design + Echarts + Socket.io\u7684\u5927\u578b\u524d\u7aef\u9879\u76ee"),a.a.createElement("p",null,"\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb \u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb \u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb\u8fd9\u662f\u7b80\u4ecb"))))};function _(){var n=Object(f.a)(["\n  margin-top: 24px;\n  max-width: 1240px;\n  width: 100vw;\n  flex-wrap: wrap;\n"]);return _=function(){return n},n}var nn=Object(u.c)(b)(_()),en=function(){var n=Object(r.useRef)(null),e=Object(r.useRef)(null);return Object(r.useEffect)((function(){if(n.current){var t=new y.a(n.current,{itemSelector:".project-item",layoutMode:"fitRows"});e.current=t}}),[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{onFilter:function(n){var t=e.current;t&&t.arrange({filter:n})}}),a.a.createElement(nn,{ref:n,justify:"center"},G.map((function(n){return a.a.createElement("div",{key:n.id,className:"project-item ".concat(n.category.join(" "))},a.a.createElement(D,{title:n.title,description:n.description},a.a.createElement(Z,null)))}))))};function tn(){var n=Object(f.a)(["\n  background-color: ",";\n  height: 4px;\n  width: 20px;\n  margin: 12px 0px;\n"]);return tn=function(){return n},n}function rn(){var n=Object(f.a)(["\n  font-size: 28px;\n  margin-bottom: 0px;\n"]);return rn=function(){return n},n}var an=u.c.h1(rn()),cn=u.c.div(tn(),(function(n){return n.theme.main.gray}));var on=function(n){var e=n.children;return Object(d.a)(n,["children"]),a.a.createElement(a.a.Fragment,null,a.a.createElement(an,null,e),a.a.createElement(cn,null))};function ln(){var n=Object(f.a)(["\n  /* background: #eeffff; */\n  position: relative;\n  width: 50%;\n  padding: 0px 20px;\n\n  left: ",";\n  text-align: ",';\n\n  /* circle */\n  ::after {\n    content: "";\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    right: ',";\n    left: ",";\n    top: 4px;\n    background-color: white;\n    border: 4px solid ",";\n    border-radius: 50%;\n    z-index: 1;\n  }\n"]);return ln=function(){return n},n}function un(){var n=Object(f.a)(['\n  /* background: tran; */\n  position: relative;\n  ::after {\n    content: "";\n    width: 4px;\n    top: 4px;\n    bottom: 0;\n    left: calc(50% - 2px);\n    position: absolute;\n    background: ',";\n  }\n"]);return un=function(){return n},n}var fn=u.c.div(un(),(function(n){return n.theme.main.light})),dn=u.c.div(ln(),(function(n){return n.left?"0":"calc(50% + 2px)"}),(function(n){return n.left?"right":"left"}),(function(n){return n.left?"-10px":"auto"}),(function(n){return n.left?"auto":"-12px"}),(function(n){return n.theme.main.primary})),mn=function(n){var e=n.children;return a.a.createElement(fn,null,e)},sn=[{id:1,title:"\u534e\u5174\u8d44\u672c\u9010\u9e7fX",description:"\u9ad8\u7ea7\u524d\u7aef\u5de5\u7a0b\u5e08",duration:"2018.07-2019.08",content:"content long long long long long long long long long long long long long"},{id:2,title:"\u7f8e\u56fd\u65af\u8482\u6587\u65af\u7406\u5de5\u5b66\u9662",description:"\u8ba1\u7b97\u673a\u79d1\u5b66 \u7814\u7a76\u751f",duration:"2016.07-2018.01",content:"content long long long long long long long long long long long long long long"},{id:3,title:"\u534e\u7f8e\u5b8f\u5927\u4fe1\u606f\u6280\u672f\uff08\u5317\u4eac\uff09\u6709\u9650\u516c\u53f8",description:"Staff Software Engineer",duration:"2013.07-2016.07",content:""},{id:4,title:"\u81ea\u7531\u804c\u4e1a",description:"\u8f6f\u4ef6\u5de5\u7a0b\u5e08",duration:"2011.02 - 2013.01",content:""},{id:5,title:"\u5317\u4eac\u5927\u5b66\u7f51\u7edc\u6559\u80b2\u5b66\u9662",description:"\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u7855\u58eb \u4e13\u5347\u672c",duration:"2010.07-2014.01",content:""},{id:6,title:"\u5317\u4eac\u5317\u5927\u8f6f\u4ef6\u5de5\u7a0b\u53d1\u5c55\u6709\u9650\u516c\u53f8",description:"\u8f6f\u4ef6\u5de5\u7a0b\u5e08",duration:"2010.07-2010.12",content:""}];function pn(){var n=Object(f.a)(["\n  margin: 0;\n"]);return pn=function(){return n},n}function gn(){var n=Object(f.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return gn=function(){return n},n}function hn(){var n=Object(f.a)(["\n  font-size: 12px;\n  color: ",";\n  /* margin-top: -8px;\n  margin-bottom: 6px; */\n"]);return hn=function(){return n},n}function bn(){var n=Object(f.a)(["\n  font-size: 18px;\n  margin: 4px 0;\n"]);return bn=function(){return n},n}function vn(){var n=Object(f.a)(["\n  /* background: ","; */\n  border-radius: 6px;\n  padding: 2px 12px;\n"]);return vn=function(){return n},n}var xn=u.c.div(vn(),(function(n){return n.theme.main.primary})),En=u.c.h4(bn()),jn=u.c.p(hn(),(function(n){return n.theme.main.gray})),On=u.c.p(gn(),(function(n){return n.theme.main.gray})),wn=u.c.p(pn()),yn=function(n){return a.a.createElement("div",null,a.a.createElement(mn,null,sn.map((function(n,e){return a.a.createElement(dn,{left:e%2===0,key:n.id},a.a.createElement(xn,null,a.a.createElement(En,null,n.title),a.a.createElement(On,null,n.description),a.a.createElement(jn,null,n.duration),a.a.createElement(wn,null,n.content)))}))))},kn=t(41),Rn=t.n(kn),zn=t(11),Sn=t(0);function Cn(){var n=Object(f.a)(["\n  position: absolute;\n  bottom: 1.4em;\n"]);return Cn=function(){return n},n}function Fn(){var n=Object(f.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: flex-end;\n  position: relative;\n"]);return Fn=function(){return n},n}function An(){var n=Object(f.a)(["\n  color: inherit;\n"]);return An=function(){return n},n}function Tn(){var n=Object(f.a)(["\n  margin: 0;\n  svg {\n    margin: 0 12px;\n  }\n"]);return Tn=function(){return n},n}function Bn(){var n=Object(f.a)(["\n  margin-top: 24px;\n  padding: 24px;\n  background-color: ",";\n  color: ",";\n"]);return Bn=function(){return n},n}function Wn(n){var e=n.url,t=n.children;return a.a.createElement(qn,{href:e},t)}function Mn(n){var e=n.content,t=n.children,i=Object(r.useState)(!1),c=Object(k.a)(i,2),o=c[0],l=c[1];return a.a.createElement(Jn,{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)}},o&&a.a.createElement(Ln,null,e),t)}var Pn=u.c.footer(Bn(),(function(n){return n.theme.main.gray}),(function(n){return n.theme.main.light})),Qn=u.c.p(Tn()),qn=u.c.a(An()),Jn=u.c.div(Fn()),Ln=u.c.div(Cn()),Yn=function(n){return a.a.createElement(Pn,null,a.a.createElement(Sn.b.Provider,{value:{size:"1.2em"}},a.a.createElement(Qn,null,a.a.createElement(Mn,{content:a.a.createElement("img",{src:Rn.a,width:"150",alt:"\u5fae\u4fe1\u4e8c\u7ef4\u7801"})},a.a.createElement(zn.f,null)),a.a.createElement(Wn,{url:"https://weibo.com/jeffava"},a.a.createElement(zn.e,null)),a.a.createElement(Wn,{url:"https://github.com/zxuqian"},a.a.createElement(zn.b,null)),a.a.createElement(Wn,{url:"https://www.linkedin.com/in/zxuqian"},a.a.createElement(zn.c,null)),a.a.createElement(Wn,{url:"https://twitter.com/zxuqian"},a.a.createElement(zn.d,null)),a.a.createElement(Wn,{url:"https://www.facebook.com/zxuqian"},a.a.createElement(zn.a,null)))),a.a.createElement("p",null,"\xa92019 \u5f20\u65ed\u4e7e \u4fdd\u6301\u4f18\u79c0\uff0c\u6301\u7eed\u8fdb\u6b65"))};function Dn(){var n=Object(f.a)(["\n  list-style: none;\n  display: inline-block;\n  :not(:last-child) {\n    margin-right: 24px;\n  }\n"]);return Dn=function(){return n},n}function Gn(){var n=Object(f.a)(["\n  margin: 0;\n"]);return Gn=function(){return n},n}function Hn(){var n=Object(f.a)(["\n  color: ",";\n"]);return Hn=function(){return n},n}function In(){var n=Object(f.a)(["\n  color: #fff;\n  /* width: 60%; */\n  /* padding: 0 20%; */\n  line-height: 1.5em;\n  /* text-align: center; */\n\n  @media screen and (max-width: 600px) {\n    font-size: 20px;\n  }\n"]);return In=function(){return n},n}function Kn(){var n=Object(f.a)(["\n  position: relative;\n  z-index: 1;\n"]);return Kn=function(){return n},n}function Nn(){var n=Object(f.a)(["\n  /* background: #cccccc; */\n  height: 100vh;\n  width: 100vw;\n  padding: 24px 0;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  /* flex: 1 1 auto; */\n"]);return Nn=function(){return n},n}var Vn=Object(u.c)(b)(Nn()),Xn=u.c.div(Kn()),$n=u.c.h1(In()),Un=u.c.strong(Hn(),(function(n){return n.theme.main.primary})),Zn=(u.c.h1(Gn()),u.c.li(Dn()),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Vn,null,a.a.createElement(O,null),a.a.createElement(Xn,null,a.a.createElement($n,{style:{marginTop:0}},"\u6211\u662f",a.a.createElement(Un,null," \u5f20\u65ed\u4e7e")),a.a.createElement($n,null,"<\u524d\u7aef\u5de5\u7a0b\u5e08 />"),a.a.createElement($n,null,"\u64c5\u957f\u57fa\u4e8eReact\u751f\u6001\u7684\u9879\u76ee\u5f00\u53d1"),a.a.createElement($n,null,"\u52c7\u4e8e\u63d0\u5347\uff0c\u4e50\u4e8e\u6c42\u77e5\u3002"))),a.a.createElement("section",null,a.a.createElement(on,null,"\u4f5c\u54c1"),a.a.createElement(en,null)),a.a.createElement("section",null,a.a.createElement(on,null,"\u7ecf\u5386"),a.a.createElement(yn,null)),a.a.createElement(Yn,null))}),_n={main:{primary:"#00adb5",gray:"#393e46",dark:"#222831",light:"#eeeeee"}};var ne=function(){return a.a.createElement(u.b,{theme:_n},a.a.createElement(o.a,null,a.a.createElement("div",null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/"},a.a.createElement(Zn,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));W.a.setAppElement("#root"),c.a.render(a.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.f1e592c8.chunk.js.map