import Icon from "react-native-vector-icons/Ionicons";
import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  Alert,
} from "react-native";
import ReactNativePinView from "react-native-pin-view";

const PasswordScreen = ({ navigation }) => {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            paddingTop: 24,
            paddingBottom: 48,
            color: "black",
            fontSize: 24,
          }}
        >
          비밀번호를 입력해주세요
        </Text>
        <ReactNativePinView
          inputSize={32}
          ref={pinView}
          pinLength={4}
          buttonSize={60}
          onValueChange={(value) => setEnteredPin(value)}
          buttonAreaStyle={{
            marginTop: 24,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "black",
          }}
          inputViewFilledStyle={{
            backgroundColor: "black",
          }}
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: "black",
          }}
          buttonTextStyle={{
            color: "black",
          }}
          onButtonPress={(key) => {
            if (key === "custom_left") {
              pinView.current.clear();
            }
            if (key === "custom_right") {
              Alert.alert("인증결과", "인증이 완료되었습니다.");
              navigation.navigate("CertficationScreen");
            }
            // if (key === "three") {
            //   alert("You can't use 3");
            // }
          }}
          customLeftButton={
            showRemoveButton ? (
              <Icon name={"ios-backspace"} size={36} color={"black"} />
            ) : undefined
          }
          customRightButton={
            showCompletedButton ? (
              <Icon name={"ios-unlock"} size={36} color={"black"} />
            ) : undefined
          }
        />
      </SafeAreaView>
    </>
  );
};
export default PasswordScreen;
