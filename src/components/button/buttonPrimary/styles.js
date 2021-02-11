import { StyleSheet } from "react-native";
import { Orange } from "../../../helpers/colors";

const styles = StyleSheet.create({
  buttonPrimary: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: `${Orange}`,
    height: 40,
    width: 160,
  },

  textPrimary: {
    color: "#fff",
  },
});

export default styles;
