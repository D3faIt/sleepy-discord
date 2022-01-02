"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[7463],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7540:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(3117),a=r(102),s=(r(7294),r(3905)),o=["components"],i={title:"SleepyDiscord::Response"},c=void 0,l={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_response",id:"reference/Classes/struct_sleepy_discord_1_1_response",title:"SleepyDiscord::Response",description:"Inherited by SleepyDiscord::StandardResponse",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_response.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1_response",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_response",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::Response"},sidebar:"Reference",previous:{title:"SleepyDiscord::Ready",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_ready"},next:{title:"SleepyDiscord::Role",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_role"}},u=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function error",id:"function-error",children:[],level:3},{value:"function Response",id:"function-response",children:[],level:3},{value:"function Response",id:"function-response-1",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable text",id:"variable-text",children:[],level:3},{value:"variable statusCode",id:"variable-statuscode",children:[],level:3},{value:"variable header",id:"variable-header",children:[],level:3},{value:"variable birth",id:"variable-birth",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Inherited by ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_standard_response"},"SleepyDiscord::StandardResponse")),(0,s.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,s.kt)("h3",{id:"function-error"},"function error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"inline bool error() const\n")),(0,s.kt)("h3",{id:"function-response"},"function Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"Response() =default\n")),(0,s.kt)("h3",{id:"function-response-1"},"function Response"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"inline Response(\n    int32_t _statusCode\n)\n")),(0,s.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,s.kt)("h3",{id:"variable-text"},"variable text"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"std::string text;\n")),(0,s.kt)("h3",{id:"variable-statuscode"},"variable statusCode"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"int32_t statusCode = 0;\n")),(0,s.kt)("h3",{id:"variable-header"},"variable header"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"std::map< std::string, std::string, caseInsensitiveCompare > header;\n")),(0,s.kt)("h3",{id:"variable-birth"},"variable birth"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"time_t birth = 0;\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Updated on  2 January 2022 at 00:25:08 UTC"))}d.isMDXComponent=!0}}]);