import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign as Icon } from 'react-native-vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
     <Icon name="aliwangwang-o1" size={60} color="#FF99CC" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});