(this["webpackJsonpchat-application"]=this["webpackJsonpchat-application"]||[]).push([[0],{81:function(n,e,t){},82:function(n,e,t){},95:function(n,e,t){"use strict";t.r(e);var c,a,r,i=t(2),o=t.n(i),s=t(70),d=t.n(s),l=(t(81),t(82),t(31)),j=t(12),b=t(5),p=t(6),u=t(28),h=t(44),x=t(45),O=t(4);function m(){var n=p.a.button(c||(c=Object(b.a)(["\n        border: none;\n        background-color: white;\n        font-size: 1.5em;\n        text-decoration: none;\n        color: ",";\n        padding: 0.5em;\n        margin: 1em;\n        cursor: pointer;\n    "])),"#FFA341");return Object(O.jsx)(n,{children:Object(O.jsx)(h.a,{icon:x.a})})}var g="#EEEEEE";function f(){var n=p.a.div(a||(a=Object(b.a)(["\n        background-color: ",";\n        padding: 1em;\n        border-radius: 5em;\n        display:flex;\n    "])),g),e=p.a.textarea(r||(r=Object(b.a)(["\n        border: none;\n        resize: none;\n        width: 100%;\n        background-color: ",";\n        text-decoration: none;\n        padding: 1em;\n        overflow-y: scroll;\n\n        &:focus {\n            outline: none;\n        }\n    "])),g);return Object(O.jsx)(n,{children:Object(O.jsx)(e,{})})}var v,F,y=t(49);function w(n){var e=n.texts.split("\n").map((function(n){return Object(O.jsx)("p",{children:n})})),t=p.a.section(v||(v=Object(b.a)(["\n        margin: 0;\n        background-color: ",";\n        padding: 1em;\n        border-radius: 1.5em;\n        max-width: 12em;\n        font-size: 0.8em;\n        white-space: pre-wrap;\n    "])),"#FFA341"),c=p.a.header(F||(F=Object(b.a)(["\n        font-size: 0.7em;\n        padding: 0.5em 1em;\n    "])));return Object(O.jsxs)("article",{children:[Object(O.jsx)(c,{children:Object(O.jsx)("span",{children:n.postedBy.username})}),Object(O.jsx)(t,{children:e})]})}function k(n){return n.chats.map((function(n){return Object(O.jsx)(w,Object(y.a)({},n),n.id)}))}var E,A,C,S,z,B,L,I=t(76);function P(){var n=Object(i.useState)(!1),e=Object(I.a)(n,2),t=e[0],c=e[1],a=p.a.button(E||(E=Object(b.a)(["\n        background-color: transparent;\n        border: none;\n        padding: 0.5em;\n        cursor: pointer;\n    "]))),r=p.a.nav(A||(A=Object(b.a)(["\n        padding: 0.75em;\n        background-color: ",";\n    "])),"#FFA341"),o=p.a.div(C||(C=Object(b.a)(["\n        background-color: white;\n        width: 1.75em;\n        height: 0.12em;\n        margin-bottom: 0.4em;\n\n        &:last-child {\n            margin: 0;\n        }\n    "])));return Object(O.jsx)(r,{children:Object(O.jsxs)(a,{onClick:function(n){return c(!t)},children:[Object(O.jsx)(o,{}),Object(O.jsx)(o,{}),Object(O.jsx)(o,{})]})})}var J,M,T,q,D;function H(n){var e=n.users.map((function(n){return Object(O.jsx)(N,Object(y.a)({},n),n.id)})),t=p.a.ul(S||(S=Object(b.a)(["\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        height: 100vh;\n        width: 15em;\n        box-shadow: 2px 0px ",";\n    "])),"#EEEEEE");return Object(O.jsx)(t,{children:e})}function N(n){var e=p.a.div(z||(z=Object(b.a)(["\n        color: ",";\n        background-color: ",";\n        padding: 0.8em;\n        display: inline-block;\n        border-radius: 50%;\n        margin-right: 1em;\n\n        div {\n            width: 1.25em;\n            height: 1.25em;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n    "])),"#FFFFFF","#FFA341"),t=p.a.span(B||(B=Object(b.a)(["\n        font-size: 0.8em;\n    "]))),c=p.a.li(L||(L=Object(b.a)(["\n        display: flex;\n        align-items: center;\n        padding: 0.5em 1em;\n    "])));return Object(O.jsxs)(c,{children:[Object(O.jsx)(e,{children:Object(O.jsx)("div",{children:Object(O.jsx)(h.a,{icon:x.b})})}),Object(O.jsx)(t,{children:n.username})]})}var Q=Object(u.gql)(J||(J=Object(b.a)(["\n  {\n    users {\n      id,\n      username\n    },\n    chats {\n      id,\n      postedBy {\n        username\n      },\n      texts\n    }\n  }\n"])));var G,K,R,U,V,W=function(){var n=Object(u.useQuery)(Q).data,e=n&&n.chats?n.chats:[],t=n&&n.users?n.users:[],c=p.a.div(M||(M=Object(b.a)(["\n      display: flex;\n    "]))),a=p.a.section(T||(T=Object(b.a)(["\n      padding: 1em;\n      display: flex;\n      flex-direction: column;\n    "]))),r=p.a.section(q||(q=Object(b.a)(["\n\n    "]))),i=p.a.section(D||(D=Object(b.a)(["\n      display: flex;\n    "])));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{}),Object(O.jsxs)(c,{children:[Object(O.jsx)(H,{users:t}),Object(O.jsxs)(a,{children:[Object(O.jsx)(r,{children:Object(O.jsx)(k,{chats:e})}),Object(O.jsxs)(i,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(m,{})]})]})]})]})};var X,Y,Z,$,_,nn=function(){var n=p.a.section(G||(G=Object(b.a)(["\n    width: 100vw;\n    height: 100vh;\n    background-color: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "])),"#FFA341"),e=p.a.div(K||(K=Object(b.a)(["\n    color: ",";\n    width: 15em;\n    display: flex;\n    flex-direction: column;\n  "])),"#FFFFFF"),t=p.a.h1(R||(R=Object(b.a)(["\n    text-align: center;\n  "]))),c=p.a.form(U||(U=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n\n    & > * {\n      display: block;\n    }\n\n    & > * {\n      margin-bottom: 0.5em;\n    }\n\n    & > input:last-of-type {\n      margin-bottom: 1.5em;\n    }\n\n    & > *:last-child {\n      margin: 0;\n    }\n  "]))),a=p.a.input(V||(V=Object(b.a)(["\n    padding: 1em;\n    border: none;\n    background-color: white;\n    border-radius: 5em;\n    text-align: center;\n\n    &:placeholder {\n        text-align: center;\n    }\n  "])));return Object(O.jsx)(n,{children:Object(O.jsxs)(e,{children:[Object(O.jsx)(t,{children:"Chat Application"}),Object(O.jsxs)(c,{children:[Object(O.jsx)(a,{type:"text",placeholder:"username"}),Object(O.jsx)(a,{type:"password",placeholder:"password"}),Object(O.jsx)("button",{type:"submit",children:"Login"}),Object(O.jsx)(l.b,{to:"/signup",children:"Signup"})]})]})})};var en=function(){var n=p.a.section(X||(X=Object(b.a)(["\n    width: 100vw;\n    height: 100vh;\n    background-color: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "])),"#FFA341"),e=p.a.div(Y||(Y=Object(b.a)(["\n    color: ",";\n    width: 15em;\n    display: flex;\n    flex-direction: column;\n  "])),"#FFFFFF"),t=p.a.h1(Z||(Z=Object(b.a)(["\n    text-align: center;\n  "]))),c=p.a.form($||($=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n\n    & > * {\n      display: block;\n    }\n\n    & > * {\n      margin-bottom: 0.5em;\n    }\n\n    & > input:last-of-type {\n      margin-bottom: 1.5em;\n    }\n\n    & > *:last-child {\n      margin: 0;\n    }\n  "]))),a=p.a.input(_||(_=Object(b.a)(["\n    padding: 1em;\n    border: none;\n    background-color: white;\n    border-radius: 5em;\n    text-align: center;\n\n    &:placeholder {\n        text-align: center;\n    }\n  "])));return Object(O.jsx)(n,{children:Object(O.jsxs)(e,{children:[Object(O.jsx)(t,{children:"Chat Application"}),Object(O.jsxs)(c,{children:[Object(O.jsx)(a,{type:"text",placeholder:"username"}),Object(O.jsx)(a,{type:"password",placeholder:"password"}),Object(O.jsx)(a,{type:"password",placeholder:"password confirm"}),Object(O.jsx)("button",{type:"submit",children:"Signup"}),Object(O.jsx)(l.b,{to:"/signup",children:"Signup"})]})]})})};var tn=function(){return Object(O.jsx)(l.a,{children:Object(O.jsx)("main",{className:"App",children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/chat",component:W}),Object(O.jsx)(j.a,{exact:!0,path:"/signup",component:en}),Object(O.jsx)(j.a,{exact:!0,path:"/",component:nn})]})})})},cn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,96)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),c(n),a(n),r(n),i(n)}))},an=Object(u.createHttpLink)({uri:"http://localhost:4000"}),rn=new u.ApolloClient({link:an,cache:new u.InMemoryCache});d.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(u.ApolloProvider,{client:rn,children:Object(O.jsx)(tn,{})})}),document.getElementById("root")),cn()}},[[95,1,2]]]);
//# sourceMappingURL=main.81de9230.chunk.js.map