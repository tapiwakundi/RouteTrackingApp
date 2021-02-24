import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context as LocationContext } from "../context/locationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import StopWatch from "../utils/StopWatch";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    changeName,
    startRecording,
    stopRecording,
  } = useContext(LocationContext);

  const [stopWatch, setStopWatch] = useState(false);

  const startRecordingHandler = () => {
    startRecording();
    setStopWatch(true);
  };

  const stopRecordingHandler = () => {
    stopRecording();
    setStopWatch(false);
  };

  const [saveTrack] = useSaveTrack();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter route name"
        style={styles.input}
        onChangeText={changeName}
        value={name}
      />
      {recording ? (
        <Button
          title="Stop recording"
          onPress={stopRecordingHandler}
          color="red"
        />
      ) : (
        <Button title="Record" onPress={startRecordingHandler} color="red" />
      )}
      {!recording && locations.length ? (
        <Button title="Save recording" onPress={saveTrack} />
      ) : null}
      <StopWatch shouldStart={stopWatch} />
    </View>
  );
};

export default TrackForm;

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 5,
    borderBottomColor: "#dedede",
    borderBottomWidth: 2,
    width: 250,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
