# App Entry Point

React Native visionOS uses SwiftUI lifecycle. The app entry point is now App.swift file (by default it is main.m). This change allows us to use full capabilities of the visionOS SDK.

Here is an example from the template:

```swift title="App.swift"
@main
struct HelloWorldApp: App {
  @UIApplicationDelegateAdaptor var delegate: AppDelegate

  var body: some Scene {
    RCTMainWindow(moduleName: "HelloWorld")
  }
}
```

We are using `@UIApplicationDelegateAdaptor`, a property wrapper that allows us to use familiar `AppDelegate` in SwiftUI life cycle.

`AppDelegate` extends `RCTAppDelegate` which does most of React Native initialization.
