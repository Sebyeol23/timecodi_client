(window["webpackJsonppurple-react-free"]=window["webpackJsonppurple-react-free"]||[]).push([[1],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(1),a=n(3),r=n(5),i=n.n(r),s=n(0),l=n.n(s),d=n(66),u=n.n(d),c=n(17),f=function(e){return e[0].toUpperCase()+u()(e).slice(1)};function p(e,t){var n=void 0===t?{}:t,r=n.displayName,s=void 0===r?f(e):r,d=n.Component,u=void 0===d?"div":d,p=n.defaultProps,h=l.a.forwardRef((function(t,n){var r=t.className,s=t.bsPrefix,d=t.as,f=void 0===d?u:d,p=Object(a.a)(t,["className","bsPrefix","as"]),h=Object(c.b)(s,e);return l.a.createElement(f,Object(o.a)({ref:n,className:i()(r,h)},p))}));return h.defaultProps=p,h.displayName=s,h}},116:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return e&&e.ownerDocument||document},e.exports=t.default},130:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=void 0;var a=o(n(64)).default?function(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):r(e,t)}:r;function r(e,t){if(t)do{if(t===e)return!0}while(t=t.parentNode);return!1}t.default=a,e.exports=t.default},131:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=void 0;var a=o(n(64)),r=o(n(132)),i=o(n(133)),s=function(){};a.default&&(s=function(e,t,n,o){return(0,r.default)(e,t,n,o),function(){(0,i.default)(e,t,n,o)}});var l=s;t.default=l,e.exports=t.default},132:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=void 0;var a=function(){};o(n(64)).default&&(a=document.addEventListener?function(e,t,n,o){return e.addEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.attachEvent("on"+t,(function(t){(t=t||window.event).target=t.target||t.srcElement,t.currentTarget=e,n.call(e,t)}))}:void 0);var r=a;t.default=r,e.exports=t.default},133:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=void 0;var a=function(){};o(n(64)).default&&(a=document.addEventListener?function(e,t,n,o){return e.removeEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.detachEvent("on"+t,n)}:void 0);var r=a;t.default=r,e.exports=t.default},157:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return(0,a.default)(o.default.findDOMNode(e))};var o=r(n(32)),a=r(n(116));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},158:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=function(e){if((!a&&0!==a||e)&&r.default){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a};var a,r=o(n(64));e.exports=t.default},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(n(0)),r=i(n(69));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)((function(e,t,n,r,i){var s=e[t],l="undefined"===typeof s?"undefined":o(s);return a.default.isValidElement(s)?new Error("Invalid "+r+" `"+i+"` of type ReactElement supplied to `"+n+"`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it."):"object"===l&&"function"===typeof s.render||1===s.nodeType?null:new Error("Invalid "+r+" `"+i+"` of value `"+s+"` supplied to `"+n+"`, expected a ReactComponent or a DOMElement.")})),e.exports=t.default},198:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=l(n(362)),a=l(n(33)),r=l(n(158)),i=l(n(365)),s=n(367);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,o=void 0===n||n,a=t.handleContainerOverflow,i=void 0===a||a;this.hideSiblingNodes=o,this.handleContainerOverflow=i,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=(0,r.default)()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return function(e,t){var n=-1;return e.some((function(e,o){if(t(e,o))return n=o,!0})),n}(this.data,(function(t){return-1!==t.modals.indexOf(e)}))},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt((0,a.default)(t,"paddingRight")||0,10)+this.scrollbarSize+"px"),(0,a.default)(t,n)},t.removeContainerStyle=function(e,t){var n=e.style;Object.keys(n).forEach((function(e){t.style[e]=n[e]}))},t.add=function(e,t,n){var a=this.modals.indexOf(e),r=this.containers.indexOf(t);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&(0,s.hideSiblings)(t,e),-1!==r)return this.data[r].modals.push(e),a;var l={modals:[e],classes:n?n.split(/\s+/):[],overflowing:(0,i.default)(t)};return this.handleContainerOverflow&&this.setContainerStyle(l,t),l.classes.forEach(o.default.addClass.bind(null,t)),this.containers.push(t),this.data.push(l),a},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),a=this.data[n],r=this.containers[n];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(t,1),0===a.modals.length)a.classes.forEach(o.default.removeClass.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(a,r),this.hideSiblingNodes&&(0,s.showSiblings)(r,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var i=a.modals[a.modals.length-1],l=i.backdrop,d=i.dialog;(0,s.ariaHidden)(!1,d),(0,s.ariaHidden)(!1,l)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}();t.default=d,e.exports=t.default},199:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},200:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return null==e?t:(e="function"===typeof e?e():e,a.default.findDOMNode(e)||null)};var o,a=(o=n(32))&&o.__esModule?o:{default:o};e.exports=t.default},357:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=void 0;var a=o(n(132));t.on=a.default;var r=o(n(133));t.off=r.default;var i=o(n(358));t.filter=i.default;var s=o(n(131));t.listen=s.default;var l={on:a.default,off:r.default,filter:i.default,listen:s.default};t.default=l},358:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=function(e,t){return function(n){var o=n.currentTarget,i=n.target;(0,r.default)(o,e).some((function(e){return(0,a.default)(e,i)}))&&t.call(this,n)}};var a=o(n(130)),r=o(n(47));e.exports=t.default},359:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=m(n(360)),a=m(n(130)),r=m(n(64)),i=m(n(131)),s=m(n(27)),l=m(n(159)),d=m(n(361)),u=m(n(0)),c=m(n(32)),f=m(n(198)),p=m(n(368)),h=m(n(200)),v=m(n(157));function m(e){return e&&e.__esModule?e:{default:e}}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=new f.default;var E=function(e){var t,n;function s(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).state={exited:!t.props.show},t.onPortalRendered=function(){t.props.onShow&&t.props.onShow(),t.autoFocus()},t.onShow=function(){var e=(0,v.default)(y(y(t))),n=(0,h.default)(t.props.container,e.body);t.props.manager.add(y(y(t)),n,t.props.containerClassName),t.removeKeydownListener=(0,i.default)(e,"keydown",t.handleDocumentKeyDown),t.removeFocusListener=(0,i.default)(e,"focus",(function(){return setTimeout(t.enforceFocus)}),!0)},t.onHide=function(){t.props.manager.remove(y(y(t))),t.removeKeydownListener(),t.removeFocusListener(),t.props.restoreFocus&&t.restoreLastFocus()},t.setDialogRef=function(e){t.dialog=e},t.setBackdropRef=function(e){t.backdrop=e&&c.default.findDOMNode(e)},t.handleHidden=function(){var e;(t.setState({exited:!0}),t.onHide(),t.props.onExited)&&(e=t.props).onExited.apply(e,arguments)},t.handleBackdropClick=function(e){e.target===e.currentTarget&&(t.props.onBackdropClick&&t.props.onBackdropClick(e),!0===t.props.backdrop&&t.props.onHide())},t.handleDocumentKeyDown=function(e){t.props.keyboard&&27===e.keyCode&&t.isTopModal()&&(t.props.onEscapeKeyDown&&t.props.onEscapeKeyDown(e),t.props.onHide())},t.enforceFocus=function(){if(t.props.enforceFocus&&t._isMounted&&t.isTopModal()){var e=(0,o.default)((0,v.default)(y(y(t))));t.dialog&&!(0,a.default)(t.dialog,e)&&t.dialog.focus()}},t.renderBackdrop=function(){var e=t.props,n=e.renderBackdrop,o=e.backdropTransition,a=n({ref:t.setBackdropRef,onClick:t.handleBackdropClick});return o&&(a=u.default.createElement(o,{appear:!0,in:t.props.show},a)),a},t}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,s.getDerivedStateFromProps=function(e){return e.show?{exited:!1}:e.transition?null:{exited:!0}};var l=s.prototype;return l.getSnapshotBeforeUpdate=function(e){return r.default&&!e.show&&this.props.show&&(this.lastFocus=(0,o.default)()),null},l.componentDidMount=function(){this._isMounted=!0,this.props.show&&this.onShow()},l.componentDidUpdate=function(e){var t=this.props.transition;!e.show||this.props.show||t?!e.show&&this.props.show&&this.onShow():this.onHide()},l.componentWillUnmount=function(){var e=this.props,t=e.show,n=e.transition;this._isMounted=!1,(t||n&&!this.state.exited)&&this.onHide()},l.autoFocus=function(){if(this.props.autoFocus){var e=(0,o.default)((0,v.default)(this));this.dialog&&!(0,a.default)(this.dialog,e)&&(this.lastFocus=e,this.dialog.focus())}},l.restoreLastFocus=function(){this.lastFocus&&this.lastFocus.focus&&(this.lastFocus.focus(),this.lastFocus=null)},l.isTopModal=function(){return this.props.manager.isTopModal(this)},l.render=function(){var e=this.props,t=e.show,n=e.container,o=e.children,a=e.renderDialog,r=e.role,i=void 0===r?"dialog":r,l=e.transition,d=e.backdrop,c=e.className,f=e.style,h=e.onExit,v=e.onExiting,m=e.onEnter,y=e.onEntering,b=e.onEntered,E=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["show","container","children","renderDialog","role","transition","backdrop","className","style","onExit","onExiting","onEnter","onEntering","onEntered"]);if(!(t||l&&!this.state.exited))return null;var w=g({role:i,ref:this.setDialogRef,"aria-modal":"dialog"===i||void 0},function(e,t){var n=Object.keys(e),o={};return n.map((function(n){Object.prototype.hasOwnProperty.call(t,n)||(o[n]=e[n])})),o}(E,s.propTypes),{style:f,className:c,tabIndex:"-1"}),_=a?a(w):u.default.createElement("div",w,u.default.cloneElement(o,{role:"document"}));return l&&(_=u.default.createElement(l,{appear:!0,unmountOnExit:!0,in:t,onExit:h,onExiting:v,onExited:this.handleHidden,onEnter:m,onEntering:y,onEntered:b},_)),u.default.createElement(p.default,{container:n,onRendered:this.onPortalRendered},u.default.createElement(u.default.Fragment,null,d&&this.renderBackdrop(),_))},s}(u.default.Component);E.propTypes={show:s.default.bool,container:s.default.oneOfType([l.default,s.default.func]),onShow:s.default.func,onHide:s.default.func,backdrop:s.default.oneOfType([s.default.bool,s.default.oneOf(["static"])]),renderDialog:s.default.func,renderBackdrop:s.default.func,onEscapeKeyDown:s.default.func,onBackdropClick:s.default.func,containerClassName:s.default.string,keyboard:s.default.bool,transition:d.default,backdropTransition:d.default,autoFocus:s.default.bool,enforceFocus:s.default.bool,restoreFocus:s.default.bool,onEnter:s.default.func,onEntering:s.default.func,onEntered:s.default.func,onExit:s.default.func,onExiting:s.default.func,onExited:s.default.func,manager:s.default.object.isRequired},E.defaultProps={show:!1,role:"dialog",backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,onHide:function(){},manager:b,renderBackdrop:function(e){return u.default.createElement("div",e)}},E.Manager=f.default;var w=E;t.default=w,e.exports=t.default},360:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=function(e){void 0===e&&(e=(0,a.default)());try{return e.activeElement}catch(t){}};var a=o(n(116));e.exports=t.default},361:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(0)),a=n(48),r=i(n(69));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)((function(e,t,n,r,i){var s=e[t];return o.default.isValidElement(s)?new Error("Invalid "+r+" `"+i+"` of type ReactElement supplied to `"+n+"`,expected an element type (a string , component class, or function component)."):(0,a.isValidElementType)(s)?null:new Error("Invalid "+r+" `"+i+"` of value `"+s+"` supplied to `"+n+"`, expected an element type (a string , component class, or function component).")})),e.exports=t.default},362:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=void 0;var a=o(n(363));t.addClass=a.default;var r=o(n(364));t.removeClass=r.default;var i=o(n(199));t.hasClass=i.default;var s={addClass:a.default,removeClass:r.default,hasClass:i.default};t.default=s},363:function(e,t,n){"use strict";var o=n(28);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,a.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var a=o(n(199));e.exports=t.default},364:function(e,t,n){"use strict";function o(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=o(e.className,t):e.setAttribute("class",o(e.className&&e.className.baseVal||"",t))}},365:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return(0,o.default)(e)||(t=e,t&&"body"===t.tagName.toLowerCase())?function(e){var t=(0,a.default)(e),n=(0,o.default)(t);return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight;var t};var o=r(n(366)),a=r(n(116));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},366:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return e===e.window?e:9===e.nodeType&&(e.defaultView||e.parentWindow)},e.exports=t.default},367:function(e,t,n){"use strict";t.__esModule=!0,t.ariaHidden=r,t.hideSiblings=function(e,t){var n=t.root,o=t.backdrop;a(e,[n,o],(function(e){return r(!0,e)}))},t.showSiblings=function(e,t){var n=t.root,o=t.backdrop;a(e,[n,o],(function(e){return r(!1,e)}))};var o=["template","script","style"],a=function(e,t,n){t=[].concat(t),[].forEach.call(e.children,(function(e){-1===t.indexOf(e)&&function(e){var t=e.nodeType,n=e.tagName;return 1===t&&-1===o.indexOf(n.toLowerCase())}(e)&&n(e)}))};function r(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}},368:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=l(n(27)),a=l(n(159)),r=l(n(0)),i=l(n(32)),s=l(n(369));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this;return this.props.children?r.default.createElement(s.default,{container:this.props.container,onContainerResolved:this.props.onRendered},(function(t){return i.default.createPortal(e.props.children,t)})):null},o}(r.default.Component);d.displayName="Portal",d.propTypes={container:o.default.oneOfType([a.default,o.default.func]),onRendered:o.default.func};var u=d;t.default=u,e.exports=t.default},369:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=u(n(27)),a=u(n(159)),r=u(n(64)),i=u(n(116)),s=u(n(0)),l=u(n(32)),d=u(n(200));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f={container:o.default.oneOfType([a.default,o.default.func]),onContainerResolved:o.default.func},p=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];if(t=e.call.apply(e,[this].concat(o))||this,!r.default)return c(t);var i=t.props.container;return"function"===typeof i&&(i=i()),i&&!l.default.findDOMNode(i)?c(t):(t.setContainer(i),t)}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=o.prototype;return a.UNSAFE_componentWillReceiveProps=function(e){e.container!==this.props.container&&this.setContainer(e.container)},a.componentDidMount=function(){this._container?this.props.onContainerResolved&&this.props.onContainerResolved():(this.setContainer(this.props.container),this.forceUpdate(this.props.onContainerResolved))},a.componentWillUnmount=function(){this._container=null},a.setContainer=function(e){this._container=(0,d.default)(e,(0,i.default)().body)},a.render=function(){return this._container?this.props.children(this._container):null},o}(s.default.Component);p.propTypes=f;var h=p;t.default=h,e.exports=t.default},396:function(e,t,n){"use strict";var o=n(3),a=n(1),r=n(4),i=n(5),s=n.n(i),l=n(357),d=n.n(l),u=n(116),c=n.n(u),f=n(64),p=n.n(f),h=n(158),v=n.n(h),m=n(0),g=n.n(m),y=n(359),b=n.n(y),E=n(57),w=n(110),_=Object(w.a)("modal-body"),x=n(17),C=g.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.centered,l=e.size,d=e.children,u=e.scrollable,c=Object(o.a)(e,["bsPrefix","className","centered","size","children","scrollable"]),f=(n=Object(x.b)(n,"modal"))+"-dialog";return g.a.createElement("div",Object(a.a)({},c,{ref:t,className:s()(f,r,l&&n+"-"+l,i&&f+"-centered",u&&f+"-scrollable")}),g.a.createElement("div",{className:s()(n+"-content")},d))}));C.displayName="ModalDialog";var k=C,O=Object(w.a)("modal-footer"),N=n(51),M=n(27),R=n.n(M),S={label:R.a.string.isRequired,onClick:R.a.func},F=g.a.forwardRef((function(e,t){var n=e.label,r=e.onClick,i=e.className,l=Object(o.a)(e,["label","onClick","className"]);return g.a.createElement("button",Object(a.a)({ref:t,type:"button",className:s()("close",i),onClick:r},l),g.a.createElement("span",{"aria-hidden":"true"},"\xd7"),g.a.createElement("span",{className:"sr-only"},n))}));F.displayName="CloseButton",F.propTypes=S,F.defaultProps={label:"Close"};var D=F,j=g.a.createContext({onHide:function(){}}),T=g.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.closeLabel,i=e.closeButton,l=e.onHide,d=e.className,u=e.children,c=Object(o.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);n=Object(x.b)(n,"modal-header");var f=Object(m.useContext)(j),p=Object(N.a)((function(){f&&f.onHide(),l&&l()}));return g.a.createElement("div",Object(a.a)({ref:t},c,{className:s()(d,n)}),u,i&&g.a.createElement(D,{label:r,onClick:p}))}));T.displayName="ModalHeader",T.defaultProps={closeLabel:"Close",closeButton:!1};var H,P=T,B=(H="h4",g.a.forwardRef((function(e,t){return g.a.createElement("div",Object(a.a)({},e,{ref:t,className:s()(e.className,H)}))}))),A=Object(w.a)("modal-title",{Component:B}),L=n(47),U=n.n(L),I=n(33),W=n.n(I),z=n(198),K=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",V=".sticky-top",$=".navbar-toggler",q={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:k,manager:new(function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).adjustAndStore=function(e,t,n){var o=t.style[e];t.dataset[e]=o,W()(t,e,parseFloat(W()(t,e))+n+"px")},t.restore=function(e,t){var n=t.dataset[e];void 0!==n&&(delete t.dataset[e],W()(t,e,n))},t}Object(r.a)(t,e);var n=t.prototype;return n.setContainerStyle=function(t,n){var o=this;if(e.prototype.setContainerStyle.call(this,t,n),t.overflowing){var a=v()();U()(n,K).forEach((function(e){return o.adjustAndStore("paddingRight",e,a)})),U()(n,V).forEach((function(e){return o.adjustAndStore("margingRight",e,-a)})),U()(n,$).forEach((function(e){return o.adjustAndStore("margingRight",e,a)}))}},n.removeContainerStyle=function(t,n){var o=this;e.prototype.removeContainerStyle.call(this,t,n),U()(n,K).forEach((function(e){return o.restore("paddingRight",e)})),U()(n,V).forEach((function(e){return o.restore("margingRight",e)})),U()(n,$).forEach((function(e){return o.restore("margingRight",e)}))},t}(n.n(z).a))};function J(e){return g.a.createElement(E.a,e)}function Y(e){return g.a.createElement(E.a,e)}var G=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).state={style:{}},t.modalContext={onHide:function(){return t.props.onHide()}},t.setModalRef=function(e){t._modal=e},t.handleDialogMouseDown=function(){t._waitingForMouseUp=!0},t.handleMouseUp=function(e){t._waitingForMouseUp&&e.target===t._modal.dialog&&(t._ignoreBackdropClick=!0),t._waitingForMouseUp=!1},t.handleClick=function(e){t._ignoreBackdropClick||e.target!==e.currentTarget?t._ignoreBackdropClick=!1:t.props.onHide()},t.handleEnter=function(e){var n;e&&(e.style.display="block",t.updateDialogStyle(e));for(var o=arguments.length,a=new Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];t.props.onEnter&&(n=t.props).onEnter.apply(n,[e].concat(a))},t.handleEntering=function(e){for(var n,o=arguments.length,a=new Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];t.props.onEntering&&(n=t.props).onEntering.apply(n,[e].concat(a)),d.a.on(window,"resize",t.handleWindowResize)},t.handleExited=function(e){var n;e&&(e.style.display="");for(var o=arguments.length,a=new Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];t.props.onExited&&(n=t.props).onExited.apply(n,a),d.a.off(window,"resize",t.handleWindowResize)},t.handleWindowResize=function(){t.updateDialogStyle(t._modal.dialog)},t.renderBackdrop=function(e){var n=t.props,o=n.bsPrefix,r=n.backdropClassName,i=n.animation;return g.a.createElement("div",Object(a.a)({},e,{className:s()(o+"-backdrop",r,!i&&"show")}))},t}Object(r.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){d.a.off(window,"resize",this.handleWindowResize)},n.updateDialogStyle=function(e){if(p.a){var t=this.props.manager.isContainerOverflowing(this._modal),n=e.scrollHeight>c()(e).documentElement.clientHeight;this.setState({style:{paddingRight:t&&!n?v()():void 0,paddingLeft:!t&&n?v()():void 0}})}},n.render=function(){var e=this.props,t=e.bsPrefix,n=e.className,r=e.style,i=e.dialogClassName,l=e.children,d=e.dialogAs,u=e.show,c=e.animation,f=e.backdrop,p=e.keyboard,h=e.manager,v=e.onEscapeKeyDown,m=e.onShow,y=e.onHide,E=e.container,w=e.autoFocus,_=e.enforceFocus,x=e.restoreFocus,C=e.onEntered,k=e.onExit,O=e.onExiting,N=(e.onExited,e.onEntering,e.onEnter,e.onEntering,e.backdropClassName,Object(o.a)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","show","animation","backdrop","keyboard","manager","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","onEntered","onExit","onExiting","onExited","onEntering","onEnter","onEntering","backdropClassName"])),M=!0===f?this.handleClick:null,R=Object(a.a)({},r,{},this.state.style);return c||(R.display="block"),g.a.createElement(j.Provider,{value:this.modalContext},g.a.createElement(b.a,{show:u,backdrop:f,container:E,keyboard:p,autoFocus:w,enforceFocus:_,restoreFocus:x,onEscapeKeyDown:v,onShow:m,onHide:y,onEntered:C,onExit:k,onExiting:O,manager:h,ref:this.setModalRef,style:R,className:s()(n,t),containerClassName:t+"-open",transition:c?J:void 0,backdropTransition:c?Y:void 0,renderBackdrop:this.renderBackdrop,onClick:M,onMouseUp:this.handleMouseUp,onEnter:this.handleEnter,onEntering:this.handleEntering,onExited:this.handleExited},g.a.createElement(d,Object(a.a)({},N,{onMouseDown:this.handleDialogMouseDown,className:i}),l)))},t}(g.a.Component);G.defaultProps=q;var Q=Object(x.a)(G,"modal");Q.Body=_,Q.Header=P,Q.Title=A,Q.Footer=O,Q.Dialog=k,Q.TRANSITION_DURATION=300,Q.BACKDROP_TRANSITION_DURATION=150;t.a=Q}}]);
//# sourceMappingURL=1.a60c846e.chunk.js.map