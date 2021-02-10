import React, { useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  ScrollView,
  View,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
  Button,
  TouchableHighlight,
} from "react-native";
import Carousel from "../../components/carousel/index";
import Preview from "../../components/slider/preview";
import FlatListSlider from "../../components/slider/index";
import styles from "./styles";
import { dataBanner } from "../../data/banner";
import { dataList } from "../../data/list";
import { dataProduct } from "../../data/product";
import Card from "../../components/card";
import Header from "../../components/header";
import Background from "../../../assets/bg.png";

export const Home = ({ navigation }) => {
  navigation.setOptions({
    headerShown: false,
  });
  const [data, setData] = useState(dataBanner);
  const [list, setList] = useState(dataList);
  const [product, setProduct] = useState(dataProduct);

  const screenWidth = Math.round(Dimensions.get("window").width);

  const navigate = () => {
    navigation.push("Product");
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.image}>
        <ImageBackground source={Background} style={styles.bg}>
          <Header></Header>
          <View style={styles.separator} />
          <FlatListSlider
            data={data}
            width={275}
            timer={4000}
            component={<Preview />}
            onPress={(item) => alert(JSON.stringify(item))}
            indicatorActiveWidth={20}
            contentContainerStyle={styles.contentStyle}
          />
        </ImageBackground>
        <View style={styles.separator} />

        <Carousel style="stats" itemsPerInterval={4} items={list} />
        <FlatList
          //   onPress={navigate}
          //   onPress={navigation.push("Product")}
          style={styles.marginCard}
          data={product}
          renderItem={Card}
          keyExtractor={(item) => `${item.id}`}
        />
        {/* </TouchableWithoutFeedback> */}
        {/* <Button onPress={navigate} title="klik"></Button> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
