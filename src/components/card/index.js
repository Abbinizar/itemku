import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const Card = ({ item }) => {
  const onPressCategory = () => {
    // navigation.push("Product");
  };
  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressCategory()}
    >
      <View style={styles.categoriesItemContainer}>
        <Image
          style={styles.categoriesPhoto}
          source={{ uri: item.photo_url }}
        />
        <View style={styles.itemDetail}>
          <Text style={styles.categoriesName}>{item.name}</Text>
          <Text style={styles.categoriesPrice}>Rp {item.price}</Text>
          <Text style={styles.categoriesInfo}>
            {item.amount} Product terjual
          </Text>
        </View>
        <View>
          <AntDesign name="heart" size={20} color="grey" />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;
