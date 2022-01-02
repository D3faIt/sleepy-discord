"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[439],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4873:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Snowflakes and IDs"},l=void 0,c={unversionedId:"snowflake",id:"snowflake",title:"Snowflakes and IDs",description:"Snowflakes very common type is used for identification. Defined as SleepyDiscord::Snowflake in snowflake.h.",source:"@site/docs/snowflake.md",sourceDirName:".",slug:"/snowflake",permalink:"/sleepy-discord/docs/snowflake",tags:[],version:"current",lastUpdatedAt:1627365762,formattedLastUpdatedAt:"7/27/2021",frontMatter:{title:"Snowflakes and IDs"},sidebar:"Docs",previous:{title:"Unicode and Emojis",permalink:"/sleepy-discord/docs/unicode"},next:{title:"Connection Options",permalink:"/sleepy-discord/docs/connect-options"}},p=[{value:"Unique",id:"unique",children:[],level:2},{value:"Valid",id:"valid",children:[],level:2},{value:"Casting",id:"casting",children:[{value:"To Snowflake",id:"to-snowflake",children:[],level:3},{value:"To String or Int",id:"to-string-or-int",children:[],level:3},{value:"Number",id:"number",children:[],level:3}],level:2},{value:"Timestamp",id:"timestamp",children:[],level:2},{value:"Equality ==",id:"equality-",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Snowflakes very common type is used for identification. Defined as ",(0,o.kt)("a",{parentName:"p",href:"reference/Classes/struct_sleepy_discord_1_1_snowflake"},"SleepyDiscord::Snowflake")," in ",(0,o.kt)("a",{parentName:"p",href:"reference/Files/snowflake_8h#file-snowflake.h"},"snowflake.h"),"."),(0,o.kt)("h2",{id:"unique"},"Unique"),(0,o.kt)("p",null,"2 IDs for 2 different objects of the ",(0,o.kt)("strong",{parentName:"p"},"same type")," should not have the same ID. However, 2 ID for objects of ",(0,o.kt)("strong",{parentName:"p"},"different types")," can have the same ID. As such the library uses a template class to help differentiate the two. Often a Server and it's general channel and it's default role has the same ID, so it's useful for getting objects that would be created when another object is created on the same operation."),(0,o.kt)("h2",{id:"valid"},"Valid"),(0,o.kt)("p",null,"For empty IDs, the library uses an empty string to represent when an ID isn't available. For example, a Direct Message Channel would have an no Server ID and as such it's ID is an empty string."),(0,o.kt)("p",null,"However, if it's not empty, the only way to know if it's valid is by giving the ID to Discord."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"if (messageID.empty())\n")),(0,o.kt)("h2",{id:"casting"},"Casting"),(0,o.kt)("h3",{id:"to-snowflake"},"To Snowflake"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'Snowflake<Message> ID = "string";\nSnowflake<Message> ID = message; //Same as message.ID\nSnowflake<Message> ID = 90485;\n')),(0,o.kt)("h3",{id:"to-string-or-int"},"To String or Int"),(0,o.kt)("p",null,"The Snowflake stores it's data in a string that you can cast to. You can also get a number if you like instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"std::string ID = messageID; //implicit\nstd::string ID = messagesID.string();\n")),(0,o.kt)("h3",{id:"number"},"Number"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"int64_t ID = messageID.number(); // throws if empty\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using .number() or .timestamp(), make sure that snowflake isn't empty first or the library will throw an exception."))),(0,o.kt)("h2",{id:"timestamp"},"Timestamp"),(0,o.kt)("p",null,"Snowflakes contains some data that tells you when an object was create, and the worker and process that created it. The time is what's useful tho, so the library can extract this data for you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"```cpp\nstd::chrono::time_point<std::chrono::steady_clock> birth = messageID.timestamp(); // throws if ID is empty\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using .number() or .timestamp(), make sure that snowflake isn't empty first or you'll get an error."))),(0,o.kt)("h2",{id:"equality-"},"Equality =="),(0,o.kt)("p",null,"This lets you check if you have the right object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"if (message.channelID == channel.ID)\n")))}m.isMDXComponent=!0}}]);