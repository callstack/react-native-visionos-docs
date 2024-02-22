# Hover Effects

:::warning

This prop is soon to be removed in favour of applying this effect using `cursor: pointer` style.

:::

This is a prop on `<View />` component allowing to add hover effect. It's applied to all Touchable and Pressable components by default.

If you want to customize it you can use the `visionos_hoverEffect` prop, like so:

```tsx
<TouchableOpacity visionos_hoverEffect="lift">
  <Text>Click me</Text>
</TouchableOpacity>
```

The available options are: `lift` or `highlight`.
