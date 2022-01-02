"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[3237],{7511:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var o=n(3117);var r=n(144),i=n(7294),a=n(6010),l=n(8882),s=n(9960),u=n(2263),c=n(4996),f={heroBanner:"heroBanner_3P7f",buttons:"buttons_1r9m",features:"features_3azU",featureImage:"featureImage_ZtzX"},d=n(1216),p=[{title:"Discord with C++",description:i.createElement(i.Fragment,null,"Use the Discord API with software already written in C++.")},{title:"Modular",description:i.createElement(i.Fragment,null,"Can be optionality customized by using different objects for WebScokets, HTTPS, I/O, etc.")},{title:"Portable",description:i.createElement(i.Fragment,null,"As long as your platform or environment can use the internet and run C++11 code, then Sleepy Discord can run on it.")}];function m(e){var t=e.imageUrl,n=void 0===t?"":t,o=e.title,r=e.description,l=(0,c.Z)(n);return i.createElement("div",{className:(0,a.Z)("col col--4",f.feature)},l&&i.createElement("div",{className:"text--center"},i.createElement("img",{className:f.featureImage,src:l,alt:o})),i.createElement("h3",null,o),i.createElement("p",null,r))}var h=function(e,t){this.imageURL=e,this.blur=t},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=new h("img/Untitled.jpg",!0),n.handleLoaded=n.handleLoaded.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}(0,r.Z)(t,e);var n=t.prototype;return n.handleLoaded=function(){var e=this;"img/Untitled.jpg"===this.state.imageURL?this.setState((function(e,t){return new h("img/UntitledHigh.webp",e.blur)})):"img/UntitledHigh.webp"===this.state.imageURL?this.setState((function(t,n){return window.setTimeout((function(){e.setState((function(e,t){return new h("img/360-degree_Panorama_of_the_Southern_Sky_edit.webp",e.blur)}))}),250),new h(e.state.imageURL,!1)})):window.setTimeout((function(){e.setState((function(e,t){return new h("img/360-degree_Panorama_of_the_Southern_Sky_edit1high.webp",e.blur)}))}),500)},n.render=function(){return i.createElement("img",{className:(0,a.Z)("header-image",this.state.blur?"blur4x":"unblur"),src:this.state.imageURL,onLoad:this.handleLoaded,height:4230,width:4230})},t}(i.Component);var b=function(){var e=(0,u.Z)().siteConfig,t=void 0===e?{}:e;return i.createElement(l.Z,{description:"C++ library for Discord."},i.createElement("div",{className:"vertical-flex"},i.createElement("header",{className:(0,a.Z)(f.heroBanner,"front-header")},i.createElement("div",{className:"back-header"},i.createElement(d.ZP,{height:4320,once:!0,placeholder:i.createElement("img",{className:"header-image blur4x",src:"img/Untitled.jpg",height:4230,width:4230})},i.createElement(v,null))),i.createElement("div",{className:"container"},i.createElement("h1",{className:"hero__title"},t.title),i.createElement("p",{className:"hero__subtitle"},t.tagline),i.createElement("div",{className:f.buttons},i.createElement(s.Z,{className:(0,a.Z)("button button--outline button--secondary button--lg",f.getStarted),to:(0,c.Z)("docs/")},"Get Started")))),i.createElement("main",{className:"front-page-content"},p&&p.length>0&&i.createElement("section",{className:f.features},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},p.map((function(e,t){return i.createElement(m,(0,o.Z)({key:t},e))}))))))))}},1216:function(e,t,n){var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(7294),i=f(r),a=f(n(5697)),l=n(4081),s=f(n(8315)),u=f(n(8282)),c=f(n(821));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,v=0,b=0,g=0,w="data-lazyload-listened",y=[],E=[],_=!1;try{var N=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("test",null,N)}catch(k){}var O=!!_&&{capture:!1,passive:!0},P=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t),o=e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,i=void 0,a=void 0;try{var l=t.getBoundingClientRect();o=l.top,r=l.left,i=l.height,a=l.width}catch(k){o=h,r=v,i=g,a=b}var s=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,c=Math.max(o,0),f=Math.max(r,0),d=Math.min(s,o+i)-c,p=Math.min(u,r+a)-f,m=void 0,w=void 0,y=void 0,E=void 0;try{var _=n.getBoundingClientRect();m=_.top,w=_.left,y=_.height,E=_.width}catch(k){m=h,w=v,y=g,E=b}var N=m-c,O=w-f,P=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return N-P[0]<=d&&N+y+P[1]>=0&&O-P[0]<=p&&O+E+P[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(k){n=h,o=g}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=i&&n+o+a[1]>=0}(e);o?e.visible||(e.props.once&&E.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){E.forEach((function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)})),E=[]},L=function(){for(var e=0;e<y.length;++e){var t=y[e];P(t)}C()},T=void 0,j=null,U=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return m(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===T||"debounce"===T&&void 0===this.props.debounce;if(n&&((0,l.off)(e,"scroll",j,O),(0,l.off)(window,"resize",j,O),j=null),j||(void 0!==this.props.debounce?(j=(0,u.default)(L,"number"==typeof this.props.debounce?this.props.debounce:300),T="debounce"):void 0!==this.props.throttle?(j=(0,c.default)(L,"number"==typeof this.props.throttle?this.props.throttle:300),T="throttle"):j=L),this.props.overflow){var o=(0,s.default)(this.ref);if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(w)+1;1===r&&o.addEventListener("scroll",j,O),o.setAttribute(w,r)}}else if(0===y.length||n){var i=this.props,a=i.scroll,f=i.resize;a&&(0,l.on)(e,"scroll",j,O),f&&(0,l.on)(window,"resize",j,O)}y.push(this),P(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",j,O),e.removeAttribute(w)):e.setAttribute(w,t)}}var n=y.indexOf(this);-1!==n&&y.splice(n,1),0===y.length&&"undefined"!=typeof window&&((0,l.off)(window,"resize",j,O),(0,l.off)(window,"scroll",j,O))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.className,a=e.classNamePrefix,l=e.style;return i.default.createElement("div",{className:a+"-wrapper "+r,ref:this.setRef,style:l},this.visible?n:o||i.default.createElement("div",{style:{height:t},className:a+"-placeholder"}))}}]),t}(r.Component);U.propTypes={className:a.default.string,classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},U.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var S=function(e){return e.displayName||e.name||"Component"};t.ZP=U},8282:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,a=void 0,l=void 0,s=function s(){var u=+new Date-a;u<t&&u>=0?o=setTimeout(s,t-u):(o=null,n||(l=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,a=+new Date;var u=n&&!o;return o||(o=setTimeout(s,t)),u&&(l=e.apply(i,r),i=null,r=null),l}}},4081:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},8315:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,a=r.overflow,l=r["overflow-x"],s=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(a)&&n.test(l)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},821:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,a=+new Date,l=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout((function(){o=a,e.apply(i,l)}),t)):(o=a,e.apply(i,l))}}}}]);