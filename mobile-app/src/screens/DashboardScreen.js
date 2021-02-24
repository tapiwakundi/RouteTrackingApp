import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/authContext";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DashboardComponents from "./ScreenComponents/DashboardComponents";

export default DashboardScreen = (props) => {
  const {
    setUser,
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    setUser();
  }, []);

  if (!user) {
    return <ActivityIndicator />;
  } else {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <DashboardComponents
          name={user.firstName}
          navigation={props.navigation}
        />
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: "12%",
  },
});

DashboardScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
