# Immersive Spaces

One of the key features of visionOS are [`ImmersiveSpaces`](https://developer.apple.com/documentation/swiftui/immersive-spaces), which allow to display unbounded content in a person’s surroundings.

:::warning
Make sure to set `UIApplicationSupportsMultipleScenes` to `true` in `Info.plist` as described [here](/api/window-manager#uiapplicationsupportsmultiplescenes).
:::

### Declare ImmersiveSpace in `App.swift`

```swift title="App.swift"
@main
struct HelloWorldApp: App {
  @UIApplicationDelegateAdaptor var delegate: AppDelegate
  // highlight-next-line
  @State private var immersionLevel: ImmersionStyle = .mixed

  var body: some Scene {
    RCTMainWindow(moduleName: "HelloWorldApp")
// highlight-start
    ImmersiveSpace(id: "TestImmersiveSpace") {
      // RealityKit content goes here
    }
     .immersionStyle(selection: $immersionLevel, in: .mixed, .progressive, .full)
// highlight-end
  }
}
```

ImmersiveSpaces can have multiple levels of immersion:

- The mixed style blends your content with passthrough.
- The full style displays only your content, with passthrough turned off.
- The progressive style completely replaces passthrough in a portion of the display.

For more information about `ImmersiveSpace` API refer to [Apple documentation](https://developer.apple.com/documentation/swiftui/immersive-spaces).

### Open new ImmersiveSpace from JS

In order to open a new ImmersiveSpace, call `XR.requestSession()`.

```ts
import { XR } from "@callstack/react-native-visionos";
//...
const openXRSession = async () => {
  try {
    if (!XR.supportsMultipleScenes) {
      Alert.alert("Error", "Multiple scenes are not supported");
      return;
    }
    // highlight-next-line
    await XR.requestSession("TestImmersiveSpace"); // Pass the same identifier from `App.swift`
  } catch (e) {
    Alert.alert("Error", e.message);
  }
};
```

:::warning

Opening an `ImmersiveSpace` can fail in following scenarios:

- `ImmersiveSpace` is not declared.
- `UIApplicationSupportsMultipleScenes` is set to `false`.
- User cancels the request.

:::

This will open a new immersive space for the user. Later on if you want to close it, call:

```ts
const closeXRSession = async () => {
  // highlight-next-line
  await XR.endSession();
};
```

:::note

Only one immersive space can be open at a time.

:::
