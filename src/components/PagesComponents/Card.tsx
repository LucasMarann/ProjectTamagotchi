import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    margin: 16,
    width: 300,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default Card;
