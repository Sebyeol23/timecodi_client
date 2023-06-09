(window["webpackJsonppurple-react-free"]=window["webpackJsonppurple-react-free"]||[]).push([[12],{143:function(e,a,t){"use strict";var r=function(){};e.exports=r},166:function(e,a,t){"use strict";var r=t(2),l=t(3),s=t(6),c=t.n(s),i=t(0),n=t.n(i),o=(t(85),t(15)),m=t.n(o),d={type:m.a.string.isRequired,as:m.a.elementType},u=n.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,i=e.className,o=e.type,m=Object(l.a)(e,["as","className","type"]);return n.a.createElement(s,Object(r.a)({},m,{ref:a,className:c()(i,o&&o+"-feedback")}))}));u.displayName="Feedback",u.propTypes=d,u.defaultProps={type:"valid"};var f=u,b=n.a.createContext({controlId:void 0}),p=t(10),v=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,f=e.isStatic,v=e.as,N=void 0===v?"input":v,h=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(i.useContext)(b),y=x.controlId;return s=x.custom?Object(p.b)(o,"custom-control-input"):Object(p.b)(s,"form-check-input"),n.a.createElement(N,Object(r.a)({},h,{ref:a,id:t||y,className:c()(m,s,d&&"is-valid",u&&"is-invalid",f&&"position-static")}))}));v.displayName="FormCheckInput",v.defaultProps={type:"checkbox"};var N=v,h=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(i.useContext)(b),f=u.controlId;return t=u.custom?Object(p.b)(s,"custom-control-label"):Object(p.b)(t,"form-check-label"),n.a.createElement("label",Object(r.a)({},d,{ref:a,htmlFor:m||f,className:c()(o,t)}))}));h.displayName="FormCheckLabel";var x=h,y=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,m=e.inline,d=e.disabled,u=e.isValid,v=e.isInvalid,h=e.feedback,y=e.className,O=e.style,j=e.title,E=e.type,w=e.label,g=e.children,P=e.custom,I=e.as,C=void 0===I?"input":I,k=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),F="switch"===E||P;s=F?Object(p.b)(o,"custom-control"):Object(p.b)(s,"form-check");var R=Object(i.useContext)(b).controlId,S=Object(i.useMemo)((function(){return{controlId:t||R,custom:F}}),[R,F,t]),V=null!=w&&!1!==w&&!g,L=n.a.createElement(N,Object(r.a)({},k,{type:"switch"===E?"checkbox":E,ref:a,isValid:u,isInvalid:v,isStatic:!V,disabled:d,as:C}));return n.a.createElement(b.Provider,{value:S},n.a.createElement("div",{style:O,className:c()(y,s,F&&"custom-"+E,m&&s+"-inline")},g||n.a.createElement(n.a.Fragment,null,L,V&&n.a.createElement(x,{title:j},w),(u||v)&&n.a.createElement(f,{type:u?"valid":"invalid"},h))))}));y.displayName="FormCheck",y.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},y.Input=N,y.Label=x;var O=y,j=(t(143),n.a.forwardRef((function(e,a){var t,s,o=e.bsPrefix,m=e.type,d=e.size,u=e.id,f=e.className,v=e.isValid,N=e.isInvalid,h=e.plaintext,x=e.readOnly,y=e.as,O=void 0===y?"input":y,j=Object(l.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),E=Object(i.useContext)(b).controlId;if(o=Object(p.b)(o,"form-control"),h)(s={})[o+"-plaintext"]=!0,t=s;else if("file"===m){var w;(w={})[o+"-file"]=!0,t=w}else{var g;(g={})[o]=!0,g[o+"-"+d]=d,t=g}return n.a.createElement(O,Object(r.a)({},j,{type:m,ref:a,readOnly:x,id:u||E,className:c()(f,t,v&&"is-valid",N&&"is-invalid")}))})));j.displayName="FormControl",j.Feedback=f;var E=j,w=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,f=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.b)(t,"form-group");var v=Object(i.useMemo)((function(){return{controlId:m}}),[m]);return n.a.createElement(b.Provider,{value:v},n.a.createElement(u,Object(r.a)({},f,{ref:a,className:c()(s,t)}),o))}));w.displayName="FormGroup";var g=w,P=["xl","lg","md","sm","xs"],I=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,o=void 0===i?"div":i,m=Object(l.a)(e,["bsPrefix","className","as"]),d=Object(p.b)(t,"col"),u=[],f=[];return P.forEach((function(e){var a,t,r,l=m[e];if(delete m[e],null!=l&&"object"===typeof l){var s=l.span;a=void 0===s||s,t=l.offset,r=l.order}else a=l;var c="xs"!==e?"-"+e:"";null!=a&&u.push(!0===a?""+d+c:""+d+c+"-"+a),null!=r&&f.push("order"+c+"-"+r),null!=t&&f.push("offset"+c+"-"+t)})),u.length||u.push(d),n.a.createElement(o,Object(r.a)({},m,{ref:a,className:c.a.apply(void 0,[s].concat(u,f))}))}));I.displayName="Col";var C=I,k=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.column,o=e.srOnly,m=e.className,d=e.htmlFor,u=Object(l.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),f=Object(i.useContext)(b).controlId;t=Object(p.b)(t,"form-label");var v=c()(m,t,o&&"sr-only",s&&"col-form-label");return d=d||f,s?n.a.createElement(C,Object(r.a)({as:"label",className:v,htmlFor:d},u)):n.a.createElement("label",Object(r.a)({ref:a,className:v,htmlFor:d},u))}));k.displayName="FormLabel",k.defaultProps={column:!1,srOnly:!1};var F=k,R=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,o=void 0===i?"small":i,m=e.muted,d=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.b)(t,"form-text"),n.a.createElement(o,Object(r.a)({},d,{ref:a,className:c()(s,t,m&&"text-muted")}))}));R.displayName="FormText";var S=R,V=n.a.forwardRef((function(e,a){return n.a.createElement(O,Object(r.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=O.Input,V.Label=O.Label;var L=V,T=t(37),G=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,i=e.className,o=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.b)(t,"form"),n.a.createElement(d,Object(r.a)({},u,{ref:a,className:c()(i,o&&"was-validated",s&&t+"-inline")}))}));G.displayName="Form",G.defaultProps={inline:!1},G.Row=Object(T.a)("form-row"),G.Group=g,G.Control=E,G.Check=O,G.Switch=L,G.Label=F,G.Text=S;a.a=G},374:function(e,a,t){"use strict";t.r(a),t.d(a,"Login",(function(){return m}));var r=t(29),l=t(0),s=t.n(l),c=t(30),i=t(11),n=t(166),o=t(137);function m(){var e=Object(l.useState)(""),a=Object(r.a)(e,2),t=a[0],m=a[1],d=Object(l.useState)(""),u=Object(r.a)(d,2),f=u[0],b=u[1],p=Object(c.useHistory)();return s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex align-items-center auth px-0"},s.a.createElement("div",{className:"row w-100 mx-0"},s.a.createElement("div",{className:"col-lg-4 mx-auto"},s.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},s.a.createElement("div",{className:"brand-logo"},s.a.createElement("h3",{className:"text-primary my-0"},s.a.createElement("i",{className:"mdi mdi-timetable mr-1"}),"TimeCodi")),s.a.createElement("h4",null,"Hello! let's get started"),s.a.createElement("h6",{className:"font-weight-light"},"Sign in to continue."),s.a.createElement(n.a,{className:"pt-3"},s.a.createElement(n.a.Group,{className:"d-flex search-field"},s.a.createElement(n.a.Control,{type:"email",placeholder:"ID",size:"lg",className:"h-auto",value:t,onChange:function(e){return m(e.target.value)}})),s.a.createElement(n.a.Group,{className:"d-flex search-field"},s.a.createElement(n.a.Control,{type:"password",placeholder:"Password",size:"lg",className:"h-auto",value:f,onChange:function(e){return b(e.target.value)}})),s.a.createElement("div",{className:"mt-3"},s.a.createElement("button",{type:"button",className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",onClick:function(){var e={username:t,password:f};o.a.post("https://port-0-timecodi-416cq2mlg8dr0qo.sel3.cloudtype.app/signin",e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){var a=e.data.token_type+" "+e.data.access_token;localStorage.setItem("token",a);var t=e.data.userid,r=e.data.username;localStorage.setItem("userid",t),localStorage.setItem("username",r),p.push("/mypage/mygroups")})).catch((function(e){alert("login failed")}))}},"SIGN IN")),s.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account? ",s.a.createElement(i.b,{to:"/user-pages/register",className:"text-primary"},"Create"))))))))}a.default=m}}]);
//# sourceMappingURL=12.24fe2136.chunk.js.map