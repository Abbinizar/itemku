import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Logo from "../../../assets/itemkulogo.png";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.stretch}></Image>
      <View style={styles.containerLogo}>
        <Feather
          style={styles.logoMargin}
          name="search"
          size={24}
          color="white"
        />
        <Feather name="bell" size={24} color="white" />
      </View>
    </View>
  );
};

export default Header;
