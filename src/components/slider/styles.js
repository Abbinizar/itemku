import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  image: {
    height: 230,
    resizeMode: "stretch",
  },
  indicatorContainerStyle: {
    marginTop: 18,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  containers: {},
});

export default styles;
