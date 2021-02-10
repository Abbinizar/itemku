import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  stat: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexBasis: "33%",
    flex: 1,
    maxWidth: "33%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  statLabel: {
    width: "100%",
    textAlign: "left",
    fontSize: 12,
    fontWeight: "600",
    paddingTop: 20,
  },
});

export default styles;
