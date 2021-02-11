import { StyleSheet } from "react-native";
import { Orange } from "../../../helpers/colors";

const styles = StyleSheet.create({
  buttonSecondary: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: `${Orange}`,
    height: 40,
    width: 160,
  },

  textSecondary: {
    color: `${Orange}`,
  },
});

export default styles;
