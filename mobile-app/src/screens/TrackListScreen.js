import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/trackContext";
import { Context as AuthContext } from "../context/authContext";
import { FontAwesome } from "@expo/vector-icons";
import RunCard from "./ScreenComponents/RunCard";
import AppUserName from "../components/texts/AppUserName";
import { Dimensions } from "react-native";
import colors from "../config/colors";
import Border from "../components/Border";
import Date from "../components/Date";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    setUser();
  }, []);

  return (
    <View style={{ flex: 1, paddingBottom: 290 }}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <StatusBar barStyle="dark-content" />
      <Image
        source={require("../../assets/images/tracks-header.png")}
        style={styles.image}
      />
      <View style={styles.mainContainer}>
        <AppUserName>Previous</AppUserName>
        <AppUserName>Runs</AppUserName>
        <Border />
        <Date />
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <RunCard _id={item._id} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default TrackListScreen;

const styles = StyleSheet.create({
  li: {
    marginVertical: 5,
  },
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: "cover",
  },
  background: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: colors.white,
    borderRadius: 30,
    marginTop: height * -0.08,
    marginBottom: 100,
    padding: "5%",
  },
});
