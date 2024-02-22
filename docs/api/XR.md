Manage Immersive Experiences.

## Methods

#### **`requestSession`**

```js
requestSession: (sessionId?: string) => Promise<void>
```

Opens a new [`ImmersiveSpace`](https://developer.apple.com/documentation/swiftui/immersive-spaces) given it's unique `Id`.

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

## Constants

#### **`supportsMultipleScenes`**

```js
supportsMultipleScenes: boolean;
```

A Boolean value that indicates whether the app may display multiple scenes simultaneously. Returns the value of `UIApplicationSupportsMultipleScenes` key from `Info.plist`.

:::info

## UIApplicationSupportsMultipleScenes

In order to use this API, make sure your app supports multiple scenes. Set `UIApplicationSupportsMultipleScenes` to `true` in `Info.plist`:

```json
<dict>
  <key>UIApplicationSceneManifest</key>
  <dict>
    <key>UIApplicationPreferredDefaultSceneSessionRole</key>
    <string>UIWindowSceneSessionRoleApplication</string>
    <key>UIApplicationSupportsMultipleScenes</key>
    // highlight-next-line
    <true/>
    <key>UISceneConfigurations</key>
    <dict/>
  </dict>
</dict>
</plist>

```

:::
