import React, { useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  ScrollView,
  View,
  FlatList,
  ImageBackground,
  Image,
  Text,
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
import Header from "../../components/header";
import Background from "../../../assets/bg.png";
import { AntDesign } from "@expo/vector-icons";
import { Grey } from "../../helpers/colors";

export const Home = ({ navigation }) => {
  navigation.setOptions({
    headerShown: false,
  });
  const [data, setData] = useState(dataBanner);
  const [list, setList] = useState(dataList);
  const [product, setProduct] = useState(dataProduct);

  const navigate = () => {
    navigation.push("Product");
  };

  const ProductCard = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,1,0.9)"
        onPress={() => navigate()}
      >
        <View style={styles.itemContainer}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <View style={styles.itemDetail}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Rp {item.price}</Text>
            <Text style={styles.info}>{item.amount} Product terjual</Text>
          </View>
          <View>
            <AntDesign name="heart" size={20} color={Grey} />
          </View>
        </View>
      </TouchableHighlight>
    );
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
          style={styles.marginCard}
          data={product}
          renderItem={ProductCard}
          keyExtractor={(item) => `${item.id}`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
