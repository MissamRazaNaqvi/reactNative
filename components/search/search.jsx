import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";

const DATA = [
  {
    id: "1",
    title: "Data Structures",
  },
  {
    id: "2",
    title: "STL",
  },
  {
    id: "3",
    title: "C++",
  },
  {
    id: "4",
    title: "Java",
  },
  {
    id: "5",
    title: "Python",
  },
  {
    id: "6",
    title: "CP",
  },
  {
    id: "7",
    title: "ReactJs",
  },
  {
    id: "8",
    title: "NodeJs",
  },
  {
    id: "9",
    title: "MongoDb",
  },
  {
    id: "10",
    title: "ExpressJs",
  },
  {
    id: "11",
    title: "PHP",
  },
  {
    id: "12",
    title: "MySql",
  },
];

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const renderItem = ({ item }) => <Item title={item.title} />;
const Search = () => {
  const [data, setData] = useState(DATA);
  const [searchValue, setSearchValue] = useState("");

  const searchFunction = (text) => {
    const updatedData = DATA.filter((item) => {
      const item_data = item.title.toUpperCase().trim();
      const text_data = text.toUpperCase().trim();
      return item_data.indexOf(text_data) > -1;
    });
    setData(updatedData);
    setSearchValue(text);
  };

  return (
    <View>
      <SearchBar
        placeholder="Search Here..."
        theme={styles.themeStyle}
        round
        value={searchValue}
        onChangeText={(text) => searchFunction(text)}
        autoCorrect={false}
        inputStyle={styles.inputStyle}
        style={styles.searchStyle}
      />
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    paddingTop: 5,
  },
  title: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 4,
  },

  searchStyle: {
    backgroundColor: "transparent",
    borderBottomColor: "#000",
    borderStartWidth: 2,
  },
  inputStyle: {
    backgroundColor: "transparent",
  },
  themeStyle: {
    color: "black",
    backgroundColor: "transparent",
    borderWidth: 0,
  },
});

export default Search;
