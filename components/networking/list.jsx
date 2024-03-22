import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, ListView } from "react-native";
import SearchInput from "../search/search";
import { SearchBar } from "react-native-elements";
import Search from "../search/search";
const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);
export default function List() {
  const [list, setList] = useState();
  const [searchValue, setSearchValue] = useState("");
  const searchFunction = (text) => {
    const updatedData = list.filter((item) => {
      const item_data = `${item.title.toUpperCase()}`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    setList(updatedData);
    setSearchValue(text);
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.listStyle}>
      <Search />
      {
        // <SearchBar
        //   placeholder="Search Here..."
        //   lightTheme
        //   round
        //   value={searchValue}
        //   onChangeText={(text) => searchFunction(text)}
        //   autoCorrect={false}
        // />
      }

      {
        // <FlatList
        //   data={list}
        //   renderItem={renderItem}
        //   keyExtractor={(item) => item.id}
        // />
      }
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    // backgroundColor: "gray",
    marginBottom: 5,
    padding: 5,
    paddingTop: 5,
  },
  title: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  listStyle: {
    paddingTop: 160,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
});
