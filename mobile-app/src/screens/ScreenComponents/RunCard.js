import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as TrackContext } from "../../context/trackContext";
import MapView, { Polyline } from "react-native-maps";
import AppUserName from "../../components/texts/AppUserName";
import AppStatsLabel from "../../components/texts/AppStatsLabel";
import AppStatsData from "../../components/texts/AppStatsData";
import Border from "../../components/Border";

export default RunCard = ({ _id }) => {
  const { state } = useContext(TrackContext);
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Text>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
        scrollEnabled={false}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
      <View style={styles.statswrapper}>
        <View>
          <AppStatsLabel>Distance</AppStatsLabel>
          <AppStatsData>
            {track.distance ? `${track.distance.toFixed(2)} km` : 0}
          </AppStatsData>
        </View>
        <View style={{ marginHorizontal: 20 }} />
        <View style={styles.centered}>
          <AppStatsLabel>Time</AppStatsLabel>
          <AppStatsData>
            {track.time ? `${track.time.toFixed(2)} sec` : 0}
          </AppStatsData>
        </View>
      </View>

      <View style={styles.statswrapper}>
        <View style={styles.centered}>
          <AppStatsLabel>Average Speed</AppStatsLabel>
          <AppStatsData>
            {track.averageSpeed ? `${track.averageSpeed.toFixed(2)} km/min` : 0}
          </AppStatsData>
        </View>
        <View style={{ marginHorizontal: 20 }} />
        <View style={styles.centered}>
          <AppStatsLabel>Average Pace</AppStatsLabel>
          <AppStatsData>
            {track.averagePace ? `${track.averagePace.toFixed(2)} min/km` : 0}
          </AppStatsData>
        </View>
      </View>

      <Border />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
    borderRadius: 20,
  },
  statswrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});
