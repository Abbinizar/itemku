import { StyleSheet, Dimensions } from "react-native";
import { Blue, Grey, Orange, Red } from "../../helpers/colors";

const styles = StyleSheet.create({
  margins: {
    marginRight: 5,
  },

  line: {
    height: 10,
    backgroundColor: `${Grey}`,
    marginTop: 10,
    marginBottom: 10,
  },

  productContainer: {
    paddingLeft: 20,
    paddingRight: 20,
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
    alignItems: "flex-end",
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
    fontSize: 20,
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
    borderRadius: 2,
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
    marginBottom: 10,
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
    // marginTop: 10,
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
    // marginTop: 10,
  },

  reviewItem: {
    height: 70,
    borderRadius: 2,
    padding: 10,
    backgroundColor: `${Grey}`,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  reviewPerson: {
    fontWeight: "bold",
  },

  reviewCard: {
    marginTop: 10,
  },

  rightBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "flex-end",
    color: `${Blue}`,
    marginTop: 10,
  },

  pagination: {
    backgroundColor: `${Orange}`,
    height: 20,
    borderRadius: 5,
    width: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 2,
    marginLeft: 5,
    marginRight: 5,
  },

  numberPage: {
    fontWeight: "bold",
    color: "#fff",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    backgroundColor: `${Grey}`,
    height: 70,
    padding: 15,
    marginTop: 10,
  },
});

export default styles;
