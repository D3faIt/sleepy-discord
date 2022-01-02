"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[2118],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),s=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,v=p["".concat(a,".").concat(f)]||p[f]||d[f]||c;return t?n.createElement(v,l(l({ref:r},u),{},{components:t})):n.createElement(v,l({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var c=t.length,l=new Array(c);l[0]=p;var o={};for(var a in r)hasOwnProperty.call(r,a)&&(o[a]=r[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<c;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2131:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=t(3117),i=t(102),c=(t(7294),t(3905)),l=["components"],o={title:"SleepyDiscord::ServerWidget"},a=void 0,s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_server_widget",id:"reference/Classes/struct_sleepy_discord_1_1_server_widget",title:"SleepyDiscord::ServerWidget",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_server_widget.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1_server_widget",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_server_widget",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::ServerWidget"},sidebar:"Reference",previous:{title:"SleepyDiscord::ServerMembersRequest",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_server_members_request"},next:{title:"SleepyDiscord::Snowflake",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_snowflake"}},u=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ServerWidget",id:"function-serverwidget",children:[],level:3},{value:"function ServerWidget",id:"function-serverwidget-1",children:[],level:3},{value:"function ServerWidget",id:"function-serverwidget-2",children:[],level:3},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable enabled",id:"variable-enabled",children:[],level:3},{value:"variable channelID",id:"variable-channelid",children:[],level:3}],level:2}],d={toc:u};function p(e){var r=e.components,t=(0,i.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Inherits from ",(0,c.kt)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),(0,c.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,c.kt)("h3",{id:"function-serverwidget"},"function ServerWidget"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"ServerWidget() =default\n")),(0,c.kt)("h3",{id:"function-serverwidget-1"},"function ServerWidget"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"inline ServerWidget(\n    const nonstd::string_view & json\n)\n")),(0,c.kt)("h3",{id:"function-serverwidget-2"},"function ServerWidget"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"ServerWidget(\n    const json::Value & json\n)\n")),(0,c.kt)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::NULLABLE_FIELD \n)\n')),(0,c.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,c.kt)("h3",{id:"variable-enabled"},"variable enabled"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"bool enabled;\n")),(0,c.kt)("h3",{id:"variable-channelid"},"variable channelID"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Channel > channelID;\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Updated on  2 January 2022 at 00:25:08 UTC"))}p.isMDXComponent=!0}}]);