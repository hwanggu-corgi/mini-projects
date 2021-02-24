(this["webpackJsonpchat-application"]=this["webpackJsonpchat-application"]||[]).push([[0],{100:function(n,e,t){"use strict";t.r(e);var a,r,c,o,i=t(30),s=t(2),l=t.n(s),d=t(71),u=t.n(d),b=(t(86),t(87),t(33)),j=t(12),m=t(5),O=t(6),p=t(14),h=t(19),g=t(46),x=t(47),f=t(3),v="#EEEEEE",w=O.a.div(a||(a=Object(m.a)(["\n    background-color: ",";\n    padding: 1em;\n    border-radius: 5em;\n    display:flex;\n    flex-grow: 1;\n"])),v),y=O.a.textarea(r||(r=Object(m.a)(["\n    border: none;\n    resize: none;\n    width: 100%;\n    background-color: ",";\n    text-decoration: none;\n    padding: 1em;\n    overflow-y: scroll;\n\n    &:focus {\n        outline: none;\n    }\n"])),v);function F(n){return Object(f.jsx)(w,{children:Object(f.jsx)(y,{value:n.value,onChange:n.onChange})})}var k=O.a.button(c||(c=Object(m.a)(["\n    border: none;\n    background-color: white;\n    font-size: 1.5em;\n    text-decoration: none;\n    color: ",";\n    padding: 0.5em;\n    margin: 0.5em;\n    cursor: pointer;\n\n    &:disabled {\n        opacity: 0.8;\n    }\n"])),"#FFA341");function E(n){return Object(f.jsx)(k,{onClick:n.onClick,disabled:n.disabled,children:Object(f.jsx)(g.a,{icon:x.a})})}var S=Object(p.gql)(o||(o=Object(m.a)(["\n    mutation PostMutation(\n        $texts: String!\n    ) {\n        post(texts: $texts) {\n            id\n            postedBy {\n            id,\n                username\n            }\n            texts\n        }\n    }\n"])));function C(n){var e=Object(s.useState)(""),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(p.useMutation)(S,{variables:{texts:a},onCompleted:function(n){r("")},onError:function(n){alert("Error occured")}}),o=Object(h.a)(c,1)[0];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F,{value:a,onChange:function(n){return r(n.target.value)}}),Object(f.jsx)(E,{onClick:o,disabled:!function(n){return!(!n||""===n.trim())}(a)})]})}var A,B,M,T,I=t(77),z=t(78),U=t(81),$=t(80);function R(n){var e=n.texts.split("\n").map((function(n){return Object(f.jsx)("p",{children:n})})),t=localStorage.getItem("USERNAME"),a=O.a.div(A||(A=Object(m.a)(["\n        display: flex;\n        justify-content: ",";\n    "])),n.postedBy.username===t?"flex-end":"initial"),r=O.a.section(B||(B=Object(m.a)(["\n        margin: 0;\n        background-color: ",";\n        padding: 1em;\n        border-radius: 1.5em;\n        max-width: 12em;\n        font-size: 0.8em;\n        white-space: pre-wrap;\n    "])),"#FFA341"),c=O.a.header(M||(M=Object(m.a)(["\n        font-size: 0.7em;\n        padding: 0.5em 1em;\n    "])));return Object(f.jsx)(a,{children:Object(f.jsxs)("article",{children:[Object(f.jsx)(c,{children:Object(f.jsx)("span",{children:n.postedBy.username})}),Object(f.jsx)(r,{children:e})]})})}function N(n){return n.chats.map((function(n){return Object(f.jsx)(R,Object(i.a)({},n),n.id)}))}var D,P,L,q,H,K,_,J=function(n){Object(U.a)(t,n);var e=Object($.a)(t);function t(n){var a;return Object(I.a)(this,t),(a=e.call(this,n)).scrollToBottom=function(){a.scrollToBottomRef.current.scrollIntoView({behavior:"auto"})},a.scrollToBottomRef=l.a.createRef(),a}return Object(z.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var n=O.a.section(T||(T=Object(m.a)(["\n            flex-grow: 1;\n            overflow-y: scroll;\n            padding: 1em;\n        "])));return Object(f.jsxs)(n,{ref:this.sectionRef,children:[Object(f.jsx)(N,{chats:this.props.chats}),Object(f.jsx)("div",{ref:this.scrollToBottomRef})]})}}]),t}(s.Component);function Q(){var n=Object(s.useState)(!1),e=Object(h.a)(n,2),t=e[0],a=e[1],r=O.a.button(D||(D=Object(m.a)(["\n        background-color: transparent;\n        border: none;\n        padding: 0.5em;\n        cursor: pointer;\n    "]))),c=O.a.nav(P||(P=Object(m.a)(["\n        padding: 0.75em;\n        background-color: ",";\n    "])),"#FFA341"),o=O.a.div(L||(L=Object(m.a)(["\n        background-color: white;\n        width: 1.75em;\n        height: 0.12em;\n        margin-bottom: 0.4em;\n\n        &:last-child {\n            margin: 0;\n        }\n    "])));return Object(f.jsx)(c,{children:Object(f.jsxs)(r,{onClick:function(n){return a(!t)},children:[Object(f.jsx)(o,{}),Object(f.jsx)(o,{}),Object(f.jsx)(o,{})]})})}var V,G,W,X;function Y(n){var e=localStorage.getItem("USERNAME"),t=n.users.map((function(n){return Object(f.jsx)(Z,Object(i.a)(Object(i.a)({},n),{},{isOwner:e===n.username}),n.id)})),a=O.a.ul(q||(q=Object(m.a)(["\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        height: calc(100vh - ",");\n        width: 15em;\n        box-shadow: 2px 0px ",";\n    "])),"3.30em","#EEEEEE");return Object(f.jsx)(a,{children:t})}function Z(n){var e=O.a.div(H||(H=Object(m.a)(["\n        color: ",";\n        background-color: ",";\n        padding: 0.8em;\n        display: inline-block;\n        border-radius: 50%;\n        margin-right: 1em;\n\n        div {\n            width: 1.25em;\n            height: 1.25em;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n    "])),"#FFFFFF","#FFA341"),t=O.a.span(K||(K=Object(m.a)(["\n        font-size: 0.8em;\n    "]))),a=O.a.li(_||(_=Object(m.a)(["\n        display: flex;\n        align-items: center;\n        padding: 0.5em 1em;\n    "])));return Object(f.jsxs)(a,{children:[Object(f.jsx)(e,{children:Object(f.jsx)("div",{children:Object(f.jsx)(g.a,{icon:x.b})})}),Object(f.jsxs)(t,{children:[n.username," ",n.isOwner?"(Me)":""]})]})}var nn=O.a.div(V||(V=Object(m.a)(["\n    display: flex;\n"]))),en=O.a.section(G||(G=Object(m.a)(["\n    height: calc(100vh - ",");\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"])),"3.30em"),tn=O.a.section(W||(W=Object(m.a)(["\n    display: flex;\n    padding: 1em;\n"]))),an=Object(p.gql)(X||(X=Object(m.a)(["\n  {\n    users {\n      id,\n      username\n    },\n    chats {\n      id,\n      postedBy {\n        username\n      },\n      texts\n    }\n  }\n"])));var rn,cn,on,sn,ln,dn,un,bn,jn=function(){var n=Object(p.useQuery)(an).data,e=n&&n.chats?n.chats:[],t=n&&n.users?n.users:[];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Q,{}),Object(f.jsxs)(nn,{children:[Object(f.jsx)(Y,{users:t}),Object(f.jsxs)(en,{children:[Object(f.jsx)(J,{chats:e}),Object(f.jsx)(tn,{children:Object(f.jsx)(C,{})})]})]})]})},mn="#FFFFFF",On=O.a.section(rn||(rn=Object(m.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),"#FFA341"),pn=O.a.div(cn||(cn=Object(m.a)(["\n  color: ",";\n  width: 15em;\n  display: flex;\n  flex-direction: column;\n"])),mn),hn=O.a.h1(on||(on=Object(m.a)(["\n  text-align: center;\n"]))),gn=O.a.form(sn||(sn=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n\n  & > * {\n    display: block;\n  }\n\n  & > * {\n    margin-bottom: 0.5em;\n  }\n\n  & > input:last-of-type {\n    margin-bottom: 1.5em;\n  }\n\n  & > *:last-child {\n    margin: 0;\n  }\n"]))),xn=O.a.input(ln||(ln=Object(m.a)(["\n  padding: 1em;\n  border: none;\n  background-color: white;\n  border-radius: 5em;\n  text-align: center;\n\n  &:placeholder {\n      text-align: center;\n  }\n"]))),fn=O.a.button(dn||(dn=Object(m.a)(["\n  padding: 1em;\n  border: none;\n  border-radius: 5em;\n  text-align: center;\n  cursor: pointer;\n  background-color: ",";\n  color: ",";\n  font-size: 0.8em;\n"])),"#9A4D31",mn),vn=Object(O.a)(b.b)(un||(un=Object(m.a)(["\n  padding: 1em;\n  border: none;\n  border-radius: 5em;\n  text-align: center;\n  cursor: pointer;\n  background-color: ",";\n  font-size: 0.8em;\n  text-decoration: none;\n  color: black;\n"])),"#FFE24F"),wn=Object(p.gql)(bn||(bn=Object(m.a)(["\n  mutation LoginMutation(\n    $username: String!\n    $password: String!\n  ) {\n    login(\n      username: $username\n      password: $password\n    ) {\n      token\n      user {\n        username\n      }\n    }\n  }\n"])));var yn,Fn,kn,En,Sn,Cn,An,Bn,Mn=function(){var n=Object(j.f)(),e=Object(s.useState)(""),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(""),o=Object(h.a)(c,2),i=o[0],l=o[1],d=Object(p.useMutation)(wn,{variables:{username:a,password:i},onCompleted:function(e){var t=e.login;console.log(t),localStorage.setItem("AUTH_TOKEN",t.token),localStorage.setItem("USERNAME",t.user.username),n.push("/chat")}}),u=Object(h.a)(d,1)[0];return Object(f.jsx)(On,{children:Object(f.jsxs)(pn,{children:[Object(f.jsx)(hn,{children:"Chat Application"}),Object(f.jsxs)(gn,{children:[Object(f.jsx)(xn,{type:"text",placeholder:"Username",value:a,onChange:function(n){return r(n.target.value)}}),Object(f.jsx)(xn,{type:"password",placeholder:"Password",value:i,onChange:function(n){return l(n.target.value)}}),Object(f.jsx)(fn,{type:"submit",onClick:function(n){n.preventDefault(),u()},disabled:!function(n,e){return!(!n||!e)&&(""!==n.trim()&&""!==e.trim())}(a,i),children:"Login"}),Object(f.jsx)(vn,{to:"/signup",children:"Signup"})]})]})})},Tn="#FFFFFF",In=O.a.section(yn||(yn=Object(m.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),"#FFA341"),zn=O.a.div(Fn||(Fn=Object(m.a)(["\n  color: ",";\n  width: 15em;\n  display: flex;\n  flex-direction: column;\n"])),Tn),Un=O.a.h1(kn||(kn=Object(m.a)(["\n  text-align: center;\n"]))),$n=O.a.form(En||(En=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n\n  & > * {\n    display: block;\n  }\n\n  & > * {\n    margin-bottom: 0.5em;\n  }\n\n  & > input:last-of-type {\n    margin-bottom: 1.5em;\n  }\n\n  & > *:last-child {\n    margin: 0;\n  }\n"]))),Rn=O.a.input(Sn||(Sn=Object(m.a)(["\n  padding: 1em;\n  border: none;\n  background-color: white;\n  border-radius: 5em;\n  text-align: center;\n\n  &:placeholder {\n      text-align: center;\n  }\n"]))),Nn=O.a.button(Cn||(Cn=Object(m.a)(["\n  padding: 1em;\n  border: none;\n  border-radius: 5em;\n  text-align: center;\n  cursor: pointer;\n  background-color: ",";\n  color: ",";\n  font-size: 0.8em;\n\n  &:disabled,\n  &[disabled]{\n    opacity: 0.6;\n  }\n"])),"#9A4D31",Tn),Dn=Object(O.a)(b.b)(An||(An=Object(m.a)(["\n  padding: 1em;\n  border: none;\n  border-radius: 5em;\n  text-align: center;\n  cursor: pointer;\n  background-color: ",";\n  font-size: 0.8em;\n  text-decoration: none;\n  color: black;\n"])),"#FFE24F"),Pn=Object(p.gql)(Bn||(Bn=Object(m.a)(["\n  mutation SignupMutation(\n    $username: String!\n    $password: String!\n  ) {\n    signup(\n      username: $username\n      password: $password\n    ) {\n      token\n      user {\n        username\n      }\n    }\n  }\n"])));var Ln=function(n){var e=Object(j.f)(),t=Object(s.useState)(""),a=Object(h.a)(t,2),r=a[0],c=a[1],o=Object(s.useState)(""),i=Object(h.a)(o,2),l=i[0],d=i[1],u=Object(s.useState)(""),b=Object(h.a)(u,2),m=b[0],O=b[1],g=Object(p.useMutation)(Pn,{variables:{username:r,password:l},onCompleted:function(n){var t=n.signup;localStorage.setItem("AUTH_TOKEN",t.token),localStorage.setItem("USERNAME",t.user.username),e.push("/chat")}}),x=Object(h.a)(g,1)[0];return Object(f.jsx)(In,{children:Object(f.jsxs)(zn,{children:[Object(f.jsx)(Un,{children:"Chat Application"}),Object(f.jsxs)($n,{children:[Object(f.jsx)(Rn,{type:"text",placeholder:"Username",value:r,onChange:function(n){return c(n.target.value)}}),Object(f.jsx)(Rn,{type:"password",placeholder:"Password",value:l,onChange:function(n){return d(n.target.value)}}),Object(f.jsx)(Rn,{type:"password",placeholder:"Password Confirm",value:m,onChange:function(n){return O(n.target.value)}}),Object(f.jsx)(Nn,{type:"submit",onClick:function(n){n.preventDefault(),x()},disabled:!function(n,e,t){return!!(n&&e&&t)&&(""!==n.trim()&&(""!==e.trim()&&(""!==t.trim()&&e.value===t.value)))}(r,l,m),children:"Signup"}),Object(f.jsx)(Dn,{to:"/",children:"Back"})]})]})})};var qn=function(){return Object(f.jsx)(b.a,{children:Object(f.jsx)("main",{className:"App",children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/chat",component:jn}),Object(f.jsx)(j.a,{exact:!0,path:"/signup",component:Ln}),Object(f.jsx)(j.a,{exact:!0,path:"/",component:Mn})]})})})},Hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,101)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),a(n),r(n),c(n),o(n)}))},Kn=t(79),_n=Object(p.createHttpLink)({uri:"http://localhost:4000/"}),Jn=Object(Kn.a)((function(n,e){var t=e.headers,a=localStorage.getItem("AUTH_TOKEN");return{headers:Object(i.a)(Object(i.a)({},t),{},{authorization:a?"Bearer ".concat(a):""})}})),Qn=new p.ApolloClient({link:Jn.concat(_n),cache:new p.InMemoryCache});u.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(p.ApolloProvider,{client:Qn,children:Object(f.jsx)(qn,{})})}),document.getElementById("root")),Hn()},86:function(n,e,t){},87:function(n,e,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.a10ccc4a.chunk.js.map