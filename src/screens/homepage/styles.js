import { StyleSheet, Platform } from "react-native";
import { Orange } from "../../helpers/colors";

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
  banner: {
    position: "absolute",
  },
  image: {
    backgroundColor: "white",
  },
  bg: {
    flex: 1,
  },
  marginCard: {
    marginTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },

  //card
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    margin: 5,
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 100,
    borderRadius: 10,
    elevation: 2,
  },
  photo: {
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
  name: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 8,
  },
  price: {
    marginTop: 3,
    marginBottom: 5,
    fontWeight: "bold",
    color: `${Orange}`,
  },
  info: {
    marginBottom: 5,
  },
  itemDetail: {
    flex: 1,
    marginLeft: 10,
  },
});

export default styles;
