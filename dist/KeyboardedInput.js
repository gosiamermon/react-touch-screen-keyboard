var KeyboardedInput=function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var a=n(3),o=n(2),r=n(4);e.exports.Keyboard=a.default||a,e.exports=r.default||r,e.exports.KeyboardButton=o.default||o},function(e,t){e.exports=React},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),s=a(l),c=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return u(t,e),i(t,[{key:"handleClick",value:function(){this.props.onClick(this.props.value)}},{key:"render",value:function(){return s.default.createElement("button",{type:"button",className:"keyboard-button "+this.props.classes,onClick:this.props.isDisabled?null:this.handleClick,autoFocus:this.props.autofocus,disabled:this.props.isDisabled},this.props.value)}}]),t}(l.PureComponent);c.propTypes={value:l.PropTypes.oneOfType([l.PropTypes.string.isRequired,l.PropTypes.node.isRequired]),classes:l.PropTypes.string,onClick:l.PropTypes.func.isRequired,autofocus:l.PropTypes.bool,isDisabled:l.PropTypes.bool},c.defaultProps={autofocus:!1,isDisabled:!1},t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),s=a(l),c=n(2),d=a(c),p=n(10),f=a(p),h=n(8),y=a(h),b=n(11),v=a(b),m=n(9),k=a(m),g=n(5),C=a(g),w=n(6),_=a(w),E=n(7),P=a(E),O=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLetterButtonClick=n.handleLetterButtonClick.bind(n),n.handleBackspaceClick=n.handleBackspaceClick.bind(n),n.handleLanguageClick=n.handleLanguageClick.bind(n),n.clearInput=n.clearInput.bind(n),n.handleShiftClick=n.handleShiftClick.bind(n),n.handleSymbolsClick=n.handleSymbolsClick.bind(n),n.state={currentLanguage:e.defaultKeyboard,showSymbols:!1,uppercase:n.isUppercase()},n}return u(t,e),i(t,[{key:"handleLanguageClick",value:function(){this.setState({currentLanguage:this.state.currentLanguage===this.props.defaultKeyboard?this.props.secondaryKeyboard:this.props.defaultKeyboard})}},{key:"clearInput",value:function(){var e=this.props.inputNode;e.value="",this.props.onClick&&this.props.onClick(""),setTimeout(function(){e.focus()},0),e.dispatchEvent(new Event("input"))}},{key:"handleShiftClick",value:function(){this.setState({uppercase:!this.state.uppercase})}},{key:"handleSymbolsClick",value:function(){this.setState({showSymbols:!this.state.showSymbols})}},{key:"handleLetterButtonClick",value:function(e){var t=this.props.inputNode,n=t.value,a=t.selectionStart,o=t.selectionEnd,r=n.substring(0,a)+e+n.substring(o);t.value=r,this.props.onClick&&this.props.onClick(r),setTimeout(function(){t.focus(),t.setSelectionRange(a+1,a+1)},0),this.setState({uppercase:this.isUppercase()}),t.dispatchEvent(new Event("input"))}},{key:"isUppercase",value:function(){var e=this.props,t=e.inputNode,n=e.isFirstLetterUppercase;return"password"!==t.type&&"email"!==t.dataset.type&&!t.value.length&&n}},{key:"handleBackspaceClick",value:function(){var e=this.props.inputNode,t=e.value,n=e.selectionStart,a=e.selectionEnd,o=void 0,r=void 0;n===a?(o=t.substring(0,n-1)+t.substring(a),r=n-1):(o=t.substring(0,n)+t.substring(a),r=n),r=r>0?r:0,e.value=o,this.props.onClick&&this.props.onClick(o),setTimeout(function(){e.focus(),e.setSelectionRange(r,r)},0),this.setState({uppercase:this.isUppercase()}),e.dispatchEvent(new Event("input"))}},{key:"getKeys",value:function(){var e=void 0;return e=this.state.showSymbols?v.default:"us"===this.state.currentLanguage?f.default:"de"===this.state.currentLanguage?k.default:"ru"===this.state.currentLanguage?y.default:f.default,this.state.uppercase?e.map(function(e){return e.map(function(e){return e.toUpperCase()})}):e}},{key:"getSymbolsKeyValue",value:function(){var e=void 0;return e=this.state.showSymbols?"us"===this.state.currentLanguage||"de"===this.state.currentLanguage?"Abc":"ru"===this.state.currentLanguage?"Абв":"Abc":".?!&"}},{key:"render",value:function(){var e=this,t=this.props,n=(t.rightButtons,t.inputNode),a=t.secondaryKeyboard,o=this.getKeys(),r=[1,2,3,4,5,6,7,8,9,0],u=this.getSymbolsKeyValue();return s.default.createElement("div",{className:"keyboard keyboard-wrapper"},s.default.createElement("div",{className:"keyboard-row"},r.map(function(t){return s.default.createElement(d.default,{value:t,onClick:e.handleLetterButtonClick,classes:"keyboard-numberButton",key:t})}),s.default.createElement(d.default,{value:s.default.createElement(C.default,null),onClick:this.handleBackspaceClick})),s.default.createElement("div",{className:"keyboard-row"},o[0].map(function(t){return s.default.createElement(d.default,{value:t,onClick:e.handleLetterButtonClick,key:t})})),s.default.createElement("div",{className:"keyboard-row"},o[1].map(function(t){return s.default.createElement(d.default,{value:t,onClick:e.handleLetterButtonClick,key:t})})),s.default.createElement("div",{className:"keyboard-row"},s.default.createElement(d.default,{classes:"shift-symbols",value:s.default.createElement(P.default,null),onClick:this.handleShiftClick}),o[2].map(function(t){return s.default.createElement(d.default,{value:t,onClick:e.handleLetterButtonClick,key:t})}),s.default.createElement(d.default,{classes:"shift-symbols",value:u,onClick:this.handleSymbolsClick})),s.default.createElement("div",{className:"keyboard-row"},"undefined"!=typeof a?s.default.createElement(d.default,{value:s.default.createElement(_.default,null),onClick:this.handleLanguageClick}):null,"email"===n.dataset.type?s.default.createElement(d.default,{value:"@",onClick:this.handleLetterButtonClick}):null,s.default.createElement(d.default,{value:" ",classes:"keyboard-space",onClick:this.handleLetterButtonClick}),"email"===n.dataset.type?s.default.createElement(d.default,{value:".",onClick:this.handleLetterButtonClick}):null,s.default.createElement(d.default,{value:"↧",classes:"keyboard-submit-button",onClick:this.props.hideKeyboard})))}}]),t}(l.PureComponent);O.propTypes={inputNode:l.PropTypes.any.isRequired,onClick:l.PropTypes.func,isFirstLetterUppercase:l.PropTypes.bool,defaultKeyboard:l.PropTypes.string,secondaryKeyboard:l.PropTypes.string,hideKeyboard:l.PropTypes.func},O.defaultProps={rightButtons:[],isFirstLetterUppercase:!1,defaultKeyboard:"us"},t.default=O},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),c=a(s),d=n(3),p=a(d),f=n(2),h=(a(f),function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleFocus=n.handleFocus.bind(n),n.handleFocusLost=n.handleFocusLost.bind(n),n.handleChange=n.handleChange.bind(n),n.hideKeyboard=n.hideKeyboard.bind(n),n.state={showKeyboard:!1,input:null},n}return u(t,e),l(t,[{key:"componentDidMount",value:function(){this.refs.input.addEventListener("input",this.handleChange)}},{key:"componentWillUnmount",value:function(){this.refs.input.removeEventListener("input",this.handleChange)}},{key:"handleChange",value:function(e){this.props.onChange(e)}},{key:"handleFocus",value:function(){this.setState(i({},this.state,{showKeyboard:!0}))}},{key:"handleFocusLost",value:function(e){var t=this;setTimeout(function(){document.activeElement.classList.contains("keyboard-button")||document.activeElement.classList.contains("keyboard")||document.activeElement.classList.contains("keyboard-row")||t.setState(i({},t.state,{showKeyboard:!1}))},0)}},{key:"hideKeyboard",value:function(){this.setState(i({},this.state,{showKeyboard:!1}))}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("input",{value:this.props.type,type:this.props.type,onFocus:this.handleFocus,onBlur:this.handleFocusLost,ref:"input"}),this.state.showKeyboard&&this.props.enabled&&c.default.createElement(p.default,{hideKeyboard:this.hideKeyboard,defaultKeyboard:this.props.defaultKeyboard,secondaryKeyboard:this.props.secondaryKeyboard,inputNode:this.refs.input}))}}]),t}(c.default.Component));t.default=h},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=a(o),u=function(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,a=e.width,o=void 0===a?24:a,u=e.height,i=void 0===u?24:u,l=e.fill;return r.default.createElement("svg",{width:o,height:i,fill:l,viewBox:n},r.default.createElement("path",{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"}))};t.default=u},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=a(o),u=function(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,a=e.width,o=void 0===a?24:a,u=e.height,i=void 0===u?24:u,l=e.fill;return r.default.createElement("svg",{width:o,height:i,fill:l,viewBox:n},r.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}))};t.default=u},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=a(o),u=function(e){var t=e.viewBox,n=void 0===t?"0 0 32 32":t,a=e.width,o=void 0===a?24:a,u=e.height,i=void 0===u?24:u,l=e.fill;return r.default.createElement("svg",{width:o,height:i,fill:l,viewBox:n},r.default.createElement("path",{d:"M21 28h-10c-0.552 0-1-0.448-1-1v-11h-4c-0.404 0-0.769-0.244-0.924-0.617s-0.069-0.804 0.217-1.090l10-10c0.391-0.39 1.024-0.39 1.414 0l10 10c0.286 0.286 0.372 0.716 0.217 1.090s-0.519 0.617-0.924 0.617h-4v11c0 0.552-0.448 1-1 1zM12 26h8v-11c0-0.552 0.448-1 1-1h2.586l-7.586-7.586-7.586 7.586h2.586c0.552 0 1 0.448 1 1v11z"}))};t.default=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[["й","ц","у","к","е","н","г","ш","щ","з","х","ъ"],["ф","ы","в","а","п","р","о","л","д","ж","э"],["я","ч","с","м","и","т","ь","б","ю"]]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[["q","w","e","r","t","z","u","i","o","p","ü"],["a","s","d","f","g","h","j","k","l","ö","ä"],["y","x","c","v","b","n","m"]]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m"]]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[["=","+","%","*","[","]","{","}","<",">"],["@",":",";","_","-","#","(",")","/","\\"],[".",",","?","!","'",'"',"^"]]}]);
//# sourceMappingURL=KeyboardedInput.js.map