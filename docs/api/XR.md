Manage Immersive Experiences.

## Methods

#### **`requestSession`**

```js
requestSession: (sessionId: string, userInfo?: Object) => Promise<void>
```

Opens a new [`ImmersiveSpace`](https://developer.apple.com/documentation/swiftui/immersive-spaces) given it's unique `Id`. Can also accept `userInfo` object that get's passed to the SwiftUI view, checkout [use SwiftUI to render windows](/api/window-manager#optional-5-use-swiftui-to-render-windows) to learn more.

:::warning

Opening an `ImmersiveSpace` can fail in following scenarios:

- `ImmersiveSpace` is not declared.
- `UIApplicationSupportsMultipleScenes` is set to `false`.
- User cancels the request.

:::

#### **`endSession`**

```js
endSession: () => Promise<void>
```

Closes currently open `ImmersiveSpace`.

:::warning
Make sure to set `UIApplicationSupportsMultipleScenes` to `true` in `Info.plist` as described [here](/api/window-manager#uiapplicationsupportsmultiplescenes).
:::
