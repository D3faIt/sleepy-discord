"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[4954],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=c,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:c,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},816:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(3117),c=n(102),a=(n(7294),n(3905)),o=["components"],p={title:"sleepy_discord/attachment.cpp"},i=void 0,l={unversionedId:"reference/Files/attachment_8cpp",id:"reference/Files/attachment_8cpp",title:"sleepy_discord/attachment.cpp",description:"Namespaces",source:"@site/docs/reference/Files/attachment_8cpp.md",sourceDirName:"reference/Files",slug:"/reference/Files/attachment_8cpp",permalink:"/sleepy-discord/docs/reference/Files/attachment_8cpp",tags:[],version:"current",frontMatter:{title:"sleepy_discord/attachment.cpp"},sidebar:"Reference",previous:{title:"include/sleepy_discord/asio_udp.h",permalink:"/sleepy-discord/docs/reference/Files/asio__udp_8h"},next:{title:"include/sleepy_discord/attachment.h",permalink:"/sleepy-discord/docs/reference/Files/attachment_8h"}},s=[{value:"Namespaces",id:"namespaces",children:[],level:2},{value:"Source code",id:"source-code",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,c.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"namespaces"},"Namespaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),(0,a.kt)("h2",{id:"source-code"},"Source code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "attachment.h"\n\nnamespace SleepyDiscord {\n    Attachment::Attachment(const json::Value& json) :\n        Attachment(json::fromJSON<Attachment>(json)) {\n    }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Updated on  2 January 2022 at 00:25:08 UTC"))}d.isMDXComponent=!0}}]);