import { StyleSheet, Dimensions } from "react-native";
import { Grey, Orange, Red } from "../../helpers/colors";

const styles = StyleSheet.create({
  margins: {
    marginRight: 5,
  },

  productContainer: {
    padding: 20,
  },
  iconHeader: {
    marginRight: 20,
  },

  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  iconMarginRight: {
    marginRight: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  amountProduct: {
    fontSize: 18,
  },

  discContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  discLabel: {
    padding: 2,
    backgroundColor: `${Orange}`,
    borderRadius: 5,
    marginLeft: 5,
  },

  discTitle: {
    color: "#fff",
  },

  priceContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  productPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: `${Red}`,
  },

  stock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  productStock: {
    fontSize: 18,
    color: `${Orange}`,
  },

  addContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    height: 40,
    padding: 5,
    backgroundColor: `${Grey}`,
    marginTop: 10,
  },

  minimum: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  storeContainer: {
    flex: 1,
    flexDirection: "row",
    height: 80,
    backgroundColor: `${Grey}`,
    marginTop: 10,
    elevation: 3,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
  },

  logo: {
    width: 50,
    height: 50,
  },

  nameStore: {
    flexDirection: "row",
    alignItems: "center",
  },

  timeStore: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusStore: {
    alignItems: "flex-end",
  },

  nameStoreContainer: {
    marginLeft: 10,
  },

  store: {
    flexDirection: "row",
    alignItems: "center",
  },

  productDetails: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
  },

  detailHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  listContainer: {
    padding: 5,
    marginTop: 5,
  },

  itemList: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  desc: {
    flex: 1,
    flexDirection: "column",
    marginTop: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  buttonSecondary: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: `${Orange}`,
    height: 40,
    width: 150,
  },

  textSecondary: {
    color: `${Orange}`,
  },

  buttonPrimary: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: `${Orange}`,
    height: 40,
    width: 150,
  },

  textPrimary: {
    color: "#fff",
  },
});

export default styles;
