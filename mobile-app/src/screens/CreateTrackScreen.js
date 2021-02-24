// import '../_mockLocation' -- import this to fake some data
import React, { useContext, useCallback } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import { FontAwesome } from "@expo/vector-icons";

import { Context as LocationContext } from "../context/locationContext";
import TrackForm from "../components/TrackForm";
import colors from "../config/colors";
import { ScrollView } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CreateTrackScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <ScrollView>
      <Image
        source={require("../../assets/images/run.png")}
        style={styles.image}
      />
      <View style={styles.mainContainer}>
        <Map />
        {err ? <Text>PLease enable location services</Text> : null}
        <TrackForm />
      </View>
    </ScrollView>
  );
};

CreateTrackScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={25} />,
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: "cover",
  },
  mainContainer: {
    backgroundColor: colors.white,
    borderRadius: 30,
    marginTop: height * -0.08,
    marginBottom: 100,
    padding: "5%",
  },
});

export default withNavigationFocus(CreateTrackScreen);
