import { StyleSheet } from "react-native";

import { colors } from "./vars";

// -----------------------------------------------------------

let textColors = {};

Object.keys(colors).forEach((c) => {
  let className = c.charAt(0).toUpperCase() + c.slice(1);
  textColors[`text${className}`] = { color: colors[c] };
});

export const textColorStyles = StyleSheet.create(textColors);

// ----------------------------------------------------------

let bgColors = {};

Object.keys(colors).forEach((c) => {
  let className = c.charAt(0).toUpperCase() + c.slice(1);
  bgColors[`bg${className}`] = { backgroundColor: colors[c] };
});

export const bgColorStyles = StyleSheet.create(bgColors);
