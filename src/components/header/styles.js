import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  background: {
    flex: 1,
    height: 100,
    backgroundColor: "blue",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  stretch: {
    width: 120,
    height: 50,
    resizeMode: "stretch",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "flex-end",
    marginRight: 10,
    flexDirection: "row",
  },
  logoMargin: {
    marginRight: 20,
  },
});

export default styles;
