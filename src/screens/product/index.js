import React from "react";
import { Image, SafeAreaView, View, Dimensions, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FlatListSlider from "../../components/display/index";
import { dataBanner } from "../../data/banner";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { Orange } from "../../helpers/colors";
import logoStore from "../../../assets/logoStore.png";
import ButtonPrimary from "../../components/button/buttonPrimary";
import ButtonSecondary from "../../components/button/buttonSecondary";

const Product = ({ navigation }) => {
  navigation.setOptions({
    headerTitleStyle: { alignSelf: "center" },
    title: "Product",
    headerRight: () => (
      <View style={styles.iconHeader}>
        <Feather name="shopping-cart" size={24} color="black" />
      </View>
    ),
  });
  const screenWidth = Math.round(Dimensions.get("window").width);

  const Store = () => {
    return (
      <View style={styles.storeContainer}>
        <View style={styles.store}>
          <View>
            <Image style={styles.logo} source={logoStore}></Image>
          </View>
          <View style={styles.nameStoreContainer}>
            <View style={styles.nameStore}>
              <Text style={styles.titleStore}>Garena</Text>
              <Feather name="star" size={14} color={Orange} />
              <Text>(4/5)</Text>
            </View>
            <Text>1.234 Product sales</Text>
            <Text>Active 28 Minute ago</Text>
          </View>
        </View>
        <View style={styles.statusStore}>
          <View style={styles.timeStore}>
            <Feather name="clock" size={14} color="black" />
            <Text>1 Hour</Text>
          </View>
          <Text>Average delivered</Text>
        </View>
      </View>
    );
  };
  const RatingStar = () => {
    return (
      <View style={styles.minimum}>
        <Feather name="star" size={14} color={Orange} />
        <Feather name="star" size={14} color={Orange} />
        <Feather name="star" size={14} color={Orange} />
        <Feather name="star" size={14} color={Orange} />
        <Feather name="star" size={14} color="black" />
        <Text>(4/5)</Text>
      </View>
    );
  };

  const Product = () => {
    return (
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>Voucher Game</Text>
          <Text style={styles.amountProduct}>200 Voucher Shell</Text>
        </View>
        <View style={styles.iconContainer}>
          <Feather
            style={styles.iconMarginRight}
            name="share"
            size={24}
            color="black"
          />
          <Feather name="heart" size={24} color="black" />
        </View>
      </View>
    );
  };

  const AdditionalInfo = () => {
    return (
      <View style={styles.addContainer}>
        <View style={styles.minimum}>
          <Feather name="plus-square" size={14} color="black" />
          <Text>1 Minimum</Text>
        </View>
        <View style={styles.minimum}>
          <Feather name="shopping-bag" size={14} color="black" />
          <Text>50 Sold</Text>
        </View>
        <RatingStar></RatingStar>
      </View>
    );
  };

  const Price = () => {
    return (
      <View style={styles.priceContainer}>
        <View>
          <View style={styles.discContainer}>
            <Text>Rp 200.000</Text>
            <View style={styles.discLabel}>
              <Text style={styles.discTitle}>20%</Text>
            </View>
          </View>
          <Text style={styles.productPrice}>Rp 160.000</Text>
        </View>
        <View style={styles.stock}>
          <Text style={styles.productStock}>Stok 320</Text>
        </View>
      </View>
    );
  };

  const ProductDetails = () => {
    return (
      <View style={styles.productDetails}>
        <View style={styles.detailHeader}>
          <Text style={styles.title}>Product Details</Text>
          <Feather name="chevron-up" size={24} color="black" />
        </View>
        <View style={styles.listContainer}>
          <View style={styles.itemList}>
            <Feather
              style={styles.margins}
              name="box"
              size={14}
              color="black"
            />
            <Text>Digital Product</Text>
          </View>
          <View style={styles.itemList}>
            <Feather
              style={styles.margins}
              name="award"
              size={14}
              color="black"
            />
            <Text>Authorized Product (Legal product)</Text>
          </View>
          <View style={styles.itemList}>
            <Feather
              style={styles.margins}
              name="watch"
              size={14}
              color="black"
            />
            <Text>No Expiration Date</Text>
          </View>
        </View>
      </View>
    );
  };

  const ProductDesc = () => {
    return (
      <View style={styles.desc}>
        <View>
          <Text style={styles.title}>Product Description</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>
            This product has many features, you can use for your business or
            your personal use.{" "}
          </Text>
          <Text style={styles.rightBottom}>Read More</Text>
        </View>
      </View>
    );
  };

  const ProductReview = () => {
    return (
      <View style={styles.desc}>
        <View>
          <Text style={styles.title}>Product Review</Text>
        </View>
        <View style={styles.reviewCard}>
          <View style={styles.reviewItem}>
            <View>
              <Text style={styles.reviewPerson}>Alexander Tindeman</Text>
              <RatingStar></RatingStar>
              <Text>Good Product</Text>
            </View>
            <View>
              <Text>02 February 2021</Text>
            </View>
          </View>
        </View>
        <View style={styles.reviewCard}>
          <View style={styles.reviewItem}>
            <View>
              <Text style={styles.reviewPerson}>Jonas Kanwald</Text>
              <RatingStar></RatingStar>
              <Text>Nice Product</Text>
            </View>
            <View>
              <Text>21 January 2021</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightBottom}>
          <Feather name="chevron-left" size={24} color="black" />
          <View style={styles.pagination}>
            <Text style={styles.numberPage}>1</Text>
          </View>
          <Feather name="chevron-right" size={24} color="black" />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatListSlider
          data={dataBanner}
          timer={2000}
          imageKey={"image"}
          local={false}
          width={screenWidth}
          separator={0}
          loop={true}
          autoscroll={true}
          // currentIndexCallback={(index) => console.log("Index", index)}
          onPress={(item) => alert(JSON.stringify(item))}
          indicator
          animation
        />
        <View style={styles.productContainer}>
          <Product />
          <Price />
          <AdditionalInfo />
          <Store />
        </View>
        <View style={styles.line}></View>
        <View style={styles.productContainer}>
          <ProductDetails />
        </View>
        <View style={styles.line}></View>
        <View style={styles.productContainer}>
          <ProductDesc />
        </View>
        <View style={styles.line}></View>
        <View style={styles.productContainer}>
          <ProductReview />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonSecondary title="Add To Cart" />
          <ButtonPrimary title="Buy Now" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;
