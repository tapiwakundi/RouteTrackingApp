import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Video } from "expo-av";
const { width, height } = Dimensions.get("window");

export default class VideoPlayer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Video
            source={{
              uri: this.props.source,
            }}
            resizeMode="cover"
            style={styles.video}
            useNativeControls
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  controlBar: {
    position: "absolute",
    bottom: 200,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  video: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: 20,
  },
});
