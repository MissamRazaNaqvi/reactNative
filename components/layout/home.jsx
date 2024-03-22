import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/originals/73/ea/7b/73ea7ba062d9fc737d2bc1643cfc497d.jpg",
        }}
        // resizeMode="contain"
        style={styles.image}
      >
        <List />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
    // margin: 20,
  },
  // text: {
  //   color: "white",
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   backgroundColor: "#000000c0",
  // },
  // listContainer: {
  //   padding: 10,
  // },
  // item: {
  //   borderRadius: 10,
  //   backgroundColor: "gray",
  //   marginBottom: 5,
  //   padding: 5,
  // },
  // title: {},
  // scrollView: {
  //   backgroundColor: "",
  //   marginHorizontal: 20,
  // },
});
