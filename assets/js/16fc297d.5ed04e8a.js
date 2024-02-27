"use strict";(self.webpackChunkreact_native_visionos_docs=self.webpackChunkreact_native_visionos_docs||[]).push([[609],{6091:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(4848),o=i(8453);const s={},d="Window Manager",r={id:"api/window-manager",title:"Window Manager",description:"This API allows you to create multi-window experiences on visionOS.",source:"@site/docs/api/window-manager.md",sourceDirName:"api",slug:"/api/window-manager",permalink:"/react-native-visionos-docs/api/window-manager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Hover Effects",permalink:"/react-native-visionos-docs/api/hoverEffect"}},a={},c=[{value:"Methods",id:"methods",level:2},{value:"<strong><code>getWindow</code></strong>",id:"getwindow",level:4},{value:"Constants",id:"constants",level:2},{value:"<strong><code>supportsMultipleScenes</code></strong>",id:"supportsmultiplescenes",level:4},{value:"UIApplicationSupportsMultipleScenes",id:"uiapplicationsupportsmultiplescenes",level:2},{value:"Example usage",id:"example-usage",level:2},{value:"Add native entry point",id:"add-native-entry-point",level:3},{value:"4. Open Windows from JS",id:"4-open-windows-from-js",level:3},{value:"(Optional) 5. Use SwiftUI to render windows",id:"optional-5-use-swiftui-to-render-windows",level:3}];function l(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"window-manager",children:"Window Manager"}),"\n",(0,t.jsx)(n.p,{children:"This API allows you to create multi-window experiences on visionOS."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Multi Window",src:i(749).A+"",width:"2732",height:"2048"})}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h4,{id:"getwindow",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"getWindow"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"getWindow(id: String): Window;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"getWindow"})," method returns a ",(0,t.jsx)(n.code,{children:"Window"})," object, which contains following properties:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Window {\n  id: String;\n  open(props?: Object): Promise<void>;\n  update(props: Object): Promise<void>;\n  close(): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"constants",children:"Constants"}),"\n",(0,t.jsx)(n.h4,{id:"supportsmultiplescenes",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"supportsMultipleScenes"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"supportsMultipleScenes: boolean;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A Boolean value that indicates whether the app may display multiple scenes simultaneously. Returns the value of ",(0,t.jsx)(n.code,{children:"UIApplicationSupportsMultipleScenes"})," key from ",(0,t.jsx)(n.code,{children:"Info.plist"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.h2,{id:"uiapplicationsupportsmultiplescenes",children:"UIApplicationSupportsMultipleScenes"}),(0,t.jsxs)(n.p,{children:["In order to use this API, make sure your app supports multiple scenes. Set ",(0,t.jsx)(n.code,{children:"UIApplicationSupportsMultipleScenes"})," to ",(0,t.jsx)(n.code,{children:"true"})," in ",(0,t.jsx)(n.code,{children:"Info.plist"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"<dict>\n  <key>UIApplicationSceneManifest</key>\n  <dict>\n    <key>UIApplicationPreferredDefaultSceneSessionRole</key>\n    <string>UIWindowSceneSessionRoleApplication</string>\n    <key>UIApplicationSupportsMultipleScenes</key>\n    // highlight-next-line\n    <true/>\n    <key>UISceneConfigurations</key>\n    <dict/>\n  </dict>\n</dict>\n</plist>\n\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new component that will be used as an entry point for the second window:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="SecondWindow.tsx"',children:'import { Text, View } from "react-native";\nimport React from "react";\n\nconst SecondWindow = () => {\n  return (\n    <View>\n      <Text>SecondWindow</Text>\n    </View>\n  );\n};\n\nexport default SecondWindow;\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.code,{children:"index.js"})," use ",(0,t.jsx)(n.code,{children:"AppRegistry.registerComponent"})," to register additional component:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'AppRegistry.registerComponent("SecondWindow", () => SecondWindow);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"add-native-entry-point",children:"Add native entry point"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"App.swift"})," add a second window and pass it ",(0,t.jsx)(n.code,{children:"sceneData"})," object."]}),"\n",(0,t.jsxs)(n.p,{children:["We need to retrieve ",(0,t.jsx)(n.code,{children:"reactContext"})," from the environment, it contains data passed to windows from JS side."]}),"\n",(0,t.jsxs)(n.p,{children:["Object returned from the ",(0,t.jsx)(n.code,{children:"getSceneData"})," method is ",(0,t.jsx)(n.em,{children:"reactive"})," (uses Swift Observation Framework) which means that it will cause views to re-render when updated from JS side."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'@main\nstruct HelloWorldApp: App {\n  @UIApplicationDelegateAdaptor var delegate: AppDelegate\n\n  // highlight-next-line\n  @Environment(\\.reactContext) private var reactContext\n\n  var body: some Scene {\n    RCTMainWindow(moduleName: "HelloWorld")\n    // highlight-next-line\n    RCTWindow(id: "SecondWindow", sceneData: reactContext.getSceneData(id: "SecondWindow"))\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"4-open-windows-from-js",children:"4. Open Windows from JS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'const secondWindow = WindowManager.getWindow("SecondWindow");\n\nconst Example = () => {\n  return (\n    <View style={styles.container}>\n      <Button\n        title="Open Second Window"\n        onPress={() => {\n          secondWindow.open({ title: "React Native Window" });\n        }}\n      />\n      <Button\n        title="Update Second Window"\n        onPress={() => {\n          secondWindow.update({ title: "Updated Window" });\n        }}\n      />\n      <Button\n        title="Close Second Window"\n        onPress={() => {\n          secondWindow.close();\n        }}\n      />\n    </View>\n  );\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"optional-5-use-swiftui-to-render-windows",children:"(Optional) 5. Use SwiftUI to render windows"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes you might need to use SwiftUI for particular window and thanks to Swift Observation, SwiftUI views will be properly re-rendered when user calls ",(0,t.jsx)(n.code,{children:"window.update({props})"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to use SwiftUI as a view instead of ",(0,t.jsx)(n.code,{children:"RCTWindow"})," create a new SwiftUI view and accept ",(0,t.jsx)(n.code,{children:"sceneData"})," as parameter. This allows us to reach to the ",(0,t.jsx)(n.code,{children:"sceneData.props"})," dictionary and retrieve props passed from the JS side."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",metastring:'title="SecondWindow.swift"',children:'import SwiftUI\n// highlight-next-line\nimport React_RCTSwiftExtensions\n\nstruct SecondWindow: View {\n// highlight-next-line\n  let sceneData: RCTSceneData?\n\n  var body: some View {\n    if let sceneData {\n      Text(sceneData.props?["title"] as? String ?? "Title wasn\'t passed")\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Next, in ",(0,t.jsx)(n.code,{children:"App.swift"}),", add new WindowGroup:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'@main\nstruct HelloWorldApp: App {\n  @UIApplicationDelegateAdaptor var delegate: AppDelegate\n\n  // highlight-next-line\n  @Environment(\\.reactContext) private var reactContext\n\n  var body: some Scene {\n    RCTMainWindow(moduleName: "HelloWorld")\n// highlight-start\n    WindowGroup(id: "SecondWindow") {\n      SecondWindow(sceneData: reactContext.getSceneData(id: "SecondWindow"))\n    }\n// highlight-end\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},749:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/multi-window-190be9ae102b7b00b4f125ad8cb549b0.jpeg"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var t=i(6540);const o={},s=t.createContext(o);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);