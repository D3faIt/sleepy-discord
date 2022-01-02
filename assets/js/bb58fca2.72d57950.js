"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[4955],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),f=c,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(v,o(o({ref:n},u),{},{components:t})):r.createElement(v,o({ref:n},u))}));function f(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var i=t.length,o=new Array(i);o[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4582:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(3117),c=t(102),i=(t(7294),t(3905)),o=["components"],a={title:"SleepyDiscord::VoiceContext"},l=void 0,s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_voice_context",id:"reference/Classes/struct_sleepy_discord_1_1_voice_context",title:"SleepyDiscord::VoiceContext",description:"Public Functions Documentation",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_voice_context.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1_voice_context",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_voice_context",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::VoiceContext"},sidebar:"Reference",previous:{title:"SleepyDiscord::User",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_user"},next:{title:"SleepyDiscord::VoiceRegion",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_voice_region"}},u=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function getChannelID",id:"function-getchannelid",children:[],level:3},{value:"function getServerID",id:"function-getserverid",children:[],level:3},{value:"function operator==",id:"function-operator",children:[],level:3},{value:"function setVoiceHandler",id:"function-setvoicehandler",children:[],level:3},{value:"function hasVoiceHandler",id:"function-hasvoicehandler",children:[],level:3},{value:"function getVoiceHandler",id:"function-getvoicehandler",children:[],level:3},{value:"function startVoiceHandler",id:"function-startvoicehandler",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable VoiceConnection",id:"variable-voiceconnection",children:[],level:3},{value:"variable BaseDiscordClient",id:"variable-basediscordclient",children:[],level:3}],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,c.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,i.kt)("h3",{id:"function-getchannelid"},"function getChannelID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"inline Snowflake< Channel > getChannelID()\n")),(0,i.kt)("h3",{id:"function-getserverid"},"function getServerID"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"inline Snowflake< Server > getServerID()\n")),(0,i.kt)("h3",{id:"function-operator"},"function operator=="),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"inline bool operator==(\n    const VoiceContext & right\n)\n")),(0,i.kt)("h3",{id:"function-setvoicehandler"},"function setVoiceHandler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"inline void setVoiceHandler(\n    BaseVoiceEventHandler * source\n)\n")),(0,i.kt)("h3",{id:"function-hasvoicehandler"},"function hasVoiceHandler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"inline bool hasVoiceHandler()\n")),(0,i.kt)("h3",{id:"function-getvoicehandler"},"function getVoiceHandler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"inline BaseVoiceEventHandler & getVoiceHandler()\n")),(0,i.kt)("h3",{id:"function-startvoicehandler"},"function startVoiceHandler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class EventHandler ,\nclass... Types>\ninline void startVoiceHandler(\n    Types &&... arguments\n)\n")),(0,i.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,i.kt)("h3",{id:"variable-voiceconnection"},"variable VoiceConnection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"friend VoiceConnection;\n")),(0,i.kt)("h3",{id:"variable-basediscordclient"},"variable BaseDiscordClient"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"friend BaseDiscordClient;\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Updated on  2 January 2022 at 00:25:08 UTC"))}p.isMDXComponent=!0}}]);