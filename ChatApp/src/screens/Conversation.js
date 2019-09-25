import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Conversation = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.navigation.state.params}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080'
  }
});

export default Conversation;
