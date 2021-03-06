import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

export default Preview = ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
}) => {
  return (
    <TouchableOpacity
      style={[styles.videoContainer]}
      onPress={() => onPress(item)}
    >
      <View style={[styles.imageContainer, styles.shadow]}>
        <Image
          style={[styles.videoPreview, active ? {} : { height: 120 }]}
          source={{ uri: item[imageKey] }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: 275,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  videoPreview: {
    width: 275,
    height: 155,
    borderRadius: 8,
    resizeMode: "cover",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
