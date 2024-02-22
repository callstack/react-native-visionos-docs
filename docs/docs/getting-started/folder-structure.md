# Folder Structure

React Native visionOS builds upon the same template used for iOS and Android. Native visionOS files are stored inside of `visionos` folder (that's why it's required to run `pod install` in this folder instead of `ios`).

Your folder structure should look like so:

```
SpatialApp
├── __tests__
├── android
│   ├── app
│   └── gradle
├── ios
│   ├── SpatialApp
│   ├── SpatialApp.xcworkspace
│   ├── SpatialApp.xcodeproj
│   └── SpatialAppTests
├── visionos
│   ├── SpatialApp
│   ├── SpatialApp.xcodeproj
│   ├── SpatialApp.xcworkspace
│   └── SpatialAppTests
├── node_modules
└── src
```
