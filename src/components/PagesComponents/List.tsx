import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "../PagesStyle/PageList"; // Importe os estilos

const List = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data} // Substitua pelo seu array de dados
        keyExtractor={(item) => item.id.toString()} // Adapte a chave de acordo com seus dados
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image source={item.icon} style={styles.itemIcon} /> {/* Substitua pelo ícone apropriado */}
            <Text style={styles.itemText}>{item.name}</Text> {/* Substitua pelo campo apropriado do seu item */}
          </View>
        )}
      />
    </View>
  );
};

export default List;
