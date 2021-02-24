import React from "react";
import { Text, StyleSheet } from "react-native";

import { View } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../config/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function NavigationCard({ color, navigation, destination }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(destination)}>
      <View style={[styles.card, { backgroundColor: color }]}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: height * 0.25,
    borderRadius: 15,
    padding: 10,
    justifyContent: "space-between",
    marginRight: 25,
  },
  number: {
    fontSize: 60,
    color: colors.white,
    fontWeight: "800",
  },
  stats: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  unit: {
    color: colors.white,
    marginBottom: 9,
    fontSize: 18,
  },
  description: {
    color: colors.green,
    fontSize: 22,
    fontWeight: "500",
  },
});
