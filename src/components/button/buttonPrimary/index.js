import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const ButtonPrimary = ({ title }) => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonPrimary}>
        <Text style={styles.textPrimary}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
