import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "../PagesStyle/PageList";

const List = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image source={item.icon} style={styles.itemIcon} />{" "}
            {/* Substitua pelo ícone apropriado */}
            <Text style={styles.itemText}>{item.name}</Text>{" "}
            {/* Substitua pelo campo apropriado do seu item */}
          </View>
        )}
      />
    </View>
  );
};

export default List;
