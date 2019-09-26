import React from 'react';
import { View, Text, StyleSheet, ToolbarAndroid, StatusBar } from 'react-native';

const Conversation = (props) => {

  onActionSelected = position => {
    if (position === 0) {
      console.log('ENTROU');
    }
  }
  
  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor='#800090'
        animated={true} />
      <ToolbarAndroid 
        style={styles.toolbar}
        actions={
          [{title: 'mais', icon: require('../assets/ellipsis-v.png'), show:'always'}]
        } 
        onActionSelected={this.onActionSelected}/>
      <Text>{props.navigation.state.params}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4'
  },
  toolbar: {
    backgroundColor: '#800090',
    width: '100%',
    height: 50,
  }
});

export default Conversation;
