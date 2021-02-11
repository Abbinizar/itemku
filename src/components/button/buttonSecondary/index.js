import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const buttonSecondary = ({ title }) => {
  return (
    <TouchableOpacity>
      <View style={styles.buttonSecondary}>
        <Text style={styles.textSecondary}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default buttonSecondary;
