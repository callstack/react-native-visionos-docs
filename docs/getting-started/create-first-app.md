---
sidebar_position: 2
---

# Create your first App

1. Make sure you have a [proper development environment setup](https://reactnative.dev/docs/environment-setup)
2. Download the latest Xcode (at least 15.2).
3. Install visionOS simulator runtime.
4. Install the latest version of CMake (at least v3.28.0).
5. Initialize the project using this command:

```sh
npx @callstack/react-native-visionos@latest init YourApp
```

6. Next, go to `YourApp/visionos` folder and run following commands to install Pods:

```sh
bundle install
bundle exec pod install
```

7. Now you can run `yarn visionos`
8. (Optional) you also can open project using Xcode (`xed YourApp/visionos/YourApp.xcworkspace`).

- Build the app by clicking the "Run" button in Xcode.
