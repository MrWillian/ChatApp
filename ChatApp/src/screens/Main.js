import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, FlatList, View, Image, Text } from 'react-native';

const Main = () => {
  state = {
    messages: [{
      _id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 1',
      message: 'Hello my friend! How are you???',
    }, {
      _id: 2,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 3',
      message: 'Hey Bro!!!',
    },{
      _id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 1',
      message: 'Hello!',
    }, {
      _id: 2,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 3',
      message: 'Hey Bro!!!',
    },{
      _id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 1',
      message: 'Hello!',
    }, {
      _id: 2,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 3',
      message: 'Hey Bro!!!',
    },{
      _id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 1',
      message: 'Hello!',
    }, {
      _id: 2,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 3',
      message: 'Hey Bro!!!',
    },{
      _id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 1',
      message: 'Hello!',
    }, {
      _id: 2,
      avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4',
      sender: 'Willian 3',
      message: 'Hey Bro!!!',
    }]
  }

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar 
        backgroundColor='#800090'
        animated={true} />
        <FlatList
          data={this.state.messages}
          renderItem={({ item }) => <Item item={item} />} 
          keyExtractor={item => item._id} />
    </SafeAreaView>
  );
}

const Item = ({ item }) => (
  <SafeAreaView style={styles.containerItem}>
    <Image source={{ uri: item.avatar }} style={styles.imageItem} />
    <View style={styles.containerItemText}>
      <Text style={styles.itemName}>{item.sender}</Text>
      <Text style={styles.itemMessage}>{item.message}</Text>
    </View>
  </SafeAreaView>
);

Main.navigationOptions = {
  title: 'Conversas',
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 10,
    bottom: 10,
  },
  containerItem: {
    width: '100%',
    height: 65,
    borderBottomColor: '#CCC',
    borderBottomWidth: 0.7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageItem: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: '#CCC',
    margin: 10,
  },
  containerItemText: {},
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111',
  },
  itemMessage: {
    fontSize: 12,
    color: '#444',
  }
});

export default Main;
