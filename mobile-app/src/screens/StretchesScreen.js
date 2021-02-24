import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../context/trackContext";
import MapView, { Polyline } from "react-native-maps";
import VideoPlayer from "../components/video/VideoPlayer";
import { ScrollView } from "react-native-gesture-handler";

export default StretchesScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <VideoPlayer
        source="https://res.cloudinary.com/dnmlpwow2/video/upload/v1612224779/RPReplay_Final1612222370_up45oi.mov"
        thumbnail="https://res.cloudinary.com/dnmlpwow2/image/upload/v1612226927/thumbnail_k4qgkp.png"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
