import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppUserName from "../../components/texts/AppUserName";
import Date from "../../components/Date";
import AppGrayHeader from "../../components/texts/AppGrayHeader";
import AppHeadline from "../../components/texts/AppHeadline";
import StatsCard from "../../components/cards/StatsCard";
import colors from "../../config/colors";
import { AntDesign } from "@expo/vector-icons";
import Border from "../../components/Border";
import { ScrollView } from "react-native-gesture-handler";
import NavigationCard from "../../components/cards/Navigationcard";

export default DashboardComponents = ({ name, navigation }) => {
  return (
    <View style={{ paddingLeft: 20 }}>
      <AppGrayHeader>Hello,</AppGrayHeader>
      <AppUserName>{name}</AppUserName>
      <Border />
      <View style={styles.row}>
        <AntDesign name="calendar" size={24} color={colors.gray} />
        <Date />
      </View>

      <AppHeadline>Did you stretch?</AppHeadline>
      <NavigationCard
        color={colors.lightblue}
        destination="Stretches"
        navigation={navigation}
      />
      <AppHeadline>Daily Review</AppHeadline>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StatsCard color={colors.magenta} />
        <StatsCard color={colors.purple} />
      </ScrollView>
      <AppHeadline>Get a run in!</AppHeadline>
      <NavigationCard color={colors.green} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
