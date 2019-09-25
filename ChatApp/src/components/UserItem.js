import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const UserItem = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.avatar }} />
      <TouchableOpacity style={styles.textContainer} 
        onPress={() => { props.navigate('Conversation', props.id) }} >
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.cellNumber}>{props.cellNumber}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  cellNumber: {
    fontSize: 10,
  }
});

export default UserItem;
