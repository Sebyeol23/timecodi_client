(window["webpackJsonppurple-react-free"]=window["webpackJsonppurple-react-free"]||[]).push([[8],{142:function(e,t,a){"use strict";var n=function(){};e.exports=n},151:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(153),a(137));t.a=function(e){var t=e.gid;return e.isAdmin?null:l.a.createElement("div",{className:"col-4 grid-margin stretch-card",style:{padding:"0vw 0vw",margin:"1.0vw"}},l.a.createElement("div",{className:"card row",style:{height:"250px"}},l.a.createElement("h4",{className:"card-title",style:{margin:"2.5vw 0 0 2.5vw",color:"#FA5C7D"}},l.a.createElement("i",{class:"mdi mdi-alert btn-icon-prepend"}),"\xa0Danger Zone "),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-description",style:{padding:"0.2vw 1vw 0vw 0","text-align":"left"}},"I hope you know what you are doing.."),l.a.createElement("div",{style:{margin:"2.5vw 0 0 3vw"}},l.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-rounded btn-sm",onClick:function(){return function(e){var t={gid:e};r.a.delete("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/member",{data:t,headers:{Authorization:localStorage.getItem("token")}}).then((function(e){alert(e.data.msg)})).catch((function(e){alert("err!")}))}(t)}},"Withdraw from group")))))}},152:function(e,t,a){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var l=a(30),r=n(a(0)),c=a(19);a(15),a(55);var o=n(a(13));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function m(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],0<=t.indexOf(a)||(l[a]=e[a]);return l}var d=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).history=c.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return r.createElement(l.Router,{history:this.history,children:this.props.children})},t}(r.Component),u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).history=c.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return r.createElement(l.Router,{history:this.history,children:this.props.children})},t}(r.Component),p=function(e,t){return"function"==typeof e?e(t):e},f=function(e,t){return"string"==typeof e?c.createLocation(e,null,null,t):e},b=function(e){return e},g=r.forwardRef;void 0===g&&(g=b);var h=g((function(e,t){var a=e.innerRef,n=e.navigate,l=e.onClick,c=m(e,["innerRef","navigate","onClick"]),o=c.target,s=i({},c,{onClick:function(t){try{l&&l(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),n())}});return s.ref=b!==g&&t||a,r.createElement("a",s)})),v=g((function(e,t){var a=e.component,n=void 0===a?h:a,c=e.replace,s=e.to,d=e.innerRef,u=m(e,["component","replace","to","innerRef"]);return r.createElement(l.__RouterContext.Consumer,null,(function(e){e||o(!1);var a=e.history,l=f(p(s,e.location),e.location),m=l?a.createHref(l):"",h=i({},u,{href:m,navigate:function(){var t=p(s,e.location);(c?a.replace:a.push)(t)}});return b!==g?h.ref=t||d:h.innerRef=d,r.createElement(n,h)}))})),E=function(e){return e},y=r.forwardRef;void 0===y&&(y=E);var w=y((function(e,t){var a=e["aria-current"],n=void 0===a?"page":a,c=e.activeClassName,s=void 0===c?"active":c,d=e.activeStyle,u=e.className,b=e.exact,g=e.isActive,h=e.location,w=e.strict,N=e.style,O=e.to,j=e.innerRef,x=m(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return r.createElement(l.__RouterContext.Consumer,null,(function(e){e||o(!1);var a=h||e.location,c=f(p(O,a),a),m=c.pathname,k=m&&m.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=k?l.matchPath(a.pathname,{path:k,exact:b,strict:w}):null,C=!!(g?g(S,a):S),I=C?function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return e})).join(" ")}(u,s):u,P=C?i({},N,{},d):N,R=i({"aria-current":C&&n||null,className:I,style:P,to:c},x);return E!==y?R.ref=t||j:R.innerRef=j,r.createElement(v,R)}))}));Object.keys(l).forEach((function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})),t.BrowserRouter=d,t.HashRouter=u,t.Link=v,t.NavLink=w},164:function(e,t,a){"use strict";var n=a(2),l=a(3),r=a(6),c=a.n(r),o=a(0),i=a.n(o),s=(a(85),a(15)),m=a.n(s),d={type:m.a.string.isRequired,as:m.a.elementType},u=i.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,o=e.className,s=e.type,m=Object(l.a)(e,["as","className","type"]);return i.a.createElement(r,Object(n.a)({},m,{ref:t,className:c()(o,s&&s+"-feedback")}))}));u.displayName="Feedback",u.propTypes=d,u.defaultProps={type:"valid"};var p=u,f=i.a.createContext({controlId:void 0}),b=a(10),g=i.a.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,p=e.isStatic,g=e.as,h=void 0===g?"input":g,v=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),E=Object(o.useContext)(f),y=E.controlId;return r=E.custom?Object(b.b)(s,"custom-control-input"):Object(b.b)(r,"form-check-input"),i.a.createElement(h,Object(n.a)({},v,{ref:t,id:a||y,className:c()(m,r,d&&"is-valid",u&&"is-invalid",p&&"position-static")}))}));g.displayName="FormCheckInput",g.defaultProps={type:"checkbox"};var h=g,v=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bsCustomPrefix,s=e.className,m=e.htmlFor,d=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(o.useContext)(f),p=u.controlId;return a=u.custom?Object(b.b)(r,"custom-control-label"):Object(b.b)(a,"form-check-label"),i.a.createElement("label",Object(n.a)({},d,{ref:t,htmlFor:m||p,className:c()(s,a)}))}));v.displayName="FormCheckLabel";var E=v,y=i.a.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,m=e.inline,d=e.disabled,u=e.isValid,g=e.isInvalid,v=e.feedback,y=e.className,w=e.style,N=e.title,O=e.type,j=e.label,x=e.children,k=e.custom,S=e.as,C=void 0===S?"input":S,I=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),P="switch"===O||k;r=P?Object(b.b)(s,"custom-control"):Object(b.b)(r,"form-check");var R=Object(o.useContext)(f).controlId,A=Object(o.useMemo)((function(){return{controlId:a||R,custom:P}}),[R,P,a]),_=null!=j&&!1!==j&&!x,q=i.a.createElement(h,Object(n.a)({},I,{type:"switch"===O?"checkbox":O,ref:t,isValid:u,isInvalid:g,isStatic:!_,disabled:d,as:C}));return i.a.createElement(f.Provider,{value:A},i.a.createElement("div",{style:w,className:c()(y,r,P&&"custom-"+O,m&&r+"-inline")},x||i.a.createElement(i.a.Fragment,null,q,_&&i.a.createElement(E,{title:N},j),(u||g)&&i.a.createElement(p,{type:u?"valid":"invalid"},v))))}));y.displayName="FormCheck",y.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},y.Input=h,y.Label=E;var w=y,N=(a(142),i.a.forwardRef((function(e,t){var a,r,s=e.bsPrefix,m=e.type,d=e.size,u=e.id,p=e.className,g=e.isValid,h=e.isInvalid,v=e.plaintext,E=e.readOnly,y=e.as,w=void 0===y?"input":y,N=Object(l.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),O=Object(o.useContext)(f).controlId;if(s=Object(b.b)(s,"form-control"),v)(r={})[s+"-plaintext"]=!0,a=r;else if("file"===m){var j;(j={})[s+"-file"]=!0,a=j}else{var x;(x={})[s]=!0,x[s+"-"+d]=d,a=x}return i.a.createElement(w,Object(n.a)({},N,{type:m,ref:t,readOnly:E,id:u||O,className:c()(p,a,g&&"is-valid",h&&"is-invalid")}))})));N.displayName="FormControl",N.Feedback=p;var O=N,j=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,p=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(b.b)(a,"form-group");var g=Object(o.useMemo)((function(){return{controlId:m}}),[m]);return i.a.createElement(f.Provider,{value:g},i.a.createElement(u,Object(n.a)({},p,{ref:t,className:c()(r,a)}),s))}));j.displayName="FormGroup";var x=j,k=["xl","lg","md","sm","xs"],S=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,s=void 0===o?"div":o,m=Object(l.a)(e,["bsPrefix","className","as"]),d=Object(b.b)(a,"col"),u=[],p=[];return k.forEach((function(e){var t,a,n,l=m[e];if(delete m[e],null!=l&&"object"===typeof l){var r=l.span;t=void 0===r||r,a=l.offset,n=l.order}else t=l;var c="xs"!==e?"-"+e:"";null!=t&&u.push(!0===t?""+d+c:""+d+c+"-"+t),null!=n&&p.push("order"+c+"-"+n),null!=a&&p.push("offset"+c+"-"+a)})),u.length||u.push(d),i.a.createElement(s,Object(n.a)({},m,{ref:t,className:c.a.apply(void 0,[r].concat(u,p))}))}));S.displayName="Col";var C=S,I=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.column,s=e.srOnly,m=e.className,d=e.htmlFor,u=Object(l.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(o.useContext)(f).controlId;a=Object(b.b)(a,"form-label");var g=c()(m,a,s&&"sr-only",r&&"col-form-label");return d=d||p,r?i.a.createElement(C,Object(n.a)({as:"label",className:g,htmlFor:d},u)):i.a.createElement("label",Object(n.a)({ref:t,className:g,htmlFor:d},u))}));I.displayName="FormLabel",I.defaultProps={column:!1,srOnly:!1};var P=I,R=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,s=void 0===o?"small":o,m=e.muted,d=Object(l.a)(e,["bsPrefix","className","as","muted"]);return a=Object(b.b)(a,"form-text"),i.a.createElement(s,Object(n.a)({},d,{ref:t,className:c()(r,a,m&&"text-muted")}))}));R.displayName="FormText";var A=R,_=i.a.forwardRef((function(e,t){return i.a.createElement(w,Object(n.a)({},e,{ref:t,type:"switch"}))}));_.displayName="Switch",_.Input=w.Input,_.Label=w.Label;var q=_,z=a(37),D=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.inline,o=e.className,s=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(b.b)(a,"form"),i.a.createElement(d,Object(n.a)({},u,{ref:t,className:c()(o,s&&"was-validated",r&&a+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=Object(z.a)("form-row"),D.Group=x,D.Control=O,D.Check=w,D.Switch=q,D.Label=P,D.Text=A;t.a=D},189:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r="AIzaSyCS2a7trf0hsGHMwMH9Ihi9XwO5MAPYN-8";t.a=function(e){var t=e.inputRef,a=Object(n.useRef)(),c=Object(n.useRef)(),o=Object(n.useRef)([]);return Object(n.useEffect)((function(){var e=function(){var e=new window.google.maps.Map(a.current,{center:{lat:37.2934204446,lng:126.97467286},zoom:13,mapTypeId:"roadmap"}),n=t.current,l=new window.google.maps.places.SearchBox(n);c.current=l,e.addListener("bounds_changed",(function(){l.setBounds(e.getBounds())})),l.addListener("places_changed",(function(){var t=l.getPlaces();if(0!==t.length){o.current.forEach((function(e){e.setMap(null)})),o.current=[];var a=new window.google.maps.LatLngBounds;t.forEach((function(t){if(t.geometry){var n={url:t.icon,size:new window.google.maps.Size(71,71),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(17,34),scaledSize:new window.google.maps.Size(25,25)};o.current.push(new window.google.maps.Marker({map:e,icon:n,title:t.name,position:t.geometry.location})),t.geometry.viewport?a.union(t.geometry.viewport):a.extend(t.geometry.location)}else console.log("Returned place contains no geometry")})),e.fitBounds(a)}}))};if(window.google)e();else{var n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=".concat(r,"&libraries=places"),n.async=!0,n.defer=!0,n.addEventListener("load",(function(){e()})),document.body.appendChild(n)}}),[]),l.a.createElement("div",{style:{width:"650px",height:"300px"}},l.a.createElement("div",{ref:a,style:{width:"100%",height:"100%"}}))}},368:function(e,t){},381:function(e,t,a){"use strict";a.r(t);var n=a(27),l=a(186),r=a.n(l),c=a(187),o=a(29),i=a(0),s=a.n(i),m=a(30),d=a(139),u=a(165),p=a(164),f=(a(162),a(166)),b=a(163),g=a(151),h=(a(368),a(152)),v=a(188),E=(a(167),a(189)),y=a(137);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O="https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app";t.default=function(){var e=Object(m.useLocation)().pathname,t=parseInt(e.split("/").pop(),10),a=Object(i.useState)(""),l=Object(o.a)(a,2),w=l[0],j=l[1],x=Object(i.useState)(""),k=Object(o.a)(x,2),S=k[0],C=k[1],I=Object(i.useState)(null),P=Object(o.a)(I,2),R=P[0],A=P[1],_=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=localStorage.getItem("groupWeeklyCal"))&&A(JSON.parse(t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=new Date,z=new Date,D=Object(i.useState)(!1),F=Object(o.a)(D,2),M=F[0],T=F[1],H=Object(m.useHistory)();y.a.get("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/login",{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){e.data.success})).catch((function(e){T(!0)})),Object(i.useEffect)((function(){M&&H.push("/user-pages/login-1")}),[M]);var L=Object(i.useState)({name:null,when:null,where:null,memo:null}),V=Object(o.a)(L,2),B=V[0],G=V[1],J=function(){y.a.get("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/upcoming",{headers:{Authorization:localStorage.getItem("token")},params:{gid:t}}).then((function(e){if(e.data){var t={name:e.data.title,when:e.data.sdatetime,where:e.data.location+"("+e.data.loc_detail+")",memo:e.data.memo};t.when=t.when.replace("T"," at "),G(t)}})).catch((function(e){alert(e)}))};Object(i.useEffect)((function(){J()}),[]);var K=Object(i.useState)(!1),W=Object(o.a)(K,2),Y=(W[0],W[1]),X=function(){return Y(!0)},U=(Object(i.useRef)(null),Object(i.useState)(!1)),$=Object(o.a)(U,2),Z=$[0],Q=$[1],ee=function(){return Q(!Z)},te=Object(i.useState)(!1),ae=Object(o.a)(te,2),ne=ae[0],le=ae[1],re=function(){return le(!ne)},ce=Object(i.useState)([]),oe=Object(o.a)(ce,2),ie=oe[0],se=oe[1],me=Object(i.useState)(!1),de=Object(o.a)(me,2),ue=de[0],pe=de[1],fe=Object(i.useState)([{day:"2000-01-01",e_time:"23:00:00",gid:1,members:0,s_time:"00:00:00",vid:1,checked:!1}]),be=Object(o.a)(fe,2),ge=be[0],he=be[1],ve=function(){y.a.get("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/votetime",{headers:{Authorization:localStorage.getItem("token")},params:{gid:t}}).then((function(e){var t=e.data;t.forEach((function(e){e.checked=!1})),he(t)})).catch((function(e){console.log(e)}))},Ee=Object(i.useState)([{vid:0,s_time:"00:00:00",e_time:"23:30:00",gid:0,day:"2000-01-01",members:2}]),ye=Object(o.a)(Ee,2),we=ye[0],Ne=ye[1],Oe=function(){console.log("getVoteResult"),y.a.get("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/voteresult?gid=".concat(t),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.log("Vote Result:",e.data),Ne(e.data)})).catch((function(e){console.log(e)}))},je=Object(i.useState)([{edatetime:"2023-06-04T09:54:21",gid:11,loc_detail:"string",location:"string",meetid:3,memo:"string",sdatetime:"2023-06-04T09:54:21",title:"sample data"}]),xe=Object(o.a)(je,2),ke=xe[0],Se=xe[1];Object(i.useEffect)((function(){console.log("get group info by gid"),y.a.get("".concat(O,"/groupinfo?gid=").concat(t),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.log(e.data),j(e.data.gname),C(e.data.admin)})).catch((function(e){console.log("get group info by id"),console.log(e)})),y.a.get("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/member",{headers:{Authorization:localStorage.getItem("token")},params:{gid:t}}).then((function(e){var t=[];e.data.forEach((function(e,a){t.push({id:e.id,name:e.name})})),se(t)})).catch((function(e){console.log(e)})),y.a.get("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/admin",{headers:{Authorization:localStorage.getItem("token")},params:{gid:t}}).then((function(e){pe(e.data)})).catch((function(e){console.log(e)})),ve(),Oe(),y.a.get("".concat(O,"/meeting?gid=").concat(t),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.log("Meeting Info",e.data),Se(e.data)})).catch((function(e){console.log(e)}))}),[]);var Ce=Object(i.useState)(!1),Ie=Object(o.a)(Ce,2),Pe=Ie[0],Re=Ie[1],Ae=function(){return Re(!Pe)},_e=Object(i.useState)(!0),qe=(Object(o.a)(_e,1)[0],function(e){var t=e.target.dataset.vid,a=ge.map((function(e){return e.vid===Number(t)?N({},e,{checked:!e.checked}):e}));he(a)}),ze=Object(i.useState)(null),De=Object(o.a)(ze,2),Fe=(De[0],De[1]),Me=function(e){Fe(e.target.value);var t="",a="",n="";we.forEach((function(l){l.vid===Number(e.target.value)&&(a=l.s_time,n=l.e_time,t=l.day)})),Qe((function(e){return N({},e,{sdatetime:t+"T"+a,edatetime:t+"T"+n})}))},Te=Object(i.useState)(""),He=Object(o.a)(Te,2),Le=(He[0],He[1],Object(i.useRef)()),Ve=Object(i.useState)("0"),Be=Object(o.a)(Ve,2),Ge=Be[0],Je=Be[1],Ke=Object(i.useState)("00"),We=Object(o.a)(Ke,2),Ye=We[0],Xe=We[1],Ue=Object(i.useState)({title:"",location:"",loc_detail:"",memo:"",sdatetime:"",edatetime:"",gid:t}),$e=Object(o.a)(Ue,2),Ze=$e[0],Qe=$e[1],et=function(e){var t=e.target,a=t.id,l=t.value;Qe((function(e){return N({},e,Object(n.a)({},a,l))}))},tt=Object(i.useState)(""),at=Object(o.a)(tt,2),nt=at[0],lt=at[1];return s.a.createElement("div",null,s.a.createElement("div",{className:"page-header"},s.a.createElement("h3",{className:"page-title"},w),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("p",null,"Admin: ",S))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6 grid-margin"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body",style:{height:"400px"}},s.a.createElement("h4",{className:"card-title"},s.a.createElement("i",{className:"mdi mdi-bookmark-check"})," Upcoming Meeting"),s.a.createElement("p",{className:"card-description"},"This is the next meeting info."),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table"},s.a.createElement("tr",null,s.a.createElement("th",null),s.a.createElement("th",null,"Content")),s.a.createElement("tr",null,s.a.createElement("td",{className:"font-weight-bold"},"MEETING NAME"),s.a.createElement("td",null,B.name)),s.a.createElement("tr",null,s.a.createElement("td",{className:"font-weight-bold"},"WHEN"),s.a.createElement("td",null,B.when)),s.a.createElement("tr",null,s.a.createElement("td",{className:"font-weight-bold"},"WHERE"),s.a.createElement("td",null,B.where)),s.a.createElement("tr",null,s.a.createElement("td",{className:"font-weight-bold"},"MEMO"),s.a.createElement("td",null,B.memo))))))),s.a.createElement("div",{className:"col-6 grid-margin stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("h4",{className:"card-title",style:{margin:"2.5vw 0 0 2.5vw"}},s.a.createElement("i",{className:"mdi mdi-account"})," Members"),s.a.createElement("div",{className:"card-body",style:{height:"200px",overflowY:"auto",overflowX:"hidden"}},s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table"},s.a.createElement("tr",{style:{"text-align":"center"}},s.a.createElement("th",{style:{width:"15vw"}}," Name "),s.a.createElement("th",{style:{width:"20vw"}}," ID "),s.a.createElement("th",{style:{width:"35vw"}}," Actions ")),s.a.createElement("tbody",null,ie.map((function(e,t){return s.a.createElement("tr",{style:{"text-align":"center"}},s.a.createElement("td",{onClick:X,style:{cursor:"pointer"}},e.name),s.a.createElement("td",{onClick:X,style:{cursor:"pointer"}},e.id),s.a.createElement("td",null,s.a.createElement("button",{type:"button",className:"btn btn-inverse-info btn-sm",style:{height:"2vw"}},s.a.createElement(h.Link,{to:"/mypage/FriendTimetable/".concat(e.gid)},s.a.createElement("i",{className:"mdi mdi-calendar"}))),s.a.createElement("button",{type:"button",className:"btn btn-inverse-warning btn-sm",style:{height:"2vw"},onClick:function(){!function(e){var t={fid:e};y.a.post("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/request",t,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){alert(e.data.msg)})).catch((function(e){alert(e.response.data.detail)}))}(e.id)}},"Friend +")))})))))),s.a.createElement("center",null,s.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",style:{"font-weight":"420",margin:"2vw"},onClick:re},s.a.createElement("i",{className:"mdi mdi-account-plus"}),"\xa0Invite New Member"))))),s.a.createElement("div",{className:"row"},s.a.createElement(v.a.Provider,{value:{groupCal:R,fetchGroupCal:_}},s.a.createElement("div",{className:"col grid-margin",style:{height:"800px",width:"650px"}},s.a.createElement("div",{className:"card",style:{height:"750px",width:"600px"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},s.a.createElement("i",{className:"mdi mdi-calendar-multiple-check"})," Group Calender"),s.a.createElement("p",{className:"card-description"},"Click the ",s.a.createElement("span",{style:{color:"#fe7c96"}},"pink box")," ","to see available time of the week."),s.a.createElement("div",{style:{"margin-top":"4vw"}},s.a.createElement(u.a,{gid:t,meetingList:ke,style:{flexDirection:"column"}}),s.a.createElement("br",null),s.a.createElement("br",null))))),s.a.createElement("div",{className:"col grid-margin",style:{height:"800px",width:"540px"}},s.a.createElement("div",{className:"card",style:{height:"750px",width:"540px"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"card-description",style:{"margin-left":"8em"}},"Your group members are available at.."),s.a.createElement("div",{id:"visit-sale-chart-legend",className:"rounded-legend legend-horizontal",style:{"margin-left":"9em"}},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("span",{className:"legend-dots bg-primary"}),"1st"),s.a.createElement("li",null,s.a.createElement("span",{className:"legend-dots",style:{"background-color":"#cc9fff"}}),"2nd"),s.a.createElement("li",null,s.a.createElement("span",{className:"legend-dots",style:{"background-color":"#e0c5ff"}}),"3rd"))),s.a.createElement(f.a,null),s.a.createElement("div",{className:"row",style:{margin:"1.5vw 0 0 3vw"}},s.a.createElement("p",{className:"card-description",style:{margin:"0.2vw 1vw 0 0","text-align":"center"}},"How long will it take?"),s.a.createElement("select",{className:"form-control form-control-sm",id:"meeting-hour",value:Ge,onChange:function(e){Je(e.target.value)},style:{position:"relative",width:"4vw",height:"2vw"}},s.a.createElement("option",null,"0"),s.a.createElement("option",null,"1"),s.a.createElement("option",null,"2"),s.a.createElement("option",null,"3"),s.a.createElement("option",null,"4"),s.a.createElement("option",null,"5"),s.a.createElement("option",null,"6"),s.a.createElement("option",null,"7"),s.a.createElement("option",null,"8"),s.a.createElement("option",null,"9"),s.a.createElement("option",null,"10"),s.a.createElement("option",null,"11"),s.a.createElement("option",null,"12"),s.a.createElement("option",null,"13"),s.a.createElement("option",null,"14"),s.a.createElement("option",null,"15"),s.a.createElement("option",null,"16"),s.a.createElement("option",null,"17"),s.a.createElement("option",null,"18"),s.a.createElement("option",null,"19"),s.a.createElement("option",null,"20"),s.a.createElement("option",null,"21"),s.a.createElement("option",null,"22"),s.a.createElement("option",null,"23"),s.a.createElement("option",null,"24")),s.a.createElement("p",{className:"card-description",style:{margin:"0.2vw 0.5vw","text-align":"center"}},"hours \xa0"),s.a.createElement("select",{className:"form-control form-control-sm",id:"meeting-min",value:Ye,onChange:function(e){Xe(e.target.value)},style:{position:"relative",width:"4vw",height:"2vw"}},s.a.createElement("option",null,"00"),s.a.createElement("option",null,"30")),s.a.createElement("p",{className:"card-description",style:{margin:"0.2vw 0.5vw","text-align":"center"}},"minutes")),s.a.createElement("button",{type:"button",className:"btn btn-inverse-primary btn-sm",style:{margin:"1vw 0 0vw 12vw"},onClick:function(){console.log("Selected time:",Ge,Ye),function(){if(R){var e=R[0].first_list,t=e[Object.keys(e)[0]][0][0],a=new Date(t),n=a.getUTCDay(),l=n,r=6-n,c=new Date(a);c.setDate(a.getDate()-l);var o=new Date(a);o.setDate(a.getDate()+r),q=c.toISOString().substring(0,10),z=o.toISOString().substring(0,10)}console.log("start_date",q),console.log("end_date",z)}();var e={gid:t,sdatetime:q,edatetime:z,meetingtime:Ge+":"+Ye};y.a.post("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/votetime",e,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.log(e.data),alert("vote successfully generated!"),ve()})).catch((function(e){console.log(e)}))}},s.a.createElement("i",{className:"mdi mdi-calendar-plus"}),s.a.createElement("span",{style:{"font-size":"15px","font-weight":"500"}},"\xa0 Generate Vote")))))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6 grid-margin stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body",style:{height:"500px"}},s.a.createElement("h4",{className:"card-title"},s.a.createElement("i",{className:"mdi mdi-clipboard-text"})," Vote"),s.a.createElement("p",{className:"card-description"},"Check the box to vote and submit."),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("handleSubmitVote");var a=[];ge.forEach((function(e){e.checked&&a.push(e.vid)})),console.log(a);var n={gid:t,vidlist:a};console.log("handleSubmitVote: ",n),y.a.post("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/vote",n,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.log(e.data),alert("vote success!")})).catch((function(e){console.log(e)}))}},s.a.createElement("div",{className:"card-body",style:{height:"300px",overflowY:"auto",overflowX:"auto",padding:"0vw"}},s.a.createElement("table",{className:"table"},s.a.createElement("tr",{style:{"text-align":"center"}},s.a.createElement("th",null,"Day"),s.a.createElement("th",null,"Start Time"),s.a.createElement("th",null,"End Time"),s.a.createElement("th",null,s.a.createElement("i",{className:"mdi mdi-checkbox-multiple-marked-outline"}))),ge.map((function(e,t){return s.a.createElement("tr",{key:e.vid,style:{"text-align":"center"}},s.a.createElement("td",null,e.day),s.a.createElement("td",null,e.s_time),s.a.createElement("td",null,e.e_time),s.a.createElement("td",null,s.a.createElement("div",{className:"form-check",style:{"margin-left":"3.5vw"}},s.a.createElement("label",{className:"form-check-label"},s.a.createElement("input",{type:"checkbox",className:"form-check-input",checked:e.checked,onChange:qe,"data-vid":e.vid}),s.a.createElement("i",{className:"input-helper"})))))})))),s.a.createElement("div",{className:"row"},s.a.createElement("button",{type:"submit",className:"btn btn-inverse-primary btn-sm",style:{margin:"1.5vw 0vw 0vw 10vw"}},s.a.createElement("span",{style:{"font-size":"15px","font-weight":"500"}},"\xa0Submit")),s.a.createElement("button",{type:"button",className:"btn btn-inverse-danger btn-sm",style:{margin:"1.5vw 0vw 0vw 5vw"},onClick:function(){y.a.post("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/voteresult?gid=".concat(t),{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.log(e.data),alert("vote successfully ended!"),Oe()})).catch((function(e){console.log(e)}))}},s.a.createElement("span",{style:{"font-size":"15px","font-weight":"500"}},"\xa0End vote"))))))),s.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},s.a.createElement("i",{className:"mdi mdi-poll"}),"Vote Result"),s.a.createElement("p",{className:"card-description"},"See the vote result!"),s.a.createElement("div",{className:"card-body",style:{height:"300px",overflowY:"auto",overflowX:"hidden",padding:"0vw"}},s.a.createElement("table",{className:"table"},s.a.createElement("tr",{style:{"text-align":"center"}},s.a.createElement("th",null,"Day"),s.a.createElement("th",null,"Start"),s.a.createElement("th",null,"End"),s.a.createElement("th",null,s.a.createElement("i",{className:"mdi mdi-account-multiple"})),s.a.createElement("th",null," ",s.a.createElement("i",{className:"mdi mdi-checkbox-multiple-marked-outline"}))),we.map((function(e,t){return s.a.createElement("tr",{style:{"text-align":"center"}},s.a.createElement("td",null,e.day),s.a.createElement("td",null,e.s_time),s.a.createElement("td",null,e.e_time),s.a.createElement("td",null,s.a.createElement("div",{className:"form-check"},s.a.createElement("button",{type:"button",className:"btn btn-inverse-danger btn-sm",style:{height:"1.5vw",padding:"0.1vw 0.4vw"}},s.a.createElement("i",{className:"mdi mdi-account-outline"}," "),e.members))),s.a.createElement("td",null,s.a.createElement("div",{className:"form-check",style:{"margin-left":"2vw"}},s.a.createElement("label",{className:"form-check-label"},s.a.createElement("input",{type:"radio",className:"form-check-input",name:"resultsRadios",onChange:Me,value:e.vid}),s.a.createElement("i",{className:"input-helper"})))))})))),s.a.createElement("button",{type:"button",className:"btn btn-inverse-primary btn-sm",style:{margin:"3vw 4vw 0vw 12vw"},onClick:ee},s.a.createElement("span",{style:{"font-size":"15px","font-weight":"500"}}," ","Make Meeting")))))),s.a.createElement(d.a,{style:{position:"relative","margin-left":"0vw"},show:Z,onHide:ee,size:"lg",centered:!0},s.a.createElement(d.a.Header,{style:{"background-color":"#f2edf3"},closeButton:!0},s.a.createElement(d.a.Title,{id:"contained-modal-title-md",style:{}}," ",s.a.createElement("span",{style:{"font-weight":"500",margin:"5vw 0 0 35vw"}},"Input Meeting Information"))),s.a.createElement(p.a,{onSubmit:function(e){e.preventDefault(),localStorage.setItem("meetingInfo",JSON.stringify(Ze)),y.a.post("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/meeting",Ze,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.log(e.data),localStorage.setItem("submitMeeting",JSON.stringify(e.data)),alert("submit"),J()})).catch((function(e){console.log(Ze),console.log(e),localStorage.setItem("submitMeeting",JSON.stringify(e)),alert(e)}))}},s.a.createElement(d.a.Body,{style:{"background-color":"#f2edf3"}},s.a.createElement("div",{style:{margin:"0 8vw"}},s.a.createElement("table",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("div",null,s.a.createElement("label",{style:{padding:" 0.7vw 0 0 0"}},"Meeting Name:"," "),s.a.createElement(p.a.Control,{type:"text",id:"title",placeholder:"meeting name",value:Ze.title,onChange:et,style:{width:"400px"}})," ",s.a.createElement("label",{style:{padding:" 0.7vw 0 0 0"}},"Memo "),s.a.createElement(p.a.Control,{type:"text",id:"memo",value:Ze.memo,onChange:et,placeholder:"...",style:{width:"400px"}})," "),s.a.createElement("div",null,s.a.createElement("label",{style:{padding:" 0.7vw 0 0 0"}},"Where: "),s.a.createElement("div",null,s.a.createElement(p.a.Control,{type:"text",id:"location",value:Ze.location,onChange:et,placeholder:"Search the location of your meeting",style:{width:"330px",float:"left"},ref:Le})," ",s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{className:"btn btn-sm btn-gradient-primary",type:"button",style:{float:"right",height:"3vw"}},"Search"))),s.a.createElement(p.a.Control,{type:"text",id:"loc_detail",value:Ze.loc_detail,onChange:et,placeholder:"place of your meeting",style:{width:"400px"}})," ")),s.a.createElement("td",null,s.a.createElement("div",{style:{width:"650px",height:"300px","margin-left":"2vw","background-color":" white"}},s.a.createElement(E.a,{inputRef:Le}))))))),s.a.createElement(d.a.Footer,{style:{"background-color":"#f2edf3"}},s.a.createElement("button",{type:"submit",className:"btn btn-primary btn-sm"},"Submit"),s.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:function(){ee()}},"Cancel")))),s.a.createElement(d.a,{show:Pe,onHide:Ae,centered:!0},s.a.createElement(d.a.Header,{closeButton:!0},s.a.createElement(d.a.Title,null,s.a.createElement("div",{style:{"font-weight":"200",margin:"0 5vw"}},"Sorry, you can't take this action.",s.a.createElement("br",null)," Ask the Group Admin!"," "))),s.a.createElement(d.a.Footer,null,s.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){Ae()}},"OK"),s.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:function(){Ae()}},"Cancel"))),s.a.createElement(b.a,{gid:t,isAdmin:ue,members:ie}),s.a.createElement(g.a,{gid:t,isAdmin:ue}),s.a.createElement(d.a,{show:ne,onHide:re,centered:!0},s.a.createElement(d.a.Header,{closeButton:!0},s.a.createElement(d.a.Title,null,"Enter the memeber's ID")),s.a.createElement(d.a.Body,null,s.a.createElement(p.a,{className:"pt-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"ID",onChange:function(e){lt(e.target.value)},name:"name",value:nt})))),s.a.createElement(d.a.Footer,null,s.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){!function(e){if(ue){var a={gid:t,uid:e};y.a.post("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/invited",a,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){re(),alert("invite success!")})).catch((function(e){alert(e.response.data.detail)}))}else alert("only admin can invite members!")}(nt)}},"OK"),s.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:re},"Cancel"))))}},55:function(e,t,a){"use strict";a.r(t);var n=!0;t.default=function(e,t){if(!n){if(e)return;var a="Warning: "+t;"undefined"!==typeof console&&console.warn(a);try{throw Error(a)}catch(l){}}}}}]);
//# sourceMappingURL=8.fca03330.chunk.js.map