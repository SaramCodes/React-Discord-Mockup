(this["webpackJsonpdiscord-chat"]=this["webpackJsonpdiscord-chat"]||[]).push([[0],{12:function(n,e,t){n.exports=t(19)},19:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(7),i=t.n(o),c=t(3),d=t(1),l=t(2);function s(){var n=Object(l.a)(["\n    font-size: 40px;\n    font-weight: 700;\n    text-align: center;\n    text-transform: capitalize;\n    color: ",";\n    margin-bottom: 50px;\n"]);return s=function(){return n},n}function u(){var n=Object(l.a)(["\n    display: inline-block;\n    background-color: transparent;\n    font-size: 12px;\n    font-weight: 700;\n    padding: 13px 27px;\n    border-radius: 3px;\n    color: ",";\n    cursor: pointer;\n    border: 3px solid ",";\n    box-shadow: 0 0 0 0 transparent;\n    letter-spacing: 1px;\n    transition-duration: 0.3s;\n    transition-timing-function: cubic-bezier(0, 0.59, 0.25, 1);\n    text-align:center;\n    user-select: none;\n    transform: scale(1);\n\n    span{\n        font-size:15px;\n    }\n\n    &:hover{\n        letter-spacing: 5px;\n    }\n    &:active{\n        transform: scale(0.98);\n        border-radius: 0;\n        box-shadow: 5px 10px 0 0 ",";\n        letter-spacing: 5px;\n    }\n    \n"]);return u=function(){return n},n}function m(){var n=Object(l.a)(['\n    *{\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    h1,h2,h3,h4,h5,h6,p,span,li,input,button,a, div{\n        font-family: "Spartan", "Arial", sans-serif;\n        transition-duration: 0.3s;\n        transition-timing-function: cubic-bezier(0,0.59,0.25,1);\n    }\n\n    html, body{\n      height: 100%;\n    }\n\n    body{\n        transition-duration:0.3s;\n        transition-timing-function: cubic-bezier(0, 0.59, 0.25, 1);\n        background-color: ',"\n    }\n\n    #root{\n        max-width: 1300px;\n        width: 90%;\n        margin: auto;\n        padding: 50px 0;\n        \n    }\n\n    nav{\n        margin-bottom: 50px;\n    }\n\n"]);return m=function(){return n},n}var f=Object(d.b)(m(),(function(n){return"dark"===n.theme.mode?"#000":"#fff"})),h=d.c.a(u(),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"})),p=d.c.h1(s(),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}));function b(){var n=Object(l.a)(["\n    height: 100%;\n    flex-grow: 1;\n    background-color:  ",";\n\n\n    .chat-name-heading{\n        height: 60px;\n        border-bottom: 1px solid ",";\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n        line-height: 60px;\n        padding: 0 20px;\n        h5{\n            \n            font-size: 20px;\n            font-weight: 700;\n            color: ",";\n            span{\n                margin-right: 5px;\n                color: ",";\n            }\n        }\n    }\n\n\n    .chats{\n        padding: 0 20px;\n        height: calc(600px - 150px);\n        overflow: auto;\n        overflow-x: hidden;\n    }\n\n    .chat{\n        padding: 20px;\n        border-bottom: 1px solid ",";\n        display: flex;\n    }\n\n    .chat-avatar{\n        width: 40px;\n        flex-basis: 40px;\n        flex-shrink: 0;\n        height: 40px;\n        margin-right: 20px;\n        border-radius: 50%;\n        background-color: ",";\n        background-size: cover;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }\n\n    .chat-body{\n        flex-grow: 1;\n    }\n\n    .chat-user{\n        color: crimson;\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 1.5;\n        margin-bottom: 6px;\n        span{\n            color: ",";\n            font-size: 9px;\n            margin-left: 6px;\n            font-weight:400;\n        }\n    }\n\n    .chat-content{\n        width: 100%;\n        line-height: 1.5;\n        color: ",";\n        font-weight: 400;\n        font-size: 14px;\n    }\n"]);return b=function(){return n},n}function g(){var n=Object(l.a)(["\n    height: 100%;\n    flex-basis: 250px;\n    flex-shrink: 0;\n    background-color:  ",";\n    \n    .server-name-heading{\n        padding: 0 20px;\n        height: 60px;\n        border-bottom: 1px solid ",";\n        line-height: 60px;\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n        h5{\n            font-size: 14px;\n            user-select: none;\n            font-weight: 600;\n            color: ",";\n        }\n    }\n\n    .server-list{\n        list-style:none;\n        padding: 20px 0;\n    }\n    \n    .server{\n        display: block;\n        padding: 0 10px;\n        margin-bottom: 2px;\n        p{\n            cursor: pointer;\n            user-select: none;\n            padding: 10px 10px;\n            font-weight: 600;\n            color: ",";\n            font-size: 14px;\n            border-radius: 7px;\n            &:hover{\n                background-color: ",";\n            }\n            span{\n                color: ",";\n            }\n        }\n    }\n\n    .server-active{\n        p{\n            background-color: ",";\n            &:hover{\n                background-color: ",";\n            }\n        }\n    }\n\n"]);return g=function(){return n},n}function x(){var n=Object(l.a)(["\n    height: 100%;\n    flex-basis: 70px;\n    flex-shrink: 0;\n    background-color: ",";\n    padding: 20px 0;\n    overflow-x: hidden;\n    \n    .add-chat{\n        user-select: none;\n        cursor: pointer;\n        height: 50px;\n        width: 50px;\n        border: 1px dashed ","; \n        margin: 0 auto 40px auto;\n        border-radius: 50%;\n        line-height: 55px;\n        text-align: center;\n        font-size: 35px;\n        color: ",";\n\n\n\n\n        &:hover{\n            border-radius: 10px;\n            color: ",";\n            border-color: ",';\n        }\n    }\n    \n    .navigate-user-container{\n\n        height: 50px;\n        width: 50px;\n        position: relative;\n        margin: 0 auto 40px auto;\n        cursor: pointer;\n\n    }\n\n    .navigate-active{\n        &:before{\n            transition-duration: 0.3s;\n            transition-timing-function: cubic-bezier(0,0.59,0.25,1);\n            content: "";\n            height: 90%;\n            border-radius: 22px;\n            width: 9px;\n            top: 50%;\n            left: -15px;\n            background: ',";\n            position: absolute;\n            -webkit-transform: translateY(-50%);\n            transform: translateY(-50%)\n        }\n    }\n\n    .navigate-user{\n        height: 100%;\n        width: 100%;\n        border-radius: 50%;\n        background-color:  ",";\n        background-size: cover;\n        background-position: center center;\n        background-repeat: no-repeat;\n    }\n"]);return x=function(){return n},n}function v(){var n=Object(l.a)(["\n    background-color: ",";\n    position: relative;\n    margin: auto;\n    height: 600px;\n    width: 1000px;\n    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);\n    display: flex;\n    \n    div{\n        transition-duration: 0.3s;\n        transition-timing-function: cubic-bezier(0,0.59,0.25,1);\n    }\n\n    .add-chat-modal-container{\n        z-index: 2;\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        background: rgba(0,0,0,0.6);\n        display: none;\n    }\n\n    .add-chat-modal-container-show{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n\n    .add-chat-modal{\n        height: 300px;\n        width: 600px;\n        background-color: ",";\n        z-index: 2;\n        position: relative;\n        animation-name: float-in;\n        animation-duration:0.3s;\n        animation-timing-function: cubic-bezier(0,0.59,0.25,1);\n        animation-fill-mode: forwards;\n    }\n\n    .add-chat-modal-close{\n        height: 300px;\n        width: 600px;\n        background-color: ",";\n        z-index: 2;\n        position: relative;\n        animation-name: float-out;\n        animation-duration: 0.3s;\n        animation-timing-function: cubic-bezier(0,0.59,0.25,1);\n        animation-fill-mode: forwards;\n    }\n\n    .new-chat-heading{\n        height: 60px;\n        padding: 0 20px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom: 1px solid ",";\n\n\n        h5{\n            color: ",";\n            font-weight: 600;\n            font-size: 14px;\n        }\n\n        .new-chat-close{\n            height:15px;\n            width:15px;\n            position: relative;\n            cursor: pointer;    \n            &:after, &:before{\n                content: '';\n                height: 15px;\n                width: 3px;\n                border-radius: 1px;\n                position: absolute;\n                background-color: ",";\n                left: 45%;\n            }            \n            &:after{\n                transform: rotate(45deg);\n            }\n            &:before{\n                transform: rotate(-45deg);\n            }\n        }\n    }\n\n    .close-modal{\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    @keyframes float-in{\n        from{\n            opacity: 0;\n            transform: scale(0.95) rotateY(30deg);\n        }\n        to{\n            opacity: 1;\n            transform: scale(1) rotateY(0deg);\n        }\n    }\n    @keyframes float-out{\n        from{\n            opacity: 1;\n            transform: scale(1) rotateY(0deg);\n        }\n        to{\n            opacity: 0;\n            transform: scale(0.95) rotateY(30deg);\n        }\n    }\n    \n\n"]);return v=function(){return n},n}var k=d.c.div(v(),(function(n){return"dark"===n.theme.mode?"#1e2124":"#bbb"}),(function(n){return"dark"===n.theme.mode?"#373a3f":"#ddd"}),(function(n){return"dark"===n.theme.mode?"#373a3f":"#ddd"}),(function(n){return"dark"===n.theme.mode?"#2f3137":"#ccc"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"})),w=d.c.div(x(),(function(n){return"dark"===n.theme.mode?"#1e2124":"#bbb"}),(function(n){return"dark"===n.theme.mode?"#535559":"#7f7f7f"}),(function(n){return"dark"===n.theme.mode?"#535559":"#7f7f7f"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}),(function(n){return"dark"===n.theme.mode?"#43464c":"#BCB9B3"})),E=d.c.div(g(),(function(n){return"dark"===n.theme.mode?"#2f3137":"#ccc"}),(function(n){return"dark"===n.theme.mode?"#1e2124":"#bbb"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}),(function(n){return"dark"===n.theme.mode?"#373a3f":"#ddd"}),(function(n){return"dark"===n.theme.mode?"#8a8e93":"#707070"}),(function(n){return"dark"===n.theme.mode?"#43464c":"#BCB9B3"}),(function(n){return"dark"===n.theme.mode?"#43464c":"#BCB9B3"})),z=d.c.div(b(),(function(n){return"dark"===n.theme.mode?"#373a3f":"#ddd"}),(function(n){return"dark"===n.theme.mode?"#1e2124":"#bbb"}),(function(n){return"dark"===n.theme.mode?"#fff":"#000"}),(function(n){return"dark"===n.theme.mode?"#8a8e93":"#707070"}),(function(n){return"dark"===n.theme.mode?"#43464c":"#BCB9B3"}),(function(n){return"dark"===n.theme.mode?"#43464c":"#BCB9B3"}),(function(n){return"dark"===n.theme.mode?"#686c75":"#97938A"}),(function(n){return"dark"===n.theme.mode?"#ddd":"#111"})),y=function(){return r.a.createElement("div",{className:"navigate-user-container navigate-active"},r.a.createElement("div",{className:"navigate-user"}))},N=function(){var n=Object(a.useState)({visible:!1,btnActive:!0}),e=Object(c.a)(n,2),t=e[0],o=e[1],i=t.visible?"add-chat-modal-container add-chat-modal-container-show":"add-chat-modal-container",d=t.btnActive?"add-chat-modal":"add-chat-modal-close",l=function(){o({visible:!0,btnActive:!1}),setTimeout((function(){o({visible:!1,btnActive:!0})}),200)};return r.a.createElement(k,null,r.a.createElement("div",{className:i},r.a.createElement("div",{onClick:l,className:"close-modal"}),r.a.createElement("div",{className:d},r.a.createElement("div",{className:"new-chat-heading"},r.a.createElement("h5",null,"New Chat"),r.a.createElement("div",{class:"new-chat-close",onClick:l})))),r.a.createElement(w,null,r.a.createElement("div",{onClick:function(n){t.btnActive&&o({visible:!0,btnActive:t.btnActive})},className:"add-chat"},"+"),r.a.createElement(y,null)),r.a.createElement(E,null,r.a.createElement("div",{className:"server-name-heading"},r.a.createElement("h5",null,"Server Name")),r.a.createElement("ul",{className:"server-list"},r.a.createElement("li",{className:"server server-active"},r.a.createElement("p",null,r.a.createElement("span",null,"#"),"general")),r.a.createElement("li",{className:"server"},r.a.createElement("p",null,r.a.createElement("span",null,"#"),"bananas")))),r.a.createElement(z,null,r.a.createElement("div",{className:"chat-name-heading"},r.a.createElement("h5",null,r.a.createElement("span",null,"#"),"general")),r.a.createElement("div",{className:"chats"},r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"chat-avatar"}),r.a.createElement("div",{className:"chat-body"},r.a.createElement("div",{className:"chat-user"},"John Doe",r.a.createElement("span",null,"2/1/2020 4:28:56 AM")),r.a.createElement("div",{className:"chat-content"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eum quibusdam omnis quis eos consequatur! Rerum labore vitae excepturi eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore, illo saepe eligendi provident non vel accusantium inventore vero"))))))},B=function(){var n=Object(a.useState)({mode:"dark"}),e=Object(c.a)(n,2),t=e[0],o=e[1];return r.a.createElement(d.a,{theme:t},r.a.createElement("nav",null,r.a.createElement(h,{onClick:function(){return"dark"===t.mode?o({mode:"light"}):o({mode:"dark"})}},"Theme ",r.a.createElement("span",{role:"img"},"\ud83d\ude4c"))),r.a.createElement(p,null,"React Discord Template"),r.a.createElement(N,null),r.a.createElement(f,null))};i.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f241c80f.chunk.js.map