"use strict";(self.webpackChunkreact_native_visionos_docs=self.webpackChunkreact_native_visionos_docs||[]).push([[419],{9357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(4848),s=t(8453);const o={sidebar_position:1},r="Integrate into existing projects",c={id:"docs/guides/integrate-into-existing-projects",title:"Integrate into existing projects",description:"React Native visionOS allows you to take your existing React Native codebase and run it on visionOS.",source:"@site/docs/docs/guides/integrate-into-existing-projects.md",sourceDirName:"docs/guides",slug:"/docs/guides/integrate-into-existing-projects",permalink:"/react-native-visionos-docs/docs/guides/integrate-into-existing-projects",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Guides",permalink:"/react-native-visionos-docs/category/guides"},next:{title:"Immersive Spaces",permalink:"/react-native-visionos-docs/docs/guides/immersive-spaces"}},a={},d=[];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"integrate-into-existing-projects",children:"Integrate into existing projects"}),"\n",(0,i.jsx)(n.p,{children:"React Native visionOS allows you to take your existing React Native codebase and run it on visionOS."}),"\n",(0,i.jsx)(n.p,{children:"This guide describes how to extend your app's capabilities by adding a new platform."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Initialize a new project using ",(0,i.jsx)(n.code,{children:"react-native-community/cli"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Use the same name that you have in your main app."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npx @callstack/react-native-visionos@latest init <YourAppName>\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Copy ",(0,i.jsx)(n.code,{children:"visionos"})," folder to your destination project."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cp -r <YourAppName>/visionOS YourApp\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Add the necessary dependencies to your project:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"yarn add @callstack/react-native-visionos\nyarn add --dev @callstack/out-of-tree-platforms\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Modify ",(0,i.jsx)(n.code,{children:"metro.config.js"})," to include custom ",(0,i.jsx)(n.code,{children:"resolver"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This resolver rewrites imports from ",(0,i.jsx)(n.code,{children:"react-native"})," -> ",(0,i.jsx)(n.code,{children:"@callstack/react-native-visionos"})," when bundling the app for that platform."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");\nconst { getPlatformResolver } = require("@callstack/out-of-tree-platforms");\n\nconst config = {\n  resolver: {\n    resolveRequest: getPlatformResolver({\n      platformNameMap: { visionos: "@callstack/react-native-visionos" },\n    }),\n  },\n};\n\nmodule.exports = mergeConfig(getDefaultConfig(__dirname), config);\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Done!"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Currently, ",(0,i.jsx)(n.strong,{children:"Expo"})," is not supported."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);