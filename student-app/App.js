import React from "react";
import { Image, StyleSheet, Text, View, Platform } from "react-native";
import anu from "./assets/icon.jpg";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import { TouchableOpacity } from "react-native-gesture-handler";
import uploadToAnonymousFilesAsync from "anonymous-files";
// import { enableScreens } from " react-native-screens";
// import { createNativeStackNavigator } from "react-native-screens/native-stack";

export default function App() {
  var homeStatus = 1;

  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    if (Platform.OS === "web") {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(
        `uh oh, sharing isn't available for sharing at:${selectedImage.remoteUri}`
      );
      return;
    }
    Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this Photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={anu} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>선택해주세요</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 152,
    height: 79,
    marginBottom: 10,
  },
  instructions: { color: "#888", fontSize: 18, marginHorizontal: 15 },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: { fontSize: 20, color: "#fff" },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
