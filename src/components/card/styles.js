import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    margin: 5,
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 100,
    // borderColor: "#cccccc",
    // borderWidth: 0.5,
    borderRadius: 10,
    elevation: 3,
  },
  categoriesPhoto: {
    width: 80,
    height: 80,
    borderRadius: 10,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 8,
  },
  categoriesPrice: {
    marginTop: 3,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#F0701A",
  },
  categoriesInfo: {
    marginBottom: 5,
  },
  itemDetail: {
    flex: 1,
    marginLeft: 10,
  },
});

export default styles;
