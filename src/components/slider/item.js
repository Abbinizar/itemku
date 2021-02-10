import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import styles from "./styles";

export default ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
}) => {
  return (
    <TouchableOpacity style={styles.containers} onPress={() => onPress(index)}>
      <Image
        style={[styles.image, style, { height: height }]}
        source={local ? item[imageKey] : { uri: item[imageKey] }}
      />
    </TouchableOpacity>
  );
};
