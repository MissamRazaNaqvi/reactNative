import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Pressable,
  Modal,
  Alert,
  StyleSheet,
} from "react-native";
export default function StartingPrac() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <ScrollView>
        <StatusBar animated={true} backgroundColor="black" barsStyle="white" />
        <Button
          title="alert"
          color="black"
          onPress={() =>
            Alert.alert("Alert Box", "Are You Sure", [
              {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed"),
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ])
          }
        ></Button>
        <Button
          onPress={() => {
            setIsVisible(true);
          }}
          title="click to open Model"
        />
        {
          // <Greet name="missam" />
          // <Greet name="vinayak" />
          // <Greet name="jasmin" />
          // <Greet name="divyesh" />
        }
        <Modal
          visible={isVisible}
          onRequestClose={() => {
            setIsVisible(false);
          }}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
            style={{ width: 200, height: 200 }}
          ></Image>
          <Text>This is model component</Text>
          <Button
            onPress={() => {
              setIsVisible(false);
            }}
            title="close"
          />
        </Modal>
        <Pressable
          onPress={() => {
            console.log("image press");
          }}
        >
          {
            //<ActivityIndicator size="large" color="black" />
          }
          <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
            style={{ width: 200, height: 200 }}
          ></Image>
        </Pressable>
        <Text style={styles.text}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: StatusBar.currentHeight,
  //   padding: 20,
  //   marginTop: 25,
  // },
  // scrollView: {
  //   backgroundColor: "pink",
  //   marginHorizontal: 20,
  // },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
});
