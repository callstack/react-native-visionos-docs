# Ornaments

In order to use ornaments in your app, you need to declare them in your `App.swift` file. 

```swift title="App.swift"
struct MainApp: App {
  @UIApplicationDelegateAdaptor var delegate: AppDelegate
  
  var body: some Scene {
    RCTMainWindow(moduleName: "App") { rootView in
// highlight-start
      rootView.ornament(attachmentAnchor: .scene(.bottom)) {
        VStack {
          Button("1") {}
          Button("2") {}
        }
      }
// highlight-end
    }
  }
}
```

This API allows you to **attach any additional SwiftUI modifier** to the root view of your app. In this example, we attach a `VStack` with two buttons to the bottom of the scene. You can also use React Native views for the ornament. Follow the [Window Manager API](/api/window-manager) to learn more about how to use React Native views in SwiftUI.

For more information about the `ornament` API, refer to the [Apple documentation](https://developer.apple.com/documentation/SwiftUI/View/ornament(visibility:attachmentAnchor:contentAlignment:ornament:)).

## Moving DevMenu ornament

The DevMenu ornament can be moved to a different position in the app if it conflicts with your custom ornament. You can use the `devMenuSceneAnchor` parameter in the `RCTMainWindow` initializer to specify the position of the DevMenu.

```swift title="App.swift"
struct MainApp: App {
  @UIApplicationDelegateAdaptor var delegate: AppDelegate
  
  var body: some Scene {
// highlight-start
    RCTMainWindow(moduleName: "App", devMenuSceneAnchor: .top) { rootView in
// highlight-end
      // ...
    }
  }
}
```
