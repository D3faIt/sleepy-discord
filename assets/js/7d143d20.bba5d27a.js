"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[1239],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||c;return n?t.createElement(m,a(a({ref:r},p),{},{components:n})):t.createElement(m,a({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8850:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var t=n(3117),o=n(102),c=(n(7294),n(3905)),a=["components"],s={title:"sleepy_discord/user.cpp"},i=void 0,l={unversionedId:"reference/Files/user_8cpp",id:"reference/Files/user_8cpp",title:"sleepy_discord/user.cpp",description:"Namespaces",source:"@site/docs/reference/Files/user_8cpp.md",sourceDirName:"reference/Files",slug:"/reference/Files/user_8cpp",permalink:"/sleepy-discord/docs/reference/Files/user_8cpp",tags:[],version:"current",frontMatter:{title:"sleepy_discord/user.cpp"},sidebar:"Reference",previous:{title:"include/sleepy_discord/udp_client.h",permalink:"/sleepy-discord/docs/reference/Files/udp__client_8h"},next:{title:"include/sleepy_discord/user.h",permalink:"/sleepy-discord/docs/reference/Files/user_8h"}},p=[{value:"Namespaces",id:"namespaces",children:[],level:2},{value:"Source code",id:"source-code",children:[],level:2}],u={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"namespaces"},"Namespaces"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Name"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("strong",{parentName:"td"},(0,c.kt)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),(0,c.kt)("h2",{id:"source-code"},"Source code"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "user.h"\n\nnamespace SleepyDiscord {\n    User::User(const json::Value & json) :\n        User(json::fromJSON<User>(json)) {\n    }\n\n    Connection::Connection(const json::Value & json) :\n        Connection(json::fromJSON<Connection>(json)) {\n    }\n}\n')),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Updated on  2 January 2022 at 00:25:08 UTC"))}d.isMDXComponent=!0}}]);