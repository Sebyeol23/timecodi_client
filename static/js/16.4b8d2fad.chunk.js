(window["webpackJsonppurple-react-free"]=window["webpackJsonppurple-react-free"]||[]).push([[16],{107:function(e,t,a){"use strict";function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],l=!0,n=!1,c=void 0;try{for(var r,m=e[Symbol.iterator]();!(l=(r=m.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(s){n=!0,c=s}finally{try{l||null==m.return||m.return()}finally{if(n)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return l}))},393:function(e,t,a){"use strict";a.r(t);var l=a(24),n=a(107),c=a(0),r=a.n(c),m=a(395);t.default=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1],i=function(){return s(!1)},d=function(){return s(!0)},o=Object(c.useState)(["David Grey","Stella Johnson","Marina Michel","John Doe"]),u=Object(n.a)(o,1)[0],b=Object(c.useState)(!0),E=(Object(n.a)(b,1)[0],Object(c.useState)([{id:1,content:"2023-04-25 14:00 ~ 16:00",checked:!1},{id:2,content:"2023-04-25 14:30 ~ 16:30",checked:!1},{id:3,content:"2023-04-25 15:00 ~ 17:00",checked:!1},{id:4,content:"2023-04-26 13:00 ~ 15:00",checked:!1}])),N=Object(n.a)(E,2),p=N[0],h=N[1],v=function(e){var t=Object(l.a)(p),a=e.target.name;t.map((function(e){e.id===Number(a)&&(e.checked=!0)})),h(t)};return r.a.createElement("div",null,r.a.createElement("div",{className:"page-header"},r.a.createElement("h3",{className:"page-title"},"Group 1"),r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Groups")),r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Group 1")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 grid-margin"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body",style:{height:"400px"}},r.a.createElement("h4",{className:"card-title"},r.a.createElement("i",{className:"mdi mdi-bookmark-check"})," Upcoming Meeting"),r.a.createElement("p",{className:"card-description"},"This is the next meeting info."),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Content")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"TITLE"),r.a.createElement("td",null,"Band Practice")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"WHEN"),r.a.createElement("td",null,"2023\ub144 4\uc6d4 25\uc77c")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"WHERE"),r.a.createElement("td",null,"\ud559\uc0dd\ud68c\uad00")),r.a.createElement("tr",null,r.a.createElement("td",{className:"font-weight-bold"},"MEMO"),r.a.createElement("td",null,"Bring your headphones:)"))))))),r.a.createElement("div",{className:"col-8 grid-margin stretch-card"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body",style:{height:"400px",overflowY:"auto",overflowX:"hidden"}},r.a.createElement("h4",{className:"card-title"},r.a.createElement("i",{className:"mdi mdi-poll"})," Vote"),r.a.createElement("p",{className:"card-description"},"Submit \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ucf58\uc194\ucc3d\uc5d0 \ucd9c\ub825\ub429\ub2c8\ub2e4. checked \ud56d\ubaa9 \ucc38\uace0"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(p)}},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,r.a.createElement("i",{className:"mdi mdi-checkbox-multiple-marked-outline"}))),p.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.content),r.a.createElement("td",null,r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:e.checked,onChange:v,name:e.id}),r.a.createElement("i",{className:"input-helper"})))))})))),r.a.createElement("button",{type:"submit",className:"btn btn-gradient-primary btn-block"},"Submit")))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 grid-margin"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"card-title"},r.a.createElement("i",{className:"mdi mdi-calendar-multiple-check"})," Group Calender"),r.a.createElement("p",{className:"card-description"},"Group Calender"),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg"},r.a.createElement("i",{className:"mdi mdi-calendar-plus"}),"Edit Meeting Info"),r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg"},r.a.createElement("i",{className:"mdi mdi-calendar-plus"}),"Create New Meeting")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"card-title"},r.a.createElement("i",{className:"mdi mdi-timetable"})," TimeTable"),r.a.createElement("p",{className:"card-description"},"TimeTable"),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg"},r.a.createElement("i",{className:"mdi mdi-calendar-plus"}),"Edit My TimeTable"),r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg"},r.a.createElement("i",{className:"mdi mdi-calendar-plus"}),"Create New Vote"))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 grid-margin stretch-card"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},r.a.createElement("i",{className:"mdi mdi-account"})," Members"),r.a.createElement("p",{className:"card-description"},"Click member's name"),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," ID "),r.a.createElement("th",null," Name "),r.a.createElement("th",null," Actions "))),r.a.createElement("tbody",null,u.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,"0"),r.a.createElement("td",{onClick:d,style:{cursor:"pointer"}},e),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-inverse-success btn-sm"},"TimeTable"),r.a.createElement("button",{type:"button",className:"btn btn-inverse-warning btn-sm"},"Add friend")))}))))),r.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-md btn-block"},r.a.createElement("i",{className:"mdi mdi-account-plus"}),"Invite New Member")))),r.a.createElement("div",{className:"col-4 grid-margin"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"\ud14c\uc2a4\ud2b8\uc6a9\uc785\ub2c8\ub2e4"),r.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-lg btn-block",onClick:d},"Launch demo modal"),r.a.createElement(m.a,{show:a,onHide:i},r.a.createElement(m.a.Header,{closeButton:!0},r.a.createElement(m.a.Title,null,"Modal heading")),r.a.createElement(m.a.Body,null,"Woohoo, you are reading this text in a modal! \ud14c\uc2a4\ud2b8"),r.a.createElement(m.a.Footer,null,r.a.createElement("button",{type:"button",className:"btn btn-gradient-secondary btn-lg btn-block",onClick:i},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-lg btn-block",onClick:i},"Save Changes"))))))))}}}]);
//# sourceMappingURL=16.4b8d2fad.chunk.js.map