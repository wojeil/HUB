(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{33:function(e,t,a){e.exports={bigblue:"mystyle_bigblue__HJzxj"}},34:function(e,t,a){e.exports={bigpurple:"mystyle_bigpurple__23tRs"}},45:function(e,t,a){e.exports=a(82)},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),o=(a(50),a(15)),s=a(7),i=a(4),m={isAuthenticated:!1,isAdmin:!1,authenticate(e){var t=this;fetch("api/users/user",{credentials:"include"}).then((function(e){return console.log("response to authenticate ".concat(e)),200===e.status&&(t.isAuthenticated=!0,e.json(e))})).then((function(a){"Admin"===a.role&&(t.isAdmin=!0),console.log(t.isAdmin),"function"===typeof e&&(console.log("User in Auth.js ".concat(a)),e(a))})).catch((function(e){console.log("Error fetching authorized user.")}))},signout(e){var t=this;fetch("api/users/logout",{method:"POST",credentials:"include"}).then((function(a){t.isAuthenticated=!1,t.isAdmin=!1,"function"===typeof e&&e(!0)})).catch((function(t){console.log("Error logging out user."),"function"===typeof e&&e(!1)}))}},u=a(5),d=(a(51),Object(n.createContext)()),E=d.Provider;function f(e,t){switch(t.type){case"GET_USER":return t.payload;default:return e}}function p(e){e.value;var t=Object(o.a)(e,["value"]),a=Object(n.useReducer)(f,[]),l=Object(u.a)(a,2),c=l[0],s=l[1];return r.a.createElement(E,Object.assign({value:[c,s]},t))}var h=function(){console.log("NAV",m.isAuthenticated);var e=Object(n.useContext)(d),t=Object(u.a)(e,2),a=(t[0],t[1]),l=Object(i.g)();return m.isAuthenticated?r.a.createElement(s.b,{className:"nav-link",onClick:function(){m.signout((function(){l.push("/login"),a({type:"GET_USER",payload:{}})}))}},r.a.createElement("span",{id:"red"},"Logout")):r.a.createElement(s.b,{className:"nav-link",to:"/login"},r.a.createElement("span",{id:"green"},"Login"))},v={marginRight:10};var b=function(){var e=Object(n.useContext)(d),t=Object(u.a)(e,2),a=t[0],l=(t[1],Object(n.useState)(!1)),c=Object(u.a)(l,2),o=c[0],i=c[1],m=Object(n.useState)(window.innerWidth),E=Object(u.a)(m,2),f=E[0],p=E[1],b=function(){o&&f>991&&i(!1),p(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",b),function(){window.removeEventListener("resize",b)}}),[]),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-2"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},r.a.createElement("span",{id:"white"},"The HUB ")),r.a.createElement("div",{className:"".concat(o?"":"collapse ","navbar-collapse"),id:"navbarNav"},a.username?r.a.createElement("span",{id:"username",className:"userText ml-3 pt-1",to:"#"},"Hi ",a.username," !"):"",r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item "},a.username?r.a.createElement(s.b,{style:v,className:"nav-link",to:"/protected"},r.a.createElement("span",{id:"white"},"DashBoard")):""),r.a.createElement("li",{className:"nav-item "},a.username?r.a.createElement(s.b,{style:v,className:"nav-link",to:"/planner-search"},r.a.createElement("span",{id:"white"},a.username,"'s TEAM")):""),r.a.createElement("li",{className:"nav-item "},a.username?r.a.createElement(s.b,{style:v,className:"nav-link",to:"/planner"},r.a.createElement("span",{id:"white"},"Your Planner")):""),r.a.createElement("li",{className:"nav-item "},"Admin"===a.role?r.a.createElement(s.b,{style:v,className:"nav-link",to:"/admin-dash"},r.a.createElement("span",{id:"white"},"Edit DashBoard")):""),r.a.createElement("li",{className:"nav-item "},a.username?"":r.a.createElement(s.b,{style:v,className:"nav-link",to:"/register"},r.a.createElement("span",{id:"blue"},"Register a New User"))),r.a.createElement("li",{className:"nav-item "},r.a.createElement(h,null)))))};var g=function(e){var t=e.icon,a=e.title,n=e.children;return r.a.createElement("div",{className:"card mt-4",id:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,r.a.createElement("strong",null,r.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",a))),r.a.createElement("div",{className:"card-body"},n))};function y(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function N(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function j(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}var O=function(e){var t=e.onLogin,a=Object(n.useRef)(),l=Object(n.useRef)(),c=Object(n.useRef)();return r.a.createElement(y,null,r.a.createElement(g,{title:"Login with your Username and Password"},r.a.createElement("form",{ref:a,onSubmit:function(e){return e.preventDefault(),t({username:l.current.value,password:c.current.value})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{className:"form-control",ref:l,type:"text",name:"username",placeholder:"Enter Username"}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{className:"form-control",ref:c,type:"password",name:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-success",type:"submit"},"Submit")))))},w=a(33),k=a.n(w);var S=function(){var e=Object(i.h)(),t=Object(i.g)(),a=Object(n.useState)(!1),l=Object(u.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){var a;a=m.isAdmin?e.state||{from:{pathname:"/admin-dash"}}:e.state||{from:{pathname:"/protected"}},c&&t.push(a.from.pathname)}),[c,t,e.state]),r.a.createElement("div",{className:k.a.bigblue},r.a.createElement(O,{onLogin:function(e){console.log("Logging in "+JSON.stringify(e)),fetch("api/users/login",{method:"POST",body:JSON.stringify(e),credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status&&m.authenticate((function(){o(!0),console.log("Response in login ".concat(JSON.stringify(e)))}))})).catch((function(e){console.log("Error logging in.",e)}))}}))},x={Admin:"Admin",User:"User"};var T=function(e){var t=e.onRegister,a=Object(n.useRef)(),l=Object(n.useRef)(),c=Object(n.useRef)(),o=Object(n.useRef)();return r.a.createElement(y,null,r.a.createElement(g,{title:"Register New User"},r.a.createElement("form",{ref:a,onSubmit:function(e){return e.preventDefault(),t({username:l.current.value,password:c.current.value,role:x.User,manager:o.current.value})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{className:"form-control",ref:l,type:"text",name:"username",placeholder:"Enter Username"}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{className:"form-control",ref:c,type:"password",name:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("label",null,"Manager Password:"),r.a.createElement("input",{className:"form-control",ref:o,type:"text",name:"manager",placeholder:"Your manager's password"}),r.a.createElement("br",null)),r.a.createElement("button",{className:"btn btn btn-primary",type:"submit"},"Submit"))))},C=a(34),A=a.n(C);var R=function(){var e=Object(i.g)();return r.a.createElement("div",{className:A.a.bigpurple},r.a.createElement(b,null),r.a.createElement(T,{onRegister:function(t){fetch("api/plan/post",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){console.log("Empty Plan Created")})),fetch("api/users/register",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(a){200===a.status&&(console.log("Succesfully registered user!"),fetch("api/users/login",{method:"POST",body:JSON.stringify(t),credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(t){200===t.status&&m.authenticate((function(){m.isAdmin?e.push("/admin-dash"):e.push("/protected")}))})).catch((function(e){console.log("Error logging in.",e)})))})).catch((function(e){console.log("Error registering user.",e)}))}}))};a(57);var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container-fluid",id:"logindiv"},r.a.createElement("h1",{className:"display-4"},"Welcome to The HUB"),r.a.createElement("p",{className:"lead"},"A Home That Keeps You Connected."))),r.a.createElement(y,null,r.a.createElement("div",{className:"about",id:"homeContainer"},r.a.createElement("div",{className:"row",id:"homerow"},r.a.createElement("div",{className:"col"},r.a.createElement(g,{title:"About Us"},r.a.createElement("p",null,"We are your convenience in a workplace enviroment. The HUB was designed to facilitate work-flow through efficient communication. We believe Teamwork and Communication amongst peers will lead to greater results. Sign Up and experience success.")))))))},M=a(12),U=a.n(M),D=function(){return U.a.get("/api/dash/get")},P=function(e){return U.a.post("/api/dash/remove",e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},L=function(e){return U.a.post("/api/dash/add",e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},z=function(){return U.a.get("/api/plan/get")},W=function(e){return U.a.post("api/plan/update",e)},_=function(e){return U.a.get("api/search/team",e)},H=function(e){return U.a.get("api/search/"+e)};a(76);var B=function(e){var t=e.title,a=e.body,n=e.type,l=e.loadAnnouncements;return r.a.createElement("div",{className:"card",id:"announcement"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},t),r.a.createElement("h5",null,n),r.a.createElement("p",{className:"card-text"},a),m.isAdmin?r.a.createElement("button",{onClick:function(e){e.preventDefault(),P({title:t}),l()},type:"submit",className:"btn float-right"},"Delete"):""))};a(77);var J=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1];function c(){D().then((function(e){l(e.data.items)})).catch((function(e){return console.log(e)}))}Object(n.useEffect)((function(){c()}),[]);var o=a.filter((function(e){return"Short-Term"===e.type})),s=a.filter((function(e){return"Long-Term"===e.type}));return r.a.createElement("div",{className:"user",id:"dashBoard"},r.a.createElement(N,null,r.a.createElement(j,{size:"sm-6"},r.a.createElement("h1",null,"Short-Term"),r.a.createElement("div",{id:"shortTerm"},0===a.length?"":o.map((function(e,t){return r.a.createElement(B,{key:t,title:e.title,type:e.type,body:e.body,loadAnnouncements:c})})))),r.a.createElement(j,{size:"sm-6"},r.a.createElement("h1",null,"Long-Term"),r.a.createElement("div",{id:"longTerm"},0===a.length?"":s.map((function(e,t){return r.a.createElement(B,{key:t,title:e.title,type:e.type,body:e.body,loadAnnouncements:c})}))))))};var Y=function(){var e=Object(n.useContext)(d),t=Object(u.a)(e,2),a=t[0],l=t[1];return console.log(a),Object(n.useEffect)((function(){fetch("api/users/user",{credentials:"include"}).then((function(e){return console.log("response to authenticate ".concat(e)),e.json(e)})).then((function(e){console.log(e),l({type:"GET_USER",payload:e})})).catch((function(e){console.log("Error fetching authorized user.")}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(J,null))};var G=function(){return r.a.createElement("button",{className:"btn",type:"submit"},"Submit")};var I=function(e){var t=e.loadAnnouncements,a=Object(n.useRef)(),l=Object(n.useRef)(),c=Object(n.useRef)(),o=Object(n.useRef)();return r.a.createElement(g,{title:"Set a Goal for Your Team"},r.a.createElement("form",{ref:a,onSubmit:function(e){e.preventDefault(),L({title:l.current.value,type:c.current.value,body:o.current.value}),t()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlInput1"},"Title"),r.a.createElement("input",{ref:l,type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlSelect1"},"Example select"),r.a.createElement("select",{ref:c,className:"form-control",id:"exampleFormControlSelect1"},r.a.createElement("option",null,"Short-Term"),r.a.createElement("option",null,"Long-Term"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlTextarea1"},"Example textarea"),r.a.createElement("textarea",{ref:o,className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})),r.a.createElement(G,null)))};a(78);var K=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1];function c(){D().then((function(e){l(e.data.items)})).catch((function(e){return console.log(e)}))}Object(n.useEffect)((function(){c()}),[]);var o=a.filter((function(e){return"Short-Term"===e.type})),s=a.filter((function(e){return"Long-Term"===e.type}));return r.a.createElement("div",{className:"admin",id:"dashBoard"},r.a.createElement(N,null,r.a.createElement(j,{size:"sm-6"},r.a.createElement("h1",null,"Short-Term"),r.a.createElement("div",{id:"shortTerm"},0===a.length?"":o.map((function(e,t){return r.a.createElement(B,{key:t,title:e.title,type:e.type,body:e.body,loadAnnouncements:c})})))),r.a.createElement(j,{size:"sm-6"},r.a.createElement("h1",null,"Long-Term"),r.a.createElement("div",{id:"longTerm"},0===a.length?"":s.map((function(e,t){return r.a.createElement(B,{key:t,title:e.title,type:e.type,body:e.body,loadAnnouncements:c})}))))),r.a.createElement("hr",null),r.a.createElement(N,null,r.a.createElement(j,{size:"sm-4"},r.a.createElement(I,{loadAnnouncements:c}))))};var V=function(){var e=Object(n.useContext)(d),t=Object(u.a)(e,2),a=(t[0],t[1]);return Object(n.useEffect)((function(){fetch("api/users/user",{credentials:"include"}).then((function(e){return e.json(e)})).then((function(e){console.log(e),a({type:"GET_USER",payload:e})})).catch((function(e){console.log("Error fetching authorized user.")}))}),[]),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(K,null),r.a.createElement("hr",null))};a(79);var $=function(e){var t=e.loadPlans,a=e.update,l=Object(n.useRef)(),c=Object(n.useRef)(),o=Object(n.useRef)(),s=Object(n.useRef)();return r.a.createElement(y,null,r.a.createElement(g,{title:"Place Your Plan",id:"plannerForm"},r.a.createElement("form",{ref:l,onSubmit:function(e){e.preventDefault();var n=a[parseInt(o.current.value)];n.splice(c.current.value,1,s.current.value);var r=a;r.splice(o.current.value,1,n),W(r).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),t(),s.current.value=""}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlSelect1"},"Day:"),r.a.createElement("select",{ref:c,className:"form-control",id:"exampleFormControlSelect1"},r.a.createElement("option",{value:"0"},"Monday"),r.a.createElement("option",{value:"1"},"Tuesday"),r.a.createElement("option",{value:"2"},"Wednesday"),r.a.createElement("option",{value:"3"},"Thursday"),r.a.createElement("option",{value:"4"},"Friday"),r.a.createElement("option",{value:"5"},"Saturday"),r.a.createElement("option",{value:"6"},"Sunday"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlSelect1"},"Time:"),r.a.createElement("select",{ref:o,className:"form-control",id:"exampleFormControlSelect1"},r.a.createElement("option",{value:"0"},"0800"),r.a.createElement("option",{value:"1"},"0900"),r.a.createElement("option",{value:"2"},"1000"),r.a.createElement("option",{value:"3"},"1100"),r.a.createElement("option",{value:"4"},"1200"),r.a.createElement("option",{value:"5"},"1300"),r.a.createElement("option",{value:"6"},"1400"),r.a.createElement("option",{value:"7"},"1500"),r.a.createElement("option",{value:"8"},"1600"),r.a.createElement("option",{value:"9"},"1700"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlTextarea1"},"Example textarea"),r.a.createElement("textarea",{ref:s,className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})),r.a.createElement(G,null))))};var q=function(e){return r.a.createElement("button",Object.assign({className:"btn"},e,{role:"button"})," Clear All ")};var Q=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1];function c(){z().then((function(e){l(e.data[0].schedule)})).then((function(){})).catch((function(e){return console.log(e)}))}return Object(n.useEffect)((function(){c()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-striped table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Hours"),r.a.createElement("th",{scope:"col"},"Monday"),r.a.createElement("th",{scope:"col"},"Tuesday"),r.a.createElement("th",{scope:"col"},"Wednesday"),r.a.createElement("th",{scope:"col"},"Thursday"),r.a.createElement("th",{scope:"col"},"Friday"),r.a.createElement("th",{scope:"col"},"Saturday"),r.a.createElement("th",{scope:"col"},"Sunday"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"0800"),a?a[0].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"0900"),a?a[1].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1000"),a?a[2].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1100"),a?a[3].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1200"),a?a[4].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1300"),a?a[5].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1400"),a?a[6].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1500"),a?a[7].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1600"),a?a[8].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1700"),a?a[9].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""))),r.a.createElement(q,{onClick:function(){return W([["","","","","","",""],["","","","","","",""],["","","","","","",""],["","","","","","",""],["","","","","","",""],["","","","","","",""],["","","","","","",""],["","","","","","",""],["","","","","","",""],["","","","","","",""]]).then((function(){console.log("Schedule Deleted")})).catch((function(e){return console.log(e)})),void c()}}),r.a.createElement($,{loadPlans:c,update:a}))},X=(a(80),a(35)),Z=a(36),ee=a(43),te=a(42),ae=a(16),ne=a(37),re=a(23),le=a(22),ce=a(40),oe=a(38),se=a(39),ie=a(41),me=a(44),ue=a(17),de=a(2),Ee=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){var e;Object(X.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={currentMonth:new Date,selectedDate:new Date},e.onDateClick=function(t){e.setState({selectedDate:t})},e.nextMonth=function(){e.setState({currentMonth:Object(ae.a)(e.state.currentMonth,1)})},e.prevMonth=function(){e.setState({currentMonth:Object(ne.a)(e.state.currentMonth,1)})},e}return Object(Z.a)(a,[{key:"renderHeader",value:function(){return r.a.createElement("div",{className:"header row flex-middle"},r.a.createElement("div",{className:"col col-start"},r.a.createElement("div",{className:"icon",onClick:this.prevMonth},"chevron_left")),r.a.createElement("div",{className:"col col-center"},r.a.createElement("span",null,Object(ue.a)(this.state.currentMonth,"MMMM yyyy"))),r.a.createElement("div",{className:"col col-end",onClick:this.nextMonth},r.a.createElement("div",{className:"icon"},"chevron_right")))}},{key:"renderDays",value:function(){for(var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t=Object(le.a)(this.state.currentMonth),a=0;e.length<7;a++)e.push(r.a.createElement("div",{className:"col col-center",key:a},Object(ue.a)(Object(re.a)(t,a),"dddd")));return r.a.createElement("div",{className:"days row"},r.a.createElement("div",{className:"col cell"},e[0]),r.a.createElement("div",{className:"col cell"},e[1]),r.a.createElement("div",{className:"col cell"},e[2]),r.a.createElement("div",{className:"col cell"},e[3]),r.a.createElement("div",{className:"col cell"},e[4]),r.a.createElement("div",{className:"col cell"},e[5]),r.a.createElement("div",{className:"col cell"},e[6]))}},{key:"renderCells",value:function(){for(var e=this,t=this.state,a=t.currentMonth,n=t.selectedDate,l=Object(oe.a)(a),c=Object(se.a)(l),o=Object(le.a)(l),s=Object(ce.a)(c),i=[],m=[],u=o,d="";u<=s;){for(var E=function(t){d=Object(ue.a)(u,"d");var a=u;m.push(r.a.createElement("div",{className:"col cell ".concat(Object(ie.a)(u,l)?Object(me.a)(u,n)?"selected":"":"disabled"),key:u,onClick:function(){return e.onDateClick(Object(de.a)(a))}},r.a.createElement("span",{className:"number"},d))),u=Object(re.a)(u,1)},f=0;f<7;f++)E();i.push(r.a.createElement("div",{className:"row",key:u},m)),m=[]}return r.a.createElement("div",{className:"body"},i)}},{key:"render",value:function(){return r.a.createElement("div",{className:"calender"},this.renderHeader(),this.renderDays(),this.renderCells())}}]),a}(r.a.Component);var fe=function(){return r.a.createElement(y,{fluid:!0},r.a.createElement("header",null,r.a.createElement("div",{id:"logo"},r.a.createElement("span",{className:"icon"},"date_range"),r.a.createElement("span",null,"HUB",r.a.createElement("b",null,"planner")))),r.a.createElement("hr",null),r.a.createElement(Ee,null),r.a.createElement("hr",null),r.a.createElement(N,null,r.a.createElement(j,{size:"sm-12"},r.a.createElement(Q,null))))};var pe=function(e){var t=e.planners,a=e.userNames;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-striped table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,a?r.a.createElement("span",{className:"userNames"}," ",a," "):"")),r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Hours"),r.a.createElement("th",{scope:"col"},"Monday"),r.a.createElement("th",{scope:"col"},"Tuesday"),r.a.createElement("th",{scope:"col"},"Wednesday"),r.a.createElement("th",{scope:"col"},"Thursday"),r.a.createElement("th",{scope:"col"},"Friday"),r.a.createElement("th",{scope:"col"},"Saturday"),r.a.createElement("th",{scope:"col"},"Sunday"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"0800"),t?t[0].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"0900"),t?t[1].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1000"),t?t[2].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1100"),t?t[3].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1200"),t?t[4].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1300"),t?t[5].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1400"),t?t[6].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1500"),t?t[7].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1600"),t?t[8].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"1700"),t?t[9].map((function(e,t){return r.a.createElement("td",{key:t},e)})):""))))};var he=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),s=o[0],i=o[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),E=d[0],f=d[1];return Object(n.useEffect)((function(){!function(){var e=[];_().then((function(t){t.data.forEach((function(t){return e.push(t.username)}))})).then((function(){l(e)})).catch((function(e){return console.log(e)}))}()}),[]),r.a.createElement(y,null,r.a.createElement(pe,{planners:s,userNames:E}),r.a.createElement(g,{title:"Find Your TeamMate's Planner"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleFormControlSelect1"},"Example select"),r.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1",onClick:function(e){e.preventDefault(),H(e.target.value).then((function(e){i(e.data.schedule),f(e.data.owner),console.log("userzplan",e.data.owner)})).then((function(){console.log("the selected schedule",s)})).catch((function(e){return console.log(e)}))}},a?a.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})):"")))))};var ve=function(){return r.a.createElement(y,null,r.a.createElement(he,null))},be=(a(81),function(e){var t=e.component,a=Object(o.a)(e,["component"]);return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(i.b,Object.assign({},a,{render:function(e){return m.isAuthenticated?r.a.createElement(t,e):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},"This page is private to authenticated users."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"}),r.a.createElement("div",{className:"col-sm"},r.a.createElement("h3",null,"Please Register or Login")),r.a.createElement("div",{className:"col-sm"})),r.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}}))}}))))}),ge=function(e){var t=e.component,a=Object(o.a)(e,["component"]);return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(i.b,Object.assign({},a,{render:function(e){return m.isAuthenticated&&m.isAdmin?r.a.createElement(t,e):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},"This page is private to admins."))}}))))},ye=function(){return r.a.createElement(p,null,r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(b,{className:"App-header"}),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:F}),r.a.createElement(i.b,{exact:!0,path:"/login",component:S}),r.a.createElement(i.b,{exact:!0,path:"/register",component:R}),r.a.createElement(be,{exact:!0,path:"/protected",component:Y}),r.a.createElement(be,{exact:!0,path:"/planner",component:fe}),r.a.createElement(be,{exact:!0,path:"/planner-search",component:ve}),r.a.createElement(ge,{exact:!0,path:"/admin-dash",component:V})))))},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(ye,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Ne?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):je(e)}))}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.def14805.chunk.js.map