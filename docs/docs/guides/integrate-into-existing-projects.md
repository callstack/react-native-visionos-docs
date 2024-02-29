---
sidebar_position: 1
---

# Integrate into existing projects

React Native visionOS allows you to take your existing React Native codebase and run it on visionOS.

This guide describes how to extend your app's capabilities by adding a new platform.

1. Initialize a new project using `react-native-community/cli`:

Use the same name that you have in your main app.

```sh
npx @callstack/react-native-visionos@latest init <YourAppName>
```

2. Copy `visionos` folder to your destination project.

```sh
cp -r <YourAppName>/visionOS YourApp
```

3. Add the necessary dependencies to your project:

```sh
yarn add @callstack/react-native-visionos
yarn add --dev @callstack/out-of-tree-platforms
```

4. Modify `metro.config.js` to include custom `resolver`.

This resolver rewrites imports from `react-native` -> `@callstack/react-native-visionos` when bundling the app for that platform.

```js
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { getPlatformResolver } = require("@callstack/out-of-tree-platforms");

const config = {
  resolver: {
    resolveRequest: getPlatformResolver({
      platformNameMap: { visionos: "@callstack/react-native-visionos" },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

5. Done!

:::warning
Currently, **Expo** is not supported.
:::
