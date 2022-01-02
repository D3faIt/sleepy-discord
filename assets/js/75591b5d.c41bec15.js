"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[1937],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?t.createElement(m,a(a({ref:r},s),{},{components:n})):t.createElement(m,a({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7956:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var t=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],c={title:"include/sleepy_discord/standard_config_header.h"},l=void 0,d={unversionedId:"reference/Files/standard__config__header_8h",id:"reference/Files/standard__config__header_8h",title:"include/sleepy_discord/standard_config_header.h",description:"Functions",source:"@site/docs/reference/Files/standard__config__header_8h.md",sourceDirName:"reference/Files",slug:"/reference/Files/standard__config__header_8h",permalink:"/sleepy-discord/docs/reference/Files/standard__config__header_8h",tags:[],version:"current",frontMatter:{title:"include/sleepy_discord/standard_config_header.h"},sidebar:"Reference",previous:{title:"include/sleepy_discord/standard_config.h",permalink:"/sleepy-discord/docs/reference/Files/standard__config_8h"},next:{title:"include/sleepy_discord/timer.h",permalink:"/sleepy-discord/docs/reference/Files/timer_8h"}},s=[{value:"Functions",id:"functions",children:[],level:2},{value:"Functions Documentation",id:"functions-documentation",children:[{value:"function onError",id:"function-onerror",children:[],level:3},{value:"function sleep",id:"function-sleep",children:[],level:3}],level:2},{value:"Source code",id:"source-code",children:[],level:2}],u={toc:s};function p(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"virtual void"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/Files/standard__config__header_8h#function-onerror"},"onError")),"(SleepyDiscord::ErrorCode errorCode, const std::string errorMessage) override")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"virtual void"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/Files/standard__config__header_8h#function-sleep"},"sleep")),"(const unsigned int milliseconds) override")))),(0,i.kt)("h2",{id:"functions-documentation"},"Functions Documentation"),(0,i.kt)("h3",{id:"function-onerror"},"function onError"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void onError(\n    SleepyDiscord::ErrorCode errorCode,\n    const std::string errorMessage\n) override\n")),(0,i.kt)("h3",{id:"function-sleep"},"function sleep"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"virtual void sleep(\n    const unsigned int milliseconds\n) override\n")),(0,i.kt)("h2",{id:"source-code"},"Source code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#pragma once\n#ifndef SLEEPY_DO_NOT_INCLUDE_STANDARD_ONERROR\nvirtual void onError(SleepyDiscord::ErrorCode errorCode, const std::string errorMessage) override;\n#endif\n\n#ifndef SLEEPY_DO_NOT_INCLUDE_STANDARD_SLEEP\nvirtual void sleep(const unsigned int milliseconds) override;\n#endif\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Updated on  2 January 2022 at 00:25:08 UTC"))}p.isMDXComponent=!0}}]);